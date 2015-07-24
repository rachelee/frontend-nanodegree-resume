/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Xiaoxiao Li");

 // var awesomeThoughts = "I am Xiaoxiao and I am AWESOME!";
 // console.log(awesomeThoughts);
 // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 // $("#main").append(funThoughts);

 

 var bio = {
 	"name" : "Xiaoxiao Li", 
 	"role" : "Software Engineer Intern", 
 	"contacts" : {"email": "lixiaox5@gmail.com", 
 					"cellPhone": "540-553-4754", 
 					"github" : "rachelee",
 					"location": "3242 Kimber Ct #42, San Jose, CA"}
 	"welcomeMsg" : "Welcome to my resume!",
 	"Skills" : "Javascript"
 }
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
// var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg); 
//  $("#header").prepend(formattedName);
//  $("#header").prepend(formattedRole);
//  $("#main").append(formattedPic);
//  $("#main").append(formattedMsg);

 var work = [
 {
 	"title": "Research Assistant",
 	"employer": "TCL Research America",
 	"dates": "06/2015", 
 	"location": "San Jose, CA",
 	"description": "Preparing training data for object recognition 
 	in common life scenes for machine learning project"
 },
 {
 	"title": "Software Development Volunteer",
 	"employer": "Glogou Inc.",
 	"dates": "09/2013", 
 	"location": "Santa Clara, CA",
 	"description": "Developed web crawling tool for media monitoring website to extract information from various web pages with multiple tools and technologies that increased the web crawling error tolerance.
	Developed the first version of education media monitoring website based on Django framework, constructed database model, created responsive mobile friendly webpages with Bootstrap/HTML/CSS.
	Constructed a RESTful media monitoring web service for various projects in Glogou Inc to help clients evaluate the media exposure of their brands."
 }]
// var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
// var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
// $("#main").prepend(formattedTitle);
// $("#main").prepend(formattedEmployer);

var education = [
{
 	"school": "San Jose State University",
 	"start": "08/2014", 
 	"location": "San Jose, CA", 
 	"graduation": "05/2016",
 	"major" : "Software Engineer"
},
{
 	"school": "Virginia Tech",
 	"start": "08/2010", 
 	"location": "Blacksburg, VA", 
 	"graduation": "05/2013",
 	"major" : "Nutrition"
}
]

// var formattedSchoolName = HTMLschoolName.replace("%data%", education["schoolName"]);
// var formattedLocation = HTMLschoolLocation.replace("%data%", education["location"]);
//  $("#main").append(formattedSchoolName);
//  $("#main").append(formattedLocation);