import {
    discord,
    discordBlack,
    facebook,
    figma,
  
    instagram,
    LinkedIn,
    github,

  } from "../assets";

  import goat from '/goat-walkingloader.png'
  import guitar from '/guitaranimation-Sheet.png'
  import burger from '/burgerloader.png'
  import burrito from '/bighead-loader.png'

  
  
  export const navigation = [
    {
      id: "0",
      title: "About",
      url: "#about",
    },
    {
      id: "1",
      title: "Projects",
      url: "#projects",
    },
    {
      id: "2",
      title: "Pixal Art",
      url: "#loaders",
    },
  ];
  
 
  
  
  
  export const socials = [
    {
      id: "0",
      title: "LinkedIn",
      iconUrl: LinkedIn,
      url: "https://www.linkedin.com/in/caleb-luster-ab781b1b3/",
    },
    {
      id: "1",
      title: "Github",
      iconUrl: github,
      url: "https://github.com/CalebLuster",
    },

  
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "https://www.facebook.com/caleb.luster.1",
    },
    {
      id: "4",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/cleb.l/",
    },
  ];

  export const projects = [
    {
      title: 'Big Head Burrito',
      desc: 'A full stack app linked to a admin dashboard for a local burrito shop, with full CRUD functionality.',
      link: 'https://bigheadburrito.vercel.app/',
      client: 'Client Project',
      tags: [
        {
          name: 'Next.js',
          color: 'blue-text-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient'
        },
        {
          name: 'Prisma',
          color: 'violet-text-gradient'
        }
      ]
    },
    {
      title: 'Newts',
      desc: 'A full stack app linked to a admin dashboard for a local burger restuarant, with full CRUD functionality. ',
      link: 'https://newts.vercel.app/',
      client: 'Client Project',
      tags: [
        {
          name: 'Next.js',
          color: 'blue-text-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient'
        },
        {
          name: 'Prisma',
          color: 'violet-text-gradient'
        }
      ]
    },
    {
      title: 'Redwood Room',
      desc: 'A full stack app linked to a admin dashboard for a local casual fine dining restuarant, with full CRUD functionality.',
      link: 'https://redwoodroom.vercel.app/',
      client: 'Client Project',
      tags: [
        {
          name: 'Next.js',
          color: 'blue-text-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient'
        },
        {
          name: 'Prisma',
          color: 'violet-text-gradient'
        }
      ]
    },
    {
      title: 'Purple Goat',
      desc: 'A full stack app linked to a admin dashboard for a local casual fine dining restuarant, with full CRUD functionality.',
      link: 'https://purplegoat.vercel.app/',
      client: 'Client Project',
      tags: [
        {
          name: 'Next.js',
          color: 'blue-text-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient'
        },
        {
          name: 'Prisma',
          color: 'violet-text-gradient'
        }
      ]
    },
    {
      title: 'City Market',
      desc: 'A full stack app linked to a admin dashboard for a local deli restuarant, with full CRUD functionality.',
      link: 'https://citymarket.vercel.app/',
      client: 'Client Project',
      tags: [
        {
          name: 'Next.js',
          color: 'blue-text-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient'
        },
        {
          name: 'Prisma',
          color: 'violet-text-gradient'
        }
      ]
    },
    {
      title: 'Admin Dashboard',
      desc: 'An admin dashobard for a group of local restuarants, allowing managers full dynamic control of their website, with full CRUD functionality.',
      link: 'https://admin-dashboard-inky-psi.vercel.app/',
      client: 'Client Project',
      tags: [
        {
          name: 'Next.js',
          color: 'blue-text-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient'
        },
        {
          name: 'Prisma',
          color: 'violet-text-gradient'
        }
      ]
    },
    {
      title: 'Creative Cuisine',
      desc: 'A full stack app linked to a admin dashboard for applications and housing company websites, with full CRUD functionality.',
      link: 'https://creativecuisine.vercel.app/',
      client: 'Client Project',
      tags: [
        {
          name: 'Next.js',
          color: 'blue-text-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient'
        },
        {
          name: 'Prisma',
          color: 'violet-text-gradient'
        }
      ]
    },
    {
      title: 'Loom',
      desc: 'A zoom clone with full video calling functionality using stream.',
      link: 'https://zoomclone-ochre.vercel.app/',
      tags: [
        {
          name: 'React.js',
          color: 'blue-text-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
        {
          name: 'Stream',
          color: 'pink-text-gradient'
        },
        {
          name: 'ShadCN',
          color: 'black-text-gradient'
        },
      ]
    },
    {
      title: 'Social Media App',
      desc: 'A clone of a social media app, specifically for fans of the game Dead by Daylight. Users can create posts, comment, and like posts.',
      link: 'https://dbdsma.vercel.app/',
      tags: [
          {
            name: 'React.js',
            color: 'blue-text-gradient'
          },
          {
            name: 'TailwindCSS',
            color: 'light-blue-text-gradient'
          },
          {
            name: 'Sanity',
            color: 'red-text-gradient'
          },
      ]
    },
    {
      title: '3d Portfolio',
      desc: 'A 3d portfolio website for me using 3d models and animations.',
      link: 'https://3dportfolio-luster.vercel.app/',
      tags: [
        {
          name: 'React.js',
          color: 'blue-text-gradient'
        },
        {
          name: 'Email.js',
          color: 'green-pink-gradient'
        },
        {
          name: 'Three.js',
          color: 'orange-text-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
      ]
    },
    {
      title: 'Voces Y Visiones',
      desc: 'A full stack app for a local artist, growing their business and online presence. With full CRUD functionality.',
      client: 'Client Project',
      link: 'https://vocesyvisiones.org/',
      tags: [
        {
          name: 'Vue.js',
          color: 'green-text-gradient'
        },
        {
          name: 'Express',
          color: 'orange-text-gradient'
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
      ]
    },
    {
      title: 'DevTube',
      desc: 'A Youtube clone geared torwards developers, using an API to get videos, creators, views, and recommended videos. Or just use it to watch Youtube videos without ads.',
      link: 'https://devtubeclone.netlify.app/',
      tags: [
        {
          name: 'React.js',
          color: 'blue-text-gradient'
        },
        {
          name: 'RapidAPI',
          color: 'green-pink-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
      ]
    },
    {
      title: 'Lyriks Lite',
      desc: 'A spotify clone using the spotify API to get songs, artists, and albums. Users can use this to get ad free music, However, you can only listen to the first 90 seconds.',
      link: 'https://3dportfolio-luster.vercel.app/',
      tags: [
        {
          name: 'React.js',
          color: 'blue-text-gradient'
        },
        {
          name: 'RapidAPI',
          color: 'green-pink-gradient'
        },
        {
          name: 'TailwindCSS',
          color: 'light-blue-text-gradient'
        },
      ]
    },
  ]

 export const sprites = [
    {
      title: 'Goat',
      img: goat,
      class: 'spriteGoat',
    },
    {
      title: 'Big Head Burrito',
      img: burrito,
      class: 'spriteBighead',
    },
    {
      title: 'Burger',
      img: burger,
      class: 'spriteBurger',
    },
    {
      title: 'Guitar',
      img: guitar,
      class: 'spriteRwr',
    },
  ]

