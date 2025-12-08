# Example Site

This is an example project to demonstrate how to use the repository structure.

## About This Project

This is a simple static website created from the `static-html` template to show how projects are organized in this repository.

## Structure

```
example-site/
├── index.html         # Main HTML file
├── css/
│   └── style.css     # Stylesheet
├── js/
│   └── main.js       # JavaScript file
├── images/           # Project images
└── README.md         # This file
```

## Running Locally

Simply open `index.html` in your web browser:

```bash
# From the repository root
cd projects/example-site
open index.html  # macOS
# or
xdg-open index.html  # Linux
# or just double-click the file in your file explorer
```

## Features

- Clean, semantic HTML5 structure
- Responsive CSS with modern layout
- Smooth scrolling navigation
- Mobile-friendly design

## Making Changes

1. Edit `index.html` to change the content
2. Modify `css/style.css` to update styling
3. Add interactivity in `js/main.js`
4. Add images to `images/` directory

## Using Shared Assets

You can reference shared assets from the main assets directory:

```html
<!-- Use a shared logo -->
<img src="../../assets/images/logo.png" alt="Logo">
```

```css
/* Use a shared font */
@font-face {
  font-family: 'SharedFont';
  src: url('../../assets/fonts/font-file.woff2');
}
```

## Deployment

This static site can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
