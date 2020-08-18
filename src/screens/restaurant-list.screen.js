import React from 'react';
import { ScrollView } from 'react-native';
import Restaurant from '../components/restaurant/restaurant.component';
import styled from 'styled-components/native';

const RestaurantListScreen = (props) => {

    const restosData = [
        {
            id: 1,
            name: "La parrilla Bodegon",
            opens: "21 a 00",
            image: require('./../../assets/resto.jpg')
        },
        {
            id: 2,
            name: "Big Burguers",
            opens: "11 a 1am",
            image: require('./../../assets/resto1.jpg')
        },
        {
            id: 3,
            name: "Bear Beer",
            opens: "21 a 2am",
            image: require('./../../assets/resto2.jpg')
        },
        {
            id: 4,
            name: "Veggie Resto",
            opens: "19 a 23",
            image: require('./../../assets/resto3.jpg')
        }
    ]


    const restos = restosData.map(resto => {
        return <Restaurant key={ resto.id } resto={ resto } { ...props }></Restaurant>
    })

    return (
        <Container>
            <ScrollView>
                { restos }
            </ScrollView>
        </Container>
    )
}

export default RestaurantListScreen;


const Container = styled.View`
`;