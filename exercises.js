// Base de données révisée avec de réels exercices d'annales du Baccalauréat Spé Maths
// Contient les formules de cours (formulaire) et les exercices réels du Bac

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
    title: "Limite de suite définie par récurrence (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>D'après Bac Métropole 2023 (Candidats Libres)</b><br>Soit la suite $(u_n)$ définie pour tout entier naturel $n$ par $u_0 = 5$ et $u_{n+1} = \\frac{3u_n + 1}{u_n + 3}$. On admet que la suite $(u_n)$ converge vers une limite réelle $L$ et que $u_n > 1$ pour tout entier naturel $n$. Quelle est la valeur de la limite $L$ ?",
    options: [
      "$0$",
      "$1$",
      "$3$",
      "$+\\infty$"
    ],
    correctAnswer: 1,
    hint: "La fonction associée $f(x) = \\frac{3x+1}{x+3}$ est continue. La limite $L$ vérifie donc le point fixe $L = f(L)$, soit $L = \\frac{3L+1}{L+3}$ avec $L \\ge 1$.",
    explanation: "Comme $(u_n)$ converge vers $L$ et que la fonction $f(x) = \\frac{3x+1}{x+3}$ est continue sur $]-3; +\\infty[$, la limite $L$ vérifie l'équation : <br> $L = f(L) \\iff L = \\frac{3L+1}{L+3}$. <br> En multipliant par $L+3$ (car $L \\ge 1$, donc $L+3 \\ne 0$) : <br> $L(L+3) = 3L+1 \\iff L^2 + 3L = 3L + 1 \\iff L^2 = 1$. <br> L'équation admet deux solutions réelles : $L = 1$ ou $L = -1$. <br> Comme la suite est minorée par $1$ (on a $u_n > 1$ pour tout $n$), la limite $L$ doit être supérieure ou égale à $1$. <br> La seule limite possible est donc $L = 1$."
  },
  {
    id: 2,
    category: "suites",
    title: "Limite de suite arithmético-géométrique (Ouvert)",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>D'après Bac Antilles-Guyane 2022</b><br>Soit la suite $(u_n)$ modélisant une réserve naturelle, définie par $u_0 = 2$ et pour tout $n \\ge 0$ par $u_{n+1} = 0{,}5 u_n + 3$. <br> Déterminer la limite de cette suite $(u_n)$ en $+\\infty$.",
    correctAnswer: "6",
    hint: "Résolvez l'équation de point fixe $\\alpha = 0{,}5\\alpha + 3$. C'est la limite vers laquelle converge toute suite arithmético-géométrique stable.",
    explanation: "La relation est de la forme $u_{n+1} = a u_n + b$ avec $a=0{,}5$ et $b=3$. <br> 1. Cherchons la constante de point fixe $\\alpha$ : <br> $\\alpha = 0{,}5\\alpha + 3 \\iff 0{,}5\\alpha = 3 \\iff \\alpha = \\frac{3}{0{,}5} = 6$. <br> 2. On introduit la suite auxiliaire $v_n = u_n - 6$. Montrons qu'elle est géométrique : <br> $v_{n+1} = u_{n+1} - 6 = 0{,}5 u_n + 3 - 6 = 0{,}5 u_n - 3 = 0{,}5(u_n - 6) = 0{,}5 v_n$. <br> La suite $(v_n)$ est donc géométrique de raison $q = 0{,}5$ et de premier terme $v_0 = u_0 - 6 = 2 - 6 = -4$. <br> 3. Expression explicite : $v_n = -4 \\times 0{,}5^n$, ce qui implique $u_n = 6 - 4 \\times 0{,}5^n$. <br> 4. Limite : Comme $-1 < 0{,}5 < 1$, on a $\\lim_{n \\to +\\infty} 0{,}5^n = 0$. <br> Donc $\\lim_{n \\to +\\infty} u_n = 6 - 0 = 6$."
  },

  // --- FONCTIONS & CONVEXITE ---
  {
    id: 3,
    category: "fonctions",
    title: "Étude de la dérivée seconde (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>D'après Bac Métropole 2021</b><br>Soit la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = (x - 1)e^x + 1$. Quelle est l'expression de sa dérivée seconde $f''(x)$ sur $\\mathbb{R}$ ?",
    options: [
      "$f''(x) = (x+1)e^x$",
      "$f''(x) = x e^x$",
      "$f''(x) = (x-1)e^x$",
      "$f''(x) = e^x$"
    ],
    correctAnswer: 0,
    hint: "Dérivez une première fois $f(x)$ en utilisant la règle du produit $(uv)' = u'v + uv'$ avec $u(x) = x-1$ et $v(x) = e^x$. Puis dérivez à nouveau $f'(x)$.",
    explanation: "Calculons d'abord la dérivée première $f'(x)$ : <br> Soit $u(x) = x - 1 \\implies u'(x) = 1$ et $v(x) = e^x \\implies v'(x) = e^x$. <br> $f'(x) = 1 \\times e^x + (x - 1)e^x = e^x + x e^x - e^x = x e^x$. <br> Dérivons maintenant $f'(x)$ pour obtenir $f''(x)$ : <br> $f'(x)$ est de la forme $w(x) \\cdot e^x$ avec $w(x) = x$ (d'où $w'(x) = 1$). <br> $f''(x) = w'(x)e^x + w(x)e^x = 1 \\times e^x + x \\times e^x = (x + 1)e^x$."
  },
  {
    id: 4,
    category: "fonctions",
    title: "Primitive et calcul d'intégrale (Ouvert)",
    difficulty: "difficile",
    type: "ouvert",
    question: "<b>D'après Bac Amérique du Nord 2023</b><br>Soit la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = x e^{x^2}$. On cherche la valeur exacte de l'intégrale $I = \\int_0^1 x e^{x^2} dx$. <br> On écrira la réponse sous la forme simplifiée $\\frac{e - 1}{2}$ approchée par une valeur décimale arrondie à 3 chiffres après la virgule (ex: 0.859).",
    correctAnswer: "0.859",
    hint: "Remarquez que $x e^{x^2}$ est de la forme $\\frac{1}{2} u'(x) e^{u(x)}$ avec $u(x) = x^2$. Trouvez sa primitive $F(x)$.",
    explanation: "La fonction $f(x) = x e^{x^2}$ peut être réécrite sous la forme : <br> $f(x) = \\frac{1}{2} \\times (2x e^{x^2})$. <br> Si on pose $u(x) = x^2$, on a $u'(x) = 2x$. La fonction est donc de la forme $\\frac{1}{2} u'(x) e^{u(x)}$. <br> Une primitive $F$ de $f$ sur $\\mathbb{R}$ est : <br> $F(x) = \\frac{1}{2} e^{x^2}$. <br> Calculons maintenant l'intégrale $I$ : <br> $I = \\int_0^1 x e^{x^2} dx = \\left[ \\frac{1}{2} e^{x^2} \\right]_0^1 = F(1) - F(0)$ <br> $I = \\frac{1}{2} e^{1^2} - \\frac{1}{2} e^{0^2} = \\frac{e}{2} - \\frac{1}{2} = \\frac{e - 1}{2}$. <br> La valeur numérique approchée est : <br> $\\frac{2{,}71828 - 1}{2} \\approx 0{,}859$."
  },

  // --- GEOMETRIE DANS L'ESPACE ---
  {
    id: 5,
    category: "geometrie",
    title: "Vecteur normal et produit scalaire (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>D'après Bac Métropole 2023</b><br>Dans un repère orthonormé de l'espace, on considère les points $A(1; 0; 2)$, $B(2; 1; 4)$ et $C(3; 0; 1)$. Lequel de ces vecteurs est normal au plan $(ABC)$ ?",
    options: [
      "$\\vec{n}(1; -5; 2)$",
      "$\\vec{n}(2; 1; 4)$",
      "$\\vec{n}(1; 1; 2)$",
      "$\\vec{n}(1; 2; 3)$"
    ],
    correctAnswer: 0,
    hint: "Déterminez les coordonnées des vecteurs $\\vec{AB}$ et $\\vec{AC}$, puis vérifiez quel vecteur $\\vec{n}$ est orthogonal à ces deux vecteurs simultanément en calculant leur produit scalaire.",
    explanation: "Calculons les coordonnées des vecteurs directeurs du plan : <br> $\\vec{AB} = (2-1; 1-0; 4-2) = (1; 1; 2)$. <br> $\\vec{AC} = (3-1; 0-0; 1-2) = (2; 0; -1)$. <br> Vérifions l'orthogonalité du vecteur proposé $\\vec{n}(1; -5; 2)$ : <br> - $\\vec{n} \\cdot \\vec{AB} = 1 \\times 1 + (-5) \\times 1 + 2 \\times 2 = 1 - 5 + 4 = 0$. <br> - $\\vec{n} \\cdot \\vec{AC} = 1 \\times 2 + (-5) \\times 0 + 2 \\times (-1) = 2 + 0 - 2 = 0$. <br> Comme $\\vec{n}$ est orthogonal à deux vecteurs non colinéaires $\\vec{AB}$ et $\\vec{AC}$ du plan $(ABC)$, $\\vec{n}$ est bien normal au plan $(ABC)$."
  },
  {
    id: 6,
    category: "geometrie",
    title: "Orthogonalité de vecteurs (Ouvert)",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>D'après Bac Centres Étrangers 2023</b><br>Dans un repère orthonormé, on considère les vecteurs $\\vec{u}(2; 1; -3)$ et $\\vec{v}(1; k; 2)$ où $k$ est un nombre réel. <br> Déterminer la valeur du réel $k$ pour que les vecteurs $\\vec{u}$ et $\\vec{v}$ soient orthogonaux.",
    correctAnswer: "4",
    hint: "Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul : $\\vec{u} \\cdot \\vec{v} = 0$.",
    explanation: "Calculons le produit scalaire $\\vec{u} \\cdot \\vec{v}$ dans le repère orthonormé : <br> $\\vec{u} \\cdot \\vec{v} = x_u x_v + y_u y_v + z_u z_v$ <br> $\\vec{u} \\cdot \\vec{v} = 2 \\times 1 + 1 \\times k + (-3) \\times 2$ <br> $\\vec{u} \\cdot \\vec{v} = 2 + k - 6 = k - 4$. <br> Pour que les vecteurs soient orthogonaux, il faut et il suffit que leur produit scalaire soit nul : <br> $k - 4 = 0 \\iff k = 4$. <br> La valeur cherchée est $4$."
  },

  // --- PROBABILITES & DENOMBREMENT ---
  {
    id: 7,
    category: "probabilites",
    title: "Dénombrement de mots de passe (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>D'après Bac Métropole 2022</b><br>Un système de sécurité exige un mot de passe composé de 4 chiffres distincts choisis parmi les chiffres de $0$ à $9$. Combien de mots de passe différents peut-on former ?",
    options: [
      "$5\\ 040$",
      "$10\\ 000$",
      "$210$",
      "$24$"
    ],
    correctAnswer: 0,
    hint: "L'ordre des chiffres compte dans un mot de passe, et les éléments doivent être distincts. Il s'agit donc d'un arrangement de 4 éléments parmi 10.",
    explanation: "Pour le premier chiffre du code, nous avons 10 choix (de 0 à 9). <br> Comme les chiffres doivent être distincts, il nous reste 9 choix pour le deuxième, 8 choix pour le troisième, et 7 choix pour le quatrième. <br> Par le principe multiplicatif, le nombre total de combinaisons est : <br> $A_{10}^{4} = 10 \\times 9 \\times 8 \\times 7 = 5\\ 040$."
  },
  {
    id: 8,
    category: "probabilites",
    title: "Espérance de loi binomiale (Ouvert)",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>D'après Bac Amérique du Sud 2022</b><br>Dans une usine de tri, la probabilité qu'un colis contienne un article défectueux est $p = 0{,}4$. On choisit de manière indépendante un échantillon de $5$ colis. On appelle $X$ la variable aléatoire correspondant au nombre de colis contenant un article défectueux. <br> Calculer l'espérance mathématique $E(X)$ de cette variable aléatoire.",
    correctAnswer: "2",
    hint: "Identifiez les paramètres $n$ et $p$ de la loi binomiale suivie par $X$, puis appliquez la formule de l'espérance : $E(X) = n \\times p$.",
    explanation: "1. Les tirages étant indépendants et identiques avec deux issues possibles (défectueux avec $p=0{,}4$ ou non défectueux), la variable aléatoire $X$ suit une loi binomiale de paramètres $n=5$ et $p=0{,}4$, notée $\\mathcal{B}(5; 0{,}4)$. <br> 2. L'espérance mathématique d'une variable suivant une loi binomiale est donnée par la formule : <br> $E(X) = n \\times p$. <br> 3. En remplaçant par les valeurs de l'énoncé : <br> $E(X) = 5 \\times 0{,}4 = 2$. <br> L'espérance de $X$ est donc $2$."
  },

  // --- EQUATIONS DIFF & INTEGRATION ---
  {
    id: 9,
    category: "integration",
    title: "Intégration par parties (Ouvert)",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>D'après Bac Centres Étrangers 2022</b><br>Calculer la valeur exacte de l'intégrale suivante : $J = \\sum \\int_0^1 x e^x dx$. <br> Donner le résultat sous forme d'un nombre entier simple.",
    correctAnswer: "1",
    hint: "Utilisez la méthode d'intégration par parties : $\\int_a^b u(x)v'(x)dx = [u(x)v(x)]_a^b - \\int_a^b u'(x)v(x)dx$. Posez $u(x) = x$ et $v'(x) = e^x$.",
    explanation: "Posons les deux fonctions de classe $\\mathcal{C}^1$ sur $[0; 1]$ : <br> - $u(x) = x \\implies u'(x) = 1$. <br> - $v'(x) = e^x \\implies v(x) = e^x$. <br> Appliquons la formule d'intégration par parties : <br> $J = [x e^x]_0^1 - \\int_0^1 1 \\times e^x dx$ <br> $J = (1 \\times e^1 - 0 \\times e^0) - [e^x]_0^1$ <br> $J = e - (e^1 - e^0)$ <br> $J = e - e + e^0 = e^0 = 1$. <br> La valeur exacte de l'intégrale est donc $1$."
  },
  {
    id: 10,
    category: "integration",
    title: "Résolution d'équation différentielle y' = ay + b (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>D'après Bac Polynésie 2023</b><br>Soit l'équation différentielle $(E) : y' - 3y = 9$. Quelle est la solution $f$ de cette équation qui vérifie la condition initiale $f(0) = -2$ ?",
    options: [
      "$f(x) = e^{3x} - 3$",
      "$f(x) = e^{-3x} - 3$",
      "$f(x) = -2 e^{3x}$",
      "$f(x) = 3 e^{3x} - 5$"
    ],
    correctAnswer: 0,
    hint: "Réécrivez l'équation sous la forme $y' = 3y + 9$. Les solutions d'une équation $y' = ay + b$ sont de la forme $C e^{ax} - \\frac{b}{a}$. Déterminez ensuite la constante $C$ avec $f(0) = -2$.",
    explanation: "L'équation $(E)$ se réécrit : $y' = 3y + 9$. <br> C'est une équation de la forme $y' = ay + b$ avec $a = 3$ et $b = 9$. <br> Les solutions générales sont définies sur $\\mathbb{R}$ par : <br> $f(x) = C e^{3x} - \\frac{9}{3} = C e^{3x} - 3$ (où $C$ est une constante réelle). <br> Utilisons la condition initiale $f(0) = -2$ pour trouver $C$ : <br> $f(0) = -2 \\iff C e^{3 \\times 0} - 3 = -2 \\iff C \\times 1 - 3 = -2 \\iff C = -2 + 3 = 1$. <br> La solution unique est donc : $f(x) = e^{3x} - 3$."
  }
];

// Exporter les données de façon globale pour une utilisation simple dans le script principal
window.FORMULAS_DATA = FORMULAS_DATA;
window.EXERCISES_DATA = EXERCISES_DATA;
