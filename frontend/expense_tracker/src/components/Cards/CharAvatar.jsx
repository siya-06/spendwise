import React from 'react'
const getInitials = (name) => {
  if (!name) return "?";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};
const CharAvatar = ({ fullName, width,height, style}) => {
  return (
    <div className={`${width || 'w-12'} ${style || ''} flex items-center justify-center rounded-full text-gray-900 font-medium bg-gray-100`}>
      {getInitials(fullName || "")}
    </div>
  )
}
 
export default CharAvatar
