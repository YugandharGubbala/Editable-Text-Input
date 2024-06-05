import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    text: '',
    btn: false,
  }
  inputchange = event => {
    this.setState({text: event.target.value})
  }
  onsubmitform = event => {
    event.preventDefault()
    this.setState(pre => ({btn: !pre.btn}))
  }
  render() {
    const {text, btn} = this.state
    const check = btn ? 'Edit' : 'Save'
    return (
      <div className="maincontainer">
        <form className="formcontainer" onSubmit={this.onsubmitform}>
          <h1>Editable Text Input</h1>
          <div className="inputandbtn">
            {btn ? <p>{text}</p> : <input type="text" className="element" onChange={this.inputchange} />}
            <button className="btn" type="submit">{check}</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
