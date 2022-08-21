import type {
  ReactNode,
  DetailedHTMLProps,
  LinkHTMLAttributes,
  MetaHTMLAttributes,
} from 'react';

export type Meta = DetailedHTMLProps<
  MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
>;

export type Link = DetailedHTMLProps<
  LinkHTMLAttributes<HTMLLinkElement>,
  HTMLLinkElement
>;

export interface PropsWithChildren {
  children: ReactNode;
}
