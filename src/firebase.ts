import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDhBGT6ienI5wU2XNVD1GNpVksVFTP0H3g',
  authDomain: 'wedding-invitation-7398d.firebaseapp.com',
  projectId: 'wedding-invitation-7398d',
  storageBucket: 'wedding-invitation-7398d.firebasestorage.app',
  messagingSenderId: '1070078565187',
  appId: '1:1070078565187:web:af7b521baa9121669fedf6',
  measurementId: 'G-52SKLC679T',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
