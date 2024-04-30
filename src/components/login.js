import React from "react";

const Login = (props) => {
  let loggedInData;
  if (props) {
    loggedInData = props;
    console.log(loggedInData);
  }

  return (
    <>
      <p>
        {loggedInData
          ? "User " + loggedInData.props + " Logged In Successfully"
          : "Not Logged In"}
      </p>
    </>
  );
};
export default Login;
