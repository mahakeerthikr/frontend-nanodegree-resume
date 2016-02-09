/*
This is empty on purpose! Your code to build the resume will go here.
 */
var newHeaderName=HTMLheaderName.replace("%data%","Mahakeerthi");
var newHeaderRole=HTMLheaderRole.replace("%data%","front-End-Ninja");
$("#header").append(newHeaderName+" "+newHeaderRole);

var work={
	"jobs": [{
		"employer": "dilabs",
		"title": "design Engineer",
		"location": "bangalore",
		"year": 2015,
		"description": "don't know"
	}]
}
var projects={
	"project": [{
		"title": "online portfolio",
		"dates": 2015,
		"description": "update later",
		"image": "www.placeholder.com/350/150"
	}, {
		"title": "online portfolio using json",
		"dates": 2015,
		"description": "update later",
		"image": "www.placeholder.com/350/150"
	}]
}
var bio={
	"bio": [{
		"name": "mahakeerthi",
		"role": "front-End-Ninja",
		"welcome message": "update later",
		"skills":["HTML","CSS","BOOTSTRAP","JAVASCRIPT"],
		"contacts": [{
			"mobile": "+91-8088812635"
		}, {
			"email": "mahakeerthi3@gmail.com"
		}, {
			"github": "github.com/mahakeerthikr"
		}, {
			"twitter": "@mahakeerthi"
		}, {
			"location": "bangalore"
		}]
	}]

}
var education={
	"schools": [{
		"name": "cit gubbi",
		"location": "tumkur",
		"degree": "bachelor engineering",
		"majors": "information science",
		"year": 2014,
		"url": "www.cittumkur.com"
	}],
	"online course": [{
		"title": "front end engineer",
		"school": "udacity",
		"date": 2016,
		"url": "www.udacity.com"
	}]
}

if(bio.skills.length > 0)
{
$("#header").append(HTMLskillsStart);

var formattedskills = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedskills);
formattedskills = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedskills);
formattedskills = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedskills);
formattedskills = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedskills);
}







