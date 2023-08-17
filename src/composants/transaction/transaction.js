import "./transaction.css"

function Transaction(props) {
    const {balance, state, bank} = props;
    return (
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{bank}</h3>
          <p className="account-amount">{balance}</p>
          <p className="account-amount-description">{state} Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    )
}

export default Transaction