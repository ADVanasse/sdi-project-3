



//Alicia Vanasse
//SDI 1501
//Project 3

// Global Function 

var say = function (message) {
    console.log(message);
};


//Global Variables
var where = ["here",
			 "there",
			 "every and anywhere"];               
var bigTrip = "Europe";            
var europe = ["Italy",					
              "Spain",
              "Greece",
              "France",
              "The Netherlands"],
 	 daysEurope = [7, 5, 3, 4, 3];     	
var travelBug = true;
var hotelCost = 150;
var myVice = "Travel is my vice!";
var moreTravel = "work less and travel more!";

//Confirm for Boolean Argument



//Boolean Function

	
// Prompt for Procedure Argument

var letsFly = prompt("Do you like to travel?","Yes or No");

// Procedure

    if (letsFly === "Yes") {
        say("Me too, I just got back from a big trip to " + bigTrip + ".");
         } else if (letsFly === "No") {
                say("Really? But there's so much around the world to see!");
    		} else { 
    				say("That's a weird answer");
    	};
    				
// Array Function with For loop and Nested Loop

var goToCountry = function(whereTo) {
    var theCountry = europe[whereTo],
        daysThisCountry = daysEurope[countryNumber];
   			 say( "I was excited to visit " + theCountry +
       	 		" for " + daysThisCountry + " days. It went by way too fast.");
    		for (var days = 0; days < daysThisCountry; days ++) {
        		var daysLeft = daysThisCountry - days;
     				   say("Before I knew it " + days + " had gone by, leaving me with only " +
            					daysLeft + " to enjoy the country's beauty.");
            			say("I'd had such a great time in " + theCountry + "! As much as I hated leaving, " +
    							"I was really anxious to get to the next country.");
    		};
		};
   				for (var countryNumber = 0; countryNumber < europe.length; countryNumber++) {
    					 goToCountry(countryNumber);  
    					 	
    };




// Number Function with  Number argument and Return

var sleepCost = function(number) {
	return hotelCost * number;
};

say("it cost " + sleepCost(22) + " dollars for the hotels alone. But it was worth every penny!");


