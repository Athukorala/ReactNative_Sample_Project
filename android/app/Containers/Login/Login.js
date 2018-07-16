import React,{Component} from 'react';
import {Button, Container, Content, Form, Icon, Input, Item, Picker, Text} from "native-base";

import Logo from '../../../Content/beard_man_large.png';
import {Image, ImageBackground} from "react-native";
import Header from "../../Components/Header/Header";
import Logo1 from '../../../Content/login.png';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    press = () => {
        this.props.socialAccountHandler();
    }

    render(){
        return(

                <Container>

                    <Header title="Login"/>
                    <ImageBackground
                        source={Logo1}
                        style={{width:'100%',height:'100%',zIndex:10}}
                    >

                        <Image source={Logo} style={{width:100,height:100,marginLeft:150,marginTop:50,marginBottom:10}}/>

                        <Item rounded style={{marginBottom:15,marginTop:100}}>
                            <Input  style={{color:'white'}} placeholder='Enter your email'/>
                            <Icon name='checkmark-circle' />
                        </Item>

                        <Item rounded  style={{marginBottom:15}}>
                            <Input  style={{color:'white'}} placeholder='Enter your password'/>
                            <Icon name='checkmark-circle' />
                        </Item>

                        <Button iconLeft dark rounded style={{marginLeft:150}} onPress={this.press}>
                            <Icon name='person' />
                            <Text>Sign in</Text>
                        </Button>

                    </ImageBackground>



                </Container>

        )
    }
}

export default Login;