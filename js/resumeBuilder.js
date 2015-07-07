var bio = {
	"name" : "Patrick Bolduc",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "514-717-1165",
		"email" : "patrick.bolduc@gmail.com",
		"github" : "https://github.com/pbolduc123",
		"twitter" : "patb986",
		"location" : "Montréal, Québec, Canada"
	},
	"welcomeMessage" : "Passionate Software Developer",
	"skills" : ["Java", "C++", "Android"],
	"biopic" : "images/fry.jpg"
} 

var education = {
	"schools" : [
	{
		"name" : "Université de Sherbooke",
		"location" : "Sherbooke, Québec, Canada",
		"degree" : "BA",
		"majors" : "Computer Engineering",
		"dates" : 2011,
		"url" : "http://www.usherbrooke.ca"
	}
	],
	"onlineCourses": [
	{
		"title": "Javascript Basics",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "http://www.udacity.com"
	}
	]
}

var work = {
	"jobs" : [
	{
		"employer" : "Rheinmetall Canada",
		"title" : "Java Software Developer",
		"location" : "Saint-Jean-sur-Richelieu, Québec, Canada",
		"dates" : "2012-Present",
		"description" : "Develop Java application for desktops, androids and other embedded devices"
	}
	]
}

var projects = {
	"projects" : [
	{
		"title" : "Resume",
		"dates" : "2015",
		"description" : "My resume using Javascript",
		"images" : "images/197x148.gif"
	},
	{
		"title" : "Portfolio",
		"dates" : "2015",
		"description" : "My Portfolio using HTML and CSS",
		"images" : "images/197x148.gif"
	}
	]
}

projects.display = function() {
	for(project in projects.projects)
	{
		var p = projects.projects[project];
		console.log(p);
		$("#projects").append(HTMLprojectStart); 

		$(".project-entry:last").append(
			HTMLprojectTitle.replace("%data%", p.title) + 
			HTMLprojectDates.replace("%data%", p.dates) + 
			HTMLprojectDescription.replace("%data%", p.description) + 
			HTMLprojectImage.replace("%data%", p.images));
	}
}

if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
}


displayWork();
projects.display();
$("#main").append(internationalizeButton);

function displayWork()
{
	for(job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription);
	}
}

function inName(name_obj)
{
	var words = name_obj.split(" ");
	return words[0] + " " + words[1].toUpperCase();
}

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

$("#map-div").append(googleMap);