import { MainLayout } from "@/components/layouts";
import FavoritesPokemons from "@/components/pokemon/FavoritesPokemons";

import NoFavorites from "@/components/ui/NoFavorites";
import { localFavorites } from "@/utils";

import { FC, useEffect, useState } from "react";

const Favorites: FC = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons);
  }, []);

  return (
    <MainLayout title="Favorites">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemons={favoritesPokemons} />
      )}
    </MainLayout>
  );
};
export default Favorites;
