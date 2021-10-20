import {configureStore} from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import messageReducer from '../features/message/messageSlice';
export const store = configureStore({
  reducer: {
    message: messageReducer,
    home: homeReducer,
  },
});
