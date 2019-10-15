import Axios from 'axios';
//добавили запросы на изменение и удаление
const getUsers = () => Axios.get('/users');
const createUser = user => Axios.post('/user', user);
const changeUser = ([user, userID]) => Axios.post('/change', [user, userID]);
const deleteUser = userID => Axios.delete('/user', { params: { userID } });

export { getUsers, createUser, deleteUser, changeUser };
