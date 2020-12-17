import React from 'react';
import './App.css';
import Container from './Container/abc.js';
import Container1 from './Container/index1.js'
import { Filler } from './Filler';
import { API } from 'aws-amplify';
import { listNotes } from './graphql/queries';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { createNote as createNoteMutation } from './graphql/mutations';



const App = () => {
  const triggerText = 'Open form';
  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    console.log(apiData.data.listNotes.items);
    // setNotes(apiData.data.listNotes.items);
  }
  async function createNote(name,email,password,account) {
    const formData = {name:name,email:email,password:password,account:account}
    // if (!formData.name || !formData.email) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
  }
  const onForm1Submit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.account.value);
    console.log(event.target.password.value);
    
    createNote(event.target.name.value,event.target.email.value,event.target.password.value,event.target.account.value);
  };
  const onForm2Submit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.account.value);
    fetchNotes();
  };
 
 
  return (
    <div className="App">
      <Filler />
      <Container triggerText={triggerText} onSubmit={onForm1Submit} />     
      <Container1 triggerText={triggerText} onSubmit={onForm2Submit} />    
       <AmplifySignOut />
    </div>
  );
};

export default withAuthenticator(App);
