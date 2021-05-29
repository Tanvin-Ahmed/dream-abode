import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializationLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const createUSerWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateUserProfile(name);
            return user;
        })
        .catch((error) => {
            const errorMessage = error.message;
            return { errorMessage };
        });
}


export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            const errorMessage = error.message;
            return { errorMessage };
        });
}

const updateUserProfile = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    }).then(() => {
        // Update successful.
    }).catch((error) => {
        // An error happened.
    });
}

export const logoutUser = () => {
    return firebase.auth().signOut().then(() => {
        return { success: 'logout successfully' };
    }).catch((error) => {
        return { error }
    });
}