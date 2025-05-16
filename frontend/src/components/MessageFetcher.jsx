import { useEffect, useState } from "react";
import axios from "axios";

const MessageFetcher = () => {
 const [one, setOne] = useState("");
 const [two, setTwo] = useState("");
 useEffect(() => {
  const fetchlaravel = async () => {
   try {
    const { data } = await axios.get("http://127.0.0.1:8000/");
    setOne(data.message);
    console.log(data.message);
   } catch (error) {
    console.log(error.message);
   }
  };
  fetchlaravel();
 }, []);
 useEffect(() => {
  const testlaravel = async () => {
   try {
    const { data } = await axios.get("http://127.0.0.1:8000/test");
    setTwo(data.message);
    console.log(data.message);
   } catch (error) {
    console.log(error.message);
   }
  };
  testlaravel();
 }, []);
 return (
  <div>
   MessageFetcher {one}
   <h2>{two}</h2>
  </div>
 );
};

export default MessageFetcher;
