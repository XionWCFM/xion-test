'use client';
import { Provider } from 'jotai';
import type { PropsWithChildren } from 'react';

const GlobalStateProvider = ({ children }: PropsWithChildren) => {
  return <Provider>{children}</Provider>;
};

export default GlobalStateProvider;
