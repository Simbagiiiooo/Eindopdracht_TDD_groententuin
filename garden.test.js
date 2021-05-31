const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
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