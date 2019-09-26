import Firebase from 'firebase';
const firebaseConfig = {
    
  };
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();