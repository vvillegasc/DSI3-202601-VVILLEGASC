export interface PokemonsDTO {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonsListDTO[];
}

export interface PokemonsListDTO {
  name: string;
  url: string;
}

export interface PokemonDetailDTO {
  id: number;
  name: string;
  types: PokemonDetailListTypeDTO[];
  sprites: PokemonDetailSpritesDTO;
  stats: PokemonStatDTO[];
}

export interface PokemonStatDTO {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonDetailListTypeDTO {
  slot: number;
  type: PokemonDetailTypeDTO;
}
export interface PokemonDetailTypeDTO {
  name: string;
  url: string;
}

export interface PokemonDetailSpritesDTO {
  front_default: string;
  front_shiny: string;
}
