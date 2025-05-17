import axios from "axios";
import { useState } from "react";

const FormPost = () => {
 const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
 });
 const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
 };
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   // Remove CSRF cookie call
   await axios.post("http://127.0.0.1:8000/api/newUser", form);
   alert("User Added");
   setForm({ name: "", email: "", password: "" });
  } catch (error) {
   alert(`Error: ${error.response?.data?.message || error.message}`);
  }
 };
 return (
  <div className="formPost">
   <h1>Form post</h1>
   <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
    <div style={{ marginTop: "20px" }}>
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
    </div>
    <button type="submit" style={{ marginTop: "20px" }}>
     Add User
    </button>
   </form>
  </div>
 );
};

export default FormPost;
