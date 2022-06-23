
import './Header.css'; 
import Menu from '../images/g-menu.png';
import Logo from '../images/logo.png'
import React,{useState} from 'react';





function Header () {

const [login,isLogin]=useState( <button>Sign in</button>);

function getRandomAvatar(){
  const AVATAR_LIST=[<button>Sign in</button>,<img src={Logo} />]
  const randomIndex =Math.trunc(Math.random()*2)
  return AVATAR_LIST[randomIndex]

}

function getRandomAvatar(){
  const AVATAR_LIST=[<button>Sign in</button>,<img src={Logo} />]
  const randomIndex =Math.trunc(Math.random()*2)
  return AVATAR_LIST[randomIndex]

}


function handleLogin(){

  const newAvatar =getRandomAvatar();
  isLogin(newAvatar);
  console.log('login');
}



return(
    <div className='header-item'>
  <nav>
      	<a href="#">Gmail</a>
      	<a href="#">Images</a>
          <img src={Menu} />

      	<div onClick={handleLogin} > 
       <div>{login}</div>

        </div>
      </nav>

    </div>

);
}
export default Header;