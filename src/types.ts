import type {
  TailwindColor,
} from "@/utils/types/tailwind"

export type Site = {
  title: string
  description: string
  email: string
  url: string
  profile?: string;
};

export type Metadata = {
  title: string
  description: string
};

export type Socials = {
  name: string
  href: string
}[];

export type Theme = {
  colors: {
    primary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
  };
};

export type HeadTags = {
  title?: string;
  description?: string;
  noindex?: boolean;
  og?: {
    title: string;
    type: string;
    description: string;
    image: string;
    alt: string;
  };
};
