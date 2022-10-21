import {
  collection,
  DocumentData,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../initFirebase";
import { MessageType } from "../types";
import ChatMessage from "./ChatMessage";
import MessageInput from "./MessageInput";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const ChatRoom = () => {
  const [user] = useAuthState(auth);
  const messagesRef = collection(db, "messages");
  const msgQuery = query(messagesRef, orderBy("createdAt"), limit(15));
  const [value, loading, error] = useCollection(msgQuery);

  const showMessage = (doc: DocumentData) => {
    const msg: MessageType = {
      text: doc.data().text,
      createdAt: doc.data().createdAt,
      uid: doc.data().id,
    };
    return <ChatMessage key={doc.id} message={msg} />;
  };

  if (user) {
    if (value && value.docs.length > 0) {
      return (
        <>
          <div>Hello, {user.displayName}!</div>
          <div>
            <br />
          </div>
          {value && value.docs.length > 0 && (
            <>
              <div>Messages:</div>
              {value.docs.map(showMessage)}
              <MessageInput />
            </>
          )}
          <SignOut />
        </>
      );
    } else if (value) {
      return (
        <>
          <div>No messages.</div>
          <MessageInput />
          <SignOut />
        </>
      );
    } else {
      return (
        <>
          <div>An error occured, please try again later.</div>
          {error && <div>Error: {error.message}</div>}
          <SignOut />
        </>
      );
    }
  } else {
    return <SignIn />;
  }
};

export default ChatRoom;
