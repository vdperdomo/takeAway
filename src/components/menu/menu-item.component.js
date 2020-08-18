import React, { useState } from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components/native';
import AddItemComponent from './add-item.component';
const resto = require('./../../../assets/resto.jpg')

const MenuItemComponent = (props) => {
    const { item } = props;

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container
            activeOpacity={ 0.6 }
            underlayColor="#000"
        >
            <Card>
                <Image source={ resto }
                    style={ { height: 75, width: 75, resizeMode: 'cover', borderRadius: 5 } } />
                <View>
                    <Name>{ item.name } </Name>
                    <Price>$ { item.price } </Price>
                </View>



            </Card>
            <Card>
                <ButtonCont>
                    <Button
                        title="Agregar"
                        onPress={ () => setModalVisible(true) }
                    />
                </ButtonCont>
                <Qty value="0" />
            </Card>

            <AddItemComponent visible={modalVisible} closeModal={() => setModalVisible(false)}  addItem={() => setModalVisible(false)}/>

        </Container>
    )
}

export default MenuItemComponent;

const Container = styled.View`
    margin: 20px;
    height: 70px;
    flexDirection: row;
`;

const Card = styled.View`
    width: 70%;
    height: 180px;
    flexDirection: row;
`;

const Name = styled.Text`
    paddingLeft: 10px;
    color: #777;
`;

const Price = styled.Text`
    paddingLeft: 10px;
    color: #777;
`;

const ButtonCont = styled.View`
  maxHeight: 20px;
  maxWidth: 100px;
`;

const Qty = styled.Text`
    width: 100px;
    maxHeight: 20px;
    textAlign: center;
`;

const Button = styled.Button`
  flex: 0.2;
  color: palevioletred;
  font-size: 16px;
  margin: 16px;
  padding: 4px 16px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;