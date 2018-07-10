import * as firebase from 'firebase';

const config = {

  };

  export const fbCon = firebase.initializeApp(config);
  export const fbConTodos = firebase.database().ref('todos');
  export const fbConClients = firebase.database().ref('clients');
