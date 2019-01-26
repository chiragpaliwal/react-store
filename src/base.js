import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGG7sKYzV42UIxHD5jk3NN9AiH2B17aY0",
    authDomain: "catch-of-the-day-26cff.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-26cff.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//default export

export default base;