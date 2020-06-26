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
      count: 0,
    };
    this.t = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  }
  componentDidMount() {
    const {navigation} = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.setState({count: 0});
    });
  }

  componentWillUnmount() {
    clearTimeout(this.t);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Image
          source={{
            uri: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png',
          }}
          style={styles.image}
        />
        <View style={styles.floatContainer}>
          <Text style={styles.title}>{'ABC Restaurant'}</Text>
          <Text style={styles.text}>
            {'5.0 | All days : 09:00 AM - 06:00 PM'}
          </Text>
          <Text style={styles.text}>{'Reach us: 1234567890'}</Text>
          <TouchableOpacity style={styles.btn}>
            <Text>{'BOOK A TABLE'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{top: deviceHeight / 8}}>
          <Text style={styles.hdrTxt}>Starter</Text>
          <FoodView prop={this.props} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  Scrcontainer: {
    flex: 1,
  },
  ScrscrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  image: {
    width: deviceWidth,
    height: deviceHeight / 4,
  },
  floatContainer: {
    width: deviceWidth / 1.1,
    minHeight: deviceHeight / 4,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    position: 'absolute',
    top: deviceHeight / 12,
    zIndex: 1,
    elevation: 5,
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
    paddingTop: 20,
    fontSize: 16,
  },
  title: {
    alignSelf: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
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
  btn: {
    height: deviceHeight / 14,
    width: deviceWidth / 2,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
  },
});

export default Main;
