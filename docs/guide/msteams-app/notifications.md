# Teams notifications

Cocoom allows your teams to be notified in Microsoft Teams when new Cocoom memos are created.
As a Cocoom administrator, you can choose the team channel in which notifications come in.


It's a 2 steps configuration:

1. Webhook creation from chosen Microsoft Teams team channel
2. Cocoom channel configuration using this very webhook

## 1. Microsoft Teams webhook creation

1.1. Go to the MSTeams channel you want to be notified from, click on « … » icon and select « Connectors ».

1.2. In the displayed list, choose « Incoming Webhook ».

1.3. Choose a name for this connector : « Cocoom ».

1.4. Add the « Cocoom » icon (links to the icon you can use: [ICON.png](https://help.cocoom.com/img/cocoom-icon.png))

1.5. Then click on « Create ».

1.6. A URL is then generated and displayed in the form. Copy it.

![](/img/en/guide/msteams-app/teams-connector-setup.png)


## 2. Configure Cocoom channel

2.1. In Cocom administration side, choose « Channel » menu item.

2.2. Click on « Update » action for channel of you choice.

2.3. Scroll down to « Tools integration » part

2.4. Paste the « incomong Webhook » link in "Webhook link" field. You can add a comment to better know what represents this association (for example, your Microsoft Teams team name + the team channel)

2.5. Click on « Add ».

The association is now live.

![](/img/en/guide/msteams-app/cocoomchannel-teamschannel-association.png)
