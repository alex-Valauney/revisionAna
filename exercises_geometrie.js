window.EXERCISES_BY_CAT = window.EXERCISES_BY_CAT || {};
window.EXERCISES_BY_CAT["geometrie"] = [
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
    explanation: "$\\vec{AB}(1; 1; 2)$ and $\\vec{AC}(2; 0; -1)$. <br> $\\vec{n} \\cdot \\vec{AB} = 1(1) + (-5)(1) + 2(2) = 0$. <br> $\\vec{n} \\cdot \\vec{AC} = 1(2) + (-5)(0) + 2(-1) = 0$. Donc $\\vec{n}$ est normal au plan."
  },
  {
    id: 42,
    category: "geometrie",
    title: "Orthogonalité de vecteurs",
    difficulty: "facile",
    type: "ouvert",
    question: "<b>Bac Centres Étrangers 2023</b><br>On considère les vecteurs $\\vec{u}(2; 1; -3)$ and $\\vec{v}(1; k; 2)$ dans un repère orthonormé. <br> Déterminer le réel $k$ pour que les vecteurs $\\vec{u}$ and $\\vec{v}$ soient orthogonaux.",
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
    question: "<b>Bac Amérique du Nord 2022</b><br>Soient les points $A(2; 3; 1)$ and $B(5; 3; 5)$ dans un repère orthonormé. <br> Calculer la distance exacte $AB$.",
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
    question: "<b>Bac Antilles-Guyane 2021</b><br>Soient les points $A(1; 2; 5)$ and $B(3; 4; -1)$. <br> Calculer la coordonnée $z_I$ du milieu $I$ du segment $[AB]$.",
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
    question: "<b>Bac Polynésie 2022</b><br>Soit le plan $P$ passant par $A(1; 1; 1)$ and admettant le vecteur $\\vec{n}(2; 3; -1)$ comme vecteur normal. <br> Quelle est la valeur de la constante $d$ dans son équation cartésienne sous la forme $2x + 3y - z + d = 0$ ?",
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
    question: "<b>Bac Réunion 2022</b><br>Soit la droite $D$ passant par $A(1; 2; 3)$ and dirigée par $\\vec{u}(0; -1; 2)$. Laquelle de ces représentations paramétriques modélise la droite $D$ ?",
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
    question: "<b>Bac Asie 2022</b><br>On considère la droite $D : \\begin{cases} x = t \\\\ y = 2t \\\\ z = -t \\end{cases}$ and le plan $P : x + y + z - 4 = 0$. <br> Déterminer l'abscisse $x$ du point d'intersection de $D$ and $P$.",
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
    question: "<b>Bac Nouvelle-Calédonie 2021</b><br>Trois vecteurs $\\vec{u}$, $\\vec{v}$ and $\\vec{w}$ de l'espace sont coplanaires si et seulement si :",
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
    question: "<b>Bac Métropole 2022</b><br>On considère le point $A(1; 1; 2)$ and le plan $P$ d'équation cartésienne $2x + 2y - z - 8 = 0$. <br> Calculer la distance du point $A$ au plan $P$.",
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
    question: "<b>Bac Polynésie 2021</b><br>Les vecteurs $\\vec{u}(2; -4; 6)$ and $\\vec{v}(-1; 2; -3)$ sont :",
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
    question: "<b>Bac Amérique du Nord 2023</b><br>Soient $\\vec{u}$ and $\\vec{v}$ deux vecteurs directeurs d'un plan $P$. Ces vecteurs doivent être :",
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
    question: "<b>Bac Réunion 2021</b><br>On considère les vecteurs $\\vec{u}(1; 1; 0)$ and $\\vec{v}(0; 1; 1)$ dans un repère orthonormé. <br> Déterminer la valeur exacte en degrés de l'angle $\\theta$ formé par ces deux vecteurs.",
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
    question: "<b>Bac Polynésie 2022</b><br>Soient les plans $P_1 : 2x - y + 3z - 1 = 0$ and $P_2 : -4x + 2y - 6z + 5 = 0$. Ces plans sont :",
    options: [
      "Parallèles",
      "Sécants et orthogonaux",
      "Confondus",
      "Sécants non orthogonaux"
    ],
    correctAnswer: 0,
    hint: "Comparez les coordonnées de leurs vecteurs normaux $\\vec{n_1}$ and $\\vec{n_2}$.",
    explanation: "$\\vec{n_1}(2; -1; 3)$ and $\\vec{n_2}(-4; 2; -6)$. On observe que $\\vec{n_2} = -2\\vec{n_1}$, les vecteurs normaux sont colinéaires, donc les plans sont parallèles (et non confondus car les termes constants $-1 \\times (-2) \\neq 5$)."
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
  }
];
