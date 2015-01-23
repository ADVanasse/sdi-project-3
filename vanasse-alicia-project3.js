



//Alicia Vanasse
//SDI 1501
//Project 3

// Global Function 

var say = function (message) {
    console.log(message);
};

var json;

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
var daysNeeded = 22;


	
// Prompt for Procedure Argument

var letsFly = prompt("Do you like to travel?","Yes or No");

// Procedure with Nested Conditional

    if (letsFly === "Yes") {
        say("Me too, I just got back from a big trip to " + bigTrip + "."); 
         } else if (letsFly === "No") {
                say("Really? But there's so much around the world to see!");
    		} else { 
    				say("That's a weird answer");
    	};
// String Function with String Argument and String Return

var iCouldnt = function(country,country2) {
	var dontKnow;
		dontKnow = "I'm not sure where else I'd go, " + country  + " or " + country2 + " sound great!";
	return dontKnow;
}
	say(iCouldnt("Australia","Japan"));
	

		

				
// Array Function with In For loop


var goToCountry = function(whereTo) {
    var theCountry = europe[whereTo],
        daysThisCountry = daysEurope[countryNumber];
   			 say( "I was excited to visit " + theCountry +
       	 		" for " + daysThisCountry + " days. It went by way too fast.");
    		for (var days = 1; days < daysThisCountry; days ++) {
        		var daysLeft = daysThisCountry - days;
     				   say("Before I knew it " + days + " had gone by, leaving me with only " +
            					daysLeft + " to enjoy the country's beauty.");
            			say("I'd had such a great time in " + theCountry + "! As much as I hated leaving, " +
    							"I was really anxious to get to the next country.");
    							return;
    		};
		};
   				for (var countryNumber = 0; countryNumber < europe.length; countryNumber++) {
    					 goToCountry(countryNumber);  
    					 	
    };

// String Function with Array Method and String Return

var myFavorite = function() {
	var soFar = "I loved " + europe.pop();
	return soFar;
}
	say(myFavorite());


// Number Function with Number argument, Math and Number Return

var sleepCost = function(number) {
	return hotelCost * number;
};
say("it cost " + sleepCost(22) + " dollars for the hotels alone. But it was worth every penny!");


// Boolean Function with Boolean Arguments



