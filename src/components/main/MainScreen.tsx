import { View, Text, FlatList } from "react-native";
import React, { useMemo, useState } from "react";
import styled from "@emotion/native";
import { useQuery } from "@apollo/client";
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

  const { fetchMore, refetch, loading, error, data } = useQuery<
    GetLaunchesQuery,
    GetLaunchesQueryVariables
  >(GET_LAUNCHES, {
    variables: { sort: "launch_date_unix", order: "DESC" },
  });

  const reversedData = useMemo(() => {
    if (data?.launches) {
      return [...data.launches].reverse();
    }
    return [];
  }, [data?.launches]);

  const filteredData = useMemo(() => {
    return reversedData.slice(0, 20 * offset);
  }, [reversedData, offset]);

  return (
    <ErrorHandler loading={loading} error={error} retry={refetch}>
      <FlatList
        data={filteredData}
        ListHeaderComponent={MainHeader}
        renderItem={({ item }) => <LaunchItem item={item} />}
        ListFooterComponent={() => (
          <StyledButton
            onPress={() => setOffset((offset) => offset + 1)}
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
