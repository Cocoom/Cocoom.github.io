# Catalogue d’&lt;iframes&gt;

## Définition

Les iframes Cocoom vous permettent d’intégrer des "vues" de votre base de connaissance Cocoom, pour l’intégrer dans vos outils existants: sur un intranet, un extranet, une page web, une application supportant une intégration web, ...

Pour ce faire, vous devez maitriser l’insertion d’iframe sur une page web, ou disposez d’outils qui vous le permettent.

🕵️‍♂️ Toutes ces “fenêtres” seront toujours protégées, les utilisateurs doivent être autorisés et connectés pour afficher le contenu d’une &lt;iframes&gt; Cocoom, soit par une connexion automatique en SSO, soit par leur identifiant Cocoom.

::: warning
Les iframes Cocoom ne peut pas être affichées de façon publique sur votre site web.
:::

::: tip
Si vous souhaitez diffuser Cocoom à un large public / à une communauté de lecteurs, un forfait “extranet” autorisant un grand volume de lecteurs est disponible.

Rapprochez-vous du service commercial pour avoir plus d'information à son sujet : [sales@cocoom.com](mailto:sales@cocoom.com).
:::


## Liste des URLs d’iframes disponibles

::: tip ☝️ L'URL de base est toujours la même
https://<VOTRE_DOMAINE>.cocoom.com/embed
:::

Il faut ensuite rajouter ces éléments d'URL à la suite de votre URL de base pour créer votre iframe personnalisée.


| **Partie applicative** | **URL**                       | **Détails**                           |
| ---------------------- | ----------------------------- | ------------------------------------- |
| Ma sélection           | /myselection                  | la selection des abonnements de l’utilisateur |
| A la une               | /breakingnews                 | “A la une”              |
| Les titres             | /headlines                    | Gros titres de “A la une”      |
| un #fil spécifique     | /channels/&lt;ID du fil&gt;           | contenu du fil sélectionné |
| L’annuaire             | /directory                  | l’annuaire de la base            |
| Profil utilisateur     | /people/&lt;ID de l’utilisateur&gt; | un profil utilisateur          |
| Notifications          | /notifications                | toutes les notifications de l'utilisateur     |
| Mon activité          | /myactivities                | toutes les activités (création/interactions/bookmarks) effectuées par l'utilisateur     |
| Mes réglages          | /settings                | configuration du compte utilisateur     |
