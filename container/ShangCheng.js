import React, { Component } from 'react';
import { NavBar, Icon, Tabs,Carousel, SearchBar,} from 'antd-mobile';

export default class ShangCheng extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
    render() {
      return (
        <div>
          <NavBar
            style={{backgroundColor:'#3fcccb',color:'white',height:"6%"}}
          >商城
          </NavBar>
          <SearchBar placeholder="输入你想要的搜索的"
            style={{
              height:"5%",
              background:"none",
              color:'none',
              zIndex:"9999999999999"
            }}
          />
          <Carousel
            autoplay={true}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
            style={{width:"100%",height:"30%",float:"left"}}
          >
          {[1,2,3,4].map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={require("./img/商城轮播图.png")}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <img src={require("./img/商城中.png")}
          style={{width:"100%",float:"left"}}
        />
        <img src={require("./img/商城下.png")}
          style={{width:"100%",float:"left"}}
        />
        <img src={require("./img/商城下.png")}
          style={{width:"100%",float:"left"}}
        />
        
      </div>
    )
  }
}
