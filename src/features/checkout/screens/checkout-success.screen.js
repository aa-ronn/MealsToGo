import React, { useEffect } from "react";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safe-area.components";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutSuccessScreen = ({ navigation }) => {
  useEffect(() => {
    const transitionBackTimer = setTimeout(() => {
      navigation.navigate("Checkout");
    }, 2000);
    return () => {
      clearTimeout(transitionBackTimer);
    };
  }, [navigation]);

  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <Text variant="label">Success!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
