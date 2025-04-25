import React from 'react';

import { HelloWorldProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const HelloWorld: React.FC<HelloWorldProps> = (props) => {
  return <div>{props.title ?? 'Welcome to Hello World!'}</div>;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default HelloWorld;
