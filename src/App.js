import logo from "./logo.svg";
import "./App.css";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [clickedUser, setClickedUser] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      let result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(result.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="list">
              {users.map((el) => (
                <div onClick={() => setClickedUser(el.username)}>
                  <UserCard user={el} />
                </div>
              ))}
            </div>
          }
        />
        <Route path="/:id" element={<Profile name={clickedUser} />} />
      </Routes>
    </div>
  );
}

export default App;
