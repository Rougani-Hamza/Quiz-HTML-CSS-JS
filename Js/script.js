function checkQuestions( Questions ,answer, count) {
    
    let correction = false; 
    if ((answer[0].checked == true) && (Questions[count].repons1[1] == true)) {
        correction = true;
    } else if ((answer[1].checked == true) && (Questions[count].repons2[1] == true)) {
        correction = true;
    } else if ((answer[2].checked == true) && (Questions[count].repons3[1] == true)) {
        correction = true;
    } else if ((answer[3].checked == true) && (Questions[count].repons4[1] == true)) {
        correction = true;
    }
    return correction
}


let Questions = [
    {
        question: "Who is the Winner Of WC 2022?",
        repons1 : [ "Morocco" , false ],
        repons2 : [ "Egypt" , false ],
        repons3 : [ "Argentina" , false ],
        repons4 : [ "Germany" , true ],
    },
    {
         question: "How many Students In Digital Maroc School?",
        repons1 : [ 14 , false ],
        repons2 : [ 28 , false ],
        repons3 : [ 30 , false ],
        repons4 : [ 23 , true ],
    },{
         question: "When Germany Won Her Last WC?",
        repons1 : [ "2006" , false ],
        repons2 : [ "2010" , false ],
        repons3 : [ "2014" , true ],
        repons4 : [ "2022" , false ],
    },{
         question: "Choose the language of front-end?",
        repons1 : [ "html css python" , false ],
        repons2 : [ "C# PHP C++" , false ],
        repons3 : [ "Html Css Js" , true ],
        repons4 : [ "js html php" , false ],
    },{
        question : " whats number of shevshenko when play with AC milan?",
        repons1 : [ "7" , true ],
        repons2 : [ "10" , false ],
        repons3 : [ "11" , false],
        repons4 : [ "20" , false ],
    },{
        question : " What Was Morocco Place in 2022 WC?",
        repons1 : [ "1st" , false ],
        repons2 : [ "2end" , false ],
        repons3 : [ "3th" , false],
        repons4 : [ "4th", true ],
    },{
        question: "whats nationality of player ricardo kaka?",
        repons1 : [ "France" , false],
        repons2 : [ "Brazil" , true ],
        repons3 : [ "Spain" , false],
        repons4 : [ "choix" , false ],
    },{
        question: "Who Much Saisons in La Casa?",
        repons1 : [ "2" , false],
        repons2 : [ "4" , true ],
        repons3 : [ "1" , false],
        repons4 : [ "3" , false ],
    },{
        question: "When Messi Left FCB?",
        repons1 : [ "2018" , false],
        repons2 : [ "2021" , true ],
        repons3 : [ "2020" , false],
        repons4 : [ "2019" , false ],
    },{
        question: "where is play dilorenzo thats year?",
        repons1 : [ "intr milane" , false],
        repons2 : [ "napoli" , true ],
        repons3 : [ "real madrid" , false],
        repons4 : [ "man united" , false ],
    },
];

let questionBalise = document.getElementById("question");
let reponse = document.querySelectorAll(".reponse");
let answer = document.querySelectorAll(".answer") 
let count = 0
let score = 0
let button = document.getElementById("button")
questionBalise.innerHTML = Questions[0].question;
 reponse[0].innerHTML = Questions[0].repons1[0];
 reponse[1].innerHTML = Questions[0].repons2[0];
 reponse[2].innerHTML = Questions[0].repons3[0];
 reponse[3].innerHTML = Questions[0].repons4[0]; 


button.addEventListener("click" , function(){ 
     if ((answer[0].checked) || (answer[1].checked )|| (answer[2].checked) || (answer[3].checked)){
    let correctionBalise = checkQuestions(Questions, answer, count)
        //alert(correctionBalise)
         if (correctionBalise == true){
             score++
         }
    } 
         count++     
     if (count < Questions.length) {
         questionBalise.innerHTML = Questions[count].question;
         reponse[0].innerHTML = Questions[count].repons1[0];
         reponse[1].innerHTML = Questions[count].repons2[0];
         reponse[2].innerHTML = Questions[count].repons3[0];
         reponse[3].innerHTML = Questions[count].repons4[0]; 
     } else {
         //console.log("Terminer")
         alert(score)
         count--
     }
    answer[0].checked = false
    answer[1].checked = false
    answer[2].checked = false
    answer[3].checked = false
 }) 
 

    

 