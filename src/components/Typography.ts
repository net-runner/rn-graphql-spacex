import styled from "@emotion/native";
import { DarkTheme } from "@react-navigation/native";

export const Text20 = styled.Text({
  fontSize: 20,
  color: DarkTheme.colors.text,
});

export const Text40 = styled(Text20)({
  fontSize: 40,
});
