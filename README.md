# ProjetHotHotHotJavaScript
Projet javascript
**fonctionnalité \: **
1. menu comprendra au minimum
  - actions liées à l’utilisateur (pages HTML simples dans le sens où nous n’avons rien côté serveur pour les rendre opérationnelles)
    - déconnexion
    - info compte

  - accès à une page de documentation

  - affichage de l’état de deux capteurs thermiques \: l'un à extérieur, l’autre à l’intérieur.

  - affichage d’un graphe synthèse des capteurs avec historique

  - Un système d’alertes et d’information comprenant :

    - Synthèse journalière avec temp min et max de chacun

    - Si Capteur ext > 35 degrés : alerte : Hot Hot Hot !

    - Si Capteur ext < 0 degrés : alerte : Banquise en vue !

    - Si Capteur int > 22 degrés : alerte : Baissez le chauffage !

    - Si Capteur int > 50 degrés : alerte : Appelez les pompiers ou arrêtez votre barbecue !

    - Si Capteur int < 12 : alerte : montez le chauffage ou mettez un gros pull !

    - Si Capteur int < 0 : alerte : canalisations gelées, appelez SOS plombier et mettez un bonnet !

2. accueil \:
  - menu de navigation
    - lien acceuil
    - lien doc de projet
      - Présentation de l’équipe et du rôle de chacun.
      - Outils utilisés et organisation (gestion de projet, dépôt git avec url), planning de réalisation.
      - 2 principales difficultés rencontrées et solution apportée
      - Si vous deviez recommencer ce projet, que changeriez vous à vos pratiques ?
  - Le site doit avoir un système d'onglet
    - affichage des données
    - historique
3. Alerte et notification
  - utilisateur prévenu des anomalie
    - 1 Système d’alerte par une boite de dialogue sur la page d’accueil (accès aux alertes passées via clic, surgissement d’une boîte de dialogue quand une alerte est émise)
    - 2 Système de Notification (mode push)
4. PWA
    - Bouton d'installation
    - gestion mode hors ligne avec mise en cache
  - Mise en cache dès le premier accès à la page d’accueil de la page documentation

  - mise en cache de l’accueil avec les données récoltées (Attention, il n’est pas possible de mettre en cache des données en provenance d’un serveur websocket, il vous faudra trouver une alternative…)

:)
