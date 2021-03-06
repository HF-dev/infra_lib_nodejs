"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service de gestion des parcourts de formation
*/
class Model_service_trainingCoursesService extends Model_service_1.Model_service {
    /**
      service de gestion des parcourts de formation
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_trainingCoursesService";
        /**
  default name sender for mail notifications
  */
        this["defaultNameSender"] = "Academy Daesign (dev)";
        if (obj["apiSession"] != undefined) {
            this["apiSession"] = obj["apiSession"].toString();
        }
        if (obj["licenceServiceUrl"] != undefined) {
            this["licenceServiceUrl"] = obj["licenceServiceUrl"].toString();
        }
        if (obj["taskServiceUrl"] != undefined) {
            this["taskServiceUrl"] = obj["taskServiceUrl"].toString();
        }
        if (obj["mailServiceUrl"] != undefined) {
            this["mailServiceUrl"] = obj["mailServiceUrl"].toString();
        }
        if (obj["defaultSender"] != undefined) {
            if (obj._class) {
                this["defaultSender"] = new Index[obj._class](obj["defaultSender"]);
            }
            else {
                this["defaultSender"] = new Index["mailSenderParams"](obj["defaultSender"]);
            }
        }
        if (obj["defaultNameSender"] != undefined) {
            this["defaultNameSender"] = obj["defaultNameSender"].toString();
        }
        if (obj["clientInfraUrl"] != undefined) {
            this["clientInfraUrl"] = obj["clientInfraUrl"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["apiSession"] == null || target["apiSession"] == undefined)) {
                throw new Error(path + "apiSession is required");
            }
            if (target["apiSession"] != null && target["apiSession"] != undefined) {
                let _apiSession = target["apiSession"];
                if (!_.isString(_apiSession)) {
                    throw new Error(path + "apiSession is not a string");
                }
            }
            if (isCompleteObj && (target["licenceServiceUrl"] == null || target["licenceServiceUrl"] == undefined)) {
                throw new Error(path + "licenceServiceUrl is required");
            }
            if (target["licenceServiceUrl"] != null && target["licenceServiceUrl"] != undefined) {
                let _licenceServiceUrl = target["licenceServiceUrl"];
                if (!_.isString(_licenceServiceUrl)) {
                    throw new Error(path + "licenceServiceUrl is not a string");
                }
            }
            if (isCompleteObj && (target["taskServiceUrl"] == null || target["taskServiceUrl"] == undefined)) {
                throw new Error(path + "taskServiceUrl is required");
            }
            if (target["taskServiceUrl"] != null && target["taskServiceUrl"] != undefined) {
                let _taskServiceUrl = target["taskServiceUrl"];
                if (!_.isString(_taskServiceUrl)) {
                    throw new Error(path + "taskServiceUrl is not a string");
                }
            }
            if (isCompleteObj && (target["mailServiceUrl"] == null || target["mailServiceUrl"] == undefined)) {
                throw new Error(path + "mailServiceUrl is required");
            }
            if (target["mailServiceUrl"] != null && target["mailServiceUrl"] != undefined) {
                let _mailServiceUrl = target["mailServiceUrl"];
                if (!_.isString(_mailServiceUrl)) {
                    throw new Error(path + "mailServiceUrl is not a string");
                }
            }
            if (target["defaultSender"] != null && target["defaultSender"] != undefined) {
                let _defaultSender = target["defaultSender"];
                promArr.push(Index["mailSenderParams"].check(_defaultSender, isCompleteObj, path + "defaultSender.")
                    .catch((err) => {
                    throw new Error(path + "defaultSender is not ");
                }));
                if (_defaultSender._class != null && _defaultSender._class != undefined) {
                    promArr.push(Index[_defaultSender._class].check(_defaultSender, isCompleteObj, path + "defaultSender.")
                        .catch((err) => {
                        throw new Error(path + "defaultSender is not a " + _defaultSender._class);
                    }));
                }
            }
            if (target["defaultNameSender"] != null && target["defaultNameSender"] != undefined) {
                let _defaultNameSender = target["defaultNameSender"];
                if (!_.isString(_defaultNameSender)) {
                    throw new Error(path + "defaultNameSender is not a string");
                }
            }
            if (isCompleteObj && (target["clientInfraUrl"] == null || target["clientInfraUrl"] == undefined)) {
                throw new Error(path + "clientInfraUrl is required");
            }
            if (target["clientInfraUrl"] != null && target["clientInfraUrl"] != undefined) {
                let _clientInfraUrl = target["clientInfraUrl"];
                if (!_.isString(_clientInfraUrl)) {
                    throw new Error(path + "clientInfraUrl is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_trainingCoursesService.check(target, true, path).then(() => {
            return new Model_service_trainingCoursesService(target);
        });
    }
}
exports.Model_service_trainingCoursesService = Model_service_trainingCoursesService;
//# sourceMappingURL=Model_service_trainingCoursesService.js.map