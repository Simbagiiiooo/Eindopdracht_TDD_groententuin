const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
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

// TEST: 

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