/**
 * Created by Soup Tang on 2016/8/2.
 */
import React from 'react';
import ReactDom from 'react-dom';
import InfiniteScroll from '../dist/InfiniteScroll';

class Item extends React.Component {

    render() {
        return (
            <p>{this.props.text}</p>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        var num = Math.floor(Math.random() * 100);
        var arr = []
        for (var i = 0; i < num; i++) {
            arr.push(Math.random());
        }
        console.log(num);
        this.state = {
            items: arr
        }
    }

    render() {
        return (
            <InfiniteScroll onLoad={this.loadMore.bind(this)} hasMore={true} height="100%"
                            retry={this.retry.bind(this)}>
                {(()=> {
                    return this.state.items.map((item)=> {
                        return <Item text={item}/>
                    })
                })()}
            </InfiniteScroll>
        )
    }

    loadMore() {
        var num = 10;
        return fetch('http://ciqapi.iweibang.com/pushAction/msg-center/sys-msg-list?page=0')
            .then((response)=> {
                throw new Error('请求超时')
            })
            .catch((err)=> {
                throw new Error('请求超时')
            })
        //return new Promise((resolve, reject)=> {
        //    var arr = [];
        //    for (var i = 0; i < num; i++) {
        //        arr.push(Math.random());
        //    }
        //    setTimeout(()=>{
        //        reject('请求超时')
        //    },3000)
        //});
    }

    retry() {
        var num = 10;
        return new Promise((resolve, reject)=> {
            var arr = [];
            for (var i = 0; i < num; i++) {
                arr.push(Math.random());
            }
            setTimeout(()=> {
                this.setState({
                    items: this.state.items.concat(arr)
                });
                resolve();
            }, 2000)
        });
    }

}
ReactDom.render(
    <App/>,
    document.querySelector('#wrapper')
);
