interface Language {
  Header: {
    Home: string;
    About: string;
    Projects: string;
  };

  Profile: {
    Title: string;
    SubTitle: string;
  };

  About: {
    Title: string;
    Text: string;
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

  Technologies: {
    Title: string;
  };

  SocialLinks: {
    Title: string;
  };
}

const ge: Language = {
  Header: {
    Home: "მთავარი",
    About: "შესახებ",
    Projects: "პროექტები",
  },
  Profile: {
    Title: "ლუკა შველიძე",
    SubTitle: "Full-Stack დეველოპერი",
  },

  About: {
    Title: "გამარჯობა 👋 მე ვარ ლუკა შველიძე",
    Text: "უმცროსი, თვითნასწავლი full-stack ვებ დეველოპერი, კოდირების ორ წლიანი გამოცდილებით დავეუფლე რამდენიმე პროგრამირების ენასა და ტექნოლოგიას, რაც მაძლევს საშუალებას სწრაფად და მარტივად გადავჭრა პრობლემები.",
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
  Technologies: { Title: "ტექნოლოგიები რომლებსაც ვიყენებ" },
  SocialLinks: {
    Title: "გამომყევი",
  },
};

const en: Language = {
  Header: {
    Home: "Home",
    About: "About",
    Projects: "Projects",
  },
  Profile: {
    Title: "Luka Shvelidze",
    SubTitle: "Full-Stack Developer",
  },

  About: {
    Title: "Hello 👋 I'm Luka Shvelidze",
    Text: "A junior, self-taught full-stack web developer with a passion for crafting immersive digital experiences. With two years of coding experience, I've mastered multiple languages and developed strong problem-solving skills to tackle complex challenges efficiently",
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
  Technologies: { Title: "Technologies i have worked with" },
  SocialLinks: {
    Title: "Follow Me",
  },
};

export { ge, en };
export type { Language };
