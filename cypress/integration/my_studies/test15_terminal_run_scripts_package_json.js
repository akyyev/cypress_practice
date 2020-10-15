
/*

How to run cypress from command line:

    node_modules/.bin/cypress run --spec cypress/integration/my_studies/test13_e2e_POM_design_p.js 
                                  --env angular_practice_url=https://google.com 
                                  --headed;


To run tests from command line with shorter version or configured presets

    1. Go to package.json
    2. Then add custom scripts
    3. npm run <name of the script>
        Ex: npm run test -- --browser chrome
            npm run test --headed
            npm run --config 

*/