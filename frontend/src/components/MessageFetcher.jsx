import { useEffect, useState } from "react";
import axios from "axios";

const MessageFetcher = () => {
 const [second, setSecond] = useState("");
 useEffect(() => {
  const fetchlaravel = async () => {
   try {
    const { data } = await axios.get("http://127.0.0.1:8000/");
    setSecond(data.message);
    console.log(data.message);
   } catch (error) {
    console.log(error.message);
   }
  };
  fetchlaravel();
 }, []);

 return <div>MessageFetcher {second}</div>;
};

export default MessageFetcher;
