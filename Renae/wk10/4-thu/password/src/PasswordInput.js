import React from 'react'
import estimateStrength from './estimateStrength'
import Bar from './Bar'
import './Bar.css'
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
  

    if (pwdScore === 1){
      return <div>
        < Bar color="red" width={`${pwdScore/5 * 100}%`}/>
          <input onChange={this.handleChange} type="password"/>
          <div><span>{pwdScore}</span> out of 5</div>
      </div>
    } else if(pwdScore === 2){
      return <div>
        < Bar color="orange" width={`${pwdScore/5 * 100}%`}/>
          <input onChange={this.handleChange} type="password"/>
          <div><span>{pwdScore}</span> out of 5</div>
      </div>
    }else if (pwdScore === 3){
      return <div>
        < Bar color="yellow" width={`${pwdScore/5 * 100}%`}/>
          <input onChange={this.handleChange} type="password"/>
          <div><span>{pwdScore}</span> out of 5</div>
      </div>
    } else if(pwdScore === 4){
      return <div>
        < Bar color="green" width={`${pwdScore/5 * 100}%`}/>
          <input onChange={this.handleChange} type="password"/>
          <div><span>{pwdScore}</span> out of 5</div>
      </div>
    }
    else {
      return <div>
        < Bar color="lime" width={`${pwdScore/5 * 100}%`}/>
          <input onChange={this.handleChange} type="password"/>
          <div><span>{pwdScore}</span> out of 5</div>
      </div>
    }

    }


}

