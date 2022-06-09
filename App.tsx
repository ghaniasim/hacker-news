import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import store from "./code/state/store";
import { MainScreen, DetailScreen } from "./code/screens";
import { Header } from "./code/components";

type RootStackParamList = {
  Home: undefined;
  Details: { title: string; kids: number[]; url: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{ title: "Top Stories" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={{ title: "Comments" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
