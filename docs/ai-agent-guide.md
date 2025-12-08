# AI Agent Guide

This guide helps AI agents and code assistants work effectively with this repository.

## Repository Overview

This is a multi-project repository where each website project is isolated in its own directory under `projects/`. Shared assets are centralized in `assets/`, and project templates are in `templates/`.

## Navigation

When working in this repository:

1. **Check the root README.md** first for overall structure
2. **Navigate to specific projects** in `projects/` for individual sites
3. **Each project has its own README.md** with specific instructions
4. **Shared assets** are in `assets/` with subdirectories by type
5. **Templates** in `templates/` can be copied to start new projects

## Common Tasks

### Creating a New Project

1. Create directory: `mkdir projects/new-project-name`
2. Add README.md documenting the project
3. Set up project structure (use templates as reference)
4. Initialize dependencies if needed
5. Add to version control

### Modifying an Existing Project

1. Navigate to `projects/project-name`
2. Read the project's README.md first
3. Understand the project structure
4. Make targeted changes
5. Test changes if applicable
6. Update documentation if needed

### Adding Shared Assets

1. Determine asset type (image, font, icon, media)
2. Place in appropriate `assets/` subdirectory
3. Use descriptive file names
4. Update assets/README.md if adding new categories

### Working with Templates

1. Templates are starting points, not live projects
2. Copy templates to `projects/` to use them
3. Don't modify templates unless improving the template itself

## Best Practices for AI Agents

### File Organization
- Keep project files within their project directory
- Use shared assets for resources needed across projects
- Don't mix project-specific code with shared code

### Documentation
- Update README files when making significant changes
- Document new dependencies or setup requirements
- Keep documentation concise but complete

### Code Changes
- Make minimal, targeted changes
- Test changes when possible
- Follow existing code style in each project
- Don't introduce unnecessary dependencies

### Git Operations
- Use clear, descriptive commit messages
- Keep commits focused on specific changes
- Review changes before committing

## Project Isolation

Each project should be:
- **Self-contained**: All project code in one directory
- **Documented**: README.md with setup and usage
- **Dependency-managed**: Clear dependency declarations
- **Independently buildable**: Can be built/run without other projects

## Directory Structure Quick Reference

```
web_site_code/
├── projects/          # Individual website projects (work here)
│   └── [project-name]/
│       ├── src/
│       ├── public/
│       ├── README.md  # Read this first!
│       └── ...
├── assets/            # Shared resources
│   ├── images/
│   ├── fonts/
│   ├── icons/
│   └── media/
├── templates/         # Starting templates (copy, don't modify)
├── docs/              # General documentation
└── README.md          # Start here

```

## Decision Making

When uncertain:
1. Check project-specific README.md
2. Check root README.md
3. Look at similar existing projects
4. Follow common web development conventions
5. Ask for clarification if still unclear

## Common Pitfalls to Avoid

- ❌ Don't create files in the repository root (except documentation)
- ❌ Don't mix multiple projects in one directory
- ❌ Don't commit build artifacts or dependencies
- ❌ Don't modify templates when working on a project
- ❌ Don't create project-specific assets in shared assets/
- ✅ Do keep projects isolated and self-contained
- ✅ Do use descriptive names for everything
- ✅ Do document your changes
- ✅ Do follow existing patterns in the codebase
