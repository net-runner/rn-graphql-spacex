import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { AppStack } from "./src/components/AppStack";

const apolloClient = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

export const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer theme={DarkTheme}>
        <AppStack />
      </NavigationContainer>
    </ApolloProvider>
  );
};
