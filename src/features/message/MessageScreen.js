import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Message} from './Message';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Message />
    </View>
  );
};

export default MessageScreen;
