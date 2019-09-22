const MahaLab = require("./maha-lap");
describe("Test Maha-Lap", () => {
  test("Test Tamai with day", () => {
    const result = MahaLab.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });
});
