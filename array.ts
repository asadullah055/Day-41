const salary: number = 7500
const friendSalary: number[] = [7500, 1230, 17200, 9400, 8300]
const friends: string[] = ['sakib', 'rakib', 'rabbani']

friendSalary[0] = 10500
friendSalary.push(13200)

let max = 0
for (const salary of friendSalary) {
    if (salary > max) {
        max = salary
    }
}
