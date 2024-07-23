import type {
  Site,
  Theme,
  Socials,
  Metadata,
} from "@/types"

export const site: Site = {
  title: "JustSteveKing",
  description: "Welcome to my website, the realm of the API Guy. Led by a seasoned Consultant CTO, Software Engineer, Developer Advocate, and renowned Conference Speaker.",
  email: "juststevemcd@gmail.com",
  url: "https://www.juststeveking.uk/",
  profile: 'https://github.com/juststeveking.png'
};

export const home: Metadata = {
  title: "Home",
  description: "Welcome to my website, the realm of the API Guy. Led by a seasoned Consultant CTO, Software Engineer, Developer Advocate, and renowned Conference Speaker.",
};

export const articles: Metadata = {
  title: "My Articles",
  description: "Discover a wealth of software development insights, tips, and tutorials. Dive into coding guides and explore the latest tech trends in my curated articles.",
};

export const talks: Metadata = {
  title: "My Talks",
  description: "Join me as I share insights from conferences and tech events, exploring Laravel, API strategies, and efficient coding. Inspiring content for both new and seasoned developers.",
};

export const socials: Socials = [
  {
    name: 'Twitter',
    href: 'https://x.com/juststeveking'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/juststeveking',
  }
];

export const theme: Theme = {
  colors: {
    primary: "orange",
    blur: {
      top: "orange",
      bottom: "violet",
    },
  },
};