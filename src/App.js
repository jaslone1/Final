import React from 'react';
import axios from 'axios';
import './App.css';

import Form from './components/Form';

class App extends React.Component {
  state = {
    contacts: []
  }

  getContacts = () => {
    // ** don't forget to create an env file with your api url! **
    axios.get(process.env.REACT_APP_API_URL)
      .then(res => {
        this.setState({
          contacts: res.data
        });
      });
  }

  deleteContact = (e) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/${e.target.value}`).then(res => {
      this.getContacts();
    });
  }

  createContact = (contactInfo) => {
    axios.post(process.env.REACT_APP_API_URL, contactInfo).then(res => {
      this.getContacts();
    });
  }

  updateContact = (updateInfo, id) => {
    axios.put(`${process.env.REACT_APP_API_URL}/${id}`, updateInfo).then(res => {
      this.getContacts();
    })
  }

  componentDidMount = () => {
    this.getContacts();
  }

  render = () => {
    return <div>
        <h2>Contacts</h2>
        <ul>
            {
                this.state.contacts.length > 0 ? this.state.contacts.map(
                    (contact, index) => {
                        return (
                          <li key={contact.id}>
                              {contact.name}: {contact.age}
                              <button value={contact.id} onClick={this.deleteContact}>
                                  Delete
                              </button>
                              <details><summary>Edit</summary>
                                <Form contact={contact} updateContact={this.updateContact}/>
                              </details>
                          </li>
                        )
                    }
                ) : null
            }
        </ul>
        <h3>Add a Contact</h3>
        <Form createContact={this.createContact} />
    </div>
}
}

export default App;
