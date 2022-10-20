import { useState } from "react";
import { useSignIn } from "../hooks";
import { AllowedAuthProvider } from "../types";

const SignIn = () => {
  const [provider, setProvider] = useState(AllowedAuthProvider.Google);
  const [signIn, user, loading, error] = useSignIn(provider);

  const signInHelper = (selectedProvider: AllowedAuthProvider) => {
    setProvider(selectedProvider);
    signIn();
  };

  return (
    <>
      <button onClick={() => signInHelper(AllowedAuthProvider.Google)}>
        Sign in with Google
      </button>
    </>
  );
};

export default SignIn;
