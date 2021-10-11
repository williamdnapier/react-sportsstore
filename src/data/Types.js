/*
Actions are objects which are sent into the data store to change the data it contains. So, below, we are creating our action types which will be used by the store. These types will be created using action creator functions.
 */

export const DataTypes = {
    PRODUCTS: 'products',
    CATEGORIES: 'categories'
}

export const ActionTypes = {
    DATA_LOAD: 'data_load'
}