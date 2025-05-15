import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
function App() {
 const [message, setMessage] = useState("");

 useEffect(() => {
  const fetchlaravel = async () => {
   try {
    const { data } = await axios.get("http://127.0.0.1:8000/");
    setMessage(data.message);
   } catch (error) {
    console.log(error.message);
   }
  };
  fetchlaravel();
 }, []);

 

 return <>hello {message}</>;
}

export default App;
