import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import logo from "../assets/signin/logo.png";
import { useNavigation } from "@react-navigation/native";
import { getphons, subscribephons, deletephons } from "../db/phonnumbers";

export function Phoneitem({
  phon,
  availabletoadd,
  avilabletosend,
  onDeletePost,
  id,
  availabletorequst
}) {
  const handleDelete = () => {
    onDeletePost(id);
  };
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Sendcach", {
            phon: phon,
            availabletoadd: availabletoadd,
            avilabletosend: avilabletosend,
            availabletorequst:availabletorequst,
            id:id
          });
        }}
      >
        <View style={styles.phoneItem2}>
          <Text style={styles.buttonText}>رقم الهاتف: {phon}</Text>
          <Text style={styles.buttonText}>الرصيد المتاح : {avilabletosend}</Text>
          <Text style={styles.buttonText}>
            المتاح ادخاله للرقم: {availabletoadd}
          </Text>
          <Text style={styles.buttonText}>المتاح تحويل للرقم :{availabletorequst}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchableOpacityitem}
        onPress={handleDelete}
      >
        <Text style={styles.touchableOpacityText}>حذف الرقم</Text>
      </TouchableOpacity>
    </View>
  );
}
export default function Home() {
  const navigation = useNavigation();
  const [phonelist, setphonelist] = useState([]);

  const fetchPhoneData = async () => {
    const posts = await getphons();
    setphonelist(posts);
  };
  const handleDeletePost = (PhoneId) => {
    deletephons(PhoneId);
  };
  
  useEffect(() => {
    fetchPhoneData();
    const unsubscribe = subscribephons(() => {
      fetchPhoneData();
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Image source={logo} style={styles.logo} />
        </View>
        <ScrollView>
          <View>
            <Text
              style={{
                color: "#424242",
                fontSize: 22,
                fontWeight: "bold",
                textAlign: "center",
                alignSelf: "center",
                paddingBottom: 12,
                
              }}
            >
              ارقام فودافون كاش
            </Text>
            {phonelist.map((e, index) => (
              <Phoneitem
                phon={e.phon}
                availabletoadd={e.availabletoadd}
                avilabletosend={e.avilabletosend}
                availabletorequst={e.availabletorequst}
                key={index}
                id={e.id}
                onDeletePost={handleDeletePost}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          navigation.navigate("Commponant");
        }}
      >
        <Text style={styles.touchableOpacityText}>اضافة رقم هاتف جديد </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 240,
    height: 240,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Align items from the top
    marginTop: 28, // Remove any top margin
  },
  touchableOpacity: {
    position: "//#endregion",
    backgroundColor: "#4575a8",
    margin: 50,
    borderRadius: 50,
  },
  touchableOpacityitem: {
    position: "//#endregion",
    backgroundColor: "#4575a8",
    margin: 10,
    borderRadius: 50,
  },
  touchableOpacityText: {
    color: "#f5f5f5",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    paddingBottom:6
  },
  phoneItem2: {
    backgroundColor: "#white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2, // Set the border width
    borderColor: "gray", // Set the border color
  },
  buttonText: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
  },
});
