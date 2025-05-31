describe('Arithmetic Operations', function () {
    describe('Addition', function () {
        it('should return 4 when 2 + 2', function () {
            expect(2 + 2).toBe(4);
        });
    });

    describe('Subtraction', function () {
        it('should return 0 when 2 - 2', function () {
            expect(2 - 2).toBe(0);
        });
    });

    describe('Multiplication', function () {
        it('should return 4 when 2 * 2', function () {
            expect(2 * 2).toBe(4);
        });
    });

    describe('Division', function () {
        it('should return 1 when 2 / 2', function () {
            expect(2 / 2, 1).toBe(1);
        });
    });
});