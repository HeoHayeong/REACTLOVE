import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, withRouter} from 'react-router-dom'; 
import './CSS/Home/home.css'; 
import $ from "jquery";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
          currentView: "signUp"
        }
      }
      
      changeView = (view) => {
        this.setState({
          currentView: view
        })
      }
    
      currentView = () => {
        switch(this.state.currentView) {
          case "signUp":
            return (
              <form>
                <h2>회원가입</h2>
                <fieldset>
                  <legend>Create Account</legend>
                  <ul>
                    <li>
                      <label for="username">이름</label>
                      <input type="text" id="username" required/>
                    </li>
                    <li>
                      <label for="email">이메일:</label>
                      <input type="email" id="email" required/>
                    </li>
                    <li>
                      <label for="password">비밀번호:</label>
                      <input type="password" id="password" required/>
                    </li>
                  </ul>
                </fieldset>
                <button>가입하기</button>
                <button type="button" onClick={ () => this.changeView("logIn")}>이미 회원이세요?</button>
              </form>
            )
            break
          case "logIn":
            return (
              <form>
                <h2>환영합니다</h2>
                <fieldset>
                  <legend>로그인</legend>
                  <ul>
                    <li>
                      <label for="username">이름:</label>
                      <input type="text" id="username" required/>
                    </li>
                    <li>
                      <label for="password">비밀번호:</label>
                      <input type="password" id="password" required/>
                    </li>
                    <li>
                      <i/>
                      <a onClick={ () => this.changeView("PWReset")} href="#">비밀번호를 잊어버렸나요?</a>
                    </li>
                  </ul>
                </fieldset>
                <button>Login</button>
                <button type="button" onClick={ () => this.changeView("signUp")}>회원가입</button>
              </form>
            )
            break
          case "PWReset":
            return (
              <form>
              <h2>비밀번호 찾기</h2>
              <fieldset>
                <legend>비밀번호 리셋</legend>
                <ul>
                  <li>
                    <em>임시 비밀번호가 이메일로 전송됩니다.</em>
                  </li>
                  <li>
                    <label for="email">이메일:</label>
                    <input type="email" id="email" required/>
                  </li>
                </ul>
              </fieldset>
              <button>비밀번호찾기</button>
              <button type="button" onClick={ () => this.changeView("logIn")}>뒤로가기</button>
            </form>
            )
          default:
            break
        }
      }

    componentDidMount(){
      
      var d = new Date;
      $("#day").text(d.getDate());
      var monthNames = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December" ];
      $("#month").text(monthNames[d.getMonth()]);
      $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
      });
    }
      
    render() {
        return (

          <section id = 'first'>
            <section id="entry-page">
              {this.currentView()}
            </section>
            <div id="widget">
              <div id="outline">
                  <div id="day"></div>
                  <div id="month"></div>
              </div>
                </div>
            </section>
        )
    }
}
        

export default withRouter(Home);;
