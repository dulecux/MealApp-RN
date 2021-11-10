import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {

    const renderMealItem = itemData => {
        return (
          <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {props.navigation.navigate({ routeName: 'MealDetail', params: {
              mealId: itemData.item.id
            }})}}
          />
        );
      };

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
          <FlatList
            data={displayedMeals}
            keyExtractor={item => item.id}
            renderItem={renderMealItem}
            style={{ width: '100%' }}
          />
        </View>
      );
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');

    const categoryItem = CATEGORIES.find(item => item.id === catId);

    return {
        headerTitle: categoryItem.title
     //   headerTitleStyle: { alignSelf: 'center' },
      };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default CategoryMealsScreen;