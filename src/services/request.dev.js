"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPokemonImage = exports.getPokemonByID = void 0;
var API_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
var API_URL_IMAGES = 'https://pokeapi.co/api/v2/pokemon/';

var getPokemonByID = function getPokemonByID(id) {
  var response, data;
  return regeneratorRuntime.async(function getPokemonByID$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("".concat(API_URL).concat(id)));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", data.name);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", console.error(_context.t0));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getPokemonByID = getPokemonByID;

var getPokemonImage = function getPokemonImage(id) {
  var response, data;
  return regeneratorRuntime.async(function getPokemonImage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch("".concat(API_URL_IMAGES).concat(id)));

        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context2.sent;
          return _context2.abrupt("return", data.sprites.other.dream_world.front_default);

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", console.error(_context2.t0));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getPokemonImage = getPokemonImage;