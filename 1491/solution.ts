// Thomas Wallsmith
// Leetcode 1491. Average Salary Excluding the Minimum and Maximum Salary

/*
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minium and maximum salary.
Answers within 10^-5 of the actualy answer will be accepted 
*/

function average(salary: number[]) : number {

    // Loop through to find sum, along with max and min values
    let min: number = Number.MAX_SAFE_INTEGER
    let max: number = Number.MIN_SAFE_INTEGER
    let sum: number = 0
    for (let i: number = 0; i < salary.length; i++) {
        let element: number = salary[i]
        sum += element
        min = element < min ? element : min
        max = element > max ? element : max
    }


    // Subtract the minimum and maximum salaries from the total
    sum -= min
    sum -= max

    // Return average
    return sum / (salary.length - 2)
}