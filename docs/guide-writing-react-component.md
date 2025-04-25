# Writing Component

This docs is the guideline of writing a React component. This guide will provide actual component for reference

[Back](../README.md)

---

## Table of contents

- [Folder Structure](#folder-structure)
- [File: index.tsx](#file-indextsx)
- [File: props.ts](#file-propsts)
- [File: helpers.ts](#file-helperstsx)
- [File: README.md](#file-readmemd)

---

## Folder Structure

```text
└── ComponentName
    ├── docs
    │    └── preview.png
    ├── index.tsx
    ├── props.ts
    ├── config.ts|tsx (depends scenario)
    ├── settings.tsx (depends scenario)
    ├── schema.ts|tsx (depends scenario)
    ├── hooks.tsx (depends scenario)
    ├── helpers.ts|tsx (depends scenario)
    └── README.md
```

---

### File: index.tsx

```ts
import React, { useMemo } from 'react';
import toNumber from 'lodash/toNumber';

import { formatCurrency } from './helpers';
import { MoneyProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const Money: React.FC<MoneyProps> = (props) => {
  const {
    amount = 0,
    format = '0,0',
    currency,
    className,
    enableSymbol = false,
    prefix,
    postfix,
    onlyText = false,
    ...restProps
  } = props;

  // =============== HOOKS
  const actual = useMemo(() => {
    if (typeof amount === 'number') return amount;
    if (typeof amount === 'string') return toNumber(amount);
    return 0;
  }, [amount]);

  // =============== VARIABLES
  const output = (
    <>
      {prefix}
      {formatCurrency(actual, {
        currency: currency,
        format,
        showSymbol: enableSymbol,
      })}
      {postfix}
    </>
  );

  // =============== VIEWS
  if (onlyText) return output;
  return (
    <span className={className} {...restProps}>
      {output}
    </span>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default Money;
```

---

### File: props.ts

```ts
import { ReactNode } from 'react';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type MoneyProps = {
  // class name
  className?: string;
  // custom style props
  style?: React.ButtonHTMLAttributes<HTMLSpanElement>['style'];
  // amount
  amount: number | string;
  // price format, default to "0,0.00"
  format?: string;
  // currency of price, default to "MYR"
  currency?: string;
  // whether show currency symbol, default to true, if falsy show "MYR" instead of "RM"
  enableSymbol?: boolean;
  // prefix for price
  prefix?: ReactNode;
  // postfix for price
  postfix?: ReactNode;
  // only text will be return, this will ignored className props
  onlyText?: boolean;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default MoneyProps;
```

---

### File: helpers.tsx

```ts
import getSymbolFromCurrency from 'currency-symbol-map';
import numeral from 'numeral';

/**
 * ===========================
 * MAIN
 * ===========================
 */
// get symbol from currency
export const toCurrencySymbol = (currency = 'MYR') => {
  return getSymbolFromCurrency(currency);
};

// format currency with format & symbol
export const formatCurrency = (
  amount: string | number = 0,
  options: {
    currency?: string;
    format?: string;
    showSymbol?: boolean;
  } = {
    format: '0,0.00',
    showSymbol: true,
  }
): string | number => {
  const { currency, format, showSymbol } = options;
  const price = numeral(amount).format(format);
  const symbol = showSymbol ? toCurrencySymbol(currency) : currency;
  if (symbol) {
    return `${symbol} ${price}`;
  }
  return price;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  toCurrencySymbol,
  formatCurrency,
};
```

---

### File: README.md

Below is the example of how to write documentation for your component

````md
# XXX Name

Short description of this component

---

## Props

```ts
type MoneyProps = {
  // class name
  className?: string;
  // custom style props
  style?: HTMLSpanElement['style'];
  // amount
  amount: number;
  // price format, default to "0,0.00"
  format?: string;
  // currency of price, default to "MYR"
  currency?: string;
  // whether show currency symbol, default to true, if falsy show "MYR" instead of "RM"
  enableSymbol?: boolean;
  // prefix for price
  prefix?: ReactNode;
  // postfix for price
  postfix?: ReactNode;
  // only text will be return, this will ignored className props
  onlyText?: boolean;
};
```

---

## Preview

![Preview](./docs/preview.png)

---

## Example

```ts
// import from package
import { Money } from "@stack/ui";

// default currency & format
<Money amount={100} />

// Currency USD
<Money amount={100} currency="USD" />

// Currency GBP with custom format
// format can refer to this link http://numeraljs.com/#format
<Money amount={100} currency="USD" format="0a" />
```
````
