import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, withRouter} from 'react-router-dom'; 
import './CSS/Detail/detail.scss'; 




class Detail extends Component{

    render() {
        return (

            <section id= 'second'>
                <div class="second-container">
                    <div class="box">
                        <div class="product__img">
                            <img src='//assabeer.com/web/product/big/20200427/4533d733f0bc46272b720bd311b8afce.jpg'/>
                        </div>
                        <div class="product__disc">
                            <div class="product__disc--content">
                                <div class="disc__content--about">
                                    <h1>진로 이즈 백</h1>
                                    <span>소주의 원조,진로가 돌아왔다!</span>
                                    <p>대한민국 원조 소주 진로의 옛 감성과 향수 그대로 감각적인 맛과 디자인으로 돌아왔습니다.</p>
                                </div>
                            </div>
                        </div>
                        <div class="product_buttons">
                            <button class="second-btn wishlist">장바구니</button>
                            <button class="second-btn second-buy">구매하기</button>
                        </div>
                    </div>
                </div>
                
            </section>
        
   

        )
    }
        
}
        
export default withRouter(Detail);;
