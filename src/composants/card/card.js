import "./card.css"

function Card(props) {
    const {src, titre, text} = props;
    return (
        <div className="feature-item">
            <img src={src} alt="icon" className="feature-icon" />
            <h3 className="feature-item-title">{titre}</h3>
            <p>
               {text}
            </p>
        </div>
    )
}

export default Card
