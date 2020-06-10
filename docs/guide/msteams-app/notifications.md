# Teams notifications

Cocoom allows your teams to be notified in Microsoft Teams when new Cocoom memos are created.
As a Cocoom administrator, you can choose the team channel in which notifications come in.


It's a 2 steps configuration:

- Webhook creation from chosen Microsoft Teams team channel
- Cocoom thread configuration with this webhook

## Teams webhook creation

- Go to a Teams channel, click on « … » icon and select « Connectors ».
- In the displayed list, choose « Incoming Webhook ».
- Choose a name for this connector. « Cocoom », for example.
- Add a « Cocoom » icon (links to the icon you can use: [ICON.png](https://help.cocoom.com/img/cocoom-icon.png))
- Then click on « Create ».
- A URL is then generated and displayed in the form. Copy it.


## Configure Cocoom thread

In Cocom administration side, choose « Channel » menu item.

- Click on « Update » action for thread of you choice.
- Scroll down to « Tools integration » part
- Paste the « incomong Webhook » link in "Webhook link" field. You can add a comment to know which represents this link (for example, your Microsoft Teams team name + the team channel)
- Click on « Add ».

The association is now complete.
