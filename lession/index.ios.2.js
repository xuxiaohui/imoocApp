/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = ReactNative;

var Son = React.createClass({
  getDefaultProps(props){
    console.log('son','getDefaultProps');
  },

  getInitialState(){
    return {
      times:this.props.times
    }
  },

  componentWillMount() {
    console.log('son','componentWillMount');
  },

  componentDidMount() {
    console.log('son','componentDidMount');
  },

  componentWillUnmount(){
    console.log('son','componentWillUnmount');
  },

  componentWillReceiveProps(props){
    console.log(this.props);
    this.setState({
      times:props.times
    });
  },

  shouldComponentUpdate(){
    console.log('son','shouldComponentUpdate');
    return true;
  },

  componentWillUpdate() {
    console.log('son','componentWillUpdate');
  },

  componentDidUpdate() {
      console.log('son','componentDidUpdate');
  },

  timesReset(){
    this.props.timesReset();
  },

  timesPlus(){
    var times = this.state.times;
    times++;
    this.setState({
      times:times
    });
  },
  render() {
    console.log('son','render');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.timesPlus}>
          有本事揍我啊！
        </Text>
        <Text style={styles.instructions}>
          你居然揍我{this.state.times}下
        </Text>
        <Text style={styles.instructions}  onPress={this.timesReset}>
          信不信我亲亲你
        </Text>
      </View>
    );
  }
  
});

var imoocApp = React.createClass({

  getDefaultProps(){
    console.log('father','getDefaultProps');
  },

  getInitialState(){
    console.log('father','getInitialState');
    return {
      times:2,
      hit:false
    }
  },

  componentWillMount() {
    console.log('father','componentWillMount');
  },

  componentDidMount() {
    console.log('father','componentDidMount');
  },

  componentWillUnmount(){
    console.log('father','componentWillUnmount');
  },

  shouldComponentUpdate(){
    console.log('father','shouldComponentUpdate');
    return true;
  },

  componentWillUpdate() {
    console.log('father','componentWillUpdate');
  },

  componentDidUpdate() {
      console.log('father','componentDidUpdate');
  },

  timesReset() {
    this.setState({
      times:0
    });
  },

  willHit() {
    this.setState({
      hit:!this.state.hit
    });
  },

  timesPlus(){
    this.setState({
      times:this.state.times+3
    });
  },
  render() {
    console.log('father','render');
    return (
      <View style={styles.container}>
        {
          this.state.hit?<Son times={this.state.times} timesReset = {this.timesReset}/>:null
        }
        <Text style={styles.welcome} onPress={this.timesReset}>
          老子说：心情好就放你一马
        </Text>
        <Text style={styles.instructions} onPress={this.willHit}>
          到底揍不揍
        </Text>
        <Text style={styles.instructions}>
          就揍了你{this.state.times}而已
        </Text>
        <Text style={styles.instructions} onPress={this.timesPlus}>
          不听话再揍你三次
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('imoocApp', () => imoocApp);
