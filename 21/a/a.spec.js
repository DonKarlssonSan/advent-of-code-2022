import { assert } from "chai";
import { getNumber, parseList, parseRowAndAdd } from "./a.js";

describe("21-a Monkey Math", () => {
  const input = 
`root: pppw + sjmn
dbpl: 5
cczh: sllz + lgvd
zczc: 2
ptdq: humn - dvpt
dvpt: 3
lfqf: 4
humn: 5
ljgn: 2
sjmn: drzm * dbpl
sllz: 4
pppw: cczh / lfqf
lgvd: ljgn * ptdq
drzm: hmdt - zczc
hmdt: 32`;
  it("should yell 152", () => {
    const result = getNumber(input);
    assert.equal(result, 152);
  });
  
  it("should parseList", () => {
    const lookup = parseList(input);
    assert.equal(Object.keys(lookup).length, 15);
  });

  it("should parseRowAndAdd, children (operation)", () => {
    let lookup = {};
    parseRowAndAdd("lgvd: ljgn * ptdq", lookup);
    assert.isDefined(lookup["lgvd"]);
    assert.equal(lookup["lgvd"].children.length, 2);
    assert.equal(lookup["lgvd"].children[0].name, "ljgn");
    assert.equal(lookup["lgvd"].children[1].name, "ptdq");
    assert.equal(lookup["lgvd"].operator, "*");
  });

  it("should parseRowAndAdd, number", () => {
    let lookup = {};
    parseRowAndAdd("dbpl: 5", lookup);
    assert.isDefined(lookup["dbpl"]);
    assert.equal(lookup["dbpl"].children.length, 0);
    assert.equal(lookup["dbpl"].value, 5);
  });
});
