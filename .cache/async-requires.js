// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-service-js": () => import("/Users/jamesstewart/Code/jamestewartjr.com/src/templates/service.js" /* webpackChunkName: "component---src-templates-service-js" */),
  "component---src-templates-team-js": () => import("/Users/jamesstewart/Code/jamestewartjr.com/src/templates/team.js" /* webpackChunkName: "component---src-templates-team-js" */),
  "component---src-templates-testimonial-js": () => import("/Users/jamesstewart/Code/jamestewartjr.com/src/templates/testimonial.js" /* webpackChunkName: "component---src-templates-testimonial-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/jamesstewart/Code/jamestewartjr.com/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-index-js": () => import("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/contact/index.js" /* webpackChunkName: "component---src-pages-contact-index-js" */),
  "component---src-pages-index-js": () => import("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-services-index-js": () => import("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/services/index.js" /* webpackChunkName: "component---src-pages-services-index-js" */),
  "component---src-pages-team-index-js": () => import("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/team/index.js" /* webpackChunkName: "component---src-pages-team-index-js" */),
  "component---src-pages-testimonials-index-js": () => import("/Users/jamesstewart/Code/jamestewartjr.com/src/pages/testimonials/index.js" /* webpackChunkName: "component---src-pages-testimonials-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/jamesstewart/Code/jamestewartjr.com/.cache/data.json")

