import React from 'react';

declare module 'react-helmet' {
  declare class ReactHelmet extends React.Component<*, *, *> {}
  declare var exports: typeof ReactHelmet;
}
