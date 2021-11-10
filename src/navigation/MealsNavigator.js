import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'Meal Categories'
};


const MealsNavigator = createStackNavigator(
    {
      Categories: {
        screen: CategoriesScreen
      },
      CategoryMeals: {
        screen: CategoryMealsScreen
      },
      MealDetail: MealDetailScreen
    },
    {
     // initialRouteName: 'Categories',
     defaultNavigationOptions: defaultStackNavOptions
    }
  );

  const FavNavigator = createStackNavigator(
    {
      Favorites: FavoritesScreen,
      MealDetail: MealDetailScreen
    },
    {
      // initialRouteName: 'Categories',
      defaultNavigationOptions: defaultStackNavOptions
    }
  );
  
  const tabScreenConfig = {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.primaryColor
      }
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
        },
        tabBarColor: Colors.secondaryColor
      }
    }
  };
  
  const MealsFavTabNavigator =
    Platform.OS === 'android'
      ? createMaterialBottomTabNavigator(tabScreenConfig, {
          activeTintColor: 'white',
          shifting: true,
          barStyle: {
            backgroundColor: Colors.primaryColor
          }
        })
      : createBottomTabNavigator(tabScreenConfig, {
          tabBarOptions: {
            activeTintColor: Colors.secondaryColor
          }
        });

        const FiltersNavigator = createStackNavigator(
          {
            Filters: FiltersScreen
          },
          {
            // navigationOptions: {
            //   drawerLabel: 'Filters!!!!'
            // },
            defaultNavigationOptions: defaultStackNavOptions
          }
        );
        const MainNavigator = createDrawerNavigator(
          {
            MealsFavs: {
              screen: MealsFavTabNavigator,
              navigationOptions: {
                drawerLabel: 'Meals'
              }
            },
            Filters: FiltersNavigator
          },
          {
            contentOptions: {
              activeTintColor: Colors.secondaryColor,
              labelStyle: {
                fontFamily: 'open-sans-bold'
              }
            }
          }
        );

  //some errors are happened
  // export default createAppContainer(MainNavigator);
export default createAppContainer(MealsFavTabNavigator);