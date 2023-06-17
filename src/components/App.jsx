// import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 30,
        color: '#010101',
        padding: 30,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
