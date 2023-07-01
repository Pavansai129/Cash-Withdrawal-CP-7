// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdrawAmount = amount => {
    const {balance} = this.state
    if (balance >= amount) {
      const remainingBalance = balance - amount
      this.setState({
        balance: remainingBalance,
      })
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="profile-container">
            <p className="profile">S</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance-text">Your Balance</p>
            <div className="balance-rupees">
              <p className="balance-amount">{balance}</p>
              <p className="in-rupees-text">in Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="in-rupees-text">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <div className="denomination-container">
            <ul className="denominations">
              {denominationsList.map(each => (
                <DenominationItem
                  denominationItem={each}
                  key={each.id}
                  onWithdrawAmount={this.onWithdrawAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
