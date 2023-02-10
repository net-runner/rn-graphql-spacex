import { Screen } from "./Screens";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Launch } from "./Launch";

export type AppStackParamList = {
  [Screen.MAIN]: undefined;
  [Screen.DETAILS]: { item: Launch };
};

export type AppStackProps = NativeStackNavigationProp<AppStackParamList>;
