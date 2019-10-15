import React from 'react';
const UsersList = ({ data, deleteUser, modalOpen }) => (
  <div>
    {data.length !== 0 ? (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>{`Id: ${item.userID}`}</p>
            <p>{`First name: ${item.firstName}`}</p>
            <p>{`Second name: ${item.secondName}`}</p>
            <p>{`Email: ${item.email}`}</p>
            <button onClick={deleteUser(item.userID)} id={item.userID}>
              Удалить
            </button>
            <button
              onClick={() => {
                modalOpen(true, item.userID);
              }}
            >
              Изменить
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <h4>Нет данных</h4>
    )}
  </div>
);

export default UsersList;

//<button onClick={() => { this.props.updateData(this.state.name)}}>Запустить бумеранг</button>
