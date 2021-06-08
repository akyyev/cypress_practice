
# Cypress e2e testing


## Installation
To initialize project use command. It will automatically create package.json file.
```
npm init
```
Install Cypress
```
npm install cypress --save-dev
```
## Running Cypress
Create a script in the `package.json` file, 
```json
"script": {
    "test": "cypress open"
}
```
Run following command to run tests: 
```
npm run test
```