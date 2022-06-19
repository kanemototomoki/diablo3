import React from 'react';
import { type KanaisCubeData, KanaisCategory } from '@/data/types';
// @ts-ignore
import kanaisCubeData from '/data/kanais_cube.json';

type Props = {
  data: KanaisCubeData[KanaisCategory];
};

const Component: React.FC<Props> = (props) => (
  <ul>
    {props.data.map((item) => {
      return (
        <li>
          <h3>{item.name}</h3>
          <p>{item.effect.en?.join('\n')}</p>
          <p>{item.effect.jp}</p>
        </li>
      );
    })}
  </ul>
);

const KanaisCube = (category: KanaisCategory) => {
  const data = kanaisCubeData[category] as KanaisCubeData[KanaisCategory];

  return <Component data={data} />;
};

export const KanaisCubeWeapon: React.FC = () => KanaisCube('Weapon');
export const KanaisCubeArmor: React.FC = () => KanaisCube('Armor');
export const KanaisCubeJewelry: React.FC = () => KanaisCube('Jewelry');
