import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import { colors } from "../Styles/colors";
import List from "../Components/List";
import { CATEGORIES } from "../Data/categories";

const CategoriesScreen = () => {
  const [input, setInput] = useState("");
  const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES);

  useEffect(() => {
    if (input === "") setCategoriesFilter(CATEGORIES);
    else {
      console.log("Se ejecuta el efecto");
      const categoriasFiltradas = categoriesFilter.filter((category) =>
        category.category.toLowerCase().includes(input.toLowerCase())
      );
      setCategoriesFilter(categoriasFiltradas);
    }
  }, [input]);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Searcher>
          <TextInput
            value={input}
            onChangeText={setInput}
            keyboardType="default"
            style={styles.input}
          />
          <TouchableOpacity>
            <Text>Find</Text>
          </TouchableOpacity>
        </Searcher>
        <View style={styles.listContainer}>
          <List data={categoriesFilter} />
        </View>
      </View>
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    width: "95%",
    padding: 10,
    margin: 10,
    backgroundColor: colors.black,
    borderRadius: 10,
    color: colors.gray,
  },
});
