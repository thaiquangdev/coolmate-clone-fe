import { ImageType } from "./image.type";
import { SkuType } from "./sku.type";

export type ProductType = {
  id: number;
  title: string;
  slug: string;
  price: number;
  images: ImageType[];
};

export type UserType = {
  fullName: string;
};

export type ReviewType = {
  star: number;
  user: UserType;
  color: string;
  size: string;
  comment: string;
  createdAt: Date;
};

export type ProductDetailType = {
  id: number;
  title: string;
  slug: string;
  price: number;
  images: ImageType[];
  skus: SkuType[];
  description: string;
  discount: number;
  avgRating: number;
  highlights: string;
  reviews: ReviewType[];
};

export type ProductSumaryType = {
  id: number;
  title: string;
  price: number;
  discount: number;
  avgRating: number;
  highlights: string;
  skus: SkuType[];
};
