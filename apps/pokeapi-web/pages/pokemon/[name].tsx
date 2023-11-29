import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { PokemonImage } from '~/components/PokemonImage';
import { Skeleton } from '~/components/Skeleton';
import { Tag } from '~/components/Tag';
import { trpc } from '~/utils/trpc';

const LoadingSkeleton = () => (
  <>
    <div className="flex flex-row flex-nowrap gap-8">
      <Skeleton width={256} height={256} />
      <div className="flex flex-auto flex-col gap-4">
        <Skeleton width="12ch" height="1.2rem" />
        <div className="flex flex-col gap-2">
          <Skeleton width="8ch" height="1.2rem" />
          <div className="flex flex-row flex-wrap gap-1">
            <Skeleton width="10ch" height="2rem" />
            <Skeleton width="10ch" height="2rem" />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <Skeleton width="12ch" height="1.2rem" />
      <div className="flex list-none flex-row flex-wrap gap-4 p-0">
        <Skeleton width={128} height={128} />
      </div>
    </div>
  </>
);

export const PokemonDetailsPage = () => {
  const router = useRouter();
  const query = router.query.name as string;

  const { data, error, isLoading } = trpc.pokeapi.getPokemonById.useQuery({
    name: query,
  });

  const { name = '', sprites, abilities = [], evolutions = [] } = data ?? {};

  if (error?.message) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div
      className={classNames(
        'flex min-h-card w-full max-w-card flex-col gap-2',
        'bg-violet-50 p-4 shadow-md sm:p-8',
        'rounded border border-solid border-violet-200'
      )}
    >
      {isLoading && <LoadingSkeleton />}
      {!isLoading && (
        <>
          <div className="flex flex-row flex-nowrap gap-8">
            <PokemonImage
              alt={name}
              url={sprites?.front_default}
              width={256}
              height={256}
            />
            <div className="flex flex-col gap-4">
              <h2 className="capitalize">{name}</h2>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl">Abilities</h3>
                <div className="flex flex-row flex-wrap gap-1">
                  {abilities.map(({ ability, is_hidden }) => (
                    <Tag
                      key={ability.name}
                      variant={is_hidden ? 'neutral' : 'info'}
                    >
                      {ability.name}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">Evolutions</h3>
            {evolutions.length > 0 ? (
              <ul className="flex list-none flex-row flex-wrap gap-4 p-0">
                {evolutions.map(({ name, sprites }) => (
                  <li key={name}>
                    <Link
                      className="text-current no-underline"
                      href={`/pokemon/${name}`}
                    >
                      <PokemonImage alt={name} url={sprites.front_default} />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <span>I am the last one</span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetailsPage;
