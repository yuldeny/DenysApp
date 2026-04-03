import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  TextInput,
} from 'react-native';
import { CardItem } from './src/components/CardItem';
import { ScrollView } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
const pizzaData = [
  {
    id: 1,
    name: '4 м`яса 30 см',
    price: 165,
    image: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41789%2Fconversions%2Ftext-optimized.jpg&w=256&q=75'
  },
  {
    id: 2,
    name: '4 сири 30 см',
    price: 165,
    image: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F35312%2Fconversions%2Ftext-optimized.jpg&w=256&q=75'
  },
  {
    id: 3,
    name: 'Карбонара 30 см',
    price: 169,
    image: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F35709%2Fconversions%2Ftext-optimized.jpg&w=256&q=75'
  },
  {
    id: 4,
    name: 'Пеперонi 30 см',
    price: 185,
    image: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F36113%2Fconversions%2Ftext-optimized.jpg&w=256&q=75'
  },
  {
    id: 5,
    name: 'Гавайська 30 см',
    price: 139,
    image: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42016%2Fconversions%2Ftext-optimized.jpg&w=256&q=75'
  },
  {
    id: 6,
    name: 'White Chicken 30 см',
    price: 155,
    image: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F57664%2Fconversions%2Ftext-optimized.jpg&w=256&q=75'
  },
  {
    id: 7,
    name: 'Маргарита 30 см',
    price: 79,
    image: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42125%2Fconversions%2Ftext-optimized.jpg&w=256&q=75'
  },
  {
    id: 8,
    name: 'Сирна Груша 30 см',
    price: 185,
    image: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F47081%2Fconversions%2Ftext-optimized.jpg&w=256&q=75'
  }
]

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.text}>Магазин Пиццы</Text>
        <Text style={styles.textDes}>Попробуй у нас, {'\n'}а не у конкурента!!!</Text>
        
        <TextInput
           style={styles.input}
           keyboardType = "numeric"
           onChangeText={(event) => console.log(event)}
           //value={text}
        />
        
        <View style={styles.imgContainer}>
            {pizzaData.map(( pizza, index) => (
            <CardItem key={pizza.id} text={pizza.name} img={pizza.image} price={pizza.price}/>
          ))}  
        </View>
      </View>
    
    <TouchableOpacity style={styles.orderBtn}>
      <Text style={{textAlign: 'center', color: "#FFF", fontSize: 16, fontWeight:"500",}}>Создать заказ</Text>
    </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
  textDes: {
    marginTop: 15,
    fontSize: 16,
    color: "gray",
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    marginTop: 15,
    width: "50%",
    height: 120,
    borderRadius: 4,
  },
  orderBtn: {
  position: "absolute",
  bottom: 20,
  left: 15,
  right: 15,
  paddingVertical: 16,
  backgroundColor: "orange",
  borderRadius: 8,
},
  input: {
    marginTop: 15,
    paddingLeft: 15,
    height: 46,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "orange",
  },
});

export default App;