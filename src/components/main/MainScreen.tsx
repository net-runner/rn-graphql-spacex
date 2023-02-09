import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
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
import { ErrorHandler } from "../ErrorHandler";
import { Button } from "../Button";

export const MainScreen = () => {
  const [offset, setOffset] = useState(1);

  const { fetchMore, loading, error, data } = useQuery<
    GetLaunchesQuery,
    GetLaunchesQueryVariables
  >(GET_LAUNCHES, {
    variables: { limit: 20 },
  });

  return (
    <ErrorHandler loading={loading} error={error} retry={() => null}>
      <FlatList
        data={data?.launches}
        ListHeaderComponent={MainHeader}
        renderItem={({ item }) => <LaunchItem item={item} />}
        ListFooterComponent={() => (
          <StyledButton
            onPress={() => {
              fetchMore({ variables: { limit: 20, offset: 20 * offset } });
              setOffset((offset) => offset + 1);
            }}
            title="Load more launches"
          />
        )}
      />
    </ErrorHandler>
  );
};

const StyledButton = styled(Button)({
  marginBottom: 60,
});
