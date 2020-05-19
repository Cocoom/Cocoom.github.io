# Authentication with Google

Cocom enables GSuite users to authenticate to Cocoom.
Users use their Google Suite credentials to sign in to Cocoom.


- Security: Cocoom never know your users passwords.
- Governance: IT department can apply its internal security policy and manage GSuite users, as usual, from GSuite admin console.


## Create a private Google application


### 1. Go to this URL

[Consent screen](https://console.cloud.google.com/apis/credentials/consent)

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589188827733_1.+Create+a+Google+app+for+OIDC+sign+in.png)




### 2. Fill some parameters

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589189158142_2.+Edit+app+properties.png)



## Add credentials

To allow GSuite users to be able to authenticate through the previously created app.


### 1. Go to “Credentials” menu

[Credentials](https://console.cloud.google.com/apis/credentials)


### 2. Choose “OAuth client ID” menu item

![](https://paper-attachments.dropbox.com/s_11AA96D8CB224F869E7EE44FA606AA34A1ADA10180586DD3C878B0566AC38DDC_1589191105615_3.1.+Create+a+google+app.png)



### 3. Then click on “Create credentials”

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589189806934_3.+Add+client+ID.png)



### 4. Choose “Web application” application type

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589190008309_4.+Choose+to+create+webapp+client+ID.png)



### 5. Modify some properties

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589190073303_5.+Configure+the+client+ID.png)



### 6. Copy client ID and client secret values

![](https://paper-attachments.dropbox.com/s_AE14104143D7433E2E244C7611B91F451C0F9B0310EB517144B85400DB79926E_1589190115278_6.+Copy+client+ID++client+secret.png)


Those are the two requested information required by Cocoom support team to allow your GSuite users to authenticate to your  Cocoom base.


## 🏆 Send us the information

Those requested information will be used by the Cocoom support team to create the authentication link between your GSuite and your Cocoom accounts.

To complete this integration, you have to send us these information (client ID & client Secret) by email at <support@cocoom.com>

* either directly in the body of the email (please append your domain name as well, called YOURDOMAIN in this help page)
* or by filling in the following PDF document: [OIDC Cocoom Form](/doc/en/OpenID_Connect_Form-en.pdf)
