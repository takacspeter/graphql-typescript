import {Arg, FieldResolver, Query, Resolver, Root} from "type-graphql";
import {pizzas, ingredients, PizzaData} from "../data";
import Pizza from "../schemas/Pizza";

@Resolver(of => Pizza)
export default class {
    @Query(returns => Pizza, {nullable: true})
    getMenu(): PizzaData[] {
        return pizzas;
    }

    @Query(returns => Pizza, {nullable: true})
    getPizza(@Arg("name", {nullable: true}) name: string, @Arg("id", {nullable: true}) id: number): PizzaData | undefined {
        //I f these would not be nullable we would not need these two ifs
        // I would make the whole filter an schema
        // @see https://devdocs.magento.com/guides/v2.3/graphql/queries/products.html#ProductFilterInput
        if (name && id) {
            throw Error('Dont provide both name and id');
        }
        if (!name && !id) {
            throw Error('Invalid filterinput');
        }

        // Add pagesize here, or trust your backend to handle paging

        if (name) {
            return pizzas.find(pizza => pizza.name === name);
        }
        if (id) {
            return pizzas.find(pizza => pizza.id === id);
        }
    }

    @FieldResolver()
    ingredients(@Root() pizzaToBeResolved: PizzaData) {
        return ingredients.filter(item => pizzaToBeResolved.ingredientIds.includes(item.id));
    }


}
