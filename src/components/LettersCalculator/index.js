// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, input: ''}

  countDigit = event => {
    this.setState({input: event.target.value})
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  resetCount = () => {
    this.setState({count: 0})
    this.setState({input: ''})
  }

  render() {
    const {count, input} = this.state

    return (
      <div className="bg">
        <div className="calculator">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label className="instructions" htmlFor="count">
              Enter the phrase
            </label>
            <input
              id="count"
              type="text"
              placeholder="Enter the phrase"
              className="input"
              onChange={this.countDigit}
              value={input}
            />
          </div>
          <p className="counter" onClick={this.resetCount}>
            No.of letters: {count}
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
