// This is the code necessary for the tests to pass.

const getYieldForPlant = crop => crop.yield;

const getYieldForCrop = data => getYieldForPlant(data.crop) * data.num_crops;

const getTotalYield = ({ crops }) => {
    yieldFromAllCrops = crops.map(crop => getYieldForCrop(crop));
    return yieldFromAllCrops.reduce((acc, value) => acc + value)
};

// 1:calculate costs for a crop

const getCostsForCrop = data => data.crop.cost * data.num_crops;

// 2: calculate revenue for a crop(no envirement factors)

const getRevenueForCrop = data => getYieldForCrop(data) * data.crop.sale_price;

// 3:  calculate the profit for a crop(no envirement factors)

const getProfitForCrop = (data) => getRevenueForCrop(data) - getCostsForCrop(data);

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
};