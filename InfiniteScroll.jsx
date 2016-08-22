/**
 * Created by Soup Tang on 2016/8/2.
 */
import React from 'react';
import InlineLoading from './InlineLoading';

class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadCompleted: false,
            text: '',
            startLoad: false//首次加载时不显示inline loading
        }
    }

    componentDidMount() {
        this.refs.list.addEventListener('scroll', (e)=> {
            let clientHeight = e.target.clientHeight;
            let scrollHeight = e.target.scrollHeight;
            let scrollTop = e.target.scrollTop;
            if (scrollHeight - clientHeight == scrollTop && this.props.hasMore === true) {
                if (!this.props.onLoad) {
                    throw new Error('need onLoad')
                }
                //onLoad返回Promise对象
                this.setState({
                    loadCompleted: false,
                    startLoad: true
                });
                this.props.onLoad()
                    .then(()=> {
                        this.setState({
                            loadCompleted: true
                        })
                    })
                    .catch((errorMsg)=> {
                        this.setState({
                            loadCompleted: true,
                            text: errorMsg
                        })
                    });
            }
        });
    }

    style() {
        return {
            height: this.props.height,
            overFlowY: 'auto'
        }
    }

    render() {
        return (
            <ul ref="list" className={this.props.className+' infinite-scroll'} style={this.style()}>
                {this.props.children}
                {(()=> {
                    if (this.state.startLoad === false) {
                        return null;
                    }
                    if (this.props.hasMore === true && this.state.loadCompleted === false) {
                        return <InlineLoading hasMore={true}/>
                    }
                    return <InlineLoading hasMore={false} text="没有更多了..."/>
                })()}
            </ul>
        )
    }
}

InfiniteScroll.defaultProps = {
    hasMore: true,
    height: '100%',
    className: ''
};

InfiniteScroll.propType = {
    hasMore: React.PropTypes.bool,
    //显示设置高度以便产生滚动事件
    height: React.PropTypes.string,
    className: React.PropTypes.string,
    //加载更多
    onLoad: React.PropTypes.func
};

module.exports = InfiniteScroll;