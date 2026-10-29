import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { auth } from "../Config/Firebase";

export async function signUp(name, email, password) {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  await updateProfile(userCredentials.user, {
    displayName: name,
  });

  return userCredentials.user;
}

export async function signIn(email, password) {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return userCredentials.user;
}

export async function logout() {
  await signOut(auth);
}

export function getAuthErrorMessage(errorCode) {
  const errors = {
    "auth/email-already-exists": "Email is already registered",
    "auth/invalid-credential": "Incorrect email or password",
  };

  return errors[errorCode] || "Something went wrong. Please try again";
}
