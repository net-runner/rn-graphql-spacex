import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import React from "react";
import { NativeModules } from "react-native";
import { AppStack } from "./src/components/AppStack";

const apolloClient = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}
export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer theme={DarkTheme}>
        <AppStack />
      </NavigationContainer>
    </ApolloProvider>
  );
};
