jasmine "jasmine
    "test": "npm run build && npm run jasmine",
    "start": "npx tsc && node dist/index.js",
    "build": "npx tsc",
    "dev": "nodemon src/index.ts",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
type "npm install" to install dependancies
type "npm run build" to build the project from ts to js
type "npm run start" to build and run the project
type "npm run dev" to run the project in development mode (nodemon)
type "npm run lint" to run eslinter and detect linting errors
type "npm run lint:fix" to run eslinter and fix the errors

 http://localhost:3000/api/images?fileName=filename&width=width&height=height