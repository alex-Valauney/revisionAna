/**
 * Fichier contenant les données détaillées des cours pour la plateforme
 * Bac Spé Maths 2026 - Plateforme de Révision Interactive
 */

const COURS_DATA = [
  {
    category: "suites",
    title: "Suites Numériques & Récurrence",
    introduction: "Ce chapitre pose les bases de l'analyse discrète : le raisonnement par récurrence, l'étude des limites de suites, et les théorèmes fondamentaux de convergence.",
    sections: [
      {
        title: "Le Raisonnement par Récurrence",
        content: `
          <p>Le raisonnement par récurrence est une méthode de démonstration permettant de prouver qu'une propriété $P(n)$, dépendant d'un entier naturel $n$, est vraie pour tout entier $n \ge n_0$.</p>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Principe de Récurrence</h4>
            <p>Soit $n_0 \in \mathbb{N}$ et $P(n)$ une propriété. Si les deux conditions suivantes sont réunies :</p>
            <ul>
              <li><strong>Initialisation :</strong> La propriété est vraie au rang initial, c'est-à-dire que $P(n_0)$ est vraie.</li>
              <li><strong>Hérédité :</strong> Pour tout entier $k \ge n_0$, si on suppose que $P(k)$ est vraie (hypothèse de récurrence), alors on démontre que $P(k+1)$ est vraie.</li>
            </ul>
            <p>Alors, la propriété $P(n)$ est vraie pour tout entier $n \ge n_0$.</p>
          </div>
          
          <div class="course-method">
            <h4><i data-lucide="help-circle"></i> Exemple de rédaction type</h4>
            <p>Démontrons par récurrence que pour tout $n \ge 1$ : $\sum_{i=1}^n i = \frac{n(n+1)}{2}$.</p>
            <p>Soit $P(n)$ la propriété : $\sum_{i=1}^n i = \frac{n(n+1)}{2}$</p>
            <p><strong>Initialisation :</strong> Pour $n = 1$ :</p>
            <ul>
              <li>Membre de gauche : $\sum_{i=1}^1 i = 1$</li>
              <li>Membre de droite : $\frac{1(1+1)}{2} = \frac{2}{2} = 1$</li>
            </ul>
            <p>P(1) est donc vraie. L'initialisation est vérifiée.</p>
            <p><strong>Hérédité :</strong> Soit $k \ge 1$ un entier quelconque. Supposons que $P(k)$ est vraie, c'est-à-dire que $\sum_{i=1}^k i = \frac{k(k+1)}{2}$. Montrons que $P(k+1)$ est vraie, soit $\sum_{i=1}^{k+1} i = \frac{(k+1)(k+2)}{2}$.</p>
            <p>Par définition :</p>
            $$\sum_{i=1}^{k+1} i = \left(\sum_{i=1}^k i\right) + (k+1)$$
            <p>En utilisant l'hypothèse de récurrence :</p>
            $$\sum_{i=1}^{k+1} i = \frac{k(k+1)}{2} + (k+1)$$
            <p>Factorisons par $(k+1)$ :</p>
            $$\sum_{i=1}^{k+1} i = (k+1)\left(\frac{k}{2} + 1\right) = (k+1)\left(\frac{k+2}{2}\right) = \frac{(k+1)(k+2)}{2}$$
            <p>La propriété est donc héréditaire.</p>
            <p><strong>Conclusion :</strong> La propriété $P(n)$ est initialisée au rang $1$ et est héréditaire. Par le principe de récurrence, elle est vraie pour tout $n \ge 1$.</p>
          </div>
        `
      },
      {
        title: "Limites de Suites & Opérations",
        content: `
          <p>L'étude du comportement d'une suite $u_n$ lorsque $n$ tend vers l'infini définit la notion de limite.</p>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Convergence et Divergence</h4>
            <ul>
              <li>Une suite $u_n$ <strong>converge</strong> vers un réel $l$ si tout intervalle ouvert contenant $l$ contient tous les termes de la suite à partir d'un certain rang. On note $\lim_{n \to +\infty} u_n = l$.</li>
              <li>Une suite est <strong>divergente</strong> si elle n'admet pas de limite finie (soit sa limite est $\pm\infty$, soit elle n'a pas de limite, comme $v_n = (-1)^n$).</li>
            </ul>
          </div>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Limites des suites géométriques</h4>
            <p>Soit $u_n = q^n$ avec $q \in \mathbb{R}$ :</p>
            <ul>
              <li>Si $q > 1$ : $\lim_{n \to +\infty} q^n = +\\infty$ (la suite diverge)</li>
              <li>Si $q = 1$ : $q^n = 1$ pour tout $n$, la limite est $1$</li>
              <li>Si $-1 < q < 1$ : $\lim_{n \to +\infty} q^n = 0$ (la suite converge)</li>
              <li>Si $q \le -1$ : la suite n'admet pas de limite</li>
            </ul>
          </div>
        `
      },
      {
        title: "Théorèmes de Comparaison",
        content: `
          <p>Lorsque le calcul direct d'une limite est impossible (présence de sinus, cosinus, etc.), on utilise des encadrements.</p>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Théorème des Gendarmes (ou d'encadrement)</h4>
            <p>Soient $(u_n)$, $(v_n)$ et $(w_n)$ trois suites. S'il existe un rang $N$ à partir duquel :</p>
            $$u_n \le v_n \le w_n \quad \text{pour tout } n \ge N$$
            <p>et si $\lim_{n \to +\infty} u_n = \lim_{n \to +\infty} w_n = l$ ($l \in \mathbb{R}$), alors :</p>
            $$\lim_{n \to +\infty} v_n = l$$
          </div>

          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Théorèmes de Comparaison</h4>
            <p>Soient $(u_n)$ et $(v_n)$ deux suites telles que $u_n \le v_n$ à partir d'un certain rang :</p>
            <ul>
              <li>Si $\lim_{n \to +\infty} u_n = +\infty$, alors $\lim_{n \to +\infty} v_n = +\infty$.</li>
              <li>Si $\lim_{n \to +\infty} v_n = -\infty$, alors $\lim_{n \to +\infty} u_n = -\infty$.</li>
            </ul>
          </div>
          
          <div class="course-example">
            <h4><i data-lucide="edit-3"></i> Exemple d'application</h4>
            <p>Déterminer la limite de $v_n = \frac{\cos(n)}{n^2 + 1}$ pour $n \ge 1$.</p>
            <p>Pour tout entier $n$, on a $-1 \le \cos(n) \le 1$.</p>
            <p>Comme $n^2 + 1 > 0$, on peut diviser :</p>
            $$\frac{-1}{n^2 + 1} \le \frac{\cos(n)}{n^2 + 1} \le \frac{1}{n^2 + 1}$$
            <p>Or $\lim_{n \to +\infty} \frac{-1}{n^2 + 1} = 0$ et $\lim_{n \to +\infty} \frac{1}{n^2 + 1} = 0$.</p>
            <p>D'après le <strong>théorème des gendarmes</strong>, on en déduit que $\lim_{n \to +\infty} v_n = 0$.</p>
          </div>
        `
      },
      {
        title: "Convergence, Monotonie & Suites Arithmético-Géométriques",
        content: `
          <p>L'existence de bornes combinée à la monotonie garantit la convergence d'une suite.</p>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Théorème de Convergence Monotone</h4>
            <ul>
              <li>Toute suite <strong>croissante et majorée</strong> converge vers une limite réelle $l$.</li>
              <li>Toute suite <strong>décroissante et minorée</strong> converge vers une limite réelle $l$.</li>
            </ul>
            <p><em>Attention :</em> Ce théorème garantit seulement l'existence d'une limite $l$, mais il ne donne pas sa valeur exacte (la limite $l$ est simplement inférieure ou égale au majorant).</p>
          </div>

          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Suites Arithmético-Géométriques</h4>
            <p>Une suite $(u_n)$ est arithmético-géométrique si elle est définie par une relation de récurrence du type :</p>
            $$u_{n+1} = a u_n + b \quad (a \ne 1, b \ne 0)$$
            <p>Pour exprimer $u_n$ en fonction de $n$ :</p>
            <ol>
              <li>On cherche le point fixe $\alpha$ de la fonction associée : $\alpha = a\alpha + b \iff \alpha = \frac{b}{1-a}$.</li>
              <li>On définit la suite auxiliaire $v_n = u_n - \alpha$.</li>
              <li>On démontre que $(v_n)$ est une suite géométrique de raison $a$ : $v_{n+1} = u_{n+1} - \alpha = au_n + b - (a\alpha + b) = a(u_n - \alpha) = a v_n$.</li>
              <li>On en déduit l'expression de $v_n = v_0 \times a^n$, puis de $u_n = v_0 \times a^n + \alpha$.</li>
            </ol>
          </div>
        `
      }
    ]
  },
  {
    category: "fonctions",
    title: "Fonctions, Limites, Continuité & Convexité",
    introduction: "Ce chapitre traite de l'analyse des fonctions réelles d'une variable réelle : limites, continuité, théorème des valeurs intermédiaires, propriétés algébriques et analytiques des fonctions ln et exp, et étude de la convexité.",
    sections: [
      {
        title: "Limites de fonctions & Continuité",
        content: `
          <p>La notion de continuité traduit l'absence de rupture dans la courbe d'une fonction.</p>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Continuité sur un intervalle</h4>
            <p>Une fonction $f$ est <strong>continue</strong> en un réel $a$ de son intervalle de définition $I$ si :</p>
            $$\lim_{x \to a} f(x) = f(a)$$
            <p>Graphiquement, la courbe d'une fonction continue sur un intervalle peut être tracée sans lever le crayon.</p>
            <p><em>Propriété :</em> Les fonctions usuelles (polynômes, rationnelles, exponentielle, logarithme, trigonométriques) sont continues sur leurs intervalles de définition.</p>
          </div>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Théorème des Valeurs Intermédiaires (TVI)</h4>
            <p>Soit $f$ une fonction <strong>continue</strong> sur un intervalle $[a; b]$. Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe au moins un réel $c \in [a; b]$ tel que $f(c) = k$.</p>
            <p><strong>Corollaire (cas strictement monotone) :</strong> Si de plus la fonction $f$ est <strong>strictement monotone</strong> sur $[a; b]$, alors le réel $c$ est <strong>unique</strong>. L'équation $f(x) = k$ admet une unique solution sur $[a; b]$.</p>
          </div>
        `
      },
      {
        title: "Fonctions Exponentielle & Logarithme Néperien",
        content: `
          <p>Les deux fonctions transcendantes incontournables du programme de Terminale sont réciproques l'une de l'autre.</p>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Définitions et Relations</h4>
            <ul>
              <li>La fonction exponentielle $x \mapsto e^x$ est la solution de l'équation différentielle $y' = y$ telle que $y(0) = 1$. Elle est strictement positive et strictement croissante sur $\mathbb{R}$.</li>
              <li>La fonction logarithme népérien $x \mapsto \ln(x)$ est définie sur $]0; +\infty[$ comme la bijection réciproque de l'exponentielle : $y = \ln(x) \iff x = e^y$.</li>
            </ul>
          </div>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Propriétés Algébriques fondamentales</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div>
                <h5>Exponentielle ($a, b \in \mathbb{R}$)</h5>
                <ul>
                  <li>$e^{a+b} = e^a \times e^b$</li>
                  <li>$e^{-a} = \frac{1}{e^a}$</li>
                  <li>$e^{a-b} = \frac{e^a}{e^b}$</li>
                  <li>$(e^a)^n = e^{na} \quad (n \in \mathbb{Z})$</li>
                </ul>
              </div>
              <div>
                <h5>Logarithme ($x, y > 0$)</h5>
                <ul>
                  <li>$\ln(x \times y) = \ln(x) + \ln(y)$</li>
                  <li>$\ln\left(\frac{1}{x}\right) = -\ln(x)$</li>
                  <li>$\ln\left(\frac{x}{y}\right) = \ln(x) - \ln(y)$</li>
                  <li>$\ln(x^n) = n\ln(x) \quad (n \in \mathbb{Z})$</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Limites fondamentales et Croissances Comparées</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div>
                <h5>Exponentielle</h5>
                <ul>
                  <li>$\lim_{x \to +\infty} e^x = +\infty$</li>
                  <li>$\lim_{x \to -\infty} e^x = 0$</li>
                  <li>$\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty$</li>
                  <li>$\lim_{x \to -\infty} x^n e^x = 0$</li>
                </ul>
              </div>
              <div>
                <h5>Logarithme</h5>
                <ul>
                  <li>$\lim_{x \to +\infty} \ln(x) = +\infty$</li>
                  <li>$\lim_{x \to 0^+} \ln(x) = -\infty$</li>
                  <li>$\lim_{x \to +\infty} \frac{\ln(x)}{x^n} = 0$</li>
                  <li>$\lim_{x \to 0^+} x^n \ln(x) = 0$</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "Convexité et Dérivée Seconde",
        content: `
          <p>L'étude de la convexité permet d'analyser la courbure de la représentation graphique d'une fonction.</p>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Définitions géométriques</h4>
            <ul>
              <li>Une fonction $f$ est <strong>convexe</strong> sur un intervalle $I$ si sa courbe représentative $\mathcal{C}_f$ est située entièrement <strong>au-dessus</strong> de chacune de ses tangentes sur $I$.</li>
              <li>Une fonction $f$ est <strong>concave</strong> sur un intervalle $I$ si sa courbe représentative $\mathcal{C}_f$ est située entièrement <strong>en dessous</strong> de chacune de ses tangentes sur $I$.</li>
            </ul>
          </div>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Caractérisation par les dérivées</h4>
            <p>Soit $f$ une fonction deux fois dérivable sur un intervalle $I$ de dérivée seconde $f''$ :</p>
            <ul>
              <li>$f$ est <strong>convexe</strong> sur $I \iff f'$ est croissante sur $I \iff f''(x) \ge 0$ pour tout $x \in I$.</li>
              <li>$f$ est <strong>concave</strong> sur $I \iff f'$ est décroissante sur $I \iff f''(x) \le 0$ pour tout $x \in I$.</li>
            </ul>
          </div>

          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Point d'Inflexion</h4>
            <p>Un <strong>point d'inflexion</strong> est un point de la courbe $\mathcal{C}_f$ où la courbe traverse sa tangente. En ce point, la fonction change de type de convexité (passe de convexe à concave, ou inversement).</p>
            <p><strong>Théorème :</strong> Le point $A(x_0; f(x_0))$ est un point d'inflexion si et seulement si la dérivée seconde $f''$ <strong>s'annule et change de signe</strong> en $x_0$.</p>
          </div>
        `
      }
    ]
  },
  {
    category: "geometrie",
    title: "Géométrie dans l'Espace",
    introduction: "Ce chapitre aborde la géométrie analytique tridimensionnelle : vecteurs de l'espace, représentations paramétriques de droites, produit scalaire, équations cartésiennes de plans et calculs de projetés orthogonaux.",
    sections: [
      {
        title: "Représentation Paramétrique de Droite",
        content: `
          <p>Dans l'espace muni d'un repère orthonormé, une droite est caractérisée par un point et un vecteur directeur.</p>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Définition et formule</h4>
            <p>La droite $D$ passant par le point $A(x_A; y_A; z_A)$ et de vecteur directeur $\vec{u}(a; b; c)$ est l'ensemble des points $M(x; y; z)$ tels que le vecteur $\vec{AM}$ soit colinéaire à $\vec{u}$.</p>
            <p>Il existe un réel $t$ (le paramètre) tel que $\vec{AM} = t\vec{u}$, ce qui donne le système d'équations paramétriques :</p>
            $$\begin{cases} x = x_A + a t \\ y = y_A + b t \\ z = z_A + c t \end{cases} \quad \text{avec } t \in \mathbb{R}$$
          </div>
          
          <div class="course-method">
            <h4><i data-lucide="help-circle"></i> Déterminer l'intersection de deux droites</h4>
            <p>Pour déterminer si deux droites $D$ et $D'$ d'équations paramétriques respectives (de paramètres $t$ et $s$) sont sécantes, on résout le système à 3 équations et 2 inconnues $(t, s)$ obtenu en égalant les coordonnées $x, y, z$.</p>
            <ul>
              <li>Si le système admet une solution unique, les droites sont sécantes en un point.</li>
              <li>Si le système n'a pas de solution et que les vecteurs directeurs ne sont pas colinéaires, les droites sont non coplanaires.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Produit Scalaire et Orthogonalité dans l'Espace",
        content: `
          <p>Le produit scalaire est l'outil algébrique fondamental pour exprimer l'orthogonalité et calculer des distances.</p>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Définition analytique</h4>
            <p>Dans un repère orthonormé $(O; \vec{i}, \vec{j}, \vec{k})$, le produit scalaire de deux vecteurs $\vec{u}(x; y; z)$ et $\vec{v}(x'; y'; z')$ est le réel défini par :</p>
            $$\vec{u} \cdot \vec{v} = x x' + y y' + z z'$$
            <p>On définit également la norme du vecteur $\vec{u}$ par $\|\vec{u}\| = \sqrt{x^2 + y^2 + z^2}$.</p>
            <p><strong>Propriété géométrique :</strong> $\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\theta)$ où $\theta$ est l'angle formé par les deux vecteurs.</p>
          </div>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Orthogonalité</h4>
            <p>Deux vecteurs non nuls $\vec{u}$ et $\vec{v}$ sont orthogonaux si et seulement si leur produit scalaire est nul :</p>
            $$\vec{u} \cdot \vec{v} = 0$$
          </div>
        `
      },
      {
        title: "Équations Cartésiennes de Plans",
        content: `
          <p>Un plan de l'espace peut être modélisé analytiquement par une équation linéaire à trois variables.</p>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Vecteur normal et Équation cartésienne</h4>
            <p>Un vecteur non nul $\vec{n}$ est dit <strong>normal</strong> à un plan $P$ s'il est orthogonal à deux vecteurs directeurs non colinéaires du plan $P$.</p>
            <p><strong>Théorème :</strong> Le plan $P$ passant par $A(x_A; y_A; z_A)$ et de vecteur normal $\vec{n}(a; b; c)$ est l'ensemble des points $M(x; y; z)$ tels que $\vec{AM} \cdot \vec{n} = 0$. Il admet une équation cartésienne de la forme :</p>
            $$a x + b y + c z + d = 0 \quad \text{avec } d = -(a x_A + b y_A + c z_A)$$
          </div>

          <div class="course-method">
            <h4><i data-lucide="help-circle"></i> Déterminer le projeté orthogonal d'un point sur un plan</h4>
            <p>Soit un point $M$ et un plan $P$ d'équation $ax+by+cz+d=0$ (de vecteur normal $\vec{n}(a;b;c)$). Pour trouver les coordonnées du projeté orthogonal $H$ de $M$ sur $P$ :</p>
            <ol>
              <li>On écrit la représentation paramétrique de la droite $D$ passant par $M$ et perpendiculaire à $P$ (qui admet $\vec{n}$ comme vecteur directeur).</li>
              <li>On injecte les coordonnées paramétriques de cette droite $D$ dans l'équation cartésienne du plan $P$ pour déterminer la valeur du paramètre $t_0$.</li>
              <li>On calcule les coordonnées de $H$ en remplaçant $t$ par $t_0$ dans la représentation paramétrique de $D$.</li>
            </ol>
            <p>La distance $MH$ représente alors la distance minimale du point $M$ au plan $P$.</p>
          </div>
        `
      }
    ]
  },
  {
    category: "probabilites",
    title: "Probabilités & Combinatoire",
    introduction: "Ce chapitre couvre le dénombrement (outils combinatoires) et l'étude des modèles aléatoires avec les probabilités conditionnelles et la loi binomiale.",
    sections: [
      {
        title: "Combinatoire & Dénombrement",
        content: `
          <p>Le dénombrement consiste à compter le nombre d'éléments dans des ensembles finis sans les lister un par un.</p>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Les outils du dénombrement</h4>
            <p>Soit $E$ un ensemble à $n$ éléments :</p>
            <ul>
              <li><strong>Nombre de $k$-uplets (listes ordonnées avec répétition) :</strong> $n^k$.</li>
              <li><strong>Nombre d'arrangements (listes ordonnées sans répétition) de $k$ éléments parmi $n$ :</strong>
                $$A_n^k = \frac{n!}{(n-k)!} = n \times (n-1) \times \dots \times (n-k+1)$$
              </li>
              <li><strong>Nombre de permutations (ordre de $n$ éléments) :</strong> $n! = n \times (n-1) \times \dots \times 1$ (avec $0! = 1$).</li>
              <li><strong>Nombre de combinaisons (sous-ensembles non ordonnés) de $k$ éléments parmi $n$ :</strong>
                $$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$
              </li>
            </ul>
          </div>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Propriétés des coefficients binomiaux</h4>
            <ul>
              <li><strong>Symétrie :</strong> $\binom{n}{k} = \binom{n}{n-k}$ (choisir $k$ éléments revient à exclure les $n-k$ autres).</li>
              <li><strong>Relation de Pascal :</strong> pour $1 \le k \le n-1$,
                $$\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$$
              </li>
            </ul>
          </div>
        `
      },
      {
        title: "Probabilités Conditionnelles & Totales",
        content: `
          <p>Les probabilités conditionnelles mesurent la probabilité d'un événement sachant qu'un autre s'est déjà réalisé.</p>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Définitions</h4>
            <p>Soient $A$ et $B$ deux événements, avec $P(A) > 0$. La probabilité conditionnelle de $B$ sachant $A$ est :</p>
            $$P_A(B) = \frac{P(A \cap B)}{P(A)}$$
            <p><strong>Indépendance :</strong> Deux événements $A$ et $B$ sont indépendants si et seulement si :</p>
            $$P(A \cap B) = P(A) \times P(B)$$
            <p>Si $P(A) > 0$, cela équivaut à $P_A(B) = P(B)$.</p>
          </div>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Formule des Probabilités Totales</h4>
            <p>Soient $A_1, A_2, \dots, A_m$ des événements formant une <strong>partition</strong> de l'univers $\Omega$ (événements deux à deux disjoints et dont la réunion est $\Omega$).</p>
            <p>Pour tout événement $B$, on a :</p>
            $$P(B) = \sum_{i=1}^m P(B \cap A_i) = P(A_1) \times P_{A_1}(B) + P(A_2) \times P_{A_2}(B) + \dots + P(A_m) \times P_{A_m}(B)$$
          </div>
        `
      },
      {
        title: "Loi Binomiale $\\mathcal{B}(n, p)$",
        content: `
          <p>La loi binomiale modélise la répétition d'expériences aléatoires indépendantes à deux issues.</p>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Schéma de Bernoulli et Loi Binomiale</h4>
            <ul>
              <li>Une épreuve de Bernoulli est une expérience aléatoire n'admettant que deux issues : le succès $S$ (de probabilité $p$) et l'échec $\bar{S}$ (de probabilité $1-p$).</li>
              <li>Un <strong>schéma de Bernoulli</strong> est la répétition de $n$ épreuves de Bernoulli identiques et indépendantes.</li>
              <li>La variable aléatoire $X$ comptant le nombre de succès à l'issue de ces $n$ épreuves suit la <strong>loi binomiale</strong> de paramètres $n$ et $p$, notée $\mathcal{B}(n, p)$.</li>
            </ul>
          </div>

          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Formules de probabilité et indicateurs</h4>
            <p>Si $X \sim \mathcal{B}(n, p)$, pour tout entier $k \in \{0; 1; \dots; n\}$ :</p>
            $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
            <ul>
              <li><strong>Espérance (valeur moyenne théorique) :</strong> $E(X) = n p$</li>
              <li><strong>Variance :</strong> $V(X) = n p (1-p)$</li>
              <li><strong>Écart-type :</strong> $\sigma(X) = \sqrt{V(X)} = \sqrt{n p (1-p)}$</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    category: "integration",
    title: "Équations Différentielles & Intégration",
    introduction: "Ce chapitre présente le calcul de primitives et d'intégrales (analyse continue) ainsi que la résolution analytique de certaines classes d'équations différentielles.",
    sections: [
      {
        title: "Équations Différentielles du premier ordre",
        content: `
          <p>Une équation différentielle est une équation dont l'inconnue est une fonction $y$, et où apparaissent ses dérivées.</p>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Solutions des équations linéaires classiques</h4>
            <p>Soient $a$ et $b$ deux réels, avec $a \ne 0$ :</p>
            <ul>
              <li>Les solutions de l'équation $y' = a y$ sur $\mathbb{R}$ sont les fonctions de la forme :
                $$f(x) = C e^{a x} \quad \text{avec } C \in \mathbb{R}$$
              </li>
              <li>Les solutions de l'équation $y' = a y + b$ sur $\mathbb{R}$ sont les fonctions de la forme :
                $$f(x) = C e^{a x} - \frac{b}{a} \quad \text{avec } C \in \mathbb{R}$$
              </li>
            </ul>
            <p>L'ajout d'une condition initiale du type $f(x_0) = y_0$ permet de déterminer de manière <strong>unique</strong> la constante $C$.</p>
          </div>
        `
      },
      {
        title: "Primitives & Intégrales",
        content: `
          <p>Le calcul d'intégrales est l'opération inverse de la dérivation, liée à la notion d'aire sous une courbe.</p>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Primitive d'une fonction</h4>
            <p>Soit $f$ une fonction définie sur un intervalle $I$. On appelle <strong>primitive</strong> de $f$ sur $I$ toute fonction $F$ dérivable sur $I$ telle que :</p>
            $$F'(x) = f(x) \quad \text{pour tout } x \in I$$
            <p><strong>Théorème :</strong> Toute fonction continue sur un intervalle $I$ admet des primitives sur cet intervalle. Deux primitives d'une même fonction diffèrent d'une constante réelle $C$.</p>
          </div>
          
          <div class="course-definition">
            <h4><i data-lucide="book-open"></i> Intégrale</h4>
            <p>Soit $f$ une fonction continue sur $[a; b]$ et $F$ une primitive de $f$ sur $[a; b]$. L'intégrale de $f$ entre $a$ et $b$ est le réel défini par :</p>
            $$\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$$
            <p>Graphiquement, si $f(x) \ge 0$ sur $[a; b]$, $\int_a^b f(x) dx$ est l'aire (en unités d'aire) du domaine délimité par l'axe des abscisses, la courbe de $f$ et les droites verticales $x = a$ et $x = b$.</p>
          </div>

          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Propriétés de l'Intégrale</h4>
            <ul>
              <li><strong>Linéarité :</strong> $\int_a^b (\alpha f(x) + \beta g(x)) dx = \alpha \int_a^b f(x) dx + \beta \int_a^b g(x) dx$</li>
              <li><strong>Relation de Chasles :</strong> $\int_a^c f(x) dx + \int_c^b f(x) dx = \int_a^b f(x) dx$</li>
              <li><strong>Positivité :</strong> Si $f(x) \ge 0$ pour tout $x \in [a; b]$ (avec $a \le b$), alors $\int_a^b f(x) dx \ge 0$.</li>
              <li><strong>Valeur Moyenne :</strong> La valeur moyenne $\mu$ d'une fonction $f$ continue sur $[a; b]$ (avec $a < b$) est :
                $$\mu = \frac{1}{b - a} \int_a^b f(x) dx$$
              </li>
            </ul>
          </div>
        `
      },
      {
        title: "Intégration par Parties (IPP)",
        content: `
          <p>L'intégration par parties permet de calculer l'intégrale d'un produit de deux fonctions à partir de leurs dérivées.</p>
          
          <div class="course-theorem">
            <h4><i data-lucide="award"></i> Formule d'intégration par parties</h4>
            <p>Soient $u$ et $v$ deux fonctions dérivables sur $[a; b]$ dont les dérivées $u'$ et $v'$ sont continues sur $[a; b]$ :</p>
            $$\int_a^b u(x) v'(x) dx = [u(x) v(x)]_a^b - \int_a^b u'(x) v(x) dx$$
          </div>

          <div class="course-method">
            <h4><i data-lucide="help-circle"></i> Exemple de calcul d'une primitive de $\ln(x)$</h4>
            <p>Calculons $I = \int_1^e \ln(x) dx$.</p>
            <p>On peut écrire $\ln(x) = 1 \times \ln(x)$. Posons :</p>
            <ul>
              <li>$u(x) = \ln(x) \implies u'(x) = \frac{1}{x}$</li>
              <li>$v'(x) = 1 \implies v(x) = x$</li>
            </ul>
            <p>Les fonctions $u, v, u'$ et $v'$ sont continues sur $[1; e]$. En appliquant la formule d'IPP :</p>
            $$I = [x \ln(x)]_1^e - \int_1^e x \times \frac{1}{x} dx$$
            $$I = (e \ln(e) - 1 \ln(1)) - \int_1^e 1 dx$$
            $$I = e - [x]_1^e = e - (e - 1) = 1$$
            <p>On en déduit que $\int_1^e \ln(x) dx = 1$.</p>
          </div>
        `
      }
    ]
  }
];

window.COURS_DATA = COURS_DATA;
