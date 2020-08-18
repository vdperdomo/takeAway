import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Restaurant = (props) => {
    const resto = props.resto;

    const goToMenu = () => {
        props.navigation.navigate('Menu')
    }
    return (
        <Container
            onPress={goToMenu}
            activeOpacity={0.6}
            underlayColor="#000"
        >
            <ImageBackground
                source={resto.image}
                style={styles.image}
                imageStyle={{ borderRadius: 3}}
            >
                <RestoContainer>
                    <Opacity></Opacity>
                    <Info>
                        <Title>{resto.name}</Title>
                        <Open>Horario: {resto.opens}</Open>
                    </Info>
                </RestoContainer>
            </ImageBackground>
        </Container>
    )
}

export default Restaurant;

const Container = styled.TouchableHighlight`
    margin: 10px;
    flex:1;
    min-height: 180px;
`;

const RestoContainer = styled.View`   
    flex: 1;
    flexDirection: column;
    justifyContent: flex-end;
`;

const Opacity = styled.View`   
    backgroundColor: black;
    opacity: 0.5;
    height: 90px;
    width: 100%;
    position: absolute;
    borderBottomLeftRadius: 3px;
    borderBottomRightRadius: 3px;
`;

const Info = styled.View`   
    flex: 0.5;
    alignSelf: flex-start;
    justifyContent: flex-start;
    width: 100%;
    padding: 20px;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: white;
`;

const Open = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: #eeeeee;
    paddingTop: 5px;
`;


const ButtonGo = styled.Button`
    width: 100px;
`;

const img = styled.Button`
    borderBottomLeftRadius: 5px;
    borderBottomRightRadius: 5px;
    borderTopLeftRadius: 5px;
    borderTopRightRadius: 5px;
`;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 180
    }
});