import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const products = [
  {
    _id: 1,
    name: 'Pizza',
    price: 50,
    quantity: 0,
    type: 'V',
    description: 'paneer,tomato,cheese',
  },
  {
    _id: 2,
    name: 'Chicken burger',
    price: 29,
    quantity: 0,
    type: 'N',
    description: 'boneless chicken,garlic',
  },
  {
    _id: 3,
    name: 'Juice',
    price: 200,
    quantity: 0,
    type: 'V',
    text: 'Juice',
    description: 'Lime,mint,salt',
  },
  {
    _id: 4,
    name: 'Maggi',
    price: 200,
    quantity: 0,
    type: 'V',
    text: 'Maggi',
    description: 'veggies,cheese',
  },
];
class ListItem extends React.Component {
  render() {
    const {item} = this.props;
    console.log('item', item);
    return (
      <View style={styles.mainConatiner}>
        <View style={styles.type}>
          <View style={styles.radioLeftCircle}>
            <Text>{item.type}</Text>
          </View>
          <View>
            <Text style={styles.radioText}>{item.name}</Text>
            <Text style={styles.radioSubText}>{item.description}</Text>
            <Text>{'RS - ' + item.price}</Text>
          </View>
        </View>

        <View style={styles.radioCircle}>
          <Icon name="md-remove" size={25} onPress={this.props.onSubtract} />
          <Text>{item.quantity}</Text>
          <Icon name="md-add" size={25} onPress={this.props.onAdd} />
        </View>
      </View>
    );
  }
}

class FoodView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      products,
    };
  }
  onSubtract = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity -= 1;
    this.setState({products});
  };

  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({products});
  };

  render() {
    console.log('fv', this.props.prop);
    const {value} = this.state;
    const {products} = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach(item => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    });
    console.log('product', this.state.products);
    return (
      <>
        <FlatList
          ref={ref => {
            this.list = ref;
          }}
          data={this.state.products}
          renderItem={({item, index}) => (
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
            />
          )}
          keyExtractor={item => item._id}
        />
        {totalQuantity !== 0 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.props.prop.navigation.navigate('cart', {params: totalPrice})
            }>
            <Text style={styles.btnTxt}> View Cart</Text>
            <Text style={styles.btnTxt}> {'(' + totalQuantity + ')'}</Text>
          </TouchableOpacity>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  btnTxt: {color: '#ffffff', fontSize: 16},
  button: {
    height: deviceHeight / 12,
    width: deviceWidth,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -25,
    flexDirection: 'row',
  },
  radioText: {
    // marginRight: 35,
    fontSize: 20,
    color: '#000',
    fontWeight: '300',
  },
  radioSubText: {
    // marginRight: 35,
    fontSize: 16,
    color: '#000',
  },
  radioCircle: {
    height: 40,
    width: 100,
    // borderRadius: 100,
    borderWidth: 2,
    borderColor: '#FF9800',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  radioLeftCircle: {
    height: 20,
    width: 20,
    // borderRadius: 100,
    borderWidth: 2,
    borderColor: '#FF9800',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  type: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainConatiner: {
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default FoodView;
