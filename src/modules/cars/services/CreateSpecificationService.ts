import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRespository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    this.specificationRespository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
