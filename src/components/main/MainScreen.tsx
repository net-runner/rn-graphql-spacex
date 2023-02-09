import { View, Text, FlatList } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@apollo/client";
import { gql } from "../../generatedGraphQL/gql";
import { MainHeader } from "./MainHeader";
import { GET_LAUNCHES } from "../../graphql/getLaunches";
import { LaunchItem } from "./LaunchItem";
import {
  GetLaunchesQuery,
  GetLaunchesQueryVariables,
} from "../../generatedGraphQL/graphql";

export const MainScreen = () => {
  const { fetchMore, loading, error, data } = useQuery<
    GetLaunchesQuery,
    GetLaunchesQueryVariables
  >(GET_LAUNCHES, {
    variables: { limit: 20 },
  });

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Error : {error.message}</Text>;

  return (
    <FlatList
      data={data?.launches}
      ListHeaderComponent={MainHeader}
      renderItem={({ item }) => <LaunchItem item={item} />}
    />
  );
};
