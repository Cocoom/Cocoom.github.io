# 📫 E-mail customization guide

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625414478339_image.png)


Discover customizable parts of e-mails sent by a Cocoom platform:

- Invitation
- Daily Digest
- Newsletter

----------

## Structure of e-mails

A general structure is shared by all e-mails sent by a platform to your users

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625414616610_image.png)


This structure is shown on this picture.

It is made of:

- A *background* of a given solid color,
- A *header* made of a company logo,
- A *body* divided in several *panels,* here **with a white background,
- A *footer* made of the same company logo as in the header, a mention “Powered by Cocoom” that contains a link to the Cocoom website, and a final paragraph.


----------

## Platform wide properties

Following properties can be generally customized (e.g. they apply to all e-mails sent by a given Cocoom platform) :


### The company logo

The default Cocoom logo can by replace by any PNG file with a transparent background.
Size constraints are : maximum width : 198px, maximum height:
80px.


### Colors

Following colors can be customized:

- Background color. Default is #f3f3f3
- Panel background color. Default is white
- Default foreground color. Default is #444245
- Default panel foreground color. Default is #444245
- Tonic color. Default is #2046D9

(Tonic color is used to display links and buttons)


### Fonts

Fonts are customizable. Those fonts could be standard ones, (already available on computers), or web fonts from Google.
*Note:* *Microsoft Outlook does not display web fonts. If your users are mainly using Outlook, you should stick to standard ones.*

**Main Font**
The main font is used for almost all texts. The default main font is the “Lato” Google web font, or Tahoma if web fonts are not available.

**Secondary Font**
Currently, the secondary font is only used for button labels. The default secondary font is the “Cabin” Google web font, or Arial if web fonts are not available.


----------

## Invitation

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625414819876_image.png)


The “Invitation” e-mail is sent to users when you add them on your platform. It aims to introduce the platform, and provide a button to activate their Cocoom user account.
In addition to “platform wide properties” customizations, the e-mail content could be tailored to your specific needs.



### E-mail fields

Following e-mail fields can be customized : “From”, “Subject", and “Reply-To”. See the “Appendix” section at the end of this document for more details.


### Body

The layout and almost all the content of the body (panels, headings, text, illustration, links) of this e-mail are customizable.
The only requirement is to display somewhere the “activate your account” button.
Default elements can be removed and new ones inserted. See the “Appendix” section at the end of this document for more details.


----------

## Daily digest

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625414898503_image.png)


The “Daily Digest” e-mail is sent every day at 5 a.m. UTC time. Each user received a personalized version of it, with a summary of unread publications that were published, the day before, in their subscribed channels.
In addition to “platform wide properties” customizations, the e-mail content could be tailored to your specific needs.


### E-mail fields

Following e-mail fields can be customized : “From” and “Reply-To”. See the “Appendix” section at the end of this document for more details.

### Body

The layout and almost all the content of the body of this e-mail are customizable except the publication blocks layout.
Default elements can be removed and new ones inserted. See the “Appendix” section at the end of this document for more details.


----------

## Newsletter
![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625414962209_image.png)


The “Newsletter” e-mail could be redacted  and sent by users with “administrator” permissions. It targets all the active or invited users on your Cocoom platform.

This e-mail is made of an optionnel banner, a title, an editorial, a headline publication, and up to 9 selected publications.

In addition to “platform wide properties” customizations, the e-mail content could be tailored to your specific needs.


### E-mail fields

Following e-mail fields can be customized : “From” and “Reply-To”. See the “Appendix” section at the end of this document for more details.


### Body

The layout and almost all the content of the body of this e-mail are customizable except the headline layout and the publication blocks layout.
Default elements can be removed and new ones inserted. See the “Appendix” section at the end of this document for more details.


----------

## Appendix

In this appendix, you will find a more detailed description of elements that can be used to format e-mails sent by Cocoom.


### 1. E-mail fields

To improve your users' experience, you can customize following fields:

