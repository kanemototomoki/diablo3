export type KanaisCategory = 'Weapon' | 'Armor' | 'Jewelry';
type locale = 'jp' | 'en';

export type KanaisCubeData = {
  [K in KanaisCategory]: {
    name: string;
    effect: {
      [K in locale]: string[];
    };
  }[];
};
