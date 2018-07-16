import React, {Component} from 'react';
import CardImage from "../../Components/CardImage/CardImage";
import Eux from "../../hoc/Eux/Eux";
import {Button, Text, View} from "native-base";
import {ScrollView} from "react-native";

import Card1 from '../../../Content/beard_man_large.png';
import Card2 from '../../../Content/download.png';
import Card3 from '../../../Content/ffd7722293cbc60f6bf81a9add855016.jpg';
import Card4 from '../../../Content/one.jpg';
import Header from "../../Components/Header/Header";



class App extends Component {

    state = {
        info: ['a', 'b', 'c', 'd']
    };


    render() {
        const set = this.state.info.map(inf => (
            <CardImage key={inf}/>
        ));
        return (
            <Eux>

                <Header title="Social details"/>

                <ScrollView>
                    <CardImage image={Card4}/>
                    <CardImage image={Card3}/>
                    <CardImage image={Card2}/>
                    <CardImage image={Card1}/>

                </ScrollView>

                <View style={{display:'flex',flexDirection:'row',alignItems: 'center',justifyContent: 'center',backgroundColor:'transparent'}}>
                    <Button rounded info style={{backgroundColor:'pink'}} onPress={this.props.backHandler}>
                        <Text rounded>BACK</Text>
                    </Button>
                    <View style={{width:200}}/>
                    <Button rounded  info style={{backgroundColor:'#00b386'}} onPress={this.props.socialAccountDetailsHandler}>
                        <Text>NEXT</Text>
                    </Button>
                </View>

            </Eux>

        );
    }

}

export default App;