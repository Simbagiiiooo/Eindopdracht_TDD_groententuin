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

// Calculate the Yield(with envirement factors)

const getYieldForPlantMulti = (crop, environment) => {
    const sunPercentage = "sun" in crop.factors ? crop.factors.sun[environment.sun] || 0 : 0;
    const windPercentage = "wind" in crop.factors ? crop.factors.wind[environment.wind] || 0 : 0;
    const soilPercentage = "soil" in crop.factors ? crop.factors.soil[environment.soil] || 0 : 0;
    const percentages = [sunPercentage, windPercentage, soilPercentage];
    multiplyFactors = percentages.map(percentage => percentage / 100 + 1);
    return Math.floor(multiplyFactors.reduce((acc, curr) => acc * curr, getYieldForPlant(crop)))
};

// Calculate the Yield(with envirement factors)

const getYieldForCropMulti = (data, environment) => getYieldForPlantMulti(data.crop, environment) * data.num_crops;

// Calculate the profit for crop (with envirement factors)

const getProfitForCropMulti = (data, environment) => getYieldForCropMulti(data, environment) * data.crop.sale_price - getCostsForCrop(data);

module.exports = {   
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantMulti,
    getYieldForCropMulti,
    getProfitForCropMulti,
};