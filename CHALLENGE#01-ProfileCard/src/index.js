import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="logo192.png" alt="" />;
}

function Intro() {
  return (
    <div>
      <h1>Developer Name</h1>
      <p>Full-stack web developer.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😊" color="blue" />
      <Skill skill="JavaScript" emoji="😂" color="orangered" />
      <Skill skill="HTML+CSS" emoji="🤣" color="yellowgreen" />
      <Skill skill="Web Design" emoji="😎" color="orange" />
      <Skill skill="Git and GitHub" emoji="💻" color="black" />
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color, color: "white" }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
