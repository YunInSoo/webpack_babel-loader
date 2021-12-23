import Dygraph from 'dygraphs';

// or, if you don't want to use ES6 imports:
// const Dygraph = require('dygraphs');

const g = new Dygraph('graph',
`Date,A,B
2016/01/01,10,63
2016/07/01,20,22
2016/12/31,40,30
`, {
  fillGraph: true
});
