import React from 'react';
import  Layout from "../layout.jsx";
import Contactos from "@/app/components/ContactosDatos.jsx";
import stylesContact from '@/app/styles/Contact.module.css';
const Contact = () => {
  // Contenido de tu página About
  return (
    <main className={stylesContact.contactMain}>
      {/* Otros componentes o contenido */}
      <Contactos />
    </main>
  );
};

export default Contact;
