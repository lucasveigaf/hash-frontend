const getAnticipation = (value, installments, percentage, daysToReceive) => {
  if (value <= 0) {
    throw new Error('value can not be lower or equal to 0');
  }

  if (installments < 1) {
    throw new Error('installments can not be lower than 1');
  }

  if (percentage <= 0) {
    throw new Error('mdr percentage can not be lower or equal to 0');
  }

  if (daysToReceive < 1) {
    throw new Error('days to receive can not be lower than 1');
  }
  const mdrPercentage = percentage / 100;
  const rawValueToReceive = value - (value * mdrPercentage);
  const installmentValue = rawValueToReceive / installments;
  const baseInstallmentDays = [...Array(installments)].map((_, index) => (index + 1) * 30);

  return baseInstallmentDays.reduce((accumulator, currentDaysUntil) => {
    const daysBeforeInstallment = currentDaysUntil < daysToReceive
      ? 0
      : currentDaysUntil - daysToReceive;
    const adjustedTax = mdrPercentage * (daysBeforeInstallment / 30);
    const installmentValueToReceive = installmentValue - (installmentValue * adjustedTax);
    return accumulator + installmentValueToReceive;
  }, 0);
};

export default getAnticipation;
