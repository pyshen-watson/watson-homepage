# How to deploy a react app

## Add homepage
Add this line in ```package.json``` :
```json
"homepage": "https://pyshen-watson.github.io/watson-homepage"
```
## Install gh-pages
```sh
npm install --save gh-pages
```
and add this two line in ```scripts``` in ```package.json```
```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```
it will looks like:
```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## Deploy this page
```sh
npm run deploy
```

## Set branch
Go to github repo, setting, and set gh-pages to the source.