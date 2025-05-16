import { useEffect, useState } from "react";
import axios from "axios";

const NewUsersFetcher = () => {
 const [users, setUsers] = useState();
 useEffect(() => {
  const fetchUsers = async () => {
   try {
    const { data } = await axios.get("http://127.0.0.1:8000/users");
    console.log(data);
    setUsers(data);
   } catch (error) {
    console.log(error.message);
   }
  };
  fetchUsers();
 }, []);
 return (
  <div>
   <h2 style={{ margin: "20px" }}>New Users</h2>
   <div className="usersContainer">
    {users &&
     users.map((user) => (
      <div key={user.id}>
       <span>id: {user.id}</span>
       <p>{user.name}</p>
       <p>{user.email}</p>
       <p>{user.created_at}</p>
      </div>
     ))}
   </div>
  </div>
 );
};

export default NewUsersFetcher;
