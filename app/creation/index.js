var React = require('react');
var Mock  = require('mockjs');
var ReactNative = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');
var Config = require('../common/config');
var Request = require('../common/request');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
  Dimensions,
  ActivityIndicator,
  RefreshControl
} = ReactNative;
var {height, width} = Dimensions.get('window');

var cachedResults = {
  nextPage:1,
  items:[],
  total:0
}

var List = React.createClass({

  getInitialState(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1._id !== r2._id});
    return {
      isRefreshing:false,
      isLoadingTail:false,
      dataSource: ds
    };
  },

  componentDidMount() {
    this._fetchData();
  },

  _fetchData(page) {
    if (page!=0) {
      this.setState({
        isLoadingTail:true
      })
    } else {
      this.setState({
        isRefreshing:true
      })
    }
    

    var that = this;

    Request.get(Config.api.base + Config.api.creations,{accessToken:'ssd'})
    .then((data) => {
          if (data.success) {
            var items = cachedResults.items.slice();
            
            
            cachedResults.total = data.total;


            if (page != 0) {
              items = items.concat(data.data);
              cachedResults.items = items;
              cachedResults.nextPage = cachedResults.nextPage + 1;
              setTimeout(function(){
                    that.setState({
                  isLoadingTail:false,
                  dataSource: that.state.dataSource.cloneWithRows(cachedResults.items)
                });
              }, 2000)
            } else  {
             items = data.data.concat(items);
             cachedResults.items = items;
             setTimeout(function(){
                    that.setState({
                  isRefreshing:false,
                  dataSource: that.state.dataSource.cloneWithRows(cachedResults.items)
                });
              }, 2000)
            }
             
              
          }
          console.log(data);
        })
        .catch((error) => {
              this.setState({
                isLoadingTail:false,
              });
          console.error(error);
        });
  },

  _hasMore(){
    return cachedResults.items.length !== cachedResults.total;
  },

  _fecthMoreData() {
    if (!this._hasMore() || this.state.isLoadingTail) {
      return;
    }
    this._fetchData();
    var page = cachedResults.nextPage;
  },

  _renderFooter() {
      if (!this._hasMore() && cachedResults.total !== 0) {
        return (
          <View style={styles.loadingMore}>
          <Text style={styles.loadingText}>没有更多了</Text>
          </View>
        )
      }

      return (
        <ActivityIndicator
          color="#0000ff"
          size="large"
        />
        );

  },

  _onRefresh:function(){
    if (!this._hasMore() || this.state.isRefreshing) {
      return;
    }
    this._fetchData(0);
  },

  renderRow:function(row){
    console.log(row.thumb);
    return (
      <TouchableHighlight>
        <View style={styles.item}>
          <Text style={styles.title}>{row.title}</Text>
          <Image source={{uri: row.thumb}} style={styles.thumb}>
            <Icon
              name='ios-play'
              size={28}
              style={styles.play}
            />
          </Image>

          <View style={styles.itemFooter}>
            <View style={styles.handleBox}>
              <Icon 
                name='ios-heart-outline'
                size={28}
                style={styles.up}
              />
              <Text style={styles.hadleText}>喜欢</Text>
            </View>
            <View style={styles.handleBox}>
              <Icon 
                name='ios-chatboxes-outline'
                size={28}
                style={styles.commentIcon}
              />
              <Text style={styles.hadleText}>喜欢</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
      );
  },

  render:function(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>列表页面</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderFooter={this._renderFooter}
          enableEmptySections={true}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}
              tintColor="#ff6600"
              title="加载中..."
              titleColor="#cccccc"
            />
          }
          onEndReached={this._fecthMoreData}
          onEndReachedThreshold = {20}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5f5f5'
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  header: {
    paddingTop:25,
    paddingBottom:12,
    backgroundColor:'#ee735c'
  },
  headerTitle:{
    color:'#ffffff',
    fontSize:16,
    textAlign:'center',
    fontWeight:'600'
  },
  item:{
    width:width,
    marginBottom:10,
    backgroundColor:'#fff'
  },
  thumb:{
    width:width,
    height:width*0.5,
    resizeMode:'cover'
  },
  title:{
    padding:10,
    fontSize:18,
    color:'#333'
  },
  itemFooter: {
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#eee'
  },
  handleBox:{
    padding:10,
    flexDirection:'row',
    width: width/2 - 0.5,
    justifyContent:'center',
    backgroundColor:'#fff'
  },
  play: {
    position:'absolute',
    bottom:14,
    right:14,
    width:46,
    height:46,
    paddingTop:9,
    paddingLeft:18,
    backgroundColor:'transparent',
    borderColor:'#fff',
    borderWidth:1,
    borderRadius:23,
    color:'#ed7b66'
  },
  handleText:{
    paddingLeft:12,
    fontSize:18,
    color:'#333'
  },
  up:{
    fontSize:22,
    color:'#333'
  },
  commentIcon:{
    fontSize:22,
    color:'#333'
  },
  loadingMore:{
    marginVertical:20
  },
  loadingText:{
    color:'#777',
    textAlign:'center'
  }
});

module.exports = List;