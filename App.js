import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Login from "./android/app/Containers/Login/Login";
import MainLayout from "./android/app/Containers/Layout/MainLayout";
import Eux from "./android/app/hoc/Eux/Eux";
import FriendsList from "./android/app/Components/FriendsList/FriendsList";
import FriendsLayout from "./android/app/Containers/FriendsLayout/FriendsLayout";
import FriendViewer from "./android/app/Components/FriendViewer/FriendViewer";


export default class App extends Component {

    state={
        Login:true,
        socialAccount:false,
        socialDetails:false,
        friendView:false
    };

    loginHandler = () => {
        this.setState({
            Login:true,
            socialAccount:false,
            socialDetails:false,
            friendView:false
        })
    };

    socialAccountHandler = () => {
        this.setState({
            Login:false,
            socialAccount:true,
            socialDetails:false,
            friendView:false
        })
    };

    socialAccountDetailsHandler = () => {
        this.setState({
            Login:false,
            socialAccount:false,
            socialDetails:true,
            friendView:false
        })
    };

    friendViewHandler = () => {
        this.setState({
            Login:false,
            socialAccount:false,
            socialDetails:false,
            friendView:true
        })
    };

    render() {

        let show=null;

        if(this.state.Login){
            show=<Login socialAccountHandler={this.socialAccountHandler}/>

        }else if(this.state.socialAccount){
            show=<MainLayout backHandler={this.loginHandler} socialAccountDetailsHandler={this.socialAccountDetailsHandler}/>
        }else if(this.state.socialDetails){
            show=<FriendsLayout friendViewHandler={this.friendViewHandler}/>
        }else if(this.state.friendView){
            show=<FriendViewer socialAccountHandler={this.socialAccountHandler}/>
        }

        return (
            <Eux>
            {show}
            </Eux>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
