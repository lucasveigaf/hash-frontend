# `finance-calculator`

A lib for calculating anticipation taxes given a MDR value.

## Usage

```
import getAnticipation from '@hash-mono/financial-calculator';

getAnticipation(
  value, // value can not be lower or equal to 0
  installments, // installments can not be lower than 1
  percentage, // mdr percentage can not be lower or equal to 0
  daysToReceive // days to receive can not be lower than 1
);

getAnticipation(150, 3, 4, 15) // 135.36
getAnticipation(150, 0, 4, 15) // Throws "installments can not be lower than 1"
```
