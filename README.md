# web_site_code

A well-organized repository for working on various website projects and managing finished assets. Designed to be easily navigable by AI agents, code assistants, and developers.

## Directory Structure

```
web_site_code/
├── projects/          # Individual website projects
├── assets/            # Shared assets across projects
│   ├── images/       # Shared images
│   ├── fonts/        # Shared fonts
│   ├── icons/        # Shared icons
│   └── media/        # Shared media files (videos, audio)
├── templates/         # Project templates and boilerplates
└── docs/              # Documentation and guidelines
```

## Projects Directory

Each website project should be in its own subdirectory under `projects/`. Use descriptive names for your project folders.

### Project Structure Example

```
projects/
└── my-website/
    ├── src/           # Source code
    ├── public/        # Static files
    ├── assets/        # Project-specific assets
    ├── tests/         # Tests
    ├── README.md      # Project documentation
    └── package.json   # Dependencies (if applicable)
```

## Assets Directory

The `assets/` directory contains shared resources that can be used across multiple projects:

- **images/**: Common images, logos, backgrounds
- **fonts/**: Web fonts and typography files
- **icons/**: Icon sets and SVG files
- **media/**: Videos, audio files, and other media

## Templates Directory

Contains starter templates and boilerplates for common project types:

- Static HTML/CSS/JS sites
- React/Vue/Angular applications
- WordPress themes
- And more...

## Docs Directory

Project documentation, guidelines, and best practices.

## Getting Started

### Creating a New Project

1. Create a new directory under `projects/`:
   ```bash
   mkdir projects/my-new-site
   cd projects/my-new-site
   ```

2. Initialize your project (example for Node.js):
   ```bash
   npm init -y
   ```

3. Add a README.md to document your project

4. Start coding!

### Using Shared Assets

Reference shared assets from your project:
```html
<!-- Example: Using a shared image -->
<img src="../../assets/images/logo.png" alt="Logo">
```

```css
/* Example: Using a shared font */
@font-face {
  font-family: 'CustomFont';
  src: url('../../assets/fonts/custom-font.woff2');
}
```

## Working with AI Agents

This repository is optimized for AI-assisted development:

- **Clear structure**: Organized directories make it easy to locate files
- **Project isolation**: Each project is self-contained
- **Shared resources**: Common assets are centralized
- **Documentation**: Each project should have its own README

### Tips for AI Assistants

1. Always check the project's README for specific instructions
2. Use the templates directory for starting new projects
3. Keep project-specific assets in the project directory
4. Use shared assets for resources needed across multiple projects
5. Document your changes in the project's README

## Contributing

When adding new projects:

1. Create a dedicated directory under `projects/`
2. Include a comprehensive README.md
3. Document dependencies and setup instructions
4. Keep the project self-contained where possible
5. Use descriptive commit messages

## Best Practices

- **One project per directory**: Keep projects isolated
- **Document everything**: Clear documentation helps everyone
- **Use meaningful names**: Descriptive folder and file names
- **Version control**: Commit regularly with clear messages
- **Dependencies**: Document all dependencies and versions
- **Environment variables**: Use .env files (don't commit secrets!)

## License

Individual projects may have their own licenses. Check each project's directory for license information.