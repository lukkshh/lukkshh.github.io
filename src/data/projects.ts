export type ProjectCategory = "personal" | "freelance" | "professional";

export type ProjectLocaleText = {
  en: string;
  ka: string;
};

export type Project = {
  slug: string;
  name: ProjectLocaleText;
  title: ProjectLocaleText;
  summary: ProjectLocaleText;
  description: ProjectLocaleText;
  category: ProjectCategory;
  image: string;
  technologies: string[];
  role?: ProjectLocaleText;
  features?: ProjectLocaleText[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
};

export const projects = [
  {
    slug: "svgalco",
    name: { en: "SVGalco", ka: "SVGalco" },
    title: {
      en: "A multilingual home for a Georgian winery",
      ka: "ქართული მარნის მრავალენოვანი ვებპლატფორმა",
    },
    summary: {
      en: "A responsive winery platform, built in close collaboration with a designer.",
      ka: "ადაპტირებადი ვებპლატფორმა მარნისთვის, შექმნილი დიზაინერთან მჭიდრო თანამშრომლობით.",
    },
    description: {
      en: "I worked closely with a designer to turn the project vision into a responsive, multilingual platform. I handled the full technical implementation, including frontend and backend development, deployment, hosting configuration, and production setup.",
      ka: "დიზაინერთან მჭიდრო თანამშრომლობით პროექტის იდეა ადაპტირებად, მრავალენოვან პლატფორმად ვაქციე. სრულად ვუზრუნველყავი ტექნიკური განხორციელება: frontend და backend განვითარება, განთავსება, ჰოსტინგის კონფიგურაცია და production გარემოს გამართვა.",
    },
    category: "freelance",
    image: "/images/projects/svgalco.png",
    technologies: ["Laravel", "React", "PHP", "PostgreSQL", "Inertia.js", "Filament", "Web3Forms", "SASS"],
    role: {
      en: "Full technical implementation: frontend and backend development, deployment, hosting configuration, and production setup, in close collaboration with the designer.",
      ka: "დიზაინერთან მჭიდრო თანამშრომლობით სრული ტექნიკური განხორციელება: frontend და backend განვითარება, განთავსება, ჰოსტინგის კონფიგურაცია და production გარემოს გამართვა.",
    },
    features: [
      { en: "Responsive winery website", ka: "მარნის ადაპტირებადი ვებსაიტი" },
      { en: "Multilingual experience", ka: "მრავალენოვანი გამოცდილება" },
    ],
    liveUrl: "https://svgalco.com/",
    featured: true,
  },
  {
    slug: "tt-ge",
    name: { en: "TT.ge", ka: "TT.ge" },
    title: {
      en: "A platform for creators and their audiences",
      ka: "პლატფორმა კონტენტის შემქმნელებისა და მათი აუდიტორიისთვის",
    },
    summary: {
      en: "A creator-focused platform built around direct audience interaction.",
      ka: "კონტენტის შემქმნელებზე ორიენტირებული პლატფორმა აუდიტორიასთან პირდაპირი ურთიერთობისთვის.",
    },
    description: {
      en: "I collaborated on TT.ge while working as a Frontend Developer at Rowix. The creator-focused platform is built around direct audience interaction, similar to Patreon.",
      ka: "TT.ge-ზე Rowix-ში frontend დეველოპერად მუშაობისას ვთანამშრომლობდი. ეს კონტენტის შემქმნელებზე ორიენტირებული პლატფორმაა, რომელიც აუდიტორიასთან პირდაპირ ურთიერთობაზეა დაფუძნებული, Patreon-ის მსგავსად.",
    },
    category: "professional",
    image: "/images/projects/rp1.png",
    technologies: ["SvelteKit", "SASS", "BOG Payments", "TypeScript", "WebSocket", "Push Notifications"],
    role: {
      en: "Frontend development as part of the Rowix team.",
      ka: "Frontend განვითარება Rowix-ის გუნდთან ერთად.",
    },
    features: [
      { en: "Creator-focused platform", ka: "კონტენტის შემქმნელებზე ორიენტირებული პლატფორმა" },
      { en: "Direct interaction between creators and their audiences", ka: "შემქმნელებსა და აუდიტორიას შორის პირდაპირი ურთიერთობა" },
    ],
    liveUrl: "https://tt.ge/",
  },
  {
    slug: "bibo",
    name: { en: "Bibo", ka: "Bibo" },
    title: {
      en: "Personalised children’s books from photos",
      ka: "პერსონალიზებული საბავშვო წიგნები ფოტოებიდან",
    },
    summary: {
      en: "A storybook platform that turns uploaded photos into illustrated books.",
      ka: "წიგნების პლატფორმა, რომელიც ატვირთულ ფოტოებს ილუსტრირებულ ამბებად აქცევს.",
    },
    description: {
      en: "I collaborated on Bibo while working as a Frontend Developer at Rowix. The personalised storybook platform transforms uploaded photos into a fully illustrated children’s book.",
      ka: "Bibo-ზე Rowix-ში frontend დეველოპერად მუშაობისას ვთანამშრომლობდი. პერსონალიზებული წიგნების პლატფორმა ატვირთულ ფოტოებს სრულად ილუსტრირებულ საბავშვო წიგნად გარდაქმნის.",
    },
    category: "professional",
    image: "/images/projects/rp2.png",
    technologies: ["Next.js", "SASS", "TypeScript", "BOG Payments"],
    role: {
      en: "Frontend development as part of the Rowix team.",
      ka: "Frontend განვითარება Rowix-ის გუნდთან ერთად.",
    },
    features: [
      { en: "Personalised children’s storybooks", ka: "პერსონალიზებული საბავშვო წიგნები" },
      { en: "Uploaded photos become part of illustrated books", ka: "ატვირთული ფოტოები ილუსტრირებული წიგნების ნაწილია" },
    ],
    liveUrl: "https://bibo.ge/",
  },
  {
    slug: "ecommerce-test-task",
    name: { en: "E-Commerce Website", ka: "E-Commerce Website" },
    title: {
      en: "A full-stack e-commerce test project",
      ka: "სრული stack-ის e-commerce სატესტო პროექტი",
    },
    summary: {
      en: "An e-commerce website built for the Scandiweb Junior Full Stack Developer task.",
      ka: "ელექტრონული კომერციის ვებსაიტი Scandiweb-ის Junior Full Stack Developer დავალებისთვის.",
    },
    description: {
      en: "An e-commerce website made with PHP and React for the Scandiweb Junior Full Stack Developer test task.",
      ka: "PHP-ითა და React-ით შექმნილი e-commerce ვებსაიტი Scandiweb-ის Junior Full Stack Developer სატესტო დავალებისთვის.",
    },
    category: "personal",
    image: "/images/projects/ecommerce.png",
    technologies: ["React", "PHP", "MySQL", "GraphQL", "Tailwind CSS"],
    sourceUrl: "https://github.com/lukkshh/php-react-ecommerce",
    liveUrl: "https://lukkshh-ecommerce.ct.ws/",
  },
  {
    slug: "tic-tac-toe",
    name: { en: "Tic Tac Toe", ka: "Tic Tac Toe" },
    title: {
      en: "A small, browser-based Tic Tac Toe game",
      ka: "მარტივი Tic Tac Toe თამაში ბრაუზერისთვის",
    },
    summary: {
      en: "A Tic Tac Toe game built with React and Tailwind CSS.",
      ka: "React-ითა და Tailwind CSS-ით შექმნილი Tic Tac Toe თამაში.",
    },
    description: {
      en: "A Tic Tac Toe game built with React and Tailwind CSS.",
      ka: "React-ითა და Tailwind CSS-ით შექმნილი Tic Tac Toe თამაში.",
    },
    category: "personal",
    image: "/images/projects/tictactoe.png",
    technologies: ["React", "Tailwind CSS"],
    sourceUrl: "https://github.com/lukkshh/tictactoe",
    liveUrl: "https://lukkshh.github.io/tictactoe/",
  },
  {
    slug: "ticket-scanner",
    name: { en: "Ticket Scanner", ka: "Ticket Scanner" },
    title: {
      en: "Ticket creation and QR code validation",
      ka: "ბილეთების შექმნა და QR კოდით შემოწმება",
    },
    summary: {
      en: "A ticket management tool with QR scanning and real-time validation.",
      ka: "ბილეთების მართვის ხელსაწყო QR სკანირებითა და რეალურ დროში შემოწმებით.",
    },
    description: {
      en: "A ticket management system for generating tickets and scanning QR codes. It stores ticket information in SQLite and verifies whether a ticket is valid, has already been used, or does not exist.",
      ka: "ბილეთების მართვის სისტემა ბილეთების გენერირებისა და QR კოდების სკანირებისთვის. ბილეთების ინფორმაცია SQLite-ში ინახება და სისტემა ამოწმებს, ბილეთი ვალიდურია, უკვე გამოყენებულია თუ არ არსებობს.",
    },
    category: "personal",
    image: "/images/projects/ticket-scanner.gif",
    technologies: ["Python", "OpenCV", "SQLite"],
    sourceUrl: "https://github.com/lukkshh/ticket-scanner",
    features: [
      { en: "Ticket generation", ka: "ბილეთების გენერირება" },
      { en: "QR code scanning", ka: "QR კოდების სკანირება" },
      { en: "Ticket status validation", ka: "ბილეთის სტატუსის შემოწმება" },
    ],
  },
  {
    slug: "rock-paper-scissors",
    name: { en: "Rock Paper Scissors", ka: "Rock Paper Scissors" },
    title: {
      en: "Rock Paper Scissors in Python",
      ka: "Rock Paper Scissors Python-ზე",
    },
    summary: {
      en: "A simple Rock Paper Scissors game built with Tkinter.",
      ka: "Tkinter-ით შექმნილი მარტივი Rock Paper Scissors თამაში.",
    },
    description: {
      en: "A simple Rock Paper Scissors game built with Python’s Tkinter library.",
      ka: "Python-ის Tkinter ბიბლიოთეკით შექმნილი მარტივი Rock Paper Scissors თამაში.",
    },
    category: "personal",
    image: "/images/projects/rpc.png",
    technologies: ["Python", "Tkinter"],
    sourceUrl: "https://github.com/lukkshh/Rock-Paper-Scissors",
  },
] satisfies Project[];

export const projectCategories = ["personal", "freelance", "professional"] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
