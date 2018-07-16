import React, {Component} from 'react';
import {ScrollView, View} from "react-native";
import FriendsList from "../../Components/FriendsList/FriendsList";

import pic1 from '../../../Content/Friends/1.jpg';
import pic2 from '../../../Content/Friends/2.jpg';
import pic3 from '../../../Content/Friends/3.jpg';
import pic4 from '../../../Content/Friends/4.jpg';

import pic5 from '../../../Content/Friends/5.jpg';
import pic6 from '../../../Content/Friends/6.jpg';
import pic7 from '../../../Content/Friends/7.jpg';
import pic8 from '../../../Content/Friends/8.jpg';


import Header from "../../Components/Header/Header";
import Eux from "../../hoc/Eux/Eux";

// import pic5 from '../../../Content/Friends/5.png';


class App extends Component {
    render() {
        return (
            <Eux>
                <Header title="Friends List"/>
                <ScrollView>
                    <FriendsList name="Tharindu Athukorala" status="Doing what you like will always keep you happy . ."
                                 pic={pic1}/>
                    <FriendsList name="Dananjaya Perera" status="Doing what you like will always keep you happy . ."
                                 pic={pic2}/>
                    <FriendsList name="Venul Sachinthra" status="Doing what you like will always keep you happy . ."
                                 pic={pic3}/>
                    <FriendsList name="Methmal Jayasinghe" status="Doing what you like will always keep you happy . ."
                                 pic={pic4}/>
                    <FriendsList name="Nisal Manjitha" status="Doing what you like will always keep you happy . ."
                                 pic={pic5}/>
                    <FriendsList name="Harsha Kaushalya" status="Doing what you like will always keep you happy . ."
                                 pic={pic6}/>
                    <FriendsList name="Kisandu Vidujaya" status="Doing what you like will always keep you happy . ."
                                 pic={pic7}/>
                    <FriendsList name="Yasiru Gimahani" status="Doing what you like will always keep you happy . ."
                                 pic={pic8}/>
                    <FriendsList name="Ranmina Amaranath" status="Doing what you like will always keep you happy . ."
                                 pic={pic2}/>
                </ScrollView>

            </Eux>
        )
    }
}

export default App;