/*
Actions are processed by store reducers. These reducers are functions that receive the current contents of the data store and an action object and use them to make changes.

Reducers are required to create and return new objects that incorporate any required changes. If the action type isn't recognized, the reducer must return the data object it received unchanged.

This reducer handles the DATA_LOAD action by creating a new object with all the properties of the old store plus the new data received by the action.
 */

import { ActionTypes } from './Types';

export const ShopReducer = (storeData, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data
            };
        default:
            return storeData || { };
    }
}