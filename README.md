# Node.js w/ TypeScript Template
This repo is Node.js with TypeScript it uses `tsc` for bundling

# Installation
```
git clone https://github.com/constROD/nodejs-typescript-template
cd nodejs-typescript-template
npm install or yarn
```

# Usage
#### For development run api with `ts-node-dev` to watch api when changes occur. ####
```
npm run api:start or yarn api:start
```

#### For production it will build api first before deploying it to the server. ####
1. `dev:deploy` - it uses node to run. I used this in my local for testing if the build is success 
2. `prod:deploy`- it uses node also but with pm2 to run. I used this on my server if no errors occur.
```
npm run dev:deploy or yarn dev:deploy
```
```
npm run prod:deploy or yarn prod:deploy
```
