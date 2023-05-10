import Complex from 'complex.js';

/**
 *  class that represents a QuadraticFunction and utility methods
 */
class QudraticFunction
{
    public functionString: string;
    readonly linearCoefficient: number;
    readonly constantCoefficient: number;
    private readonly C = (a: number, b = 0) => new Complex(a, b);

    constructor(b: number, c: number)
    {
        this.linearCoefficient = b;
        this.constantCoefficient = c;
        this.functionString = `x^2${b < 0 ? ` - ${b}x` : b > 0 ? ` + ${b}x` : ''}${c < 0 ? ` - ${c}` : c > 0 ? ` + ${c}` : ''}`;
    }

    /**
     *
     * @param ε - limit to compare the discriminant against
     * @returns {number[][]} - a tuple containing the roots of the quadratic function
     */
    public getRoots(ε = 1e-10): (Complex|number)[][]
    {
        if (abs(this.constantCoefficient) < ε)
        {
            if (abs(this.linearCoefficient) < ε)
                return [[0, 2]];
            return this.linearCoefficient < 0 ? [[0, 1], [-this.linearCoefficient, 1]] : [[-this.linearCoefficient, 1], [0, 1]];
        }
        let d = this.linearCoefficient * this.linearCoefficient - 4 * this.constantCoefficient;
        if (abs(d) <= ε)
            return [[-this.linearCoefficient / 2, 2]]; // Double real root
        if (d > 0)
        {
            // Distinct real roots
            let D = sqrt(d);
            return [[-this.linearCoefficient / 2 - D / 2, 1], [-this.linearCoefficient / 2 + D / 2, 1]];
        }
        // Complex roots
        let D = sqrt(-d);
        return [[this.C(-this.linearCoefficient / 2, D / 2), 1], [this.C(-this.linearCoefficient / 2, -D / 2), 1]];
    }
}
