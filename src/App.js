import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Title from "./components/Title";
import MyName from "./components/MyName";
import Form from "./components/Form";
import Mycount from "./components/Mycount";
import Users from "./components/Users";
import Event from "./Event";
import Range from "./components/Range";
import Submit from "./components/Submit";
import InputFocus from "./components/InputFocus";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Frontend Developer" />
      <Title name="Mobile Developer" />
      <Title name="Solidity Developer" />
      <MyName/>
      <Form/>
      <Mycount/>
      <Users/>
      <Event/>
      <Range/>
      <Submit/>
      <InputFocus/>
    </div>
  );
}

export default App;
