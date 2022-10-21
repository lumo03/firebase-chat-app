import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FormEvent, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../initFirebase";

const MessageInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [user] = useAuthState(auth);

  const sendMessage = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const docData = {
      text: inputRef?.current?.value,
      id: user?.uid,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "messages"), docData);

    if (inputRef?.current?.value) {
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={sendMessage}>
      <input placeholder="Message..." type="text" ref={inputRef} />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
