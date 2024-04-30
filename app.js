console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds (count) {
    if (count < 0) count = count * (-1);

    for (let i = 0; i <= count; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

printOdds(-20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge (userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    let genericAns = `You gave no valid info. You cannot drive.`
    if (userName == undefined || age == undefined) {
        console.log (genericAns);
    } else if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

checkAge("Peter", 15);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function quadrant (x, y) {
    let xAxis = `(${x}, ${y}) is on the x axis`;
    let yAxis = `(${x}, ${y}) is on the y axis`;
    let quadrant1 = `(${x}, ${y}) is in Quadrant I`;
    let quadrant2 = `(${x}, ${y}) is in Quadrant II`;
    let quadrant3 = `(${x}, ${y}) is in Quadrant III`;
    let quadrant4 = `(${x}, ${y}) is in Quadrant IV`;

    if (x == 0 && y == 0) {
        console.log("Point of Origin");
    }
    if (x == 0 && y != 0) {
        console.log(yAxis);
    }
    if (x != 0 && y == 0) {
        console.log(xAxis);
    }

    if ( x > 0 && y > 0) {
        console.log(quadrant1);
    } 
    else if ( x < 0 && y > 0) {
        console.log(quadrant2);
    } 
    else if ( x < 0 && y < 0) {
        console.log(quadrant3);
    } 
    else if ( x > 0 && y < 0) {
        console.log(quadrant4);
    } 
}

quadrant(0, 2);
quadrant(3, 0);
quadrant (3, -4);
quadrant (-8, 10);
quadrant (-5, -7);
quadrant (2, 3);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function couldFormTriangle (sideLength1, sideLength2, sideLength3)
{
    if (sideLength1 + sideLength2 > sideLength3
        && sideLength1 + sideLength3 > sideLength2
        && sideLength2 + sideLength3 > sideLength1)
    {
        if (sideLength1 == sideLength2 
            && sideLength1 == sideLength3) {
            console.log("It's a equilateral triangle.");
        } else if (sideLength1 == sideLength2 && sideLength1 != sideLength3
            || sideLength1 == sideLength3 && sideLength1 != sideLength2
            || sideLength2 == sideLength3 && sideLength2 != sideLength1) {
            console.log("It's a isosceles triangle.");
        } else {
            console.log("It's a scalene triangle.");
        }
    } else {
        console.log('Invalid triangle');
    }
    
}

couldFormTriangle(1, 2, 2); // It's a isosceles triangle.
couldFormTriangle(1, 1, 2); // Invalid triangle
couldFormTriangle(3, 3, 3); // It's equilateral triangle.
couldFormTriangle(3, 4, 5); // It's a scalene triangle.

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataUsage (planLimit, daysUsed, usage) {
    let daysRemaining = 30 - daysUsed;
    let expectedAvgDailyUse = Math.round(planLimit/30 * 10 ** 3) / 10 ** 3;
    let actualAvgDailyUse = Math.round(usage/daysUsed * 10 ** 2)/ 10 ** 2;
    let dataExceedForecast = Math.abs(actualAvgDailyUse * 30 - planLimit);
    let dataAvgDailyAdvised = (planLimit - usage) / daysRemaining;
    
    console.log(`${daysUsed} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${expectedAvgDailyUse} GB/day`)
    if (actualAvgDailyUse > expectedAvgDailyUse) {
        console.log(`You are EXCEEDING your average daily use (${actualAvgDailyUse} GB/ day),`);
        console.log(`continuing this high usage, you'll exceed your data plan by ${dataExceedForecast.toFixed(1)} GB.`);
        console.log(`To stay below your data plan, use no more than ${dataAvgDailyAdvised.toFixed(2)} GB/day.`);
    } else if (actualAvgDailyUse < expectedAvgDailyUse) {
        console.log(`You are using LESS THAN your average daily use (${actualAvgDailyUse} GB/ day),`);
        console.log(`continuing this low usage, you'll be using less than your data plan by ${dataExceedForecast.toFixed(2)} GB.`);
        console.log(`To stay on track with your data plan, use ${dataAvgDailyAdvised.toFixed(2)} GB/day.`);
    } else {
        console.log(`You are ON TRACK with your average daily use (${actualAvgDailyUse.toFixed(2)} GB/ day).`);
    }
}

dataUsage(100, 15, 56); // Over-use
console.log("--------------------")
dataUsage(100, 20, 15); // Under-use
console.log("--------------------")
dataUsage(90, 12, 36); // On-track