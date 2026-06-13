window.EXERCISES_BY_CAT = window.EXERCISES_BY_CAT || {};
window.EXERCISES_BY_CAT["suites"] = [
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
  }
];
