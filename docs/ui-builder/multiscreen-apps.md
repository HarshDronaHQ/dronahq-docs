---
sidebar_position: 1
title: "Multiscreen apps"
---

import Thumbnail from '@site/src/components/Thumbnail';

# Multiscreen apps

DronaHQ Studio offers an intuitive platform that empowers you to effortlessly create multiscreen applications. With its extensive range of screen options, including sidebars, trays, menus, popups, and Headers screen, you have the flexibility to design applications that are not only visually appealing but also highly dynamic and interactive. This article will explain to you in detail, about all the screens and their properties and how to use them.

<figure>
  <Thumbnail src="/img/ui-builder/multiscreen-apps/mutiscreen-apps-intro.png" alt="Adding new screen popup" />
  <figcaption align = "center"><i>Adding new screen popup</i></figcaption>
</figure>

## Sections in screens

Each screen type is categorized into three sub-sections, excluding the header type screen. These three sections further specify and delineate the screen's functionality and purpose.
- [Header](./multiscreen-apps.md/#header-configuration)
- [Body](./multiscreen-apps.md/#body-configuration)
- [Footer](./multiscreen-apps.md/#footer-configuration)

Depending upon the screen type these properties are preconfigured, for example in a popup screen, the header is hidden by default and for all types of screen, the footer is hidden by default. Each section of the screen has its own configuration properties.
 ### Header configuration

| Attributes | Description |
| ------------|--------------|
| Visibility | Toggles screen header visibility |
| Classic header | Toggles between, classic Studio header and custom header created by user using controls. |
| Background color | Configures Background color for header. |
| Border color | Configures bottom bottom color of header |
| Dark theme | Makes the classic header icons white |

#### Classic Header Icon Configuration

| Attributes | Description |
| ------------|--------------|
| Icon enabled | Toggles classic header icon visibility |
| Icon color | Configures the icon color. |
| Choose icon | Configures icon for the header. |
| Hide for | Configures for which screen resolution icon should be hidden. |
| Action | Configures which action to perform on the action icon click. |

#### Classic Header Main and Sub-Heading Configuration

| Attributes | Description |
|------------|--------------|
| Text | Configures the text to display in the heading. |
| Font size | Configures font size of the heading. |
| Font weight | Configures font-weight of heading. |
| Font color | Configures font color of heading. |
| Alignment | Configures alignment of heading. |

 ### Body configuration

| Attributes | Description |
|------------|--------------|
| Control spacing | Configures space between two different controls only applicable for advance editor screen. |
| Padding | configures screen body padding, only applicable for advanced editor screens. |
| Background color | Configures Background color for the body section of the screen. |

### Footer configuration

| Attributes | Description |
|------------|--------------|
| Visibility | Toggles Footler visibility of screen |
| Border visibility | Toggler border-top visibility of footer |
| Border color | Configures Border-top color for footer |
| Control spacing | Configures space between two different controls only applicable for advance editor screen. |
| Padding | Configures screen body padding, only applicable for advanced editor screens. |
| Background color | Configures Background color for the body section of the screen. |

## Types of screen

Studio offers multiple types of screen each with its own properties and use case, following are the list of all the different types of screens:
- [Page/Screen](./multiscreen-apps.md/#screen--page)
- [Popup](./multiscreen-apps.md/#popup)
- [Menu](./multiscreen-apps.md/#menu)
- [Tray](./multiscreen-apps.md/#tray)
- [Header](./multiscreen-apps.md/#header)

### Screen / Page

Screen/Page is The Primary Screen type in Sutdio. All Other screens are either overlayed over Screen/Page or either stick to it. Following are the configuration provided by the Screens/Page.

| Attribute | Description |
| ---------------| -------------| 
| Name | Configures display name of the screen |
| id | Displays the navigation Id of the screen, it is non-editable and autogenerated by the studio |
| Routing Url | Displays the Public link URL for the current screen of the app. only visible if routing is configured and the public link is enabled in the app |
| Screen type | Allows you to change screen type, only available in the Advance Editor mode |
| Sticky menu screen | Configures the Sticky header for the screen, you can choose any header type screen in the value to be displayed as a sticky header. |
| Sticky menu screen | Configures the Sticky menu for the screen, you can choose any menu type screen in the value to be displayed as a sticky Menu. |

:::info Info

Only Screen/Page can be made as the home screen any other screen as the home screen will result in an error in the application.

:::

### Popup

This Screen type allows user to configure their own popup screen with their custom layout and UI. following are the different configurations available in the popup type screen.

| Attribute | Description |
| ---------------| -------------| 
| Name | Configures display name of the screen |
| id | Displays the navigation Id of the screen, it is non-editable and autogenerated by the studio |
| Routing Url | Displays the Public link URL for the current screen of the app. only visible if routing is configured and the public link is enabled in the app |
| Screen type | Allows you to change screen type, only available in the Advance Editor mode |
| Click outside to close | Configures if the popup screen should close after the user clicks / taps outside the popup. |
| Max width | Configures the maximum width of the popup screen. |

:::info Info

The height for the popup screen is derived from the controls placed inside the popup screen, its maximum height is 80% of the screen

:::

### Menu

Menu Screen type allows users to configure menu screens for their application, only menu screen can be used as a sticky menu for screen/page type screens. Following are the configurations provided by the menu type screen.

| Attribute | Description |
| ---------------| -------------| 
| Name | Configures display name of the screen |
| id | Displays the navigation Id of the screen, it is non-editable and autogenerated by the studio |
| Screen type | Allows you to change screen type, only available in the Advance Editor mode |
| Open from | Configures weather menu will open from left or from right, even if made sticky menu direction will remain same. |
| Width on desktop | Configures the width of the menu sidebar if the app is displayed on the desktop. the default width is 90% for the other devices |


### Tray

Try-type screens allow you to create sidebars in your application, tray-type screens are displayed as an overlay on all the other screens. Following are the configurations available in the tray-type screen.

| Attribute | Description |
| ---------------| -------------| 
| Name | Configures display name of the screen |
| id | Displays the navigation Id of the screen, it is non-editable and autogenerated by the studio |
| Routing Url | Displays the Public link URL for the current screen of the app. only visible if routing is configured and the public link is enabled in the app |
| Screen type | Allows you to change screen type, only available in the Advance Editor mode |
| Open from | Configures weather tray will open from left/right / top/bottom |
| Click outside to close | Configures if the tray should close after the user clicks / taps outside the tray. |
| Width | Configues width for the tray if opening from the left or right direction. |
| Max width | Configues max width for the tray if opening from the left or right direction. |
| Height | Configues height for the tray if opening from the top or bottom direction. |
| Max height | Configues max height for the tray if opening from the top or bottom direction. |

### Header

Header type screen is used in a very special use case in which if you want to use a single header screen throughout the application then create a header screen and use it as a stikcy header in all the screen/page type screens.

| Attribute | Description |
| ---------------| -------------| 
| Name | Configures display name of the screen |
| id | Displays the navigation Id of the screen, it is non-editable and autogenerated by the studio |

:::info Info

You can inherit header configuration to all the newly created screens if you configure a screen header as the default header in `settings -> style -> default screen header`.

:::