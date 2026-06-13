// --- APPLICATION DE REVISION SPE MATHS ---



document.addEventListener("DOMContentLoaded", () => {
  // --- ETAT DE L'APPLICATION ---
  const state = {
    currentTab: "dashboard",
    selectedCategory: "suites",
    activeExercises: [],
    currentExerciseIndex: 0,
    userSelection: null, // QCM selection index or open answer string
    isValidated: false,
    
    // Etat du Mode Examen
    exam: {
      active: false,
      subject: null,
      flatQuestions: [],
      answers: {},
      timeLeft: 4 * 60 * 60,
      currentIndex: 0,
      timerInterval: null
    },
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
    } else if (tabId === "exam") {
      renderExamView();
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

    const script = document.createElement("script");
    script.src = `exercises_${category}.js`;
    script.async = true;
    script.onload = () => {
      callback();
    };
    script.onerror = () => {
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


  // --- MODE EXAMEN LOGIQUE ---
  function renderExamView() {
    const landingView = document.getElementById("exam-landing-view");
    const activeView = document.getElementById("exam-active-view");
    const resultsView = document.getElementById("exam-results-view");

    if (state.exam.active) {
      landingView.style.display = "none";
      activeView.style.display = "block";
      resultsView.style.display = "none";
      loadExamQuestion();
    } else {
      activeView.style.display = "none";
      
      // Si on a des résultats d'un examen juste terminé, on les affiche
      if (document.getElementById("exam-results-view").getAttribute("data-just-finished") === "true") {
        landingView.style.display = "none";
        resultsView.style.display = "block";
      } else {
        landingView.style.display = "block";
        resultsView.style.display = "none";
        renderExamHistory();
      }
    }
  }

  function renderExamHistory() {
    const historyBody = document.getElementById("exam-history-body");
    historyBody.innerHTML = "";

    const savedHistory = localStorage.getItem("spe_maths_bac_exam_history");
    if (!savedHistory) {
      historyBody.innerHTML = `
        <tr>
          <td colspan="5" class="empty-history-text">Aucune épreuve réalisée pour le moment. Votre historique s'affichera ici.</td>
        </tr>
      `;
      return;
    }

    try {
      const history = JSON.parse(savedHistory);
      if (history.length === 0) {
        historyBody.innerHTML = `
          <tr>
            <td colspan="5" class="empty-history-text">Aucune épreuve réalisée pour le moment. Votre historique s'affichera ici.</td>
          </tr>
        `;
        return;
      }

      history.forEach(item => {
        const row = document.createElement("tr");
        let mentionClass = "wrong";
        if (item.score >= 14) mentionClass = "correct";
        else if (item.score >= 10) mentionClass = "warning"; // fallback warning class or dynamic text

        row.innerHTML = `
          <td>${item.date}</td>
          <td>${item.subject}</td>
          <td style="font-weight:700;">${item.score} / 20</td>
          <td>${item.timeSpent}</td>
          <td><span class="exam-correction-status ${mentionClass}">${item.status}</span></td>
        `;
        historyBody.appendChild(row);
      });
    } catch(e) {
      historyBody.innerHTML = `<tr><td colspan="5" class="empty-history-text">Erreur de lecture de l'historique.</td></tr>`;
    }
  }

  function startExam() {
    if (!window.EXAMS_DATA || window.EXAMS_DATA.length === 0) {
      alert("Erreur: Les données d'examen sont introuvables.");
      return;
    }

    // Tirage au sort d'une épreuve
    const randomIndex = Math.floor(Math.random() * window.EXAMS_DATA.length);
    const selectedExam = window.EXAMS_DATA[randomIndex];

    // Initialiser l'état de l'examen
    state.exam.active = true;
    state.exam.subject = selectedExam;
    state.exam.flatQuestions = [];
    state.exam.answers = {};
    state.exam.timeLeft = 4 * 60 * 60; // 4h00
    state.exam.currentIndex = 0;

    // Aplatir les questions des exercices pour la navigation linéaire
    selectedExam.exercises.forEach((exVal, exIdx) => {
      exVal.questions.forEach((qVal, qIdx) => {
        state.exam.flatQuestions.push({
          ...qVal,
          exerciseTitle: exVal.title,
          indexInExercise: qIdx + 1,
          totalInExercise: exVal.questions.length
        });
      });
    });

    document.getElementById("exam-active-title").textContent = selectedExam.title;
    document.getElementById("exam-results-view").setAttribute("data-just-finished", "false");

    // Lancement du timer
    if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);
    
    updateTimerUI();
    state.exam.timerInterval = setInterval(() => {
      state.exam.timeLeft--;
      updateTimerUI();

      if (state.exam.timeLeft <= 0) {
        clearInterval(state.exam.timerInterval);
        alert("Temps écoulé ! Votre copie va être soumise automatiquement.");
        submitExam(true);
      }
    }, 1000);

    // Initialisation du brouillon examen
    initScratchpad("exam-scratch-canvas", "scratchpad-toolbar-exam");

    renderExamView();
  }

  function updateTimerUI() {
    const hours = Math.floor(state.exam.timeLeft / 3600);
    const minutes = Math.floor((state.exam.timeLeft % 3600) / 60);
    const seconds = state.exam.timeLeft % 60;

    const formattedTime = 
      String(hours).padStart(2, '0') + ":" + 
      String(minutes).padStart(2, '0') + ":" + 
      String(seconds).padStart(2, '0');

    const timerVal = document.getElementById("exam-timer-val");
    const timerWidget = document.getElementById("exam-timer-widget");
    const timerBar = document.getElementById("exam-timer-bar");

    if (timerVal) timerVal.textContent = formattedTime;

    const percentLeft = (state.exam.timeLeft / (4 * 3600)) * 100;
    if (timerBar) timerBar.style.width = percentLeft + "%";

    // Alerte < 15 min (900 sec)
    if (state.exam.timeLeft <= 900) {
      if (timerWidget) timerWidget.classList.add("timer-alert");
    } else {
      if (timerWidget) timerWidget.classList.remove("timer-alert");
    }
  }

  function loadExamQuestion() {
    if (state.exam.flatQuestions.length === 0) return;

    const qIdx = state.exam.currentIndex;
    const q = state.exam.flatQuestions[qIdx];
    const userAns = state.exam.answers[qIdx];

    // Rendre l'en-tête de la question
    document.getElementById("exam-exercise-title").textContent = q.exerciseTitle;
    document.getElementById("exam-question-number").textContent = "Question " + (qIdx + 1) + " / " + state.exam.flatQuestions.length;
    document.getElementById("exam-question-title").textContent = "Question " + q.indexInExercise + " sur " + q.totalInExercise;
    
    const qText = document.getElementById("exam-question-text");
    qText.innerHTML = q.question;

    const answerArea = document.getElementById("exam-answer-area");
    answerArea.innerHTML = "";

    if (q.type === "qcm") {
      const grid = document.createElement("div");
      grid.className = "options-grid";
      
      q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-button";
        if (userAns === idx) btn.classList.add("selected");
        
        btn.innerHTML = `
          <span class="option-check"></span>
          <span class="option-label">${opt}</span>
        `;
        
        btn.addEventListener("click", () => {
          grid.querySelectorAll(".option-button").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          state.exam.answers[qIdx] = idx;
          renderExamStatusGrid();
        });
        grid.appendChild(btn);
      });
      answerArea.appendChild(grid);
    } else {
      const group = document.createElement("div");
      group.className = "input-group";
      
      const input = document.createElement("input");
      input.type = "text";
      input.className = "text-input";
      input.placeholder = "Saisissez votre réponse...";
      if (userAns !== undefined) input.value = userAns;
      
      input.addEventListener("input", (e) => {
        state.exam.answers[qIdx] = e.target.value.trim();
        renderExamStatusGrid();
      });

      group.appendChild(input);
      answerArea.appendChild(group);
    }

    // Boutons de navigation
    document.getElementById("btn-exam-prev").disabled = (qIdx === 0);
    const nextBtn = document.getElementById("btn-exam-next");
    if (qIdx === state.exam.flatQuestions.length - 1) {
      nextBtn.innerHTML = 'Terminer <i data-lucide="check-square"></i>';
    } else {
      nextBtn.innerHTML = 'Suivant <i data-lucide="arrow-right"></i>';
    }

    renderExamStatusGrid();
    renderMath(document.getElementById("exam-active-view"));

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    // Redimensionner le mini brouillon de l'examen
    setTimeout(() => resizeCanvas("exam-scratch-canvas"), 50);
  }

  function renderExamStatusGrid() {
    const grid = document.getElementById("exam-status-grid");
    grid.innerHTML = "";

    state.exam.flatQuestions.forEach((q, idx) => {
      const dot = document.createElement("div");
      dot.className = "status-dot";
      if (idx === state.exam.currentIndex) dot.classList.add("active");
      
      // Si répondu
      const ans = state.exam.answers[idx];
      if (ans !== undefined && ans !== "") {
        dot.classList.add("answered");
      }

      dot.textContent = idx + 1;
      dot.addEventListener("click", () => {
        state.exam.currentIndex = idx;
        loadExamQuestion();
      });

      grid.appendChild(dot);
    });
  }

  // Affiche la modale de confirmation de soumission
  function showSubmitModal() {
    const overlay = document.getElementById("submit-modal-overlay");
    if (!overlay) { _doSubmitExam(); return; }

    // Calculer les questions non répondues
    const total = state.exam.flatQuestions.length;
    let unanswered = 0;
    state.exam.flatQuestions.forEach((q, idx) => {
      const ans = state.exam.answers[idx];
      if (ans === undefined || ans === "") unanswered++;
    });

    const infoBox = document.getElementById("modal-unanswered-info");
    const infoText = document.getElementById("modal-unanswered-text");
    if (unanswered > 0) {
      infoBox.style.display = "flex";
      infoText.textContent = unanswered + " question(s) sur " + total + " sans réponse. Elles seront comptées comme incorrectes.";
    } else {
      infoBox.style.display = "none";
    }

    overlay.style.display = "flex";
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  function hideSubmitModal() {
    const overlay = document.getElementById("submit-modal-overlay");
    if (overlay) overlay.style.display = "none";
  }

  function submitExam(isForced) {
    if (!isForced) {
      showSubmitModal();
      return;
    }
    _doSubmitExam();
  }

  function _doSubmitExam() {
    hideSubmitModal();

    if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);
    state.exam.active = false;

    // Calcul des statistiques
    const totalQuestions = state.exam.flatQuestions.length;
    let correctCount = 0;

    state.exam.flatQuestions.forEach((q, idx) => {
      const userAns = state.exam.answers[idx];
      if (userAns !== undefined) {
        if (q.type === "qcm") {
          if (userAns === q.correctAnswer) correctCount++;
        } else {
          const cleanUser = String(userAns).toLowerCase().replace(/\s+/g, '');
          const cleanCorrect = String(q.correctAnswer).toLowerCase().replace(/\s+/g, '');
          if (cleanUser === cleanCorrect) correctCount++;
        }
      }
    });

    const finalScore = Math.round((correctCount / totalQuestions) * 20 * 10) / 10;
    
    // Temps écoulé
    const timeSpentSeconds = (4 * 3600) - state.exam.timeLeft;
    const spentHours = Math.floor(timeSpentSeconds / 3600);
    const spentMinutes = Math.floor((timeSpentSeconds % 3600) / 60);
    const spentSeconds = timeSpentSeconds % 60;

    let timeSpentStr = "";
    if (spentHours > 0) timeSpentStr += spentHours + "h ";
    if (spentMinutes > 0) timeSpentStr += spentMinutes + "m ";
    timeSpentStr += spentSeconds + "s";

    // Mention
    let mention = "Insuffisant";
    let scoreClass = "score-red";
    if (finalScore >= 16) {
      mention = "Très Bien";
      scoreClass = "score-green";
    } else if (finalScore >= 14) {
      mention = "Bien";
      scoreClass = "score-green";
    } else if (finalScore >= 12) {
      mention = "Assez Bien";
      scoreClass = "score-yellow";
    } else if (finalScore >= 10) {
      mention = "Passable";
      scoreClass = "score-yellow";
    }

    // Affichage du score
    document.getElementById("exam-score-val").textContent = finalScore;
    const scoreCircle = document.getElementById("exam-score-circle");
    scoreCircle.className = "score-circle-neon " + scoreClass;

    document.getElementById("exam-results-time").textContent = timeSpentStr;
    document.getElementById("exam-results-correct").textContent = correctCount + " / " + totalQuestions;
    document.getElementById("exam-results-mention").textContent = mention;

    // Génération de la correction détaillée
    const correctionsList = document.getElementById("exam-corrections-list");
    correctionsList.innerHTML = "";

    state.exam.flatQuestions.forEach((q, idx) => {
      const userAns = state.exam.answers[idx];
      let isCorrect = false;
      let userDisplayStr = "Aucune réponse fournie";

      if (userAns !== undefined && userAns !== "") {
        if (q.type === "qcm") {
          isCorrect = (userAns === q.correctAnswer);
          userDisplayStr = q.options[userAns];
        } else {
          const cleanUser = String(userAns).toLowerCase().replace(/\s+/g, '');
          const cleanCorrect = String(q.correctAnswer).toLowerCase().replace(/\s+/g, '');
          isCorrect = (cleanUser === cleanCorrect);
          userDisplayStr = "$" + userAns + "$";
        }
      }

      const itemCard = document.createElement("div");
      itemCard.className = "glass-card exam-correction-item " + (isCorrect ? "correct" : "wrong");

      const correctDisplayStr = q.type === "qcm" ? q.options[q.correctAnswer] : "$" + q.correctAnswer + "$";

      itemCard.innerHTML = `
        <div class="exam-correction-header">
          <span class="category-badge">${q.exerciseTitle}</span>
          <span class="exam-correction-status ${isCorrect ? 'correct' : 'wrong'}">
            ${isCorrect ? '<i data-lucide="check-circle-2"></i> Correct' : '<i data-lucide="x-circle"></i> Incorrect'}
          </span>
        </div>
        <div class="question-text" style="margin-bottom:1rem;">
          ${q.question}
        </div>
        <div class="exam-correction-ans">
          <p><b>Votre réponse :</b> <span style="color:${isCorrect ? 'var(--neon-green)' : 'var(--neon-red)'};">${userDisplayStr}</span></p>
          <p><b>Réponse attendue :</b> <span style="color:var(--neon-green);">${correctDisplayStr}</span></p>
        </div>
        <div class="correction-box" style="display:block; margin-top:1rem;">
          <h4><i data-lucide="info"></i> Correction détaillée</h4>
          <div style="font-size:0.9rem; line-height:1.6; margin-top:0.5rem; color:var(--text-secondary);">
            ${q.explanation}
          </div>
        </div>
      `;

      correctionsList.appendChild(itemCard);
    });

    // Enregistrement dans l'historique local
    const historyEntry = {
      date: new Date().toLocaleDateString("fr-FR"),
      subject: state.exam.subject.title,
      score: finalScore,
      timeSpent: timeSpentStr,
      status: mention
    };

    let historyList = [];
    const savedHistory = localStorage.getItem("spe_maths_bac_exam_history");
    if (savedHistory) {
      try {
        historyList = JSON.parse(savedHistory);
      } catch (e) {}
    }
    historyList.unshift(historyEntry);
    
    // Garder seulement les 10 dernières épreuves
    if (historyList.length > 10) historyList.pop();

    localStorage.setItem("spe_maths_bac_exam_history", JSON.stringify(historyList));

    // Signaler qu'on vient de terminer l'examen pour forcer l'affichage des résultats
    document.getElementById("exam-results-view").setAttribute("data-just-finished", "true");

    renderExamView();
    renderMath(correctionsList);

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // Brancher les boutons de la modale de confirmation
  const modalCancelBtn = document.getElementById("modal-btn-cancel");
  if (modalCancelBtn) modalCancelBtn.addEventListener("click", hideSubmitModal);

  const modalConfirmBtn = document.getElementById("modal-btn-confirm");
  if (modalConfirmBtn) modalConfirmBtn.addEventListener("click", () => { _doSubmitExam(); });

  // Fermer la modale en cliquant sur l'overlay
  const modalOverlay = document.getElementById("submit-modal-overlay");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) hideSubmitModal();
    });
  }

  // Brancher les événements du mode examen
  const startExamBtn = document.getElementById("btn-start-exam");
  if (startExamBtn) {
    startExamBtn.addEventListener("click", startExam);
  }

  const prevExamBtn = document.getElementById("btn-exam-prev");
  if (prevExamBtn) {
    prevExamBtn.addEventListener("click", () => {
      if (state.exam.currentIndex > 0) {
        state.exam.currentIndex--;
        loadExamQuestion();
      }
    });
  }

  const nextExamBtn = document.getElementById("btn-exam-next");
  if (nextExamBtn) {
    nextExamBtn.addEventListener("click", () => {
      if (state.exam.currentIndex < state.exam.flatQuestions.length - 1) {
        state.exam.currentIndex++;
        loadExamQuestion();
      } else {
        submitExam(false);
      }
    });
  }

  const finishExamBtn = document.getElementById("btn-finish-exam");
  if (finishExamBtn) {
    finishExamBtn.addEventListener("click", () => {
      submitExam(false);
    });
  }

  const backToLandingBtn = document.getElementById("btn-back-to-landing");
  if (backToLandingBtn) {
    backToLandingBtn.addEventListener("click", () => {
      document.getElementById("exam-results-view").setAttribute("data-just-finished", "false");
      renderExamView();
    });
  }


  // Failsafe pour s'assurer du rendu initial après chargement de tous les scripts
  window.addEventListener("load", () => {
    renderMath();
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  });
});
