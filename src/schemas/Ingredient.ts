import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class Ingredient {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;
}
