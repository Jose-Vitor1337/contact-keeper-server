"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
exports.default = (function (state, action) {
    switch (action.type) {
        case types_1.ADD_CONTACT:
            return __assign({}, state, { contacts: state.contacts.concat([action.payload]) });
        default:
            return state;
    }
});
