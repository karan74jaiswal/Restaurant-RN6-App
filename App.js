import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
export default function App() {
  const Stack = createStackNavigator();
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ title: "Business Search", headerTitleAlign: "center" }}
    >
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}
