import * as firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const database = firebase.database();

  export { firebase, database as default };

//   firebase.database().ref()
//   .once('value')
//   .then((snapshot)=>{
//       console.log(snapshot.val())
//   })
//   .catch((e)=>{
//       console.log(e);
//   })


// firebase.database().ref().on('value',(snapshot)=>{
//        const data= snapshot.val();
//        console.log(data)
// })

//   firebase.database().ref().set({
//      name:'Harjot Singh',
//      age:24,
//      StressLevel:6,
//      job:{
//         title:'Software developer',
//         company:'Google'
//      },
//      location:{
//          city:'Delhi',
//          country:'India'
//      }
//   }).then(()=>{
//       console.log('Data was Saved!');
//   }).catch((err)=>{
//       console.log('Error', err);
//   });

// firebase.database().ref().update({
//     StressLevel:9,
//     'job/company':'Amazon',
//     'location/city':'Seattle'
// })
  
 





