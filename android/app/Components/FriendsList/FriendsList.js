import React, { Component } from 'react';
import {Content, List, ListItem, Left, Body, Right, Thumbnail, Text, View} from 'native-base';
export default class ListAvatarExample extends Component {
    render() {
        return (

                    <List style={{marginBottom:5}} onPress={this.props.friendViewHandler}>
                        <ListItem avatar  onPress={this.props.friendViewHandler}>
                            <Left>
                                <Thumbnail source={this.props.pic} onPress={this.props.friendViewHandler}/>
                            </Left>
                            <Body>
                            <Text>{this.props.name}</Text>
                            <Text note>{this.props.status}</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>

        );
    }
}