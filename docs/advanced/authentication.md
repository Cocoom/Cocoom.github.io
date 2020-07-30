# 🕵️ Authentication

Cocoom leverages on several authentication systems to authenticate its users.


## Supported Authentications

### Internal authentication

It's an authentication workflow fully managed by Cocoom.

It means that, in that case, Cocoom owns the user password.

After being invited (user received an email with required information to sign-up), during user onboarding, the user has to choose a password.
::: tip
We ensure the chosen password cannot be weak (specific algorithm is applied to prevent too weak password).

Otherwise the user account cannot be fully completed & the user won't be able to use Cocoom.
:::

The password is hashed before being transferred from Cocoom client to Cocoom servers (password is never sent in clear text over the network).

Moreover, in this authentication mode, Cocoom strongly encryots the hashed passwords before storing them for further usages.


### External Identity Provider authentication

Cocoom can be coupled to well-known trusted Identity providers, in order to give you, as an IdP admin, full control over your users authentication.

::: tip PROTOCOL
Cocoom use the OpenID Connect protocol.

<img alt="OIDC logo" height="100" src="/img/infra/oidc.png">
:::

Cocoom is currently compatible with the following Identity providers:

- Microsoft Office 365 / Azure Active Directory,
- Google Suite,
- Slack,
- Any Open ID connect compliant solution you already use

::: warning NOTE
1 Identity Provider can be configured by Cocoom knowledge base
:::

Its means that if, for example, the chosen IdP is Microsoft AAD, then all users will authenticate themselves against Cocoom using the Office 365 sign-in workflow.

::: tip HUB
If you want to give access to third party users (such as customers, suppliers or partners) you just have to create a new knowledge base with another authentication system.

Then connect them through a trusted Cocoom HUB to easily share selected content between these two knowledge bases without sharing their authentication systems nor their users.
:::

## Adhoc OIDC identity provider

Contact the support service to get the procedure to follow according to your needs.

📬 [support@cooom.com](mailto:support@cooom.com)

::: tip FORM TO FILL
We provide a form to fill on your side & to send us back about your OIDC specific configuration : [OIDC Cocoom Form](/doc/en/OpenID_Connect_Form-en.pdf)
:::
