module.exports = {
  siteTitle: 'Borka\'s portfolio',
  siteDescription: `Borka Martin Orlovs Resume, CV, Portfolio`,
  keyWords: ['gatsbyjs', 'react', 'curriculum', 'CV', 'developer', 'Python', 'Django', 'Software', 'freelance', 'cloud'],
  authorName: 'Borka Martin Orlov',
  githubUsername: 'Borks',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Software developer who turned his hobby of coding into a job. Became interested in how software works way back in primary school. ` +
    `Do what you love, the saying goes, and you'll never work a day in your life. ` +
    `I also like mountain skiing.`,
  skills: [
    {
      name: 'Back-end (Python+Django / NodeJS)',
      level: 90
    },
    {
      name: 'Front-end (React, AngularJS(v1), Vue)',
      level: 70
    },
    {
      name: 'SQL (+ SqlAlchemy)',
      level: 90
    },
    {
      name: 'Cloud (Docker)',
      level: 60
    },
    {
      name: 'PHP (+ Laravel)',
      level: 90
    },
    {
      name: 'Objective-C',
      level: 30
    },
    {
      name: 'Java',
      level: 30
    },
    {
      name: 'Scala',
      level: 10
    },
    {
      name: 'R and Julia',
      level: 20
    },
    {
      name: 'GatsbyJS',
      level: 20
    },

  ],
  jobs: [
    {
      company: "Fieldforce Mobile Solutions OÜ",
      begin: {
        month: 'JAN',
        year: '2018'
      },
      duration: 'Ongoing',
      occupation: "Software project lead",
      description: "After returning from the military began leading the development team for a set of sales apps. Began using Docker and cloud technologies to provide " +
        "high-availability software as a service. Django-React stack"
    },
    {
      company: "Fieldforce Mobile Solutions OÜ",
      begin: {
        month: 'JUN',
        year: '2015'
      },
      duration: '1 Year 6 Months',
      occupation: "Full-stack developer",
      description: "Was hired for a full-time full-stack developer position to develop sales-software for the nordics. Django-Angular stack."
    },
    {
      company: "Tallinn",
      begin: {
        month: 'JUN',
        year: '2015'
      },
      duration: 'Ongoing',
      occupation: "Freelance web-developer",
      description: "Occasionally I'll venture into a sideproject, usually to learn a new web technology. " +
        "Quite like this site is to learn GatsbyJS, and www.aavikuemand.ee was to learn vue. I'll make a nicer list one day."
    },
    {
      company: "Fieldforce Mobile Solutions OÜ",
      begin: {
        month: 'MAR',
        year: '2015'
      },
      duration: '3 months',
      occupation: "Python tutor",
      description: "Taught Python part-time for Obj-c developers."
    },
    {
      company: "Viimsi primary school",
      begin: {
        month: 'SEPT',
        year: '2014'
      },
      duration: '1 year 2 months',
      occupation: "Python tutor",
      description: "Taught Python part-time for primary school kids while attending Tallinn's university of technology, or TALTECH as it is known now."
    },
    {
      company: "Nõo secondary school for science",
      begin: {
        month: 'NOV',
        year: '2012'
      },
      duration: '2 years',
      occupation: "Programming course",
      description: "Started a programming course in high-school for students who were interested in learning more about programming " +
       "than the default school course allowed for. Which after years of my departure still seems to be going on."
    },
  ],
  portfolio: [
    {
      name: 'Starlaw Films website',
      url: 'https://starlawfilms.ee',
      image: '/images/starlaw.png',
      description: 'UPCOMING: Website for Starlaw Films',
      stack: ['GatsbyJS'],
      designer: {
        name: "Michaela Engström",
      }
    },
    {
      name: 'Personal portfolio',
      url: 'https://borka.codes',
      image: '/images/portfolio.png',
      description: 'Well the website you\'re seeing here. Projects sections designed by me, somehow. ',
      stack: ['GatsbyJS', 'Open Source'],
      designer: {
        name: "santosfrancisco",
        website: "https://github.com/santosfrancisco/gatsby-starter-cv"
      }
    },
    {
      name: 'Blog post: HAProxy as a gateway to the cloud',
      url: 'https://blog.pilw.io/extending-your-existing-computing-stack-with-the-cloud/',
      image: '/images/casestudy.png',
      description: 'Wrote a blog post detailing how to turn HAProxy into a gateway to cloud infrastructure from your legacy stack'
    },
    {
      name: 'Administrative panel for sales software',
      url: 'http://www.fieldforce.com',
      image: '/images/fieldforce.jpg',
      description: 'Web app with extensive functionality controlling an entire sales software ecosystem',
      stack: ['AngularJS', 'React', 'Django'],
      designer: {
        name: "Tatjana Domnina",
        website: "https://www.taniatoday.com/"
      }
    },
    {
      name: 'Aavikuemand UÜ eCommerce platform',
      url: 'https://aavikuemand.ee',
      image: '/images/aavikuemand.PNG',
      description: 'Web shop for a local business',
      stack: ['VueJS', 'Laravel'],
      designer: {
        name: "Tatjana Domnina",
        website: "https://www.taniatoday.com/"
      }
    },

  ],
  social: {
    linkedin: "https://linkedin.com/in/borka-martin-orlov-7470b7156",
    github: "https://github.com/Borks",
    email: "borka.orlov@gmail.com"
  },
  siteUrl: 'https://www.borka.codes',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: '',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/code.png',
  headerLinks: [
    {
      label: 'Borka Martin Orlov',
      url: '/',
    }
  ]
}