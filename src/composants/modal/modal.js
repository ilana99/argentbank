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
  
    const [updateProfileMutation] = bankApi.endpoints.updateProfile.useMutation();


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
            dispatch(toggleModal())
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
