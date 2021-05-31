// This is the code necessary for the tests to pass.

const getYieldForPlant = crop => crop.yield;

const getYieldForCrop = data => getYieldForPlant(data.crop) * data.num_crops;

const getTotalYield = ({ crops }) => {
    yieldFromAllCrops = crops.map(crop => getYieldForCrop(crop));
    return yieldFromAllCrops.reduce((acc, value) => acc + value)
};

// 1:calculate costs for a crop

const getCostsForCrop = data => data.crop.cost * data.num_crops;

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
};