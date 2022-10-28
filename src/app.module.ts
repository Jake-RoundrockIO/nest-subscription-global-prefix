import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import { RecipesModule } from "./recipes/recipes.module";

@Module({
  imports: [
    RecipesModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        path: "/graphql",
        autoSchemaFile: "schema.gql",
        sortSchema: true,
        useGlobalPrefix: true,
        subscriptions: {
          "graphql-ws": {
            path: "/graphql",
            onConnect: () => {
              console.log("Subscription connected!");
            },
          },
        },
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
      }),
    }),
  ],
})
export class AppModule {}
