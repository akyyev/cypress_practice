

//Any key/value you set in your configuration file (cypress.json by default) 
//under the env key will become an environment variable.
/*
{
  "projectId": "128076ed-9868-4e98-9cef-98dd8b705d75",
  "env": {
    "login_url": "/login",
    "products_url": "/products",
  }
}


Cypress.env()               // {login_url: '/login', products_url: '/products'}
Cypress.env('login_url')    // '/login'
Cypress.env('products_url') // '/products'


How to run cypress from command line:

    node_modules/.bin/cypress run --spec cypress/integration/my_studies/test13_e2e_POM_design_p.js 
                                  --env angular_practice_url=https://google.com 
                                  --headed;



*/