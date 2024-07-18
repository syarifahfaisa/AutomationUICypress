const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://flip-sample-form.onrender.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
