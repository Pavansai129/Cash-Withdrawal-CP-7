// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, onWithdrawAmount} = props
  const {value} = denominationItem
  const withdraw = () => {
    onWithdrawAmount(value)
  }
  return (
    <li>
      <button type="button" className="denomination" onClick={withdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
