// gitprofile.config.js

const config = {
  github: {
    username: 'JunseoKim0103', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: 'JunseoKim0103',
    mastodon: '',
    facebook: '',
    instagram: 'junisfree_',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'hazzisss5249',
    dev: 'hazzisss5249',
    stackoverflow: 'hazzisss5249', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://github.com/JunseoKim0103',
    phone: '010-9015-1606',
    email: 'hazzisss5249@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/14tIS-J03VHhF4fIhsWe9e3xtxXl4SaLB/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Python',
    'sklearn',
    'Pytorch',
    'TensorFlow',
    'MongoDB',
    'C',
    'C++'
  ],
  experiences: [
    {
      company: 'SungKyunKwan Univ.',
      position: 'President of students in Statistics',
      from: 'March 2021',
      to: 'Feburary 2022',
      companyLink: 'https://github.com/JunseoKim0103',
    },
    {
      company: 'LikeLion',
      position: 'President of the LikeLion of Sungkyunkwan University',
      from: 'July 2021',
      to: 'Present',
      companyLink: 'https://likelion.university/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'SungKyunKwan Univ.',
      degree: 'Statistics',
      from: 'March 2019',
      to: 'Present',
    },
    {
      institution: 'SungKyunKwan Univ.',
      degree: 'Software',
      from: 'March 2020',
      to: 'Present',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '기상청 주관 2023 날씨 빅데이터 콘테스트',
      description:
        '기상에 따른 계절별 지면온도 산출 기술 개발" 분야에서 기상청장상(2등)을 수상한 프로젝트',
      imageUrl: 'https://i.namu.wiki/i/B6zVCv9160FMrjv3zrKwscCMUGpkJ8xdNlIO1A2Sww1zJaRiBQEydQlxefEqIcQpS7U_eSqBP2ydN21IMbmF1w.svg',
      link: 'https://github.com/23-Weather-Bigdata-Contest/23-Weather-Bigdata-Contest',
    },
    {
      title: 'ICT Enterprise Researcher–Presentation evaluation models with multimodal',
      description:
        '한국인의 발표 긴장 문제를 해결하기 위한 멀티모달 기반 발표 평가 모델 제작',
      imageUrl: 'https://mblogthumb-phinf.pstatic.net/20160923_68/by267_14745891820048o1gY_JPEG/%BC%BA%B1%D5%B0%FC%B4%EB%C7%D0%B1%B3%B7%CE%B0%ED-02.jpg?type=w800',
      link: 'https://github.com/ai-project-2023/Speech_grading_multimodal',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
