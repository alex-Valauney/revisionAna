// --- APPLICATION DE REVISION SPE MATHS ---

// Debug on-screen console
(function() {
  const logDiv = document.createElement("div");
  logDiv.id = "debug-console";
  logDiv.style.position = "fixed";
  logDiv.style.bottom = "0";
  logDiv.style.left = "0";
  logDiv.style.width = "100%";
  logDiv.style.maxHeight = "120px";
  logDiv.style.overflowY = "auto";
  logDiv.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  logDiv.style.color = "#00f5d4";
  logDiv.style.fontFamily = "monospace";
  logDiv.style.fontSize = "11px";
  logDiv.style.padding = "8px";
  logDiv.style.zIndex = "10000";
  logDiv.style.borderTop = "2px solid #9d4edd";
  
  function log(msg, type = "info") {
    const p = document.createElement("p");
    p.style.margin = "0";
    p.style.color = type === "error" ? "#ff007f" : "#00f5d4";
    p.textContent = `[${type.toUpperCase()}] ${msg}`;
    logDiv.appendChild(p);
    logDiv.scrollTop = logDiv.scrollHeight;
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(logDiv);
  });

  window.addEventListener("error", (e) => {
    log(`${e.message} at ${e.filename}:${e.lineno}`, "error");
  });

  // Export globally
  window.debugLog = log;
})();

