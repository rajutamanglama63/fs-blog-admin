export interface Blog {
  author: {
    id: number;
    fullName: string;
    email: string;
  };
  createdAt: string;
  createdBy: string;
  desc: string;
  featured: boolean;
  id: number;
  meta: string;
  slug: string;
  tags: [];
  title: string;
  updatedAt: string;
  updatedBy: string;
  thumbnail: string;
  image: string;
}

export interface author {
  id: number;
  fullName: string;
  email: string;
}
