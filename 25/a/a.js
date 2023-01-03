export function getSnafuSum(inputString) {
  const rows = inputString.split("\n");
  let sum = 0;
  for(const row of rows) {
    sum += snafu2dec(row);
  }
  return dec2snafu(sum);
}

export function snafu2dec(snafu) {
  let sum = 0;
  for(let i = 0; i < snafu.length; i++) {
    const p = snafu.length - i - 1;
    const e = Math.pow(5, p);
    const b = snafu2decimalDigit[snafu[i]];
    sum += e * b;
  }
  return sum;
}

const snafu2decimalDigit = {
  "=": -2,
  "-": -1,
  "0": 0,
  "1": 1,
  "2": 2,
};

const decimal2snafuDigit = {
  "-2": "=",
  "-1": "-",
  "0": "0",
  "1": "1",
  "2": "2",
};

// General base conversion:
// https://math.stackexchange.com/a/111158
export function dec2snafu(dec) {
  let snafu = '';
  let val = dec;
  while(val > 0) {
    const rem = (((val + 2) % 5) - 2);
    snafu += decimal2snafuDigit[rem];
    val = Math.floor((val + 2) / 5);
  }
  return snafu.split("").reverse().join("");
}

