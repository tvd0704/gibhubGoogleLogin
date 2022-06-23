
import './App.css';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';
import React, { useState } from 'react';
import LoginForm from './login/LoginForm';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, serError] = useState("");
  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log('logged in');
      setUser(
        {

          name: details.name,
          email: details.email

        }
      );
    }
    else {
      console.log('detail do not match!')
      serError('detail do not match!')
    }
  }
  const Logout = () => {
    setUser({ name: "", email: "" });
  }
  return (
    <div>
      <Header></Header>
      <div>
        {(user.email != "") ? (
          <Body></Body>
        ) :
          (
            <LoginForm Login={Login} error={error}></LoginForm>
          )
        }
      </div>
      {/* <Login></Login> */}
      <Footer></Footer>

    </div>





  );
}

export default App;
