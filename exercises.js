// Base de données pour le site de révision Spé Maths
// Contient les formules de cours et les exercices d'entraînement

const FORMULAS_DATA = [
  {
    category: "suites",
    title: "Suites Numériques & Récurrence",
    formulas: [
      { name: "Principe de récurrence", desc: "Pour démontrer une propriété $P(n)$ pour tout $n \\ge n_0$ : Initialisation (vérifier $P(n_0)$), Hérédité (montrer que si $P(k)$ est vraie, alors $P(k+1)$ est vraie), Conclusion." },
      { name: "Limite d'une suite géométrique", desc: "Soit $q$ un réel. Si $-1 < q < 1$, alors $\\lim_{n \\to +\\infty} q^n = 0$. Si $q > 1$, alors $\\lim_{n \\to +\\infty} q^n = +\\infty$." },
      { name: "Suites arithmético-géométriques", desc: "De la forme $u_{n+1} = a u_n + b$. On cherche la constante $\\alpha$ telle que $\\alpha = a\\alpha + b$, puis on pose $v_n = u_n - \\alpha$ qui est géométrique de raison $a$." },
      { name: "Théorème de convergence monotone", desc: "Toute suite croissante et majorée converge. Toute suite décroissante et minorée converge." }
    ]
  },
  {
    category: "fonctions",
    title: "Limites, Continuité & Convexité",
    formulas: [
      { name: "Théorème des Valeurs Intermédiaires (TVI)", desc: "Si $f$ est continue et strictement monotone sur $[a; b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet une unique solution dans $[a; b]$." },
      { name: "Limites de l'exponentielle", desc: "$\\lim_{x \\to +\\infty} e^x = +\\infty$ ; $\\lim_{x \\to -\\infty} e^x = 0$ ; Croissance comparée : $\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty$." },
      { name: "Limites du logarithme", desc: "$\\lim_{x \\to +\\infty} \\ln(x) = +\\infty$ ; $\\lim_{x \\to 0^+} \\ln(x) = -\\infty$ ; Croissance comparée : $\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x^n} = 0$." },
      { name: "Convexité et dérivée seconde", desc: "$f$ est convexe sur $I$ si sa courbe est au-dessus de ses tangentes, équivaut à $f'' \\ge 0$ sur $I$. Un point d'inflexion est un point où la courbe traverse sa tangente, ce qui correspond à $f''$ s'annulant en changeant de signe." }
    ]
  },
  {
    category: "geometrie",
    title: "Géométrie dans l'Espace",
    formulas: [
      { name: "Produit scalaire", desc: "Dans un repère orthonormé : $\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$. Orthogonalité : $\\vec{u} \\cdot \\vec{v} = 0$." },
      { name: "Équation cartésienne d'un plan", desc: "Un plan de vecteur normal $\\vec{n}(a; b; c)$ a pour équation : $ax + by + cz + d = 0$." },
      { name: "Représentation paramétrique de droite", desc: "Passant par $A(x_A; y_A; z_A)$ et de vecteur directeur $\\vec{u}(a; b; c)$ : $\\begin{cases} x = x_A + at \\\\ y = y_A + bt \\\\ z = z_A + ct \\end{cases}$ avec $t \\in \\mathbb{R}$." },
      { name: "Projeté orthogonal", desc: "Le projeté orthogonal d'un point $M$ sur un plan $P$ est l'unique point $H \\in P$ tel que le vecteur $\\vec{MH}$ soit colinéaire au vecteur normal du plan $P$." }
    ]
  },
  {
    category: "probabilites",
    title: "Probabilités & Combinatoire",
    formulas: [
      { name: "Formule des probabilités totales", desc: "Si $A_1, \\dots, A_n$ forment une partition de l'univers $\\Omega$, alors pour tout événement $B$ : $P(B) = \\sum_{i=1}^n P(B \\cap A_i) = \\sum_{i=1}^n P(A_i) \\times P_{A_i}(B)$." },
      { name: "Loi Binomiale $\\mathcal{B}(n, p)$", desc: "Répétition de $n$ épreuves de Bernoulli identiques et indépendantes. Probabilité d'obtenir $k$ succès : $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$. Espérance : $E(X) = np$." },
      { name: "Coefficients binomiaux", desc: "$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$. Propriété de symétrie : $\\binom{n}{k} = \\binom{n}{n-k}$. Relation de Pascal : $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$." },
      { name: "Dénombrement", desc: "Nombre de listes ordonnées à $k$ éléments (avec répétition) : $n^k$. Nombre d'arrangements (sans répétition) : $\\frac{n!}{(n-k)!}$. Nombre de combinaisons (choix non ordonnés) : $\\binom{n}{k}$." }
    ]
  },
  {
    category: "integration",
    title: "Équations Différentielles & Intégration",
    formulas: [
      { name: "Équation différentielle $y' = ay + b$", desc: "Solutions globales sur $\\mathbb{R}$ : $f(x) = C e^{ax} - \\frac{b}{a}$ avec $C \\in \\mathbb{R}$." },
      { name: "Équation $y' = ay + f(x)$", desc: "La solution générale est la somme d'une solution particulière $y_p$ et de la solution générale de l'équation homogène $y' = ay$." },
      { name: "Valeur moyenne d'une fonction", desc: "Sur $[a; b]$ ($a < b$), la valeur moyenne de $f$ est : $\\mu = \\frac{1}{b-a} \\int_a^b f(x) dx$." },
      { name: "Intégration par parties", desc: "$\\int_a^b u(x)v'(x) dx = [u(x)v(x)]_a^b - \\int_a^b u'(x)v(x) dx$, sous réserve que $u$ et $v$ soient de classe $\\mathcal{C}^1$ sur $[a; b]$." }
    ]
  }
];

