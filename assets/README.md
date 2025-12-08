# Assets Directory

This directory contains shared assets that can be used across multiple website projects.

## Subdirectories

### images/
Store common images that are used across multiple projects:
- Logos
- Background images
- Common graphics
- Placeholder images

### fonts/
Web fonts and typography files:
- Custom fonts (.woff, .woff2, .ttf, .otf)
- Font face declarations
- Typography documentation

### icons/
Icon sets and individual icons:
- SVG icons
- Icon fonts
- Favicon files
- Social media icons

### media/
Other media files:
- Videos
- Audio files
- Animated graphics
- Large media assets

## Usage Guidelines

1. **Organize by type**: Keep files organized in the appropriate subdirectory
2. **Use descriptive names**: Name files clearly (e.g., `company-logo-blue.png`)
3. **Optimize files**: Compress images and media before adding them
4. **Document usage**: If an asset has specific usage requirements, add a note

## Referencing Assets

From a project, reference shared assets using relative paths:

```html
<!-- In projects/my-site/index.html -->
<img src="../../assets/images/logo.png" alt="Logo">
```

```css
/* In projects/my-site/styles.css */
@font-face {
  font-family: 'MyFont';
  src: url('../../assets/fonts/my-font.woff2');
}
```

## Best Practices

- Keep assets organized and well-named
- Remove unused assets to keep the repository clean
- Use appropriate file formats (WebP for images, WOFF2 for fonts)
- Document any licensing or attribution requirements
