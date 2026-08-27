# Archi Aid — Site web

Site statique bilingue (EN/FR) pour **Solutions Archi Aid**, firme de consultation en technologies de la construction (BIM, déploiement de plateformes, outils de chantier). Structure inspirée de [archiaid.ca](https://archiaid.ca/).

## Structure

```
index.html        Page d'accueil (anglais)
fr/index.html     Page d'accueil (français)
css/styles.css    Feuille de style commune
js/main.js        Menu mobile, animations au défilement, année du pied de page
assets/           Favicon SVG (ajouter ici logos et images)
```

## Aperçu local

Ouvrir `index.html` directement dans un navigateur, ou lancer un petit serveur :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Publication avec GitHub Pages

1. Sur GitHub : **Settings → Pages**
2. Source : branche `main`, dossier `/ (root)`
3. Le site sera servi à `https://<utilisateur>.github.io/Archiaid/`

## À compléter

- Remplacer les blocs « logo » (sections *Expertise* et *Clients*) par les vrais logos dans `assets/`
- Brancher le bouton « Réserver ma consultation » sur le lien Calendly réel
- Ajuster les textes des témoignages et de la feuille de route avec le contenu officiel
