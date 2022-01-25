import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMyskills] = useState([]);

  function handleAddNewSkill() {
    setMyskills([...mySkills, newSkill]);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, João</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor={"#555"}
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>
      {mySkills.map((skill) => (
        <TouchableOpacity
          style={styles.buttonSkill}
          key={skill}
          activeOpacity={0.7}
        >
          <Text style={styles.Textskill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#1F1E25",
    marginTop: 30,
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",

    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  Textskill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonSkill: {
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
});
