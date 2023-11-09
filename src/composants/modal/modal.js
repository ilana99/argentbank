import './modal.css'
import { useDispatch } from 'react-redux';
import {toggleModal} from '../../features/modal/modal'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { bankApi } from '../../api';
import { setUsername } from "../../features/username/username";
import { useEffect } from 'react';
import { setLastname } from '../../features/username/username';


function Modal() {
    const isOpened = useSelector(state => state.modal.isOpened);
    const token = useSelector(state => state.login.token)
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.profile.firstName);
    const lastName = useSelector((state) => state.profile.lastName);

    const handleClose = () => {
      dispatch(toggleModal());
    };
  
    const [updateProfileMutation] = bankApi.endpoints.updateProfile.useMutation();


    const changeName = async (event) => {
      event.preventDefault()
        try {
            const username = document.getElementById('username').value;
            const response = await updateProfileMutation({ 
              token, 
              newUsername: username,
            });
            const newUsername = response.data.body.userName;
            dispatch(setUsername(newUsername))
            dispatch(toggleModal())
        } catch (error) {
            console.log('erreur:', error); 
        }
    }

    const [userProfileMutation] = bankApi.endpoints.userProfile.useMutation();

    const fetchProfile = async () => { // api
      try {
        const response = await userProfileMutation({ token });
        const lastName = response.data.body.lastName; 
        if (firstName && lastName) {
          dispatch(setLastname(lastName))
        } 
        //console.log(response.data.body)
      } catch (error) {
        console.log('erreur fetchName:', error);
      }
    }

    useEffect(() => {
      fetchProfile();
     }, [])
  

    return (
      <div className={`modal-${isOpened ? 'open' : ''}`}>
        <div className="modal-content">
          <h2>Edit user info</h2>
            <form>
                <label htmlFor="username"> Username: </label>
                <input type="text" name="username" id="username" required />
                <label htmlFor="firstname"> First name: </label>
                <input type="text" name="firstname" id="username" placeholder={firstName} readOnly />
                <label htmlFor="lastname"> Last name: </label>
                <input type="text" name="lastname" id="username" placeholder={lastName} readOnly />
                <button onClick={changeName}>Send</button>
                <button onClick={handleClose}>Cancel</button>
            </form>
        </div>
      </div>
    );
  }
  
  export default Modal;
