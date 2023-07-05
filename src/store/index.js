import { createStore } from 'vuex'

export default createStore({
  state: {
    tests: null,
    projects: null,
    experience: null,

  },
  mutations: {
    setTests: (state, tests) =>{
      state.tests = tests;
    },
    setProjects: (state, projects) =>{
      state.projects = projects;
    },
    setExperience: (state, experience) =>{
      state.experience = experience;
    },
  },
  actions: {
    getTests: async (context) => {
      fetch("http://localhost:3000/tests")
        .then((res) => res.json())
        .then((tests) => context.commit("setTests", tests));
    },
    getProjects: async (context) => {
      fetch("http://localhost:3000/projects")
        .then((res) => res.json())
        .then((projects) => context.commit("setProjects", projects));
    },
    getExperience: async (context) => {
      fetch("http://localhost:3000/experience")
        .then((res) => res.json())
        .then((experience) => context.commit("setExperience", experience));
    },
  },

})
