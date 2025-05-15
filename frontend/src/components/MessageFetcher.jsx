import React, { useEffect, useState } from "react";

const MessageFetcher = () => {
 const [message, setMessage] = useState("");
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState("");

 useEffect(() => {
  const fetchMessage = async () => {
   try {
    const response = await fetch("/api/message");
    if (!response.ok) {
     throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setMessage(data.message);
   } catch (error) {
    setError(error.message);
   } finally {
    setLoading(false);
   }
  };

  fetchMessage();
 }, []);
 return (
  <div>
   {loading && <p>Loading...</p>}
   {error && <p>Error: {error}</p>}
   {!loading && !error && <p>Message: {message}</p>}
  </div>
 );
};

export default MessageFetcher;
