export default class Fraction {
    a: number = 0;
    b: number = 0;

    constructor(a: number = 0, b: number = 1) {
        this.a = a;
        this.b = b;
    }

    sum(other: Fraction): Fraction {
        
        let gcd = this.findGcd(this.b, other.b);

        const result = new Fraction(
            this.a * other.b / gcd + other.a * this.b / gcd,
            this.b * other.b / gcd
        ).reduce();

        return result;
    }

    multiplication(other: Fraction): Fraction {
        const result = new Fraction(
            this.a * other.a,
            this.b * other.b
        ).reduce();

        return result;
    }

    division(other: Fraction): Fraction {
        const result = new Fraction(
            this.a * other.b,
            this.b * other.a
        ).reduce();

        return result;
    }

    asString(): string {
        return `${this.a}/${this.b}`;
    }

    private reduce() {
        const gcd = this.findGcd(this.a, this.b);
    
        return new Fraction(this.a / gcd, this.b / gcd);
      }

    private findGcd(a: number, b: number): number {
        return b ? this.findGcd(b, a % b) : a;
    }
}