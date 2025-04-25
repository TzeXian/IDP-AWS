import { ComponentConfig, ComponentPropsMap } from '@formzk/core';
import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  CheckboxProps,
  RadioGroup,
  RadioGroupProps,
  Select,
  SelectProps,
  Switch,
  SwitchProps,
} from '@formzk/mui';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';

export const formConfig: ComponentConfig<keyof ComponentPropsMap>[] = [
  {
    name: 'TextField',
    component: OutlinedInput,
    props: {
      fullWidth: true,
    } as OutlinedInputProps,
  },
  {
    name: 'Checkbox',
    component: Checkbox,
    props: {} as CheckboxProps,
  },
  {
    name: 'Switch',
    component: Switch,
    props: {} as SwitchProps,
  },
  {
    name: 'RadioGroup',
    component: RadioGroup,
    props: {} as RadioGroupProps,
  },
  {
    name: 'CheckboxGroup',
    component: CheckboxGroup,
    props: {} as CheckboxGroupProps,
  },
  {
    name: 'Select',
    component: Select,
    props: {} as SelectProps,
  },
];
