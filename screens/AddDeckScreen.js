import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native'

export default class AddDeckScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
        deckTitle: ""
    }
    Submit = () => {

    }
    render(){
        return(
            <View style={styles.container}>
                    <Text style={styles.label}>What is the title of your new deck?</Text>
                    <TextInput 
                        style={styles.txtDeck}
                        onChangeText={(deckTitle) => this.setState({deckTitle})}
                        value={this.state.deckTitle}
                        placeholder="Deck Title"
                    ></TextInput>
                    <View style={styles.btnsubmit}>
                        <Button
                            onPress={() => this.Submit()}
                            title="Create Deck"
                        />
                    </View>
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtDeck: {
        width: '80%',
        borderColor: 'gray', 
        marginTop: 20,
        borderWidth: 1, 
        paddingLeft: 10,
        paddingRight: 10,
    },
    btnsubmit: {
        marginTop: 20,
        width: 150,
    },
})