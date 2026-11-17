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
      en: "A multilingual platform for a Georgian winery",
      ka: "მრავალენოვანი პლატფორმა ქართული მარნისთვის",
    },
    summary: {
      en: "A winery website with wine management, localized content, customer inquiries, and a custom CMS.",
      ka: "მარნის ვებსაიტი ღვინოების მართვით, მრავალენოვანი კონტენტით, მომხმარებელთა მოთხოვნებითა და custom CMS-ით.",
    },
    description: {
      en: "I built SVGalco with a designer to give the winery a responsive, multilingual home online. The platform brings together wine and media management, localized pages, customer inquiries, and a custom content management system. I handled the application architecture, frontend and backend development, hosting, and production deployment.",
      ka: "დიზაინერთან თანამშრომლობით მარნისთვის შევქმენი ადაპტირებადი, მრავალენოვანი ვებსაიტი. პლატფორმა აერთიანებს ღვინოებისა და მედიის მართვას, ლოკალიზებულ გვერდებს, მომხმარებელთა მოთხოვნებს და custom CMS-ს. ვიმუშავე აპლიკაციის არქიტექტურაზე, frontend-სა და backend-ზე, ჰოსტინგსა და production გარემოში განთავსებაზე.",
    },
    category: "freelance",
    image: "/images/projects/svgalco.png",
    technologies: [
      "Laravel",
      "React",
      "TypeScript",
      "PHP",
      "PostgreSQL",
      "Inertia.js",
      "Filament",
      "Web3Forms",
      "SASS",
      "Hostinger",
    ],
    role: {
      en: "Sole developer responsible for the frontend, backend, database architecture, and deployment; collaborated with a designer on the experience.",
      ka: "როგორც პროექტის დეველოპერი, პასუხისმგებელი ვიყავი frontend-ზე, backend-ზე, მონაცემთა ბაზის არქიტექტურასა და საიტის განთავსებაზე; დიზაინზე ვთანამშრომლობდი დიზაინერთან.",
    },
    features: [
      {
        en: "Wine catalog and media management",
        ka: "ღვინოების კატალოგისა და მედიის მართვა",
      },
      {
        en: "Localized content across multiple languages",
        ka: "კონტენტი რამდენიმე ენაზე",
      },
      { en: "Customer inquiry flow", ka: "მომხმარებელთა მოთხოვნების მიღება" },
      {
        en: "Custom CMS for updating the site",
        ka: "საიტის განახლებისთვის შექმნილი CMS",
      },
    ],
    liveUrl: "https://svgalco.com/",
    featured: true,
  },
  {
    slug: "tt-ge",
    name: { en: "TT.ge", ka: "TT.ge" },
    title: {
      en: "A Patreon-style platform for creators and supporters",
      ka: "Patreon-ის სტილის პლატფორმა შემქმნელებისა და მათი მხარდამჭერებისთვის",
    },
    summary: {
      en: "A Patreon-style platform connecting creators with their supporters.",
      ka: "Patreon-ის სტილის პლატფორმა, რომელიც შემქმნელებს მხარდამჭერებთან აკავშირებს.",
    },
    description: {
      en: "TT.ge gives creators a place to share content and connect directly with supporters. At Rowix, I worked on its frontend, building interactive features and reusable components as part of the development team.",
      ka: "TT.ge შემქმნელებს საშუალებას აძლევს, გამოაქვეყნონ კონტენტი და მხარდამჭერებს პირდაპირ დაუკავშირდნენ. Rowix-ში ვმუშაობდი პლატფორმის frontend-ზე: გუნდთან ერთად ვქმნიდი ინტერაქტიულ ფუნქციებსა და მრავალჯერ გამოყენებად კომპონენტებს.",
    },
    category: "professional",
    image: "/images/projects/rp1.png",
    technologies: [
      "SvelteKit",
      "SASS",
      "BOG Payments",
      "TypeScript",
      "WebSocket",
      "Push Notifications",
    ],
    role: {
      en: "Frontend Developer / Team Lead at Rowix.",
      ka: "Frontend Developer / Team Lead Rowix-ში.",
    },
    features: [
      {
        en: "Post creation and scheduling interface",
        ka: "post-ების შექმნისა და დაგეგმვის ინტერფეისი",
      },
      {
        en: "Account settings and push notifications",
        ka: "ანგარიშის პარამეტრები და push notifications",
      },
      {
        en: "Reusable frontend components",
        ka: "მრავალჯერ გამოყენებადი frontend კომპონენტები",
      },
    ],
    liveUrl: "https://tt.ge/",
  },
  {
    slug: "bibo",
    name: { en: "Bibo.ge", ka: "Bibo.ge" },
    title: {
      en: "Personalised children’s books from photos",
      ka: "პერსონალიზებული საბავშვო წიგნები ფოტოებიდან",
    },
    summary: {
      en: "A platform for creating personalized children's books from photos and stories.",
      ka: "პლატფორმა, სადაც ფოტოებითა და ისტორიებით პერსონალიზებული საბავშვო წიგნები იქმნება.",
    },
    description: {
      en: "Bibo helps families turn a child's photos and story into an illustrated book. At Rowix, I developed the frontend book creation flow and other application pages as part of the team.",
      ka: "Bibo ოჯახებს ბავშვის ფოტოებისა და ისტორიის ილუსტრირებულ წიგნად ქცევაში ეხმარება. Rowix-ში გუნდთან ერთად ვიმუშავე წიგნის შექმნის frontend flow-სა და აპლიკაციის სხვა გვერდებზე.",
    },
    category: "professional",
    image: "/images/projects/rp2.png",
    technologies: ["Next.js", "SASS", "TypeScript", "BOG Payments"],
    role: {
      en: "Frontend Developer / Team Lead at Rowix.",
      ka: "Frontend Developer / Team Lead Rowix-ში.",
    },
    features: [
      {
        en: "Guided book creation interface",
        ka: "წიგნის შექმნის ეტაპობრივი ინტერფეისი",
      },
      { en: "Photo upload experience", ka: "ფოტოების upload ინტერფეისი" },
      {
        en: "Additional application pages",
        ka: "აპლიკაციის დამატებითი გვერდები",
      },
    ],
    liveUrl: "https://bibo.ge/",
  },
  {
    slug: "ecommerce-test-task",
    name: { en: "E-Commerce Website", ka: "E-Commerce Website" },
    title: {
      en: "A full-stack storefront built for a developer challenge",
      ka: "Full-stack e-commerce ვებსაიტი დეველოპერის სატესტო დავალებისთვის",
    },
    summary: {
      en: "A Scandiweb test project combining a React storefront with a PHP, GraphQL, and MySQL stack.",
      ka: "Scandiweb-ის სატესტო პროექტი React storefront-ით და PHP, GraphQL, MySQL stack-ით.",
    },
    description: {
      en: "I built this e-commerce website for Scandiweb's Junior Full Stack Developer test task. It brings together a React and Tailwind CSS frontend with PHP, GraphQL, and MySQL on the application side. The project demonstrates how I structure a complete storefront across the interface and data layers.",
      ka: "ეს e-commerce ვებსაიტი Scandiweb-ის Junior Full Stack Developer სატესტო დავალებისთვის შევქმენი. React და Tailwind CSS frontend-ს PHP, GraphQL და MySQL stack უკავშირდება. პროექტი აჩვენებს, როგორ ვაწყობ storefront-ს ინტერფეისისა და მონაცემების დონეზე.",
    },
    category: "personal",
    image: "/images/projects/ecommerce.png",
    technologies: ["React", "PHP", "MySQL", "GraphQL", "Tailwind CSS"],
    role: {
      en: "Sole developer across the React frontend and PHP application layer.",
      ka: "პროექტის ერთადერთი დეველოპერი React frontend-სა და PHP application layer-ზე.",
    },
    features: [
      {
        en: "React storefront styled with Tailwind CSS",
        ka: "React storefront Tailwind CSS-ით",
      },
      {
        en: "GraphQL-based application data flow",
        ka: "GraphQL-ზე აგებული მონაცემების flow",
      },
      { en: "PHP and MySQL backend stack", ka: "PHP და MySQL backend stack" },
    ],
    sourceUrl: "https://github.com/lukkshh/php-react-ecommerce",
    liveUrl: "https://lukkshh-ecommerce.ct.ws/",
  },
  {
    slug: "tic-tac-toe",
    name: { en: "Tic Tac Toe", ka: "Tic Tac Toe" },
    title: {
      en: "A classic Tic Tac Toe game for the browser",
      ka: "კლასიკური Tic Tac Toe თამაში ბრაუზერში",
    },
    summary: {
      en: "A lightweight browser game built with React and Tailwind CSS.",
      ka: "მსუბუქი ბრაუზერული თამაში React-ითა და Tailwind CSS-ით.",
    },
    description: {
      en: "A small personal project that brings the familiar Tic Tac Toe game into the browser. I built the interactive interface with React and styled it with Tailwind CSS, keeping the experience simple and easy to play.",
      ka: "პირადი პროექტი, რომელიც კლასიკურ Tic Tac Toe თამაშს ბრაუზერში აცოცხლებს. ინტერაქტიული ინტერფეისი React-ით ავაწყე და Tailwind CSS-ით გავაფორმე, რათა თამაში მარტივი და მოსახერხებელი იყოს.",
    },
    category: "personal",
    image: "/images/projects/tictactoe.png",
    technologies: ["React", "Tailwind CSS"],
    role: {
      en: "Designed and developed the browser game as a personal project.",
      ka: "ბრაუზერული თამაში პირადი პროექტის სახით დავაპროექტე და შევქმენი.",
    },
    features: [
      {
        en: "Interactive Tic Tac Toe board",
        ka: "ინტერაქტიული Tic Tac Toe დაფა",
      },
      { en: "Browser-based gameplay", ka: "თამაში პირდაპირ ბრაუზერში" },
      {
        en: "Interface built with React and Tailwind CSS",
        ka: "ინტერფეისი React-ითა და Tailwind CSS-ით",
      },
    ],
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
      en: "Generate QR tickets, scan them at check-in, and verify their status instantly.",
      ka: "QR ბილეთების შექმნა, check-in-ზე სკანირება და სტატუსის მყისიერი შემოწმება.",
    },
    description: {
      en: "Ticket Scanner is a Python tool for event check-in. It generates unique tickets as QR code images, scans them with a webcam, and checks an SQLite database to distinguish valid, already used, and unknown tickets. Organizers can also review and remove ticket records.",
      ka: "Ticket Scanner არის Python ხელსაწყო ღონისძიებაზე check-in-ისთვის. ის ქმნის უნიკალურ QR ბილეთებს, webcam-ით ასკანირებს მათ და SQLite database-ში ამოწმებს, ბილეთი მოქმედია, უკვე გამოყენებულია თუ უცნობია. ორგანიზატორს შეუძლია ბილეთების ჩანაწერების ნახვა და წაშლაც.",
    },
    category: "personal",
    image: "/images/projects/ticket-scanner.gif",
    technologies: ["Python", "OpenCV", "SQLite"],
    sourceUrl: "https://github.com/lukkshh/ticket-scanner",
    role: {
      en: "Built the ticket generation, webcam scanning, and SQLite-backed validation workflow.",
      ka: "შევქმენი ბილეთების გენერაცია, webcam სკანირება და SQLite-ზე დაფუძნებული validation flow.",
    },
    features: [
      {
        en: "Unique QR tickets with a configurable prefix",
        ka: "უნიკალური QR ბილეთები ცვლადი prefix-ით",
      },
      {
        en: "Live webcam scanning at check-in",
        ka: "რეალურ დროში webcam სკანირება check-in-ზე",
      },
      {
        en: "Valid, used, and unknown ticket checks",
        ka: "მოქმედი, გამოყენებული და უცნობი ბილეთების შემოწმება",
      },
      {
        en: "View and delete ticket records in SQLite",
        ka: "SQLite-ში ბილეთების ჩანაწერების ნახვა და წაშლა",
      },
    ],
  },
  {
    slug: "rock-paper-scissors",
    name: { en: "Rock Paper Scissors", ka: "Rock Paper Scissors" },
    title: {
      en: "Rock Paper Scissors as a Python desktop game",
      ka: "Rock Paper Scissors — Python desktop თამაში",
    },
    summary: {
      en: "A desktop take on the classic game, built with Python and Tkinter.",
      ka: "კლასიკური თამაშის desktop ვერსია Python-ითა და Tkinter-ით.",
    },
    description: {
      en: "A personal desktop game built with Python's Tkinter library. It presents the familiar Rock Paper Scissors choices in a simple graphical interface and explores event-driven interaction outside the browser.",
      ka: "Python-ის Tkinter ბიბლიოთეკით შექმნილი პირადი desktop პროექტი. კლასიკური Rock Paper Scissors არჩევანი მარტივ გრაფიკულ ინტერფეისშია წარმოდგენილი და თამაში ბრაუზერის გარეთ, event-driven ინტერაქციას აჩვენებს.",
    },
    category: "personal",
    image: "/images/projects/rpc.png",
    technologies: ["Python", "Tkinter"],
    role: {
      en: "Built the desktop interface and game interaction as a personal Python project.",
      ka: "პირად Python პროექტში შევქმენი desktop ინტერფეისი და თამაშის ინტერაქცია.",
    },
    features: [
      { en: "Tkinter desktop interface", ka: "Tkinter desktop ინტერფეისი" },
      {
        en: "Classic Rock Paper Scissors gameplay",
        ka: "კლასიკური Rock Paper Scissors თამაში",
      },
    ],
    sourceUrl: "https://github.com/lukkshh/Rock-Paper-Scissors",
  },
] satisfies Project[];

export const projectCategories = [
  "personal",
  "freelance",
  "professional",
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
