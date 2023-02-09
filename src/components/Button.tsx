import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import styled from "@emotion/native";
import { Text20 } from "./Typography";
import { DarkTheme } from "@react-navigation/native";

type Props = {
  onPress: () => void;
  title: string;
  children?: any;
} & TouchableOpacityProps;

export const Button = ({ title, onPress, ...props }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ButtonContainer {...props}>
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
  width: "90%",
  backgroundColor: DarkTheme.colors.primary,
  alignSelf: "center",
});
