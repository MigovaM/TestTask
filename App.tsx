import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import ListContainer from './src/components/List/ListContainer';
import DetailsComponent from './src/components/Details/DetailsComponent';
import {store} from './src/store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaView style={styles.body}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name={'list'}
                component={ListContainer}
                options={{headerShown: false}}
              />
              <Stack.Screen name={'details'} component={DetailsComponent} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
