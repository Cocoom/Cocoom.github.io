# Structurer Cocoom

## Base de connaissance

🌱 Une **Base** Cocoom représente une unité indivisible :
même si les fonctionnalités peuvent varier d’un profil à l’autre, tous les utilisateurs accèdent aux mêmes informations et s’authentifient de la même manière. Une **base** est un espace commun et partagé qui ne peut être divisé en sous groupe privatif.


> 🌟 Philosophie Cocoom : pour nous, la gestion de la connaissance doit être transversale et ne doit pas avoir de barrières, c’est pourquoi nous avons décidé de ne pas masquer ou cacher des informations sur une base.

**Une base est caractérisée par des éléments fixes :**

- son URL unique : https://(votre-nom).cocoom.com
- son système d’authentification : simple ou SSO

**Une base est structurée par des éléments variables :**

- #fils thématiques : catégories de publications
- #tags : filtres de publications


## #fils thématiques

C’est la structure obligatoire et indispensable de votre base de connaissance !

Les #fils thématiques sont l’élément de base qui vous permettent de naviguer dans vos savoirs et de les différencier. Ils fonctionnent comme des catégories.


Une **publication s’effectue obligatoirement dans un #fil thématique**, par default celui-ci peut se nommer “Général” ou porter le nom de l’entreprise.

Une publication ne peut pas être associée à deux #fils thématiques


![](https://paper-attachments.dropbox.com/s_395CE863641B04726030D3C1F4BCB08611E24CFD32776738E99933E3CEE6B3F8_1588718043177_Plan+de+travail+21demo-tour-cocoom.jpg)



## Tags

Les tags représentent un second niveau de spécification pour une publication, ils permettent d’ajouter des mots clés qui simplifieront le tri ou la recherche des publications.

Les tags ne sont pas associés à un #fil thématique particulier et ils sont tous au même niveau, donc parfaitement transversaux sur votre base.


![](https://paper-attachments.dropbox.com/s_395CE863641B04726030D3C1F4BCB08611E24CFD32776738E99933E3CEE6B3F8_1588668925462_tags-cocoom.jpg)




## Hubs de vos bases

Dans certains cas, vous pouvez avoir besoin de créer des structures plus complexes, pour compartimenter les connaissances ou pour gérer vos utilisateurs différemment.

**Un hub vous permet de relier plusieurs bases entre elles.**

Un hub se compose d’une base mère et d’une ou plusieurs bases filles.
Une base mère peut avoir autant de filles que nécéssaire mais une base fille ne peut avoir qu’une seule mère.


![](https://paper-attachments.dropbox.com/s_395CE863641B04726030D3C1F4BCB08611E24CFD32776738E99933E3CEE6B3F8_1588714943951_hub-structure.jpg)


Les bases sont **reliées par le support Cocoom sur demande** (voir offre).
Une fois ces bases reliées, elle constituent un HUB, elles font partie d’une seule famille et vous allez pouvoir créer de la transversalité entre ces bases.

**Chaque base possède ses propres caractéristiques :**

- une URL unique
- un système d’authentification
- des utilisateurs
- une structure de fils thématiques, de tags

**Le hub permet d’échanger de l’information, via les fils thématiques, entre ces bases.**


![](https://paper-attachments.dropbox.com/s_395CE863641B04726030D3C1F4BCB08611E24CFD32776738E99933E3CEE6B3F8_1588716801252_hub-structure_2.jpg)


**Toutes les bases peuvent** :

- partager un fil thématique : en lecture / en lecture - écriture
- recevoir un fil thématique : en lecture / en lecture - écriture

**Les utilisateurs restent indépendant mais peuvent être reliés**
Un utilisateur peut avoir accès à plusieurs bases d’un même hub. Il pourra alors basculer d’une base à l’autre.

**L’authentification est gérée base par base**
Selon les cas de figures, vous pouvez, pour une base donnée :

- avoir un accès simple pour des personnes extérieures (partenaires, clients, fournisseurs…)
- avoir un accès SSO spécifique ( tenant Azure client, SSO slack…)


## Bonnes pratiques

Nous vous conseillons de commencer simple !!

Peu de #fils thématiques pour commencer à créer un usage fort et de l’échange sur ces #fils restreints.

L’architecture de Tag doit être pensée dès le début pour qualifier au mieux l’information et permettre aux utilisateurs de la retrouver efficacement dans le temps.

Lorsque vous envisagez un déploiement global et la mise en place des Hubs, nous vous conseillons de le penser en amont. Une technique simple et efficace est de l’organiser sous forme de mindmapping en impliquant toutes les parties prenantes.



