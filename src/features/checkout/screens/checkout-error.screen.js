import React, { useEffect } from "react";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safe-area.components";
import { colors } from "../../../infrastructure/theme/colors";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutErrorScreen = ({ navigation, route }) => {
  useEffect(() => {
    const transitionBackTimer = setTimeout(() => {
      navigation.navigate("Checkout");
    }, 2000);
    return () => {
      clearTimeout(transitionBackTimer);
    };
  }, [navigation]);

  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
