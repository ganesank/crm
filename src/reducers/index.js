import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import register from './register';
import blog from './blog';

export default combineReducers({
  alerts,
  auth,
  navigation,
  register,
  blog
});