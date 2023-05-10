"use strict";
const {abs, sqrt} = Math;
Object.defineProperty(exports, "__esModule", { value: true });
var complex_js_1 = require("complex.js");
var QudraticFunction = /** @class */ (function () {
    function QudraticFunction(b, c) {
        this.C = function (a, b) {
            if (b === void 0) { b = 0; }
            return new complex_js_1.default(a, b);
        };
        this.linearCoefficient = b;
        this.constantCoefficient = c;
        this.functionString = "x^2".concat(b < 0 ? " - ".concat(b, "x") : b > 0 ? " + ".concat(b, "x") : '').concat(c < 0 ? " - ".concat(c) : c > 0 ? " + ".concat(c) : '');
    }
    QudraticFunction.prototype.getRoots = function (ε) {
        if (ε === void 0) { ε = 1e-10; }
        if (abs(this.constantCoefficient) < ε) {
            if (abs(this.linearCoefficient) < ε)
                return [[0, 2]];
            return this.linearCoefficient < 0 ? [[0, 1], [-this.linearCoefficient, 1]] : [[-this.linearCoefficient, 1], [0, 1]];
        }
        var d = this.linearCoefficient * this.linearCoefficient - 4 * this.constantCoefficient;
        if (abs(d) <= ε)
            return [[-this.linearCoefficient / 2, 2]]; // Double real root
        if (d > 0) {
            // Distinct real roots
            var D_1 = sqrt(d);
            return [[-this.linearCoefficient / 2 - D_1 / 2, 1], [-this.linearCoefficient / 2 + D_1 / 2, 1]];
        }
        // Complex roots
        var D = sqrt(-d);
        return [[this.C(-this.linearCoefficient / 2, D / 2), 1], [this.C(-this.linearCoefficient / 2, -D / 2), 1]];
    };
    return QudraticFunction;
}());
