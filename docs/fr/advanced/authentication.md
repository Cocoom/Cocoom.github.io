# 🕵️‍♂️ **Authentification**

## Authentification SSO

Une plateforme Cocoom peut être configurée en SSO afin de déléguer l’authentification des utilisateurs à une fédération d’identité externe, généralement celle du client.

Cette configuration d’identification facilite l’usage pour l’utilisateur (pas de mot de passe spécifique à retenir), et sécurisante et pratique pour la DSI du nos clients (elle a la maîtrise complète de sa politique de sécurité).


- Nous sommes actuellement compatibles avec le protocole OpenID connect : 
    - Microsoft Office 365, 
    - Google Suite, 
    - Slack, 
    - …
- Nous sommes en mesure de pouvoir proposer une compatibilité SAMLv2.
    - contactez-nous : support@cocoom.com


## Information à récupérer de votre fédération d’identité pour le SSO

 
Cocoom a besoin obligatoirement des info suivantes :

- email (ID unique d’un utilisateur)
- first name
- last name,
- profil administrateur ou collaborateur (si rien de tel n’existe/rien n’est fourni, l’utilisateur sera alors considéré comme « collaborateur »)

 
Cocoom peut intégrer, sur demande, les info suivantes :

- téléphone(s)
- adresse(s) postale(s)
- autre(s) email(s)

 

## Procédure d’authentification SSO

Contacter le service support pour établir la marche à suivre selon vos besoins
📬 support@cooom.com


## Authentification indépendante Cocoom

Si le mécanisme de SSO n’est pas mis en place en partenariat avec le client, Cocoom possède un système d’authentification basé sur un formulaire où les utilisateurs doivent entrer leurs identifiants :

- e-mail 
- mot de passe
- nom
- prénom

 
Le mot de passe est **haché avant son transfert** entre le navigateur et les serveurs Cocoom (aucun mot de passe ne transite en clair sur le réseau).

De plus, dans ce mode de fonctionnement d’authentification, **Cocoom crypte les mots de passe** des utilisateurs finaux.

Cocoom impose un niveau de sécurité élevé de création de mot de passe :

- 8 caractères minimum
- 1 chiffre, 1 lettre majuscule, 1 caractère spéciale

Chaque utilisateur est responsable de son mot de passe et de sa non divulgation.


