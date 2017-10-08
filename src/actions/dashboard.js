export const JOIN_ROOM = 'JOIN_ROOM';
export const joinRoom = roomId => ({
  type: JOIN_ROOM,
  roomId,
  userId: Math.random().toString(36).replace(/[^a-z1-9]+/g, '').substr(0, 5),
  data: null,
});

export const CREATE_ROOM = 'CREATE_ROOM';
export const createRoom = () => ({
  type: CREATE_ROOM,
  roomId: Math.random().toString(36).replace(/[^a-z1-9]+/g, '').substr(0, 5),
  userId: Math.random().toString(36).replace(/[^a-z1-9]+/g, '').substr(0, 5),
  data: null,
});

export const SET_QUESTION_DATA = 'SET_QUESTION_DATA';
export const setQuestionData = snapshot => ({
  type: SET_QUESTION_DATA,
  snapshot,
});
