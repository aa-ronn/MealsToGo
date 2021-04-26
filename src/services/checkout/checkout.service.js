import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51HR6M9IUqk3H8Hofus7dunCLDmRcOn9nRkUOgARmCHmNZk4dJ37Ih2vMS6NBkIOTSYiFjt0nf8cN3rbUsiHrG0hN009gH3TRJr"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
