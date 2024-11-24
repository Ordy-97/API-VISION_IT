const baseURL = process.env.BASE_URL || 'http://localhost:8000';

const freelances = [
    {
        id: '1',
        name: 'Julien Brun',
        job: 'Développeur mobile',
        picture: `${baseURL}/images/4.jpeg`,
        skills: ['React Native'],
        location: 'Lyon',
        available: true,
        tjm: 500
    },
    {
        id: '2',
        name: 'Ordy DONFACK',
        job: 'Développeur frontend',
        picture: `${baseURL}/images/1.jpeg`,
        skills: ['Node JS', 'Vue.js', 'React', 'AWS'],
        location: 'Paris',
        available: false,
        tjm: 620
    },
    {
        id: '3',
        name: 'Brillant MBOU',
        job: 'Développeur fullstack',
        picture: `${baseURL}/images/2.jpeg`,
        skills: ['React', 'Gatsby', 'Next.js'],
        location: 'Bordeaux',
        available: true,
        tjm: 520
    },
    {
        id: '4',
        name: 'Lucille Barre',
        job: 'Product Designer',
        picture: `${baseURL}/images/3.jpeg`,
        skills: ['Figma', 'Webflow'],
        location: 'Lille',
        available: false,
        tjm: 650
    },
    {
        id: '5',
        name: 'Maxime NAFACK',
        job: 'Développeur mobile',
        picture: `${baseURL}/images/5.jpeg`,
        skills: ['IOS', 'Android'],
        location: 'Lyon',
        available: false,
        tjm: 450
    },
    {
        id: '6',
        name: 'Grégoire Chevalier',
        job: 'Développeur backend',
        picture: `${baseURL}/images/6.jpeg`,
        skills: ['Python', 'Django', 'Docker'],
        location: 'Paris',
        available: true,
        tjm: 510
    },
    {
        id: '7',
        name: 'Raphaël Rodriguez',
        job: 'Designer',
        picture: `${baseURL}/images/7.jpeg`,
        skills: ['Sketch', 'Illustrator'],
        location: 'Paris',
        available: true,
        tjm: 480
    },
    {
        id: '8',
        name: 'Hugo Vysa',
        job: 'Développeur frontend',
        picture: `${baseURL}/images/8.jpeg`,
        skills: ['SEO', 'Javascript Vanilla'],
        location: 'Toulouse',
        available: false,
        tjm: 560
    },
    {
        id: '9',
        name: 'Mina Toman',
        job: 'Développeuse Mobile',
        picture: `${baseURL}/images/11.jpeg`,
        skills: ['Android', 'React Native'],
        location: 'Bayonne',
        available: true,
        tjm: 630
    },
    {
        id: '10',
        name: 'Amélie Leroy',
        job: 'Développeuse backend',
        picture: `${baseURL}/images/12.jpeg`,
        skills: ['Node.js', 'Express', 'Docker'],
        location: 'Paris',
        available: false,
        tjm: 400
    },
    {
        id: '11',
        name: 'Nathan NGOH',
        job: 'Intégrateur SEO',
        picture: `${baseURL}/images/9.jpeg`,
        skills: ['SEO'],
        location: 'Rennes',
        available: false,
        tjm: 600
    }
];

module.exports = freelances;
