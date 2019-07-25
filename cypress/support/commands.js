// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// import login from './login';

// Cypress.Commands.add('bypassOnboarding', section => {
//     let key = '';
//     if (section === 'pdp') {
//       key = 'onboarding_pdpv2';
//     } else if (section === 'ncf') {
//       key = 'onboarding__dialog';
//     }
//     if (key !== '') {
//       var onboardingOpt = {
//         domain: '.tokopedia.com',
//         path: '/',
//         expiry: 1905501238000,
//       };
  
//       cy.setCookie(key, 'Mon%20May%2022%202030%2016%3A53%3A58%20GMT%2B0700%20(WIB)', onboardingOpt);
//     }
//   });

//   Cypress.Commands.add('login', login);

  // Command iframe 

  // Cypress.Commands.add('discardIframe', selector => {
  //   cy.get(`iframe${selector || ''}`).then(f => {
  //     f.contents()[0].__STALE = true
  //   })
  // })
  
  // Cypress.Commands.add('iframe', (selector, element) => {
  //   return cy
  //     .get(`iframe${selector || ''}`, {timeout: 10000})
  //     .should($iframe => {
  //       expect($iframe.contents()[0].__STALE).to.be.undefined
  //       expect($iframe.contents().find(element || 'body')).to.exist
  //     })
  //     .then($iframe => {
  //       var w = cy.wrap($iframe.contents().find('body'))
  //       // optional - add a class to the body to let the iframe know it's running inside the cypress
  //       // replaces window.Cypress because window.Cypress does not work from inside the iframe
  //       w.invoke('addClass', 'cypress')
  //       return w
  //     })
  // })
