import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "need enter ",
    authDomain: "need enter",
    databaseURL: "need enter",
    projectId: "need enter",
    storageBucket: "need enter",
    messagingSenderId: "need enter",
    appId: "need enter",
    measurementId: "need enter"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
