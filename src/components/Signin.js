import React, { useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { GlobalContext } from "../context/globalState";
import { Redirect } from "react-router-dom";
import firebase from "firebase";

const Signin = ({ history }) => {
  const { currentUser } = useContext(GlobalContext);
  if (currentUser) {
    return <Redirect to={"/dashboard"} />;
  }

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  return (
    <div>
      <div className='welcome-text'>
        <h1>Expense Tracker</h1>
        <p>Keep track of all your expenses in one place</p>
      </div>
      {currentUser ? (
        history.push("/dashboard")
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
};

export default Signin;
