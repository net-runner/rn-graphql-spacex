import { View, Text } from "react-native";
import React from "react";
import { GetLaunchesQuery } from "../../generatedGraphQL/graphql";
import styled from "@emotion/native";
import { DarkTheme } from "@react-navigation/native";

type SmallLaunch = {};

type ArrayElement<ArrayType> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

type Props = {
  item: ArrayElement<GetLaunchesQuery["launches"]>;
};

export const LaunchItem = ({ item }: Props) => {
  return (
    <ItemContainer>
      <Text>LaunchItem</Text>
    </ItemContainer>
  );
};

const ItemContainer = styled.View({
  borderRadius: 10,
  width: "80%",
  alignSelf: "center",
  minHeight: 50,
  marginBottom: 20,
  backgroundColor: `${DarkTheme.colors.card}`,
});
