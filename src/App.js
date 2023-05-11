import {Component} from 'react'
import {uuid} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isCount: true,
    input: '',
  }

  onAddCharacters = () => {
    this.setState(prevState => ({isCount: false}))
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {input, isCount} = this.state
    return (
      <div className="container">
        <div className="first-cont">
          <div className="heading-cont">
            <h1 className="heading">
              Count the characters like a<br /> Boss...
            </h1>
          </div>
          {isCount ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="image"
            />
          ) : (
            <ul>
              <li>
                <h1 className="count">static: {input.length}</h1>
              </li>
            </ul>
          )}
        </div>
        <div className="second-cont">
          <h1 className="second-heading">Character Counter</h1>

          <form className="search-container">
            <input
              type="text"
              className="text"
              placeholder="Enter the Characters here"
              value={input}
              onChange={this.onChangeInput}
            />
            <button
              type="submit"
              className="add"
              onClick={this.onAddCharacters}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default App
