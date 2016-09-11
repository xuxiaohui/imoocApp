var React = require('react');
var ReactNative = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
  Dimensions
} = ReactNative;
var {height, width} = Dimensions.get('window');

var List = React.createClass({

  getInitialState(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows([{
            "_id": "130000200701063844",
            "thumb": "https://img.alicdn.com/imgextra/i2/197232874/TB2xCa7pXXXXXXfXFXXXXXXXXXX_!!197232874.jpg_430x430q90.jpg",
            "video": "http://v2.mukewang.com/f324923b-42c7-49d0-884c-c8d0e2c60dac/L.mp4?auth_key=1473341528-0-0-50b8783e5296ee091ef63eeb36bfb357"
        },
        {
            "_id": "630000199210109329",
            "thumb": "https://facebook.github.io/react/img/logo_og.png",
            "video": "http://v2.mukewang.com/f324923b-42c7-49d0-884c-c8d0e2c60dac/L.mp4?auth_key=1473341528-0-0-50b8783e5296ee091ef63eeb36bfb357"
        },
        {
            "_id": "360000201507108049",
            "thumb": "https://facebook.github.io/react/img/logo_og.png",
            "video": "http://v2.mukewang.com/f324923b-42c7-49d0-884c-c8d0e2c60dac/L.mp4?auth_key=1473341528-0-0-50b8783e5296ee091ef63eeb36bfb357"
        },
        {
            "_id": "220000198407297617",
            "thumb": "https://facebook.github.io/react/img/logo_small_2x.png",
            "video": "http://v2.mukewang.com/f324923b-42c7-49d0-884c-c8d0e2c60dac/L.mp4?auth_key=1473341528-0-0-50b8783e5296ee091ef63eeb36bfb357"
        },
        {
            "_id": "610000198101167185",
            "thumb": "http://dummyimage.com/1200x600/06dff4",
            "video": "http://v2.mukewang.com/f324923b-42c7-49d0-884c-c8d0e2c60dac/L.mp4?auth_key=1473341528-0-0-50b8783e5296ee091ef63eeb36bfb357"
        },
        {
            "_id": "330000200402166023",
            "thumb": "http://dummyimage.com/1200x600/103de8.png",
            "video": "http://v2.mukewang.com/f324923b-42c7-49d0-884c-c8d0e2c60dac/L.mp4?auth_key=1473341528-0-0-50b8783e5296ee091ef63eeb36bfb357"
        },
        {
            "_id": "510000198301125613",
            "thumb": "http://dummyimage.com/1200x600/320f2a)",
            "video": "http://v2.mukewang.com/f324923b-42c7-49d0-884c-c8d0e2c60dac/L.mp4?auth_key=1473341528-0-0-50b8783e5296ee091ef63eeb36bfb357"
        },
        {
            "_id": "330000198507103774",
            "thumb": "http://dummyimage.com/1200x600/ebd43c)",
            "video": "http://v2.mukewang.com/f324923b-42c7-49d0-884c-c8d0e2c60dac/L.mp4?auth_key=1473341528-0-0-50b8783e5296ee091ef63eeb36bfb357"
        },
        {
            "_id": "230000199201168437",
            "thumb": "http://dummyimage.com/1200x600/24924c)",
            "video": "http://v2.mukewang.com/f324923b-42c7-49d0-884c-c8d0e2c60dac/L.mp4?auth_key=1473341528-0-0-50b8783e5296ee091ef63eeb36bfb357"
        },
        {
            "_id": "460000197302152470",
            "thumb": "http://dummyimage.com/1200x600/5d8f2f)",
            "video": "http://v2.mukewang.com/f324923b-42c7-49d0-884c-c8d0e2c60dac/L.mp4?auth_key=1473341528-0-0-50b8783e5296ee091ef63eeb36bfb357"
        }])
    };
  },

  renderRow:function(row){
    console.log(row.thumb);
    return (
      <TouchableHighlight>
        <View style={styles.item}>
          <Text style={styles.title}>{row._id}</Text>
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
          enableEmptySections={true}
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
  }
});

module.exports = List;