import { Link } from "react-router-dom"
import logo from "../../assets/argentBankLogo.webp";
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { logout } from "../../features/login/login";
import { useNavigate } from "react-router-dom";
import {bankApi} from "../../api";
import { useEffect } from "react";
import { setFirstname } from "../../features/username/username";

function Header() {
  const icon = <FontAwesomeIcon icon={faCircleUser} />
  const iconLogOut = <FontAwesomeIcon icon={faRightFromBracket} />
  const loggedIn = useSelector(state => state.login.loggedIn)
  const token = useSelector(state => state.login.token)
  const firstName = useSelector((state) => state.profile.firstName);


  const [userProfileMutation] = bankApi.endpoints.userProfile.useMutation();

  const fetchProfile = async () => { // api
    try {
      const response = await userProfileMutation({ token });
      const firstName = response.data.body.firstName;
      dispatch(setFirstname(firstName))
    } catch (error) {
      console.log('erreur fetchName:', error);

    }
  }
   
    useEffect(() => {
      if (loggedIn) {
        fetchProfile();
      }
     }, [])
   

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
           {firstName}
         </Link>
         <button onClick={logoutFunction} className="signout"> {iconLogOut} Sign out </button>
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