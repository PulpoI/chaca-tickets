import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

const Searcher = ({ children }) => {
  return <View style={styles.searcherContainer}>{children}</View>;
};

export default Searcher;

const styles = StyleSheet.create({
  searcherContainer: {
    backgroundColor: colors.regularBlue,
    width: "90%",
    height: 120,
    marginVertical: 20,
    borderRadius: 12,
  },
});
