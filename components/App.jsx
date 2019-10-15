import React, { Component } from 'react';
import Modal from 'react-modal';
import Form from './Form';
import UsersList from './UsersList';
import { getUsers, deleteUser, changeUser } from 'source';
import { showError } from 'utils';
Modal.setAppElement(document.getElementById('root'));
class App extends Component {
  state = {
    users: [],
    modalOpen: false,
    userID: ''
  };

  modalOpen = (value, ID) => {
    this.setState({ modalOpen: value });
    this.setState({ userID: ID });
  };
  modalClose = value => {
    this.setState({ modalOpen: false });
  };
  modalMount = () => {
    return <Form updateUsersList={updateUsersList} />;
  };

  updateUsersList = () => {
    getUsers()
      .then(({ data }) => this.setState({ users: data }))
      .catch(showError);
  };

  deleteUser = userID => () => {
    deleteUser(userID)
      .then(() => {
        this.updateUsersList();
      })
      .catch(showError);
  };

  componentDidMount() {
    getUsers()
      .then(({ data }) => this.setState({ users: data }))
      .catch(showError);
  }

  render() {
    const { updateUsersList, deleteUser, changeUser, modalOpen } = this;
    const { users, userID } = this.state;

    return (
      <div>
        <UsersList data={users} deleteUser={deleteUser} modalOpen={modalOpen} />
        {this.state.modalOpen ? (
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.modalClose}
            contentLabel="Modal"
          >
            <div>
              <Form
                updateUsersList={updateUsersList}
                modalOpen={modalOpen}
                userID={userID}
              />
            </div>
          </Modal>
        ) : null}
        <Form updateUsersList={updateUsersList} />
      </div>
    );
  }
}

export default App;
