import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { getItem, clearAllDeck, initiateDeck } from '../utils/api'
const initiate_data = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

export class DeckList extends React.Component {
    state = {
        decks: {}
    }
    selectCard = (txt) => {
        // this.setState({selectedDeck: txt})
        
    }
    componentDidMount(){
      this.refreshDeck()
    }
    refreshDeck = () => {
      // initiateDeck(initiate_data)
      // clearAllDeck()
      getItem((data) => {
        this.setState({decks:data})
      })
    }
    render() {
        const {decks} = this.state
        const {navigate} = this.props.navigation;
        if(decks !== null){
          return (
            <View>
                {Object.entries(decks).map(([key,deck]) => (
                    <TouchableOpacity key={key} style={styles.deck} onPress={() => {navigate('DeckDetail', {title: deck.title, deck:deck, deckid:key, refreshDeck: this.refreshDeck.bind(this)})}}>
                        <Text style={styles.label}>{deck.title}</Text>
                        <Text style={styles.cardcount}>{deck.questions.length+" cards"}</Text>
                    </TouchableOpacity>
                ))}
            </View>
          ) 
        }else{
          return <View></View>
        }
    }
}

const styles = StyleSheet.create({
    deck: {
        backgroundColor: '#797FD2',
        alignItems: 'center',
        padding: 20,
    },
    label: {
        fontWeight: 'bold',
        color: '#FFF'
    },
    cardcount: {
        color: '#FFF',
        fontSize: 14
    }
  });
