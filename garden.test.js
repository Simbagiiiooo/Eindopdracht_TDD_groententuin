const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantMulti,
} = require("./garden.js");

// Given tests

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };
    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});
describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const data = {
            crop: corn,
            num_crops: 10,
        };
        expect(getYieldForCrop(data)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, num_crops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// TEST: calculate costs for a crop

describe("getCostsForCrop", () => {
    test("Get number of crops with multiple costs ", () => {
    const corn = {
        name: "corn",
        cost: 1
    };
    const data = {
        crop: corn,
        num_crops: 23,
    };
        expect(getCostsForCrop(data)).toBe(23);
    });
});

// TEST: calculate revenue for a crop

describe("getRevenueForCrop", () => {
    test("Get revenue for crop", () => {
    const apple = {
        name: "apple",
        yield: 13,
        sale_price: 2,
    };
    const data = {
        crop: apple,  
        num_crops: 5
    }
        expect(getRevenueForCrop(data)).toBe(130);
    });
});

// TEST: calculate profit for a crop

describe("getProfitForCrop", () => {
    test("Get profit for crop", () => {
    const avocado = {
        name: "avocado",
        cost: 4,
        yield: 8,
        sale_price: 12,
    };
    const data = {
        crop: avocado,
        num_crops: 10
    }
        expect(getProfitForCrop(data)).toBe(920);
    });
});

// TEST: calculate profit for multiple crops

describe("getTotalProfit", () => {
    test("Get total profit", () => {
    const corn = {
        name: "corn",
        cost: 1,
        yield: 3,
        sale_price: 3
    };
    const apple = {
        name: "apple",
        cost: 3,
        yield: 13,
        sale_price: 2
    };
    const pumpkin = {
        name: "pumpkin",
        cost: 2,
        yield: 4,
        sale_price: 5
    };
    const avocado = {
        name: "avocado",
        cost: 4,
        yield: 8,
        sale_price: 12,
    };
    const crops = [
        { crop: corn, num_crops: 5 },
        { crop: apple, num_crops: 6 },
        { crop: pumpkin, num_crops: 2 },
        { crop: avocado, num_crops: 10 }
    ];
        expect(getTotalProfit({ crops })).toBe(1134);
    });
});

// Calculate the Yield of one crop and envirement factors

describe("getYieldForPlantMulti", () => {
    test("Get yield for one crop taking with environment factors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        },
    };
    const environment_factors = {
        sun: "low",
    };
        expect(getYieldForPlantMulti(corn, environment_factors)).toBe(15)
    });
});

// Calculate the Yield of multiple crops and envirement factors


describe("getYieldForPlantMulti", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 0,
                medium: -20,
                high: -60,
            },
            soil: {
                clay: 20,
                sandy_clay: 0,
                sand: -20
            }
        }
    };
    const avocado = {
        name: "avocado",
        cost: 4,
        yield: 8,
        sale_price: 12,
        factors: {
            sun: {
                low: -80,
                medium: 0,
                high: 40,
            },

            soil: {
                clay: -40,
                sandy_clay: 10,
                sand: 20
            }
        }
    };

    const apple = {
        name: "apple",
        cost: 3,
        yield: 13,
        sale_price: 2,
        factors: {
            sun: {
                high: 20,
                medium: -5,
                low: -15
            }
        }
    };

    const environment_factors = {
        sun: "low",
        wind: "high",
        soil: "sandy_clay"
    };
    test("Get yield for plant with environment factors into account", () => {
        expect(getYieldForPlantMulti(corn, environment_factors)).toBe(6)
    });
    test("Get yield for plant with environment factors into account", () => {
        expect(getYieldForPlantMulti(avocado, environment_factors)).toBe(1)
    });
    test("Get yield for plant with environment factors into account", () => {
        expect(getYieldForPlantMulti(apple, environment_factors)).toBe(11)
    });
});