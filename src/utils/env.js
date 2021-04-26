const liveHost = "https://us-central1-mealstogo-83641.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-83641/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

//ios
// export const host = isDevelopment ? localHost : liveHost;

//! if on Android uncomment below line and comment out above line
//! Android will not function with non https address

//android
export const host = liveHost;
