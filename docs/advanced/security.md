# 🔐 Security

## Internal access restriction

Only authorized personnel (designated DevOps) has access to Cocoom infrastructure, preventing, at best, potential social engineering hacking.

Our security policy includes ongoing sensitivation of technical staff to data and system security (Devs, DevOps as well as Customer Support team).


## Data traffic encryption

All data transmissions between Cocoom, our users and our technical infrastructure are encrypted.

![Secured data transmission](/img/infra/infra_data-security.png)


Our servers inter-operate exclusively in a private network (VLAN) inside each cloud provider.

To make our apps communicate to each other accross our 2 cloud suppliers, we rely on HTTPS protocol & API Key dedicated to each App.


### Between Cocoom DevOps|Support teams and Cocoom infrastructure

- Web communications encrypted by TLS v1.2 & TLS v1.3 (HTTPS).
- All other levels of communication are encrypted by SSH.

::: danger DEVOPS
Access to Cocoom infrastructure can only be possible by :

- a two-factor authentication authorizing access to Cocoom's infrastructure management services,
- an asymetric key authentication (public/private) where only the keys of the few duly authorized DevOps are installed inside Cocoom infrastructure.
:::

### Between Cocoom users (you) and Cocoom infrastructure

- Web communication only, encrypted by TLS v1.2 & TLS v1.3 (HTTPS).
- Up-to-date **A+** level certificate issued by SSL Labs services

![SSLLabs rating](/img/infra/security_ssllabs-rating.png)

::: tip CHECK
You can test it by yourself by clicking [HERE](https://www.ssllabs.com/ssltest/analyze.html?d=acme.cocoom.com)
:::


## Software

All data stored in the user's browser is encrypted or encoded according to its level of sensitivity.

- The principle of sending the minimum amount of useful information to customers is ensured.
- The principle of retrieving the minimum amount of information useful for the proper functioning of Cocoom service is ensured.


## XSS (Code Injection Security System)

Cocoom URLs as well as data transmitted via web forms are filtered to prevent any injection of malicious code.

Cocoom owns a unique gateway, to access its services, embedding a layer of security for received data.

There's no way to bypass this security layer to get access to your data.

::: warning CONTINOUS TRAINING
We keep training our technical team, stick to best practices in order to avoid XSS attacks.
:::


## Incident alerts

We use internal tools helping us to automatically monitor our infrastructure.

We use a web tool, publicly available, for automating the reporting of technical incidents and let you know an up-to-date Cocoom status : [status page](https://status.cocoom.com)

Feedbacks are also sent manually, by email, to our customers CIO contacts, if applicable.


## Insurance

Cocoom has a valid Pro civil liability insurance adapted to software editor's industry.
