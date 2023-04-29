// Thomas Wallsmith
// Leetcode 1716. Calculate Money in Leetcode Bank
// https://leetcode.com/problems/calculate-money-in-leetcode-bank/

/*

Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, 
he will put in $1 more than the day before. 
On every subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank at the end 
of the nth day.

    Input: n = 4
    Output: 10
    Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

    Input: n = 10
    Output: 37
    Explanation: 
        After the 10th day, the total is 
        (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. 
        Notice that on the 2nd Monday, Hercy only puts in $2.

    Input: n = 20
    Output: 96
    Explanation: After the 20th day, the total is 
        (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) 
        = 96.

*/

function totalMoney(n: number): number {

    let sum: number = 0
    let lastMonday: number = 0
    let additive: number = 0

    for (let i: number = 1; i <= n; i++) {

        if (i % 7 == 0) {
            additive = ++lastMonday
        }
        else {
            additive += 1
        }
        sum += additive

    }

    return sum

}