export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyBVnwnl1g0Y8Pc3h_HsicEsDlyG9K0RKCE",
    authDomain: "hiro-d1469.firebaseapp.com",
    databaseURL: "https://hiro-d1469.firebaseio.com",
    projectId: "hiro-d1469",
    storageBucket: "hiro-d1469.appspot.com",
    messagingSenderId: "1021089080220",
    appId: "1:1021089080220:web:ca10ea9051027be3481e59",
    measurementId: "G-LVEWWCV800"
  }
};

const isLive: Boolean = false;

// (1) => Local , (2) => Staging, (3) => develop, (4) => live.
const env: Number = 3;

function getEnvUrls(environment: Number): { URL: string } {
  switch (environment) {
    //Local
    case 1:
      return {
        URL: 'http://localhost:4000',
      }
    default:
      return {
        URL: 'http://localhost:4000',
      }
  }

}
//Not needed anymore.
const baseURL = getEnvUrls(env).URL;
export const apiUrl = `${baseURL}/api`;

export const perPage = 50;

export const api = {
  LOGIN: `${apiUrl}/auth/login`,
  REGISTER: `${apiUrl}/auth/register`,
  GET_PRODUCTS: `${apiUrl}/products/all`,
  GET_PRODUCT: `${apiUrl}/product`,
  GET_M_PRODUCT: `${apiUrl}/mutual-product`,
  ADD_CART: `${apiUrl}/cart`
}
