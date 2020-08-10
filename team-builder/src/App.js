import React, { useState } from "react";
import "./App.css";
import Form from "./components/form.js";

function App() {
  const [team, setTeam] = useState([
    { name: "John", email: "john@gmail.com", role: "Project Manager" },
    { name: "Adam", email: "adam@gmail.com", role: "Technical Lead" },
    { name: "Nicole", email: "nicole@gmail.com", role: "Software Developer" },
    { name: "Devon", email: "devon@gmail.com", role: "Software Developer" },
  ]);
  console.log(team);
  return (
    <div className="App">
      <h1>Team Members</h1>
      {team.map((member) => {
        return (
          <div className="team-member">
            <h2>Name: {member.name}</h2>
            <h2>Email: {member.email}</h2>
            <h2>Role: {member.role}</h2>
          </div>
        );
      })}
      <h2>Add a Member</h2>
      <Form currentMembers={team} setCurrentMembers={setTeam} />
    </div>
  );
}

export default App;
