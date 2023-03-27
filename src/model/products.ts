export type product = {
  id: string;
  name: string;
  stringTags: string;
};

export interface ProductInputDTO {
  id: string;
  name: string;
  tags: string[];
}

export interface AuthenticationData {
  id: string;
}

export interface FindProductInputDTO{
  search: string;
}