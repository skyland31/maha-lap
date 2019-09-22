class MahaLap {
  static tamnaiWithDay(day) {
    switch (true) {
      case day === "จันทร์":
        return 2;
      case day === "อังคาร":
        return 3;
      case day === "พุธ":
        return 4;
      case day === "พฤหัสบดี":
        return 5;
      case day === "ศุกร์":
        return 6;
      case day === "เสาร์":
        return 7;
      case day === "อาทิตย์":
        return 1;
      case day === "สงกรานต์":
        return 13;
      case day === "ฮาโลวีน":
        return 31;
      case day === "คริสมาสต์":
        return 25;
      default:
        return "Error";
    }
  }
  static tamnaiWithStory(story) {
    const length = story.length;
    var sum = 0;
    for (let i = 0; i <= length; i++) {
      sum = sum + i;
    }
    sum = sum % 100;
    return sum;
  }
  static tamnaiWithTime(time) {
    const randomNumber = Math.random();
    if (time === "กลางวัน") {
      if (randomNumber >= 0.5) {
        return randomNumber;
      } else {
        return 0.5;
      }
    } else if (time === "กลางคืน") {
      if (randomNumber < 0.5) {
        return randomNumber;
      } else {
        return 0.5;
      }
    }
  }
  static namo(day, story, time) {
    const resultDay = this.tamnaiWithDay(day);
    const resultStory = this.tamnaiWithStory(story);
    const resultTime = this.tamnaiWithTime(time);
    return (resultDay * resultStory + 2 * resultTime * 100) % 1000;
  }
}
module.exports = MahaLap;
