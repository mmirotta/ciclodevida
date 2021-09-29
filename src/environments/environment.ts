// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiPaises: {
    url: 'http://api.countrylayer.com/v2/',
    key: '3906335abdb3eb182aa03c7cb9db2626'
  },
  firebase: {
    apiKey: 'AIzaSyBBO1JK97QleqEzVJVjS2jT4_tpKLeyYxw',
    authDomain: 'ciclodevida-a398c.firebaseapp.com',
    databaseURL: 'https://ciclodevida-a398c.firebaseio.com',
    projectId: 'ciclodevida-a398c',
    storageBucket: 'ciclodevida-a398c.appspot.com',
    messagingSenderId: '20609190215',
    // apiKey: "AIzaSyCU828otTA5-EFp7EV2CG6f_Jvo758qcFo",
    // authDomain: "ciclodevida-3404f.firebaseapp.com",
    // projectId: "ciclodevida-3404f",
    // storageBucket: "ciclodevida-3404f.appspot.com",
    // messagingSenderId: "380921811798",
    // appId: "1:380921811798:web:262e161aa1bfc3484efcf7"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
