import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { Text20 } from "./Typography";
import { DarkTheme } from "@react-navigation/native";

type Props = {
  onPress: () => void;
  title: string;
  children?: any;
};

export const Button = ({ title, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ButtonContainer>
        <Text20>{title}</Text20>
      </ButtonContainer>
    </TouchableWithoutFeedback>
  );
};

const ButtonContainer = styled.View({
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  marginVertical: 10,
  borderRadius: 15,
  height: 40,
  width: "80%",
  backgroundColor: DarkTheme.colors.primary,
});
