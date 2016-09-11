var React = require('react');
var ReactNative = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');

var {
  StyleSheet,
  Text,
  View
} = ReactNative;

var Edit = React.createClass({
  render:function(){
    return (
      <View style={styles.container}>
        <Text>录制页面单独</Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
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
});

module.exports = Edit;