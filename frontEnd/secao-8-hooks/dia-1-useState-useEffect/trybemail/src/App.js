import React, { useEffect, useState } from 'react';
import { List, READ, UNREAD } from './components/List';
import data from './data';
import Controls from './components/Controls';
import './App.css';

function App() {
  const [messages, setMessages] = useState(data);

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((message) => {
      if (message.id === messageId) {
        return { ...message, status: newStatus }
      }
      return message;
    })

    setMessages(updatedMessages);
  }

  const markAllAsRead = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: READ }));
    setMessages(allAsRead);
  }

  const markAllAsUnread = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: UNREAD }));
    setMessages(allAsRead);
  };

  useEffect(() => {
    const isAllmessagesRead = messages.every((m) => m.status === READ);

    if (isAllmessagesRead) {
      alert('Lau!');
    }
  }, [messages]);

  return (
    <div className="App">
      <header>
        <h1>TrybeEmail</h1>
      </header>

      <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />

      <List
        messages={ messages }
        setMessageStatus={ setMessageStatus }
      />
    </div>
  );
}

export default App;