window.EXAMS_DATA = [
  {
    id: "metropole_2023_sujet1",
    title: "Bac Métropole - 20 Mars 2023 - Sujet 1",
    exercises: [
      {
        title: "Exercice 1 : Probabilités (QCM - 5 points)",
        questions: [
          {
            id: "m2023s1_ex1_q1",
            type: "qcm",
            question: "Toutes les machines d'une entreprise sont identiques. On sait que :<br>- $20\\%$ des machines sont sous garantie ;<br>- $0{,}2\\%$ des machines sont à la fois défectueuses et sous garantie ;<br>- $8{,}2\\%$ des machines sont défectueuses.<br>On choisit au hasard une machine. On note $G$ l'événement « la machine est sous garantie » et $D$ « la machine est défectueuse ».<br><br><b>Question 1 :</b> La probabilité $p_G(D)$ de l'événement $D$ sachant que $G$ est réalisé est égale à :",
            options: ["$0{,}002$", "$0{,}01$", "$0{,}024$", "$0{,}2$"],
            correctAnswer: 1,
            explanation: "On a $P(G) = 0{,}2$ et $P(D \\cap G) = 0{,}002$.<br>La probabilité conditionnelle $p_G(D)$ est égale à :<br>$p_G(D) = \\frac{P(G \\cap D)}{P(G)} = \\frac{0{,}002}{0{,}2} = 0{,}01$. Réponse B."
          },
          {
            id: "m2023s1_ex1_q2",
            type: "qcm",
            question: "<b>Question 2 :</b> La probabilité $p(\\bar{G} \\cap D)$ (la machine n'est pas sous garantie et elle est défectueuse) est égale à :",
            options: ["$0{,}01$", "$0{,}08$", "$0{,}1$", "$0{,}21$"],
            correctAnswer: 1,
            explanation: "Les événements $G$ et $\\bar{G}$ forment une partition de l'univers. D'après la formule des probabilités totales :<br>$P(D) = P(G \\cap D) + P(\\bar{G} \\cap D)$<br>$0{,}082 = 0{,}002 + P(\\bar{G} \\cap D) \\iff P(\\bar{G} \\cap D) = 0{,}08$. Réponse B."
          },
          {
            id: "m2023s1_ex1_q3",
            type: "qcm",
            question: "<b>Question 3 :</b> La machine testée est défectueuse. La probabilité qu'elle soit sous garantie est environ égale, à $10^{-3}$ près, à :",
            options: ["$0{,}01$", "$0{,}024$", "$0{,}082$", "$0{,}1$"],
            correctAnswer: 1,
            explanation: "On cherche la probabilité conditionnelle $p_D(G)$ :<br>$p_D(G) = \\frac{P(G \\cap D)}{P(D)} = \\frac{0{,}002}{0{,}082} \\approx 0{,}024$. Réponse B."
          },
          {
            id: "m2023s1_ex1_q4",
            type: "qcm",
            question: "On choisit au hasard et de façon indépendante $50$ machines de l'entreprise. On assimile ce choix à un tirage avec remise. Soit $X$ la variable aléatoire qui associe à ce lot le nombre de machines défectueuses. On rappelle que la probabilité d'être défectueuse est $p = 0{,}082$. Ainsi $X$ suit la loi binomiale de paramètres $n = 50$ et $p = 0{,}082$.<br><br><b>Question 4 :</b> La valeur de la probabilité $P(X > 2)$, arrondie au millième, est de :",
            options: ["$0{,}136$", "$0{,}789$", "$0{,}864$", "$0{,}924$"],
            correctAnswer: 1,
            explanation: "On cherche $P(X > 2) = 1 - P(X \\le 2)$.<br>Avec la loi binomiale :<br>$P(X \\le 2) = P(X=0) + P(X=1) + P(X=2)$<br>$P(X=0) = (1-0{,}082)^{50} \\approx 0{,}0143$<br>$P(X=1) = \\binom{50}{1} \\times 0{,}082 \\times (1-0{,}082)^{49} \\approx 0{,}0638$<br>$P(X=2) = \\binom{50}{2} \\times 0{,}082^2 \\times (1-0{,}082)^{48} \\approx 0{,}1393$<br>$P(X \\le 2) \\approx 0{,}2174$<br>Donc $P(X > 2) = 1 - 0{,}2174 \\approx 0{,}789$. Réponse B."
          },
          {
            id: "m2023s1_ex1_q5",
            type: "qcm",
            question: "On considère un entier $n$ pour lequel la probabilité que toutes les machines d'un lot de taille $n$ fonctionnent correctement est supérieure à $0{,}4$.<br><br><b>Question 5 :</b> La plus grande valeur possible pour $n$ est égale à :",
            options: ["$5$", "$6$", "$10$", "$11$"],
            correctAnswer: 2,
            explanation: "La probabilité qu'une machine fonctionne correctement est $1 - 0{,}082 = 0{,}918$.<br>La probabilité que les $n$ machines fonctionnent correctement est $(0{,}918)^n$.<br>On résout : $(0{,}918)^n \\ge 0{,}4 \\iff n \\ln(0{,}918) \\ge \\ln(0{,}4) \\iff n \\le \\frac{\\ln(0{,}4)}{\\ln(0{,}918)}$ (car $\\ln(0{,}918) < 0$).<br>Comme $\\frac{\\ln(0{,}4)}{\\ln(0{,}918)} \\approx 10{,}7$, la plus grande valeur entière de $n$ est $10$. Réponse C."
          }
        ]
      },
      {
        title: "Exercice 2 : Fonctions (5 points)",
        questions: [
          {
            id: "m2023s1_ex2_q1",
            type: "qcm",
            question: "Soit la fonction $f$ définie sur $]0 ; +\\infty[$ par $f(x) = x^2 - 8\\ln(x)$, où $\\ln$ désigne la fonction logarithme népérien.<br><br><b>Question 1 :</b> Déterminer $\\lim\\limits_{x \\to 0} f(x)$.",
            options: ["$0$", "$+\\infty$", "$-\\infty$", "$8$"],
            correctAnswer: 1,
            explanation: "On a $\\lim\\limits_{x \\to 0} x^2 = 0$ et $\\lim\\limits_{x \\to 0} \\ln(x) = -\\infty$.<br>Ainsi $\\lim\\limits_{x \\to 0} -8\\ln(x) = +\\infty$.<br>Par somme, $\\lim\\limits_{x \\to 0} f(x) = +\\infty$."
          },
          {
            id: "m2023s1_ex2_q2",
            type: "qcm",
            question: "On admet que, pour tout $x > 0$, $f(x) = x^2\\left(1 - 8\\frac{\\ln(x)}{x^2}\\right)$.<br><br><b>Question 2 :</b> Déterminer la limite de $f$ en $+\\infty$.",
            options: ["$0$", "$+\\infty$", "$-\\infty$", "$1$"],
            correctAnswer: 1,
            explanation: "Par croissances comparées, $\\lim\\limits_{x \\to +\\infty} \\frac{\\ln(x)}{x^2} = 0$.<br>Donc $\\lim\\limits_{x \\to +\\infty} 1 - 8\\frac{\\ln(x)}{x^2} = 1$.<br>Comme $\\lim\\limits_{x \\to +\\infty} x^2 = +\\infty$, par produit on obtient $\\lim\\limits_{x \\to +\\infty} f(x) = +\\infty$."
          },
          {
            id: "m2023s1_ex2_q3",
            type: "qcm",
            question: "<b>Question 3 :</b> La fonction dérivée $f'$ de $f$ sur $]0 ; +\\infty[$ est donnée par :",
            options: ["$f'(x) = 2x - 8$", "$f'(x) = \\frac{2(x^2 - 4)}{x}$", "$f'(x) = 2x - \\frac{8}{x^2}$", "$f'(x) = \\frac{x^2 - 4}{x}$"],
            correctAnswer: 1,
            explanation: "La fonction $f(x) = x^2 - 8\\ln(x)$ est dérivable comme somme de fonctions dérivables.<br>Pour tout $x > 0$ :<br>$f'(x) = 2x - 8 \\times \\frac{1}{x} = 2x - \\frac{8}{x} = \\frac{2x^2 - 8}{x} = \\frac{2(x^2 - 4)}{x}$."
          },
          {
            id: "m2023s1_ex2_q4",
            type: "ouvert",
            question: "<b>Question 4 :</b> Déterminer la valeur exacte du minimum de la fonction $f$ sur l'intervalle $]0 ; +\\infty[$.",
            correctAnswer: "4-8ln(2)",
            explanation: "Le signe de $f'(x) = \\frac{2(x-2)(x+2)}{x}$ est celui de $x-2$ sur $]0; +\\infty[$.<br>La fonction est donc strictement décroissante sur $]0 ; 2]$ et strictement croissante sur $[2 ; +\\infty[$.<br>Le minimum est donc atteint en $x=2$ et sa valeur exacte est $f(2) = 2^2 - 8\\ln(2) = 4 - 8\\ln(2)$."
          },
          {
            id: "m2023s1_ex2_q5",
            type: "ouvert",
            question: "Pour tout nombre réel $k$, on considère la fonction $g_k$ définie sur $]0 ; +\\infty[$ par $g_k(x) = x^2 - 8\\ln(x) + k$.<br><br><b>Question 5 :</b> Déterminer la plus petite valeur de $k$ pour laquelle la fonction $g_k$ est positive ou nulle sur $]0 ; +\\infty[$.",
            correctAnswer: "8ln(2)-4",
            explanation: "La fonction $g_k(x) = f(x) + k$ possède le même sens de variation que $f$. Son minimum est atteint en $x=2$ et vaut $g_k(2) = f(2) + k = 4 - 8\\ln(2) + k$.<br>La fonction $g_k$ est positive ou nulle sur $]0 ; +\\infty[$ si et seulement si son minimum est positif ou nul :<br>$4 - 8\\ln(2) + k \\ge 0 \\iff k \\ge 8\\ln(2) - 4$.<br>La plus petite valeur de $k$ est donc $8\\ln(2) - 4$."
          }
        ]
      },
      {
        title: "Exercice 3 : Suites (5 points)",
        questions: [
          {
            id: "m2023s1_ex3_q1",
            type: "ouvert",
            question: "Une FAQ en ligne reçoit des questions. Au cours du 1er mois, 300 questions ont été posées. Chaque mois, $90\\%$ des questions du mois précédent sont conservées, et 130 nouvelles questions sont ajoutées.<br>On modélise le nombre de questions, en centaines, le $n$-ième mois par la suite $(u_n)$ définie par :<br>$u_1 = 3$ et, pour tout $n \\ge 1$, $u_{n+1} = 0{,}9u_n + 1{,}3$.<br><br><b>Question 1 :</b> Calculer la valeur exacte de $u_2$.",
            correctAnswer: "4",
            explanation: "$u_2 = 0{,}9 u_1 + 1{,}3 = 0{,}9 \\times 3 + 1{,}3 = 2{,}7 + 1{,}3 = 4$."
          },
          {
            id: "m2023s1_ex3_q2",
            type: "ouvert",
            question: "<b>Question 2 :</b> Calculer la valeur exacte de $u_3$.",
            correctAnswer: "4.9",
            explanation: "$u_3 = 0{,}9 u_2 + 1{,}3 = 0{,}9 \\times 4 + 1{,}3 = 3{,}6 + 1{,}3 = 4{,}9$."
          },
          {
            id: "m2023s1_ex3_q3",
            type: "ouvert",
            question: "On considère la fonction Python suivante :<br><pre><code>def seuil(p):\n    n = 1\n    u = 3\n    while u <= p:\n        n = n + 1\n        u = 0.9 * u + 1.3\n    return n</code></pre><br><b>Question 3 :</b> Déterminer la valeur numérique renvoyée par l'appel de <code>seuil(8.5)</code>.",
            correctAnswer: "9",
            explanation: "On cherche le plus petit entier $n$ tel que $u_n > 8{,}5$. En calculant les termes :<br>$u_1=3$, $u_2=4$, $u_3=4{,}9$, $u_4=5{,}71$, $u_5=6{,}439$, $u_6=7{,}095$, $u_7=7{,}686$, $u_8 \\approx 8{,}217$, $u_9 \\approx 8{,}695$.<br>La condition de la boucle `while` s'arrête lorsque $u > 8{,}5$, ce qui se produit au rang $n=9$. Le programme retourne donc $9$."
          },
          {
            id: "m2023s1_ex3_q4",
            type: "ouvert",
            question: "Dans une autre modélisation, le nombre de questions, en centaines, le $n$-ième mois est estimé par la suite $(v_n)$ définie par $v_n = 9 - 6\\mathrm{e}^{-0{,}19(n-1)}$ pour $n \\ge 1$.<br><br><b>Question 4 :</b> Déterminer la plus petite valeur de l'entier $n$ telle que $v_n > 8{,}5$.",
            correctAnswer: "15",
            explanation: "On résout l'inéquation :<br>$9 - 6\\mathrm{e}^{-0{,}19(n-1)} > 8{,}5 \\iff -6\\mathrm{e}^{-0{,}19(n-1)} > -0{,}5 \\iff \\mathrm{e}^{-0{,}19(n-1)} < \\frac{0{,}5}{6} = \\frac{1}{12}$.<br>En appliquant le logarithme népérien :<br>$-0{,}19(n-1) < \\ln\\left(\\frac{1}{12}\\right) \\iff -0{,}19(n-1) < -\\ln(12) \\iff n-1 > \\frac{\\ln(12)}{0{,}19}$ (car $-0{,}19 < 0$).<br>$n > \\frac{\\ln(12)}{0{,}19} + 1 \\approx 14{,}08$.<br>La plus petite valeur entière est donc $n = 15$."
          }
        ]
      },
      {
        title: "Exercice 4 : Géométrie dans l'espace (5 points)",
        questions: [
          {
            id: "m2023s1_ex4_q1",
            type: "ouvert",
            question: "On considère le cube $ABCDEFGH$ d'arête $1$. L'espace est muni du repère orthonormé $(A ; \\vec{AB}, \\vec{AD}, \\vec{AE})$.<br><br><b>Question 1 :</b> Donner le triplet de coordonnées du point $G$ sous la forme (x,y,z).",
            correctAnswer: "(1,1,1)",
            explanation: "Dans le repère $(A ; \\vec{AB}, \\vec{AD}, \\vec{AE})$, l'origine est $A(0,0,0)$. Les sommets sont :<br>$B(1,0,0)$, $D(0,1,0)$, $E(0,0,1)$ et $G$ est le sommet opposé à $A$ sur la face supérieure, donc ses coordonnées sont $(1,1,1)$."
          },
          {
            id: "m2023s1_ex4_q2",
            type: "qcm",
            question: "On rappelle les coordonnées des points : $E(0,0,1)$ et $C(1,1,0)$.<br><br><b>Question 2 :</b> Donner les coordonnées du vecteur directeur $\\vec{EC}$ de la droite $(EC)$ :",
            options: ["$(1, 1, 1)$", "$(1, 1, -1)$", "$(0, 0, -1)$", "$(1, -1, 1)$"],
            correctAnswer: 1,
            explanation: "Le vecteur $\\vec{EC}$ a pour coordonnées :<br>$\\vec{EC} = \\begin{pmatrix} x_C - x_E \\\\ y_C - y_E \\\\ z_C - z_E \\end{pmatrix} = \\begin{pmatrix} 1 - 0 \\\\ 1 - 0 \\\\ 0 - 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 1 \\\\ -1 \\end{pmatrix}$. Réponse B."
          },
          {
            id: "m2023s1_ex4_q3",
            type: "qcm",
            question: "On considère le plan $(GBD)$ passant par les points $G(1,1,1)$, $B(1,0,0)$ et $D(0,1,0)$.<br><br><b>Question 3 :</b> L'équation cartésienne du plan $(GBD)$ est :",
            options: ["$x + y + z - 1 = 0$", "$x + y - z - 1 = 0$", "$x - y + z - 1 = 0$", "$x + y - z + 1 = 0$"],
            correctAnswer: 1,
            explanation: "Un vecteur normal au plan $(GBD)$ est $\\vec{EC}(1, 1, -1)$ car $\\vec{EC} \\cdot \\vec{GB} = 0$ et $\\vec{EC} \\cdot \\vec{GD} = 0$.<br>L'équation est donc de la forme $x + y - z + d = 0$.<br>Comme $B(1,0,0)$ appartient au plan, on a $1 + 0 - 0 + d = 0 \\iff d = -1$.<br>L'équation est $x + y - z - 1 = 0$. Réponse B."
          },
          {
            id: "m2023s1_ex4_q4",
            type: "qcm",
            question: "La droite $(EC)$ admet pour représentation paramétrique : $\\begin{cases} x = t \\\\ y = t \\\\ z = 1-t \\end{cases}$ ($t \\in \\mathbb{R}$). Le plan $(GBD)$ a pour équation $x+y-z-1=0$.<br><br><b>Question 4 :</b> Déterminer les coordonnées du point d'intersection $I$ du plan $(GBD)$ avec la droite $(EC)$ :",
            options: ["$(\\frac{1}{2}, \\frac{1}{2}, \\frac{1}{2})$", "$(\\frac{2}{3}, \\frac{2}{3}, \\frac{1}{3})$", "$(\\frac{1}{3}, \\frac{1}{3}, \\frac{2}{3})$", "$(\\frac{3}{4}, \\frac{3}{4}, \\frac{1}{4})$"],
            correctAnswer: 1,
            explanation: "On injecte les équations de la droite dans celle du plan :<br>$t + t - (1-t) - 1 = 0 \\iff 3t - 2 = 0 \\iff t = \\frac{2}{3}$.<br>En remplaçant $t$ par $\\frac{2}{3}$ dans la représentation paramétrique de $(EC)$, on trouve :<br>$x = \\frac{2}{3}$, $y = \\frac{2}{3}$ et $z = 1 - \\frac{2}{3} = \\frac{1}{3}$.<br>Les coordonnées sont donc $(\\frac{2}{3}, \\frac{2}{3}, \\frac{1}{3})$. Réponse B."
          },
          {
            id: "m2023s1_ex4_q5",
            type: "ouvert",
            question: "On rappelle la formule du volume d'un tétraèdre : $V = \\frac{1}{3} \\mathcal{B} h$ où $\\mathcal{B}$ est l'aire de la base et $h$ la hauteur correspondante.<br>Pour le tétraèdre $EGBD$, on choisit le triangle équilatéral $BDG$ comme base (d'aire $\\mathcal{B} = \\frac{\\sqrt{3}}{2}$) et la hauteur est la distance de $E$ au plan $(GBD)$ qui vaut $EI = \\frac{2\\sqrt{3}}{3}$.<br><br><b>Question 5 :</b> Calculer la valeur exacte du volume du tétraèdre $EGBD$.",
            correctAnswer: "1/3",
            explanation: "Le volume est :<br>$V = \\frac{1}{3} \\times \\mathcal{B} \\times h = \\frac{1}{3} \\times \\frac{\\sqrt{3}}{2} \\times \\frac{2\\sqrt{3}}{3} = \\frac{1}{3} \\times \\frac{3}{3} = \\frac{1}{3}$."
          }
        ]
      }
    ]
  },
  {
    id: "metropole_2023_sujet2",
    title: "Bac Métropole - 21 Mars 2023 - Sujet 2",
    exercises: [
      {
        title: "Exercice 1 : Probabilités (QCM - 5 points)",
        questions: [
          {
            id: "m2023s2_ex1_q1",
            type: "qcm",
            question: "Un joueur choisit entre deux mondes : le monde A ou le monde B.<br>- La probabilité qu'il choisisse le monde A est $\\frac{2}{5}$ ;<br>- S'il choisit le monde A, la probabilité de gagner est de $\\frac{7}{10}$ ;<br>- La probabilité de gagner la partie est de $\\frac{12}{25}$.<br>On note $A$ : « choisit le monde A », $B$ : « choisit le monde B », $G$ : « gagne la partie ».<br><br><b>Question 1 :</b> La probabilité $P(A \\cap G)$ que le joueur choisisse le monde A et gagne la partie est :",
            options: ["$\\frac{7}{10}$", "$\\frac{3}{25}$", "$\\frac{7}{25}$", "$\\frac{24}{125}$"],
            correctAnswer: 2,
            explanation: "$P(A \\cap G) = P(A) \\times P_A(G) = \\frac{2}{5} \\times \\frac{7}{10} = \\frac{14}{50} = \\frac{7}{25}$. Réponse C."
          },
          {
            id: "m2023s2_ex1_q2",
            type: "qcm",
            question: "<b>Question 2 :</b> La probabilité conditionnelle $P_B(G)$ sachant que le joueur a choisi le monde B est :",
            options: ["$\\frac{1}{5}$", "$\\frac{1}{3}$", "$\\frac{7}{15}$", "$\\frac{5}{12}$"],
            correctAnswer: 1,
            explanation: "Les événements $A$ et $B$ forment une partition. D'après la formule des probabilités totales :<br>$P(G) = P(A \\cap G) + P(B \\cap G) \\iff \\frac{12}{25} = \\frac{7}{25} + P(B \\cap G) \\iff P(B \\cap G) = \\frac{5}{25} = \\frac{1}{5}$.<br>Comme $P(B) = 1 - P(A) = 1 - \\frac{2}{5} = \\frac{3}{5}$ :<br>$P_B(G) = \\frac{P(B \\cap G)}{P(B)} = \\frac{1/5}{3/5} = \\frac{1}{3}$. Réponse B."
          },
          {
            id: "m2023s2_ex1_q3",
            type: "qcm",
            question: "Un joueur effectue $10$ parties successives et indépendantes. On rappelle que la probabilité de gagner une partie est $p = \\frac{12}{25} = 0{,}48$. Soit $X$ la variable aléatoire désignant le nombre de parties gagnées.<br><br><b>Question 3 :</b> La probabilité, arrondie au millième, que le joueur gagne exactement $6$ parties est égale à :",
            options: ["$0{,}859$", "$0{,}671$", "$0{,}188$", "$0{,}187$"],
            correctAnswer: 2,
            explanation: "$X$ suit la loi binomiale de paramètres $n = 10$ et $p = 0{,}48$.<br> On cherche $P(X=6) = \\binom{10}{6} \\times 0{,}48^6 \\times (1-0{,}48)^4 \\approx 210 \\times 0{,}01223 \\times 0{,}0731 \\approx 0{,}188$. Réponse C."
          },
          {
            id: "m2023s2_ex1_q4",
            type: "qcm",
            question: "<b>Question 4 :</b> On considère un entier naturel $n$ pour lequel la probabilité que le joueur gagne au plus $n$ parties est de $0{,}207$ ($P(X \\le n) \\approx 0{,}207$). Alors :",
            options: ["$n = 2$", "$n = 3$", "$n = 4$", "$n = 5$"],
            correctAnswer: 1,
            explanation: "À l'aide d'une table binomiale ou calculatrice pour $n=10, p=0{,}48$ :<br>$P(X \\le 2) \\approx 0{,}068$<br>$P(X \\le 3) \\approx 0{,}207$<br>Donc $n=3$. Réponse B."
          },
          {
            id: "m2023s2_ex1_q5",
            type: "qcm",
            question: "<b>Question 5 :</b> La probabilité que le joueur gagne au moins une partie sur les 10 est :",
            options: ["$1 - \\left(\\frac{12}{25}\\right)^{10}$", "$\\left(\\frac{13}{25}\\right)^{10}$", "$\\left(\\frac{12}{25}\\right)^{10}$", "$1 - \\left(\\frac{13}{25}\\right)^{10}$"],
            correctAnswer: 3,
            explanation: "L'événement contraire de « gagner au moins une partie » est « ne gagner aucune partie » ($X = 0$).<br>Sa probabilité est $P(X=0) = (1-p)^{10} = \\left(1 - \\frac{12}{25}\\right)^{10} = \\left(\\frac{13}{25}\\right)^{10}$.<br>Ainsi la probabilité cherchée est $1 - P(X=0) = 1 - \\left(\\frac{13}{25}\\right)^{10}$. Réponse D."
          }
        ]
      },
      {
        title: "Exercice 2 : Suites (5 points)",
        questions: [
          {
            id: "m2023s2_ex2_q1",
            type: "qcm",
            question: "Des biologistes étudient l'évolution d'une population d'insectes. Au départ, elle compte 100 000 insectes ($u_0 = 0{,}1$ million). En laboratoire, elle augmente de $60\\%$ chaque mois.<br><br><b>Question 1 :</b> L'expression du nombre d'insectes en millions au bout de $n$ mois, $u_n$, est :",
            options: ["$u_n = 0{,}1 \\times 0{,}6^n$", "$u_n = 0{,}1 \\times 1{,}6^n$", "$u_n = 0{,}1 + 0{,}6n$", "$u_n = 1{,}6^n$"],
            correctAnswer: 1,
            explanation: "Une augmentation de $60\\%$ correspond à un coefficient multiplicateur de $1 + 0{,}6 = 1{,}6$.<br>La suite est géométrique de raison $q = 1{,}6$ et premier terme $u_0 = 0{,}1$.<br>Ainsi $u_n = 0{,}1 \\times 1{,}6^n$. Réponse B."
          },
          {
            id: "m2023s2_ex2_q2",
            type: "ouvert",
            question: "<b>Question 2 :</b> Déterminer le plus petit entier naturel $n$ à partir duquel $u_n > 0{,}4$.",
            correctAnswer: "3",
            explanation: "On résout $0{,}1 \\times 1{,}6^n > 0{,}4 \\iff 1{,}6^n > 4$.<br>En passant aux logarithmes : $n \\ln(1{,}6) > \\ln(4) \\iff n > \\frac{\\ln(4)}{\\ln(1{,}6)} \\approx 2{,}95$.<br>Le premier entier qui convient est $n = 3$."
          },
          {
            id: "m2023s2_ex2_q3",
            type: "ouvert",
            question: "Dans un second modèle plus réaliste, les biologistes modélisent le nombre d'insectes (en millions) au bout de $n$ mois par la suite $(v_n)$ définie par $v_0 = 0{,}1$ et $v_{n+1} = 1{,}6v_n - 1{,}6v_n^2$.<br><br><b>Question 3 :</b> Calculer le nombre d'insectes, en millions, au bout d'un mois ($v_1$).",
            correctAnswer: "0.144",
            explanation: "$v_1 = 1{,}6 \\times v_0 - 1{,}6 \\times v_0^2 = 1{,}6 \\times 0{,}1 - 1{,}6 \\times 0{,}01 = 0{,}16 - 0{,}016 = 0{,}144$."
          },
          {
            id: "m2023s2_ex2_q4",
            type: "qcm",
            question: "On considère la fonction $f$ définie sur $[0 ; 0{,}5]$ par $f(x) = 1{,}6x - 1{,}6x^2$.<br><br><b>Question 4 :</b> Résoudre l'équation $f(x) = x$ sur cet intervalle :",
            options: ["$0$ et $0{,}5$", "$0$ et $0{,}375$", "$0{,}1$ et $0{,}375$", "$0{,}2$ et $0{,}4$"],
            correctAnswer: 1,
            explanation: "$f(x) = x \\iff 1{,}6x - 1{,}6x^2 = x \\iff 0{,}6x - 1{,}6x^2 = 0 \\iff x(0{,}6 - 1{,}6x) = 0$.<br>Les solutions sont $x=0$ et $x = \\frac{0{,}6}{1{,}6} = 0{,}375$. Réponse B."
          },
          {
            id: "m2023s2_ex2_q5",
            type: "ouvert",
            question: "On admet que la suite $(v_n)$ est croissante et majorée par $0{,}5$, elle converge donc vers un réel $\\ell$.<br><br><b>Question 5 :</b> Déterminer la valeur exacte de la limite $\\ell$ de la suite $(v_n)$.",
            correctAnswer: "0.375",
            explanation: "La limite $\\ell$ doit vérifier la relation de point fixe $f(\\ell) = \\ell$.<br>Comme $v_0 = 0{,}1$ et la suite est croissante, $\\ell$ doit être supérieure ou égale à $0{,}1$.<br>La seule valeur possible parmi les points fixes de $f$ est $\\ell = 0{,}375$."
          },
          {
            id: "m2023s2_ex2_q6",
            type: "qcm",
            question: "On donne la fonction Python <code>seuil</code> :<br><pre><code>def seuil(a):\n    v = 0.1\n    n = 0\n    while v < a:\n        v = 1.6 * v - 1.6 * v * v\n        n = n + 1\n    return n</code></pre><br><b>Question 6 :</b> Qu'observe-t-on si on saisit l'appel <code>seuil(0.4)</code> ?",
            options: ["Il renvoie 6", "La boucle while ne s'arrête jamais car v_n converge vers 0{,}375 < 0{,}4", "Il renvoie 0", "Il renvoie une erreur"],
            correctAnswer: 1,
            explanation: "Comme la suite $(v_n)$ converge vers $0{,}375$, ses termes ne dépasseront jamais $0{,}4$. La condition `v < 0.4` restera toujours vraie et la boucle `while` tournera indéfiniment. Réponse B."
          },
          {
            id: "m2023s2_ex2_q7",
            type: "ouvert",
            question: "<b>Question 7 :</b> Déterminer la valeur numérique renvoyée par l'appel <code>seuil(0.35)</code>.",
            correctAnswer: "6",
            explanation: "En calculant les termes successifs :<br>$v_0 = 0{,}1$<br>$v_1 = 0{,}144$<br>$v_2 \\approx 0{,}197$<br>$v_3 \\approx 0{,}253$<br>$v_4 \\approx 0{,}302$<br>$v_5 \\approx 0{,}338$<br>$v_6 \\approx 0{,}358$.<br>Le premier terme qui dépasse $0{,}35$ est $v_6$, donc la fonction renvoie $6$."
          }
        ]
      },
      {
        title: "Exercice 3 : Géométrie dans l'espace (5 points)",
        questions: [
          {
            id: "m2023s2_ex3_q1",
            type: "qcm",
            question: "Dans l'espace rapporté à un repère orthonormé, on considère le plan $\\mathcal{P}_1 : 2x + y - z + 2 = 0$.<br><br><b>Question 1 :</b> Donner un vecteur normal $\\vec{n_1}$ au plan $\\mathcal{P}_1$ :",
            options: ["$(2, 1, 2)$", "$(2, 1, -1)$", "$(1, -1, 1)$", "$(0, -2, 0)$"],
            correctAnswer: 1,
            explanation: "Pour une équation cartésienne de la forme $ax + by + cz + d = 0$, un vecteur normal est $\\vec{n}\\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}$. Ici $\\vec{n_1}\\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}$. Réponse B."
          },
          {
            id: "m2023s2_ex3_q2",
            type: "qcm",
            question: "Soit le plan $\\mathcal{P}_2$ de vecteur normal $\\vec{n_2}(1, -1, 1)$ passant par $B(1,1,2)$.<br><br><b>Question 2 :</b> Déterminer une équation cartésienne du plan $\\mathcal{P}_2$ :",
            options: ["$x - y + z - 1 = 0$", "$x - y + z - 2 = 0$", "$x + y - z - 2 = 0$", "$x - y - z - 2 = 0$"],
            correctAnswer: 1,
            explanation: "L'équation est de la forme $1x - 1y + 1z + d = 0$.<br>Comme $B(1,1,2)$ est dans le plan, on a : $1(1) - 1(1) + 2 + d = 0 \\iff d = -2$.<br>L'équation est donc $x - y + z - 2 = 0$. Réponse B."
          },
          {
            id: "m2023s2_ex3_q3",
            type: "qcm",
            question: "Soit la droite $\\Delta$ (intersection des deux plans) formée des points $M_t(0, -2+t, t)$ pour $t \\in \\mathbb{R}$. On cherche la distance d'un point $A(1,1,1)$ à un point variable $M_t$.<br><br><b>Question 3 :</b> Pour tout réel $t$, la distance $AM_t$ est égale à :",
            options: ["$\\sqrt{t^2 - 4t + 5}$", "$\\sqrt{2t^2 - 8t + 11}$", "$\\sqrt{2t^2 - 6t + 9}$", "$\\sqrt{t^2 - 8t + 11}$"],
            correctAnswer: 1,
            explanation: "Le vecteur $\\vec{AM_t}$ a pour coordonnées :<br>$\\vec{AM_t} = \\begin{pmatrix} 0 - 1 \\\\ -2+t - 1 \\\\ t - 1 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ t-3 \\\\ t-1 \\end{pmatrix}$.<br>Ainsi : $AM_t^2 = (-1)^2 + (t-3)^2 + (t-1)^2 = 1 + t^2 - 6t + 9 + t^2 - 2t + 1 = 2t^2 - 8t + 11$.<br>La distance est $AM_t = \\sqrt{2t^2 - 8t + 11}$. Réponse B."
          },
          {
            id: "m2023s2_ex3_q4",
            type: "qcm",
            question: "<b>Question 4 :</b> En déduire la distance minimale $AH$ du point $A$ à la droite $\\Delta$ (où $H$ est le projeté orthogonal de $A$ sur $\\Delta$) :",
            options: ["$1$", "$\\sqrt{2}$", "$\\sqrt{3}$", "$2$"],
            correctAnswer: 2,
            explanation: "La distance est minimale lorsque la quantité sous la racine $2t^2 - 8t + 11$ est minimale.<br>Ce polynôme du second degré de la forme $at^2+bt+c$ avec $a > 0$ atteint son minimum en $t = \\frac{-b}{2a} = \\frac{8}{4} = 2$.<br>La valeur minimale sous la racine est donc $2(2)^2 - 8(2) + 11 = 8 - 16 + 11 = 3$.<br>La distance minimale est donc $AH = \\sqrt{3}$. Réponse C."
          }
        ]
      },
      {
        title: "Exercice 4 : Fonctions (5 points)",
        questions: [
          {
            id: "m2023s2_ex4_q1",
            type: "qcm",
            question: "On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = \\ln(1 + \\mathrm{e}^{-x})$.<br><br><b>Question 1 :</b> Déterminer $\\lim\\limits_{x \\to -\\infty} f(x)$.",
            options: ["$0$", "$+\\infty$", "$1$", "$\\ln(2)$"],
            correctAnswer: 1,
            explanation: "On a $\\lim\\limits_{x \\to -\\infty} -x = +\\infty$, donc $\\lim\\limits_{x \\to -\\infty} \\mathrm{e}^{-x} = +\\infty$.<br>Ainsi $\\lim\\limits_{x \\to -\\infty} 1 + \\mathrm{e}^{-x} = +\\infty$.<br>Comme $\\lim\\limits_{X \\to +\\infty} \\ln(X) = +\\infty$, on en déduit par composition que $\\lim\\limits_{x \\to -\\infty} f(x) = +\\infty$. Réponse B."
          },
          {
            id: "m2023s2_ex4_q2",
            type: "qcm",
            question: "<b>Question 2 :</b> Déterminer $\\lim\\limits_{x \\to +\\infty} f(x)$.",
            options: ["$0$", "$+\\infty$", "$1$", "$\\ln(2)$"],
            correctAnswer: 0,
            explanation: "On a $\\lim\\limits_{x \\to +\\infty} -x = -\\infty$, donc $\\lim\\limits_{x \\to +\\infty} \\mathrm{e}^{-x} = 0$.<br>Ainsi $\\lim\\limits_{x \\to +\\infty} 1 + \\mathrm{e}^{-x} = 1$.<br>Comme $\\lim\\limits_{X \\to 1} \\ln(X) = 0$, on en déduit par composition que $\\lim\\limits_{x \\to +\\infty} f(x) = 0$. Réponse A."
          },
          {
            id: "m2023s2_ex4_q3",
            type: "qcm",
            question: "<b>Question 3 :</b> L'équation de la tangente $T_0$ à la courbe de $f$ au point d'abscisse $0$ est :",
            options: ["$y = -x + \\ln(2)$", "$y = -\\frac{1}{2}x + \\ln(2)$", "$y = \\frac{1}{2}x - \\ln(2)$", "$y = -\\frac{1}{2}x$"],
            correctAnswer: 1,
            explanation: "L'équation est $y = f'(0)(x-0) + f(0)$.<br>$f(0) = \\ln(1 + \\mathrm{e}^0) = \\ln(2)$.<br>Pour la dérivée, $f'(x) = \\frac{-\\mathrm{e}^{-x}}{1+\\mathrm{e}^{-x}} = \\frac{-1}{\\mathrm{e}^x+1}$.<br>Donc $f'(0) = \\frac{-1}{1+1} = -\\frac{1}{2}$.<br>L'équation de $T_0$ est $y = -\\frac{1}{2}x + \\ln(2)$. Réponse B."
          },
          {
            id: "m2023s2_ex4_q4",
            type: "qcm",
            question: "<b>Question 4 :</b> La fonction $f$ est-elle convexe ou concave sur $\\mathbb{R}$ ?",
            options: ["Concave, car $f''(x) < 0$", "Convexe, car $f''(x) > 0$", "Ni l'un ni l'autre", "Convexe sur $\\mathbb{R}_+$ et concave sur $\\mathbb{R}_-$"],
            correctAnswer: 1,
            explanation: "La dérivée seconde est :<br>$f''(x) = \\left(\\frac{-1}{\\mathrm{e}^x+1}\\right)' = \\frac{\\mathrm{e}^x}{(\\mathrm{e}^x+1)^2}$.<br>Comme $\\mathrm{e}^x > 0$ et le dénominateur au carré est strictement positif, pour tout $x \\in \\mathbb{R}$, $f''(x) > 0$.<br>La fonction $f$ est donc convexe sur $\\mathbb{R}$. Réponse B."
          }
        ]
      }
    ]
  }
];
