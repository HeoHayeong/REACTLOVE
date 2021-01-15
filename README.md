# 1. react-router

><span style="background : pink; color: #000; padding: 0 5px; ">**React-Router**</span> : 새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태 (새로고침X)

```js
import {Route, withRouter} from 'react-router-dom'; 

import Home from './home';
import Detail from './detail';
import Shop from './shop';
import Chat from './Chat';


function Index() {
  
  return (

        <Route exact path="/"><Home/></Route> 
        <Route path="/ShopImporting/DetailImporting" component={withRouter(Detail)}/>
        <Route path="/ShopImporting" component={withRouter(Shop)}/>
        <Route path="/ChatImporting" component={withRouter(Chat)}/>

  )}

```

# 2. react에서 JQuery 쓰는법 
>npm install jquery

```js
import $ from "jquery";
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

            )
        }
    }
        
      
```

><span style="background : pink; color: #000; padding: 0 5px; ">**componentDidMount**</span> : React에서 제공하지 않는 DOM 이벤트는 컴포넌트 Life Cycle 이벤트인 **componentDidMount** 에서 등록