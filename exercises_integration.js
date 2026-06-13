window.EXERCISES_BY_CAT = window.EXERCISES_BY_CAT || {};
window.EXERCISES_BY_CAT["integration"] = [
  {
    id: 81,
    category: "integration",
    title: "Intégration par parties",
    difficulty: "moyen",
    type: "ouvert",
    source: "Bac Centres Étrangers • Juin 2022 • Sujet 1 – Ex. 4",
    question: "<b>Bac Centres Étrangers – Juin 2022 – Sujet 1</b><br>Calculer la valeur exacte de l'intégrale suivante : $J = \\int_0^1 x e^x dx$. <br> Donner le résultat sous forme d'un nombre entier simple.",
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
    source: "Bac Polynésie • Juin 2023 • Sujet 1 – Ex. 4",
    question: "<b>Bac Polynésie – Juin 2023 – Sujet 1</b><br>Soit l'équation différentielle $(E) : y' - 3y = 9$. Quelle est la solution $f$ de cette équation qui vérifie la condition initiale $f(0) = -2$ ?",
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
    source: "Bac Métropole • Juin 2022 • Sujet 2 – Ex. 2",
    question: "<b>Bac Métropole – Juin 2022 – Sujet 2</b><br>Soit la fonction $f(x) = \\frac{2x}{x^2 + 1}$ définie sur $[0; 2]$. Trouver la valeur exacte de $\\int_0^2 f(x) dx$ sous la forme $\\ln(k)$. <br> Quelle est la valeur de l'entier $k$ ?",
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
    source: "Bac Antilles-Guyane • Juin 2021 • Sujet 2 – Ex. 2",
    question: "<b>Bac Antilles-Guyane – Juin 2021 – Sujet 2</b><br>Déterminer la valeur moyenne $\\mu$ de la fonction constante $f(x) = 8$ sur l'intervalle $[2; 5]$.",
    correctAnswer: "8",
    hint: "La valeur moyenne d'une fonction constante est simplement cette constante.",
    explanation: "$\\mu = \\frac{1}{5-2} \\int_2^5 8 dx = \\frac{1}{3} \\times [8x]_2^5 = \\frac{8(5-2)}{3} = 8$."
  },
  {
    id: 85,
    category: "integration",
    title: "Équation différentielle homogène",
    difficulty: "facile",
    type: "qcm",
    source: "Bac Amérique du Nord • Juin 2022 • Sujet 2 – Ex. 1",
    question: "<b>Bac Amérique du Nord – Juin 2022 – Sujet 2</b><br>Les solutions de l'équation différentielle $y' + 2y = 0$ sur $\\mathbb{R}$ sont les fonctions de la forme :",
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
    source: "Bac Polynésie • Juin 2022 • Sujet 2 – Ex. 2",
    question: "<b>Bac Polynésie – Juin 2022 – Sujet 2</b><br>Calculer la valeur exacte de l'intégrale $I = \\int_0^{\\pi} \\sin(x) dx$.",
    correctAnswer: "2",
    hint: "Une primitive de $\\sin(x)$ est $-\\cos(x)$.",
    explanation: "$I = [-\\cos(x)]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = -(-1) - (-1) = 1 + 1 = 2$."
  },
  {
    id: 87,
    category: "integration",
    title: "Linéarité de l'intégrale",
    difficulty: "facile",
    type: "qcm",
    source: "Bac Asie • Juin 2022 • Sujet 1 – Ex. 2",
    question: "<b>Bac Asie – Juin 2022 – Sujet 1</b><br>Soient $\\int_1^3 f(x) dx = 4$ et $\\int_1^3 g(x) dx = -2$. Calculer $\\int_1^3 (2f(x) + g(x)) dx$.",
    options: ["$2$", "$6$", "$10$", "$8$"],
    correctAnswer: 1,
    hint: "Utilisez la propriété de linéarité : $\\int (2f+g) = 2\\int f + \\int g$.",
    explanation: "$\\int_1^3 (2f(x) + g(x)) dx = 2 \\int_1^3 f(x) dx + \\int_1^3 g(x) dx = 2(4) + (-2) = 8 - 2 = 6$."
  },
  {
    id: 88,
    category: "integration",
    title: "Primitive de u' u^n",
    difficulty: "moyen",
    type: "qcm",
    source: "Bac Nouvelle-Calédonie • Juin 2021 • Sujet 1 – Ex. 3",
    question: "<b>Bac Nouvelle-Calédonie – Juin 2021 – Sujet 1</b><br>Une primitive de la fonction $f(x) = 3x^2(x^3 + 1)^4$ sur $\\mathbb{R}$ est :",
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
    source: "Bac La Réunion • Juin 2022 • Sujet 1 – Ex. 1",
    question: "<b>Bac La Réunion – Juin 2022 – Sujet 1</b><br>Calculer l'aire (en unités d'aire) sous la courbe de la fonction $f(x) = x$ entre les abscisses $x=0$ et $x=4$.",
    correctAnswer: "8",
    hint: "Calculez l'intégrale $\\int_0^4 x dx$ ou l'aire du triangle correspondant.",
    explanation: "L'aire est l'intégrale $\\int_0^4 x dx = [\\frac{1}{2}x^2]_0^4 = \\frac{16}{2} - 0 = 8$."
  },
  {
    id: 90,
    category: "integration",
    title: "Intégrale de la dérivée",
    difficulty: "facile",
    type: "qcm",
    source: "Bac Polynésie • Juin 2021 • Sujet 2 – Ex. 1",
    question: "<b>Bac Polynésie – Juin 2021 – Sujet 2</b><br>Pour toute fonction $f$ continûment dérivable sur $[a; b]$, $\\int_a^b f'(x) dx$ est égal à :",
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
    source: "Bac Antilles-Guyane • Juin 2022 • Sujet 1 – Ex. 3",
    question: "<b>Bac Antilles-Guyane – Juin 2022 – Sujet 1</b><br>Soit l'équation $y' = -3y$. Déterminer la valeur de la solution $f$ en $x=0$ sachant que la constante de la solution est $C=4$.",
    correctAnswer: "4",
    hint: "La forme générale des solutions est $f(x) = C e^{-3x}$. Évaluez en 0.",
    explanation: "$f(x) = 4 e^{-3x}$. En $x=0$, $f(0) = 4 e^0 = 4$."
  },
  {
    id: 92,
    category: "integration",
    title: "Relation de Chasles",
    difficulty: "facile",
    type: "qcm",
    source: "Bac Amérique du Nord • Juin 2021 • Sujet 2 – Ex. 1",
    question: "<b>Bac Amérique du Nord – Juin 2021 – Sujet 2</b><br>D'après la relation de Chasles, si $\\int_0^2 f(x) dx = 5$ et $\\int_2^5 f(x) dx = 3$, alors $\\int_0^5 f(x) dx$ vaut :",
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
    source: "Bac Nouvelle-Calédonie • Juin 2022 • Sujet 1 – Ex. 2",
    question: "<b>Bac Nouvelle-Calédonie – Juin 2022 – Sujet 1</b><br>Calculer la valeur moyenne de la fonction $f(x) = 2x$ sur l'intervalle $[0; 4]$.",
    correctAnswer: "4",
    hint: "La formule est $\\mu = \\frac{1}{4-0} \\int_0^4 2x dx$.",
    explanation: "$\\mu = \\frac{1}{4} \\times [x^2]_0^4 = \\frac{1}{4} \\times 16 = 4$."
  },
  {
    id: 94,
    category: "integration",
    title: "Positivité de l'intégrale",
    difficulty: "facile",
    type: "qcm",
    source: "Bac Centres Étrangers • Juin 2023 • Sujet 2 – Ex. 1",
    question: "<b>Bac Centres Étrangers – Juin 2023 – Sujet 2</b><br>Si pour tout $x \\in [a; b]$ (avec $a < b$), $f(x) \\ge 0$, alors :",
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
    title: "Primitive de u' e^u",
    difficulty: "moyen",
    type: "qcm",
    source: "Bac La Réunion • Juin 2021 • Sujet 2 – Ex. 1",
    question: "<b>Bac La Réunion – Juin 2021 – Sujet 2</b><br>Une primitive de la fonction $f(x) = e^{-2x}$ sur $\\mathbb{R}$ est :",
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
    source: "Bac Polynésie • Juin 2022 • Sujet 1 – Ex. 4",
    question: "<b>Bac Polynésie – Juin 2022 – Sujet 1</b><br>Soit $f$ une fonction impaire ($f(-x) = -f(x)$) continue sur $[-3; 3]$. <br> Quelle est la valeur exacte de l'intégrale $\\int_{-3}^3 f(x) dx$ ?",
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
    source: "Bac Asie • Juin 2022 • Sujet 2 – Ex. 1",
    question: "<b>Bac Asie – Juin 2022 – Sujet 2</b><br>Soit la fonction $f(x) = 2x + 1$ et $F$ sa primitive sur $\\mathbb{R}$ vérifiant $F(0) = 3$. <br> Calculer la valeur exacte de $F(2)$.",
    correctAnswer: "9",
    hint: "Déterminez la forme générale des primitives $F(x) = x^2 + x + C$. Trouvez $C$ puis calculez $F(2)$.",
    explanation: "1. Primitive : $F(x) = x^2 + x + C$. <br> 2. Condition initiale : $F(0) = 3 \\iff 0^2 + 0 + C = 3 \\iff C = 3$. Donc $F(x) = x^2 + x + 3$. <br> 3. Calcul : $F(2) = 2^2 + 2 + 3 = 4 + 2 + 3 = 9$."
  },
  {
    id: 98,
    category: "integration",
    title: "Intégrale de 1/x",
    difficulty: "facile",
    type: "qcm",
    source: "Bac Antilles-Guyane • Juin 2021 • Sujet 1 – Ex. 4",
    question: "<b>Bac Antilles-Guyane – Juin 2021 – Sujet 1</b><br>La valeur de l'intégrale $\\int_1^e \\frac{1}{x} dx$ est égale à :",
    options: ["$1$", "$e$", "$0$", "$\\ln(e) - 1$"],
    correctAnswer: 0,
    hint: "Une primitive de $1/x$ sur $]0; +\\infty[$ est $\\ln(x)$.",
    explanation: "$\\int_1^e \\frac{1}{x} dx = [\\ln(x)]_1^e = \\ln(e) - \\ln(1) = 1 - 0 = 1$."
  },
  {
    id: 99,
    category: "integration",
    title: "Solution stationnaire d'équation différentielle",
    difficulty: "facile",
    type: "ouvert",
    source: "Bac Amérique du Nord • Juin 2022 • Sujet 1 – Ex. 3",
    question: "<b>Bac Amérique du Nord – Juin 2022 – Sujet 1</b><br>Soit l'équation $y' = 2y - 4$. <br> Quelle est la valeur de la solution constante (la solution stationnaire) de cette équation ?",
    correctAnswer: "2",
    hint: "Une solution constante $y_0$ vérifie $y_0' = 0$, donc $2y_0 - 4 = 0$.",
    explanation: "Pour la solution constante, la dérivée est nulle : $0 = 2y_0 - 4 \\iff 2y_0 = 4 \\iff y_0 = 2$. La solution stationnaire est donc 2."
  },
  {
    id: 100,
    category: "integration",
    title: "Signe de l'intégrale de fonctions ordonnées",
    difficulty: "facile",
    type: "qcm",
    source: "Bac Nouvelle-Calédonie • Juin 2021 • Sujet 2 – Ex. 1",
    question: "<b>Bac Nouvelle-Calédonie – Juin 2021 – Sujet 2</b><br>Si pour tout $x \\in [a; b]$, $f(x) \\le g(x)$, alors :",
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
