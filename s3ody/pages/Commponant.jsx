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
import { addphons } from "../db/phonnumbers";
import logo from "../assets/signin/logo.png";
import { getUserUId } from "../db/auth";

export default function Commponant({ navigation }) {
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
          Uid: id,
          availabletoadd: availabletoadd,
          avilabletosend: avilabletosend,
          availabletorequst: availabletorequst,
        });
      });
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.LogoView}>
        <Image source={logo} style={styles.logo} />
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={{ paddingBottom: 200 }}>
          <TextInput
            style={styles.input}
            value={phon}
            onChangeText={setPhon}
            placeholder="ادخل رقم الهاتف"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={availabletoadd}
            onChangeText={setAvailableToAdd}
            placeholder="ادخل القيمة المسموحة للرقم"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={avilabletosend}
            onChangeText={setAvilableToSend}
            placeholder="الرصيد المتاح في الخط "
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={availabletorequst}
            onChangeText={setavailabletorequst}
            placeholder="ادخل القيمة المسموح ارسالها"
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={checkData} style={styles.touchableOpacity}>
            <Text style={styles.touchableOpacityText}>Done</Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      </ScrollView>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: "#4575a8",
    marginTop: 20,
    borderRadius: 50,
    width: 250,
  },
  touchableOpacityText: {
    color: "#f5f5f5",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    paddingBottom: 6,
  },
  LogoView: {
    alignItems: "center",
    marginTop: 0,
  },
  mainView: {
    alignItems: "center",
    marginTop: 25,
  },
  logo: {
    width: 220,
    height: 200,
    borderRadius: 10,
  },
  input: {
    width: 250,
    backgroundColor: "#FFFFFF",
    height: 40,
    borderWidth: 2,
    borderColor: "#4575a8",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  button: {
    backgroundColor: "#4575A8",
    paddingVertical: 3, // Adjust the padding as needed
    paddingHorizontal: 80, // Adjust the padding as needed
    marginTop: 10,
    borderRadius: 25, // Adjust the border radius as needed
    width: 220,
    height: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
