export default class Fraction {
    constructor(a = 0, b = 1) {
        this.a = 0;
        this.b = 0;
        this.a = a;
        this.b = b;
    }
    sum(other) {
        let gcd = this.findGcd(this.b, other.b);
        const result = new Fraction(this.a * other.b / gcd + other.a * this.b / gcd, this.b * other.b / gcd).reduce();
        return result;
    }
    multiplication(other) {
        const result = new Fraction(this.a * other.a, this.b * other.b).reduce();
        return result;
    }
    division(other) {
        const result = new Fraction(this.a * other.b, this.b * other.a).reduce();
        return result;
    }
    asString() {
        return `${this.a}/${this.b}`;
    }
    reduce() {
        const gcd = this.findGcd(this.a, this.b);
        return new Fraction(this.a / gcd, this.b / gcd);
    }
    findGcd(a, b) {
        return b ? this.findGcd(b, a % b) : a;
    }
}
