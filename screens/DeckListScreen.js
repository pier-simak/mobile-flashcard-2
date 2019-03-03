import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';


import { DeckList } from '../components/DeckList';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { addDeck } from '../actions/deckactions';
class DeckListScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    return (
      <View style={styles.container}>
        <DeckList navigation={this.props.navigation}></DeckList>
      </View>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});


const mapStateToProps = (state) => {
  const { decks } = state
  return { decks }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addDeck,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen);