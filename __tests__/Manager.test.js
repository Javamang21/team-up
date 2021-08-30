const Manager = require('../lib/Manager');

test('that Manager returns an Object', () => {
    const employee = new Manager('Julius', 1, 'juliustovar96@gmail.com', 2123664542 );

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Manager");
    expect(employee.getOfficeNumber()).toEqual(expect.any(Number));
});