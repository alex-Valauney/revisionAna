window.EXERCISES_BY_CAT = window.EXERCISES_BY_CAT || {};
window.EXERCISES_BY_CAT["fonctions"] = [
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
  }
];
