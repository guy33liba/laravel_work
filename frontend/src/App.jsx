import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import MessageFetcher from "./components/MessageFetcher";

function App() {
 const [message, setMessage] = useState("");
 const [second, setSecond] = useState("");
 useEffect(() => {
  const fetchlaravel = async () => {
   try {
    const { data } = await axios.get("http://127.0.0.1:8000/message");
    setMessage(data.message);
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
    setSecond(data.message);
   } catch (error) {
    console.log(error.message);
   }
  };
  fetchlaravel();
 }, []);

 return (
  <>
   hello {message}
   <header>
    <img src={reactLogo} width={50} alt="" />
    <img src={viteLogo} width={50} alt="" />
    <h1>Welcome to the CRM Dashboard</h1>
   </header>
   <h2>Laravel API Message:</h2>
   <MessageFetcher />
  </>
 );
}

export default App;
