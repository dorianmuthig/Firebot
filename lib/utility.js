'use strict';

exports.populateStringWithReplaceDict = function(string = "", replaceDictionary = {}) {
    Object.keys(replaceDictionary).forEach(key => {
        let replacement = replaceDictionary[key];
        string = string.replace(key, replacement);
    });
    return string;
};

exports.capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();