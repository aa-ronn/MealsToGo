import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51HR6M9IUqk3H8Hofus7dunCLDmRcOn9nRkUOgARmCHmNZk4dJ37Ih2vMS6NBkIOTSYiFjt0nf8cN3rbUsiHrG0hN009gH3TRJr"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
