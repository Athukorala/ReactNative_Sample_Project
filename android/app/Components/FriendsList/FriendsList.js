import React, { Component } from 'react';
import { Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class ListAvatarExample extends Component {
    render() {
        return (

                    <List style={{marginBottom:5}}>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={this.props.pic} />
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