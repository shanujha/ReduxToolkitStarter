import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {routeTo} from './homeSlice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const handleNavigate = () => {
    dispatch(routeTo('message'));
    navigation.navigate('message');
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text onPress={handleNavigate}>Go To Message using Redux</Text>
    </View>
  );
};

export default HomeScreen;
