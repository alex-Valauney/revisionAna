// Fichier de cours et formules de référence (chargé au démarrage)
// Les exercices de chaque chapitre sont chargés dynamiquement (lazy loading)

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

// Espace de stockage pour les exercices chargés dynamiquement
window.EXERCISES_BY_CAT = {};
window.FORMULAS_DATA = FORMULAS_DATA;
