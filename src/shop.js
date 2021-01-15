import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, withRouter,Link,Route} from 'react-router-dom'; 
import './CSS/Shop/shop.css'; 
import $ from "jquery";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class Shop extends Component{
    componentDidMount() {

        $(".intro").css("opacity", 0);
        $(".border").hover(function (e) {
            var intro = $(e.target).children(".intro");
            console.log(intro);
            intro.css("opacity", 1);
            intro.css("transition", "opacity 2s");

        }, function () {
            $(".intro").css("opacity", 0);
        })

        $(".startbtn").click(function () {

            var offset = $(".section2").offset();
            $('html, body').animate({
                scrollTop: offset.top
            }, 400)
        });

    }

    render() {
        return (
            <>
            <section id= 'third'>
                <div class="third-container">
                    <div class="card card0">
                        <Link to="/ShopImporting/DetailImporting" style={{textDecoration:"none", color:"#000"}}>
                            <div class="border">
                                <h2>이즈백</h2>
                                <div class="intro">
                                    <p>소주의 원조,</p> 
                                    <p>진로가 돌아왔다!</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="card card1">
                    <Link to="/ShopImporting/DetailImporting" style={{textDecoration:"none", color:"#000"}}>
                    <div class="border" href="detail.html">
                        <h2>곰표</h2>
                        <div class="intro">
                        <p>맥주와</p> 
                        <p>밀가루의 만남</p>
                        </div>
                    </div>
                    </Link>
                    </div>
                    <div class="card card2">
                    <Link to="/ShopImporting/DetailImporting" style={{textDecoration:"none", color:"#000"}}>
                    <div class="border" href="detail.html">
                        <h2>남산</h2>
                        <div class="intro">서울을 담은 맥주</div>
                    </div>
                    </Link>
                    </div>
                </div>
            </section>
                 

                 </>
            
        )
    }
        
}
        

export default withRouter(Shop);;
