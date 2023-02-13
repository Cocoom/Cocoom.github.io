# Notifier dans Teams

Cocoom permet d’être notifié dans Teams des nouveaux mémos créés.
En tant qu’administrateur de Cocoom vous pouvez choisir dans quel canal Teams les notifications vont arriver.

Cette configuration se fait en 2 temps:

1. Création d’un webhook dans le canal de l’équipe de votre choix côté Teams
2. Ajout du webhook dans la configuration d’un fil de votre choix côté Cocoom


## 1. Création d’un webhook Microsoft Teams

1.1. Se rendre dans le canal Teams, cliquer sur  son icône « … » et sélectionner « Connecteurs ».

1.2. Dans la liste des connecteurs possibles, choisir « Incoming Webhook ».

1.3. Indiquer un nom pour le connecteur. « Cocoom » , par exemple.

1.4. Pour une expérience utilisateur plus satisfaisante, il est préférable d’uploader une icône « Cocoom » pour le connecteur (voici le lien qui vous permet de le récupérer: [ICON.png](https://help.cocoom.com/img/cocoom-icon.png))

1.5. Puis cliquer sur « Créer ».

1.6. Un lien web va alors être généré par Teams et affiché dans la fenêtre. Il faut que vous copiez ce lien.

![](/img/en/guide/msteams-app/teams-connector-setup.png)


## 2. Configuration d’un fil pour la notification dans Teams

Se rendre dans l’administration, section « Fils ».

2.1. Cliquer sur le bouton « Modifier » du fil Cocoom à coupler à Teams concernant les notifications.

2.2. Faire défiler la page jusqu’à la partie « Intégration à vos outils »

2.3. Coller le lien « Webhooks », copié précédemment, dans le champs prévu à cet effet. Il est possible d’ajouter un commentaire pour qualifier le lien (par exemple, le nom de l’équipe Teams et le nom du canal Teams)

2.4. Cliquer sur Ajouter.

L’association est désormais effective.

![](/img/en/guide/msteams-app/cocoomchannel-teamschannel-association.png)
