import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import MenuItemComponent from './menu-item.component';

const MenuSectionComponent = (props) => {

    const { section } = props;
    const items = section.items.map(item => <MenuItemComponent item={item} key={ item.id }></MenuItemComponent>);

    return (
        <View>
            <Name>{ section.name }</Name>
            
            <View>
                { items }
            </View>
        </View>
    )
}

export default MenuSectionComponent;

const Container = styled.View`
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
    margin: 5px;
    backgroundColor: white;
    borderRadius: 2px;
    shadowColor: #000;
    shadowOffset: { width: 0, height: 10 };
    shadowOpacity: 0.25;
    shadowRadius: 2;
    elevation: 5;
`;

const Name = styled.Text`
    padding: 10px;
    fontSize: 15px;
    color: #ccc;
    textTransform: uppercase;
`;

