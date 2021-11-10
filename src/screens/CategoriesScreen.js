import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {


    const renderGridItem = (itemData) => {

        return (
          <CategoryGridTile 
          color={itemData.item.color}
          title={itemData.item.title}
          onSelect={() => props.navigation.navigate({ routeName: 'CategoryMeals', params: {
            categoryId: itemData.item.id
        }})}
          />
        );
    };


    return (
     <FlatList 
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderGridItem}
     />
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});

export default CategoriesScreen;