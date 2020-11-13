import React, { useReducer } from 'react';
import TopicContext from './Context';
import topicReducer from './reducer';

const Provider: React.FC = ({children}) => {
    
    const [topics, dispatchToTopics] = useReducer(topicReducer, []);

    return (
        <TopicContext.Provider value={{topics: topics, dispatchToTopic: dispatchToTopics}}>
            {children}
        </TopicContext.Provider>
    );
};

export default Provider;
