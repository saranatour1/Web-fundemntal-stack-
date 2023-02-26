//Part 2
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

//Please let me know how can I fix my 'DRY' code issue
const numberOflikes1 = document.querySelector(".one");
const numberOflikes2 = document.querySelector(".two");
const numberOflikes3 = document.querySelector(".three");

var post1 = {
    likes: 0
};
var post2 = {
    likes: 0
};
var post3 = {
    likes: 0
};
var count1 = 0;
var count2 = 0;
var count3 = 0;

numberOflikes1.innerText = `${count1} likes`;
numberOflikes2.innerText = `${count2} likes`;
numberOflikes3.innerText = `${count3} likes`;
console.log(typeof(numberOflikes1));


function increaseLikes(e) {
    if (e.target.id == "btn1") {
        count1++;
        post1.likes = count1;
        if (count1 == 1) {
            numberOflikes1.innerText = `${post1.likes} like`;
        } else {
            numberOflikes1.innerText = `${post1.likes} likes`;
        }
    } else if (e.target.id == "btn2") {
        count2++;
        post2.likes = count2;
        if (count2 == 1) {
            numberOflikes2.innerText = `${post2.likes} like`;
        } else {
            numberOflikes2.innerText = `${post2.likes} likes`;
        }
    } else if (e.target.id == "btn3") {
        count3++;
        post3.likes = count3;
        if (count3 == 1) {
            numberOflikes3.innerText = `${post3.likes} like`;
        } else {
            numberOflikes3.innerText = `${post3.likes} likes`;
        }
    }

    console.log(e.target.id);
    console.log(e);
}