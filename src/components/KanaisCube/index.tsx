import React from 'react';
import { type KanaisCubeData, KanaisCategory } from '@/data/types';
// @ts-ignore
import kanaisCubeData from '/data/kanais_cube.json';

const KanaisCube = (category: KanaisCategory) => {
  const data = kanaisCubeData[category] as KanaisCubeData[typeof category];

  console.log({ data });
  return (
    <ul>
      {data.map((item) => {
        return (
          <li>
            <h3>{item.name}</h3>
            <p>{item.effect.en}</p>
            <p>{item.effect.jp}</p>
          </li>
        );
      })}
    </ul>
  );
};

export const KanaisCubeWeapon: React.FC = () => KanaisCube('Weapon');
export const KanaisCubeArmor: React.FC = () => KanaisCube('Armor');
export const KanaisCubeJewelry: React.FC = () => KanaisCube('Jewelry');
