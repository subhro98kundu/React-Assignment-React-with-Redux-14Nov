import logo from './logo.svg';
import './Main.css';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import ChatList from './ChatList';
import UserList from './UserList';
import EditUser from './EditUser';
import DocumentList from './DocumentList';
import LoginSuccessful from './LoginSuccessful';
import RegisterSuccessful from './RegisterSuccessful';

function Main() {
  return (
    <div className="App">
      <h1>This is main component!!</h1>
      <br /> <br />
      <Welcome />
      <Login />
      <Register />
      <LoginSuccessful />
      <RegisterSuccessful />
      <ChatList />
      <UserList />
      <EditUser />
      <DocumentList />
      <Logout />
    </div>
  );
}

export default Main;
