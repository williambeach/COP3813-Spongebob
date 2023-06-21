window.addEventListener("DOMContentLoaded", ()=>{
    let screen = document.getElementById("screen");
    let body = document.querySelector("body");
    let quizForm = document.createElement("form");
    quizForm.classList.add('quizForm');
    let quizScreen = document.createElement("div");
    let popupWindow = document.createElement("div");
    let textPopupWindow = document.createElement("div");
    textPopupWindow.textContent = "Which Spongebob Character Are You?";
    let popupWindowButton = document.createElement("button");
    textPopupWindow.classList.add("textPopupWindow");
    quizScreen.classList.add("quizScreen");
    
    
    body.classList.add("popupImg");
    popupWindowButton.addEventListener("click", ()=>{
        body.className = "body";
        screen.removeChild(popupWindow);
        screen.appendChild(quizScreen);
        loadQuestion(quizForm, quizScreen);
        
        document.getElementById("sound2").play();
    })

    popupWindowButton.classList.add("enterButton");
    popupWindowButton.textContent = "Take Quiz"
    popupWindow.appendChild(textPopupWindow);
    popupWindow.appendChild(popupWindowButton);
    popupWindow.classList.add("popup");
    document.getElementById("screen").appendChild(popupWindow);
});



function loadQuestion(quizForm, quizScreen){
    let count = document.querySelector(".count").innerHTML; //string
    let title = document.createElement("p");
    let subtitle = document.createElement("p");
    title.textContent = `Question ${count}`;
    title.classList.add("title");
    subtitle.textContent = `${Object.keys(quiz[count])[0]}`;
    subtitle.classList.add("subtitle");
    quizScreen.appendChild(title);
    quizScreen.appendChild(subtitle);
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");
    let input4 = document.createElement("input");
    let label1 = document.createElement("label");
    let label2 = document.createElement("label");
    let label3 = document.createElement("label");
    let label4 = document.createElement("label");
    input1.setAttribute("id", "question1");
    input1.setAttribute("type", "radio");
    input1.setAttribute("name", "question");
    input2.setAttribute("id", "question2");
    input2.setAttribute("type", "radio");
    input2.setAttribute("name", "question");
    input3.setAttribute("id", "question3");
    input3.setAttribute("type", "radio");
    input3.setAttribute("name", "question");
    input4.setAttribute("id", "question4");
    input4.setAttribute("type", "radio");
    input4.setAttribute("name", "question");
    
    label1.setAttribute("for", "question1");
    label1.textContent = `${Object.values(quiz[count])[0]["a"]}`;

    label2.setAttribute("for", "question2");
    label2.textContent = `${Object.values(quiz[count])[0]["b"]}`;
    
    label3.setAttribute("for", "question3");
    label3.textContent = `${Object.values(quiz[count])[0]["c"]}`;

    label4.setAttribute("for", "question4");
    label4.textContent = `${Object.values(quiz[count])[0]["d"]}`;
    
    quizForm.appendChild(input1);
    quizForm.appendChild(label1);
    quizForm.appendChild(document.createElement("br"));
    quizForm.appendChild(input2);
    quizForm.appendChild(label2);
    quizForm.appendChild(document.createElement("br"));
    quizForm.appendChild(input3);
    quizForm.appendChild(label3);
    quizForm.appendChild(document.createElement("br"));
    quizForm.appendChild(input4);
    quizForm.appendChild(label4);

    quizScreen.appendChild(quizForm);

    let inputs = document.querySelectorAll('input[name="question"]');
    for (let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener("click", ()=>{
            if (document.querySelector(".nextButton") == null){
                let next = document.createElement("button");
                next.textContent = "NEXT";
                next.addEventListener("click", nextButton);
                next.classList.add("nextButton");
                next.setAttribute("id", "next");
                quizScreen.appendChild(next);
            }
        });
    }
}

function loadQuestion1(quizForm, quizScreen){
    let count = document.querySelector(".count").innerHTML; //string
    let title = document.createElement("p");
    let subtitle = document.createElement("p");
    title.textContent = `Question ${count}`;
    title.classList.add("title");
    subtitle.textContent = `${Object.keys(quiz[count])[0]}`;
    subtitle.classList.add("subtitle");
    quizScreen.appendChild(title);
    quizScreen.appendChild(subtitle);
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");
    let input4 = document.createElement("input");
    let label1 = document.createElement("label");
    let label2 = document.createElement("label");
    let label3 = document.createElement("label");
    let label4 = document.createElement("label");
    input1.setAttribute("id", "question1");
    input1.setAttribute("type", "radio");
    input1.setAttribute("name", "question");
    input2.setAttribute("id", "question2");
    input2.setAttribute("type", "radio");
    input2.setAttribute("name", "question");
    input3.setAttribute("id", "question3");
    input3.setAttribute("type", "radio");
    input3.setAttribute("name", "question");
    input4.setAttribute("id", "question4");
    input4.setAttribute("type", "radio");
    input4.setAttribute("name", "question");
    
    label1.setAttribute("for", "question1");
    label1.textContent = `${Object.values(quiz[count])[0]["a"]}`;

    label2.setAttribute("for", "question2");
    label2.textContent = `${Object.values(quiz[count])[0]["b"]}`;
    
    label3.setAttribute("for", "question3");
    label3.textContent = `${Object.values(quiz[count])[0]["c"]}`;

    label4.setAttribute("for", "question4");
    label4.textContent = `${Object.values(quiz[count])[0]["d"]}`;
    
    quizForm.appendChild(input1);
    quizForm.appendChild(label1);
    quizForm.appendChild(document.createElement("br"));
    quizForm.appendChild(input2);
    quizForm.appendChild(label2);
    quizForm.appendChild(document.createElement("br"));
    quizForm.appendChild(input3);
    quizForm.appendChild(label3);
    quizForm.appendChild(document.createElement("br"));
    quizForm.appendChild(input4);
    quizForm.appendChild(label4);

    quizScreen.appendChild(quizForm);

    let inputs = document.querySelectorAll('input[name="question"]');
    for (let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener("click", ()=>{
            if (document.querySelector(".nextButton") == null && Number(count) != 10){
                let next = document.createElement("button");
                next.textContent = "NEXT";
                next.addEventListener("click", nextButton);
                next.classList.add("nextButton");
                next.setAttribute("id", "next");
                quizScreen.appendChild(next);
        
            } else if (Number(count) == 10){
                let submit = document.createElement("button");
                submit.textContent = "SUBMIT";
                submit.addEventListener("click", submitResults);
                submit.classList.add("submit");
                submit.setAttribute("id", "submit");
                quizScreen.appendChild(submit);
            } else{
                next.disabled = false;
            }
        });
    }
}

