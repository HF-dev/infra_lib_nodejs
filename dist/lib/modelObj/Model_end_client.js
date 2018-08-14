"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  c'est le client que l'on facture
*/
class Model_end_client extends utils_1.Base {
    /**
      c'est le client que l'on facture
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "end_client";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["applications"] != undefined && obj["applications"] != null && _.isArray(obj["applications"])) {
            this["applications"] = obj["applications"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
        if (obj["admins"] != undefined && obj["admins"] != null && _.isArray(obj["admins"])) {
            this["admins"] = obj["admins"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
        if (obj["licenceStore"] != undefined && obj["licenceStore"] != null && _.isArray(obj["licenceStore"])) {
            this["licenceStore"] = obj["licenceStore"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["licenceStore"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (target["applications"] != null && target["applications"] != undefined) {
                target["applications"].forEach((_applications, index) => {
                    if (!_.isString(_applications)) {
                        throw new Error(path + "applications is not a string");
                    }
                });
            }
            if (target["admins"] != null && target["admins"] != undefined) {
                target["admins"].forEach((_admins, index) => {
                    if (!_.isString(_admins)) {
                        throw new Error(path + "admins is not a string");
                    }
                });
            }
            if (target["licenceStore"] != null && target["licenceStore"] != undefined) {
                target["licenceStore"].forEach((_licenceStore, index) => {
                    promArr.push(Index["licenceStore"].check(_licenceStore, isCompleteObj, path + "licenceStore.")
                        .catch((err) => {
                        throw new Error(path + "licenceStore index: " + index + "is not licenceStore");
                    }));
                    if (_licenceStore._class != null && _licenceStore._class != undefined) {
                        promArr.push(Index[_licenceStore._class].check(_licenceStore, isCompleteObj, path + "licenceStore.")
                            .catch((err) => {
                            throw new Error(path + "licenceStore index: " + index + "is not a " + _licenceStore._class);
                        }));
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_end_client.check(target, true, path).then(() => {
            return new Model_end_client(target);
        });
    }
}
exports.Model_end_client = Model_end_client;
//# sourceMappingURL=Model_end_client.js.map