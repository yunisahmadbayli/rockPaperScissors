const gameContainer = document.querySelector(".container"); 
const userResult = document.querySelector(".user_result img");  
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const options = document.querySelectorAll(".option_image");


options.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");

        options.forEach((image2,index2)=>{
            if(index !== index2){
                image2.classList.remove("active")
            }
        })

        gameContainer.classList.add("start");

        result.textContent = "Wait..";
        userResult.src = cpuResult.src = "./images/rock.png";

        let time = setTimeout(() => {

            gameContainer.classList.remove("start");

            let imageSrc = e.target.querySelector("img").src
            userResult.src = imageSrc;

            let random = Math.floor(Math.random() * 3);
            let cpuImages = ["./images/rock.png","./images/paper.png","./images/scissors.png"];

            cpuResult.src = cpuImages[random];

            let userValue = ["R","P","S"][index];
            let cpuValue = ["R","P","S"][random];

            let outComes = {
                RP : "CPU",
                RS : "You",
                PR : "You",
                PS : "CPU", 
                SR : "CPU",
                SP : "You"
            }

            let gameResult = outComes[userValue + cpuValue];

       
            result.textContent = userValue === cpuValue ? "Match Draw" : `${gameResult} WON !!`  

        }, 2000);

    })
})