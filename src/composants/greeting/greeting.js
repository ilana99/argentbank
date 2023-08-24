import "./greeting.css"
//import { bankApi } from '../../api';
import { useSelector } from "react-redux/es/hooks/useSelector";
import Modal from '../modal/modal'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from '../../features/modal/modal'
import { setUsername } from "../../features/username/username";

function Greeting() {
    const token = useSelector(state => state.login.token)
    //const [userProfileMutation] = bankApi.endpoints.userProfile.useMutation();
    const dispatch = useDispatch();
    const isOpened = useSelector((state) => state.modal.isOpened)
    const username = useSelector((state) => state.profile.username);

    // const fetchName = async () => { // api
    //     try {
    //         const response = await userProfileMutation({ token });
            
    //         //const userName = response.body.userName;
    //         // if (response) {
    //         //     dispatch(setUsername(userName))
    //         // }
    //         console.log(response)
            
    //     } catch (error) {
    //         console.log('erreur fetchName:', error);
    //     }
    // }
    useEffect(() => {
        fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            const username = data.body.userName;
            if (username === null) {
                const newUsername = "Test";
                dispatch(setUsername(newUsername))
            }
            
            console.log(data)
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });
      }, []); 


    // useEffect(() => {
    //     fetchName();
    // }, []);

    const openModal = () => {
        dispatch(toggleModal())
    }

    return (
        <div className="header">
            {isOpened && <Modal />}
            <h1>Welcome back<br />{username}</h1>
            <button className="edit-button" onClick={openModal}>Edit Name</button>
        </div>
    )
}

export default Greeting
