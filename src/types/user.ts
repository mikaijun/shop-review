import firebase from "firebase";

export type User = {
  id?: string;
  name: string;
  updateAt: firebase.firestore.Timestamp;
  createAt: firebase.firestore.Timestamp;
};

export const initialUser: User = {
  name: "",
  updateAt: firebase.firestore.Timestamp.now(),
  createAt: firebase.firestore.Timestamp.now(),
};
