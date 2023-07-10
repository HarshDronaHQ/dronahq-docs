---
sidebar_position: 1
title: Markdown Editor
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

The DronaHQ Studio offers a control called `Markdown Editor`, which enables the composition of formatted lightweight
text. Markdown is a straightforward syntax used to format text as headers, lists, boldface, and more.

With the Markdown Editor, you can easily write markdown syntax and preview the output if desired. The control generates
a markdown string as its output, allowing you to incorporate formatted text into your application.

<figure>
  <Image src="/img/reference/controls/markdown-editor/control.png" alt="Markdown Editor control" />
  <figcaption align = "center"><i>Markdown Editor Control</i></figcaption>
</figure>


## Binding Data

There are different ways in which you can bind data to the Markdown Editor control.

<figure>
    <Image src="/img/reference/controls/markdown-editor/bind-data.jpeg" alt="properties"/>
</figure>

The expected data format is Markdown:

```md
**Sample Markdown**

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text** **This is bold text** _This is italic text_ _This is italic text_ ~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.
```

To know more about writing markdown, you can view the [markdown guide](https://www.markdownguide.org/cheat-sheet/).

## Properties



One can provide the theme to this control and make it fit to screen.


## Control Outputs

## Events


**value_change :**

The `value_change` event occurs when there is a modification in the Markdown Editor control. This event triggers
subsequent actions, following the same action flow as other controls such as action buttons and list controls. You can
utilize both on-screen and server-side actions to respond to this event.

To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the
control. Adjusting the debounce property allows you to manage the delay between consecutive value changes, ensuring
optimal performance and responsiveness.


