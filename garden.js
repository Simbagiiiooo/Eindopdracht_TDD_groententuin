// This is the code necessary for the tests to pass.

const getYieldForPlant = crop => crop.yield;

const getYieldForCrop = data => getYieldForPlant(data.crop) * data.num_crops;

const getTotalYield = ({ crops }) => {
    yieldFromAllCrops = crops.map(crop => getYieldForCrop(crop));
    return yieldFromAllCrops.reduce((acc, value) => acc + value)
};

// Calculate costs for a crop

const getCostsForCrop = data => data.crop.cost * data.num_crops;

// Calculate revenue for a crop(no envirement factors)

const getRevenueForCrop = data => getYieldForCrop(data) * data.crop.sale_price;

// Calculate the profit for a crop(no envirement factors)

const getProfitForCrop = (data) => getRevenueForCrop(data) - getCostsForCrop(data);

// Calculate the profit for multiple crops(no envirement factors)

const getTotalProfit = ({ crops }) => {
    const profitAllCrops = crops.map(crop => getProfitForCrop(crop));
    return profitAllCrops.reduce((acc, val) => acc + val)
};

module.exports = {   
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
};