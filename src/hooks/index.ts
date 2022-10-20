import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../initFirebase";
import { AllowedAuthProvider } from "../types";

export const useSignIn = (provider: AllowedAuthProvider) => {
  // return provider === AllowedAuthProvider.Google ? useSignInWithApple(auth) : useSignInWithGoogle(auth);
  return useSignInWithGoogle(auth);
};
