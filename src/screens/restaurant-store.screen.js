import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuSectionComponent from '../components/menu/menu-section.component';

const RestaurantStoreScreen = () => {


    const sectionData = [
        {
            id: 1,
            name: 'Promociones',
            items: [
                {
                    id: 1,
                    name: 'Promo 1',
                    img: '',
                    price: '199.99',
                    additionals: [
                        {
                            id: 1,
                            name: 'Papas',
                            qty: 0
                        }
                    ],
                    max_additionals: 1
                },
                {
                    id: 2,
                    name: 'Promo 1',
                    img: '',
                    price: '199.99',
                    additionals: [
                        {
                            id: 1,
                            name: 'Papas',
                            qty: 0
                        }
                    ],
                    max_additionals: 1
                }
            ]
        }
    ]

    const sections = sectionData.map(section => <MenuSectionComponent section={ section } key={ section.id }></MenuSectionComponent>)


    return (
        <View>
            { sections }
        </View>
    )
}

export default RestaurantStoreScreen