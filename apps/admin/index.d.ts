import type { ReactElement, ReactNode } from 'react';
import { ComponentPropsMap as LibraryComponentPropsMap } from '@formzk/core';
import {
  CheckboxGroupProps,
  CheckboxProps,
  RadioGroupProps,
  SelectProps,
  SwitchProps,
} from '@formzk/mui';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { User } from '@stack/data-access';
import { ThemeSettings } from '@webbyx/mui';
import { AuthIdentityProps } from '@webbyx/next-js';
import type {
  NextComponentType,
  NextPageContext,
} from 'next/dist/shared/lib/utils';

declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'next' {
  export declare type NextPage<P = any, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    setPageThemeSettings?: () => ThemeSettings;
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

declare module '@webbyx/next-js' {
  export declare const useAuthIdentity: <
    T extends User
  >() => AuthIdentityProps<T>;
}

declare module '@formzk/core' {
  export interface ComponentPropsMap extends LibraryComponentPropsMap {
    TextField: OutlinedInputProps;
    Checkbox: CheckboxProps;
    Switch: SwitchProps;
    RadioGroup: RadioGroupProps;
    CheckboxGroup: CheckboxGroupProps;
    Select: SelectProps;
  }
}
