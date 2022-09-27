import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, Keyboard, Pressable, StyleSheet } from "react-native";
import OTPInput from "./components/OTP/OTPInput";

export default function App() {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 6;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#141414",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <OTPInput
        code={otpCode}
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}
      />
      <Button
        title="Submit"
        disabled={!isPinReady}
        onPress={() => {
          Alert.alert("Sup Yo!", otpCode);
        }}
      ></Button>
      <StatusBar style="auto" />
    </Pressable>
  );
}
