import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native'

ShowAnswer = ({answer, answer_input}) => {
    console.log(answer+" "+answer_input)
    if(answer === answer_input){
        return <Text>Correct</Text>
    }else{
        return (
            <View>
                <Text>Incorrect</Text>
                <Text>{"Correct Answer : " + answer}</Text>
            </View>
        )   
    }
}

export default class QuizScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Quiz"
    })
    state = {
        question_number:1,
        answer_input: "",
        answer_pressed: false,
    }
    Answer = () => {
        this.setState({answer_pressed:true})
    }
    render() {
        const { question_number, answer_input, answer_pressed } = this.state
        const { deck } = this.props.navigation.state.params
        const { questions } = deck
        const { question, answer } = questions[question_number-1]
        const question_count = deck.questions.length
        const ready = answer_input === ""
        return(
            <View style={styles.container}>
            {question_count > 0 ?
                <View style={styles.questioncontainer}>
                    <Text style={styles.questionlabel}>{"Question " + question_number + " / " + question_count}</Text>
                    <Text style={styles.questionlabel}>{question}</Text>
                    <TextInput 
                        editable={!answer_pressed}
                        style={styles.txtanswer}
                        onChangeText={(answer_input) => this.setState({answer_input})}
                        value={answer_input}
                        placeholder="Answer"
                    ></TextInput>
                    {!answer_pressed &&
                        <View style={styles.btnanswer}>
                            <Button
                                disabled={ready}
                                onPress={() => this.Answer()}
                                title="Answer"
                            />
                        </View>
                    }
                    {answer_pressed && 
                        <ShowAnswer answer={answer} answer_input={answer_input}></ShowAnswer>                       
                    }
                </View> :
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
    },
    questioncontainer: {
        flex: 1,
        alignItems: 'center',
        margin:30
    },
    questionlabel: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    btnanswer: {
        marginTop: 20,
        width: 150,
    },
    txtanswer: {
        width: 300,
        borderColor: 'gray', 
        marginTop: 20,
        borderWidth: 1, 
        paddingLeft: 10,
        paddingRight: 10,
    },
});