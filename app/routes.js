import { StackNavigator } from "react-navigation";
import Login from "./pages/login";
const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { header: null }
  }
});

export default RootNavigator;
