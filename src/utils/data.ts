export interface ImageItemProps {
  src: string
  alt: string
  ribbon?: string
  githubLink?: string
  siteLink?: string
}

export const images: ImageItemProps[] = [
  {
    src: '/images/vollmed-banner.png',
    alt: 'Image 1',
    ribbon: 'IOS',
    githubLink: 'https://github.com/link-1',
    siteLink: 'https://site-1.com',
  },
  {
    src: '/images/vollmed-github.jpeg',
    alt: 'Image 2',
    ribbon: 'React Native',
    githubLink: 'https://github.com/link-2',
    siteLink: 'https://site-2.com',
  },
  {
    src: '/images/vollmed-banner.png',
    alt: 'Image 2',
    ribbon: 'React Js',
    githubLink: 'https://github.com/link-2',
    siteLink: 'https://site-2.com',
  },
  {
    src: '/images/vollmed-github.jpeg',
    alt: 'Image 2',
    ribbon: 'Android',
    githubLink: 'https://github.com/link-2',
    siteLink: 'https://site-2.com',
  },
  {
    src: '/images/vollmed-banner.png',
    alt: 'Image 2',
    ribbon: 'NodeJs',
    githubLink: 'https://github.com/link-2',
    siteLink: 'https://site-2.com',
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
    title: 'Desenvolvedor de software júnior',
    company: 'Kinvo',
    companyLink: 'https://www.linkedin.com/company/kinvoapp/',
    employmentType: 'Tempo integral',
    initialDate: '2022',
    finalDate: '2023',
    duration: '1 ano 1 mês',
    location: 'Salvador, Bahia, Brasil',
    skills:
      'React Native, Typescript, Jest, Redux, Styled-Components, Git, SCRUM and JIRA',
    responsibilities:
      'Desenvolvimento do aplicativo mobile da empresa; Responsável pelo desenvolvimento de features e manutenção do aplicativo; React Native, Jest, TypeScript, Redux; Refatorações e features implementadas ajudaram na manutenibilidade no app seguindo o design proposto. Refatoração da Camada de Serviços, Implementação da Meta da Carteira de Investimento e Análise de Bibliotecas Gráficas.',
  },
  {
    title: 'Engenheiro de sistema',
    company: 'Ford Motor Company',
    companyLink: 'https://www.linkedin.com/company/ford-motor-company/',
    employmentType: 'Estágio',
    initialDate: '2021',
    finalDate: '2022',
    duration: '1 ano',
    location: 'Salvador, Bahia, Brasil',
    skills: 'Angular JS, JIRA, Git, Microsoft Power Apps and Microsoft Office',
    responsibilities:
      'Criação de uma página web para auxiliar no compartilhamento de processos e documentações para todo o setor de System Engineering. Utilizando AngularJs, NodeJs e PostegreSql; Auxilio no desenvolvimento (Front-end) do aplicativo de carona para funcionários. Acompanhar os processos de construção de documentações das features dos carros e auxiliar, de forma horizontal, as equipes com intuito de compartilhar documentação; Design construído aumentaram os acessos a página.',
  },
  {
    title: 'Desenvolvedor Mobile',
    company: 'Crea-Ba',
    companyLink: 'https://www.linkedin.com/company/crea-ba/',
    employmentType: 'Estágio',
    initialDate: '2020',
    finalDate: '2021',
    duration: '1 ano 7 meses',
    location: 'Salvador, Bahia',
    skills: 'Ionic Framework, TypeScript, AngularJS, Git and WordPress',
    responsibilities:
      'Auxiliar no desenvolvimento do aplicativo mobile de fiscalização; Responsável pelo front-end do aplicativo; Foi utilizado Ionic para o desenvolvimento da interface; Mudanças de UX da interface melhoraram o fluxo do app e aumentou o uso e aceitação do app.',
  },
  {
    title: 'Monitor de tecnologia',
    company: 'Colégio Antônio Vieira',
    companyLink: 'https://www.linkedin.com/school/colegioantoniovieira/',
    employmentType: 'Tempo integral',
    initialDate: '2019',
    finalDate: '2019',
    duration: '7 meses',
    location: 'Salvador, Bahia',
    skills:
      'Arduino, C, C++, Scratch for Arduino(S4A), Processing and App Inventor',
    responsibilities:
      'Monitor de tecnologia no corpo docente do colégio; Responsável por criar, ministrar e adaptar aulas com base na metodologia da empresa Nave a Vela; Foram ministradas aulas de Arduino, Scratch for Arduino(S4A), Processing e App Inventor; Aulas que adaptei para obter uma melhor interdisciplinaridade foram gravadas e utilizadas como modelo.',
  },
  {
    title: 'Desenvolvedor Front-end',
    company: 'SolidarEasy',
    companyLink: 'https://www.linkedin.com/company/solidareasy/',
    employmentType: 'Estágio',
    initialDate: '2017',
    finalDate: '2018',
    duration: '10 meses',
    location: 'Salvador, Bahia',
    skills: 'React.js, JavaScript, Linux, Git, and WordPress',
    responsibilities:
      'Auxiliar no desenvolvimento web na página da empresa; Responsável pelo front-end e testes no back-end; React Js para o front-end da página oficial e Jest para teste de entrada de dados no backend; Design construído aumentaram os acessos a página.',
  },
]
