import Transaction from "../composants/transaction/transaction"
import Darkwrapper from "../composants/darkwrapper/darkwrapper"
import Greeting from "../composants/greeting/greeting"

function User() {
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