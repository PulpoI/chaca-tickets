import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Header</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: colors.gray,
  },
});
