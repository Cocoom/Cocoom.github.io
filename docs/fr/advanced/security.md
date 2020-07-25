# 🔐 Sécurité

## Restriction d’accès interne

Seul le personnel habilité (DevOps désignés) dispose des accès à l’infrastructure technique.

Notre politique de sécurité comprend une sensibilisation en continue du personnel à la sécurité des données et des systèmes.


## Transmission des données

Toutes les transmissions de données entre Cocoom, nos utilisateurs et notre infrastructure technique sont chiffrées.

**Entre Cocoom et son infrastructure**

- Toutes les communications web sont chiffrées par TLS (https).
- Tous les autres niveaux de communication sont chiffrés par SSH

**Entre les utilisateurs et l’infrastructure Cocoom**

- Communication web uniquement, chiffrées par TLS (https).
- Certificat à jour de niveau A+ délivré par les services de SSL Labs



## Applicatif

Toutes les données stockées dans le navigateur de l’utilisateur sont chiffrées ou encodées suivant le niveau de sensibilité qu'elles contiennent.

- Le principe de respect d’envoi du minimum d’information utiles aux clients est assuré.
- Le principe de respect de récupération du minimum d’information utiles au bon fonctionnement du service Cocoom est assuré.



## XSS (Attaque par injection de code)

Les URLs d’accès à Cocoom ainsi que les données transmises par formulaires web sont filtrées, afin de prévenir toute injection de code malveillant.

Cocoom possède une passerelle d’accès à ses services, unique et obligatoire, permettant d’assurer, de façon transversale, la sécurité des données reçues afin de prévenir toute injection de code.

Par ailleurs, nous formons nos personnels techniques et respectons les bonnes pratiques en vigueur afin d’éviter des attaques de type XSS.


## Backup

2 sauvegardes sécurisées quotidiennes sont assurées pour l’ensemble des données de nos clients. Nous conservons les 48 dernières heures de sauvegardes.


##  Remontée d’alertes sur incident


Un outil d’automatisation de remontée d’alerte sur incident technique ou défaut de sécurité constaté est disponible publiquement: [statut des services](https://status.cocoom.com)

Ces remontées sont également faites, manuellement, par email au contact DSI de nos clients.


## Assurance

Cocoom possède une assurance RCPro valide et adaptée au secteur de l’édition de logiciel.
