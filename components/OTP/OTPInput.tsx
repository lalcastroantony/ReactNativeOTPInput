import React, { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { OTPInputContainer } from "./Styles";

export default function OTPInput({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
}: any) {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef() as React.MutableRefObject<TextInput>;
  console.log(boxArray.length);

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    setIsPinReady(code.length === maximumLength);
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  const styles = StyleSheet.create({
    textInput: {
      position: "absolute",
      opacity: 0,
    },
    pressable: {
      width: "80%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      padding: 16,
    },
  });

  const BoxDigit = (_: any, index: number) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const styles = StyleSheet.create({
      view: {
        borderBottomColor: "yellow",
        borderBottomWidth: 2,
        margin: 12,
        width: 45,
        height: 50,
      },
      viewFocused: {
        borderBottomColor: "white",
        borderBottomWidth: 2,
        margin: 12,
        width: 45,
        height: 50,
      },
      text: {
        fontSize: 20,
        textAlign: "center",
        color: "#e5e5e5",
      },
    });
    return (
      <View
        key={index}
        style={
          isInputBoxFocused && isValueFocused ? styles.view : styles.viewFocused
        }
      >
        <Text style={styles.text}>{digit}</Text>
      </View>
    );
  };

  return (
    <OTPInputContainer>
      <Pressable
        style={styles.pressable}
        onPress={handleOnPress}
        onBlur={handleOnBlur}
      >
        {boxArray.map(BoxDigit)}
      </Pressable>
      <TextInput
        style={styles.textInput}
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        keyboardType="number-pad"
      ></TextInput>
    </OTPInputContainer>
  );
}
