import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import UploadForm from '@/upload/components/UploadForm.vue'
import SettingList from '@/settings/components/SettingList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '*',
    redirect: '/upload'
  },
  {
    path: '/upload',
    name: 'Upload',
    component: UploadForm
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingList
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
