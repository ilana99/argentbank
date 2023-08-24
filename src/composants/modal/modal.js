import { useDispatch } from 'react-redux';
import {toggleModal} from '../../features/modal/modal'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { bankApi } from '../../api';
import { setUsername } from "../../features/username/username";
import { useState } from 'react'; 
function Modal() {
    const isOpened = useSelector(state => state.modal.isOpened);
    const token = useSelector(state => state.login.token)
    const dispatch = useDispatch();
    const [newUsername, setNewUsername] = useState('');

    const handleClose = () => {
      dispatch(toggleModal());
    };
  
    //const [updateProfileMutation] = bankApi.endpoints.updateProfile.useMutation();

    // const changeName = async () => {
    //     try {
    //         const newUsername = document.getElementById('username').value;

    //         const response = await updateProfileMutation({
    //           userName: newUsername,
    //         });

    //         dispatch(setUsername(newUsername))
    //     } catch (error) {
    //         console.log('erreur:', error); 
    //     }
    // }
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
          // Handle success response here
          console.log(data);
      })
      .catch(error => {
          // Handle error here
          console.error('Fetch error:', error);
      });
  };


    return (
      <div className={`modal ${isOpened ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={handleClose}>&times;</span>
            <form>
                <label htmlFor="username"> Enter your new username: </label>
                <input type="text" name="username" id="username" value={newUsername} onChange={handleUsernameChange} required />
                <button onClick={changeName}>Send</button>
            </form>
        </div>
      </div>
    );
  }
  
  export default Modal;