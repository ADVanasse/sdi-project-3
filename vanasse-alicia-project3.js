



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

//JSON Data

var json = {
	"hotels":[
			{"hotelName" : "Hilton",
			 "bedType" : "King"
			 },
			{
			"hotelName" : "InterContinental", 
			"bedType" : "California King"
			},
			{
			"hotelName" : "Marriott",
			"bedType" : "Twin"
			}
		]
	};
var handleData = function (json) {
	console.log(json);
};
handleData(json);

for (var key in json.hotels) {
	var hotel = json.hotels[key];
};
	say("We had stayed in a " + hotel + " most nights.");
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
	

		

				
// Array Function with For loop with Array Return


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
    							return theCountry;
    		};
		}; //Nested Loop with Array Property
   				for (var countryNumber = 0; countryNumber < europe.length; countryNumber++) {
    					 goToCountry(countryNumber);  
    					 	
    };

// String Function with Array Method and String Return

var myFavorite = function() {
	var soFar = "I loved " + europe.pop() + " the most soo far!";
	return soFar;
};

	say(myFavorite());


// Number Function with Number Argument, Math, and Number Return

var sleepCost = function(number) {
	return hotelCost * number;
};
say("it cost " + sleepCost(22) + " dollars for the hotels alone. But it was worth every penny!");

// Array Function with Array Argument, While Loop and Number Return

var howMany = function(arrayLength){
	var numCountries = arrayLength + 2;
		while(numCountries > 0) {
			say("I've been to " + numCountries + " countries in Europe so far");
			numCountries++;
			return numCountries;
	}
};
	
	say("I've been to " + howMany(europe.length) + " different countries altogether.");
	
// Boolean Function with Boolean Argument and Boolean Return

var couldItBe = function(travelBug) {
	var yes = true;
	var no = false;
		if(!travelBug === true) {
			return yes;
		} else {
			return no;
		}
	};
			say("It is " + couldItBe() + " that this won't be my last trip!");
	
	



