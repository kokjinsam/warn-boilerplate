import React from 'react';

declare module 'react-router-transition' {
  declare interface ReactRouterTransition extends React.Component<*, *, *> {
    RouteTransition: React.Component<*, *, *>;
    presets: any;
  }
  declare var exports: ReactRouterTransition;
}
