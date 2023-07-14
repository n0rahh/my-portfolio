import { ref } from 'vue';
import i18n from '@/i18n';

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
        {
          icon: 'sass.svg',
          name: 'Sass',
        },
      ],
      longDescription: ref(i18n.global.t('PROJECTS.K20_APARTMENTS.DESCRIPTION')),
      longDescriptionValue: 'K20_APARTMENTS',
      sourceCodeUrl: '',
      usedTechnologies: [
        {
          name: 'Vue',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUE'),
          value: 'VUE',
        },
        {
          name: 'Vuetify',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUETIFY'),
          value: 'VUETIFY',
        },
        {
          name: 'Firebase',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.FIREBASE'),
          value: 'FIREBASE',
        },
        {
          name: 'Sanity',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.SANITY'),
          value: 'SANITY',
        },
      ],
      images: ['k20apartamenty-home.jpg','k20apartamenty-gallery.jpg', 'k20apartamenty-contact.jpg'],
    },
    2: {
      title: 'Tutore',
      shortDescription: [
        {
          icon: 'vue-js.svg',
          name: 'Vue',
        },
        {
          icon: 'nuxtjs.svg',
          name: 'NuxtJS',
        },
        {
          icon: 'typescript.svg',
          name: 'TypeScript',
        },
        {
          icon: 'nestjs.svg',
          name: 'NestJS',
        },
      ],
      longDescription: i18n.global.t('PROJECTS.TUTORE.DESCRIPTION'),
      longDescriptionValue: 'TUTORE',
      sourceCodeUrl: '',
      usedTechnologies: [
        {
          name: 'Vue',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUE'),
          value: 'VUE',
        },
        {
          name: 'Vuetify',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUETIFY'),
          value: 'VUETIFY',
        },
        {
          name: 'Firebase',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.FIREBASE_AUTH'),
          value: 'FIREBASE_AUTH',
        },
        {
          name: 'NuxtJS',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.NUXT'),
          value: 'NUXT',
        },
        {
          name: 'NestJS',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.NEST'),
          value: 'NEST',
        },
        {
          name: 'Knex',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.KNEX'),
          value: 'KNEX',
        },
        {
          name: 'TypeScript',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.TYPESCRIPT'),
          value: 'TYPESCRIPT',
        },
        {
          name: 'Strapi',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.STRAPI'),
          value: 'STRAPI',
        },
      ],
      images: ['tutore-home.jpg','tutore-dashboard.jpg', 'tutore-quizz.jpg'],
    },
    3: {
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
        {
          icon: 'css.svg',
          name: 'CSS',
        },
      ],
      longDescription: i18n.global.t('PROJECTS.TUTORE_PARTNERS.DESCRIPTION'),
      longDescriptionValue: 'TUTORE_PARTNERS',
      sourceCodeUrl: '',
      usedTechnologies: [
        {
          name: 'Vue',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUE'),
          value: 'VUE',
        },
        {
          name: 'Vuetify',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUETIFY'),
          value: 'VUETIFY',
        },
        {
          name: 'Firebase',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.FIREBASE'),
          value: 'FIREBASE',
        },
      ],
      images: ['tutore-partners-home.jpg'],
    },
    4: {
      title: 'CRM',
      shortDescription: [
        {
          icon: 'vue-js.svg',
          name: 'Vue',
        },
        {
          icon: 'mysql.svg',
          name: 'MySQL',
        },
        {
          icon: 'express.svg',
          name: 'Express',
        },
        {
          icon: 'firebase.svg',
          name: 'Firebase',
        },
      ],
      longDescription: i18n.global.t('PROJECTS.CRM_TUTORE.DESCRIPTION'),
      longDescriptionValue: 'CRM_TUTORE',
      sourceCodeUrl: '',
      usedTechnologies: [
        {
          name: 'Vue',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUE'),
          value: 'VUE',
        },
        {
          name: 'Vuetify',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUETIFY'),
          value: 'VUETIFY',
        },
        {
          name: 'Firebase',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.FIREBASE'),
          value: 'FIREBASE',
        },
        {
          name: 'Express',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.EXPRESS'),
          value: 'EXPRESS',
        },
        {
          name: 'MySQL',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.MYSQL'),
          value: 'MYSQL',
        },
      ],
      images: ['crm-home.jpg', 'crm-parent.jpg', 'crm-sms.jpg'],
    },
    5: {
      title: 'Books shop',
      shortDescription: [
        {
          icon: 'vue-js.svg',
          name: 'Vue',
        },
        {
          icon: 'vue-js.svg',
          name: 'Vuex',
        },
        {
          icon: 'css.svg',
          name: 'CSS',
        },
        {
          icon: 'javascript.svg',
          name: 'JavaScript',
        },
      ],
      longDescription: i18n.global.t('PROJECTS.BOOKS_SHOP.DESCRIPTION'),
      longDescriptionValue: 'BOOKS_SHOP',
      sourceCodeUrl: 'https://github.com/n0rahh/books_project.git',
      usedTechnologies: [
        {
          name: 'Vue',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUE'),
          value: 'VUE',
        },
        {
          name: 'Vuex',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUEX'),
          value: 'VUEX',
        },
        {
          name: 'CSS',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.CSS'),
          value: 'CSS',
        },
        {
          name: 'JavaScript',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.JAVASCRIPT'),
          value: 'JAVASCRIPT',
        },
      ],
      images: ['books-home.jpg', 'books-cart.jpg', 'books-summary.jpg'],
    },
    6: {
      title: 'My portfolio',
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
          icon: 'i18n.svg',
          name: 'i18n',
        },
        {
          icon: 'firebase.svg',
          name: 'Firebase',
        },
      ],
      longDescription: i18n.global.t('PROJECTS.MY_PORTFOLIO.DESCRIPTION'),
      longDescriptionValue: 'MY_PORTFOLIO',
      sourceCodeUrl: 'https://github.com/n0rahh/my-portfolio.git',
      usedTechnologies: [
        {
          name: 'Vue',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUE'),
          value: 'VUE',
        },
        {
          name: 'Vuetify',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.VUETIFY'),
          value: 'VUETIFY',
        },
        {
          name: 'i18n',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.I18N'),
          value: 'I18N',
        },
        {
          name: 'Firebase',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.FIREBASE_2'),
          value: 'FIREBASE_2',
        },
        {
          name: 'AOS',
          description: i18n.global.t('PROJECTS.TECHNOLOGIES_DESCRIPTION.AOS'),
          value: 'AOS',
        },
      ],
      images: ['portfolio.jpg'],
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