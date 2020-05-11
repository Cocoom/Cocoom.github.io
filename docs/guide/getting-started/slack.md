# Slack API

## Connecting Slack and Cocoom

The Cocoom / Slack connection provides two distinct and independent functions:


1. **SSO authentication**: using Slack to authenticate users (Users use their Slack credentials to log in to Cocoom)
2. **Notifications**: use Slack to notify users of actions performed on the Cocoom platform.


## Step 1: Create an App

In a web browser, go to api.slack.com

Once you are on this page, you need to login to your Slack "Go to Slack" space.


![Image transférée par l’utilisateur : image.png](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588519745149_image.png)


Once logged in, go back to https://api.slack.com and click on "Your Apps".


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588519908387_image.png)


Click on “**create an app**”


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588520194007_image.png)


Fill in the "App Name" field, select the appropriate "workspace", then click on "Create App"!


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588520312975_image.png)



## Step 2: Configure the App visually

In the "**Basic Information**" section, scroll down to "**Display information**".

Fill in the following information:

- 1- App name: Cocoom
- 2- Short description: optional description
- 3- App Icon: download the official icon here: https://cocoom.com/ressources/Cocoom_logo_slack_200.jpg
- 4- Background color: #175AE4


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588520639508_image.png)


Save the changes.



## Step 3: Configure SSO Slack Authentication

If and only if you wish to use Slack's user IDs to connect to your Cocoom platform. This means that when they connect to Cocoom, it is your Slack platform that will take over to authorize them to connect.

In the "OAuth & Permissions" section, click on "Add New Redirect URL".


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588522079846_image.png)


Then copy and paste the address of your Cocoom platform like this :
https://xxxxxx(votrenom).cocoom.com/oidc


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588522156994_image.png)


Don't forget to back up!

Scroll down the OAuth & Permissions page to the "Scopes" section.


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588522387708_image.png)


and add the following scopes


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588523997571_image.png)




## Step 4: Configure Cocoom notifications in Slack

To receive Cocoom notifications directly in your Slack channels, you need to add a BOT.

Go to the "**App Home**" section and go to the "**You're App presence in Slack**" section. We'll start by editing the display by clicking on "**edit**" of the app display name" and fill in the fields identically: 


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588524542200_image.png)



## Step 5: Finalize the installation 

In the "**Install App**" section, click on "**Install App to Workspace**".

![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588524771872_image.png)


It's almost done! Your application is ready, we need to link it to Cocoom 🎉!



## Step 6: Send the Slack connection elements to the Cocoom team

Slack has generated connection elements to allow the Cocoom App to communicate securely with Slack. All that remains now is to send these elements to the Cocoom support address to connect them.

Prepare your email for support@cocoom.com and add :


- **For SSO authentication: Client ID and Secret Client :**


![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588525038450_image.png)




- **For the notification BOT: Bot User OAuth Access Token**
![](https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588525457807_image.png)


✌️ The support team will get back to you within 2 minutes to 48h maximum to validate your App!

