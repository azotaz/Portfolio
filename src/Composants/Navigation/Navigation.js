import React from 'react'

export default function Navigation() {
  const scrollToSection = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Link">
        <a href="#" onClick={(e) => scrollToSection("Acceuil", e)}>Acceuil</a>
        <a href="#" onClick={(e) => scrollToSection("Présentation", e)}>Présentation</a>
        <a href="#" onClick={(e) => scrollToSection("PortFolio", e)}>PortFolio</a>
        <a href="#" onClick={(e) => scrollToSection("Compétences", e)}>Compétences</a>
        <a href="#" onClick={(e) => scrollToSection("Contact", e)}>Contact</a>
    </div>
  )
}