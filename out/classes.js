"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Animal = /*#__PURE__*/function () {
  function Animal(name, food, type) {
    _classCallCheck(this, Animal);

    this._type = type;
    this._name = name;
    this._food = food;
  }

  _createClass(Animal, [{
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "food",
    get: function get() {
      return this._food;
    },
    set: function set(newFood) {
      this._food = newFood;
    }
  }, {
    key: "description",
    value: function description() {
      console.log("This animal is a ".concat(this._type, ", their name is ").concat(this._name, " and they like to eat ").concat(this._food));
    }
  }], [{
    key: "animalMessage",
    value: function animalMessage() {
      console.log('This message is for all of the animals!');
    }
  }]);

  return Animal;
}(); // const lion = new Animal('Simba', 'Gazelles', 'Lion')
// lion.animalMessage()
// lion.description()
// console.log(lion.food)
// Animal.animalMessage() //This static method cannot be accessed by objects of the Animal class.


var Dog = /*#__PURE__*/function (_Animal) {
  _inherits(Dog, _Animal);

  var _super = _createSuper(Dog);

  function Dog(name, food, breed) {
    var _this;

    _classCallCheck(this, Dog);

    var type = 'Dog';
    _this = _super.call(this, name, food, type); //calls animal constructor

    _this._breed = breed;
    return _this;
  }

  _createClass(Dog, [{
    key: "breed",
    get: function get() {
      return this._breed;
    },
    set: function set(newBreed) {
      this._breed = newBreed;
    }
  }]);

  return Dog;
}(Animal);

var myDog = new Dog('Max', 'Steak', 'Pitbull'); // const mySecondDog = new Dog('Jax', 'Purina', 'Poodle')

myDog.description(); // mySecondDog.description()
// console.log(mySecondDog.breed)

module.exports = {
  Dog: Dog
}; //Node.js syntax
// export {Dog} //ES6 syntax