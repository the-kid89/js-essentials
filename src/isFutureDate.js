/**
 * isFutureDate
 * @param {string|number|Date} now - now to comparison with: "current now"
 * @param {string|number|Date} future - now to comparison again: "not current now"
 * @return Boolean
 * @throws TypeError
 * @example
 * isFutureDate('2019-10-10', '2020-01-01')
 */
module.exports = (now, future) => {
  let isFuture = undefined;
  let comparison = undefined;
  let typeOfNow = typeof now;
  let typeOfFuture = typeof future;

  if (!future) {
    comparison = new Date();
  } else {
    if (typeOfFuture === 'string' || typeOfFuture === 'number') {
      comparison = new Date(future);
    } else if (future instanceof Date) {
      comparison = future;
    } else {
      throw TypeError('future must be of type String or Date');
    }
  }

  if (typeOfNow === 'string' || typeOfNow === 'number') {
    now = new Date(now);
  } else if (!(now instanceof Date)) {
    throw TypeError('now must be of type string, number or Date');
  }

  const futureYear = now.getUTCFullYear() > comparison.getUTCFullYear();
  const futureMonth = now.getUTCMonth() > comparison.getUTCMonth();
  const futureDate = now.getUTCDate() > comparison.getUTCDate();

  isFuture = (futureYear || futureMonth || futureDate);

  return isFuture;
};
