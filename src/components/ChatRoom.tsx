import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../initFirebase";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const ChatRoom = () => {
  const [user] = useAuthState(auth);

  if (user) {
    return (
      <>
        <div>Hello, {user.displayName}!</div>
        <SignOut />
      </>
    );
  } else {
    return <SignIn />
  }
};

export default ChatRoom;
