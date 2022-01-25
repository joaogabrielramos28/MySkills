import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
  StatusBar,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";
export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMyskills] = useState([]);
  const [gretting, setGretting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    console.log(currentHour);
    if (currentHour < 12) {
      setGretting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting("Good afternoon");
    } else {
      setGretting("Good night");
    }
  }, []);

  function handleAddNewSkill() {
    setMyskills([...mySkills, newSkill]);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, João</Text>
      <Text style={styles.gretting}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor={"#555"}
        onChangeText={setNewSkill}
      />
      <Button handleAddNewSkill={handleAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
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

  gretting: {
    color: "#fff",
  },
});
