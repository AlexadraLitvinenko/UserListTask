import React, { Component } from 'react';

import { createUser, changeUser } from 'source';

import { showError } from 'utils';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: '',
      firstName: '',
      secondName: '',
      email: ''
    };

    this.changeValue = this.changeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.generateID = this.generateID.bind(this);
  }
  //генерируем id для кадого юзера при нажатии "сохранить"
  generateID() {
    var pass = '';
    var strong = 10;
    var dic = 'abcdefghijklmnopqrstuvwxyz1234567890';
    for (var i = 0; i < strong; i++) {
      pass += dic.charAt(Math.floor(Math.random() * dic.length));
    }
    this.setState({ userID: pass });
  }

  changeValue = field => ({ target }) =>
    this.setState({ [field]: target.value });

  onSubmit(e) {
    e.preventDefault();

    const { updateUsersList, modalOpen, userID } = this.props;
    //в зависимости от того открыто ли модальное окно - копка "сохранить" меняет запрос
    if (!modalOpen) {
      createUser(this.state)
        .then(() => {
          updateUsersList();
        })
        .catch(showError);
    } else {
      changeUser([this.state, userID])
        .then(() => {
          updateUsersList();
        })
        .catch(showError);
    }
  }

  render() {
    const { changeValue } = this;

    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Имя
          <input type="text" onChange={changeValue('firstName')} />
        </label>
        <label>
          Фамилия
          <input type="text" onChange={changeValue('secondName')} />
        </label>
        <label>
          Email
          <input type="email" onChange={changeValue('email')} />
        </label>
        <button onClick={this.generateID}>Сохранить</button>
      </form>
    );
  }
}

export default Form;
