import { Link } from "react-router-dom"
import logo from "../../assets/argentBankLogo.png";
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { logout } from "../../features/login/login";
import { useNavigate } from "react-router-dom";

function Header() {
  const icon = <FontAwesomeIcon icon={faCircleUser} />
  const loggedIn = useSelector(state => state.login.loggedIn)

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const logoutFunction = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <nav className="main-nav">
      <Link to="/" >
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {loggedIn ? (
         <>
         <Link to='/profile' className="main-nav-item">
          {icon}
           Tony
         </Link>
         <button onClick={logoutFunction}> Sign out </button>
       </>
        ) : (
          <Link to="/login" className="main-nav-item">
          {icon}
          Sign In
        </Link>
        )}
      </div>
    </nav>
  )
}

export default Header