function nextButton(){
    getAnswer();
    let quizForm = document.querySelector(".quizForm");
    let quizScreen = document.querySelector(".quizScreen");
    let count = document.querySelector(".count").innerHTML;
    let next = document.getElementById("next");
    next.disabled = true; //disable next button till selection is made
    count = Number(count);
    if (count < 10){
        count++;
    }
    document.querySelector(".count").innerHTML = String(count);
    
    while (quizScreen.firstChild){
        quizScreen.removeChild(quizScreen.firstChild);
    }
    while (quizForm.firstChild){
        quizForm.removeChild(quizForm.firstChild);
    }
    loadQuestion1(quizForm, quizScreen);
    
}

function submitResults(){ //what happens when i click submit button
    document.getElementById("sound2").pause();
    document.getElementById("sound3").play();
    let characterSet = {
        "10%":"Squilliam Fancyson", 
        "20%":"Man Ray",
        "30%":"The Flying Dutchman",
        "40%":"Karen",
        "50%":"Gary", 
        "60%":"Squidward",
        "70%":"Mr. Krabs",
        "80%":"Spongebob",
        "90%":"Patrick",
        "100%":"Sandy Cheeks"
    };
    let percentage;
    let quizScreen = document.querySelector(".quizScreen");
    quizScreen.className = "chalkboard";
    let list = document.createElement("ul");
    let listItem1 = document.createElement("li");
    let listItem2 = document.createElement("li");
    let listItem3 = document.createElement("li");
    getAnswer();
    percentage = String(calculateScore() * 100) + "%";
    let character = characterSet[percentage];
    while (quizScreen.firstChild){
        quizScreen.removeChild(quizScreen.firstChild);
    }
    list.classList.add("chalk");
    listItem1.textContent = `Score: ${percentage}`;
    listItem2.textContent = `Character: `;
    listItem3.textContent = `${character}`;
    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);
    quizScreen.appendChild(list);
}

function getAnswer(){
    let inputs = document.querySelectorAll('input[name="question"]');
    let labels = document.querySelectorAll('label');
    let answer = document.querySelector(".answers");
    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].checked){
            let newEle = document.createElement("li");
            newEle.textContent = `${labels[i].textContent}`;
            answer.appendChild(newEle);
        }
    }
}

function calculateScore(){
    let score = 0;
    let answers = document.querySelectorAll("li");
    for (let i=0; i < answers.length;i++){
        if (String(answers[i].textContent) == String(Object.values(quiz[i+1])[0]["correct"])){
            score++;
        }
    }
    return score / 10;
}




let quiz = {
    "1":{
        "What color is Spongebob's tie?":{
            "a":"Red", 
            "b":"Yellow",
            "c":"Green",
            "d":"Black",
            "correct":"Black"
        }
    },
    "2":{
        "Which of these best describes Squidward?":{
            "a":"Excited",
            "b":"Grumpy",
            "c":"Full of beans",
            "d":"Patient",
            "correct":"Grumpy"
        }
    },
    "3":{
        "How many Spongebob movies are there?":{
            "a":"2",
            "b":"3",
            "c":"4",
            "d":"6",
            "correct":"3"
        }
    },
    "4":{
        "What kind of sea creature is Larry?":{
            "a":"Lobster",
            "b":"Shark",
            "c":"Sea Slug",
            "d":"Starfish",
            "correct":"Lobster"
        }
    },
    "5":{
        "What is Mr. Krab's full name?":{
            "a":"Edward T. Krabs",
            "b":"Eugene H. Krabs",
            "c":"Earnest K. Krabs",
            "d":"Keith W. Krabs",
            "correct":"Eugene H. Krabs"
        }
    },
    "6":{
        "What is Mrs. Puff's first name?":{
            "a":"Penny",
            "b":"Sugar",
            "c":"Poppy",
            "d":"Pamela",
            "correct":"Penny"
        }
    },
    "7":{
        "What does Mrs. Puff keep as pets?":{
            "a":"Jellyfish",
            "b":"Sea Anemones",
            "c":"Fleas",
            "d":"Peanut Worms",
            "correct":"Peanut Worms"
        }
    },
    "8":{
        "What does Spongebob live in?":{
            "a":"A Ship",
            "b":"Sea Kelp",
            "c":"Pineapple",
            "d":"Under The Sea",
            "correct":"Pineapple"
        }
    },
    "9":{
        "What is Spongebob's dad's name?":{
            "a":"Kevin",
            "b":"Henry",
            "c":"Harold",
            "d":"Thomas",
            "correct":"Harold"
        }
    },
    "10":{
        "What is Patrick's last name?":{
            "a":"Fartington",
            "b":"Star",
            "c":"Shelley",
            "d":"Codnockers",
            "correct":"Star"
        }
    }
    
}


