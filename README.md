# Darki HTML Dashboard UI Kit

A dark-themed html dashboard template for desktop (not-responsive).

## Use Darki 

To use darki, copy `dist-assets/darki.css` and `dist-assets/main.js` to your project assets directory, then:
- Include css in head element.
```html
<head>
  ...
  <link rel="stylesheet" href="/darki.css">
</head>
```

- Include js at the end of body element.
```html
  ...
  <script src="/main.js">
</body>
```

## Preview
<a href="https://darki.pages.dev" target="_blank"><img src="https://raw.githubusercontent.com/enjinil/darki/main/public/preview.png" alt="Darki preview"></a>

## Features
Darki is initially build as template for Phoenix full-stack project admin dashboard that is easy on the eye (dark theme). Sharing the template publicly for everyone to use. The template includes the following features:
- **Elements**: alerts, article/content, cards, dropdowns, badges, lists, buttons, modals, breadcrumbs, tables.
- **Forms**: input, select, checkbox, radio, input group, selectbox, selectrow, datepicker, daterangepicker.
- **Patterns/Pages**: auth (login, register, forgot password), card list, table list, user profile, single form, key-value form.
- **CSS Helpers**: color, spacing, typography, visibility, layout, etc.

The features that will not be included:
- Charts
- Icons colletion

## Recommended libraries
- Chart - https://apexcharts.com/
- Icons - https://heroicons.com/

## TODO
- [ ] Document layout css helpers - grid, container, level

## 🧞 Development

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
