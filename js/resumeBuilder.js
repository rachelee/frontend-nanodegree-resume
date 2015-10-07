/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
"name" : "Xiaoxiao Li",
"role" : "Software Engineer Intern",
"contacts" : {"email": "lixiaox5@gmail.com",
				"cellPhone": "540-553-4754",
				"github" : "rachelee",
				"location": "3242 Kimber Ct #42, San Jose, CA"},
"welcomeMsg" : "Welcome to my resume!",
"Skills" : ["Javascript", "Java", "C++"]
}




function inName(){
	var nameArr = name.trim().split(" ");
	var first = nameArr[0];
	var last = nameArr[1].toUpperCase();
	return first+" "+last;
}

bio.display = function(){
	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedHeaderName);
	$("#main").append(internationalizeButton);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.cellPhone);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").append(formattedRole);
	$("#header").append(formattedEmail);
	$("#header").append(formattedPhone);
	$("#header").append(formattedGithub);
	$("#header").append(formattedLocation);
	$("#header").append(formattedMsg);

}
bio.displaySkills = function(){
	if("Skills" in bio)
	{
		$("#header").append(HTMLskillsStart);
		for(i=0;i<bio.Skills.length;i++){
			var skill = HTMLskills.replace("%data%", bio["Skills"][i]);
			//console.log(skill);
			$("#header").append(skill);
		}

	}
}



 var work = {
	 "jobs":[
	 {
		 "title": "Research Assistant",
		 "employer": "TCL Research America",
		 "dates": "06/2015",
		 "location": "San Jose, CA",
		 "description": "Preparing training data for object recognition in common life scenes for machine learning project"
	 },
	 {
		 "title": "Software Development Volunteer",
		 "employer": "Glogou Inc.",
		 "dates": "09/2013",
		 "location": "Santa Clara, CA",
		 "description": "Developed web crawling tool for media monitoring website to extract information from\ " +
		 "arious web pages with multiple tools and technologies that increased the web crawling error tolerance.\ " +
		 "Developed the first version of education media monitoring website based on Django framework,\ " +
		 "constructed database model, created responsive mobile friendly webpages with Bootstrap/HTML/CSS.\ " +
		 "Constructed a RESTful media monitoring web service for various projects \ " +
		 "in Glogou Inc to help clients evaluate the media exposure of their brands."
	 }]
}
work.display = function(){
	for(var w in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace("%data%", work.jobs[w].employer);
		var title = HTMLworkTitle.replace("%data%", work.jobs[w].title);
		var formattedEmployerTitle = employer.concat(title);
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[w].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[w].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[w].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDate);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}



var education = {
	"schools":[
	{
		"school": "San Jose State University",
		"location": "San Jose, CA",
		"graduation": "08/2014-05/2016 ",
		"major" : "Software Engineer",
		"degree": "Master of Engineering"
	},
	{
		"school": "Virginia Tech",
		"location": "Blacksburg, VA",
		"graduation": "08/2010-05/2013 ",
		"major" : "Nutrition",
		"degree" : "Master of Science"
	},
	{
		"school": "Sun Yat-sen University",
		"location": "Guangzhou, China",
		"graduation": "09/2006-07/2010 ",
		"major" : "Biological Science",
		"degree" : "Bachelor of Science"
	}
]}

education.display = function(){
	for(var p in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[p].school);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[p].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[p].major);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[p].location);
		var formattedGraduate = HTMLschoolDates.replace("%data%", education.schools[p].graduation);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedGraduate);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}

}

var projects ={
	"project":[
	{
		"title": "Smart Home Solution, CMPE 273 Enterprise Distributed System",
		"dates": "07/2015",
		"description": "Proposed a smart home solution using distributed system knowledge,\ " +
		"implemented both device and server application using Spring RESTful framework,\ " +
		"finished the bootstrap and registration function in both server side and client side.\ " +
		"Utilized MongoDB to store device objects in server side",
		"images":[]
	},
	{
		"title": "Property-Renting Web-Based Application, CMPE 138 Database System I",
		"dates": "12/2014",
		"description": "Established entity-relational diagram (ERD) according to the requirements, mapped database \ " +
		"tables according to the ERD and normalized the database tables to the 3rd normal form based on MySQL server. \ " +
		"Developed the web-based application using MAMP software development bundle on Mac OS X operating system,\ " +
		"implemented various functions including advanced search, utilized PHP to display the dynamic web pages",
		"images":[]
	},
	{
		"title": "Fruit Ninja Game, CMPE 202 Software Systems Engineering",
		"dates": "05/2015",
		"description": "Implemented a fruit ninja game with the object-oriented concepts and design patterns in mind.\ " +
		"Managed the development process using Agile methodology with Scrum",
		"images":[]
	}
	]
}
projects.display = function(){
	for(var p in projects.project)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[p].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[p].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[p].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
	}

}
bio.display();
bio.displaySkills();
education.display();
projects.display();
work.display();

$("#map-div").append(googleMap);

$(document).click(function(loc){
	//loc.pageX;
	//loc.pageY;
	//logClicks(loc.pageX, loc.pageY);
	console.log(loc.pageX, loc.pageY);
	//console.log(loc.timeStamp);
})