"use strict";function quickSortArray(r){if(!Array.isArray(r))throw TypeError("You must pass in an array");if(!(new Set(r.map(r=>typeof r)).size<2))throw TypeError("You must pass in an array containing a single type");switch(typeof r[0]){case"number":return r.sort((r,t)=>r-t);case"string":default:return r.sort()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.quickSortArray=quickSortArray;