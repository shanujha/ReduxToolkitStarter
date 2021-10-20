import {useDispatch, useSelector} from 'react-redux';

import React from 'react';
import {setMessage} from './messageSlice';
import {Button, Text, View} from 'react-native';

export const Message = () => {
  const dispatch = useDispatch();
  const {message} = useSelector(state => state.message);

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
  };

  return (
    <View>
      <Text>{message}</Text>
      <Button title={'Set Message'} onPress={handlePress} />
    </View>
  );
};
