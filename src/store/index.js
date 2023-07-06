import { createStore } from "vuex";

export default createStore({
  state: {
    testis: null,
    projects: null,
    experience: null,
  },
  mutations: {
    setTestis: (state, testis) => {
      state.testis = testis;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setExperience: (state, experience) => {
      state.experience = experience;
    },
  },
  actions: {
    getTestis: async (context) => {
      try {
        fetch("https://olwethub.github.io/db.json")
          .then((res) => res.json())
          .then((testis) => {
            let {testi} = testi;
            context.commit("setTestis", testis);
          });
      } catch (error) {
        console.error(error);
      }
    },
    getProjects: async (context) => {
      try {
        fetch("https://olwethub.github.io/db.json")
          .then((res) => res.json())
          .then((project) => {
            let { projects } = project;
            context.commit("setProjects", projects);
          });
      } catch (error) {
        console.error(error);
      }
    },
    // getExperience: async (context) => {
    //   try {
    //     fetch("https://olwethub.github.io/db.json")
    //     .then((res) => res.json())
    //     .then((experience) => {
    //       let {experience} = experience;
    //       context.commit("setExperience", experience);
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  },
});

// getProjects: async (context) => {
//   fetch("http://localhost:3000/projects")
//     .then((res) => res.json())
//     .then((projects) => context.commit("setProjects", projects));
// },
