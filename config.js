import Firebase from 'firebase';
const firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "hack-the-north-f883a.firebaseapp.com",
    databaseURL: "https://hack-the-north-f883a.firebaseio.com",
    projectId: "hack-the-north-f883a",
    storageBucket: "hack-the-north-f883a.appspot.com",
    messagingSenderId: "620410370510",
    appId: "1:620410370510:web:0c56c54bb514d306cd139f"
  };
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();