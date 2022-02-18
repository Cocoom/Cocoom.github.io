# 💻 Requirements

## Hardware

- OS compatibility : Linux, Windows or Mac.

- Hardware: the user's workstation must be adapted to the use of recent web applications. A color screen is necessary for the proper use of Cocoom.

- Internet: the user's workstation must have Internet access.

## Software

Cocoom requires the use of either a web browser to be used as a standalone application, a dedicated desktop application or Microsoft Teams when using Cocoom in Teams.

### Cocoom in Microsoft Teams

Cocoom works under the Microsoft Teams desktop application (Windows or Mac).

Cocoom is also compatible with [Microsoft Teams supported browsers list](https://docs.microsoft.com/fr-fr/microsoftteams/limits-specifications-teams#browsers)

### Cocoom web standalone

The browsers list with which Cocoom compatible is:

- Safari 9+
- Firefox version 43+
- Google Chrome version 47+
- Edge (new version, based on Chromium project)
- Mobile Chrome (recent version, not strictly determined)
- Mobile Safari (recent version, not strictly determined)
- Mobile Edge

Javascript must be active on these browsers.

### Cocoom desktop application

We also have a dedicated Cocoom standalone desktop application.

- [Windows](https://static.cocoom.com/desktopapp/Cocoom.exe) : for Windows 7 & Windows 10
- [Mac](https://static.cocoom.com/desktopapp/Cocoom.dmg) (pkg signature in progress...) : for Mac OS X 10.10+

## Domains

This is the list of domains Cocoom should have access to run from your network.

### Cocoom domains

**cocoom.com** domain (including a wildcard access to its sub-domains : *.cocoom.com).

### External tools domains

<p align="center">
  <img alt="External tools diagram" src="/img/infra/infra_external-tools.png">
</p>

#### Google fonts

**fonts.googleapis.com** & **fonts.gstatic.com** are mandatory domains to allow in order to load the external fonts used by Cocoom.

#### Intercom

**intercomcdn.com** & **intercom.io** domains must be accepted to run the customer support communication tool Cocoom is using.

full list: widget.intercom.io, js.intercomcdn.com, api-iam.intercom.io, fonts.intercomcdn.com, js.intercomcdn.com, uploads.intercomcdn.com, nexus-websocket-a.intercom.io


## Port

Cocoom is using **Secured HTTP** (HTTPS) protocol, so **port 443** must be opened for all the domains listed above.

To allow Cocoom customer support application (Intercom) run over **HTTPS** & **Secured WebSocket** protocols, you have to let the same **port 443** opened for all Intercom related domains.


## Mail

<p align="center">
  <img alt="External email tool diagram" src="/img/infra/infra_external-email-tool.png">
</p>

A user must have an email address in order to have an ID in Cocoom.

Cocoom uses this email address to send emails to people of your organization

To efficiently reach their goals, these emails should not be treated as spam by your internal anti-spam software (if applicable, configure it to accept emails coming from **cocoom.com** domain & email sender **noreply@cocoom.com**).

::: tip NOTE
Cocoom app sends the minimum number of emails to its users, tending to lower, as much as possible, the infobesity.

These emails are sent to keep your team mates aware of what's interesting to know about your own knowledge base(s) usage.
:::

## Bandwidth usage (excluding videos)

<p align="center">
  <img alt="External tools diagram" height="200" src="/img/infra/bandwidth.png">
</p>

Per user, in average, Cocoom requires, during the very first use:

- ~1,9Mb to access the sign in page
- Between ~3Mb and ~13Mb to access the "breaking news" page, depending on the content produced by the collaborators
- Between ~300Kb and ~3Mb to display a publication (weight varies according to the content of the publication)

Once the very first access is made by your collaborators, the downloaded data delta (bandwidth requirement) is drastically reduced due to Cocoom's native use of web browser resource caches (on desktop, smartphone or tablet).

## Accessibility

<p align="center">
  <img alt="External tools diagram" height="200" src="/img/infra/accessibility.png">
</p>

Cocoom usage is not currently compliant to disabled people (visually or hearing impaired).

However, except for the publication editor, Cocoom usage doesn't require fine dexterity, and can also be used on touch screen devices.
