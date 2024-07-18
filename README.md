# AutomationUICypress
Preparation:
- make sure you have node.js and npm installed
  - if not, you can download it from here https://nodejs.org/en/download/prebuilt-installer
- install cypress from node:
  -  change the directory to your project path
  -  npm init
  -  npm install cypress

How to run:
  - npx cypress open
  - select browser
  - select file to run

3 main files in this repo:
- test case : cypress/e2e/submissionui/form.cy.js
- actions : cypress/support/pageAction/formAction.js
- assertions : cypress/support/pageAssertion/formAssertion.js
