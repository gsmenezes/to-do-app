import React, { useReducer } from 'react';
import FilterContext from './Context';
import filterReducer from './reducer';

const Provider: React.FC = ({children}) => {
    
    const [filter, dispatchToFilter] = useReducer(filterReducer, 'all');

    return (
        <FilterContext.Provider value={{filter: filter, dispatchToFilter: dispatchToFilter}}>
            {children}
        </FilterContext.Provider>
    );
};

export default Provider;

