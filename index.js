const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/page-generator');
const generatePage = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const employeeInfo = [
    {
        
    }
]