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

  // add prismjs theme
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism-tomorrow.min.css'
  });
}

