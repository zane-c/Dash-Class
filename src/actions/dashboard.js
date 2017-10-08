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
  userId: Math.random().toString(36).replace(/[^a-z1-9]+/g, '').substr(0, 3),
  data: null,
});

export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';
export const updateQuestions = newData => ({
  type: UPDATE_QUESTIONS,
  newData,
});

export const UPDATE_CHAT = 'UPDATE_CHAT';
export const updateChat = newData => ({
  type: UPDATE_CHAT,
  newData,
});

export const LISTEN_ON_QUESTION_DATA = 'LISTEN_ON_QUESTION_DATA';
export const listenOnQuestionData = snapshot => ({
  type: LISTEN_ON_QUESTION_DATA,
  snapshot,
});

export const LISTEN_ON_CHAT_DATA = 'LISTEN_ON_CHAT_DATA';
export const listenOnChatData = snapshot => ({
  type: LISTEN_ON_CHAT_DATA,
  snapshot,
});

export const LISTEN_ON_POLL_DATA = 'LISTEN_ON_POLL_DATA';
export const listenOnPollData = snapshot => ({
  type: LISTEN_ON_POLL_DATA,
  snapshot,
});
