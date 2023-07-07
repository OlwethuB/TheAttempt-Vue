import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from "../views/AboutView.vue"
import resume from "../views/ResumeView.vue"
import Skills from "../components/Skills.vue"
import Projects from "../views/ProjectsView.vue"
import Testimonials from "../views/TestimonialsView.vue"
import Contact from "../views/ContactView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: about,
    meta: { section: "about" },
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
    meta: {section: "skills"}
  },
  {
    path: '/resume',
    name: 'resume',
    component: resume,
    meta: {section: "resume"}
  },
  {
    path: '/project',
    name: 'project',
    component: Projects,
    meta: {section: "project"}
  },
  {
    path: '/testi',
    name: 'testi',
    component: Testimonials,
    meta: {section: "testimonials"}
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {section: "contact"}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
