// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Tries to login using a username and password.
 * 
 * Returns an HTTP response status code, for example:
 * - 200 when the login succeeds
 * - 401 when the entered username or password is incorrect
 * - 0 when the network connection is unavailable
 * 
 * @param {string} username - This field is required.
 * @param {string} password - This field is required.
 * @returns {Promise.<Big>}
 */
export async function SignIn(username, password) {
	// BEGIN USER CODE
    if (!username || !password) {
        return Promise.resolve(new Big(401));
    }
    return new Promise(resolve => {
        const onSuccess = () => resolve(new Big(200));
        const onError = error => resolve(new Big(error.status));
        mx.login(username, password, onSuccess, onError);
    });
	// END USER CODE
}
