import constants from "../constants";

class AuthApi {
    #_client;
    #_accessToken;

    constructor(client) {
        this.#_client = client;
        this.#_accessToken = null;
        this._url = 'auth/'
        this.#_client.interceptors.request.use(this.interceptRequestSuccess, error => Promise.reject(error));
        this.#_client.interceptors.response.use(this.interceptResponseSuccess, this.interceptResponseError);
    }

    signIn = data => this.#_client.post(`${this._url}${constants.signInPath}`, data)

    signUp = data => this.#_client.post(`${this._url}${constants.signUpPath}`, data)

    logout = () => {
        this.#_accessToken = null;
        window.localStorage.removeItem(constants.refreshToken);
    }
    interceptRequestSuccess = config => {
        if (this.#_accessToken) {
            config.headers['Authorithtion'] = `Bearer ${this.#_accessToken}`;
        }
        return config
    }
    _saveTokenPair = ({access, refresh}) => {
        this.#_accessToken = access;
        window.localStorage.setItem(constants.refreshToken, refresh);
    }

    interceptResponseSuccess = response => {
        const {
            config:{url},
            data:{payload:{data:{tokenPair}}}
        }=response;
        if(url.includes(this._url)){
        this._saveTokenPair(tokenPair);
        }return response;
    }
}

export default AuthApi


