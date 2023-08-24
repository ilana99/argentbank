import Transaction from "../composants/transaction/transaction"
import Darkwrapper from "../composants/darkwrapper/darkwrapper"
import Greeting from "../composants/greeting/greeting"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useNavigate } from "react-router-dom"

function User() {
    const loggedIn = useSelector(state => state.login.loggedIn);
    const navigate = useNavigate()

    if (!loggedIn) {
        navigate('/')
        return null //
    }
    return (
        <Darkwrapper>
             <Greeting />
             <Transaction balance="10$" state="Current" bank="Test"/>
             <Transaction balance="10$" state="Current" bank="Test"/>
             <Transaction balance="10$" state="Current" bank="Test"/>
        </Darkwrapper>
       
    )
} 

export default User