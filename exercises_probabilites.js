window.EXERCISES_BY_CAT = window.EXERCISES_BY_CAT || {};
window.EXERCISES_BY_CAT["probabilites"] = [
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
  }
];
