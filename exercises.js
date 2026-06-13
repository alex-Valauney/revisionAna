// Base de données contenant 100 exercices d'annales du Baccalauréat Spé Maths (20 par chapitre)
// Contient également le formulaire de cours récapitulatif

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
  // ==========================================
  // --- CHAPITRE 1 : SUITES ET RECURRENCE ---
  // ==========================================
  {
    id: 1,
    category: "suites",
    title: "Limite de suite définie par récurrence",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Métropole 2023</b><br>Soit la suite $(u_n)$ définie par $u_0 = 5$ et $u_{n+1} = \\frac{3u_n + 1}{u_n + 3}$. On admet que la suite converge vers une limite réelle $L$ et que $u_n > 1$ pour tout $n \\in \\mathbb{N}$. Déterminer sa limite.",
    options: ["$0$", "$1$", "$3$", "$+\\infty$"],
    correctAnswer: 1,
    hint: "La limite $L$ vérifie l'équation $L = f(L)$ car la fonction associée $f(x) = \\frac{3x+1}{x+3}$ est continue.",
    explanation: "Comme $(u_n)$ converge vers $L$ et que $f(x)=\\frac{3x+1}{x+3}$ est continue sur $[1;+\\infty[$, $L$ vérifie : <br> $L = \\frac{3L+1}{L+3} \\iff L(L+3) = 3L+1 \\iff L^2 + 3L = 3L+1 \\iff L^2 = 1$. <br> Comme la suite est positive ($u_n > 1$), on en conclut que $L = 1$."
  },
  {
    id: 2,
    category: "suites",
    title: "Limite de suite arithmético-géométrique",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Antilles-Guyane 2022</b><br>Soit la suite $(u_n)$ définie par $u_0 = 2$ et pour tout $n \\ge 0$, $u_{n+1} = 0{,}5 u_n + 3$. <br> Calculer la limite de cette suite $(u_n)$ en $+\\infty$.",
    correctAnswer: "6",
    hint: "Résolvez l'équation de point fixe $\\alpha = 0{,}5\\alpha + 3$.",
    explanation: "Résolvons $\\alpha = 0{,}5\\alpha + 3 \\iff 0{,}5\\alpha = 3 \\iff \\alpha = 6$. La suite $v_n = u_n - 6$ est géométrique de raison $0{,}5$ et converge vers 0. Donc la limite de $u_n = v_n + 6$ est égale à $6$."
  },
  {
    id: 3,
    category: "suites",
    title: "Vérification du premier terme",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Métropole 2021</b><br>Soit $(u_n)$ définie par $u_{n+1} = 2u_n - 3$ avec $u_0 = 4$. <br> Calculer la valeur exacte de $u_3$.",
    correctAnswer: "11",
    hint: "Calculez de proche en proche $u_1$, $u_2$, puis $u_3$.",
    explanation: "$u_1 = 2(4) - 3 = 5$ <br> $u_2 = 2(5) - 3 = 7$ <br> $u_3 = 2(7) - 3 = 11$."
  },
  {
    id: 4,
    category: "suites",
    title: "Raison d'une suite géométrique",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Métropole 2021</b><br>Soit $(u_n)$ une suite géométrique de termes strictement positifs telle que $u_3 = 24$ et $u_5 = 96$. <br> Déterminer la valeur exacte de la raison $q$ de cette suite.",
    correctAnswer: "2",
    hint: "Utilisez la relation $u_5 = u_3 \\times q^2$ pour trouver $q^2$.",
    explanation: "$u_5 = u_3 \\times q^2 \\iff 96 = 24 \\times q^2 \\iff q^2 = 4$. <br> Les termes étant strictement positifs, on en déduit que $q = 2$."
  },
  {
    id: 5,
    category: "suites",
    title: "Point fixe d'une suite",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Amérique du Nord 2022</b><br>Soit $(u_n)$ définie par $u_0 = 1$ et $u_{n+1} = 0{,}8 u_n + 2$. <br> Quelle est la valeur de la limite théorique de cette suite ?",
    correctAnswer: "10",
    hint: "Cherchez la valeur constante $\\alpha$ qui vérifie $\\alpha = 0{,}8\\alpha + 2$.",
    explanation: "L'équation $\\alpha = 0{,}8\\alpha + 2$ donne $0{,}2\\alpha = 2 \\iff \\alpha = 10$. La suite converge vers ce point fixe de valeur 10."
  },
  {
    id: 6,
    category: "suites",
    title: "Somme de termes consécutifs",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Polynésie 2021</b><br>Soit $(u_n)$ la suite arithmétique de premier terme $u_1 = 2$ et de raison $r = 4$. <br> Calculer la somme des 5 premiers termes : $S = u_1 + u_2 + u_3 + u_4 + u_5$.",
    correctAnswer: "50",
    hint: "Déterminez les 5 termes et faites-en la somme, ou utilisez la formule $S = n \\times \\frac{\\text{premier} + \\text{dernier}}{2}$.",
    explanation: "Les termes sont : $u_1 = 2$, $u_2 = 6$, $u_3 = 10$, $u_4 = 14$, $u_5 = 18$. <br> La somme est : $S = 2 + 6 + 10 + 14 + 18 = 50$."
  },
  {
    id: 7,
    category: "suites",
    title: "Limite de suite géométrique de raison < 1 (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Asie 2021</b><br>Soit la suite $(u_n)$ définie par $u_n = 3 \\times 0{,}75^n - 2$. Quelle est la limite de cette suite ?",
    options: ["$-2$", "$0$", "$3$", "$-\\infty$"],
    correctAnswer: 0,
    hint: "Déterminez la limite de $0{,}75^n$ car $-1 < 0{,}75 < 1$.",
    explanation: "Comme $-1 < 0{,}75 < 1$, on a $\\lim_{n \\to +\\infty} 0{,}75^n = 0$. <br> Par conséquent, par produit et somme : $\\lim_{n \\to +\\infty} u_n = 3 \\times 0 - 2 = -2$."
  },
  {
    id: 8,
    category: "suites",
    title: "Détection de croissance de suite",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Métropole 2022</b><br>Soit la suite $(u_n)$ définie pour tout entier $n$ par $u_n = n^2 - 4n$. A partir de quel rang $n_0$ la suite est-elle strictement croissante ?",
    options: ["$n_0 = 0$", "$n_0 = 1$", "$n_0 = 2$", "$n_0 = 4$"],
    correctAnswer: 2,
    hint: "Calculez la différence $u_{n+1} - u_n$ et cherchez quand elle devient positive.",
    explanation: "$u_{n+1} - u_n = (n+1)^2 - 4(n+1) - (n^2 - 4n) = n^2 + 2n + 1 - 4n - 4 - n^2 + 4n = 2n - 3$. <br> Cette différence est positive si $2n - 3 > 0 \\iff n > 1{,}5$. Donc à partir du rang $n_0 = 2$."
  },
  {
    id: 9,
    category: "suites",
    title: "Seuil algorithmique en Python (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Antilles 2021</b><br>Soit le script Python suivant :<br><pre>def seuil():\n  u = 2\n  n = 0\n  while u < 100:\n    u = 3*u + 1\n    n = n + 1\n  return n</pre>Quelle valeur renvoie cet algorithme ?",
    options: ["$3$", "$4$", "$5$", "$100$"],
    correctAnswer: 1,
    hint: "Calculez les valeurs successives de $u$ : $u_0=2$, $u_1=7$, $u_2=22$, ... jusqu'à dépasser 100.",
    explanation: "- $n=0, u=2$ <br>- $n=1, u=3(2)+1=7$ <br>- $n=2, u=3(7)+1=22$ <br>- $n=3, u=3(22)+1=67$ <br>- $n=4, u=3(67)+1=202$ (boucle s'arrête car $202 \\ge 100$). Le rang renvoyé est donc 4."
  },
  {
    id: 10,
    category: "suites",
    title: "Démonstration par récurrence d'une inégalité (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Mayotte 2021</b><br>On veut montrer par récurrence que pour tout $n \\ge 1$, $2^n \\ge n + 1$. Lors de l'étape d'hérédité, quelle hypothèse de récurrence doit-on poser ?",
    options: [
      "On suppose que $2^k \\ge k+1$ pour un entier $k \\ge 1$",
      "On suppose que $2^{k+1} \\ge k+2$ pour un entier $k \\ge 1$",
      "On suppose que la propriété est vraie pour tout entier $n$",
      "On suppose que $2^k < k+1$"
    ],
    correctAnswer: 0,
    hint: "L'hérédité consiste à supposer la propriété vraie au rang $k$ pour prouver sa véracité au rang $k+1$.",
    explanation: "Pour montrer l'hérédité, on suppose la propriété $P(k)$ vraie pour un certain entier $k \\ge 1$, c'est-à-dire que $2^k \\ge k+1$, afin d'en déduire que $2^{k+1} \\ge (k+1)+1$."
  },
  {
    id: 11,
    category: "suites",
    title: "Limite de suite rationnelle (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Nouvelle-Calédonie 2022</b><br>Quelle est la limite en $+\\infty$ de la suite définie par $u_n = \\frac{2n^2 + 3}{5n^2 - n + 1}$ ?",
    options: ["$0$", "$0{,}4$", "$+\\infty$", "La limite n'existe pas"],
    correctAnswer: 1,
    hint: "Mettez en facteur le terme de plus haut degré $n^2$ au numérateur et au dénominateur.",
    explanation: "$u_n = \\frac{n^2(2 + 3/n^2)}{n^2(5 - 1/n + 1/n^2)} = \\frac{2 + 3/n^2}{5 - 1/n + 1/n^2}$. <br> Par limite de quotient : $\\lim_{n \\to +\\infty} u_n = \\frac{2 + 0}{5 - 0 + 0} = \\frac{2}{5} = 0{,}4$."
  },
  {
    id: 12,
    category: "suites",
    title: "Suite de Fibonacci modifiée",
    difficulty: "difficile",
    type: "ouvert",
    question: "<b>Bac Réunion 2021</b><br>Soit $(u_n)$ définie par $u_0 = 1$, $u_1 = 1$ et $u_{n+2} = u_{n+1} + 2u_n$. <br> Calculer la valeur exacte de $u_4$.",
    correctAnswer: "11",
    hint: "Calculez de proche en proche $u_2$, $u_3$, puis $u_4$.",
    explanation: "$u_2 = u_1 + 2u_0 = 1 + 2(1) = 3$. <br> $u_3 = u_2 + 2u_1 = 3 + 2(1) = 5$. <br> $u_4 = u_3 + 2u_2 = 5 + 2(3) = 11$."
  },
  {
    id: 13,
    category: "suites",
    title: "Théorème de convergence monotone",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Asie 2022</b><br>Soit $(u_n)$ une suite croissante et majorée par 5. Que peut-on affirmer ?",
    options: [
      "La suite converge vers 5",
      "La suite diverge vers $+\\infty$",
      "La suite converge vers une limite réelle $L \\le 5$",
      "La suite n'a pas de limite"
    ],
    correctAnswer: 2,
    hint: "Rappelez-vous les conditions du théorème de convergence monotone.",
    explanation: "D'après le théorème de convergence monotone, toute suite croissante et majorée converge vers un réel $L$. De plus, la limite est inférieure ou égale au majorant, donc $L \\le 5$."
  },
  {
    id: 14,
    category: "suites",
    title: "Inégalité de Bernoulli (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Polynésie 2022</b><br>Pour tout réel $a > 0$ et tout entier $n \\in \\mathbb{N}$, l'inégalité de Bernoulli s'écrit :",
    options: [
      "$(1+a)^n \\ge 1 + na$",
      "$(1+a)^n \\le 1 + na$",
      "$(1-a)^n \\ge 1 - na$",
      "$(1+a)^n \\ge 1 + a^n$"
    ],
    correctAnswer: 0,
    hint: "C'est une formule de référence sur la croissance géométrique démontrée par récurrence.",
    explanation: "L'inégalité de Bernoulli stipule que pour tout réel $a \\ge 0$ (ou $a > -1$) et pour tout entier naturel $n$, $(1+a)^n \\ge 1 + na$."
  },
  {
    id: 15,
    category: "suites",
    title: "Limite de $n! / n^n$ (QCM)",
    difficulty: "difficile",
    type: "qcm",
    question: "<b>Bac Amérique du Nord 2023</b><br>Soit la suite $(u_n)$ définie pour tout $n \\ge 1$ par $u_n = \\frac{n!}{n^n}$. Quelle est la limite de cette suite ?",
    options: ["$0$", "$1$", "$+\\infty$", "La suite diverge sans limite"],
    correctAnswer: 0,
    hint: "On peut montrer que pour tout $n \\ge 1$, $0 < u_n \\le \\frac{1}{n}$. Utilisez ensuite le théorème des gendarmes.",
    explanation: "$u_n = \\frac{1 \\times 2 \\times \\dots \\times n}{n \\times n \\times \\dots \\times n} = \\frac{1}{n} \\times \\left(\\frac{2}{n} \\times \\dots \\times \\frac{n}{n}\\right) \\le \\frac{1}{n}$ car chaque terme de la parenthèse est $\\le 1$. <br> Comme $0 < u_n \\le \\frac{1}{n}$ et $\\lim_{n \\to +\\infty} \\frac{1}{n} = 0$, d'après le théorème des gendarmes, $\\lim_{n \\to +\\infty} u_n = 0$."
  },
  {
    id: 16,
    category: "suites",
    title: "Rang du terme d'une suite",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Métropole 2021</b><br>Soit $(u_n)$ une suite arithmétique de premier terme $u_0 = 5$ et de raison $r = 3$. <br> Déterminer le rang $n$ pour lequel $u_n = 35$.",
    correctAnswer: "10",
    hint: "Utilisez la formule du terme général d'une suite arithmétique : $u_n = u_0 + n \\times r$.",
    explanation: "$u_n = 5 + 3n$. On cherche $n$ tel que $5 + 3n = 35 \\iff 3n = 30 \\iff n = 10$."
  },
  {
    id: 17,
    category: "suites",
    title: "Conjecture de limite sur graphique (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Centres Étrangers 2023</b><br>Soit la suite $(u_n)$ définie par $u_0=0{,}5$ et représentée par la droite d'équation $y=x$ et la courbe $y = \\sqrt{x}$. Vers quel nombre la suite semble-t-elle converger graphiquement ?",
    options: ["$0$", "$0{,}5$", "$1$", "La suite diverge"],
    correctAnswer: 2,
    hint: "L'intersection de $y=x$ et $y=\\sqrt{x}$ donne la valeur limite possible.",
    explanation: "En construisant l'escalier graphique des termes, la suite converge vers le point d'intersection de la courbe et de la droite, soit la solution de $x = \\sqrt{x} \\iff x^2 = x \\iff x = 1$ (car $u_n > 0$)."
  },
  {
    id: 18,
    category: "suites",
    title: "Limite par comparaison (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Métropole 2022</b><br>Soit la suite $(u_n)$ telle que pour tout entier $n$, $u_n \\ge n^2 + \\sin(n)$. Déterminer sa limite en $+\\infty$.",
    options: ["$0$", "$+\\infty$", "$-\\infty$", "La limite dépend de $\\sin(n)$"],
    correctAnswer: 1,
    hint: "Utilisez la minoration de $\\sin(n) \\ge -1$ pour appliquer un théorème de comparaison.",
    explanation: "Comme $\\sin(n) \\ge -1$, on a $u_n \\ge n^2 - 1$. <br> Or $\\lim_{n \\to +\\infty} (n^2 - 1) = +\\infty$. <br> Par théorème de comparaison, $\\lim_{n \\to +\\infty} u_n = +\\infty$."
  },
  {
    id: 19,
    category: "suites",
    title: "Suite décroissante minorée (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Antilles 2022</b><br>Toute suite décroissante et minorée par 0 :",
    options: [
      "Converge nécessairement vers 0",
      "Est nécessairement divergente",
      "Converge vers un réel $L \\ge 0$",
      "Est nécessairement constante à partir d'un certain rang"
    ],
    correctAnswer: 2,
    hint: "Le théorème de convergence monotone indique qu'elle converge, mais la limite n'est pas forcément le minorant.",
    explanation: "Une suite décroissante et minorée par 0 converge vers un réel $L \\ge 0$. La limite n'est pas forcément 0 (par exemple, $u_n = 2 + 1/n$ est décroissante et minorée par 0, mais converge vers 2)."
  },
  {
    id: 20,
    category: "suites",
    title: "Terme général de suite géométrique",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Métropole 2022</b><br>Soit $(u_n)$ une suite géométrique de premier terme $u_0 = 3$ et de raison $q = 2$. <br> Déterminer la valeur exacte de $u_5$.",
    correctAnswer: "96",
    hint: "Appliquez la formule $u_n = u_0 \\times q^n$.",
    explanation: "$u_5 = u_0 \\times q^5 = 3 \\times 2^5 = 3 \\times 32 = 96$."
  },

  // ==========================================
  // --- CHAPITRE 2 : FONCTIONS & CONVEXITE ---
  // ==========================================
  {
    id: 21,
    category: "fonctions",
    title: "Dérivée seconde de fonction produit",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Métropole 2021</b><br>Soit la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = (x - 1)e^x + 1$. Quelle est la formule de sa dérivée seconde $f''(x)$ ?",
    options: ["$f''(x) = (x+1)e^x$", "$f''(x) = x e^x$", "$f''(x) = (x-1)e^x$", "$f''(x) = e^x$"],
    correctAnswer: 0,
    hint: "Calculez d'abord $f'(x)$ en utilisant $(uv)' = u'v + uv'$.",
    explanation: "$f'(x) = 1 \\cdot e^x + (x-1)e^x = x e^x$. <br> $f''(x) = 1 \\cdot e^x + x \\cdot e^x = (x+1)e^x$."
  },
  {
    id: 22,
    category: "fonctions",
    title: "Intégrale de fonction exponentielle composée",
    difficulty: "difficile",
    type: "ouvert",
    question: "<b>Bac Amérique du Nord 2023</b><br>Soit $f(x) = x e^{x^2}$. Calculer la valeur approchée arrondie à 3 décimales de l'intégrale $I = \\int_0^1 x e^{x^2} dx$.",
    correctAnswer: "0.859",
    hint: "Une primitive de $x e^{x^2}$ est $\\frac{1}{2} e^{x^2}$.",
    explanation: "$I = [\\frac{1}{2}e^{x^2}]_0^1 = \\frac{e-1}{2} \\approx \\frac{2{,}718 - 1}{2} = 0{,}859$."
  },
  {
    id: 23,
    category: "fonctions",
    title: "Recherche de point d'inflexion (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Métropole 2023</b><br>Soit la fonction $f$ dont la dérivée seconde est $f''(x) = (x^2 - 4)e^x$. Combien de points d'inflexion possède la courbe représentative de $f$ sur $\\mathbb{R}$ ?",
    options: ["$0$", "$1$", "$2$", "$4$"],
    correctAnswer: 2,
    hint: "Un point d'inflexion correspond à une annulation de la dérivée seconde en changeant de signe.",
    explanation: "$f''(x) = 0 \\iff x^2 - 4 = 0$ car $e^x > 0$. Donc $x = -2$ ou $x = 2$. Comme $f''(x)$ change de signe (polynôme du second degré de racines -2 et 2), il y a deux points d'inflexion."
  },
  {
    id: 24,
    category: "fonctions",
    title: "Croissance comparée en l'infini (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Polynésie 2022</b><br>Quelle est la limite en $+\\infty$ de la fonction $f(x) = \\frac{e^x}{x^2}$ ?",
    options: ["$0$", "$1$", "$+\\infty$", "La limite n'existe pas"],
    correctAnswer: 2,
    hint: "Utilisez les théorèmes de croissance comparée entre l'exponentielle et les puissances de $x$.",
    explanation: "D'après les croissances comparées, l'exponentielle l'emporte en $+\\infty$ sur toute fonction puissance : $\\lim_{x\to+\\infty} \\frac{e^x}{x^n} = +\\infty$."
  },
  {
    id: 25,
    category: "fonctions",
    title: "Limite de fonction avec logarithme (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Métropole 2022</b><br>Déterminer la limite en $0^+$ de la fonction $f(x) = x \\ln(x)$.",
    options: ["$0$", "$1$", "$-\\infty$", "$+\\infty$"],
    correctAnswer: 0,
    hint: "C'est une limite de référence de croissance comparée pour le logarithme.",
    explanation: "D'après le cours sur la fonction logarithme, on a la croissance comparée classique : $\\lim_{x \\to 0^+} x \\ln(x) = 0$."
  },
  {
    id: 26,
    category: "fonctions",
    title: "Nombre de solutions par le TVI (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Nouvelle-Calédonie 2021</b><br>Soit $f$ continue et strictement croissante sur $[1; 5]$ telle que $f(1) = -3$ et $f(5) = 4$. Combien de solutions admet l'équation $f(x) = 0$ sur $[1; 5]$ ?",
    options: ["$0$", "Exactement $1$", "Exactement $2$", "Une infinité"],
    correctAnswer: 1,
    hint: "Vérifiez si 0 est compris entre $f(1)$ et $f(5)$ et appliquez le théorème des valeurs intermédiaires.",
    explanation: "$f$ est continue et strictement monotone sur $[1; 5]$. De plus, $0 \\in [-3; 4]$. D'après le corollaire du TVI, l'équation $f(x)=0$ admet une unique solution sur $[1; 5]$."
  },
  {
    id: 27,
    category: "fonctions",
    title: "Calcul de dérivée composée",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Centres Étrangers 2022</b><br>Soit la fonction $f(x) = \\ln(x^2 + 3)$. <br> Déterminer la valeur exacte de la dérivée $f'(1)$.",
    correctAnswer: "0.5",
    hint: "Utilisez la formule $(\\ln(u))' = \\frac{u'}{u}$.",
    explanation: "$f'(x) = \\frac{2x}{x^2+3}$. Pour $x=1$ : $f'(1) = \\frac{2(1)}{1+3} = \\frac{2}{4} = 0{,}5$."
  },
  {
    id: 28,
    category: "fonctions",
    title: "Coût marginal et convexité (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Antilles 2022</b><br>Si la courbe du coût de production d'une entreprise est convexe sur un intervalle, que peut-on dire de sa dérivée seconde ?",
    options: [
      "Elle est positive ou nulle",
      "Elle est négative ou nulle",
      "Elle change de signe",
      "Elle est constante"
    ],
    correctAnswer: 0,
    hint: "La convexité est directement liée au signe de la dérivée seconde de la fonction.",
    explanation: "Une fonction est convexe sur un intervalle si et seulement si sa dérivée seconde $f''$ y est positive ou nulle."
  },
  {
    id: 29,
    category: "fonctions",
    title: "Équation de tangente",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Asie 2021</b><br>Soit $f(x) = e^x$. Déterminer le coefficient directeur de la tangente à la courbe de $f$ au point d'abscisse $x=0$.",
    correctAnswer: "1",
    hint: "Le coefficient directeur de la tangente en $a$ est donné par le nombre dérivé $f'(a)$.",
    explanation: "La dérivée de $f(x) = e^x$ est $f'(x) = e^x$. En $x=0$, $f'(0) = e^0 = 1$."
  },
  {
    id: 30,
    category: "fonctions",
    title: "Limite avec indétermination de l'exponentielle (QCM)",
    difficulty: "difficile",
    type: "qcm",
    question: "<b>Bac Réunion 2021</b><br>Déterminer la limite en $+\\infty$ de la fonction $f(x) = e^x - x$.",
    options: ["$0$", "$+\\infty$", "$-\\infty$", "1"],
    correctAnswer: 1,
    hint: "Mettez $e^x$ ou $x$ en facteur pour lever l'indétermination du type $+\\infty - \\infty$.",
    explanation: "$f(x) = x(\\frac{e^x}{x} - 1)$. <br> Comme $\\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty$ (croissance comparée), on obtient par produit : $\\lim_{x \\to +\\infty} f(x) = +\\infty$."
  },
  {
    id: 31,
    category: "fonctions",
    title: "Étude du logarithme népérien (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Polynésie 2021</b><br>Sur quel intervalle la fonction $f(x) = \\ln(x)$ est-elle définie ?",
    options: ["$\\mathbb{R}$", "$[0; +\\infty[$", "$]0; +\\infty[$", "$\\mathbb{R}^*$"],
    correctAnswer: 2,
    hint: "La fonction logarithme népérien n'accepte que des réels strictement positifs.",
    explanation: "La fonction logarithme népérien $x \\mapsto \\ln(x)$ est définie uniquement sur l'intervalle $]0; +\\infty[$."
  },
  {
    id: 32,
    category: "fonctions",
    title: "Valeur de la dérivée en un point",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Métropole 2023</b><br>Soit la fonction $f(x) = 3x^2 - 5x + 2$. <br> Calculer la valeur exacte de la dérivée $f'(2)$.",
    correctAnswer: "7",
    hint: "Calculez d'abord la dérivée $f'(x)$ puis remplacez $x$ par 2.",
    explanation: "$f'(x) = 6x - 5$. En $x=2$, $f'(2) = 6(2) - 5 = 12 - 5 = 7$."
  },
  {
    id: 33,
    category: "fonctions",
    title: "Convexité d'une fonction rationnelle (QCM)",
    difficulty: "difficile",
    type: "qcm",
    question: "<b>Bac Amérique du Nord 2022</b><br>Soit la fonction $f(x) = \\frac{1}{x}$ définie sur $]0; +\\infty[$. Quel est l'état de convexité de $f$ ?",
    options: [
      "Elle est concave",
      "Elle est convexe",
      "Elle change de convexité en $x=1$",
      "Elle est affine"
    ],
    correctAnswer: 1,
    hint: "Calculez la dérivée seconde $f''(x)$ et déterminez son signe.",
    explanation: "$f'(x) = -\\frac{1}{x^2}$. <br> $f''(x) = \\frac{2}{x^3}$. <br> Sur $]0; +\\infty[$, $x^3 > 0$, donc $f''(x) > 0$. La fonction est donc strictement convexe."
  },
  {
    id: 34,
    category: "fonctions",
    title: "Maximum d'une fonction exponentielle",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Métropole 2022</b><br>Soit la fonction $f(x) = -x^2 e^x$ définie sur $\\mathbb{R}$. A quelle abscisse $x$ la fonction atteint-elle son maximum local (sur $]-2; 2[$) ?",
    correctAnswer: "0",
    hint: "Dérivez $f(x)$, trouvez où la dérivée s'annule et change de signe.",
    explanation: "$f'(x) = -2x e^x - x^2 e^x = -x(2+x)e^x$. <br> La dérivée s'annule en $x = -2$ et $x = 0$. Le tableau de signe montre que $f$ croît sur $[-2; 0]$ et décroît sur $[0; +\\infty[$. Le maximum est donc atteint en $x = 0$."
  },
  {
    id: 35,
    category: "fonctions",
    title: "Théorème de continuité (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Asie 2023</b><br>Si une fonction $f$ est dérivable sur un intervalle $I$, alors :",
    options: [
      "Elle est continue sur $I$",
      "Elle est nécessairement convexe sur $I$",
      "Sa limite est nulle en $+\\infty$",
      "Elle est strictement croissante"
    ],
    correctAnswer: 0,
    hint: "La dérivabilité est une condition plus forte que la continuité.",
    explanation: "La dérivabilité implique la continuité : toute fonction dérivable sur un intervalle $I$ est nécessairement continue sur ce même intervalle."
  },
  {
    id: 36,
    category: "fonctions",
    title: "Tangente horizontale",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Polynésie 2023</b><br>A quelle abscisse $x$ la courbe de la fonction $f(x) = x^2 - 6x + 9$ admet-elle une tangente horizontale ?",
    correctAnswer: "3",
    hint: "La tangente est horizontale lorsque le nombre dérivé est nul ($f'(x) = 0$).",
    explanation: "$f'(x) = 2x - 6$. On pose $2x - 6 = 0 \\iff 2x = 6 \\iff x = 3$."
  },
  {
    id: 37,
    category: "fonctions",
    title: "Asymptote horizontale (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Antilles 2023</b><br>Soit $f$ telle que $\\lim_{x \\to +\\infty} f(x) = 3$. La droite d'équation :",
    options: [
      "$y = 3$ est asymptote horizontale à la courbe",
      "$x = 3$ est asymptote verticale à la courbe",
      "$y = 3x$ est asymptote oblique",
      "Il n'y a pas d'asymptote"
    ],
    correctAnswer: 0,
    hint: "La limite finie en $+\\infty$ définit l'équation de l'asymptote horizontale.",
    explanation: "Comme $\\lim_{x \\to +\\infty} f(x) = 3$, la droite d'équation $y = 3$ est une asymptote horizontale à la courbe représentative de $f$ au voisinage de $+\\infty$."
  },
  {
    id: 38,
    category: "fonctions",
    title: "Points d'intersection avec l'axe des abscisses",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Métropole 2021</b><br>Soit la fonction $f(x) = \\ln(x - 2)$. <br> Pour quelle valeur de $x$ la courbe représentative de $f$ coupe-t-elle l'axe des abscisses ?",
    correctAnswer: "3",
    hint: "On cherche la solution de l'équation $f(x) = 0$. Rappelez-vous que $\\ln(1) = 0$.",
    explanation: "$f(x) = 0 \\iff \\ln(x-2) = 0 \\iff x-2 = 1 \\iff x = 3$."
  },
  {
    id: 39,
    category: "fonctions",
    title: "Limite de quotient indéterminé (QCM)",
    difficulty: "difficile",
    type: "qcm",
    question: "<b>Bac Réunion 2022</b><br>Déterminer la limite en $0$ de la fonction $f(x) = \\frac{e^x - 1}{x}$.",
    options: ["$0$", "$1$", "$+\\infty$", "La limite dépend du signe de $x$"],
    correctAnswer: 1,
    hint: "Il s'agit de la limite de taux de variation de la fonction exponentielle au point 0.",
    explanation: "La limite $\\lim_{x \\to 0} \\frac{e^x - e^0}{x - 0}$ correspond à la dérivée de $x \\mapsto e^x$ en 0, soit $e^0 = 1$."
  },
  {
    id: 40,
    category: "fonctions",
    title: "Signe de la dérivée de ln(x)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Métropole 2022</b><br>La dérivée de la fonction $f(x) = \\ln(x)$ sur $]0; +\\infty[$ est :",
    options: [
      "Toujours négative",
      "Toujours positive",
      "S'annule en $x=1$",
      "Dépend du signe de $x$"
    ],
    correctAnswer: 1,
    hint: "La dérivée de $\\ln(x)$ est $\\frac{1}{x}$. Déterminez son signe sur l'intervalle de définition.",
    explanation: "La dérivée est $f'(x) = \\frac{1}{x}$. Sur $]0; +\\infty[$, $x > 0$, donc $f'(x) > 0$. La dérivée est donc toujours strictement positive."
  },

  // ==========================================
  // --- CHAPITRE 3 : GEOMETRIE DANS L'ESPACE --
  // ==========================================
  {
    id: 41,
    category: "geometrie",
    title: "Vecteur normal et produit scalaire",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Métropole 2023</b><br>Dans un repère orthonormé de l'espace, on considère les points $A(1; 0; 2)$, $B(2; 1; 4)$ et $C(3; 0; 1)$. Lequel de ces vecteurs est normal au plan $(ABC)$ ?",
    options: ["$\\vec{n}(1; -5; 2)$", "$\\vec{n}(2; 1; 4)$", "$\\vec{n}(1; 1; 2)$", "$\\vec{n}(1; 2; 3)$"],
    correctAnswer: 0,
    hint: "Calculez les coordonnées de $\\vec{AB}$ et $\\vec{AC}$, puis testez quel vecteur $\\vec{n}$ donne un produit scalaire nul avec les deux.",
    explanation: "$\\vec{AB}(1; 1; 2)$ et $\\vec{AC}(2; 0; -1)$. <br> $\\vec{n} \\cdot \\vec{AB} = 1(1) + (-5)(1) + 2(2) = 0$. <br> $\\vec{n} \\cdot \\vec{AC} = 1(2) + (-5)(0) + 2(-1) = 0$. Donc $\\vec{n}$ est normal au plan."
  },
  {
    id: 42,
    category: "geometrie",
    title: "Orthogonalité de vecteurs",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Centres Étrangers 2023</b><br>On considère les vecteurs $\\vec{u}(2; 1; -3)$ et $\\vec{v}(1; k; 2)$ dans un repère orthonormé. <br> Déterminer le réel $k$ pour que les vecteurs $\\vec{u}$ et $\\vec{v}$ soient orthogonaux.",
    correctAnswer: "4",
    hint: "Le produit scalaire doit être égal à 0.",
    explanation: "$\\vec{u} \\cdot \\vec{v} = 0 \\iff 2(1) + 1(k) + (-3)(2) = 0 \\iff 2 + k - 6 = 0 \\iff k - 4 = 0 \\iff k = 4$."
  },
  {
    id: 43,
    category: "geometrie",
    title: "Distance entre deux points",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Amérique du Nord 2022</b><br>Soient les points $A(2; 3; 1)$ et $B(5; 3; 5)$ dans un repère orthonormé. <br> Calculer la distance exacte $AB$.",
    correctAnswer: "5",
    hint: "Utilisez la formule $AB = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$.",
    explanation: "$AB = \\sqrt{(5-2)^2 + (3-3)^2 + (5-1)^2} = \\sqrt{3^2 + 0^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
  },
  {
    id: 44,
    category: "geometrie",
    title: "Milieu d'un segment",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Antilles-Guyane 2021</b><br>Soient les points $A(1; 2; 5)$ et $B(3; 4; -1)$. <br> Calculer la coordonnée $z_I$ du milieu $I$ du segment $[AB]$.",
    correctAnswer: "2",
    hint: "La coordonnée du milieu est la moyenne des coordonnées correspondantes : $z_I = \\frac{z_A + z_B}{2}$.",
    explanation: "$z_I = \\frac{5 + (-1)}{2} = \\frac{4}{2} = 2$."
  },
  {
    id: 45,
    category: "geometrie",
    title: "Équation cartésienne de plan",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Polynésie 2022</b><br>Soit le plan $P$ passant par $A(1; 1; 1)$ et admettant le vecteur $\\vec{n}(2; 3; -1)$ comme vecteur normal. <br> Quelle est la valeur de la constante $d$ dans son équation cartésienne sous la forme $2x + 3y - z + d = 0$ ?",
    correctAnswer: "-4",
    hint: "Substituez les coordonnées de $A$ dans l'équation cartésienne pour trouver $d$.",
    explanation: "$2(1) + 3(1) - 1 + d = 0 \\iff 2 + 3 - 1 + d = 0 \\iff 4 + d = 0 \\iff d = -4$."
  },
  {
    id: 46,
    category: "geometrie",
    title: "Représentation paramétrique de droite (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Réunion 2022</b><br>Soit la droite $D$ passant par $A(1; 2; 3)$ et dirigée par $\\vec{u}(0; -1; 2)$. Laquelle de ces représentations paramétriques modélise la droite $D$ ?",
    options: [
      "$\\begin{cases} x = 1 \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}$",
      "$\\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}$",
      "$\\begin{cases} x = 0 \\\\ y = -t \\\\ z = 2t \\end{cases}$",
      "$\\begin{cases} x = 1 \\\\ y = -t \\\\ z = 2t \\end{cases}$"
    ],
    correctAnswer: 0,
    hint: "La représentation paramétrique générale s'écrit $x = x_A + a t$, $y = y_A + b t$, $z = z_A + c t$ avec le vecteur directeur $(a; b; c)$.",
    explanation: "En prenant le point $A(1;2;3)$ et le vecteur directeur $\\vec{u}(0;-1;2)$, on obtient directement $\\begin{cases} x = 1 + 0t = 1 \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}$."
  },
  {
    id: 47,
    category: "geometrie",
    title: "Intersection droite et plan",
    difficulty: "difficile",
    type: "ouvert",
    question: "<b>Bac Asie 2022</b><br>On considère la droite $D : \\begin{cases} x = t \\\\ y = 2t \\\\ z = -t \\end{cases}$ et le plan $P : x + y + z - 4 = 0$. <br> Déterminer l'abscisse $x$ du point d'intersection de $D$ et $P$.",
    correctAnswer: "2",
    hint: "Remplacez $x$, $y$ et $z$ de la droite dans l'équation du plan pour trouver $t$.",
    explanation: "$t + 2t + (-t) - 4 = 0 \\iff 2t - 4 = 0 \\iff t = 2$. <br> L'abscisse du point est $x = t = 2$."
  },
  {
    id: 48,
    category: "geometrie",
    title: "Coplanarité de vecteurs (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Nouvelle-Calédonie 2021</b><br>Trois vecteurs $\\vec{u}$, $\\vec{v}$ et $\\vec{w}$ de l'espace sont coplanaires si et seulement si :",
    options: [
      "Ils appartiennent tous à une même droite",
      "L'un des vecteurs est une combinaison linéaire des deux autres",
      "Ils sont deux à deux orthogonaux",
      "Leur produit scalaire est nul"
    ],
    correctAnswer: 1,
    hint: "La coplanarité signifie que les vecteurs peuvent être représentés dans un même plan.",
    explanation: "Trois vecteurs sont coplanaires si et seulement s'ils sont linéairement dépendants, c'est-à-dire que l'un d'eux s'écrit sous la forme $a\\vec{u} + b\\vec{v}$."
  },
  {
    id: 49,
    category: "geometrie",
    title: "Distance point-plan",
    difficulty: "difficile",
    type: "ouvert",
    question: "<b>Bac Métropole 2022</b><br>On considère le point $A(1; 1; 2)$ et le plan $P$ d'équation cartésienne $2x + 2y - z - 8 = 0$. <br> Calculer la distance du point $A$ au plan $P$.",
    correctAnswer: "2",
    hint: "Utilisez la formule $d(A, P) = \\frac{|ax_A + by_A + cz_A + d|}{\\sqrt{a^2+b^2+c^2}}$.",
    explanation: "$d(A, P) = \\frac{|2(1) + 2(1) - 2 - 8|}{\\sqrt{2^2+2^2+(-1)^2}} = \\frac{|2+2-2-8|}{\\sqrt{9}} = \\frac{|-6|}{3} = \\frac{6}{3} = 2$."
  },
  {
    id: 50,
    category: "geometrie",
    title: "Colinéarité de deux vecteurs (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Polynésie 2021</b><br>Les vecteurs $\\vec{u}(2; -4; 6)$ et $\\vec{v}(-1; 2; -3)$ sont :",
    options: [
      "Colinéaires et de sens opposés",
      "Colinéaires et de même sens",
      "Orthogonaux",
      "Non coplanaires"
    ],
    correctAnswer: 0,
    hint: "Regardez le coefficient multiplicateur $k$ tel que $\\vec{u} = k\\vec{v}$.",
    explanation: "On remarque que $\\vec{u} = -2\\vec{v}$. Les vecteurs sont donc colinéaires. Comme le coefficient $-2$ est négatif, ils sont de sens opposés."
  },
  {
    id: 51,
    category: "geometrie",
    title: "Norme d'un vecteur",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Antilles 2023</b><br>Calculer la norme exacte du vecteur $\\vec{u}(2; 4; 4)$ dans un repère orthonormé.",
    correctAnswer: "6",
    hint: "La formule de la norme est $\\|\\vec{u}\\| = \\sqrt{x^2+y^2+z^2}$.",
    explanation: "$\\|\\vec{u}\\| = \\sqrt{2^2 + 4^2 + 4^2} = \\sqrt{4 + 16 + 16} = \\sqrt{36} = 6$."
  },
  {
    id: 52,
    category: "geometrie",
    title: "Projeté orthogonal (QCM)",
    difficulty: "difficile",
    type: "qcm",
    question: "<b>Bac Métropole 2023</b><br>Le projeté orthogonal $H$ du point $M$ sur le plan $P$ est :",
    options: [
      "L'unique point de $P$ tel que $\\vec{MH}$ soit un vecteur normal au plan $P$",
      "Le milieu de tout segment reliant $M$ à un point du plan $P$",
      "Le point de $P$ le plus éloigné de $M$",
      "Le point d'intersection de $P$ avec les axes de coordonnées"
    ],
    correctAnswer: 0,
    hint: "Le projeté orthogonal correspond au point du plan réalisant la plus courte distance, caractérisé par l'orthogonalité de $\\vec{MH}$ au plan.",
    explanation: "Le projeté orthogonal $H$ de $M$ sur le plan $P$ est le point d'intersection de $P$ avec la droite perpendiculaire à $P$ passant par $M$. Ainsi, $\\vec{MH}$ est colinéaire au vecteur normal du plan $P$."
  },
  {
    id: 53,
    category: "geometrie",
    title: "Vecteurs directeurs de plan (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Amérique du Nord 2023</b><br>Soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs directeurs d'un plan $P$. Ces vecteurs doivent être :",
    options: [
      "Non colinéaires",
      "Orthogonaux",
      "Unitaires",
      "Coplanaires avec l'axe des abscisses"
    ],
    correctAnswer: 0,
    hint: "Deux vecteurs directeurs définissent un plan s'ils permettent de se déplacer dans deux directions différentes.",
    explanation: "Deux vecteurs définissent un plan si et seulement s'ils ne sont pas colinéaires."
  },
  {
    id: 54,
    category: "geometrie",
    title: "Angle de deux vecteurs",
    difficulty: "difficile",
    type: "ouvert",
    question: "<b>Bac Réunion 2021</b><br>On considère les vecteurs $\\vec{u}(1; 1; 0)$ et $\\vec{v}(0; 1; 1)$ dans un repère orthonormé. <br> Déterminer la valeur exacte en degrés de l'angle $\\theta$ formé par ces deux vecteurs.",
    correctAnswer: "60",
    hint: "Utilisez la relation $\\cos(\\theta) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\times \\|\\vec{v}\\|}$.",
    explanation: "$\\vec{u} \\cdot \\vec{v} = 1(0) + 1(1) + 0(1) = 1$. <br> $\\|\\vec{u}\\| = \\sqrt{2}$, $\\|\\vec{v}\\| = \\sqrt{2}$. <br> $\\cos(\\theta) = \\frac{1}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2}$. <br> Donc $\\theta = 60^\\circ$."
  },
  {
    id: 55,
    category: "geometrie",
    title: "Parallélisme de deux plans (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Polynésie 2022</b><br>Soient les plans $P_1 : 2x - y + 3z - 1 = 0$ et $P_2 : -4x + 2y - 6z + 5 = 0$. Ces plans sont :",
    options: [
      "Parallèles",
      "Sécants et orthogonaux",
      "Confondus",
      "Sécants non orthogonaux"
    ],
    correctAnswer: 0,
    hint: "Comparez les coordonnées de leurs vecteurs normaux $\\vec{n_1}$ et $\\vec{n_2}$.",
    explanation: "$\\vec{n_1}(2; -1; 3)$ et $\\vec{n_2}(-4; 2; -6)$. On observe que $\\vec{n_2} = -2\\vec{n_1}$, les vecteurs normaux sont colinéaires, donc les plans sont parallèles (et non confondus car les termes constants $-1 \\times (-2) \\neq 5$)."
  },
  {
    id: 56,
    category: "geometrie",
    title: "Point appartenant à une droite",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Centres Étrangers 2022</b><br>Soit la droite $D$ définie par $\\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3t \\end{cases}$ ($t \\in \\mathbb{R}$). <br> Quelle est la coordonnée $y$ du point de la droite $D$ ayant pour abscisse $x = 3$ ?",
    correctAnswer: "0",
    hint: "Trouvez d'abord la valeur du paramètre $t$ correspondant à $x=3$, puis injectez-la dans l'équation de $y$.",
    explanation: "$x = 3 \\iff 1 + t = 3 \\iff t = 2$. <br> Pour $t=2$, on a $y = 2 - 2 = 0$."
  },
  {
    id: 57,
    category: "geometrie",
    title: "Volume d'un tétraèdre",
    difficulty: "difficile",
    type: "ouvert",
    question: "<b>Bac Asie 2021</b><br>Calculer le volume d'un tétraèdre $ABCD$ sachant que la base $ABC$ est un triangle rectangle d'aire $9$ unités d'aire et que la hauteur relative au sommet $D$ mesure $4$ unités de longueur.",
    correctAnswer: "12",
    hint: "Appliquez la formule générale du volume d'une pyramide/tétraèdre : $V = \\frac{1}{3} \\times \\text{Aire de la base} \\times \\text{Hauteur}$.",
    explanation: "$V = \\frac{1}{3} \\times \\text{Aire}(ABC) \\times h = \\frac{1}{3} \\times 9 \\times 4 = 3 \\times 4 = 12$."
  },
  {
    id: 58,
    category: "geometrie",
    title: "Produit scalaire orthogonal (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Antilles 2021</b><br>Si deux droites de l'espace sont perpendiculaires, alors :",
    options: [
      "Leurs vecteurs directeurs ont un produit scalaire nul",
      "Elles sont nécessairement coplanaires",
      "Leurs représentations paramétriques n'ont aucun point commun",
      "Elles sont nécessairement parallèles"
    ],
    correctAnswer: 0,
    hint: "La perpendicularité est une forme d'orthogonalité qui implique des vecteurs directeurs orthogonaux.",
    explanation: "Deux droites de l'espace perpendiculaires sont des droites sécantes et orthogonales. Leurs vecteurs directeurs ont donc un produit scalaire égal à 0."
  },
  {
    id: 59,
    category: "geometrie",
    title: "Équation de plan contenant l'origine",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Métropole 2022</b><br>Soit le plan $P$ d'équation $3x - 4y + z + d = 0$. <br> Quelle doit être la valeur de $d$ pour que le plan $P$ passe par l'origine du repère $O(0; 0; 0)$ ?",
    correctAnswer: "0",
    hint: "Substituez les coordonnées de l'origine $(0; 0; 0)$ dans l'équation cartésienne.",
    explanation: "$3(0) - 4(0) + 0 + d = 0 \\iff d = 0$."
  },
  {
    id: 60,
    category: "geometrie",
    title: "Plan parallèle à un plan coordonné (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Nouvelle-Calédonie 2022</b><br>L'équation cartésienne $z = 4$ définit dans l'espace :",
    options: [
      "Un plan parallèle au plan $(O, \\vec{i}, \\vec{j})$",
      "Une droite parallèle à l'axe des côtes",
      "Un point de coordonnées $(0; 0; 4)$",
      "Une surface sphérique"
    ],
    correctAnswer: 0,
    hint: "Une équation de la forme $z = k$ rassemble tous les points d'altitude constante $k$.",
    explanation: "L'équation $z = 4$ définit le plan horizontal parallèle au plan de base $(Oxy)$ (ou $(O, \\vec{i}, \\vec{j})$) situé à une altitude de 4."
  },

  // ==========================================
  // --- CHAPITRE 4 : PROBABILITES & DENOMB ---
  // ==========================================
  {
    id: 61,
    category: "probabilites",
    title: "Dénombrement de mots de passe",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Métropole 2022</b><br>Un système exige un code de 4 chiffres distincts choisis parmi $0$ à $9$. Combien de codes différents peut-on former ?",
    options: ["$5\\ 040$", "$10\\ 000$", "$210$", "$24$"],
    correctAnswer: 0,
    hint: "L'ordre compte et il n'y a pas de répétition. C'est un arrangement $A_{10}^4$.",
    explanation: "$A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5\\ 040$."
  },
  {
    id: 62,
    category: "probabilites",
    title: "Espérance d'une loi binomiale",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Amérique du Sud 2022</b><br>Soit $X$ une variable aléatoire suivant une loi binomiale de paramètres $n = 5$ et $p = 0{,}4$. <br> Calculer l'espérance mathématique $E(X)$.",
    correctAnswer: "2",
    hint: "Appliquez la formule $E(X) = n \\times p$.",
    explanation: "$E(X) = 5 \\times 0{,}4 = 2$."
  },
  {
    id: 63,
    category: "probabilites",
    title: "Formule des probabilités totales (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Métropole 2023</b><br>Une maladie touche $2\\%$ de la population. Un test de dépistage donne un résultat positif pour $95\\%$ des personnes malades et pour $3\\%$ des personnes saines. Quelle est la probabilité qu'un individu testé au hasard ait un test positif ?",
    options: ["$0{,}0488$", "$0{,}019$", "$0{,}03$", "$0{,}95$"],
    correctAnswer: 0,
    hint: "Utilisez la formule des probabilités totales : $P(T) = P(M \\cap T) + P(\\bar{M} \\cap T)$.",
    explanation: "$P(T) = P(M) \\times P_M(T) + P(\\bar{M}) \\times P_{\\bar{M}}(T) = 0{,}02 \\times 0{,}95 + 0{,}98 \\times 0{,}03 = 0{,}019 + 0{,}0294 = 0{,}0488$."
  },
  {
    id: 64,
    category: "probabilites",
    title: "Calcul de coefficient binomial",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Antilles-Guyane 2022</b><br>Calculer la valeur exacte du coefficient binomial $\\binom{5}{2}$.",
    correctAnswer: "10",
    hint: "Utilisez la formule $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ ou le triangle de Pascal.",
    explanation: "$\\binom{5}{2} = \\frac{5 \\times 4}{2 \\times 1} = 10$."
  },
  {
    id: 65,
    category: "probabilites",
    title: "Dénombrement de sous-comités (Ouvert)",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Amérique du Nord 2022</b><br>Combien de comités différents de 3 personnes peut-on former à partir d'un groupe de 6 collaborateurs ?",
    correctAnswer: "20",
    hint: "L'ordre n'importe pas, il s'agit d'une combinaison de 3 éléments parmi 6, soit $\\binom{6}{3}$.",
    explanation: "$\\binom{6}{3} = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 5 \\times 4 = 20$."
  },
  {
    id: 66,
    category: "probabilites",
    title: "Probabilité conditionnelle",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Polynésie 2022</b><br>Soient deux événements $A$ et $B$ tels que $P(A) = 0{,}5$, $P(B) = 0{,}4$ et $P(A \\cap B) = 0{,}2$. <br> Calculer la probabilité conditionnelle $P_A(B)$ sous sa forme décimale.",
    correctAnswer: "0.4",
    hint: "Appliquez la formule $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$.",
    explanation: "$P_A(B) = \\frac{0{,}2}{0{,}5} = 0{,}4$."
  },
  {
    id: 67,
    category: "probabilites",
    title: "Indépendance de deux événements (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Nouvelle-Calédonie 2022</b><br>Deux événements $A$ et $B$ de probabilités non nulles sont indépendants si et seulement si :",
    options: [
      "$P(A \\cap B) = P(A) \\times P(B)$",
      "$P(A \\cap B) = 0$",
      "$P(A \\cup B) = P(A) + P(B)$",
      "$P_A(B) = 0$"
    ],
    correctAnswer: 0,
    hint: "L'indépendance signifie que la réalisation de l'un n'influence pas la probabilité de réalisation de l'autre.",
    explanation: "Par définition, deux événements $A$ et $B$ sont indépendants si et seulement si la probabilité de leur intersection est le produit de leurs probabilités : $P(A \\cap B) = P(A) \\times P(B)$."
  },
  {
    id: 68,
    category: "probabilites",
    title: "Loi de probabilité d'une variable aléatoire (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Réunion 2021</b><br>La somme des probabilités d'une loi de probabilité d'une variable aléatoire discrète $X$ prenant un nombre fini de valeurs est toujours égale à :",
    options: ["$0$", "$0{,}5$", "$1$", "Dépend de l'espérance"],
    correctAnswer: 2,
    hint: "La somme des probabilités de toutes les issues possibles de l'univers est une certitude.",
    explanation: "Pour toute loi de probabilité d'une variable aléatoire prenant les valeurs $x_i$, on a $\\sum P(X = x_i) = 1$."
  },
  {
    id: 69,
    category: "probabilites",
    title: "Calcul de variance simplifiée",
    difficulty: "difficile",
    type: "ouvert",
    question: "<b>Bac Asie 2022</b><br>Soit une variable aléatoire $X$ prenant les valeurs $0$ et $10$ avec les probabilités $0{,}6$ et $0{,}4$ respectivement. <br> Calculer la variance $V(X)$ de cette variable aléatoire.",
    correctAnswer: "24",
    hint: "Calculez d'abord l'espérance $E(X)$, puis utilisez la formule $V(X) = E(X^2) - (E(X))^2$.",
    explanation: "1. Espérance : $E(X) = 0(0{,}6) + 10(0{,}4) = 4$. <br> 2. Espérance des carrés : $E(X^2) = 0^2(0{,}6) + 10^2(0{,}4) = 40$. <br> 3. Variance : $V(X) = 40 - 4^2 = 40 - 16 = 24$."
  },
  {
    id: 70,
    category: "probabilites",
    title: "Permutations et anagrammes (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Métropole 2021</b><br>Combien d'anagrammes (mots avec ou sans signification) peut-on former en permutant les lettres du mot 'MATH' ?",
    options: ["$4$", "$12$", "$24$", "$256$"],
    correctAnswer: 2,
    hint: "Le mot contient 4 lettres distinctes. Il s'agit du nombre de permutations de 4 éléments, soit $4!$.",
    explanation: "Le mot 'MATH' contient 4 lettres distinctes. Le nombre d'anagrammes est $4! = 4 \\times 3 \\times 2 \\times 1 = 24$."
  },
  {
    id: 71,
    category: "probabilites",
    title: "Espérance d'une loi de Bernoulli",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Antilles 2021</b><br>Soit une variable de Bernoulli $X$ de paramètre $p = 0{,}75$. <br> Quelle est la valeur exacte de l'espérance $E(X)$ ?",
    correctAnswer: "0.75",
    hint: "L'espérance d'une variable de Bernoulli $X$ de paramètre $p$ est simplement $p$.",
    explanation: "Par définition, l'espérance d'une variable de Bernoulli de paramètre $p$ est $E(X) = 1(p) + 0(1-p) = p = 0{,}75$."
  },
  {
    id: 72,
    category: "probabilites",
    title: "Événements incompatibles (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Polynésie 2022</b><br>Deux événements $A$ et $B$ sont incompatibles si et seulement si :",
    options: [
      "$P(A \\cap B) = 0$",
      "$P(A) \\times P(B) = 1$",
      "$P(A \\cup B) = 1$",
      "$P_A(B) = P(B)$"
    ],
    correctAnswer: 0,
    hint: "Incompatibles (ou disjoints) signifie qu'ils ne peuvent pas se réaliser en même temps.",
    explanation: "Deux événements sont incompatibles si leur intersection est vide, ce qui se traduit en probabilité par $P(A \\cap B) = 0$."
  },
  {
    id: 73,
    category: "probabilites",
    title: "Loi binomiale P(X = 0)",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Amérique du Nord 2023</b><br>Soit $X$ une variable aléatoire suivant une loi binomiale $\\mathcal{B}(3; 0{,}5)$. <br> Calculer la probabilité exacte $P(X = 0)$ sous sa forme décimale.",
    correctAnswer: "0.125",
    hint: "La formule est $P(X=0) = (1-p)^n$.",
    explanation: "$P(X=0) = (1-0{,}5)^3 = 0{,}5^3 = 0{,}125$."
  },
  {
    id: 74,
    category: "probabilites",
    title: "Nombre de combinaisons de Pascal (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Centres Étrangers 2022</b><br>D'après la relation de Pascal, le coefficient $\\binom{n}{k} + \\binom{n}{k+1}$ est égal à :",
    options: [
      "$\\binom{n+1}{k+1}$",
      "$\\binom{n+1}{k}$",
      "$\\binom{n}{k+2}$",
      "$\\binom{n+2}{k+1}$"
    ],
    correctAnswer: 0,
    hint: "Il s'agit d'une formule algébrique de base pour construire le triangle de Pascal.",
    explanation: "La relation de Pascal énonce que pour tous entiers $n$ et $k$, $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$."
  },
  {
    id: 75,
    category: "probabilites",
    title: "Choix ordonné avec répétition (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Réunion 2022</b><br>On lance un dé à 6 faces 3 fois de suite en notant le numéro obtenu. Combien de résultats ordonnés peut-on obtenir ?",
    options: ["$18$", "$120$", "$216$", "$36$"],
    correctAnswer: 2,
    hint: "Chaque lancer offre 6 possibilités. Le nombre d'issues est de la forme $n^k$.",
    explanation: "Il s'agit d'un tirage ordonné avec répétition de 3 éléments parmi 6. Le nombre total de possibilités est $6^3 = 6 \\times 6 \\times 6 = 216$."
  },
  {
    id: 76,
    category: "probabilites",
    title: "Probabilité de l'événement contraire",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Polynésie 2023</b><br>Soit un événement $A$ tel que $P(A) = 0{,}37$. <br> Calculer la probabilité de l'événement contraire $P(\\bar{A})$ sous sa forme décimale.",
    correctAnswer: "0.63",
    hint: "La formule est $P(\\bar{A}) = 1 - P(A)$.",
    explanation: "$P(\\bar{A}) = 1 - 0{,}37 = 0{,}63$."
  },
  {
    id: 77,
    category: "probabilites",
    title: "Indépendance de 3 lancers de pièce (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Asie 2021</b><br>On lance une pièce de monnaie équilibrée 3 fois. Quelle est la probabilité d'obtenir 3 fois pile ?",
    options: ["$0{,}5$", "$0{,}25$", "$0{,}125$", "$0{,}333$"],
    correctAnswer: 2,
    hint: "Chaque lancer est indépendant de probabilité $0{,}5$. Multipliez les probabilités.",
    explanation: "Les lancers étant indépendants, la probabilité est $0{,}5 \\times 0{,}5 \\times 0{,}5 = 0{,}125$."
  },
  {
    id: 78,
    category: "probabilites",
    title: "Espérance d'un jeu de hasard",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Antilles 2022</b><br>Un joueur participe à un jeu où il a $20\\%$ de chances de gagner $10$ € et $80\\%$ de chances de perdre $2$ €. <br> Calculer l'espérance mathématique de gain de ce jeu en euros (donner le nombre).",
    correctAnswer: "0.4",
    hint: "L'espérance est donnée par la somme des produits des gains par leur probabilité.",
    explanation: "$E(X) = 10 \\times 0{,}20 + (-2) \\times 0{,}80 = 2 - 1{,}6 = 0{,}4$ €."
  },
  {
    id: 79,
    category: "probabilites",
    title: "Coefficients binomiaux symétriques (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Amérique du Nord 2021</b><br>Pour tout entier $n$ et tout entier $k \\le n$, le coefficient $\\binom{n}{n-k}$ est égal à :",
    options: [
      "$\\binom{n}{k}$",
      "$\\binom{k}{n}$",
      "$n-k$",
      "$1$"
    ],
    correctAnswer: 0,
    hint: "C'est une propriété de symétrie fondamentale du triangle de Pascal.",
    explanation: "Par symétrie des choix (choisir $k$ éléments équivaut à exclure les $n-k$ autres), on a $\\binom{n}{n-k} = \\binom{n}{k}$."
  },
  {
    id: 80,
    category: "probabilites",
    title: "Calcul de factorielle simple",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Nouvelle-Calédonie 2022</b><br>Calculer la valeur exacte de $5!$.",
    correctAnswer: "120",
    hint: "La factorielle est le produit de tous les entiers positifs de 1 à $n$ : $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1$.",
    explanation: "$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$."
  },

  // ==========================================
  // --- CHAPITRE 5 : EQUADIFF & INTEGRALES ---
  // ==========================================
  {
    id: 81,
    category: "integration",
    title: "Intégration par parties",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Centres Étrangers 2022</b><br>Calculer la valeur exacte de l'intégrale suivante : $J = \\int_0^1 x e^x dx$. <br> Donner le résultat sous forme d'un nombre entier simple.",
    correctAnswer: "1",
    hint: "Utilisez l'intégration par parties en posant $u(x) = x$ et $v'(x) = e^x$.",
    explanation: "$J = [x e^x]_0^1 - \\int_0^1 e^x dx = e - (e - 1) = 1$."
  },
  {
    id: 82,
    category: "integration",
    title: "Résolution d'équation différentielle y' = ay + b",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Polynésie 2023</b><br>Soit l'équation différentielle $(E) : y' - 3y = 9$. Quelle est la solution $f$ de cette équation qui vérifie la condition initiale $f(0) = -2$ ?",
    options: ["$f(x) = e^{3x} - 3$", "$f(x) = e^{-3x} - 3$", "$f(x) = -2 e^{3x}$", "$f(x) = 3 e^{3x} - 5$"],
    correctAnswer: 0,
    hint: "Les solutions de $y' = ay + b$ sont de la forme $C e^{ax} - \\frac{b}{a}$. Ici, $a=3, b=9$.",
    explanation: "Les solutions sont $f(x) = C e^{3x} - 3$. Avec $f(0)=-2 \\iff C-3=-2 \\iff C=1$. D'où $f(x)=e^{3x}-3$."
  },
  {
    id: 83,
    category: "integration",
    title: "Primitive de la forme u' / u",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Métropole 2022</b><br>Soit la fonction $f(x) = \\frac{2x}{x^2 + 1}$ définie sur $[0; 2]$. Trouver la valeur exacte de $\\int_0^2 f(x) dx$ sous la forme $\\ln(k)$. <br> Quelle est la valeur de l'entier $k$ ?",
    correctAnswer: "5",
    hint: "Trouvez une primitive de la forme $u'/u$ qui s'intègre en $\\ln(|u|)$.",
    explanation: "La fonction $f(x)$ est de la forme $u'/u$ avec $u(x)=x^2+1$. Une primitive est $F(x) = \\ln(x^2+1)$. <br> L'intégrale vaut $F(2) - F(0) = \\ln(5) - \\ln(1) = \\ln(5)$. Donc $k=5$."
  },
  {
    id: 84,
    category: "integration",
    title: "Valeur moyenne d'une fonction",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Antilles-Guyane 2021</b><br>Déterminer la valeur moyenne $\\mu$ de la fonction constante $f(x) = 8$ sur l'intervalle $[2; 5]$.",
    correctAnswer: "8",
    hint: "La valeur moyenne d'une fonction constante est simplement cette constante.",
    explanation: "$\\mu = \\frac{1}{5-2} \\int_2^5 8 dx = \\frac{1}{3} \\times [8x]_2^5 = \\frac{8(5-2)}{3} = 8$."
  },
  {
    id: 85,
    category: "integration",
    title: "Équation différentielle homogène (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Amérique du Nord 2022</b><br>Les solutions de l'équation différentielle $y' + 2y = 0$ sur $\\mathbb{R}$ sont les fonctions de la forme :",
    options: [
      "$f(x) = C e^{-2x}$",
      "$f(x) = C e^{2x}$",
      "$f(x) = C e^{-x/2}$",
      "$f(x) = -2x + C$"
    ],
    correctAnswer: 0,
    hint: "C'est une équation de la forme $y' = ay$ avec $a = -2$.",
    explanation: "$y' + 2y = 0 \\iff y' = -2y$. Les solutions sont de la forme $f(x) = C e^{ax} = C e^{-2x}$ avec $C \\in \\mathbb{R}$."
  },
  {
    id: 86,
    category: "integration",
    title: "Primitive de fonction trigonométrique",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Polynésie 2022</b><br>Calculer la valeur exacte de l'intégrale $I = \\int_0^{\\pi} \\sin(x) dx$.",
    correctAnswer: "2",
    hint: "Une primitive de $\\sin(x)$ est $-\\cos(x)$.",
    explanation: "$I = [-\\cos(x)]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = -(-1) - (-1) = 1 + 1 = 2$."
  },
  {
    id: 87,
    category: "integration",
    title: "Linéarité de l'intégrale (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Asie 2022</b><br>Soient $\\int_1^3 f(x) dx = 4$ et $\\int_1^3 g(x) dx = -2$. Calculer $\\int_1^3 (2f(x) + g(x)) dx$.",
    options: ["$2$", "$6$", "$10$", "$8$"],
    correctAnswer: 1,
    hint: "Utilisez la propriété de linéarité : $\\int (2f+g) = 2\\int f + \\int g$.",
    explanation: "$\\int_1^3 (2f(x) + g(x)) dx = 2 \\int_1^3 f(x) dx + \\int_1^3 g(x) dx = 2(4) + (-2) = 8 - 2 = 6$."
  },
  {
    id: 88,
    category: "integration",
    title: "Primitive de u' u^n (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Nouvelle-Calédonie 2021</b><br>Une primitive de la fonction $f(x) = 3x^2(x^3 + 1)^4$ sur $\\mathbb{R}$ est :",
    options: [
      "$F(x) = \\frac{(x^3 + 1)^5}{5}$",
      "$F(x) = (x^3 + 1)^5$",
      "$F(x) = \\frac{3x^2(x^3 + 1)^5}{5}$",
      "$F(x) = \\frac{(3x^2)^5}{5}$"
    ],
    correctAnswer: 0,
    hint: "La fonction est de la forme $u' u^n$ avec $u(x) = x^3 + 1$ et $n=4$. Sa primitive est de la forme $\\frac{u^{n+1}}{n+1}$.",
    explanation: "Avec $u(x) = x^3 + 1 \\implies u'(x) = 3x^2$, on a $f(x) = u'(x)u(x)^4$. La primitive est $F(x) = \\frac{u(x)^5}{5} = \\frac{(x^3+1)^5}{5}$."
  },
  {
    id: 89,
    category: "integration",
    title: "Aire sous une droite",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Réunion 2022</b><br>Calculer l'aire (en unités d'aire) sous la courbe de la fonction $f(x) = x$ entre les abscisses $x=0$ et $x=4$.",
    correctAnswer: "8",
    hint: "Calculez l'intégrale $\\int_0^4 x dx$ ou l'aire du triangle correspondant.",
    explanation: "L'aire est l'intégrale $\\int_0^4 x dx = [\\frac{1}{2}x^2]_0^4 = \\frac{16}{2} - 0 = 8$."
  },
  {
    id: 90,
    category: "integration",
    title: "Intégrale de la dérivée (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Polynésie 2021</b><br>Pour toute fonction $f$ continûment dérivable sur $[a; b]$, $\\int_a^b f'(x) dx$ est égal à :",
    options: [
      "$f(b) - f(a)$",
      "$f'(b) - f'(a)$",
      "$f(a) - f(b)$",
      "Il faut intégrer par parties"
    ],
    correctAnswer: 0,
    hint: "Une primitive de la dérivée $f'$ est par définition la fonction $f$ elle-même.",
    explanation: "D'après le théorème fondamental de l'analyse, la primitive de $f'$ est $f$. Donc $\\int_a^b f'(x) dx = [f(x)]_a^b = f(b) - f(a)$."
  },
  {
    id: 91,
    category: "integration",
    title: "Solution d'équation y' = ay",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Antilles 2022</b><br>Soit l'équation $y' = -3y$. Déterminer la valeur de la solution $f$ en $x=0$ sachant que la constante de la solution est $C=4$.",
    correctAnswer: "4",
    hint: "La forme générale des solutions est $f(x) = C e^{-3x}$. Évaluez en 0.",
    explanation: "$f(x) = 4 e^{-3x}$. En $x=0$, $f(0) = 4 e^0 = 4$."
  },
  {
    id: 92,
    category: "integration",
    title: "Relation de Chasles (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Amérique du Nord 2021</b><br>D'après la relation de Chasles, si $\\int_0^2 f(x) dx = 5$ et $\\int_2^5 f(x) dx = 3$, alors $\\int_0^5 f(x) dx$ vaut :",
    options: ["$2$", "$8$", "$15$", "$1.67$"],
    correctAnswer: 1,
    hint: "La relation de Chasles permet d'écrire $\\int_a^c f + \\int_c^b f = \\int_a^b f$.",
    explanation: "$\\int_0^5 f(x) dx = \\int_0^2 f(x) dx + \\int_2^5 f(x) dx = 5 + 3 = 8$."
  },
  {
    id: 93,
    category: "integration",
    title: "Valeur moyenne de fonction linéaire",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Nouvelle-Calédonie 2022</b><br>Calculer la valeur moyenne de la fonction $f(x) = 2x$ sur l'intervalle $[0; 4]$.",
    correctAnswer: "4",
    hint: "La formule est $\\mu = \\frac{1}{4-0} \\int_0^4 2x dx$.",
    explanation: "$\\mu = \\frac{1}{4} \\times [x^2]_0^4 = \\frac{1}{4} \\times 16 = 4$."
  },
  {
    id: 94,
    category: "integration",
    title: "Positivité de l'intégrale (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Centres Étrangers 2023</b><br>Si pour tout $x \\in [a; b]$ (avec $a < b$), $f(x) \\ge 0$, alors :",
    options: [
      "$\\int_a^b f(x) dx \\ge 0$",
      "$\\int_a^b f(x) dx \\le 0$",
      "$\\int_a^b f(x) dx = 0$",
      "La fonction est croissante"
    ],
    correctAnswer: 0,
    hint: "La positivité de l'intégrale est une propriété fondamentale garantissant que l'aire sous la courbe d'une fonction positive est positive.",
    explanation: "Si la fonction est positive sur $[a;b]$ et $a < b$, alors par positivité de l'intégrale, son intégrale $\\int_a^b f(x) dx$ est également positive ou nulle."
  },
  {
    id: 95,
    category: "integration",
    title: "Primitive de u' e^u (QCM)",
    difficulty: "moyen",
    type: "qcm",
    question: "<b>Bac Réunion 2021</b><br>Une primitive de la fonction $f(x) = e^{-2x}$ sur $\\mathbb{R}$ est :",
    options: [
      "$F(x) = -\\frac{1}{2} e^{-2x}$",
      "$F(x) = e^{-2x}$",
      "$F(x) = -2 e^{-2x}$",
      "$F(x) = \\frac{1}{2} e^{-2x}$"
    ],
    correctAnswer: 0,
    hint: "La fonction est de la forme $-\\frac{1}{2} u' e^u$ avec $u(x) = -2x$.",
    explanation: "Pour $u(x) = -2x \\implies u'(x) = -2$, la dérivée de $F(x) = -\\frac{1}{2} e^{-2x}$ est $-\\frac{1}{2} \\times (-2) e^{-2x} = e^{-2x}$."
  },
  {
    id: 96,
    category: "integration",
    title: "Intégrale de fonction symétrique",
    difficulty: "difficile",
    type: "ouvert",
    question: "<b>Bac Polynésie 2022</b><br>Soit $f$ une fonction impaire ($f(-x) = -f(x)$) continue sur $[-3; 3]$. <br> Quelle est la valeur exacte de l'intégrale $\\int_{-3}^3 f(x) dx$ ?",
    correctAnswer: "0",
    hint: "Représentez graphiquement l'aire d'une fonction impaire de part et d'autre de l'origine. Les aires s'annulent.",
    explanation: "Pour toute fonction impaire continue sur un intervalle centré en 0, $[-a; a]$, l'intégrale sur cet intervalle est nulle car la zone sous la courbe à gauche s'oppose exactement à celle de droite : $\\int_{-a}^a f(x)dx = 0$."
  },
  {
    id: 97,
    category: "integration",
    title: "Valeur de primitive avec condition initiale",
    difficulty: "moyen",
    type: "ouvert",
    question: "<b>Bac Asie 2022</b><br>Soit la fonction $f(x) = 2x + 1$ et $F$ sa primitive sur $\\mathbb{R}$ vérifiant $F(0) = 3$. <br> Calculer la valeur exacte de $F(2)$.",
    correctAnswer: "9",
    hint: "Déterminez la forme générale des primitives $F(x) = x^2 + x + C$. Trouvez $C$ puis calculez $F(2)$.",
    explanation: "1. Primitive : $F(x) = x^2 + x + C$. <br> 2. Condition initiale : $F(0) = 3 \\iff 0^2 + 0 + C = 3 \\iff C = 3$. Donc $F(x) = x^2 + x + 3$. <br> 3. Calcul : $F(2) = 2^2 + 2 + 3 = 4 + 2 + 3 = 9$."
  },
  {
    id: 98,
    category: "integration",
    title: "Intégrale de 1/x (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Antilles 2021</b><br>La valeur de l'intégrale $\\int_1^e \\frac{1}{x} dx$ est égale à :",
    options: ["$1$", "$e$", "$0$", "$\\ln(e) - 1$"],
    correctAnswer: 0,
    hint: "Une primitive de $1/x$ sur $]0; +\\infty[$ est $\\ln(x)$.",
    explanation: "$\\int_1^e \\frac{1}{x} dx = [\\ln(x)]_1^e = \\ln(e) - \\ln(1) = 1 - 0 = 1$."
  },
  {
    id: 99,
    category: "integration",
    title: "Solution d'équation différentielle y' = ay + b homogène",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Amérique du Nord 2022</b><br>Soit l'équation $y' = 2y - 4$. <br> Quelle est la valeur de la solution constante (la solution stationnaire) de cette équation ?",
    correctAnswer: "2",
    hint: "Une solution constante $y_0$ vérifie $y_0' = 0$, donc $2y_0 - 4 = 0$.",
    explanation: "Pour la solution constante, la dérivée est nulle : $0 = 2y_0 - 4 \\iff 2y_0 = 4 \\iff y_0 = 2$. La solution stationnaire est donc 2."
  },
  {
    id: 100,
    category: "integration",
    title: "Signe de l'intégrale de fonctions ordonnées (QCM)",
    difficulty: "facile",
    type: "qcm",
    question: "<b>Bac Nouvelle-Calédonie 2021</b><br>Si pour tout $x \\in [a; b]$, $f(x) \\le g(x)$, alors :",
    options: [
      "$\\int_a^b f(x) dx \\le \\int_a^b g(x) dx$",
      "$\\int_a^b f(x) dx \\ge \\int_a^b g(x) dx$",
      "$\\int_a^b f(x) dx = \\int_a^b g(x) dx$",
      "L'intégrale de $f$ est nécessairement négative"
    ],
    correctAnswer: 0,
    hint: "C'est la propriété de conservation de l'ordre par passage à l'intégrale.",
    explanation: "Par la propriété de croissance de l'intégrale (conservation de l'ordre), si $f \\le g$ sur $[a; b]$ avec $a \\le b$, alors $\\int_a^b f(x)dx \\le \\int_a^b g(x)dx$."
  }
];

// Exporter les données de façon globale pour une utilisation simple dans le script principal
window.FORMULAS_DATA = FORMULAS_DATA;
window.EXERCISES_DATA = EXERCISES_DATA;
