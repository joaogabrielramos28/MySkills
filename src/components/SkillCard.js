import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7}>
      <Text style={styles.Textskill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
