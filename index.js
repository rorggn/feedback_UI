const ratingE1s = document.querySelectorAll(".rating");
let selectRating ="";
const btnE1 = document.getElementById("btn");
const containerE1 = document.getElementById("container");


ratingE1s.forEach( (ratingE1) => {
    ratingE1.addEventListener("click",(event) => {
        selectRating = event.target.innerText || event.target.parentNode.innerText;
        removeActive();
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    }
    
    )
}

)

function removeActive () {
   ratingE1s.forEach((ratingE1) => {
       ratingE1.classList.remove("active");
   }
   )

}

btnE1.addEventListener("click", ()=> {
    if (selectRating !== "") {
        containerE1.innerHTML = `
        <strong> Thank you </strong>
        <br>
        <br>
        <strong> Feedback : ${selectRating} </strong>
        <p>We'll use your feedback to improve our</p>
        `
    }
}
)


