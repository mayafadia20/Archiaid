/* =====================================================
   Consultations Archi Aid — données
   Pour ajouter une rencontre : copier un bloc ci-dessous et
   remplir les champs. `courriel` détermine quel client la voit
   dans « Mes consultations » (le courriel utilisé à la connexion).
   `exemple: true` rend la rencontre visible pour tout le monde,
   avec une étiquette « Exemple » — utile pour la démonstration.
   ===================================================== */

const CONSULTATIONS = [
  {
    courriel: "mlounici@archiaid.ca",
    exemple: true,
    titre: "Rencontre de démarrage — diagnostic numérique",
    date: "2026-08-14",
    duree: "45 minutes",
    participants: ["Karine Mainville (Archi Aid)", "Client"],
    resume: "Présentation de la démarche, revue des résultats du diagnostic de maturité et identification de l'axe prioritaire : la circulation de la donnée entre l'estimation et le chantier.",
    transcript: [
      { qui: "Karine Mainville", texte: "Merci d'avoir complété le diagnostic avant la rencontre. Votre score global vous place au palier « en structuration » : des outils sont en place, mais leur usage varie d'un projet à l'autre." },
      { qui: "Client", texte: "C'est exactement ce qu'on vit. Chaque chargé de projet a sa façon de faire, et on ressaisit les mêmes informations dans trois systèmes." },
      { qui: "Karine Mainville", texte: "C'est votre point le plus coûteux en ce moment. Avant de parler de nouveaux outils, on va cartographier où l'information est saisie, par qui, et où elle est ressaisie." },
      { qui: "Client", texte: "On avait pensé acheter une plateforme tout de suite." },
      { qui: "Karine Mainville", texte: "C'est souvent le réflexe, mais sans cartographie, la plateforme reproduit le désordre existant. Je vous propose de remplir la matrice de priorisation en équipe d'ici deux semaines : elle nous dira ce qui est réellement non négociable pour vous." },
      { qui: "Client", texte: "Parfait, on la remplit avec le directeur des opérations et on revient vers vous." }
    ]
  },
  {
    courriel: "mlounici@archiaid.ca",
    exemple: true,
    titre: "Suivi — revue de la matrice de priorisation",
    date: "2026-08-28",
    duree: "60 minutes",
    participants: ["Karine Mainville (Archi Aid)", "Client", "Directeur des opérations"],
    resume: "Revue de la matrice complétée : trois points de rupture identifiés (intégration BIM, saisie hors ligne au chantier, renommage complet des champs). Plan des démonstrations fournisseurs.",
    transcript: [
      { qui: "Karine Mainville", texte: "Votre matrice montre trois points de rupture. Le plus structurant est l'intégration avec vos outils Autodesk : aucune plateforme généraliste ne l'offre nativement de façon complète." },
      { qui: "Directeur des opérations", texte: "C'est pourtant essentiel pour nous, les quantitatifs viennent de la maquette." },
      { qui: "Karine Mainville", texte: "Alors c'est la première chose à faire démontrer, pas décrire, à chaque fournisseur. On prépare un scénario de démonstration identique pour tous : même maquette, mêmes données, mêmes questions." },
      { qui: "Client", texte: "Et pour la saisie hors ligne au chantier?" },
      { qui: "Karine Mainville", texte: "Exigez une démonstration en mode avion sur l'appareil réel du surveillant, puis la synchronisation. C'est la faiblesse la plus fréquente de ce type de plateforme." },
      { qui: "Directeur des opérations", texte: "On planifie trois rencontres fournisseurs pour septembre, avec votre grille d'évaluation." }
    ]
  }
];
