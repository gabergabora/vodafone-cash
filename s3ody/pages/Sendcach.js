import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { editphons, editphonssend } from "../db/phonnumbers";
import logo from "../assets/signin/logo.png";
import { getUserUId } from "../db/auth";
import { useNavigation } from "@react-navigation/native";

export default function Sendcach({ route }) {
  const { phon, availabletoadd, avilabletosend, id, availabletorequst } =
    route.params;
  const [send, setsend] = useState("");
  const [addmony, setaddmony] = useState("");
  const navigation = useNavigation();
  const funaddmony = async () => {
    const newavailabletoadd = parseInt(availabletoadd) - parseInt(addmony);
    const newavilabletosend = parseInt(avilabletosend) + parseInt(addmony);
    try {
      await editphons(id, newavailabletoadd, newavilabletosend);
    } catch (error) {
      console.error("Error updating phons:", error);
    }
    navigation.navigate("Home");
  };

  const funsendmony = async () => {
    const newavailabletorequst = parseInt(availabletorequst) - parseInt(send);
    const newavilabletosend = parseInt(avilabletosend) - parseInt(send);
    try {
      await editphonssend(id, newavailabletorequst, newavilabletosend);
    } catch (error) {
      console.error("Error updating phons:", error);
    }
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
      </View>
      <TextInput
        style={styles.input}
        value={send}
        onChangeText={setsend}
        placeholder="ادخل القيمة المراد ارسالها"
      />
      <TouchableOpacity onPress={funsendmony} style={styles.button}>
        <Text style={styles.buttonText}> Done</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={addmony}
        onChangeText={setaddmony}
        placeholder="ادخل القيمة المدخلة للرقم"
      />
      <TouchableOpacity onPress={funaddmony} style={styles.button}>
        <Text style={styles.buttonText}> Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Align items from the top
    marginTop: 10, // Remove any top margin
  },
  signInText: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "blue",
    textDecorationLine: "underline",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: 220,
    height: 200,
    borderRadius: 10,
  },

  input: {
    width: "70%",
    backgroundColor: "#FFFFFF",
    height: 40,
    borderWidth: 1,
    borderColor: "#4575a8",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  button: {
    backgroundColor: "#4575a8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 0,
    borderRadius: 50,
    marginBottom: 30,
  },
});
