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
import {addphons} from "../db/phonnumbers";
import logo from "../assets/signin/logo.png";
import { getUserUId } from "../db/auth";
import { useNavigation } from "@react-navigation/native";
export default function Commponant() {
  const navigation = useNavigation();
  const [phon, setPhon] = useState("");
  const [availabletoadd, setAvailableToAdd] = useState("");
  const [avilabletosend, setAvilableToSend] = useState("");
  const [availabletorequst, setavailabletorequst] = useState("");

  const checkData = () => {
    if (
      phon.length === 0 &&
      avilabletosend.length === 0 &&
      availabletoadd.length === 0
    ) {
      alert("معلومات خاطئة");
    } else if (phon.length === 0) {
      alert("من فضلك ادخل رقم الهاتف الصحيح");
    } else if (phon.length !== 11) {
      alert("رقم الهاتف يجب أن يكون 11 رقم فقط.");
    } else if (avilabletosend.length > 100000 || avilabletosend.length < 0) {
      alert("من فضلك ادخل قيمة صحيحة");
    } else {
      getUserUId().then((id) => {
      addphons({
        phon: phon,
        Uid:id,
        availabletoadd: availabletoadd,
        avilabletosend: avilabletosend,
        availabletorequst:availabletorequst
      });
    })
    navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
      </View>
      <TextInput
        style={styles.input}
        value={phon}
        onChangeText={setPhon}
        placeholder="ادخل رقم الهاتف"
      />
      <TextInput
        style={styles.input}
        value={availabletoadd}
        onChangeText={setAvailableToAdd}
        placeholder="ادخل القيمة المسموحة للرقم"
      />
      <TextInput
        style={styles.input}
        value={avilabletosend}
        onChangeText={setAvilableToSend}
        placeholder="الرصيد المتاح في الخط "
      />
      <TextInput
        style={styles.input}
        value={availabletorequst}
        onChangeText={setavailabletorequst}
        placeholder="ادخل القيمة المسموح ارسالها"
      />
      <TouchableOpacity onPress={checkData} style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
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
  logo: {
    width: 220,
    height: 200,
    borderRadius: 10,
  },
  input: {
    width: "70%",
    backgroundColor: "#FFFFFF",
    height: 40,
    borderWidth: 2,
    borderColor: "#4575a8",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius:25,
  },
  button: {
    backgroundColor: "#4575a8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius:50,
    width: 328,
    height: 48,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
