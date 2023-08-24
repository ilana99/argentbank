import "./login.css";
import { useDispatch } from 'react-redux';
import { loginSuccess } from "../../features/login/login";
import { useNavigate } from 'react-router-dom';
import { bankApi } from '../../api';


function Signin() {
  const [userLoginMutation, {isError}] = bankApi.endpoints.userLogin.useMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');

      const email = emailInput.value;
      const password = passwordInput.value;

      const response = await userLoginMutation({ email, password }); // api

      if (response.data) {
      const token = response.data.body.token;
      dispatch(loginSuccess({ email, token })); // state
      navigate('/profile');
      }
     
    } catch (error) {
      console.log('erreur:', error); 
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      {isError && <p>Mauvais identifiants de connexion.</p>}
      <form>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" onClick={event => handleLogin(event)}>Sign In</button>
      </form>
    </section>
  );
}

export default Signin;
