import Home from './views/Home.vue'
import Wizard from './views/Wizard.vue';
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/wizard', component: Wizard, meta: { title: 'Wizard' } },
  { path: '/:path(.*)', component: NotFound },
]
