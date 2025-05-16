import React, { useState } from "react";

const FormPost = () => {
 const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
 });
 const handleChange = (e) => {
  setForm(() => ({ ...form, [e.target.name]: e.target.value }));
 };
 const handleSubmit = async (e) => {
  e.preventDefault();
 };
 return (
  <div>
   <h1>Form post</h1>
   <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
    <input
     type="text"
     name="name"
     placeholder="name"
     value={form.name}
     onChange={handleChange}
     required
    />
    <input
     type="text"
     name="email"
     placeholder="Email"
     value={form.email}
     onChange={handleChange}
     required
    />
    <input
     type="password"
     name="password"
     placeholder="Password"
     value={form.password}
     onChange={handleChange}
     required
    />
    <button type="submit">Add User</button>
   </form>
  </div>
 );
};

export default FormPost;
