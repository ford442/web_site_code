# Templates Directory

This directory contains starter templates and boilerplates for common website project types.

## Purpose

Templates provide a quick starting point for new projects with:
- Pre-configured project structure
- Common dependencies
- Best practices setup
- Basic documentation

## Using Templates

To create a new project from a template:

1. Copy the template to the projects directory:
   ```bash
   cp -r templates/template-name projects/my-new-project
   cd projects/my-new-project
   ```

2. Update the project README.md with your project details

3. Install dependencies if needed:
   ```bash
   npm install  # or yarn install, pip install -r requirements.txt, etc.
   ```

4. Start developing!

## Available Templates

Templates will be added here as needed. Common types might include:

- **static-html**: Basic HTML/CSS/JavaScript site
- **react-app**: React application starter
- **vue-app**: Vue.js application starter
- **nodejs-express**: Node.js with Express server
- **wordpress-theme**: WordPress theme starter
- **landing-page**: Single-page landing site

## Contributing Templates

When adding a new template:

1. Create a well-structured, minimal starter
2. Include a comprehensive README.md
3. Add comments explaining key parts
4. Include a .gitignore appropriate for the stack
5. Document all dependencies and setup steps

## Template Guidelines

Good templates should:
- Be minimal but functional
- Follow current best practices
- Include clear documentation
- Be ready to use with minimal setup
- Not include unnecessary dependencies
