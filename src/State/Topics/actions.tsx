import * as topicTypes from "./types";

export function addTopic(title: string) {
  return {
    type: topicTypes.ADD_TOPIC,
    payload: {
      title: title,
    },
  };
}

export function toggleTopicStatus(id: number, completed: boolean) {
  return {
    type: topicTypes.TOGGLE_TOPIC_STATUS,
    payload: {
      id: id,
      completed: completed,
    },
  };
}

export function toggleTopicTitle(id: number, title: string) {
  return {
    type: topicTypes.TOGGLE_TOPIC_TITLE,
    payload: {
      id: id,
      title: title,
    },
  };
}

export function removeTopic(id: number) {
  return {
    type: topicTypes.REMOVE_TOPIC,
    payload: {
      id: id,
    },
  };
}
