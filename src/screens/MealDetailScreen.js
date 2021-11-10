import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


const MealDetailScreen = (props) => {

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
    const mealId = navigation.getParam('mealId');

    const mealItem = MEALS.find(item => item.id === mealId);

    return {
        headerTitle: mealItem.title,
        headerRight: () => 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName="ios-star"
                onPress={() => {
                  console.log('Mark as favorite!');
                }}
              />
            </HeaderButtons>
          
     
      };
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;