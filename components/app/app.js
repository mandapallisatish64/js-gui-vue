const compare = (x, y) => { return Math.min(x.length, y.length) }

const comparerr = new Vue({
  el: '#comaprer',
  data: {
    
    city1: "city1",
    city2: "city2"
  },
  computed: {
    result1: function () {
      const i = this.city1;
      const j = this.city2;
      return `The number of character in shortest name is  ${compare(i, j)}.`
    }
  }
})