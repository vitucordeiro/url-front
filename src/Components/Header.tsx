import React from "react";

import './Header.css'

type HeaderProps = {
  H1: string,
  description: string
}

const Header: React.FC<HeaderProps> = ({ H1, description }: HeaderProps) => {
  return (
    <>
      <div className="header-container">
        <h1 className="header-h1">{H1}</h1>
        <span className="header-description">{description}</span>

      </div>
    </>)
}
export default Header;