# API Slack

## Connecter Slack et Cocoom

La connexion Cocoom / Slack apporte deux fonctions distinctes et indépendantes :


1. **Authentification SSO** : utiliser Slack pour authentifier les utilisateurs (Les utilisateurs utilisent leurs identifiants Slack pour se connecter sur Cocoom)
2. **Notifications** : utiliser Slack pour notifier les utilisateurs des actions réalisées sur la plateforme Cocoom


## Étape 1 : créer une App

Dans un navigateur web, se rendre sur [api.slack.com](http://api.slack.com)

Une fois sur cette page, vous devez vous connecter à votre espace Slack “Go to Slack”

![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588519745149_image.png)



Une fois connecté(e), revenez sur la page [https://api.slack.com](https://api.slack.com) et cliquez sur “Your Apps”


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588519908387_image.png)



Cliquez sur “créer une App”

![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588520194007_image.png)


Renseignez le champs « App Name », sélectionnez le « workspace » approprié,
puis cliquez sur « Create App » !

![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588520312975_image.png)




## Étape 2 : configurer l’App visuellement

Dans la section « **Basic Information** », faites défiler vers le bas  jusqu’au paragraphe « **Display information** ».

Renseignez les informations suivantes :

- 1- App name : Cocoom
- 2- Short description : description optionnelle
- 3- App Icon : téléchargez l’icone officielle ici : https://cocoom.com/ressources/Cocoom_logo_slack_200.jpg
- 4- Background color : #175AE4
![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588520639508_image.png)


Sauvegardez les modifications.


## Étape 3 : configurer l’authentification par SSO Slack

Si et seulement si vous souhaitez utiliser les identifiants utilisateurs de Slack pour les connecter à votre plateforme Cocoom. Cela signifie que lors de leur connexion avec Cocoom, c’est votre plateforme Slack qui prendra le relai pour les autoriser à se connecter.

dans la section « OAuth & Permissions », cliquez sur “Add New Redirect URL”

![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588522079846_image.png)


Ensuite, copier coller l’adresse de votre plateforme Cocoom comme ceci :
https://xxxxxx(votrenom).cocoom.com/oidc

![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588522156994_image.png)


N’oubliez pas de sauvegarder !

Faites défiler la page OAuth & Permissions jusqu’à la section « Scopes »

![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588522387708_image.png)


et ajoutez les scopes suivant :


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588523997571_image.png)


C’est tout bon pour la configuration du SSO Slack, il ne restera plus qu’à envoyer les éléments d’identification aux équipes Cocoom. voir étape 5.


## Étape 4 : configurer les notifications Cocoom dans Slack

Pour recevoir les notifications Cocoom directement dans vos channels Slack, vous devez ajouter un BOT.

Rendez-vous dans la section “**App Home**” et allez jusqu’à la section  “**You’re App presence in Slack**”. Nous allons commencer par éditer l’affichage en cliquant sur “**edit**” de l’app display name” et remplissez les champs à l’identique :

![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588524542200_image.png)



## Étape 5 : Finaliser l’installation

Dans la section “Install App”, cliquez sur “Install App to Workspace”


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588524771872_image.png)


C’est presque fini ! votre application est prête, nous devons la relier à Cocoom 🎉 !


## Étape 6 : Envoyer les elements de connexion Slack à l’équipe Cocoom

Slack a généré des éléments de connexion pour permettre à l’App Cocoom de communiquer en toute sécurité avec Slack. Il ne reste maintenant plus qu’à transmettre ces éléments à l’adresse de support Cocoom pour les relier.

Préparer votre email pour support@cocoom.com et ajoutez :

**Pour l’authentification SSO : Client ID et Client Secret**


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588525038450_image.png)


**Pour le BOT de notification : Bot User OAuth Access Token**

![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588525457807_image.png)



✌️ L’équipe support reviendra vers vous dans les 2 minutes à 48h maximum pour valider votre App !

