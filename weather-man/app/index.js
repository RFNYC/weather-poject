import React, { useEffect, useState } from "react";
import { Link } from 'expo-router'
import { Button, Text, TouchableOpacity, View, PermissionsAndroid } from "react-native";
import { storeData, getData } from './helpers/asyncHelper.js'

export default function MainComp() {

  // Creates Placeholder username. Can be changed via setName(x).
  const [userName, setName] = useState("User");

  // Creates a function that can call the storeData func.
  async function saveButton(){
    storeData(userName, "name-key")
    console.log("save attempted")
  }

  // Creates a function to call getData func.
  async function loadButton(){
    const name_check = await getData()
    console.log(name_check)
    console.log(await getData("name-key"))
    setName(name_check)
  }


    return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
          <TouchableOpacity onPress={() => setName("bob")}>
            <Text>This changes my userName to bob.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setName("zaire")}>
            <Text>This changes my userName to zaire.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => saveButton()}>
            <Text>This saves the current userName.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => loadButton()}>
            <Text>This gets the current userName when pressed. USERNAME NOW: {userName}</Text>
          </TouchableOpacity>


          <Link href="/page2" style={{paddingTop:20}}>view location info</Link>
      </View>
    </View>
  );
}
