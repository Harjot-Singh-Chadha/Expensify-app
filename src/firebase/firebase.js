import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUSlAYlp4RQAPWqAnybrZgn7mih1ICskE",
  authDomain: "expensify-db826.firebaseapp.com",
  databaseURL: "https://expensify-db826.firebaseio.com",
  projectId: "expensify-db826",
  storageBucket: "expensify-db826.appspot.com",
  messagingSenderId: "169868807373",
  appId: "1:169868807373:web:63144d52db49bf01192d84",
  measurementId: "G-SXT5F0F48S"
};

  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export { firebase, googleAuthProvider, facebookAuthProvider, database as default };

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
  
 





