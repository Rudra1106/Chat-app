import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) { //this whole code means if user doesn't exist redirect to auth page else, to chats page.
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;