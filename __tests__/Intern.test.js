const Intern = require('../lib/Intern');

test('that Intern returns an object', () => {
    const employee = new Intern('Julius', 2, 'juliustovar96@gmail.com', 'University of Central Florida'); {

        expect(employee.getName()).toEqual(expect.any(String));
        expect(employee.getId()).toEqual(expect.any(Number));
        expect(employee.getEmail()).toEqual(expect.any(String));
        expect(employee.getRole()).toBe("Intern");
        expect(employee.getSchool()).toEqual(expect.any(String));
    }
});