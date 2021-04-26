import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9999;
`;

const FavouriteButtonTight = styled(TouchableOpacity)`
  position: absolute;
  top: 15px;
  right: 8px;
  z-index: 9999;
`;

export const Favourite = ({ restaurant, placement = "relaxed" }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouritesContext
  );

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  if (placement === "relaxed") {
    return (
      <FavouriteButton
        onPress={() =>
          !isFavourite
            ? addToFavourites(restaurant)
            : removeFromFavourites(restaurant)
        }
      >
        <AntDesign
          name={isFavourite ? "heart" : "hearto"}
          size={24}
          color={isFavourite ? "red" : "white"}
        />
      </FavouriteButton>
    );
  } else if (placement === "tight") {
    return (
      <FavouriteButtonTight
        onPress={() =>
          !isFavourite
            ? addToFavourites(restaurant)
            : removeFromFavourites(restaurant)
        }
      >
        <AntDesign
          name={isFavourite ? "heart" : "hearto"}
          size={20}
          color={isFavourite ? "red" : "white"}
        />
      </FavouriteButtonTight>
    );
  }
};
