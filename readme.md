#infinite-scroll

##安装方法

```shell
npm i -S mb-react-infinite-scroll
```

##用法

```
import InfiniteScroll from 'mb-react-infinite-scroll';
...
<InfiniteScroll onLoad={this.loadMore.bind(this)} hasMore={true} height="100%">
     {(()=> {
         return this.state.items.map((item)=> {
             return <Item text={item}/>
         })
     })()}
</InfiniteScroll>
 ```
 
 onLoad:在该组件滚动到底部时调用，获取更多数据，需要返回Promise类型对象
 
 
 height:
 
 请参考example
 
 
### API

* `onLoad`  加载数据用的 function, 要求返回 Promise
* `retry`   失败后点击重试的 function, 要求返回  Promise
* `hasMore` 是否有更多数据, 在没有数据后设置该属性为true，将不再请求
* `height`  默认100%，用来确保该组件高度小于内容以便出现滚动条
* `langNoMore` 没有更多数据的文本内容
* `langLoading`  加载中的文本内容