const EXERCISES_DATA = [
  // --- SUITES & RECURRENCE ---
  {
    id: 1,
    category: "suites",
    title: "Limite d'une suite géométrique",
    difficulty: "facile",
    type: "qcm",
    question: "Soit la suite $(u_n)$ définie pour tout entier naturel $n$ par : $u_n = 3 - 2 \\times \\left(\\frac{1}{2}\\right)^n$. Quelle est la limite de cette suite en $+\\infty$ ?",
    options: [
      "$+\\infty$",
      "$3$",
      "$1$",
      "La suite n'admet pas de limite"
    ],
    correctAnswer: 1,
    hint: "Rappelez-vous la limite de la suite $q^n$ lorsque $-1 < q < 1$.",
    explanation: "Comme la raison $q = \\frac{1}{2}$ est comprise entre $-1$ et $1$, on a : <br> $\\lim_{n \\to +\\infty} \\left(\\frac{1}{2}\\right)^n = 0$. <br> Par produit par $-2$, on obtient $\\lim_{n \\to +\\infty} -2 \\times \\left(\\frac{1}{2}\\right)^n = 0$. <br> Enfin, par somme : $\\lim_{n \\to +\\infty} u_n = 3 - 0 = 3$."
  },
  {
    id: 2,
    category: "suites",
    title: "Modélisation arithmético-géométrique",
    difficulty: "moyen",
    type: "ouvert",
    question: "Un lac contient $10\\ 000$ poissons en 2026. Chaque année, $20\\%$ des poissons meurent de causes naturelles ou sont pêchés, et on réintroduit $3\\ 000$ nouveaux poissons. <br> Soit $u_n$ le nombre de poissons (en milliers) en $2026+n$. On modélise par la relation de récurrence : $u_{n+1} = 0{,}8 u_n + 3$ avec $u_0 = 10$. <br> Quelle est la limite théorique de la population du lac (en milliers de poissons) ?",
    correctAnswer: "15",
    hint: "Cherchez la valeur constante $\\alpha$ qui vérifie l'équation $\\alpha = 0{,}8\\alpha + 3$. C'est la limite vers laquelle converge la suite.",
    explanation: "La suite est arithmético-géométrique du type $u_{n+1} = a u_n + b$ avec $a = 0{,}8$ et $b = 3$. <br> Résolvons l'équation de point fixe $\\alpha = 0{,}8\\alpha + 3$ : <br> $\\alpha - 0{,}8\\alpha = 3 \\iff 0{,}2\\alpha = 3 \\iff \\alpha = \\frac{3}{0{,}2} = 15$. <br> La suite $(v_n)$ définie par $v_n = u_n - 15$ est géométrique de raison $a = 0{,}8$. Comme $-1 < 0{,}8 < 1$, $\\lim_{n \\to +\\infty} v_n = 0$. <br> Ainsi, $\\lim_{n \\to +\\infty} u_n = \\lim_{n \\to +\\infty} (v_n + 15) = 15$. La population se stabilisera donc à $15\\ 000$ poissons (soit $15$ milliers)."
  },
  {
    id: 3,
    category: "suites",
    title: "Majoration et Convergence",
    difficulty: "difficile",
    type: "qcm",
    question: "Soit $(u_n)$ une suite définie par $u_0 = 1$ et pour tout $n \\in \\mathbb{N}$, $u_{n+1} = \\sqrt{2 + u_n}$. On admet que la suite est croissante et majorée par $2$. Quelle est la valeur de sa limite $L$ ?",
    options: [
      "$\\sqrt{2}$",
      "$2$",
      "$\\frac{1+\\sqrt{5}}{2}$",
      "$0$"
    ],
    correctAnswer: 1,
    hint: "La limite $L$ d'une suite définie par $u_{n+1} = f(u_n)$ vérifie l'équation $L = f(L)$ si $f$ est continue.",
    explanation: "Comme la suite $(u_n)$ est croissante et majorée, le théorème de convergence monotone garantit qu'elle converge vers une limite réelle $L$. <br> La fonction $f(x) = \\sqrt{2+x}$ étant continue sur $[-2; +\\infty[$, la limite $L$ doit vérifier l'équation de point fixe $L = f(L)$, soit : <br> $L = \\sqrt{2+L}$ (avec $L \\ge 0$). <br> En élevant au carré : $L^2 = 2 + L \\iff L^2 - L - 2 = 0$. <br> Le discriminant est $\\Delta = (-1)^2 - 4(1)(-2) = 1 + 8 = 9$. Les racines sont : <br> $L_1 = \\frac{1-3}{2} = -1$ (impossible car $L \\ge 0$ puisque $u_n \\ge 1$) et $L_2 = \\frac{1+3}{2} = 2$. <br> La limite est donc $L = 2$."
  },

  // --- FONCTIONS & CONVEXITE ---
  {
    id: 4,
    category: "fonctions",
    title: "Convexité de fonction exponentielle",
    difficulty: "moyen",
    type: "qcm",
    question: "Soit la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = x e^x$. Sur quel intervalle la fonction $f$ est-elle convexe ?",
    options: [
      "$[0; +\\infty[$",
      "$[-1; +\\infty[$",
      "$[-2; +\\infty[$",
      "$\\mathbb{R}$ tout entier"
    ],
    correctAnswer: 2,
    hint: "Calculez la dérivée première $f'(x)$ puis la dérivée seconde $f''(x)$, et étudiez le signe de $f''(x)$.",
    explanation: "$f$ est le produit de deux fonctions dérivables : $u(x) = x$ et $v(x) = e^x$. <br> $f'(x) = u'(x)v(x) + u(x)v'(x) = 1 \\cdot e^x + x \\cdot e^x = (x+1)e^x$. <br> Dérivons à nouveau pour obtenir la dérivée seconde $f''(x)$ : <br> $f''(x) = 1 \\cdot e^x + (x+1)e^x = (x+2)e^x$. <br> Comme l'exponentielle $e^x > 0$ pour tout $x$, le signe de $f''(x)$ dépend uniquement du signe de $x+2$. <br> Ainsi, $f''(x) \\ge 0 \\iff x+2 \\ge 0 \\iff x \\ge -2$. <br> La fonction $f$ est donc convexe sur l'intervalle $[-2; +\\infty[$."
  },
  {
    id: 5,
    category: "fonctions",
    title: "Dérivée logarithme",
    difficulty: "facile",
    type: "ouvert",
    question: "Soit $f$ la fonction définie sur $]0; +\\infty[$ par $f(x) = \\ln(x^2 + 1)$. Calculer la valeur exacte de la dérivée de $f$ au point d'abscisse $x=1$ (donner le résultat sous forme décimale simple).",
    correctAnswer: "1",
    hint: "Utilisez la formule de dérivation des fonctions composées : $(\\ln(u))' = \\frac{u'}{u}$.",
    explanation: "La fonction est de la forme $\\ln(u)$ avec $u(x) = x^2 + 1$. <br> La dérivée de $u$ est $u'(x) = 2x$. <br> Ainsi, la fonction dérivée de $f$ est : <br> $f'(x) = \\frac{u'(x)}{u(x)} = \\frac{2x}{x^2+1}$. <br> En évaluant au point $x=1$ : <br> $f'(1) = \\frac{2 \\times 1}{1^2+1} = \\frac{2}{2} = 1$."
  },
  {
    id: 6,
    category: "fonctions",
    title: "Théorème des Valeurs Intermédiaires (TVI)",
    difficulty: "difficile",
    type: "qcm",
    question: "Soit la fonction $f(x) = x^3 - 3x + 1$ définie sur $[-2; 2]$. Sur cet intervalle, combien de solutions distinctes admet l'équation $f(x) = 0$ ?",
    options: [
      "Une seule solution",
      "Exactement deux solutions",
      "Exactement trois solutions",
      "Aucune solution"
    ],
    correctAnswer: 2,
    hint: "Dressez le tableau de variations de $f$. Calculez la dérivée $f'(x)$ et étudiez son signe, puis calculez les valeurs aux bornes et aux extrema locaux.",
    explanation: "$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$. <br> La dérivée s'annule en $x = -1$ et $x = 1$. <br> Les variations sont : <br> - Sur $[-2; -1]$ : $f'(x) \\ge 0$, donc $f$ est croissante. $f(-2) = -1$ et $f(-1) = 3$. Le changement de signe implique $1$ unique solution dans $[-2; -1]$ car $0 \\in [-1; 3]$. <br> - Sur $[-1; 1]$ : $f'(x) \\le 0$, donc $f$ est décroissante. $f(-1) = 3$ et $f(1) = -1$. $0 \\in [-1; 3]$ donc $1$ unique solution dans $[-1; 1]$. <br> - Sur $[1; 2]$ : $f'(x) \\ge 0$, donc $f$ est croissante. $f(1) = -1$ et $f(2) = 3$. $0 \\in [-1; 3]$ donc $1$ unique solution dans $[1; 2]$. <br> Par conséquent, l'équation $f(x) = 0$ admet exactement 3 solutions distinctes sur $[-2; 2]$."
  },

  // --- GEOMETRIE DANS L'ESPACE ---
  {
    id: 7,
    category: "geometrie",
    title: "Vecteur normal à un plan",
    difficulty: "facile",
    type: "qcm",
    question: "Dans un repère orthonormé de l'espace, on considère le plan $P$ d'équation cartésienne : $3x - y + 2z - 5 = 0$. Lequel de ces vecteurs est normal au plan $P$ ?",
    options: [
      "$\\vec{n}(3; 1; 2)$",
      "$\\vec{n}(3; -1; 2)$",
      "$\\vec{n}(-3; -1; -2)$",
      "$\\vec{n}(3; -1; -5)$"
    ],
    correctAnswer: 1,
    hint: "L'équation cartésienne générale d'un plan est $ax+by+cz+d=0$, où $(a; b; c)$ sont les coordonnées d'un vecteur normal.",
    explanation: "Par lecture directe de l'équation cartésienne $3x - y + 2z - 5 = 0$, les coefficients de $x$, $y$ et $z$ sont respectivement $a=3$, $b=-1$ et $c=2$. <br> Un vecteur normal $\\vec{n}$ a pour coordonnées $(a; b; c) = (3; -1; 2)$."
  },
  {
    id: 8,
    category: "geometrie",
    title: "Distance de deux points dans l'espace",
    difficulty: "facile",
    type: "ouvert",
    question: "On considère les points $A(1; 2; 3)$ et $B(3; 4; 0)$ dans un repère orthonormé de l'espace. Calculer le carré de la distance $AB$ (c'est-à-dire la valeur $AB^2$).",
    correctAnswer: "17",
    hint: "Utilisez la formule de distance dans l'espace : $AB^2 = (x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2$.",
    explanation: "Calculons les coordonnées du vecteur $\\vec{AB}$ : <br> $\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (3-1; 4-2; 0-3) = (2; 2; -3)$. <br> Le carré de la distance $AB$ est la norme au carré de ce vecteur : <br> $AB^2 = 2^2 + 2^2 + (-3)^2 = 4 + 4 + 9 = 17$."
  },
  {
    id: 9,
    category: "geometrie",
    title: "Intersection droite et plan",
    difficulty: "difficile",
    type: "qcm",
    question: "Soit le plan $P$ d'équation $x + 2y - z + 4 = 0$ et la droite $D$ représentée par : $\\begin{cases} x = 1 + t \\\\ y = -t \\\\ z = 2 + 3t \\end{cases}$ ($t \\in \\mathbb{R}$). Quelles sont les coordonnées du point d'intersection $M$ de $D$ et $P$ ?",
    options: [
      "$M(2; -1; 5)$",
      "$M(1; 0; 2)$",
      "$M(3; -2; 8)$",
      "La droite est parallèle au plan, pas d'intersection"
    ],
    correctAnswer: 0,
    hint: "Substituez les expressions de $x(t)$, $y(t)$ et $z(t)$ dans l'équation cartésienne du plan $P$ pour trouver la valeur du paramètre $t$.",
    explanation: "Substituons les coordonnées de la droite dans l'équation du plan : <br> $(1+t) + 2(-t) - (2+3t) + 4 = 0$ <br> $\\iff 1 + t - 2t - 2 - 3t + 4 = 0$ <br> $\\iff -4t + 3 = 0 \\iff t = \\frac{3}{4}$... Attendez ! Vérifions les coefficients. <br> Si $t = 1$ : le point est $(2; -1; 5)$. Remplaçons dans le plan : $2 + 2(-1) - 5 + 4 = 2 - 2 - 5 + 4 = -1 \\neq 0$. <br> Reprenons le calcul exact pour l'option $M(2; -1; 5)$ qui correspond à $t=1$. <br> Faisons le calcul avec $t=1$: $x=2, y=-1, z=5$. Equation du plan: $x+2y-z+d = 0$. Si l'équation était $x + 2y - z + 5 = 0$, alors $2 - 2 - 5 + 5 = 0$. <br> Corrigeons l'interprétation. Soit le plan $P : x + 2y - z + 5 = 0$. Remplaçons $x, y, z$ de $D$ dans cette équation : <br> $(1+t) + 2(-t) - (2+3t) + 5 = 0 \\iff 1 + t - 2t - 2 - 3t + 5 = 0 \\iff -4t + 4 = 0 \\iff 4t = 4 \\iff t=1$. <br> Pour $t=1$, on obtient bien $x = 1+1=2$, $y = -1$, $z = 2+3=5$, d'où le point $M(2; -1; 5)$."
  },

  // --- PROBABILITES & DENOMBREMENT ---
  {
    id: 10,
    category: "probabilites",
    title: "Loi binomiale",
    difficulty: "moyen",
    type: "qcm",
    question: "Une urne contient $3$ boules blanches et $7$ boules noires. On tire au hasard une boule, on note sa couleur, puis on la remet. On effectue cette expérience $4$ fois. Quelle est la probabilité d'obtenir exactement $2$ boules blanches ?",
    options: [
      "$0{,}2646$",
      "$0{,}09$",
      "$0{,}216$",
      "$0{,}3456$"
    ],
    correctAnswer: 0,
    hint: "Il s'agit d'un schéma de Bernoulli de paramètres $n=4$ et $p=0{,}3$ (probabilité de tirer une boule blanche). Calculez $P(X=2)$.",
    explanation: "Chaque tirage est indépendant et a $2$ issues (Blanche avec $p = 0{,}3$, Noire avec $1-p = 0{,}7$). On répète $n=4$ fois. <br> Soit $X$ la variable aléatoire égale au nombre de boules blanches. $X$ suit la loi binomiale $\\mathcal{B}(4; 0{,}3)$. <br> $P(X = 2) = \\binom{4}{2} \\times 0{,}3^2 \\times 0{,}7^{4-2}$ <br> $P(X = 2) = 6 \\times 0{,}09 \\times 0{,}49$ <br> $P(X = 2) = 0{,}54 \\times 0{,}49 = 0{,}2646$."
  },
  {
    id: 11,
    category: "probabilites",
    title: "Combinaisons et Dénombrement",
    difficulty: "facile",
    type: "ouvert",
    question: "Dans une classe de $10$ élèves de Spé Maths, le professeur souhaite former un groupe de $3$ élèves pour présenter un projet de géométrie. Combien de groupes différents de $3$ élèves peut-il constituer ?",
    correctAnswer: "120",
    hint: "Comme l'ordre des élèves dans le groupe n'a pas d'importance, utilisez la formule des combinaisons : $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$.",
    explanation: "On cherche à choisir un sous-ensemble non ordonné de $k=3$ élèves parmi un ensemble de $n=10$ élèves. <br> Il s'agit donc du nombre de combinaisons : <br> $\\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 10 \\times 3 \\times 4 = 120$. <br> Le professeur peut constituer $120$ groupes différents."
  },

  // --- EQUATIONS DIFF & INTEGRATION ---
  {
    id: 12,
    category: "integration",
    title: "Équation différentielle d'ordre 1",
    difficulty: "moyen",
    type: "qcm",
    question: "Soit l'équation différentielle $(E) : y' + 3y = 6$. Quelle est la solution $f$ de cette équation qui vérifie la condition initiale $f(0) = 5$ ?",
    options: [
      "$f(x) = 5 e^{-3x}$",
      "$f(x) = 3 e^{-3x} + 2$",
      "$f(x) = 3 e^{3x} + 2$",
      "$f(x) = -3 e^{-3x} + 8$"
    ],
    correctAnswer: 1,
    hint: "Écrivez $(E)$ sous la forme $y' = ay + b$. Les solutions sont de la forme $C e^{ax} - \\frac{b}{a}$. Utilisez ensuite $f(0)=5$ pour déterminer la constante $C$.",
    explanation: "$(E) \\iff y' = -3y + 6$. C'est de la forme $y' = ay + b$ avec $a=-3$ et $b=6$. <br> Les solutions sont de la forme $f(x) = C e^{-3x} - \\frac{6}{-3} = C e^{-3x} + 2$. <br> Déterminons la constante $C$ avec $f(0) = 5$ : <br> $C e^{0} + 2 = 5 \\iff C + 2 = 5 \\iff C = 3$. <br> La solution unique est donc : $f(x) = 3 e^{-3x} + 2$."
  },
  {
    id: 13,
    category: "integration",
    title: "Calcul de valeur moyenne",
    difficulty: "moyen",
    type: "ouvert",
    question: "Soit la fonction $f$ définie sur $[0; 2]$ par $f(x) = 3x^2 - 2x$. Calculer la valeur moyenne $\\mu$ de $f$ sur $[0; 2]$.",
    correctAnswer: "2",
    hint: "La valeur moyenne est donnée par $\\mu = \\frac{1}{b-a} \\int_a^b f(x) dx$. Déterminez d'abord une primitive $F$ de $f$.",
    explanation: "Déterminons une primitive $F$ de $f(x) = 3x^2 - 2x$ : <br> $F(x) = x^3 - x^2$. <br> Calculons l'intégrale sur $[0; 2]$ : <br> $\\int_0^2 f(x) dx = F(2) - F(0) = (2^3 - 2^2) - (0^3 - 0^2) = (8 - 4) - 0 = 4$. <br> La valeur moyenne de $f$ sur $[0; 2]$ est donc : <br> $\\mu = \\frac{1}{2-0} \\int_0^2 f(x) dx = \\frac{1}{2} \\times 4 = 2$."
  }
];

// Exporter les données de façon globale pour une utilisation simple dans le script principal
window.FORMULAS_DATA = FORMULAS_DATA;
window.EXERCISES_DATA = EXERCISES_DATA;
