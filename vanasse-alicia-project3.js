
//Alicia Vanasse
//SDI 1501
//Project 3

// Console.log Function //

var say = function (message) {
    console.log(message);
};


//Global Variables

var southAmerica =  ["Peru",
                     "Chile",
                     "Argentina",
                     "Brazil",
                     "Uruguay"
                    ];

var europe = ["Italy",
              "Spain",
              "Greece",
              "France",
              "The Netherlands"
             ];

var flightPrices = [1000,
                   850,
                   1200,
                   450,
                   900,
                   1150];
var myMoney = 4200;
var timeOff = true;
var theAirport = "Logan International Airport";
var oldCity = "Boston";
var trip1 = "Europe"
var trip2 = "South America";

// Prompt for Procedure Argument

var letsFly = prompt("Lets fly away!","Europe or South America");

// Procedure

    if (letsFly === trip1) {
        say("I love Europe....but it is a little chilly this time of year");
         } if (lestFly === trip2) {
                say(trip2 + "sounds perfect right now!");
         };
           
