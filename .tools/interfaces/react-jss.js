import React from 'react';

declare module 'react-jss' {
  declare function exports(Component: React.Component, rules: Object, options?: Object): React.Element;
}
