const Engineer = require('../lib/Engineer');

test('that Engineer returns an Object', () => {
    const employee = new Engineer('Julius', 1, 'juliustovar96@gmail.com', 'javamang21');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Engineer");
    expect(employee.getGithub()).toEqual(expect.any(String));
});