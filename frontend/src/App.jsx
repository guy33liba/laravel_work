import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import MessageFetcher from "./components/MessageFetcher";
import NewUsersFetcher from "./components/NewUsersFetcher";

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
   hello {one}
   <header>
    <img src={reactLogo} width={50} alt="" />
    <img src={viteLogo} width={50} alt="" />
    <h1>Welcome to the CRM Dashboard</h1>
   </header>
   <h2>Laravel API Message:</h2>
   <MessageFetcher />
   <NewUsersFetcher />
   {three}
  </>
 );
}

export default App;
