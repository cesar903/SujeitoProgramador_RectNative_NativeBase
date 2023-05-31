import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

import Home from './src/pages/'

const config ={
  dependencies:{
    'linear-gradient': LinearGradient
  }
}

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <Home />
    </NativeBaseProvider>
  );
}

