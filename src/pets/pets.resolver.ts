/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { Owner } from 'src/owners/entities/owner.entity';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petService: PetsService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petService.findALl();
  }

  @Query(() => Pet)
  getPet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petService.findOne(id);
  }

  @ResolveField((returns) => [Pet])
  owner(@Parent() pet: Pet): Promise<Owner> {
    return this.petService.getOwners(pet.ownerId);
  }

  @Mutation(() => Pet)
  async createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petService.createPet(createPetInput);
  }
}
