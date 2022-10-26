import Head from 'next/head';

import { config } from '~config';

import type { Meta, Link } from '~types';

export interface SeoProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Meta[];
  links?: Link[];
}

export const Seo = ({
  title,
  description = 'Personal Sandbox',
  meta = [],
  links = [],
}: SeoProps): JSX.Element => {
  const pageMeta = [...config.meta, ...meta];

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
      />
      <link rel="shortcut icon" href="/favicon.png" />
      <title>{`${title} | probablyweb.dev`}</title>
      <meta name="theme-color" content="#fff" />
      <meta name="description" content={description} />
      {pageMeta?.length &&
        pageMeta.map((item) => <meta key={item.content} {...item} />)}
      {links?.length && links.map((item) => <link key={item.href} {...item} />)}
    </Head>
  );
};
