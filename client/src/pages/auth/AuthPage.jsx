import React, { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBookOpen,
  faLightbulb,
  faClipboardList,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const icons = [
  faGraduationCap,
  faBookOpen,
  faLightbulb,
  faClipboardList,
  faGlobe,
];

function getRandomPosition() {
  const top = Math.floor(Math.random() * 80) + 5;
  const left = Math.floor(Math.random() * 80) + 5;
  return { top: `${top}%`, left: `${left}%` };
}

function AuthPage() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const pos = Array(5)
      .fill(0)
      .map(() => getRandomPosition());
    setPositions(pos);
  }, []);

  return (
    <div>
       <Outlet /> {/* This is where login/signup will be rendered */}

      {icons.map((icon, i) => (
        <FontAwesomeIcon
          key={i}
          icon={icon}
          className="absolute text-[#2578c6]"
          style={{
            top: positions[i]?.top,
            left: positions[i]?.left,
            fontSize: "2.5rem",
          }}
        />
      ))}
    </div>
  );
}

export default AuthPage;
