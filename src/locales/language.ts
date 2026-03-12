interface Language {
  Header: {
    Home: string;
    About: string;
    Projects: string;
  };

  Home: {
    Headline: string;
    Subtext: string;
    CTA: string;
    ButtonText: string;
  };

  Profile: {
    Title: string;
    SubTitle: string;
  };

  About: {
    CvCard: {
      Title: string;
      SubTitle: string;
    };
    FeatureCard: {
      Title: string;
    };
    LanguageCard: {
      Title: string;
      Languages: string[];
    };
    TechStackCard: {
      Title: string;
    };
  };

  Projects: {
    Title: string;
    ShowMore: string;
  };

  Education: {
    Title: string;
    Data: { Title: string; SubTitle: string; Date: string }[];
  };

  Certificates: {
    Title: string;
    Data: {
      Title: string;
      SubTitle: string;
      Date: string;
      Link: string;
    }[];
  };

  Experience: {
    Headline: string;
  };
}

const ge: Language = {
  Header: {
    Home: "მთავარი",
    About: "შესახებ",
    Projects: "პროექტები",
  },

  Home: {
    Headline: "გამარჯობა 👋🏼",
    Subtext:
      "მე ვარ ლუკა შველიძე <span className='text-[#CBACF9] font-en'>Junior Full-Stack Web Developer</span>",
    CTA: "გარდავქმნი იდეებს სრულ ვებ გამოცდილებად.",
    ButtonText: "ჩემს შესახებ <span className='text-xl'> &#x2197;</span>",
  },

  Profile: {
    Title: "ლუკა შველიძე",
    SubTitle: "Full-Stack დეველოპერი",
  },

  About: {
    CvCard: {
      Title: "გაიგე მეტი ჩემ შესახებ.",
      SubTitle: "გადმოწერე რეზიუმე",
    },
    TechStackCard: {
      Title: "ტექნოლოგიები რომლებსაც ვიყენებ",
    },
    LanguageCard: {
      Title: "ვფლობ რამდენიმე ენას ამიტომ კომუნიკაცია პრობლემა არ არის.",
      Languages: ["ქართული", "ინგლისური", "რუსული"],
    },
    FeatureCard: {
      Title:
        "მნიშვნელობას ვანიჭებ კლიენტთან თანამშრომლობას და ღია კომუნიკაციას.",
    },
  },

  Projects: {
    Title: "ჩემი <span className='text-[#CBACF9]'>პროექტები</span>",
    ShowMore: "მეტის ნახვა",
  },

  Education: {
    Title: "განათლება",
    Data: [
      {
        Title: "საქართველოს ტექნიკური უნივერსიტეტი",
        SubTitle: "ინფორმატიკისა და მართვის სისტემების ფაკულტეტი",
        Date: "2023 - აწმყო",
      },
    ],
  },
  Certificates: {
    Title: "სერთიფიკატები",
    Data: [
      {
        Title: "HTML, CSS, JavaScript, React - Online Certification",
        SubTitle: "Udemy",
        Date: "იან 17, 2024",
        Link: "https://ude.my/UC-51dace1f-4ca4-4ee9-9d74-049c053d75a5",
      },
    ],
  },
  Experience: {
    Headline: 'სამუშაო <span className="text-[#CBACF9]">გამოცდილება</span>',
  },
};

const en: Language = {
  Header: {
    Home: "Home",
    About: "About",
    Projects: "Projects",
  },

  Home: {
    Headline: "Hey There 👋🏼",
    Subtext:
      "I'm Luka Shvelidze <span className='text-[#CBACF9]'>Junior Full-Stack Web Developer</span>",
    CTA: "Transforming Concepts into Seamless User Experiences.",
    ButtonText: "See my work <span className='text-xl'> &#x2197;</span>",
  },

  Profile: {
    Title: "Luka Shvelidze",
    SubTitle: "Full-Stack Developer",
  },

  About: {
    CvCard: {
      Title: "Want To Know More About Me?",
      SubTitle: "Download CV.",
    },
    TechStackCard: {
      Title: "My tech stack",
    },
    LanguageCard: {
      Title: "I’m very flexible with time zone communications",
      Languages: ["Georgian", "English", "Russian"],
    },
    FeatureCard: {
      Title: "I prioritize client collaboration, fostering open communication",
    },
  },

  Projects: {
    Title:
      "A small selection of <span className='text-[#CBACF9]'>recent projects</span>",
    ShowMore: "Show More",
  },

  Education: {
    Title: "Education",
    Data: [
      {
        Title: "Georgian Technical University",
        SubTitle: "Faculty of Informatics and Control Systems",
        Date: "2023 - Present",
      },
    ],
  },
  Certificates: {
    Title: "Certificates",
    Data: [
      {
        Title: "HTML, CSS, JavaScript, React - Online Certification",
        SubTitle: "Udemy",
        Date: "Jan 17, 2024",
        Link: "https://ude.my/UC-51dace1f-4ca4-4ee9-9d74-049c053d75a5",
      },
    ],
  },

  Experience: {
    Headline: 'My <span className="text-[#CBACF9]">Work Experience</span>',
  },
};

export { ge, en };
export type { Language };
