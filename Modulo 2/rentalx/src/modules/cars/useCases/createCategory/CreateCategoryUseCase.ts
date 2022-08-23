import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
   name: string;
   description: string;
}

class CreateCategoryUseCase {
   /**
    * private categoriesRepository: ICategoriesRepository
    *
    *  constructor(categoriesRepository: ICategoriesRepository){
    *    this.categoriesRepository = categoriesRepository
    * }
    *
    */

   constructor(private categoriesRepository: ICategoriesRepository) {}

   execute({ description, name }: IRequest): void {
      const categoryAlreadyExist = this.categoriesRepository.findByName(name);

      if (categoryAlreadyExist) {
         throw new Error("Category alredy exists!");
      }

      this.categoriesRepository.create({ name, description });
   }
}

export { CreateCategoryUseCase };
