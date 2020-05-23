import React from 'react';
import Header from "./Header";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      userLogin: '',
      isLoggedIn: false,
    }
  }

  updateCounter() {
    this.setState({
      counter: ++this.state.counter
    })
  }

  onInputChange(e) {
    this.setState({
      userLogin: e.target.value,

    })
  }

  onLogin() {
    if (this.state.userLogin === 'admin') {
      alert('Welcome to site')
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  render() {
    return (
      <div className={'page'}>
        <Header username={'Вася'} isLogin={false}/>
        <h1>React js app</h1>
        <h1 className={'page__header'}>User's</h1>
        <ul className={"page__users"}>
          <li className={"user"}>Vasiliy</li>
        </ul>
        <button onClick={() => this.updateCounter()}>Use button</button>
        <p>{this.state.counter}</p>
        <div className="form">
          <input type="text" placeholder={"Ваш логин"} onChange={event => this.onInputChange(event)}/>
          <button onClick={() => this.onLogin()}>Войти</button>
        </div>
      </div>
    )
  }
}