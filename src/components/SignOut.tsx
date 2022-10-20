import { signOut } from "firebase/auth";
import { auth } from "../initFirebase";

const SignOut = () => {
  return <button onClick={() => signOut(auth)}>Sign out</button>;
};

export default SignOut;
