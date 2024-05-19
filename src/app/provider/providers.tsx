'use client';
import { builder } from '~/src/shared/hooks/builder';
import QueryProvider from './query-provider';
import GlobalStateProvider from './global-state-provider';

const Providers = builder.tree([builder.provider(QueryProvider, {}), builder.provider(GlobalStateProvider, {})]);

export default Providers;
