# 🕵️ Authentication

## SSO Authentication

A Cocoom platform can be configured in SSO in order to delegate user authentication to an external identity federation, usually the client's.

This identification configuration is easy to use for the user (no specific password to remember), and secure and practical for the client's IT department (it has complete control over its security policy).


- We are currently compatible with the OpenID connect protocol:
    - Microsoft Office 365,
    - Google Suite,
    - Slack,
    - …
- We are able to offer SAMLv2 compatibility.
    - contact us: support@cocoom.com

Information to be retrieved from your identity federation for SSO

Cocoom requires the following information:

- email (unique ID of a user)
- first name
- last name,
- administrator or collaborator profile (if none exists/nothing is provided, then the user will be considered as a "collaborator")

Cocoom can integrate, on request, the following information:

- telephone(s)
- mailing address(es)
- other email(s)


## SSO authentication procedure

Contact the support service to establish the procedure to follow according to your needs.
📬 support@cooom.com


## Independent Authentication Cocoom

If the SSO mechanism is not set up in partnership with the client, Cocoom has an authentication system based on a form where users must enter their identifiers :

- e-mail
- code word
- name
- first name

The password is hashed before it is transferred between the browser and the Cocoom servers (no passwords are transmitted in clear text on the network).

Moreover, in this authentication mode, Cocoom encrypts the passwords of the end users.
Cocoom imposes a high level of security when creating passwords:

- 8 characters minimum
- 1 number, 1 capital letter, 1 special character

Each user is responsible for his or her password and its non-disclosure.


