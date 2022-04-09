// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
//Constante que conecta a firebase  Real Time DataBase
firebaseConfig: {
  apiKey: "AIzaSyAuroyAxdvElNd7MuS0yE-tTjockI9MJ94",
  authDomain: "bdcuenta-b14a4.firebaseapp.com",
  databaseURL: "https://bdcuenta-b14a4-default-rtdb.firebaseio.com",
  projectId: "bdcuenta-b14a4",
  storageBucket: "bdcuenta-b14a4.appspot.com",
  messagingSenderId: "527814944131",
  appId: "1:527814944131:web:3072a74f633ccc647002b6",
  measurementId: "G-0JYDK4TP7B"
}

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
