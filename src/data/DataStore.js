/*
This is the final step to create the redux data store. Redux provides a function called createStore. This function sets up a new data store using a reducer. Right now, we have enough to get started but later we will want to add additional features so further operations can be performed and data can be loaded from a web service.
 */

import { createStore } from 'redux';
import { ShopReducer } from './ShopReducer';

export const SportsStoreDataStore = createStore(ShopReducer);