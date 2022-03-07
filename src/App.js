import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { login, logout, signup, useAuth } from "./firebase";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import './style.css'; 


function App(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [loading, setLoading] = useState(false);

    const currentUser = useAuth();

    const handleSignup = async () => {
      setLoading(true);
      try{
        await signup(email, password);
      } catch {
        alert("Error !!!");
      }
      setLoading(false);
    }

    const handleLogout = async () => {
      setLoading(true);
      try{
        await logout();
      } catch {
        alert("Error !!")
      }
      setLoading(false);
    }

    const handleLogin = async () => {
      setLoading(true);
      try{
        await login(email, password);
      } catch {
        alert("Error !!")
      }
      setLoading(false);
    }

    return(
      <>
        <h1>Hello</h1>
        <h3>Currently logged in as : {currentUser?.email}</h3>
        <div>
          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
          <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
          <button disabled={loading || currentUser!= null} onClick={handleSignup}>Sign up</button>
          <button disabled={loading || currentUser != null} onClick={handleLogin}>Log in</button>
          <button disabled={loading || currentUser == null} onClick={handleLogout}>Log out</button>
        </div>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </>
    )
  
}


export default App;