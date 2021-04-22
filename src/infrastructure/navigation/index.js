import React from "react";

import { AppNavigator } from "./app.navigator";

// this allows out navigation to be extensible (i.e. for auth or onboarding)
export const Navigation = () => {
  return <AppNavigator />;
};
