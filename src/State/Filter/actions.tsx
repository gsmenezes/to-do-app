import * as filterTypes from './types';

export function toggleFilter(filter: string){
    return {
        type: filterTypes.TOGGLE_FILTER,
        payload: {
            filter: filter,
        }
    }
}