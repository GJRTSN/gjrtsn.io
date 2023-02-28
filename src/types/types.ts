export type Project = {
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
  article: {
    articleSections: {
      _key: string;
      _type: string;
      blogTitle: string;
      body: {
        _key: string;
        _type: string;
        children: {
          _key: string;
          _type: string;
          marks: string[];
          text: string;
        }[];
        markDefs: any[];
      }[];
      blogPic: {
        asset: {
          url: string;
        };
      } | null;
    }[];
    bodyPortableText: {
      _key: string;
      _type: string;
      children: {
        _key: string;
        _type: string;
        marks: string[];
        text: string;
      }[];
      markDefs: any[];
    }[];
  } | null;
};

export type Props = {
  project: Project;
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
