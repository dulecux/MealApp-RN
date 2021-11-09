import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/colors';


const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {

        return (
            <TouchableOpacity 
            style={styles.gridItem}
            onPress={() => props.navigation.navigate({ routeName: 'CategoryMeals', params: {
                categoryId: itemData.item.id
            }})}>
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
            </TouchableOpacity>
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

CategoriesScreen.navigationOptions = () => {
    return {
       headerTitle: 'Meal Categories',
       headerStyle: {
          backgroundColor: Colors.primaryColor 
       },
       headerTitleStyle: { alignSelf: 'center' },
       headerTintColor: 'white'
      };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;