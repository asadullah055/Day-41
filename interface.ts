interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?: string[]
}
const messy: Player = {
    name: 'L Messy',
    club: 'Abohoni',
    salary: 12000,
    wife: 'Korima'
}
const hannan: Player = {
    name: 'L Messy',
    club: 'Abohoni',
    salary: 1000,
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}
interface Developer extends Employee{
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zuku: Developer = {
    name: 'Zukarberg',
    salary: 1000,
    designation: 'facebook',
    age: 50,
    language: 'js',
    codeEditor: 'VS Code',
    typingSpeed: 65
}