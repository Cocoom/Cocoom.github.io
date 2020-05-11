# Utilisateurs & authentification
Le profil utilisateur et le système d’authentification se paramètre sur une base donnée et pour l’entièreté de cette base. 


## Profils utilisateurs

Cocoom dispose de trois profils utilisateurs. Les profils des utilisateurs sont déterminés dans l’interface d’administration Cocoom, ils peuvent être modifiés à tout moment. Les profils peuvent être configurés par default avec l’authentification SSO.

|                                                                  | 👀lecteur                  | ✍️contributeur   | 👑administrateur |
| ---------------------------------------------------------------- | -------------------------- | ---------------- | ---------------- |
| **consultation**                                                 |                            |                  |                  |
| lire les publications                                            | ✅                          | ✅                | ✅                |
| interagir (vote, commentaires, applaudissements)                 | ✅                          | ✅                | ✅                |
| rechercher                                                       | ✅                          | ✅                | ✅                |
| voir ses notifications                                           | ✅                          | ✅                | ✅                |
| gérer ses bookmarks                                              | ✅                          | ✅                | ✅                |
| Recevoir les newsletters                                         | ✅                          | ✅                | ✅                |
| recevoir des daily digest                                        | ✅ mais peut être désactivé | ✅                | ✅                |
| s’abonner à des fils                                             | ✅ mais peut être désactivé | ✅                | ✅                |
| créer un profil                                                  | ✅ mais peut être desactivé | ✅                | ✅                |
| consulter l’annuaire                                             | ✅ mais peut être désactivé | ✅                | ✅                |
| **Rédaction**                                                    |                            |                  |                  |
| rédiger des publications                                         |                            | ✅                | ✅                |
| rédiger des partages                                             |                            | ✅                | ✅                |
| accès à mon activité                                             |                            | ✅                | ✅                |
| créer un template personnel                                      |                            | ✅                | ✅                |
| créer un template d’entreprise                                   |                            |                  | ✅                |
| exporter une publication en PDF                                  |                            | peut être étendu | ✅                |
| **Administration**                                               |                            |                  |                  |
| gérer toutes les publications (ajout, modification, suppression) |                            |                  | ✅                |
| gérer les fils (ajout, modification, suppression)                |                            |                  | ✅                |
| gérer les tags (ajout, modification, suppression)                |                            |                  | ✅                |
| Sélectionner les publications à la une                           |                            |                  | ✅                |
| envoyer des newsletters                                          |                            |                  | ✅                |
| consulter les stats et sondages                                  |                            |                  | ✅                |
| gérer les utilisateurs                                           |                            |                  | ✅                |



## Authentification dans Cocoom

L’authentification est la manière dont un utilisateur est autorisé à accéder à une base Cocoom. 

l**e système d’authentification s’applique à toute la base** et ne peut pas être multiple sur une même base. Si l’authentification choisie est le SSO Office 365 alors tous les utilisateurs se connecteront via le SSO Office 365. 

Si vous souhaitez donner accès à un groupe de personnes tiers ( comme des clients, des fournisseurs ou des partenaires) vous devrez créer une nouvelle base avec un système d’authentification simple et éventuellement la connecter en HUB pour partager des fils et du contenu entre ces deux bases


## Authentifications supportées

Cocoom propose plusieurs systèmes d’authentification, cette liste évolué régulièrement, n’hésitez pas à nous contacter si vous souhaitez que l’on ajoute de nouveaux systèmes.

**authentification simple** 

- Cocoom (par defaut)  : création de comptes utilisateurs Cocoom avec email et mot de passe. 

**authentification SSO**

- Office 365 
- Slack 
- Google Suite
- Open ID connect


## Utilisateurs Multi-comptes

Tous les paramétrages de cette section s’entendent sur une base Cocoom donnée et pour un email donné. Si un utilisateur à accès à plusieurs bases (internes ou externes) ou avec plusieurs adresses emails, ces paramètres peuvent être différents sur chacune d’entre elle.

Exemple : John Doe, directeur Marketing  de l’entreprise Acme à 3 accès différents sur son adresse mail


> acme.cocoom.com : contributeur de la base globale de son entreprise + connexion SSO
> acme-marketing.cocoom.com : administrateur de la base marketing + connexion SSO
> mktg-club.cocoom.com : lecteur de la base externe de son club de directeur marketing