document.addEventListener("DOMContentLoaded", () => {
  // --- ETAT DE L'APPLICATION ---
  const state = {
    currentTab: "dashboard",
    selectedCategory: "suites",
    activeExercises: [],
    currentExerciseIndex: 0,
    userSelection: null, // QCM selection index or open answer string
    isValidated: false,
    
    // Stats de progression (chargées depuis localStorage ou par défaut)
    stats: {
      completedExercises: {}, // Map d'ID d'exercices résolus: 'correct' ou 'wrong'
      streakCount: 0,
      lastActiveDate: null,
      totalCorrect: 0,
      totalAttempts: 0
    }
  };

  // --- INITIALISATION ---
  loadStats();
  updateStreak();
  initRouting();
  initScratchpad("scratch-canvas", "scratchpad-toolbar-main");
  initScratchpad("mini-scratch-canvas", "scratchpad-toolbar-mini");
  renderDashboard();
  renderCheatsheet();

  // Activer le premier onglet
  switchTab("dashboard");

  // --- ROUTING / ONGLET ---
  function initRouting() {
    const navLinks = document.querySelectorAll(".nav-link[data-tab]");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const tabId = link.getAttribute("data-tab");
        switchTab(tabId);
      });
    });
  }

  function switchTab(tabId) {
    state.currentTab = tabId;
    
    // Mettre à jour l'interface des onglets
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
    
    const activeTab = document.getElementById(tabId);
    if (activeTab) activeTab.classList.add("active");
    
    const activeLink = document.querySelector(`.nav-link[data-tab="${tabId}"]`);
    if (activeLink) activeLink.parentElement.classList.add("active");
    
    // Actions spécifiques lors du changement d'onglet
    if (tabId === "dashboard") {
      renderDashboard();
    } else if (tabId === "exercises") {
      if (state.activeExercises.length === 0) {
        startChapter(state.selectedCategory);
      } else {
        // Redimensionner le mini canvas si déjà actif
        setTimeout(() => resizeCanvas("mini-scratch-canvas"), 50);
      }
    } else if (tabId === "scratchpad") {
      // Redimensionner le canvas pour occuper tout l'espace disponible
      setTimeout(() => resizeCanvas("scratch-canvas"), 50);
    }

    // Relancer le rendu des formules LaTeX pour l'onglet actif
    renderMath(activeTab);

    // Re-générer les icônes Lucide dynamiques
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // --- GESTION DU LOCAL STORAGE & PROGRESSION ---
  function loadStats() {
    const savedStats = localStorage.getItem("spe_maths_bac_stats");
    if (savedStats) {
      try {
        state.stats = { ...state.stats, ...JSON.parse(savedStats) };
      } catch (e) {
        // Données corrompues ignorées silencieusement
      }
    }
  }

  function saveStats() {
    localStorage.setItem("spe_maths_bac_stats", JSON.stringify(state.stats));
  }

  function updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = state.stats.lastActiveDate;

    if (!lastDate) {
      state.stats.streakCount = 1;
    } else {
      const diffTime = Math.abs(new Date(today) - new Date(lastDate));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Activité le jour suivant : on incrémente
        state.stats.streakCount += 1;
      } else if (diffDays > 1) {
        // Rupture de streak : on reset
        state.stats.streakCount = 1;
      }
      // Si diffDays === 0 (même jour), on ne fait rien
    }
    
    state.stats.lastActiveDate = today;
    saveStats();
  }

  // --- UTILITAIRES DE CATEGORIES ET CHARGEMENT DYNAMIQUE ---
  function getCategoryById(id) {
    const nid = parseInt(id);
    if (nid >= 1 && nid <= 20) return "suites";
    if (nid >= 21 && nid <= 40) return "fonctions";
    if (nid >= 41 && nid <= 60) return "geometrie";
    if (nid >= 61 && nid <= 80) return "probabilites";
    if (nid >= 81 && nid <= 100) return "integration";
    return "";
  }

  const loadedScripts = {};

  function loadChapterExercises(category, callback) {
    if (window.EXERCISES_BY_CAT && window.EXERCISES_BY_CAT[category]) {
      callback();
      return;
    }

    if (loadedScripts[category]) {
      const interval = setInterval(() => {
        if (window.EXERCISES_BY_CAT && window.EXERCISES_BY_CAT[category]) {
          clearInterval(interval);
          callback();
        }
      }, 50);
      return;
    }

    loadedScripts[category] = true;
    window.debugLog(`Chargement du chapitre ${category}...`, "info");

    const script = document.createElement("script");
    script.src = `exercises_${category}.js`;
    script.async = true;
    script.onload = () => {
      window.debugLog(`Chapitre ${category} chargé.`, "info");
      callback();
    };
    script.onerror = () => {
      window.debugLog(`Erreur de chargement pour ${category}.`, "error");
      loadedScripts[category] = false;
    };
    document.body.appendChild(script);
  }

  // --- RENDU DU DASHBOARD ---
  function renderDashboard() {
    // Calcul des statistiques globales
    const totalCount = 100;
    const completedList = Object.keys(state.stats.completedExercises);
    const solvedCount = completedList.length;
    
    const successRate = state.stats.totalAttempts > 0 
      ? Math.round((state.stats.totalCorrect / state.stats.totalAttempts) * 100)
      : 0;

    // Mettre à jour l'affichage des stats dans le DOM
    document.getElementById("stat-solved").textContent = solvedCount;
    document.getElementById("stat-success").textContent = `${successRate}%`;
    document.getElementById("stat-streak").textContent = `${state.stats.streakCount} J`;
    document.getElementById("dashboard-streak-val").textContent = `${state.stats.streakCount} Jour${state.stats.streakCount > 1 ? 's' : ''}`;

    // Mettre à jour la grille des chapitres
    const chapters = ["suites", "fonctions", "geometrie", "probabilites", "integration"];
    
    chapters.forEach(cat => {
      const catTotal = 20; // 20 questions par chapitre
      
      const catSolved = Object.keys(state.stats.completedExercises).filter(id => {
        return getCategoryById(id) === cat && state.stats.completedExercises[id] === 'correct';
      }).length;
      
      const progressPercent = catTotal > 0 ? Math.round((catSolved / catTotal) * 100) : 0;
      
      // Update DOM elements
      const fillEl = document.getElementById(`progress-fill-${cat}`);
      const textEl = document.getElementById(`progress-text-${cat}`);
      const btnEl = document.getElementById(`btn-start-${cat}`);
      
      if (fillEl) fillEl.style.width = `${progressPercent}%`;
      if (textEl) textEl.textContent = `${progressPercent}%`;
      
      if (btnEl) {
        // Re-lier les écouteurs pour lancer les exercices
        btnEl.replaceWith(btnEl.cloneNode(true));
        const newBtn = document.getElementById(`btn-start-${cat}`);
        newBtn.addEventListener("click", () => {
          startChapter(cat);
        });
      }
    });

    // Rendre les formules LaTeX du tableau de bord
    renderMath(document.getElementById("dashboard"));
  }

  // --- CHARGEMENT D'UN CHAPITRE ---
  function startChapter(category) {
    state.selectedCategory = category;
    
    loadChapterExercises(category, () => {
      state.activeExercises = window.EXERCISES_BY_CAT[category] || [];
      state.currentExerciseIndex = 0;
      
      // Aller à l'onglet exercice
      switchTab("exercises");
      
      // Charger la première question
      loadExercise();
    });
  }

  // --- RENDU ET GESTION DES EXERCICES ---
  function loadExercise() {
    if (state.activeExercises.length === 0) return;
    
    const ex = state.activeExercises[state.currentExerciseIndex];
    state.userSelection = null;
    state.isValidated = false;

    // Reset UI
    document.getElementById("hint-box").style.display = "none";
    document.getElementById("hint-trigger").style.display = ex.hint ? "inline-flex" : "none";
    document.getElementById("correction-box").style.display = "none";
    
    // Boutons d'action
    const submitBtn = document.getElementById("exercise-submit");
    const nextBtn = document.getElementById("exercise-next");
    submitBtn.style.display = "inline-flex";
    submitBtn.disabled = true;
    nextBtn.style.display = "none";

    // Titre et métadonnées
    document.getElementById("exercise-title").textContent = ex.title;
    
    const catBadge = document.getElementById("exercise-cat-badge");
    catBadge.textContent = getCategoryLabel(ex.category);
    
    const diffBadge = document.getElementById("exercise-diff-badge");
    diffBadge.className = `difficulty-pill ${ex.difficulty}`;
    diffBadge.textContent = ex.difficulty;

    // Source / Provenance
    const sourceRow = document.getElementById("exercise-source-row");
    const sourceBadge = document.getElementById("exercise-source-badge");
    if (ex.source) {
      sourceBadge.textContent = ex.source;
      sourceRow.style.display = "flex";
    } else {
      sourceRow.style.display = "none";
    }

    // Enoncé en LaTeX / HTML
    const qText = document.getElementById("question-text");
    qText.innerHTML = ex.question;

    // Rendu de la zone de saisie (QCM ou Ouvert)
    const answerArea = document.getElementById("dynamic-answer-area");
    answerArea.innerHTML = "";

    if (ex.type === "qcm") {
      const grid = document.createElement("div");
      grid.className = "options-grid";
      
      ex.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-button";
        btn.setAttribute("data-index", idx);
        btn.innerHTML = `
          <span class="option-check"></span>
          <span class="option-label">${opt}</span>
        `;
        
        btn.addEventListener("click", () => {
          if (state.isValidated) return;
          
          // Gérer la sélection visuelle
          grid.querySelectorAll(".option-button").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          
          state.userSelection = idx;
          submitBtn.disabled = false;
        });

        grid.appendChild(btn);
      });
      answerArea.appendChild(grid);
    } else {
      // Question ouverte
      const group = document.createElement("div");
      group.className = "input-group";
      
      const input = document.createElement("input");
      input.type = "text";
      input.className = "text-input";
      input.placeholder = "Saisissez votre réponse numérique ou exacte...";
      
      input.addEventListener("input", (e) => {
        if (state.isValidated) return;
        state.userSelection = e.target.value.trim();
        submitBtn.disabled = state.userSelection.length === 0;
      });

      // Permettre de valider avec la touche Entrée
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !submitBtn.disabled && !state.isValidated) {
          validateAnswer();
        }
      });

      group.appendChild(input);
      answerArea.appendChild(group);
    }

    // Effacer les indices et corrections précédents (remplis à la demande)
    document.getElementById("hint-text").innerHTML = "";
    document.getElementById("correction-text").innerHTML = "";

    // Mettre à jour la grille de navigation latérale des questions
    renderSidebarNav();

    // Rendre les mathématiques KaTeX dans le conteneur d'exercices
    renderMath(document.getElementById("exercises"));
    
    // Redimensionner le mini brouillon pour cet exercice
    setTimeout(() => resizeCanvas("mini-scratch-canvas"), 50);
  }

  // Relancer le rendu des formules LaTeX
  function renderMath(element) {
    const target = element || document.body;
    if (typeof renderMathInElement === "function" && target) {
      renderMathInElement(target, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
      });
    }
  }

  // Grille latérale des exercices du chapitre
  function renderSidebarNav() {
    const navGrid = document.getElementById("question-status-grid");
    navGrid.innerHTML = "";
    
    state.activeExercises.forEach((ex, idx) => {
      const dot = document.createElement("div");
      dot.className = "status-dot";
      if (idx === state.currentExerciseIndex) dot.classList.add("active");
      
      const status = state.stats.completedExercises[ex.id];
      if (status === 'correct') dot.classList.add("correct");
      if (status === 'wrong') dot.classList.add("wrong");
      
      dot.textContent = idx + 1;
      
      dot.addEventListener("click", () => {
        state.currentExerciseIndex = idx;
        loadExercise();
      });
      
      navGrid.appendChild(dot);
    });
  }

  // --- SOUUMISSION / VALIDATION DE LA REPONSE ---
  function validateAnswer() {
    if (state.isValidated) return;
    
    const ex = state.activeExercises[state.currentExerciseIndex];
    state.isValidated = true;
    
    let isCorrect = false;

    if (ex.type === "qcm") {
      const selectedIdx = state.userSelection;
      const options = document.querySelectorAll(".option-button");
      
      options.forEach((btn, idx) => {
        btn.classList.remove("selected");
        if (idx === ex.correctAnswer) {
          btn.classList.add("correct");
        } else if (idx === selectedIdx) {
          btn.classList.add("wrong");
        }
      });

      isCorrect = (selectedIdx === ex.correctAnswer);
    } else {
      // Question ouverte
      const input = document.querySelector(".text-input");
      const answerVal = state.userSelection.toLowerCase().replace(/\s+/g, '');
      const correctVal = ex.correctAnswer.toLowerCase().replace(/\s+/g, '');

      // Comparaison basique robuste
      if (answerVal === correctVal) {
        input.classList.add("option-button", "correct");
        isCorrect = true;
      } else {
        input.classList.add("option-button", "wrong");
        // Afficher la bonne réponse sous le champ de saisie
        const corrLabel = document.createElement("div");
        corrLabel.style.color = "var(--neon-green)";
        corrLabel.style.fontSize = "0.85rem";
        corrLabel.style.marginTop = "0.5rem";
        corrLabel.style.fontWeight = "600";
        corrLabel.innerHTML = `Réponse correcte attendue : $${ex.correctAnswer}$`;
        input.parentElement.appendChild(corrLabel);
        renderMath();
      }
      input.disabled = true;
    }

    // Mettre à jour les statistiques
    state.stats.totalAttempts += 1;
    if (isCorrect) {
      state.stats.totalCorrect += 1;
      state.stats.completedExercises[ex.id] = 'correct';
    } else {
      // Si déjà marqué correct dans le passé, on conserve correct
      if (state.stats.completedExercises[ex.id] !== 'correct') {
        state.stats.completedExercises[ex.id] = 'wrong';
      }
    }
    
    // Mettre à jour la date active pour le streak
    const today = new Date().toISOString().split('T')[0];
    state.stats.lastActiveDate = today;
    saveStats();

    // Afficher la correction détaillée avec son texte et rendu mathématique
    document.getElementById("correction-text").innerHTML = ex.explanation;
    document.getElementById("correction-box").style.display = "block";
    renderMath(document.getElementById("correction-box"));

    // Mettre à jour les boutons
    document.getElementById("exercise-submit").style.display = "none";
    
    const nextBtn = document.getElementById("exercise-next");
    nextBtn.style.display = "inline-flex";
    if (state.currentExerciseIndex === state.activeExercises.length - 1) {
      nextBtn.textContent = "Terminer le chapitre";
      nextBtn.innerHTML = 'Terminer <i class="lucide-check-circle"></i>';
    } else {
      nextBtn.textContent = "Question Suivante";
      nextBtn.innerHTML = 'Suivant <i class="lucide-arrow-right"></i>';
    }

    renderSidebarNav();
  }

  // Relier le bouton de soumission
  document.getElementById("exercise-submit").addEventListener("click", validateAnswer);

  // Relier le bouton suivant
  document.getElementById("exercise-next").addEventListener("click", () => {
    if (state.currentExerciseIndex < state.activeExercises.length - 1) {
      state.currentExerciseIndex += 1;
      loadExercise();
    } else {
      // Fin du chapitre
      switchTab("dashboard");
    }
  });

  // Relier le bouton indice
  const hintTrigger = document.getElementById("hint-trigger");
  hintTrigger.addEventListener("click", () => {
    const hintBox = document.getElementById("hint-box");
    const hintText = document.getElementById("hint-text");
    const ex = state.activeExercises[state.currentExerciseIndex];
    if (hintBox.style.display === "none") {
      hintText.innerHTML = ex.hint || "";
      hintBox.style.display = "block";
      renderMath(hintBox);
    } else {
      hintBox.style.display = "none";
    }
  });

  // --- RENDU DES FICHES DE COURS ---
  function renderCheatsheet() {
    const container = document.getElementById("cheatsheet-sections");
    container.innerHTML = "";

    window.FORMULAS_DATA.forEach(section => {
      const card = document.createElement("div");
      card.className = "formula-section-card glass-card";
      
      let itemsHtml = "";
      section.formulas.forEach(form => {
        itemsHtml += `
          <div class="formula-item-box" data-name="${form.name.toLowerCase()}" data-desc="${form.desc.toLowerCase()}">
            <h4 class="formula-title">${form.name}</h4>
            <p class="formula-desc">${form.desc}</p>
          </div>
        `;
      });

      card.innerHTML = `
        <h3><i class="lucide-book-open"></i> ${section.title}</h3>
        <div class="formulas-list">
          ${itemsHtml}
        </div>
      `;

      container.appendChild(card);
    });

    // Moteur de recherche en temps réel
    const searchInput = document.getElementById("cheatsheet-search");
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      document.querySelectorAll(".formula-item-box").forEach(box => {
        const name = box.getAttribute("data-name");
        const desc = box.getAttribute("data-desc");
        
        if (name.includes(query) || desc.includes(query)) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });

      // Cacher les sections vides
      document.querySelectorAll(".formula-section-card").forEach(card => {
        const visibleBoxes = card.querySelectorAll(".formula-item-box[style='display: block;']");
        const allBoxes = card.querySelectorAll(".formula-item-box");
        
        // Si aucune boîte n'est visible (ou style cache), masquer la section complète
        let hasVisible = false;
        allBoxes.forEach(b => {
          if (b.style.display !== "none") hasVisible = true;
        });
        
        if (hasVisible) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });

    // Rendre les formules du formulaire
    if (typeof renderMathInElement === "function") {
      renderMathInElement(container, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  // --- DRAFT SCRATCHPAD (CANVAS) ---
  function initScratchpad(canvasId, toolbarId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const toolbar = document.getElementById(toolbarId);
    const textareaId = canvasId.replace("-canvas", "-text");
    const textarea = document.getElementById(textareaId);
    
    let isDrawing = false;
    let color = "#ffffff";
    let brushSize = 3;
    let activeMode = "draw"; // "draw" ou "text"
    
    // Coordonnées précédentes
    let lastX = 0;
    let lastY = 0;

    // Gérer les boutons de sélection de mode (Dessin vs Clavier)
    if (toolbar) {
      const modeSelector = toolbar.querySelector(".scratchpad-mode-selector");
      const drawTools = toolbar.querySelector(".draw-tools");
      
      if (modeSelector) {
        const modeBtns = modeSelector.querySelectorAll(".mode-btn");
        modeBtns.forEach(btn => {
          btn.addEventListener("click", () => {
            modeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            activeMode = btn.getAttribute("data-mode");
            
            if (activeMode === "text") {
              canvas.style.display = "none";
              if (textarea) {
                textarea.style.display = "block";
                textarea.focus();
              }
              if (drawTools) {
                drawTools.style.display = "none";
              }
            } else {
              canvas.style.display = "block";
              if (textarea) {
                textarea.style.display = "none";
              }
              if (drawTools) {
                drawTools.style.display = "flex";
              }
              // Réajuster la taille après affichage
              resizeCanvas(canvasId);
            }
          });
        });
      }

      // Couleurs
      toolbar.querySelectorAll(".color-dot").forEach(dot => {
        dot.addEventListener("click", () => {
          toolbar.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
          dot.classList.add("active");
          
          if (dot.classList.contains("white")) color = "#ffffff";
          else if (dot.classList.contains("teal")) color = "var(--neon-teal)";
          else if (dot.classList.contains("purple")) color = "var(--neon-purple)";
          else if (dot.classList.contains("pink")) color = "var(--neon-pink)";
          else if (dot.classList.contains("yellow")) color = "var(--neon-yellow)";
          
          // Si on utilise une variable CSS, la résoudre dans le canvas
          if (color.startsWith("var")) {
            color = getComputedStyle(document.documentElement).getPropertyValue(color.slice(4, -1)).trim();
          }
        });
      });

      // Taille pinceau
      const brushInput = toolbar.querySelector(".brush-size-input");
      if (brushInput) {
        brushInput.addEventListener("input", (e) => {
          brushSize = e.target.value;
        });
      }

      // Effacer
      const clearBtn = toolbar.querySelector(".btn-clear");
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          if (activeMode === "text") {
            if (textarea) textarea.value = "";
          } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        });
      }

      // Gomme
      const eraserBtn = toolbar.querySelector(".btn-eraser");
      if (eraserBtn) {
        eraserBtn.addEventListener("click", () => {
          toolbar.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
          color = "#110e20"; // Même couleur que le fond
        });
      }
    }

    // Gestion du dessin (Souris)
    canvas.addEventListener("mousedown", (e) => {
      if (activeMode !== "draw") return;
      isDrawing = true;
      const coords = getCanvasCoords(e, canvas);
      lastX = coords.x;
      lastY = coords.y;
    });

    canvas.addEventListener("mousemove", (e) => {
      if (!isDrawing || activeMode !== "draw") return;
      const coords = getCanvasCoords(e, canvas);
      draw(lastX, lastY, coords.x, coords.y);
      lastX = coords.x;
      lastY = coords.y;
    });

    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseout", () => isDrawing = false);

    // Gestion du dessin (Tactile/Mobile)
    canvas.addEventListener("touchstart", (e) => {
      if (activeMode !== "draw") return;
      isDrawing = true;
      const coords = getCanvasCoords(e.touches[0], canvas);
      lastX = coords.x;
      lastY = coords.y;
      e.preventDefault();
    }, { passive: false });

    canvas.addEventListener("touchmove", (e) => {
      if (!isDrawing || activeMode !== "draw") return;
      const coords = getCanvasCoords(e.touches[0], canvas);
      draw(lastX, lastY, coords.x, coords.y);
      lastX = coords.x;
      lastY = coords.y;
      e.preventDefault();
    }, { passive: false });

    canvas.addEventListener("touchend", () => isDrawing = false);

    function draw(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    }

    function getCanvasCoords(e, canvas) {
      const rect = canvas.getBoundingClientRect();
      // Calculer l'échelle entre les dimensions CSS et les dimensions réelles du canvas
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    }
  }

  // Ajustement de taille dynamique
  function resizeCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || canvas.style.display === "none") return;
    
    const container = canvas.parentElement;
    
    // Sauvegarder le contenu actuel
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext("2d");
    tempCtx.drawImage(canvas, 0, 0);

    // Redimensionner
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Restaurer le contenu
    const ctx = canvas.getContext("2d");
    ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, canvas.width, canvas.height);
  }

  // Écouter le redimensionnement général pour adapter le brouillon
  window.addEventListener("resize", () => {
    if (state.currentTab === "scratchpad") {
      resizeCanvas("scratch-canvas");
    }
    if (state.currentTab === "exercises") {
      resizeCanvas("mini-scratch-canvas");
    }
  });

  // --- TRADUCTEURS DE TEXTE ---
  function getCategoryLabel(cat) {
    switch (cat) {
      case "suites": return "Suites & Récurrence";
      case "fonctions": return "Fonctions & Convexité";
      case "geometrie": return "Géométrie Espace";
      case "probabilites": return "Proba & Dénombrement";
      case "integration": return "Intégrales & Équadiff";
      default: return cat;
    }
  }

  // Failsafe pour s'assurer du rendu initial après chargement de tous les scripts
  window.addEventListener("load", () => {
    renderMath();
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  });
});
