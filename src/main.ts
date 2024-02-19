import { createApp } from 'vue';
import App from './App.vue';
import routes from '~pages';
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/components/Page404.vue'; 
import { createHead } from "@unhead/vue"
import './assets/css/style.css'
import V3ScrollLock from 'v3-scroll-lock'
import { createI18n } from 'vue-i18n';
async function loadLocaleMessages(): Promise<Record<string, any>> {
  const localesContext = import.meta.glob('./locales/**/*.json', { eager: true });
  const messages: Record<string, any> = {};

  (Object as any).entries(localesContext).forEach(([key, value]: [string, any]) => {
    const matched = key.match(/\.\/locales\/(.+)\/(.+)\.json$/);
    if (matched && matched.length > 2) {
      const locale = matched[1];
      const page = matched[2];
      messages[locale] = messages[locale] || {};
      messages[locale][page] = value.default;
    }
  });

  return messages;
}
function getBrowserLocale(options = {}) {
  const defaultOptions = { countryCodeOnly: false };
  const opt = { ...defaultOptions, ...options };
  const navigatorLocale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;

  if (!navigatorLocale) {
    return undefined;
  }

  const trimmedLocale = opt.countryCodeOnly ? navigatorLocale.trim().split(/-|_/)[0] : navigatorLocale.trim();

  return trimmedLocale;
}

const i18n = createI18n({
  locale: getBrowserLocale({ countryCodeOnly: true }) || 'en', 
  fallbackLocale: 'en',
  messages: await loadLocaleMessages(), 
});

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    ...routes,
    {
      path: '/:catchAll(.*)', 
      component: NotFound,
    },
  ],
   scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }}, 
});

const app = createApp(App);
const head = createHead()
app.use(router);
app.use(head);
app.use(i18n);
app.use(V3ScrollLock, {});
app.mount('#app');


