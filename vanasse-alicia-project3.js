



//Alicia Vanasse
//SDI 1501
//Project 3

// Global Function 

var say = function (message) {
    console.log(message);
};


//Global Variables
               
var bigTrip = "Europe";            
var europe = ["Italy",					
              "Spain",
              "Greece",
              "France",
              "The Netherlands"],
 	 daysEurope = [7, 5, 3, 4, 3];     	
var travelBug = true;
<<<<<<< HEAD
var hotelCost = 150;
var myVice = "Travel is my vice!";





//String function

var 


=======
var myMoney = 5000;
var myVice = "Travel is my vice!";
var youTravel;
>>>>>>> FETCH_HEAD

// Prompt for Procedure Argument

var letsFly = prompt("Do you like to travel?","Yes or No");

// Procedure

    if (letsFly === "Yes") {
        say("Me too, I just got back from a big trip to " + bigTrip + ".");
         } if (letsFly === "No") {
                say("Really? But there's so much around the world to see!");
<<<<<<< HEAD
         } else {
         		say("Huh?");
    };	
           
// Array Function

var goToCountry = function (whereTo) {
    var theCountry = europe[whereTo],
        daysThisCountry = daysEurope[countryNumber];
   			 say( "I was excited to visit " + theCountry +
       	 		" for " + daysThisCountry + " days. It went by way too fast.");
    		for (var days = 0; days < daysThisCountry; days ++) {
        		var daysLeft = daysThisCountry - days;
     				   say("Before I knew it " + days + " had gone by, leaving me with only " +
            					daysLeft + "to enjoy the country's beauty.");
            			say("I'd had such a great time in " + theCountry + "! As much as I hated leaving, " +
    							"I was really anxious to get to the next country.");
    							return goToCountry;
    		};
		};
   				for (var countryNumber = 0; countryNumber < europe.length; countryNumber++) {
    					 goToCountry(countryNumber);  
    					 	
    };

goToCountry();
=======
         };
           
// Array Function

var goToCountry = function(whereTo) {
    var theCountry = europe[whereTo],
        daysThisCountry = daysEurope[countryNumber];
   			 say( "I was excited to visit " + theCountry +
        " for " + daysThisCountry + " days. It went by way too fast.");
    for (var days = 0; days < daysThisCountry; days ++) {
            var daysLeft = daysThisCountry - days;
            	say("Before I knew it " + days + " had gone by, leaving me with only " +
            		daysLeft + "to enjoy the country's beauty.");
            			return europe;
        };
    	say("I'd had such a great time in " + theCountry + "! As much as I hated leaving, " +
    		"I was really anxious to get to the next country.");
};

for (var countryNumber = 0; countryNumber < europe.length; countryNumber++) {
    	goToCountry(countryNumber);
    	
};




>>>>>>> FETCH_HEAD






