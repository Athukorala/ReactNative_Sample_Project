import React, {Component} from 'react';
import {Image} from 'react-native';
import {Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right} from 'native-base';

import pic6 from '../../../Content/Friends/6.jpg';
import pic7 from '../../../Content/Friends/7.jpg';
import Header from "../Header/Header";
import DatePicker from "../DatePicker/DatePicker";

export default class CardShowcaseExample extends Component {
    render() {
        return (
            <Content>

                <Header title="View Request"/>


                <Card style={{flex: 0}}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={pic6}/>
                            <Body>
                            <Text>Tharindu Athukorala</Text>
                            <Text note>April 15, 2016</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Image source={pic7} style={{height: 200, width: 200, flex: 1}}/>
                        <Text>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English. Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model text
                        </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="flame"/>
                                <Text>1,926 stars</Text>
                            </Button>
                        </Left>

                        <Right>
                            <Button transparent textStyle={{color: '#87838B'}}
                                    onPress={this.props.socialAccountHandler}>

                                <Text>BACK</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
                {/*date picker*/}
                <DatePicker/>

            </Content>

        );
    }
}