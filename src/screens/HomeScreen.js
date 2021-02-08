import React from "react";
import { StyleSheet, View, Text} from "react-native";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native Quiz App</Text>
            <Text style={styles.titleD}>Hi, Huguito :D</Text>
            <Button
                title="Start"
                callback={() => {
                navigation.navigate("Game", { start: true });
                }}
            />
            <Button title="Options" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252c4a",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
    },
    titleD: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#00ff00",
        marginBottom: 20,
    },
});

export default HomeScreen;