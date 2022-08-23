import { Category } from "../model/Category";

// Data Transfer Object (DTO) ou simplesmente Transfer Object
interface ICreateCategoryDTO {
   name: string;
   description: string;
}

interface ICategoriesRepository {
   findByName(name: string): Category;
   list(): Category[];
   create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
