import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants";

const FilterCard = ({ filter , setSelectedFilter, selectedFilter}) => {

  return (
    <TouchableOpacity
    onPress={() => setSelectedFilter(filter?.id)}
      style={[
        styles.container,
        {
          backgroundColor:
            filter?.id === selectedFilter
              ? COLORS?.dark?.text
              : COLORS?.dark?.background,
          borderWidth: 1,
          borderColor: COLORS?.dark?.text,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color:
              filter?.id === selectedFilter
                ? COLORS?.dark?.background
                : COLORS?.dark?.text,
          },
        ]}
      >
        {filter.text}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterCard;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "800",
  },
});
