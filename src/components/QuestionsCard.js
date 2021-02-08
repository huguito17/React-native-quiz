//Sera el encargado de recibir los datos de la pregunta (pregunta y respuesta)
import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const QuestionCard = ({
    question,
    answers,
    userAnswer,
    questionNumber,
    totalQuestions,
    correctAnswer,
    callback,
}) =>{

    /*
    //OTRA FORMA DE VALIDAR EL COLOR DE LOS BOTONES EN RESPUESTAS
    const questionButtonStyle = (answer) => {
        if (userAnswer === answer && answer === correctAnswer ){
            return style.correctAnswer;
        };
    };
    */
    return(
        <View style={styles.container}>
        <Text style={styles.counter}>
            Question: {questionNumber} / {totalQuestions}
        </Text>
        <Text style={styles.question}>{question}</Text>
        <View>
            {answers.map((answer) => (
                <TouchableOpacity
                key={answer}
                style={
                    userAnswer 
                    ? userAnswer === answer && answer === correctAnswer 
                        ? styles.correctAnswer 
                        : answer === correctAnswer ? styles.correctAnswer : styles.incorrectAnswer 
                        : styles.answerButton
                }
                onPress={() => {
                callback(answer);
                }}
                disabled={userAnswer ? true : false}
                >
                    <Text style={styles.answerButtonText}>{answer}</Text>
                </TouchableOpacity>
        ))};
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 15,
        justifyContent: "center",
    },
    counter:{
        fontSize: 26,
        color: "8a93bb",
        marginBottom: 50,
        paddingBottom: 10,
        borderStyle: "dotted",
        borderBottomWhidth: 2,
        borderColor: "#454d6e",

    },
    question: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    answerButton: {
        textAlign: "center",
        padding: 15,
        borderWidth: 3,
        borderColor: "#21486a",
        borderRadius: 20,
        marginBottom: 5,
    },
    answerButtonText: {
        fontSize: 18,
        color: "#ffffff",
    },
    correctAnswer: {
        textAlign: "center",
        padding: 15,
        borderWidth: 3,
        borderColor: "#06d6a0",
        borderRadius: 20,
        marginBottom: 5,
    },
    incorrectAnswer: {
        textAlign: "center",
        padding: 15,
        borderWidth: 3,
        borderColor: "#ef476f",
        borderRadius: 20,
        marginBottom: 5,
    },
    });
export default QuestionCard;
1;