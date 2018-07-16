import React, { Component } from 'react';
import { Container, Header, Content, Item, Input } from 'native-base';
export default class RoundedTextboxExample extends Component {
    render() {
        return (

                    <Item rounded style={{marginBottom:10}}>
                        <Input placeholder={this.props.placeholder}/>
                    </Item>


        );
    }
}