import React, { ReactNode } from "react";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {
  children: ReactNode;
};
export const OTPInputContainer = ({ children }: Props) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return <View style={styles.container}>{children}</View>;
};
