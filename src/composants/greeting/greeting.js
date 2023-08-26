import "./greeting.css"
import { bankApi } from '../../api';
import { useSelector } from "react-redux/es/hooks/useSelector";
import Modal from '../modal/modal'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from '../../features/modal/modal'
import { setUsername } from "../../features/username/username";

function Greeting() {
  const token = useSelector((state) => state.login.token)
  const [userProfileMutation] = bankApi.endpoints.userProfile.useMutation();
  const dispatch = useDispatch();
  const isOpened = useSelector((state) => state.modal.isOpened)
  const username = useSelector((state) => state.profile.username);

  const fetchName = async () => { // api
    try {
      const response = await userProfileMutation({ token });
      const userName = response.data.body.userName;
      if (userName !== null) {
        dispatch(setUsername(userName))
        console.log(response)
      } else {
        const nullUsername = "null";
        dispatch(setUsername(nullUsername))
      }
      
    } catch (error) {
      console.log('erreur fetchName:', error);
    }
  }

  useEffect(() => {
    fetchName();
  }, []);

  const openModal = () => {
    dispatch(toggleModal())
  }


  return (
    <div className="header">
      {isOpened && <Modal />}
      <h1>Welcome back<br />{username}</h1>
      {isOpened ? "" : <button className="edit-button" onClick={openModal}>Edit Name</button>}
    </div>
  )
}

export default Greeting
