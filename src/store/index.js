import { createStore } from 'vuex'

export default createStore({
  state: {
    testis: null,
    projects: null,
    experience: null,

  },
  mutations: {
    setTestis: (state, testis) =>{
      state.testis = testis;
    },
    setProjects: (state, projects) =>{
      state.projects = projects;
    },
    setExperience: (state, experience) =>{
      state.experience = experience;
    },
  },
  actions: {
    getTutorials: async (context) => {
      fetch("http://localhost:3000/testis")
        .then((res) => res.json())
        .then((testis) => context.commit("setTestis", testis));
    },
    getTutorials: async (context) => {
      fetch("http://localhost:3000/projects")
        .then((res) => res.json())
        .then((projects) => context.commit("setProjects", projects));
    },
    getTutorials: async (context) => {
      fetch("http://localhost:3000/experience")
        .then((res) => res.json())
        .then((experience) => context.commit("setExperience", experience));
    },
  },

})
