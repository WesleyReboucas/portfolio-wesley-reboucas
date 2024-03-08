export interface WorkImageItemProps {
  src: string
  alt: string
  ribbon?: string
  githubLink?: string
  siteLink?: string
}

export const workImages: WorkImageItemProps[] = [
  {
    src: '/work/CinetopiaBanner3x.png',
    alt: 'Cinetopia',
    ribbon: 'IOS',
    githubLink: 'https://github.com/WesleyReboucas/Cinetopia',
    siteLink: '',
  },
  {
    src: '/work/VollmedBanner3x.png',
    alt: 'Vollmed',
    ribbon: '',
    githubLink: 'https://github.com/WesleyReboucas/Vollmed',
    siteLink: '',
  },
  {
    src: '/work/ChefDeliveryBanner3x.png',
    alt: 'ChefDelivery',
    ribbon: '',
    githubLink: 'https://github.com/WesleyReboucas/ChefDelivery',
    siteLink: '',
  },
  {
    src: '/work/HappyBanner3x.png',
    alt: 'Happy',
    ribbon: '',
    githubLink: 'https://github.com/WesleyReboucas/Happy',
    siteLink: '',
  },
  {
    src: '/work/ProffyBanner3x.png',
    alt: 'Proffy',
    ribbon: '',
    githubLink: 'https://github.com/WesleyReboucas/Proffy',
    siteLink: '',
  },
  {
    src: '/work/SmartBankBanner3x.png',
    alt: 'SmartBank',
    ribbon: '',
    githubLink: 'https://github.com/WesleyReboucas/SmartBank',
    siteLink: '',
  },
  {
    src: '/work/AluraViagensBanner3x.png',
    alt: 'AluraViagens',
    ribbon: '',
    githubLink: 'https://github.com/WesleyReboucas/AluraViagens',
    siteLink: '',
  },
  {
    src: '/work/PlantManagerBanner3x.png',
    alt: 'PlantManager',
    ribbon: '',
    githubLink: 'https://github.com/WesleyReboucas/PlantManager',
    siteLink: '',
  },
  {
    src: '/work/JornadaMilhasBanner3x.png',
    alt: 'JornadaMilhas',
    ribbon: '',
    githubLink: 'https://github.com/WesleyReboucas/JornadaMilhas',
    siteLink: '',
  },
  {
    src: '/work/iQuizBanner3x.png',
    alt: 'iQuiz',
    ribbon: '',
    githubLink: 'https://github.com/WesleyReboucas/iQuiz',
    siteLink: '',
  },
]

export interface ExperiencesProps {
  title: string
  company: string
  companyLink: string
  employmentType: string
  duration: string
  initialDate: string
  finalDate: string
  location: string
  skills: string
  responsibilities: string
}

export const experiences = [
  {
    title: 'Junior Software Developer',
    company: 'Kinvo',
    companyLink: 'https://www.linkedin.com/company/kinvoapp/',
    employmentType: 'Full-time',
    initialDate: '2022',
    finalDate: '2023',
    duration: '1 year 1 month',
    location: 'Salvador, Bahia, Brazil',
    skills:
      'React Native, Typescript, Jest, Redux, Styled-Components, Git, SCRUM and JIRA',
    responsibilities:
      "Development of the company's mobile application; Responsible for developing features and maintaining the application; React Native, Jest, TypeScript, Redux; Refactorings and implemented features helped maintainability in the app following the proposed design. Refactoring of the Services Layer, Implementation of the Investment Portfolio Goal, and Analysis of Graphic Libraries.",
  },
  {
    title: 'Systems Engineer',
    company: 'Ford Motor Company',
    companyLink: 'https://www.linkedin.com/company/ford-motor-company/',
    employmentType: 'Intern',
    initialDate: '2021',
    finalDate: '2022',
    duration: '1 year',
    location: 'Salvador, Bahia, Brazil',
    skills: 'Angular JS, JIRA, Git, Microsoft Power Apps and Microsoft Office',
    responsibilities:
      'Creation of a web page to assist in sharing processes and documentation for the entire System Engineering department. Using AngularJs, NodeJs, and PostegreSql; Assist in the development (Front-end) of the carpooling application for employees. Monitoring the construction processes of car feature documentation and horizontally assisting teams in order to share documentation; Designed pages increased page views.',
  },
  {
    title: 'Mobile Developer',
    company: 'Crea-Ba',
    companyLink: 'https://www.linkedin.com/company/crea-ba/',
    employmentType: 'Intern',
    initialDate: '2020',
    finalDate: '2021',
    duration: '1 year 7 months',
    location: 'Salvador, Bahia',
    skills: 'Ionic Framework, TypeScript, AngularJS, Git and WordPress',
    responsibilities:
      'Assist in the development of the mobile inspection application; Responsible for the front-end of the application; Ionic was used for the interface development; UX changes in the interface improved the app flow and increased app usage and acceptance.',
  },
  {
    title: 'Technology Monitor',
    company: 'Antônio Vieira School',
    companyLink: 'https://www.linkedin.com/school/colegioantoniovieira/',
    employmentType: 'Full-time',
    initialDate: '2019',
    finalDate: '2019',
    duration: '7 months',
    location: 'Salvador, Bahia',
    skills:
      'Arduino, C, C++, Scratch for Arduino(S4A), Processing and App Inventor',
    responsibilities:
      'Technology monitor in the school teaching staff; Responsible for creating, teaching, and adapting classes based on the methodology of the company Nave a Vela; Classes taught included Arduino, Scratch for Arduino(S4A), Processing, and App Inventor; Adapted classes for better interdisciplinary were recorded and used as a model.',
  },
  {
    title: 'Front-end Developer',
    company: 'SolidarEasy',
    companyLink: 'https://www.linkedin.com/company/solidareasy/',
    employmentType: 'Intern',
    initialDate: '2017',
    finalDate: '2018',
    duration: '10 months',
    location: 'Salvador, Bahia',
    skills: 'React.js, JavaScript, Linux, Git, and WordPress',
    responsibilities:
      'Assist in web development on the company page; Responsible for front-end and backend testing; React Js for the front-end of the official page and Jest for backend data entry testing; Designed pages increased page views.',
  },
]
