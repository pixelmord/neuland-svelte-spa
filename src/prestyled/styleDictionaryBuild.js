const path = require('path');
const StyleDictionary = require('style-dictionary').extend(path.resolve('styleDictionary.config.json'));
function flattenProperties(properties) {
  const flatProps = properties.reduce(function(acc, prop) {
    return acc = {
      ...acc,
      [`${prop.path[0]}`]: {
        ...acc[`${prop.path[0]}`],
        [`${prop.name}`]: prop.value
      }

    }
  }, {})
  return JSON.stringify(flatProps, null, 2);
}
StyleDictionary.registerTransformGroup({
  name: 'styled-system',
  transforms: [
    'name/ti/camel',
  ]
});
StyleDictionary.registerFormat({
  name: 'styled-system',
  formatter: function (dictionary, config) {
    let template = '';
    template += '/**\n';
    template += ' * Do not edit directly\n';
    template += ' * Generated on ' + new Date().toUTCString() + '\n';
    template += ' */\n\n';
    template += 'export const theme = ';
    template += flattenProperties(dictionary.allProperties);
    template += ';';
    return template;
  }
});

StyleDictionary.buildAllPlatforms();
