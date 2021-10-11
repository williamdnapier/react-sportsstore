/*
This file contains our action creator functions. It will create an action object that can be processed by the store to alter the data it contains.
 */

import { ActionTypes } from './Types';
import { data as phData } from './placeholderData';

export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
});

/*
The only requirement for objects produced by action creators is they must have a type property whose value specifies the type of change required to the store. It is a good idea to use a common set of properties in action objects so that they can be handled consistently.

In this example, the payload property has a dataType property that indicates the type of data that the action relates to. It also has a data property. The data property provides the data to be added to the store.
 */