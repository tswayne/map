var fs = require('fs');
var width = 1000;
var height = 600;
var hexagonSize = 40;
var numberOfCountries = 50;
var countrySizeVariance = .5;
var useDistortion = true;
var useCompactShapes = false;

var MapGenerator = require('./lib/mapgenerator');
var generator = new MapGenerator();

generator.createHexagonPattern(
  width,
  height,
  hexagonSize,
  useDistortion
);

generator.generate(
  numberOfCountries,
  countrySizeVariance,
  useCompactShapes
);

var map = generator.getMap();
fs.writeFileSync('./output.svg', '');
for (var i = 0; i < map.regions.length; i++) {
  fs.appendFileSync("./output.svg", '"'+i+'": ');
  fs.appendFileSync("./output.svg", '"' + map.regions[i].pathString + '"' + ',\n');
}
/*for (var i = 0; i < map.regions.length; i++) {
  fs.appendFileSync("./output.svg", '"' + map.regions[i].pathString + '"' + ',\n');
}*/
console.log('done!');
