/**
 * Created by Soup Tang on 2016/8/2.
 */
import React from 'react';
import InlineLoading from './InlineLoading';
import shallowCompare from 'react-addons-shallow-compare';

class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadCompleted: false,
            errorMsg: '',
            startLoad: false//首次加载时不显示inline loading
        };
        this.onLoading = false;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {

        const { height, langNoMore, langLoading } = this.props;

        return (
            <ul onScroll={this.scrollHandle.bind(this)}
                    className={this.props.className+' infinite-scroll'}
                    style={{height: height, overFlowY: "auto"}}>

                {this.props.children}
                {(()=> {
                    if (this.state.startLoad === false) {
                        return null;
                        }
                    if (this.state.errorMsg.length > 0) {
                        return <InlineLoading hasMore={false} text={this.state.errorMsg} retry={this.retry.bind(this)}/>
                        }
                    if (this.props.hasMore === true && this.state.loadCompleted === false) {
                        return <InlineLoading hasMore={true} text={langLoading} />
                        }
                    return <InlineLoading hasMore={false} text={langNoMore} />
                    })()}
            </ul>
        )
    }

    scrollHandle(e) {
        let clientHeight = e.target.clientHeight;
        let scrollHeight = e.target.scrollHeight;
        let scrollTop = e.target.scrollTop;
        //误差0.05以内
        if ((scrollHeight - clientHeight) / scrollTop <= 1.05 && this.props.hasMore === true && this.onLoading === false) {
            this.onLoading = true;//加载中状态，避免重复出发onLoad
            if (!this.props.onLoad) {
                throw new Error('need onLoad')
            }
            //onLoad返回Promise对象
            let result = this.props.onLoad();
            this.setState({
                loadCompleted: false,
                startLoad: true
            });
            if (result instanceof Promise) {
                result.then(()=> {
                        this.setState({
                            loadCompleted: true
                        });
                        this.onLoading = false;
                    })
                    .catch((errorMsg)=> {
                        this.setState({
                            loadCompleted: true,
                            errorMsg: errorMsg.message
                        });
                    });
            }
        }
    }

    retry() {
        if (this.props.retry) {
            this.onLoading = true;
            let result = this.props.retry();
            this.setState({
                hasMore: true,
                loadCompleted: false,
                errorMsg: ''
            });
            if (result instanceof Promise) {
                result.then(()=> {
                        this.setState({
                            loadCompleted: true
                        });
                        this.onLoading = false;
                    })
                    .catch((errorMsg)=> {
                        this.setState({
                            loadCompleted: true,
                            errorMsg: errorMsg.message
                        });
                    });
            }
        }
        else {
            throw new Error('no retry props');
        }
    }
}

InfiniteScroll.defaultProps = {
    hasMore: true,
    height: '100%',
    className: '',
    langNoMore: '没有更多了...',
    langLoading: '加载中...',
    onLoad: ()=> {
        console.log('Need rewrite onLoad method')
    }
};

InfiniteScroll.propType = {
    hasMore: React.PropTypes.bool,
    height: React.PropTypes.string,   //显示设置高度以便产生滚动事件
    className: React.PropTypes.string,
    onLoad: React.PropTypes.func, //加载更多
    retry: React.PropTypes.func,   //失败后的点击重试方法
    langNoMore: React.PropTypes.string,
    langLoading: React.PropTypes.string,
};

export default InfiniteScroll;