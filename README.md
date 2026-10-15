# NanoBioMat — V2.1 statique, 15 octobre 2026

Nouvelle ergonomie conservée ; modules scientifiques et filtres de publications retirés à la demande de l’utilisateur. Simple Analytics préparé. **Copie locale de travail : aucune publication ni migration effectuée.** La V2 antérieure reste séparée.

## Ouvrir

Extraire toute l’archive, puis ouvrir `site/index.html` dans Firefox ou un autre navigateur. Ne pas ouvrir le HTML depuis l’intérieur du ZIP. Cette ouverture reste à vérifier dans un vrai navigateur.

Si le navigateur restreint les fichiers locaux, depuis ce dossier :

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory site
```

Ouvrir `http://127.0.0.1:8000/`, arrêter avec Ctrl+C. Cette commande pour l’utilisateur n’a pas été lancée pendant la session.

## Contenu

- `site/` : dix pages et ressources déjà générées ; seul contenu candidat à une future publication.
- `content/` : textes éditables, projets et publications en JSON.
- `tools/` : générateur Python et contrôles locaux, sans installation npm.
- `review/` : journal, provenance, tests, validations, notice Simple Analytics.
- `SHA256SUMS.txt` : empreintes du paquet.

**Ne pas publier le dossier complet.** Pour une mise en ligne autorisée, les fichiers à déposer sont ceux qui se trouvent **dans** `site/`, avec `index.html` à la racine du dépôt de publication. Garder le dépôt complet de travail privé, y compris son historique.

## Simple Analytics

Préparé pour les dix pages de `https://lenaiclartigue.github.io/NanoBioMat/`. Le script ne se charge pas sur les fichiers locaux, localhost, `/NanoBioMat-test/` ou une autre adresse. **Les visites locales ou de test n’apparaîtront donc pas dans le tableau de bord.** Aucun accès au compte Simple Analytics n’a été effectué. Voir `review/06_SIMPLE_ANALYTICS.md`.

Le site reste consultable sans JavaScript ; `site.js` sert seulement au menu mobile. Tous les contenus et images fonctionnent sans connexion à Simple Analytics.

## Entretien

Éditer `content/*.html`, `content/projects.json` ou `content/publications.json`, puis :

```sh
python tools/build.py
python tools/check.py
```

Python 3 est utilisé uniquement pour la maintenance locale. L’hébergement ne demande que des fichiers statiques. Éléments communs : `tools/build.py` ; styles et scripts : `site/style.css`, `site/site.js`, `site/analytics.js`.

Pour les contrôles de logique (Node.js sans paquet supplémentaire) :

```sh
python tools/check.py --fixtures dom-fixtures.json
node tools/test-navigation-analytics.cjs dom-fixtures.json
```

Ne pas publier le fichier temporaire `dom-fixtures.json`. Ces contrôles ne remplacent pas un navigateur.

## À valider

Rendu responsive, accessibilité réelle, ouverture locale, console, application de la CSP et collecte réelle Simple Analytics restent à vérifier. Le navigateur de test n’était pas disponible dans cette session. Les contenus sensibles MAGNETIMA restent retirés ; sa phrase générale et les droits des images restent à valider avant diffusion. `noindex` ne protège pas l’accès.
