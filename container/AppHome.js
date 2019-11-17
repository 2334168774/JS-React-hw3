import React, { Component } from 'react';
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import imgUrl from './img/首页轮播.png';

export default class AppHome extends Component {
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
                    >住吧家居
                </NavBar>
                <Carousel
                  autoplay={true}
                  infinite
                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)}
                >
                {[1,2].map(val => (
                  <a
                    key={val}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                  >
                    <img
                      src={imgUrl}
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
              <img
                  src={require("./img/首页中部.png")}
                  style={{width:"100%",height:"100%"}}
              />
              <div 
                  style={{float:"left"}}>
                  <div style={{width:"7px",height:"25px",backgroundColor:"#3fcccb",float:"left",marginTop:"20px"}}>
                  </div>
                  <span style={{float:"left",marginLeft:"5px",marginTop:"16px",fontSize:"20px",fontWeight:"400"}}>热门推荐</span>
              </div>
              <img
                  src={require("./img/住吧底部.png")}
                  style={{height:"100%",width:"100%"}}></img>
              </div>
            )
          }
}
