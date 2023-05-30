const Projects = {
  projects: {
    1: {
      title: 'K20 Apartamenty',
      shortDescription: [
        {
          icon: 'vue-js.svg',
          name: 'Vue',
        },
        {
          icon: 'vuetify.svg',
          name: 'Vuetify',
        },
        {
          icon: 'firebase.svg',
          name: 'Firebase',
        },
      ],
      longDescription: 'Nasze apartamenty zostały urządzone schludnie i nowocześnie tak, aby czuli się Państwo komfortowo, a zarazem mogli przygotować smakowity posiłek w pełni wyposażonej kuchni. Wszystkie pokoje posiadają salon z aneksem kuchennym, oraz oddzielną łazienkę. Na całym terenie hotelu jest dostęp do Wi-Fi. Dodatkowo, w budynku znajduję się pralnia.',
      sourceCodeUrl: '',
      usedTechnologies: [
        {
          name: 'Vue',
          description: 'Vue.js jest to biblioteka JavaScript, która służy do tworzenia interfejsów użytkownika. Jest to biblioteka progresywna, co oznacza, że jest bardzo elastyczna i można ją wykorzystywać do tworzenia różnych typów interfejsów. Vue.js jest również bardzo lekki i łatwy do nauczenia się, co czyni go bardzo popularnym wśród programistów i początkujących.',
        },
        {
          name: 'Vuetify',
          description: 'Vuetify jest to biblioteka komponentów Material Design dla Vue.js. Zawiera wiele gotowych komponentów, które można wykorzystać w aplikacji. Dzięki temu, że jest to biblioteka, która opiera się na Material Design, aplikacja wygląda bardzo nowocześnie i schludnie.',
        },
        {
          name: 'Firebase',
          description: 'Firebase jest to platforma, która pozwala na tworzenie aplikacji mobilnych i webowych. Firebase oferuje wiele usług, które są bardzo przydatne podczas tworzenia aplikacji. W tym projekcie wykorzystałem Firebase do przechowywania danych, oraz do autoryzacji użytkowników.',
        },
      ],
    },
    2: {
      title: 'Tutore Partners',
      shortDescription: [
        {
          icon: 'vue-js.svg',
          name: 'Vue',
        },
        {
          icon: 'vuetify.svg',
          name: 'Vuetify',
        },
        {
          icon: 'firebase.svg',
          name: 'Firebase',
        },
      ],
      longDescription: 'Strona partnerska Tutore Poland. Służy do zapoznania się, wysłania ledów itd.',
      sourceCodeUrl: '',
      usedTechnologies: [
        {
          name: 'Vue',
          description: 'Vue.js jest to biblioteka JavaScript, która służy do tworzenia interfejsów użytkownika. Jest to biblioteka progresywna, co oznacza, że jest bardzo elastyczna i można ją wykorzystywać do tworzenia różnych typów interfejsów. Vue.js jest również bardzo lekki i łatwy do nauczenia się, co czyni go bardzo popularnym wśród programistów i początkujących.',
        },
        {
          name: 'Vuetify',
          description: 'Vuetify jest to biblioteka komponentów Material Design dla Vue.js. Zawiera wiele gotowych komponentów, które można wykorzystać w aplikacji. Dzięki temu, że jest to biblioteka, która opiera się na Material Design, aplikacja wygląda bardzo nowocześnie i schludnie.',
        },
        {
          name: 'Firebase',
          description: 'Firebase jest to platforma, która pozwala na tworzenie aplikacji mobilnych i webowych. Firebase oferuje wiele usług, które są bardzo przydatne podczas tworzenia aplikacji. W tym projekcie wykorzystałem Firebase do przechowywania danych, oraz do autoryzacji użytkowników.',
        },
      ],
    },
  },

  get allProjects() {
    return this.projects;
  },
  
  getProject(id) {
    return this.projects[id];
  },
};

export default Projects;