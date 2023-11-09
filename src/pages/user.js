import Transaction from "../composants/transaction/transaction"
import Darkwrapper from "../composants/darkwrapper/darkwrapper"
import Greeting from "../composants/greeting/greeting"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { Navigate } from "react-router-dom"

function User() {
    const loggedIn = useSelector(state => state.login.loggedIn);
   
    return (
        <>
            {loggedIn ? 
            <Darkwrapper>
                <Greeting />
                <Transaction balance="10$" state="Current" bank="Argent Bank" />
                <Transaction balance="10$" state="Current" bank="Argent Bank" />
                <Transaction balance="10$" state="Current" bank="Argent Bank" />
            </Darkwrapper>
                :
                <Navigate to="/" />
            }
        </>
    )
}

export default User