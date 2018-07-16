import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderMultipleIconExample extends Component {
    render() {
        return (
                <Header style={{backgroundColor:'#00B386'}}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>{this.props.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search' />
                        </Button>
                        <Button transparent>
                            <Icon name='heart' />
                        </Button>
                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>

        );
    }
}