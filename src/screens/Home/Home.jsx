import React, {Component} from 'react';
import { View, Text} from 'react-native';
import styles from './Home.styles';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export default Home;
