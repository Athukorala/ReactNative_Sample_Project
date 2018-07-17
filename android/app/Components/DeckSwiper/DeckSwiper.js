import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

import pic1 from '../../../Content/Friends/1.jpg';
import pic2 from '../../../Content/Friends/2.jpg';
import pic3 from '../../../Content/Friends/3.jpg';
import pic4 from '../../../Content/Friends/4.jpg';

import pic5 from '../../../Content/Friends/5.jpg';
import pic6 from '../../../Content/Friends/6.jpg';
import pic7 from '../../../Content/Friends/7.jpg';

const cards = [
    {
        text: 'Tharindu Athukorala',
        name: 'One',
        image: {pic1},
    },
    {
        text: 'Yasiru Gimahana',
        name: 'One',
        image: {pic2},
    },
    {
        text: 'Adam Brayn',
        name: 'One',
        image:{pic3},
    },
    {
        text: 'Harsha Kaushalya',
        name: 'One',
        image: {pic4},
    },

    {
        text: 'Nisal Manjitha',
        name: 'One',
        image: {pic5},
    },

    {
        text: 'Yasiru Gimahana',
        name: 'One',
        image: {pic6},
    },

    {
        text: 'Ranmina Amaranath',
        name: 'One',
        image: {pic7},
    },

];
export default class DeckSwiperExample extends Component {
    render() {
        return (
            <Container>
                <Header />
                <View>
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                        <Text>{item.text}</Text>
                                        <Text note>NativeBase</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ height: 300, flex: 1 }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                    <Text>{item.name}</Text>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
            </Container>
        );
    }
}