/* eslint-disable prettier/prettier */
export interface PokemonDetails {
  abilities: Ability[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
