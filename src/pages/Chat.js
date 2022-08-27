import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useEffect, useState } from "react";
import ChatBox from '../components/Chatbox';
import { Button } from '../styled/Button.style';
import { Title } from '../styled/Title.style';

// https://dev.to/alterclass/build-a-realtime-chat-app-in-5-min-with-react-and-firebase-3f8m

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDe4mZ-ly9p8y70UZ4UxqU7IcHpyi8_Wa4",
  authDomain: "portfolio-chat-dcfae.firebaseapp.com",
  projectId: "portfolio-chat-dcfae",
  storageBucket: "portfolio-chat-dcfae.appspot.com",
  messagingSenderId: "971570349606",
  appId: "1:971570349606:web:12654844828e4d3827c8e7"
});

const db = firebaseApp.firestore();
  
const Chat = () => {
    
  const [ messages, setMessages ] = useState([])
  const [ newMessage, setNewMessage ] = useState(" ")

  const query = db.collection('messages').orderBy('createdAt', 'desc').limit(5);

  const unsubscribe = () => query.onSnapshot(querySnapshot => {
    const data = querySnapshot.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      }
    })
    console.log("data", data)
    setMessages(data)
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
    // Add new message in Firestore
      db.collection("messages").add({
        text: trimmedMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    // Clear input field
    setNewMessage('');
  }

  useEffect(() => {
    unsubscribe()
  }, [])

  return (
    <div style={{ margin: "auto"}}>
      <Title>Real time chat with Firebase</Title>
      <a rel="noreferrer" target="_blank" href="https://github.com/karlaevelize/leaflet-cloudinary/blob/master/src/pages/Chat.js">
        <Button primary>Go to source code ➚</Button>
      </a>
      <div style={{ display: "flex", flexDirection: "column-reverse"}}>
        {messages && messages.map(message => 
          <ChatBox key={message.id} message={message}/>
        )}
      </div>
      <form onSubmit={handleSubmit}>
          <input 
            style={{ border: "1px solid #ccc", padding: "8px" }}
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)} 
          />
          <Button type="submit" disabled={!newMessage || newMessage.length > 20}>Send</Button>
      </form>
    </div>
  )
}

export default Chat