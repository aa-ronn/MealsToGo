import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-83641.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-83641/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
