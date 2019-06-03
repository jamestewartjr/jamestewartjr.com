const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-service-js": hot(preferDefault(require("/Users/jamesstewart/Code/jamestewartjr.com/src/templates/service.js"))),
  "component---src-templates-team-js": hot(preferDefault(require("/Users/jamesstewart/Code/jamestewartjr.com/src/templates/team.js"))),
  "component---src-templates-testimonial-js": hot(preferDefault(require("/Users/jamesstewart/Code/jamestewartjr.com/src/templates/testimonial.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jamesstewart/Code/jamestewartjr.com/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/404.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/contact/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/index.js"))),
  "component---src-pages-services-index-js": hot(preferDefault(require("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/services/index.js"))),
  "component---src-pages-team-index-js": hot(preferDefault(require("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/team/index.js"))),
  "component---src-pages-testimonials-index-js": hot(preferDefault(require("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/testimonials/index.js")))
}

