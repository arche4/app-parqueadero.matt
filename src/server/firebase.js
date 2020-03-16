import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrqmaGgfWn4B9tWJLFudYXs5SKjUIJVcs",
  authDomain: "mattelsa-bfeea.firebaseapp.com",
  databaseURL: "https://mattelsa-bfeea.firebaseio.com",
  projectId: "mattelsa-bfeea",
  storageBucket: "mattelsa-bfeea.appspot.com",
  messagingSenderId: "951614639300",
  appId: "1:951614639300:web:5e31a951e29aeee8858d91",
  measurementId: "G-HQFSDFQ6EH"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
    this.auth = app.auth();
  }
}
export default Firebase;
