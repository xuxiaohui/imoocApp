/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var React = require('react');
var ReactNative = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');
var List = require('./app/creation/index');
var Edit = require('./app/edit/edit');
var Account = require('./app/account/account');

var {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  View
} = ReactNative;

var imoocApp = React.createClass({
    static : {
      title:'<TabBarIOS>',
      description:'Tab-base navigation.'
    },

    displayName:'TabBarExample',

    getInitialState: function(){
      return {
        selectedTab:'blueTab',
        notifCount:0,
        presses:0
      };
    },

    render: function(){
      return (
         <TabBarIOS
            unselectedTintColor="yellow"
            tintColor="white"
            barTintColor="darkslateblue">

            <Icon.TabBarItem
              iconName='ios-videocam-outline'
              selectedIconName='ios-videocam'
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}>
              <List />
            </Icon.TabBarItem>

            <Icon.TabBarItem
              iconName='ios-recording-outline'
              selectedIconName='ios-recording'
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}>
              <Edit />
            </Icon.TabBarItem>

            <Icon.TabBarItem
              iconName='ios-more-outline'
              selectedIconName='ios-more'
              renderAsOriginal
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
              >
              <Account />
            </Icon.TabBarItem>
          </TabBarIOS> 
      );
    },  
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

AppRegistry.registerComponent('imoocApp', () => imoocApp);
