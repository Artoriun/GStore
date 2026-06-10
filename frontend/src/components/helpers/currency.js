const currRegEx = /\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g;

const currency = {
  symbol: "¥",
  format: function (cur) {
    return cur ? `${this.symbol}${String(Number(cur).toFixed(2)).replace(currRegEx, ",")}` : "N/A";
  },
};

export default currency;
