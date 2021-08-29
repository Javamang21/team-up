const Employee = require('../lib/Employee');

test('creates the Employee object', () => {
    const employee = new Employee ('Julius', 1, 'juliustovar96@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Employee");
})