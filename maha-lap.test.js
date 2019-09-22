const MahaLab = require("./maha-lap");
describe("Test Maha-Lap", () => {
  test("Test Tamai with day return 2", () => {
    const result = MahaLab.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });
  test("Test Tamai with day return 3", () => {
    const result = MahaLab.tamnaiWithDay("อังคาร");
    expect(result).toEqual(3);
  });
  test("Test Tamai with day return 4", () => {
    const result = MahaLab.tamnaiWithDay("พุธ");
    expect(result).toEqual(4);
  });
  test("Test Tamai with day return 5", () => {
    const result = MahaLab.tamnaiWithDay("พฤหัสบดี");
    expect(result).toEqual(5);
  });
  test("Test Tamai with day return 6", () => {
    const result = MahaLab.tamnaiWithDay("ศุกร์");
    expect(result).toEqual(6);
  });
  test("Test Tamai with day return 7", () => {
    const result = MahaLab.tamnaiWithDay("เสาร์");
    expect(result).toEqual(7);
  });
  test("Test Tamai with day return 1", () => {
    const result = MahaLab.tamnaiWithDay("อาทิตย์");
    expect(result).toEqual(1);
  });
  test("Test Tamai with day return 13", () => {
    const result = MahaLab.tamnaiWithDay("สงกรานต์");
    expect(result).toEqual(13);
  });
  test("Test Tamai with day return 31", () => {
    const result = MahaLab.tamnaiWithDay("ฮาโลวีน");
    expect(result).toEqual(31);
  });
  test("Test Tamai with day return 25", () => {
    const result = MahaLab.tamnaiWithDay("คริสมาสต์");
    expect(result).toEqual(25);
  });
  test("Test Tamai with day return Error", () => {
    const result = MahaLab.tamnaiWithDay("ปีใหม่");
    expect(result).toEqual("Error");
  });
  test("Test Tamai with story งู 3 ", () => {
    const result = MahaLab.tamnaiWithStory("งู");
    expect(result).toEqual(3);
  });
  test("Test Tamai with story แมว 6 ", () => {
    const result = MahaLab.tamnaiWithStory("แมว");
    expect(result).toEqual(6);
  });
  test("Test Tamai with story cat and dog ", () => {
    const result = MahaLab.tamnaiWithStory("cat and dog");
    expect(result).toEqual(66);
  });
  test("Test Tamai with time กลางวัน random = 0.98 return 0.98", () => {
    global.Math.random = jest.fn(() => 0.98);
    const result = MahaLab.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.98);
  });
  test("Test Tamai with time กลางวัน random = 0.4 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.4);
    const result = MahaLab.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.5);
  });
  test("Test Tamai with time กลางวัน random = 0.5 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.5);
    const result = MahaLab.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.5);
  });
  test("Test Tamai with time กลางคืน random = 0.98 return 0.98", () => {
    global.Math.random = jest.fn(() => 0.98);
    const result = MahaLab.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.5);
  });
  test("Test Tamai with time กลางคืน random = 0.4 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.4);
    const result = MahaLab.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.4);
  });
  test("Test Tamai with time กลางคืน random = 0.5 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.5);
    const result = MahaLab.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.5);
  });
  test("Test Tamai with วันอาทิตย์ ตอนกลางวัน เห็นงู", () => {
    global.Math.random = jest.fn(() => 0.5);
    const result = MahaLab.namo("อาทิตย์", "งู", "กลางวัน"); // (1*3)+(2*0.5*100)
    expect(result).toEqual(103);
  });
  test("Test Tamai with วันอาทิตย์ ตอนกลางวัน เห็นงู", () => {
    global.Math.random = jest.fn(() => 0.4);
    const result = MahaLab.namo("อาทิตย์", "งู", "กลางวัน"); // (1*3)+(2*0.5*100)
    expect(result).toEqual(103);
  });
  test("Test Tamai with วันอาทิตย์ ตอนกลางวัน เห็นงู", () => {
    global.Math.random = jest.fn(() => 0.6);
    const result = MahaLab.namo("อาทิตย์", "งู", "กลางวัน"); // (1*3)+(2*0.6*100)
    expect(result).toEqual(123);
  });
  test("Test Tamai with วันอาทิตย์ ตอนกลางคืน เห็นงู", () => {
    global.Math.random = jest.fn(() => 0.5);
    const result = MahaLab.namo("อาทิตย์", "งู", "กลางคืน"); // (1*3)+(2*0.5*100)
    expect(result).toEqual(103);
  });
  test("Test Tamai with วันอาทิตย์ ตอนกลางคืน เห็นงู", () => {
    global.Math.random = jest.fn(() => 0.6);
    const result = MahaLab.namo("อาทิตย์", "งู", "กลางคืน"); // (1*3)+(2*0.5*100)
    expect(result).toEqual(103);
  });
  test("Test Tamai with วันอาทิตย์ ตอนกลางคืน เห็นงู", () => {
    global.Math.random = jest.fn(() => 0.4);
    const result = MahaLab.namo("อาทิตย์", "งู", "กลางคืน"); // (1*3)+(2*0.4*100)
    expect(result).toEqual(83);
  });
});
