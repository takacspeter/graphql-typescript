import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import PizzaResolver from "./resolvers/PizzaResolver";


async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [PizzaResolver],
        emitSchemaFile: true,
    });

    const server = new GraphQLServer({
        schema,
    });

    server.start(() => console.log("Server is running on http://localhost:4000"));
}

bootstrap();
