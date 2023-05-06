// Functions into function
const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calcCostPerPresentWeight(presentWidth) {
  return presentWidth * KG_IN_USD;
}

function calcCostPerKM(shippingDistance) {
  return shippingDistance * KM_IN_USD;
}

// function getExchangePrice(presentWidth1, presentWidth2, shippingDistance) {
//   const presentPrice1 = presentWidth1 * KG_IN_USD;
//   const presentPrice2 = presentWidth2 * KG_IN_USD;
//   const distancePrice = shippingDistance * KM_IN_USD;
//   const shippingPrice = presentPrice1 + presentPrice2 + distancePrice;

//   return shippingPrice;
// }

// function getExchangePrice(presentWidth1, presentWidth2, shippingDistance) {
//   const presentPrice1 = calcCostPerPresentWeight(presentWidth1);
//   const presentPrice2 = calcCostPerPresentWeight(presentWidth2);
//   const distancePrice = calcCostPerKM(shippingDistance);
//   const shippingPrice = presentPrice1 + presentPrice2 + distancePrice;

//   return shippingPrice;
// }

function getExchangePrice(presentWidth1, presentWidth2, shippingDistance) {
  return (
    calcCostPerPresentWeight(presentWidth1) + calcCostPerPresentWeight(presentWidth2) + calcCostPerKM(shippingDistance)
  );
}

console.log(getExchangePrice(1, 2, 10));
