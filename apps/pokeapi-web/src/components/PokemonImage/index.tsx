import { type ImageProps } from 'next/image';
import Image from 'next/image';

import pngSrc from './imgs/placeholder.png';
import styles from './pokemon-image.module.css';

export interface PokemonImageProps extends Omit<ImageProps, 'src'> {
  url?: string | null;
  width?: number;
  height?: number;
}

export const PokemonImage = ({
  url,
  alt,
  width = 128,
  height = 128,
  ...props
}: PokemonImageProps) => {
  return (
    <picture className={styles.pixelated}>
      <Image
        src={url ?? pngSrc}
        width={width}
        height={height}
        alt={alt}
        placeholder="empty"
        {...props}
      />
    </picture>
  );
};
