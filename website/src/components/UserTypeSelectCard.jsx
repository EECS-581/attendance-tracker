import Image from "next/image";
import React, { useState } from 'react';

const imageMappings = {
  business: {
    src: "/assets/buisness.png",
    alt: "Business",
  },
  student: {
    src: "/assets/student.png",
    alt: "Student",
  },
  instructor: {
    src: "/assets/teacher.png",
    alt: "Instructor",
  },
};

function UserTypeSelectCard({ name, onSelect }) {
  // Check if the provided 'name' exists in the imageMappings
  const userImage = imageMappings[name.toLowerCase()];

  if (!userImage) {
    throw new Error(`Invalid name: ${name}`);
  }

  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '8px',
    cursor: 'pointer',
    textAlign: 'center',
    backgroundColor: isHovered ? 'powderblue' : 'transparent', // Apply hover background color
  };

  return (
    <div
      style={cardStyle}
      onClick={() => onSelect(name)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={userImage.src}
        alt={userImage.alt}
        width={300}
        height={300}
      />
      <h3 className="text-lg font-bold my-4">{name}</h3>
    </div>
  );
}

export default UserTypeSelectCard;
