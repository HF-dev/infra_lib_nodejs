"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_field_1 = require("./Model_field");
/**
  ce champ représente les valeurs numériques
*/
class Model_number extends Model_field_1.Model_field {
    /**
      ce champ représente les valeurs numériques
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "number";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            this["description"] = obj["description"].toString();
        }
        if (obj["isArrayOf"] != undefined) {
            this["isArrayOf"] = new Boolean(obj["isArrayOf"]).valueOf();
        }
        if (obj["required"] != undefined) {
            this["required"] = new Boolean(obj["required"]).valueOf();
        }
        if (obj["unique"] != undefined) {
            this["unique"] = new Boolean(obj["unique"]).valueOf();
        }
        if (obj["index"] != undefined) {
            this["index"] = new Boolean(obj["index"]).valueOf();
        }
        if (obj["default"] != undefined) {
            this["default"] = new Number(obj["default"]).valueOf();
        }
        if (obj["min"] != undefined) {
            this["min"] = new Number(obj["min"]).valueOf();
        }
        if (obj["max"] != undefined) {
            this["max"] = new Number(obj["max"]).valueOf();
        }
        if (obj["step"] != undefined) {
            this["step"] = new Number(obj["step"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["name"] == null || target["name"] == undefined)) {
                throw new Error(path + "name is required");
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (isCompleteObj && (target["description"] == null || target["description"] == undefined)) {
                throw new Error(path + "description is required");
            }
            if (target["description"] != null && target["description"] != undefined) {
                let _description = target["description"];
                if (!_.isString(_description)) {
                    throw new Error(path + "description is not a string");
                }
            }
            if (target["isArrayOf"] != null && target["isArrayOf"] != undefined) {
                let _isArrayOf = target["isArrayOf"];
                if (!_.isBoolean(_isArrayOf)) {
                    throw new Error(path + "isArrayOf is not a boolean");
                }
            }
            if (target["required"] != null && target["required"] != undefined) {
                let _required = target["required"];
                if (!_.isBoolean(_required)) {
                    throw new Error(path + "required is not a boolean");
                }
            }
            if (target["unique"] != null && target["unique"] != undefined) {
                let _unique = target["unique"];
                if (!_.isBoolean(_unique)) {
                    throw new Error(path + "unique is not a boolean");
                }
            }
            if (target["index"] != null && target["index"] != undefined) {
                let _index = target["index"];
                if (!_.isBoolean(_index)) {
                    throw new Error(path + "index is not a boolean");
                }
            }
            if (target["default"] != null && target["default"] != undefined) {
                let _default = target["default"];
                if (!_.isNumber(_default)) {
                    throw new Error(path + "default is not a number");
                }
            }
            if (target["min"] != null && target["min"] != undefined) {
                let _min = target["min"];
                if (!_.isNumber(_min)) {
                    throw new Error(path + "min is not a number");
                }
            }
            if (target["max"] != null && target["max"] != undefined) {
                let _max = target["max"];
                if (!_.isNumber(_max)) {
                    throw new Error(path + "max is not a number");
                }
            }
            if (target["step"] != null && target["step"] != undefined) {
                let _step = target["step"];
                if (!_.isNumber(_step)) {
                    throw new Error(path + "step is not a number");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_number.check(target, true, path).then(() => {
            return new Model_number(target);
        });
    }
}
exports.Model_number = Model_number;
//# sourceMappingURL=Model_number.js.map