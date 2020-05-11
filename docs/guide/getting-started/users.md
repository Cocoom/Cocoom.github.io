# Users & Authentication
The user profile and the authentication system is set up on a given database and for the entire database. 



## User profiles

Cocoom has three user profiles. User profiles are determined in the Cocoom administration interface and can be modified at any time. Profiles can be configured by default with SSO authentication

|                                                                 | 👀 reader            | ✍️ contribuor    | 👑 administrator |
| --------------------------------------------------------------- | -------------------- | ---------------- | ---------------- |
| **Consult**                                                     |                      |                  |                  |
| read publication and share                                      | ✅                    | ✅                | ✅                |
| interact (vote, comment, applause)                              | ✅                    | ✅                | ✅                |
| search                                                          | ✅                    | ✅                | ✅                |
| consult his own notifications                                   | ✅                    | ✅                | ✅                |
| handle his bookmarks                                            | ✅                    | ✅                | ✅                |
| receive newsletter                                              | ✅                    | ✅                | ✅                |
| receive daily digest                                            | ✅ can be deactivated | ✅                | ✅                |
| subscribe to threads                                            | ✅ can be deactivated | ✅                | ✅                |
| create a profil                                                 | ✅ can be deactivated | ✅                | ✅                |
| consult directory                                               | ✅ can be deactivated | ✅                | ✅                |
| **Publish**                                                     |                      |                  |                  |
| create publication                                              |                      | ✅                | ✅                |
| create share                                                    |                      | ✅                | ✅                |
| access “my activity”                                            |                      | ✅                | ✅                |
| create a personal template                                      |                      | ✅                | ✅                |
| create an organization template                                 |                      |                  | ✅                |
| export a publication as a infographic                           |                      | peut être étendu | ✅                |
| **Administration**                                              |                      |                  |                  |
| administrate all publications (add, modify, unpublish, delete ) |                      |                  | ✅                |
| administrate threads  (add, modification, delete )              |                      |                  | ✅                |
| administrate tags  (add, modification, delete )                 |                      |                  | ✅                |
| Select publication for headlines                                |                      |                  | ✅                |
| send newsletter                                                 |                      |                  | ✅                |
| consult polls ans statistics                                    |                      |                  | ✅                |
| administrate users ( add, change profil, deactivate, remove)    |                      |                  | ✅                |




## Authentication in Cocoom

Authentication is the way a user is authorized to access a Cocoom database.
**The authentication system applies to the whole base and cannot be multiple on the same base**. If the authentication chosen is SSO Office 365 then all users will log in via SSO Office 365.

If you want to give access to a group of third parties (such as customers, suppliers or partners) you will have to create a new database with a simple authentication system and possibly connect it in HUB to share feeds and content between these two databases.


## Supported Authentications

Cocoom offers several authentication systems, this list is regularly updated, do not hesitate to contact us if you want us to add new systems.

**simple authentication**

    - Cocoom (by default): creation of Cocoom user accounts with email and password.

**SSO authentication**

    - Office 365
    - Slack
    - Google Suite
    - Open ID connect


## Multi-account users

All the settings in this section are made on a given Cocoom database and for a given email. If a user has access to several databases (internal or external) or with several email addresses, these settings can be different on each of them.

Example: John Doe, Marketing Director of the company Acme has 3 different accesses on his email address

    > acme.cocoom.com: contributor of the global base of his company + SSO connection
    > acme-marketing.cocoom.com : administrator of the marketing database + SSO connection
    > mktg-club.cocoom.com: reader of the external database of his marketing manager's club

