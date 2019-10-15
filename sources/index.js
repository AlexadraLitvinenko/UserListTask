import Axios from 'axios';

const getUsers = () => Axios.get('/users');
const createUser = user => Axios.post('/user', user);
const changeUser = ([user, userID]) => Axios.post('/change', [user, userID]);
const deleteUser = userID => Axios.delete('/user', { params: { userID } });

export { getUsers, createUser, deleteUser, changeUser };
