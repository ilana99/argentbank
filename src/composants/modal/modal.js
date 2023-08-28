import './modal.css'
import { useDispatch } from 'react-redux';
import {toggleModal} from '../../features/modal/modal'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { bankApi } from '../../api';
import { setUsername } from "../../features/username/username";

function Modal() {
    const isOpened = useSelector(state => state.modal.isOpened);
    const token = useSelector(state => state.login.token)
    const dispatch = useDispatch();

    const handleClose = () => {
      dispatch(toggleModal());
    };
  
<<<<<<< HEAD
   
    const handleUsernameChange = (event) => {
      setNewUsername(event.target.value);
  };

    const changeName = () => {
      fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'PUT',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              userName: newUsername
          })
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log(data);
      })
      .catch(error => {
          console.error('Fetch error:', error);
      });
  };
=======
    const [updateProfileMutation] = bankApi.endpoints.updateProfile.useMutation();
>>>>>>> 2d97c9dfc2fe2a2c5d4d22f531ab7b1084560a59

    const changeName = async (event) => {
      event.preventDefault()
        try {
            const oldUsername = document.getElementById('username').value;
            const response = await updateProfileMutation({ 
              token, 
              newUsername: oldUsername,
            });
            const newUsername = response.data.body.userName;
            dispatch(setUsername(newUsername))
            //console.log(newUsername)
        } catch (error) {
            console.log('erreur:', error); 
        }
    }

    return (
      <div className={`modal-${isOpened ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={handleClose}>&times;</span>
            <form>
                <label htmlFor="username"> Enter your new username: </label>
                <input type="text" name="username" id="username" required />
                <button onClick={changeName}>Send</button>
            </form>
        </div>
      </div>
    );
  }
  
  export default Modal;
