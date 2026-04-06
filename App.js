import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import { CardItem } from './src/components/CardItem';
import { pizzaData } from './data/pizzaData';
import { AppStyles as styles } from './styles/AppStyles';

const App = () => {
  const [search, setSearch] = useState('');

  const filteredPizza = pizzaData.filter(pizza =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 30}}>
      <StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.text}>IQ pizza</Text>

        <View style={styles.inputContainer}>
          <Text style={{fontSize: 16}}>🔍</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setSearch(value)}
            value={search}
            placeholder="Пошук піци..."
          />
        </View>

        {search.length > 0 && (
          <View style={styles.searchResults}>
            {filteredPizza.map(pizza => (
              <Text key={pizza.id} style={styles.searchItem}>
                {pizza.name}
              </Text>
            ))}
          </View>
        )}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          <View style={styles.imgContainer}>
            {pizzaData.map((pizza) => (
              <CardItem
                key={pizza.id}
                text={pizza.name}
                img={pizza.image}
                price={pizza.price}
                weight={pizza.weight}
                description={pizza.description}
              />
            ))}
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.orderBtn}>
        <Text style={styles.orderBtnText}>Зробити замовлення</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default App;