# Authentification avec Google

Cocoom permet à des utilisateurs de GSuite d’être identifiés dans Cocoom.
Les utilisateurs utilisent leurs identifiants Google Suite pour se connecter à Cocoom.


- En terme de sécurité: Cocoom n’a jamais connaissance des mots de passe des utilisateurs GSuite.
- En terme de gouvernance: la DSI est maître de sa politique de sécurité et de la gestion des utilisateurs


## Créer une application Google privée


### 1. Pour cela il faut se rendre à l’URL suivante

[Consent screen](https://console.cloud.google.com/apis/credentials/consent)

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589188827733_1.+Create+a+Google+app+for+OIDC+sign+in.png)




### 2. Enfin, il faut renseigner quelques paramètres

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589189158142_2.+Edit+app+properties.png)



## Ajouter les accréditations

Cette étape permet de donner, au utilisateurs GSuite, accès à l’authentification en utilisant l’application définie précédemment.


### 1. Accéder au menu “Credentials” en vous rendant à cette URL

[Credentials](https://console.cloud.google.com/apis/credentials)


### 2. Cliquer sur le bouton “Create credentials”

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589189922313_3.1.+Create+a+google+app.png)
###


### 3. Choisir l’entrée du menu “OAuth client ID”

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589189806934_3.+Add+client+ID.png)



### 4. Choisir le type d’application “Web application”

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589190008309_4.+Choose+to+create+webapp+client+ID.png)



### 5. Modifier les proriétés suivantes

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589190073303_5.+Configure+the+client+ID.png)



### 6. Copier le client ID et le client secret

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589190115278_6.+Copy+client+ID++client+secret.png)


Ce sont les 2 informations dont a besoin le support Cocoom pour permettre de relier votre base Cocoom à vos utilisateurs GSuite.


## 🏆 Envoi des informations utiles

Ces informations vont servir au support Cocoom pour connecter votre compte GSuite à votre domaine Cocoom.

Pour finaliser cette intégration vous devez donc envoyer ces informations (client ID et client Secret) par e-mail à <support@cocoom.com>

* soit directement dans l'email (en nous fournissant aussi votre domaine Cocoom, noté YOURDOMAIN dans la documentation)
* soit en remplissant le document pdf suivant: [Formulaire OIDC Cocoom](/doc/fr/Formulaire_OpenID_Connect.pdf)
