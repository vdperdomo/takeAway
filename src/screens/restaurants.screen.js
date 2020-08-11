import React from 'react';
import { ScrollView } from 'react-native';
import RestoItem from '../components/resto-item.component';

export default function restaurantsScreen(props) {

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
        return <RestoItem key={resto.id} resto={resto} {...props}></RestoItem>
    })

    return (
        <ScrollView>
            {restos}
        </ScrollView>
    )
}

