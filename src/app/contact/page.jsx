import React from 'react';
import Contactos from "@/app/components/ContactosDatos.jsx";
import stylesContact from '@/app/styles/Contact.module.css';
const Contact = () => {
  return (
    <main className={stylesContact.contactMain}>
      <Contactos />
    </main>
  );
};

export default Contact;
