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
      longDescription: 'Strona internetowa K20 Apartamenty - służy do zapoznania się z ofertą apartamentów, oraz do ich rezerwacji. Jest to projekt komercyjny, który wykonałem samodzielnie od A do Z na zamówienie dla projektu Apartamenty K20.\n\nStrona internetowa jest w pełni responsywna, co oznacza, że wygląda dobrze na każdym urządzeniu. Jest również zoptymalizowana pod kątem użyteczności, ponieważ jest podpięta pod CMS Sanity. Każdy element strony można zmienić w admin panelu Sanity, dzięki czemu strona jest bardzo łatwa w obsłudze i nie wymaga wiedzy technicznej lub obecności developa przy zmianach kontentu. CMS został podpięty z myślą o to, że wygląd, opis i wyposażenie apartamentów może się często zmieniać, więc zmiana lub podmiana kontentu powinna być szybka i łatwa.\n\nStrona internetowa jest również zoptymalizowana pod kątem SEO, ponieważ jest hostowana na Firebase Hosting, który jest szybki i wydajny. Podpięte zostały również meta tagi, które są niezbędne do pozycjonowania strony w wyszukiwarce Google. Jest to projekt komercyjny, więc kod źródłowy nie jest dostępny publicznie.',
      sourceCodeUrl: '',
      usedTechnologies: [
        {
          name: 'Vue',
          description: 'został użyty jako główny frontend framework do tworzenia reaktywności i interfejsu użytkownika.',
        },
        {
          name: 'Vuetify',
          description: 'jest to biblioteka komponentów Material Design dla Vue.js. Została wybrana, ponieważ zawiera wiele gotowych komponentów, które można wykorzystać w aplikacji. Dzięki temu, napisanie aplikacji było szybsze i łatwiejsze.',
        },
        {
          name: 'Firebase',
          description: 'został wykorzystany do hostowania strony internetowej. Został wybrany, ponieważ jest szybki i wydajny. Dzięki temu, że jest to usługa, która jest hostowana w chmurze, nie trzeba się martwić o serwer, co zmniejsza koszty utrzymania aplikacji.',
        },
        {
          name: 'Sanity',
          description: 'został wykorzystany jako CMS (Content Management System). Został wybrany, ponieważ posiada dobrą kompatybilność z Vue.js i jest łatwy w obsłudze. Także posiada darmowy plan, który jest wystarczający do obsługi strony internetowej.',
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
      longDescription: 'Platforma edukacyjna Tutore. Zawiera wiele funkcjonalności, takich jak: testy, lekcje, słówka, gramatyka, bot edukacyjny itd.\n\nProjekt ten był wykonywany dla firmy w której pracuje Tutore Poland. Jest to wspólny projekt który był robiony w zespole. Moją główną rolą w tym projekcie na froncie było: tworzenie pojedynczych podstron, poprawa interfejsu użytkownika i dodawanie responsywności do stron stworzonych przez mnie i moich kolegów, podpięcie pojedynczych komponentów pod CMS Strapi, i inne.\n\nNa backendzie moją główną rolą było: tworzenie endpointów pod konkretne wymagania, modyfikacja istniejących endpointów, tworzenie seedów pod migracje bazy, tworzenie nowych modeli, interfejsów, helperów, i inne. Także moją rolą było podpięcie integracji zewnętrznych takich jak Salesmanago (serwis marketingowy), Wordwall (serwis z quizami pod lekcje), Sendgrid (serwis e-mailowy), SerwerSMS (serwis smsowy). Projekt ten stale się rozwija, więc cały czas mogą się pojawiać nowe rzeczy.\n\nPlatforma ta służy do nauki różnych przedmiotów takich jak matematyka, programowanie, języki obce, rysunek, gitara, i wiele innych. Uczeń ma dostępne na platformie materiały, quizy, prace domowe, a także może wchodzić na zajęcia, sprawdzać swoję osiągnięcia i wiele innych czynności. Jest to projekt komercyjny, więc kod źródłowy nie jest dostępny publicznie.',
      sourceCodeUrl: '',
      usedTechnologies: [
        {
          name: 'Vue',
          description: 'został użyty jako główny frontend framework do tworzenia reaktywności i interfejsu użytkownika.',
        },
        {
          name: 'Vuetify',
          description: 'jest to biblioteka komponentów Material Design dla Vue.js. Została wybrana, ponieważ zawiera wiele gotowych komponentów, które można wykorzystać w aplikacji. Dzięki temu, napisanie aplikacji było szybsze i łatwiejsze.',
        },
        {
          name: 'Firebase',
          description: 'został wykorzystany do autentykacji użytkowników na platformie (logowanie/rejestracja/zmiana hasła itd)',
        },
        {
          name: 'NuxtJS',
          description: 'jest używany jako drugorzędny framework na frontendzie. Został wybrany na potrzeby SEO, ponieważ jest to framework, który renderuje aplikację po stronie serwera.',
        },
        {
          name: 'NestJS',
          description: 'jest używany jako główny framework na backendzie.',
        },
        {
          name: 'Knex',
          description: 'biblioteka jest używana jako główna biblioteka do frameworka NestJS.',
        },
        {
          name: 'TypeScript',
          description: 'został użyty jako główny język programowania na froncie i na backendzie. Został wybrany, ponieważ jest to język, który jest typowany statycznie, co pozwala na szybsze wykrywanie błędów.',
        },
        {
          name: 'Strapi',
          description: 'został użyty jako CMS (Content Management System). Został wybrany, ponieważ posiada dobrą kompatybilność z Vue.js, jest funkcjonalny i łatwy w obsłudze.',
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
      longDescription: 'Strona partnerska Tutore. Jest to projekt który wykonałem dla firmy Tutore. Strona ta służy do zapoznania się co oferuje Tutore swoim partnerom, i jakie benefity mogą otrzymać potencjalni partnerzy. Na stronie jest prosty formularz, który jest podpięty pod arkusz google. Jest to projekt komercyjny, więc kod źródłowy nie jest dostępny publicznie.',
      sourceCodeUrl: '',
      usedTechnologies: [
        {
          name: 'Vue',
          description: 'został użyty jako główny frontend framework do tworzenia reaktywności i interfejsu użytkownika.',
        },
        {
          name: 'Vuetify',
          description: 'jest to biblioteka komponentów Material Design dla Vue.js. Została wybrana, ponieważ zawiera wiele gotowych komponentów, które można wykorzystać w aplikacji. Dzięki temu, napisanie aplikacji było szybsze i łatwiejsze.',
        },
        {
          name: 'Firebase',
          description: 'został wykorzystany do hostowania strony internetowej. Został wybrany, ponieważ jest szybki i wydajny. Dzięki temu, że jest to usługa, która jest hostowana w chmurze, nie trzeba się martwić o serwer, co zmniejsza koszty utrzymania aplikacji.',
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
      longDescription: 'Wewnętrzny CRM Tutore Poland. Służy do zarządzania klientami, lekcjami itd. Pozwala zapisywać klientów na lekcję, wysyłać im wiadomości sms, oraz emaile. Także umożliwia zarządzanie lekcjami, oraz tworzenie nowych lekcji.\n\nMoją rolą było podtrzymanie projektu, oraz dodanie nowych funkcjonalności zarówno na froncie jak i na backendzie. Projekt jest komercyjny, więc kod źródłowy nie jest dostępny publicznie.',
      sourceCodeUrl: '',
      usedTechnologies: [
        {
          name: 'Vue',
          description: 'został użyty jako główny frontend framework do tworzenia reaktywności i interfejsu użytkownika.',
        },
        {
          name: 'Vuetify',
          description: 'jest to biblioteka komponentów Material Design dla Vue.js. Została wybrana, ponieważ zawiera wiele gotowych komponentów, które można wykorzystać w aplikacji. Dzięki temu, napisanie aplikacji było szybsze i łatwiejsze.',
        },
        {
          name: 'Firebase',
          description: 'został wykorzystany do hostowania.',
        },
        {
          name: 'Express',
          description: 'jest używany jako główny framework na backendzie.',
        },
        {
          name: 'MySQL',
          description: 'został użyty jako główny system bazodanowy.',
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
      longDescription: 'Pierwszy projekt, który wykonałem w Vue.js. Jest to aplikacja, która pozwala na dodawanie książek do koszyka. Aplikacja jest bardzo prosta, ale pozwoliła mi na zapoznanie się z podstawowymi konceptami Vue.js, a także z podstawami CSS, JavaScript.Także projekt posłużył do zapoznaniania się z podstawami RestAPI, ponieważ książki są pobierane z zewnętrznego API metodą fetch().\n\nFunkcjonalność pozwala na dodawanie książek do koszyka, oraz usuwanie i zmienianie ilości produktów bezpośrednio w koszyku. Na stronie podsumowania została dodana walidacja do formy, captcha, a także przez API banku został podłączony konwertwer z USD na PLN. Projekt jest dostępny publicznie na githubie.',
      sourceCodeUrl: 'https://github.com/n0rahh/books_project.git',
      usedTechnologies: [
        {
          name: 'Vue',
          description: 'został użyty jako główny frontend framework do tworzenia reaktywności i interfejsu użytkownika.',
        },
        {
          name: 'Vuex',
          description: 'służy do zarządzania stanem aplikacji. W storze pobierają się książki z zewnętrznego API, a następnie są wyświetlane na stronie. Także w storze znajduje się koszyk, w którym są przechowywane książki, które użytkownik dodał do koszyka i inne.',
        },
        {
          name: 'CSS',
          description: 'został użyty jako główny język stylowania. W tym projekcie wykorzystałem podstawowe koncepty CSS, takie jak selektory, flexbox, itd.',
        },
        {
          name: 'JavaScript',
          description: 'został użyty jako główny język programowania logiki na froncie.',
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
      longDescription: 'Portfolio, które widzisz przed sobą. Daną stronę stronę stworzyłem w celu zaprezentowania moich umiejętności, oraz projektów. W tym projeckie miałem za zadanie sprawdzić technologie i18n, która umożliwia tłumaczenia stron internetowych. Strona jest dostępna w trzech językach: angielskim, polskim, ukrainskim. \n\nProjekt jest dostępny publicznie na githubie. ',
      sourceCodeUrl: 'https://github.com/n0rahh/my-portfolio.git',
      usedTechnologies: [
        {
          name: 'Vue',
          description: 'został użyty jako główny frontend framework do tworzenia reaktywności i interfejsu użytkownika.',
        },
        {
          name: 'Vuetify',
          description: 'jest to biblioteka komponentów Material Design dla Vue.js. Została wybrana, ponieważ zawiera wiele gotowych komponentów, które można wykorzystać w aplikacji. Dzięki temu, napisanie aplikacji było szybsze i łatwiejsze.',
        },
        {
          name: 'i18n',
          description: 'został użyty do tłumaczenia strony na trzy języki: angielski, polski, ukraiński.',
        },
        {
          name: 'Firebase',
          description: 'został wykorzystany do hostowania strony internetowej. Został wybrany, ponieważ jest szybki i wydajny. Dzięki temu, że jest to usługa, która jest hostowana w chmurze, nie trzeba się martwić o serwer, co zmniejsza koszty utrzymania aplikacji.',
        },
        {
          name: 'AOS',
          description: 'została użyta do animowania elementów na stronie.',
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