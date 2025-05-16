import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import MessageFetcher from "./components/MessageFetcher";
import NewUsersFetcher from "./components/NewUsersFetcher";
import FormPost from "./components/FormPost";

function App() {
 const [one, setOne] = useState("");
 const [two, setTwo] = useState("");
 const [three, setThree] = useState("");
 useEffect(() => {
  const fetchlaravel = async () => {
   try {
    const { data } = await axios.get("http://127.0.0.1:8000/message");
    setOne(data.message);
   } catch (error) {
    console.log(error.message);
   }
  };
  fetchlaravel();
 }, []);
 useEffect(() => {
  const fetchlaravel = async () => {
   try {
    const { data } = await axios.get("http://127.0.0.1:8000/");
    setTwo(data.message);
   } catch (error) {
    console.log(error.message);
   }
  };
  fetchlaravel();
 }, []);
 useEffect(() => {
  const helloWorld = async () => {
   try {
    
    const { data } = await axios.get("http://127.0.0.1:8000/hello");
    setThree(data.message);
   } catch (error) {
    console.log(error.message);
   }
  };
  helloWorld();
 }, []);
 return (
  <>
     <div className="header">
   <div className="helloCard">
    <div className="headerContainer">
      <header>
       <img src={reactLogo} width={50} alt="" />
       <img src={viteLogo} width={50} alt="" />
       <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>Welcome to the CRM Dashboard</h1>
       <FormPost />
      </header>
      <h2>Laravel API Message:</h2>
      <p>two:: {one}</p>
      <p>three:: {three}</p>
      <MessageFetcher />
     </div>
    </div>
   </div>
   <div className="newUsersComponent">
    <NewUsersFetcher />
   </div>
  </>
 );
}

export default App;
