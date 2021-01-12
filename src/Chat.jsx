import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom'; 
import './CSS/Chat/chat.scss'; 
import $ from "jquery";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


class Chat extends Component{
    componentDidMount(){

        var element = $('.floating-chat');
        var myStorage = localStorage;
        
        if (!myStorage.getItem('chatID')) {
            myStorage.setItem('chatID', createUUID());
        }
        
        setTimeout(function() {
            element.addClass('enter');
        }, 1000);
        
        element.click(openElement);
        
        function openElement() {
            var messages = element.find('.messages');
            var textInput = element.find('.text-box');
            element.find('>i').hide();
            element.addClass('expand');
            element.find('.chat').addClass('enter');
            var strLength = textInput.val().length * 2;
            textInput.keydown(onMetaAndEnter).prop("disabled", false).focus();
            element.off('click', openElement);
            element.find('.header button').click(closeElement);
            element.find('#sendMessage').click(sendNewMessage);
            messages.scrollTop(messages.prop("scrollHeight"));
        }
        
        function closeElement() {
            element.find('.chat').removeClass('enter').hide();
            element.find('>i').show();
            element.removeClass('expand');
            element.find('.header button').off('click', closeElement);
            element.find('#sendMessage').off('click', sendNewMessage);
            element.find('.text-box').off('keydown', onMetaAndEnter).prop("disabled", true).blur();
            setTimeout(function() {
                element.find('.chat').removeClass('enter').show()
                element.click(openElement);
            }, 500);
        }

        function createUUID() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4"; 
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
            s[8] = s[13] = s[18] = s[23] = "-";
        
            var uuid = s.join("");
            return uuid;
        }

        
        function sendNewMessage() {
            var userInput = $('.text-box');
            var newMessage = userInput.html().replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');
        
            if (!newMessage) return;
        
            var messagesContainer = $('.messages');
        
            messagesContainer.append([
                '<li class="Me">',
                    newMessage,
                '</li>'
            ].join(''));
        
            // clean out old message
            userInput.html('');
            // focus on input
            userInput.focus();
        
            messagesContainer.finish().animate({
                scrollTop: messagesContainer.prop("scrollHeight")
            }, 250);
        }

        
        function onMetaAndEnter(event) {
            if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
                sendNewMessage();
            }
        }
    }
    
    render() {
        return (
            <section id = 'chatwrap'>
                <div className="floating-chat">
                    <i className="fa fa-comments" aria-hidden="true" style={{ fontSize : "30px"}}/>
                    <div className="chat">
                        <div className="header">
                            <span className="title">문의하기</span>
                            <button>
                                <i className="fa fa-times" aria-hidden="true"/>
                            </button>
                        </div>
                        <ul className="messages">
                            <li className="You">무엇을 도와드릴까요?</li>
                        </ul>
                        <div className="footer">
                            <div className="text-box" contenteditable="true" disabled="true"></div>
                            <button id="sendMessage">✔</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
        

    


export default withRouter(Chat);;
