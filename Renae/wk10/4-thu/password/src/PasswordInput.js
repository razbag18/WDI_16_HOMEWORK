import React from 'react'
import estimateStrength from './estimateStrength'
export default class PasswordInput extends React.Component {

  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      pwdScore: 0
    }
  }

  handleChange(event) {
    const password = event.target.value

    event.persist()
    this.setState(() => {
      return {pwdScore: estimateStrength(password).score}
    })
  }

  render(){
    const { pwdScore } = this.state
    return <div>
        <input onChange={this.handleChange} type="text"/>
        <div style= "green" className= "result-definer"></div>
        <span>{pwdScore}</span> 
    </div>

    }


}

