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
  blogtext3: string;
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
