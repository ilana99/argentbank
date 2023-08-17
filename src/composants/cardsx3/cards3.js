import Card from "../card/card"
import "./cards3.css"
import iconchat from "../../assets/icon-chat.png"
import iconmoney from "../../assets/icon-money.png"
import iconsecurity from "../../assets/icon-security.png"

function Cards() {
    return(
        <section className="features">
            <h2 className="sr-only">Features</h2>
        <Card src={iconchat} titre="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
        <Card src={iconmoney} titre="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!"/>
        <Card src={iconsecurity} titre="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe."/>
        </section>
       
    )
}

export default Cards