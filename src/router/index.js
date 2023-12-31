export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from "../views/AboutView.vue"
import resume from "../views/ResumeView.vue"
import Skills from "../components/Skills.vue"
import projects from "../views/ProjectsView.vue"
import testimonials from "../views/TestimonialsView.vue"
import contact from "../views/ContactView.vue"

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
    component: projects,
    meta: {section: "project"}
  },
  {
    path: '/testi',
    name: 'testi',
    component: testimonials,
    meta: {section: "testimonials"}
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact,
    meta: {section: "contact"}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



