export type project = {
  thumbnail: string;
  title: string;
  category: string;
  description: string;
  tech?: string[];
  images?: {
    asset: {
      url: string;
    };
  }[];
  slug: string;
  date: string;
  demo: string;
  git: string;
  blogtitle1: string;
  blogtext1: string;
  blogpic1: string;
  blogtitle2: string;
  blogtext2: string;
  blogpic2: string;
  blogtitle3: string;
  blogtext3: string;
  blogpic3: string;
  blogtitle4: string;
  blogtext4: string;
  blogpic4: string;
};

export type Props = {
  project: project;
};

export type WorkCardProps = {
  thumbnail: string;
  title: string;
  category: string;
  description: string;
  tech?: string[];
  slug: string;
  flip: boolean;
};
