import React from 'react'

export default class PasswordInput extends React.Component {

  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      pwdScore: 0
    }
  }

  handleChange(event) {
    let { pwdScore} = this.state
    const password = event.target.value
    const pwLength = password.length
    let lengthScore = 0

    event.persist()
    this.setState(() => {
      return {pwdScore}
    })
  }

  render(){
    const { pwdScore } = this.state
    return <div>
        <input onChange={this.handleChange} type="text"/>
        <span>{pwdScore}</span> 
    </div>

    }


}

