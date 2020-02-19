import { Field, Int, ObjectType } from "type-graphql";
import Ingredient from "./Ingredient";

@ObjectType()
export default class Pizza {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    price: number;

    @Field(type => [Ingredient])
    ingredients: Ingredient[];
}
