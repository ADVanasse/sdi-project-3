
//Alicia Vanasse
//SDI 1501
//Project 3

// Global Function //

var say = function (message) {
    console.log(message);
};


//Global Variables

var southAmerica =  ["Peru",            //Countries on South America Itinerary 
                     "Chile",
                     "Argentina",
                     "Brazil",
                     "Uruguay"
                    ];

var europe = ["Italy",					// Countries on Europe Itinerary
              "Spain",
              "Greece",
              "France",
              "The Netherlands"
             ];

var daysSouthAmerica = [10,5,4,5,1];		// Days needed for full enjoyment of 
var daysEurope = [7, 5, 3, 4, 3];			// each country
var timeOff = 24;
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
           
