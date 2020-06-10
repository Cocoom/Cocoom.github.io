# Notifier dans Teams

Cocoom permet d’être notifié dans Teams des nouveaux mémos créés.
En tant qu’administrateur de Cocoom vous pouvez choisir dans quel canal Teams les notifications vont arriver.

Cette configuration se fait en 2 temps:

- Création d’un webhook dans le canal de l’équipe de votre choix côté Teams
- Ajout du webhook dans la configuration d’un fil de votre choix côté Cocoom


## Création d’un webhook Teams

- Se rendre dans le canal Teams, cliquer sur  son icône « … » et sélectionner « Connecteurs ».
- Dans la liste des connecteurs possibles, choisir « Incoming Webhook ».
- Indiquer un nom pour le connecteur. « Cocoom » , par exemple.
- Pour une expérience utilisateur plus satisfaisante, il est préférable d’uploader une icône « Cocoom » pour le connecteur (voici le lien qui vous permet de le récupérer: [ICON.png](https://help.cocoom.com/img/cocoom-icon.png))
- Puis cliquer sur « Créer ».
- Un lien web va alors être généré par Teams et affiché dans la fenêtre. Il faut que vous copiez ce lien.


## Configuration d’un fil pour la notification dans Teams

Se rendre dans l’administration, section « Fils ».

- Cliquer sur le bouton « Modifier » du fil Cocoom à coupler à Teams concernant les notifications.
- Faire défiler la page jusqu’à la partie « Intégration à vos outils »
- Coller le lien « Webhooks », copié précédemment, dans le champs prévu à cet effet. Il est possible d’ajouter un commentaire pour qualifier le lien (par exemple, le nom de l’équipe Teams et le nom du canal Teams)
- Cliquer sur Ajouter.

L’association est effective.
