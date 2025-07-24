# MarkEdit-theme-basic

[Basic](https://cm6-themes.netlify.app/) theme for [MarkEdit](https://github.com/MarkEdit-app/MarkEdit), built on top of [MarkEdit-theming](https://github.com/MarkEdit-app/MarkEdit-theming).

<img width="344" title="Basic Light" src="https://github.com/user-attachments/assets/f23bc7bf-49df-42fa-92c2-7452e8d0dec0" /> <img width="344" title="Basic Dark" src="https://github.com/user-attachments/assets/45dc0def-1476-4a2b-9650-63eac51f2d8e" />

To customize colors, see [Customization](https://github.com/MarkEdit-app/MarkEdit-theming/wiki#customization) for details.

## Installation

Copy [dist/markedit-theme-basic.js](dist/markedit-theme-basic.js) to `~/Library/Containers/app.cyan.markedit/Data/Documents/scripts/`.

You can also run `yarn install && yarn build` to build and deploy the script.

## Settings

In [settings.json](https://github.com/MarkEdit-app/MarkEdit/wiki/Customization#advanced-settings), you can define a settings node named `extension.markeditThemeBasic` to configure this extension, default settings are:

```json
{
  "extension.markeditThemeBasic": {
    "enabledMode": "both"
  }
}
```

- `enabledMode`: Enabled color scheme (`both`, `light`, `dark`, or `none` to disable).
