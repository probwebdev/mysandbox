import classNames from 'classnames';

import { PokemonImage } from '~/components/PokemonImage';

import type { PokemonSprites } from '@acme/api';

export interface PokemonCardProps {
  name: string;
  sprites: PokemonSprites;
}

export const PokemonCard = ({ name, sprites }: PokemonCardProps) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center justify-center',
        'gap-2 p-2',
        'rounded border border-solid border-violet-200 hover:border-violet-400',
        'shadow-md transition-all hover:shadow-lg active:shadow-md',
        'bg-violet-50 hover:bg-violet-200 active:bg-violet-300',
        'cursor-pointer'
      )}
    >
      <PokemonImage url={sprites.front_default} alt={name} />
      <span className={classNames('font-semibold capitalize')}>{name}</span>
    </div>
  );
};
