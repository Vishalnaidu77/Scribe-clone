const text1 = document.querySelector("#hover1")
const magicDiv1 = document.querySelector(".magic-div1")

text1.addEventListener("mouseover", () => {
    magicDiv1.style.opacity = "1"
}) 

text1.addEventListener("mouseout", () => {
    magicDiv1.style.opacity = "0"
})

const text2 = document.querySelector("#hover2")
const magicDiv2 = document.querySelector(".magic-div2")

text2.addEventListener("mouseover", () => {
    magicDiv2.style.opacity = "1"
}) 

text2.addEventListener("mouseout", () => {
    magicDiv2.style.opacity = "0"
})

// ROI Calculator
function calculateROI(value) {
    let teamSize = parseInt(document.getElementById("team-size").value);
    let emailsPerTeammate = parseInt(document.getElementById("emails-per-teammate").value);
    let customerValue = parseFloat(document.getElementById("customerValue").value);

    if (isNaN(teamSize) || isNaN(emailsPerTeammate) || isNaN(customerValue) || teamSize <= 0 || emailsPerTeammate <= 0 || customerValue <= 0) {
        console.log('Enter valid number');
        return;
    }

    // Calculate the dynamic cost based on team size
    let baseUsers = 10;
    let baseCost = 25;
    let additionalCostPerUser = 3;
    
    let cost = teamSize <= baseUsers ? baseCost : baseCost + (teamSize - baseUsers) * additionalCostPerUser;

    // Calculate ROI metrics
    let monthlyEmails = teamSize * emailsPerTeammate * 21;
    let newLeads = Math.round(monthlyEmails * 0.02);
    let potentialRevenue = Math.round(newLeads * customerValue * 0.02);
    let roi = potentialRevenue - cost;

    if(roi <= 0){
        roi = 0
    }

    // Update HTML elements with new values
    document.getElementById("monthlyEmails").innerText = monthlyEmails.toLocaleString();
    document.getElementById("newLeads").innerText = newLeads;
    document.getElementById("monthlyRevenue").innerText = `$${potentialRevenue}`;
    document.getElementById("roiValue").innerText = `$${roi}`;
    document.getElementById("cost-per-user").innerHTML = `$${cost}`
    document.getElementById("user-count").innerHTML = `${teamSize}`
}

let navButton = document.getElementById("nav-button");

window.addEventListener("scroll", () => {
    if(window.scrollY > 150){
        navButton.style.backgroundColor = "#ff3c00"
    }
    else{
        navButton.style.backgroundColor = "black"
    }
});


function changeColor(clickedButton) {
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.classList.remove("active"); // Remove active class from all buttons
    });

    clickedButton.classList.add("active"); // Add active class to clicked button
}

function toggleElements(index) {
    let inviteBox = document.getElementById("invite"); // "GET YOUR INVITE"
    let lastDiv = document.getElementById("img-txt"); // Last div "ACHIEVE INBOX ZERO"
    let buttons = document.querySelectorAll(".btn");

    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove("active"));

    // Add active class to the clicked button
    buttons[index].classList.add("active");

    // Logic for showing only one at a time
    if (index === 1) { // "Buttons" clicked
        inviteBox.style.opacity = "1";
        inviteBox.style.visibility = "visible";

        lastDiv.style.opacity = "0";
        lastDiv.style.visibility = "hidden";
    } else if (index === 2) { // "Banner" clicked
        lastDiv.style.opacity = "1";
        lastDiv.style.visibility = "visible";

        inviteBox.style.opacity = "1";
        inviteBox.style.visibility = "visible";
    } else { // "Socials" or any other click
        inviteBox.style.opacity = "0";
        inviteBox.style.visibility = "hidden";
        lastDiv.style.opacity = "0";
        lastDiv.style.visibility = "hidden";
    }
}

window.onload = function () {
    toggleElements(1); // Select "Buttons" by default
};

function swiperAnimation (){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
      });
}

swiperAnimation()


const magicElem1 = document.getElementById("adv-box3");
const magicElem2= document.getElementById("adv-box4");
const magicElem3 = document.getElementById("adv-box5");


window.addEventListener("scroll", () => {
    if(window.scrollY > 5850){
        magicElem1.style.transform = "translateY(-300px)"
    }
    else{
        magicElem1.style.transform = "translateY(300px)"
    }

    if(window.scrollY > 5850){
        magicElem2.style.transform = "translateY(-300px)"
    }
    else{
        magicElem2.style.transform = "translateY(300px)"
    }

    if(window.scrollY > 5850){
        magicElem3.style.transform = "translateY(-300px)"
    }
    else{
        magicElem3.style.transform = "translateY(300px)"
    }
});


