import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native'

export default class QuizScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Quiz"
    })
    state = {
        question_number:0
    }
    render() {
        const { question_number } = this.state
        return(
            <View style={styles.container}>
            {question_number > 0 &&
                <Text>{"Question " + question_number}</Text>
            }
            {question_number === 0 &&
                <Text style={styles.label}>Sorry, you cannot take a quiz because there are no cards in the deck</Text>
            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',
        margin: 30,
        fontSize: 18
    }
});