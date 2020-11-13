import * as topicTypes from "./types";
import uuidv4 from "uuid/v4";

function reducer(state: any, action: any) {
  switch (action.type) {
    case topicTypes.ADD_TOPIC:
      return state.concat({
        id: uuidv4(),
        title: action.payload.title,
        completed: false,
      });
    case topicTypes.TOGGLE_TOPIC_STATUS:
      return state.map((topic: any) => {
        if (topic.id === action.payload.id) {
          return { ...topic, completed: action.payload.completed };
        } else {
          return topic;
        }
      });
    case topicTypes.TOGGLE_TOPIC_TITLE:
      return state.map((topic: any) => {
        if (topic.id === action.payload.id) {
          return { ...topic, title: action.payload.title };
        } else {
          return topic;
        }
      });
    case topicTypes.REMOVE_TOPIC:
      return state.filter((topic: any) => {
        return topic.id !== action.payload.id;
      });
    default:
      throw new Error();
  }
}

export default reducer;
