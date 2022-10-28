import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "recipe " })
export class Recipe {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  title: string;

  @Field((type) => String, { nullable: true })
  description?: string;

  @Field((type) => Date)
  creationDate: Date;

  @Field((type) => [String])
  ingredients: string[];
}
