import { View, Text } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const MainHeader = () => {
  return (
    <HeaderContainer mode={"margin"} edges={["top"]}>
      <MainText>SpaceX Launches</MainText>
    </HeaderContainer>
  );
};
const HeaderContainer = styled(SafeAreaView)({});
const MainText = styled.Text({
  color: "#f5f5f5",
  fontSize: 30,
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: 20,
  marginTop: 10,
});
