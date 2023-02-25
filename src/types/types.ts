export type Project = {
  thumbnail: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  images?: {
    asset: {
      url: string;
    };
  }[];
  slug: string;
  date: string;
  demo: string;
  git: string;
  blogtext1: string;
  blogpic1: string;
  blogtext2: string;
  blogpic2: string;
  blogtext3: string;
};

export type Props = {
  project: Project;
};
