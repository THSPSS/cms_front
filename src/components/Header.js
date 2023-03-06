import '../css/Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authoContext';
import { useContext } from 'react';

function Header() {

    const {currentUser , userLogout } = useContext(AuthContext);

    return (
      <div id="top">
            <h3>
                <Link to="/">PHP 프로그래밍 입문</Link>
            </h3>
            <ul id="top_menu">  
            <li>{currentUser ? currentUser.id :  <Link to="/register" >회원 가입</Link>}</li>  
                <li> | </li>
                <li>{currentUser ?  <p onClick={() => userLogout()}>로그아웃</p> : <Link to="/login" >로그인</Link> }</li>
            </ul>
      </div>
      
    );
  }
  
  export default Header;
  