**From**
The “from” e-mail cannot be changed, and will be “noreply@cocoom.com". However, you can specify an associated label, to make the “from” field more user friendly.
Ex: My Company Name <noreply@cocoom.com>
Most e-mail clients will only show “My Company Name” to users, and “noreply@cocoom.com" should be hidden.

**Subject**
The e-mail subject can contains the sentence of your choice, and could include emoji.
Ex: 🎉 You are invited to join the « My Company» Cocoom

**Reply-To**
You can specify a custom reply-to address. This address will be use by e-mail client when a user make a reply to a daily digest, a newsletter or a invitation message.


### 2. Body elements

Cocoom e-mail bodies are structured as a set of panels. Each panels contains a list of blocks. Each block is made of paragraphs.
Following sections describe these elements and their customizable properties.

**Panel**
A panel is a 700px wide rounded rectangle. Its background color is set through Platform Wide Properties. It contains a set of blocks.

**Block**
A block is a layout element. It comes in three flavor: *one column*, *two columns* and *banner*.


- *One column layout*

The standard block organize its content in a unique column that fill the whole panel width.
Below, the picture shows a one column block containing a unique paragraph. It can contain as many paragraphs as you like.

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415171621_image.png)



- *Two columns layout*

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415195066_image.png)


Cocoom e-mail body support a two-columns layout. Each column contains a set of paragraphs.
Below, the picture shows a two columns block, each column containing a unique paragraph.


- *Banner*

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415282625_image.png)


A block of type “banner” displays an image that fill the whole panel width (e.g.  700px). The image height should be noticeably smaller than its width.


**Paragraph**
A paragraph displays a text, a link, a button, an image or a separator. You can combine all these kinds of paragraph to organize your content.

Almost all paragraphs accept following properties:

- Alignment: left, center, right and justify. Default is left.
- Text transformation: capitalize, uppercase, lowercase, none. Default is none.
- Color: any RGB code or color name. Default is is set through Platform Wide Properties.
- Top margin: a value in pixels. Default is 0px.
- White space: normal, nowrap, pre, pre-wrap, pre-line, break-spaces. Default is normal.
- Font style: normal, italic. Default is normal.
- Font weight: 100, 200, 300, 400 (normal), 500, 600, 700 (bold), 800, 900. Default is normal.

**Textual paragraphs**

- *Standard paragraph*

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415336855_image.png)


In a standard paragraph, font size is 14px.


- *Title*

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415360023_image.png)


In a title paragraph, font size is 26px.In the example above, the title is centered.


- *Subtitle*

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415380064_image.png)


In a subtitle paragraph, font size is 18px. In the example above, the subtitle is centered.


- *Footer*

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415406734_image.png)


In a footer paragraph, font size is 12px. In the example above, the footer is justified.


- *Link*

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415424610_image.png)


In a link paragraph, font size is 14px. As the one shown above, link can display a user-friendly label. It can also display the target URL. In the example above, the link is centered.


**Image paragraph**

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415447809_image.png)


A paragraph can be used to display an image. You can specify the desired image width. In the example above, the image is centered.
The maximum width of the image can also be specified in pixels. Default is 650px.

**Button paragraph**

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415468032_image.png)


A paragraph can also display as a call-to-action button. A button is associated to a URL, and the user can activate it.
The color property does not apply to Button. Text color is always white, button color is always the tonic color (see “Platform Wide Properties” section).

**Separator paragraphs**
Paragraphs can also be used as separator. Two kinds of separator are available:


- *Spacer*

A space is an blanks space, use to lighten the composition of your content. The height of a spacer is adaptable.


- *Horizontal line*

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415513832_image.png)


An light horizontal line can be inserted to split content.


**Signature paragraph**

![](https://paper-attachments.dropbox.com/s_CA4EAEB8EA45F05DBB228A130F7C45697BFF255BC7C2920E189075A4A1607811_1625415539508_image.png)


A last kind of paragraph allow to display a signature made of an avatar, an associated text and an URL. The whole signature is a link that the user can activate.
