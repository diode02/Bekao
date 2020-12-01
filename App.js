import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen.com";
import LoginScreen from "./src/screens/login-screen/LoginScreen.com";
import ProductDetail from "./src/screens/Products/Product.detail";
import Products from "./src/screens/Products/Products.com";
// import ListScreen from "./src/screens/ListScreen";
// import ImageScreen from "./src/screens/ImageScreen";
// import CounterScreen from "./src/screens/CounterScreen";
// import ColorScreen from "./src/screens/ColorScreen";
// import SquareScreen from "./src/screens/SquareScreen";
// import CalcuScreen from "./src/screens/components/calculator/calculator.com";
// import TextScreen from "./src/screens/TextScreen";
// import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Products: Products,
    ProductDetail: ProductDetail,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Native App",
    },
  }
);

export default createAppContainer(navigator);
