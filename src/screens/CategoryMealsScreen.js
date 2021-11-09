import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/colors'

const CategoryMealsScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');

    const categoryItem = CATEGORIES.find(item => item.id === catId);

    return (
        <View style={styles.screen}>
            <Text>{categoryItem.title}</Text>
            <Button title="Go to Meal Detail!" onPress={() => props.navigation.navigate('MealDetail') } />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');

    const categoryItem = CATEGORIES.find(item => item.id === catId);

    return {
        headerTitle: categoryItem.title,
     //   headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: Colors.primaryColor 
         },
      };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;