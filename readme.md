#infinite-scroll

##安装方法

npm install git://github.com/Heboy/react-infinite-scroll.git

或者fork到你的git路径下再执行:

npm install '你的git路径'

##用法

```
    import InfiniteScroll from 'infinite-scroll';
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
 
 hasMore:在没有数据后设置该属性为true，将不再请求
 
 height:默认100%，用来确保该组件高度小于内容以便出现滚动条
 
 请参考example