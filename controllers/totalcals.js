module.exports = function (foods) {
    console.log("function running----", foods)
    calSum = 0;
    // const calHTML = document.querySelector(".totalCal");
    // console.log(calHTML);
    foods.forEach(food => {
        console.log(`${food.name}: `, food.calories);
        calSum += Number(food.calories);
        console.log("total cal is: ", calSum);
    });
    // for (let index = 0; index < foods.length - 1; index++) {
    //   console.log(`${foods[index].name}: `, foods[index].calories);
    //   calSum += Number(foods[index].calories);
    //   console.log("total cal is: ", calSum);
    // }
    // return calSum; 
};