const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];
const layout = { title: "World Wide Wine Production" };
const data = [{ labels: xArray, values: yArray, hole: 0.4, type: "pie" }];

module.exports = { layout,data };