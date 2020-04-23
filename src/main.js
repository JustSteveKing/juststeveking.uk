import DefaultLayout from '~/layouts/Default.vue';
import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter.vue';

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('site-header', SiteHeader);
  Vue.component('site-footer', SiteFooter);
  Vue.use(require('vue-moment'));
  head.htmlAttrs = { lang: 'en', class: 'h-full' };
  head.bodyAttrs = { class: 'antialiased' };
}

window.$crisp = [];
window.CRISP_WEBSITE_ID = "491dbe8b-afd0-4f6e-942c-68daba40ce11";
(function () {
  let d = document;
  let s = d.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
})();


