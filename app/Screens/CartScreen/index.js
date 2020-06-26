import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Dimensions,
  Button,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FoodView from '../../Components/FoodView';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
    this.t = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  }
  render() {
    const props = this.props;
    console.log('cart', props.route.params.params);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.image}>
          <View
            style={{
              backgroundColor: '#ffffff',
              width: deviceWidth / 2,
              height: deviceHeight / 8,
              justifyContent: 'center',
              borderRadius: 15,
              alignItems: 'center',
            }}>
            <Text>Total cost</Text>
            <Text>{props.route.params.params}</Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={styles.hdrTxt}>Starter</Text>
        </View>
        <FoodView updatecost={this.updatecost} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTxt}>Place order</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    width: deviceWidth,
    height: deviceHeight / 3,
    backgroundColor: '#090909',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: deviceHeight / 12,
    width: deviceWidth,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  hdrTxt: {fontSize: 20, fontWeight: 'bold'},
  btnTxt: {color: '#ffffff'},
});

export default Main;
