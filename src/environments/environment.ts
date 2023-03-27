// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // BaseUrl: 'http://localhost:3000/api/v1/',
  BaseUrl: 'http://3.136.227.187:3000/api/v1/',
  IMAGE_URL: 'https://audiolasitava.s3.us-east-2.amazonaws.com/',

  tabType: {
    audiobook: "audiobook",
    ebook: "ebook",
    podcast: "podcast"
  },

  firebase: {
    // databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxx",

    apiKey: "AIzaSyAzcRiMr72GNkuAB4U0KRt92OleiJCCwE0",
    authDomain: "audio-lasitava.firebaseapp.com",
    projectId: "audio-lasitava",
    storageBucket: "audio-lasitava.appspot.com",
    messagingSenderId: "873835543171",
    appId: "1:873835543171:web:9761fff2f7a5e66c20f9b6",
    measurementId: "G-VH64234L96"
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
