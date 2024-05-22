import NextLink from 'next/link';
import { type Ref, forwardRef, type ReactNode } from 'react';

type LinkProps = {
  href: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
  children?: ReactNode;
};

export const Link = forwardRef(function Link(props: LinkProps, ref: Ref<HTMLAnchorElement>) {
  const { href, replace, scroll, prefetch, children } = props;
  return (
    <NextLink href={href} replace={replace} scroll={scroll} prefetch={prefetch} ref={ref}>
      {children}
    </NextLink>
  );
});
