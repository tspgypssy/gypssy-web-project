# DropForm
This repo contains code from the existing dropform.xyz repo. It is intentionally added to make the development process muc faster than starting from scratch.

## Contributing
In `tailwind.config.js` file you can see that we have added the new `super` color prefix - this is the new palette. Use this going forward. DO NOT USE THE `palette` prefix as it refers to the old color palette. As the new designs is implemented across the app - we should be good to delete the colors under `palette` prefix.

## Pages containing new design:
Use these pages to refer how the new design is implemented
```
1. pages/index.tsx
2. pages/club/[clubSlug]/index.tsx
3. pages/club/[clubSlug]/stream/[streamSlug]/index.tsx
```
