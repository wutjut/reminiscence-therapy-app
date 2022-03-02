import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer} from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/Home";
import QuestionsScreen from "../screens/Questions";
import LoginScreen from "../screens/Login";
import Icon from 'react-native-ionicons'

const homeName = 'Home';
const loginName = 'Login';
const questionsName = 'Questions';

const Tab = createBottomTabNavigator();

export default function Navigator(){
    return (
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName){
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === loginName){
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (rn === questionsName){
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <Icon name={iconName}/>
                }
            })}
            >
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={loginName} component={LoginScreen}/>
            <Tab.Screen name={questionsName} component={QuestionsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

// const screens = {
//     Home: {
//         screen: HomeScreen
//     },
//     Questions: {
//         screen: QuestionsScreen
//     },
//     Login: {
//         screen: LoginScreen
//     },
// }

// const HomeStack = createStackNavigator(screens);

// export default createAppContainer(HomeStack);