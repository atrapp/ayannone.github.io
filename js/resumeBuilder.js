// $("#main").append("Andrea Yannone");

// var awesomeThoughts = "I am Andrea and I am awesome.";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("awesome","fun");
// $("#main").append(funThoughts);

var summary = "Junior Web Developer (Full Stack, Ruby on Rails specialist with good Front-end skills). " +
              "Former IT Professional with years of experience in Application Development & System " +
              "Administration with Microsoft SharePoint and Lotus Notes/Domino. Social Entrepreneur and " +
              "Innovator, teaching activities.";

////////////   Biography Data   //////////////

var bio = {
  "name" : "Andrea Yannone",
  "role" : "Full Stack Web Developer",
  "contacts" : {
    "mobile" : "(845) 541-3090",
    "email" : "andrea.yannone1@gmail.com",
    "github" : "ayannone",
    "twitter" : "@delia421",
    "location" : "New York, NY"
  },
  "welcomeMsg" : "Happy Everything!",
  "skills" : ["HTML5","CSS3","JavaScript","jQuery","Ajax","Ruby","Ruby on Rails","Backbone.js","D3.js","SQL","MySQL","PostgreSQL","Bootstrap","Git","GitHub","Heroku","Amazon S3"],
  "bioPic" : "images/portrait.jpg",
  display : function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    for (contact in bio.contacts) {
      var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);
      $("#topContacts").append(formattedContactGeneric);
    };

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
      };
    };
  }
};
bio.display();

////////////   Education Data (Schools and Online Courses)  //////////////

var education = {
  "schools" : [
    {
      "name" : "FH  Wedel - University of Applied Sciences",
      "location" : "Wedel, Germany",
      "degree" : "Bachelor plus",
      "dates" : "1998",
      "majors" : ["CS","Business Administration"],
      "url" : "http://www.fh-wedel.de"
    },
    {
      "name" : "General Assembly",
      "location" : "New York City",
      "degree" : "Full Stack Web Developer",
      "dates" : "2014",
      "majors" : ["Web Development Immersive"],
      "url" : "http://www.generalassemb.ly"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front End Web Development",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : "http://www.udacity.com"
    }
  ],
  display : function() {
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolName);
      $(".education-entry:last").append(formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      for (major in education.schools[school].majors) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedSchoolMajor);
      };
    };
    $("#education").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {
      $("#education").append(HTMLonlineCourseStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
      $(".education-entry:last").append(formattedOnlineTitle);
      $(".education-entry:last").append(formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    };
  }
};

education.display();

////////////   Work Data   //////////////

var work = {
  "jobs" : [
    {
      "employer" : "Best Class, Inc",
      "title" : "Lead Web Developer",
      "location" : "New York City",
      "dates" : "since 09/2014",
      // "description" : "Developing an online aggregator for children's after school classes."
      "description" : "Best Class is an online aggregator for children's after school classes. " +
                      "It helps families identify high-quality, neighborhood classes and after-school " +
                      "activities that will support their child's development, and nurture their individual " +
                      "talent. Best Class provides a search engine for locating neighborhood classes, " +
                      "offering an easy route, navigable by older children as well as parents. It delivers " +
                      "all the necessary information, eliminating the need for lengthy internet searches."
    },
    {
      "employer" : "Self-employed",
      "title" : "IT-Freelancer",
      "location" : "Norderstedt, Germany",
      "dates" : "07/2010-12/2013",
      // "description" : "SharePoint Developer, Lotus Notes Specialist, Consultant"
      "description" : "My freelance work for Lufthansa Systems AS GmbH included maintenance of their " +
                      "corporate HR database (Lotus Notes/Domino), implementing functionality with " +
                      "Microsoft SharePoint to provide collaboration within and amongst departments, " +
                      "extending the software and hardware ordering systems features as well as hardware " +
                      "and software installations for various other clients and computer training for " +
                      "seniors. Specialist focus on Microsoft SharePoint, Lotus Notes/Domino."
    },
    {
      "employer" : "w3mobil Lernprojekte",
      "title" : "Co-founder",
      "location" : "Hamburg, Germany",
      "dates" : "09/2009 - 12/2013",
      // "description" : "Developed, organized and implemented computer literacy projects for children, teenager and senior citizen. Established and managed a partner-network of social institutions, nursing homes and public schools."
      "description" : "With my business partner I founded this company to help share computer knowledge " +
                      "and make technology accessible to others (especially older and disabled persons). " +
                      "I set up a partner-network of social institutions, nursing homes and public schools " +
                      "and developed, organized and implemented over 60 computer literacy training projects " +
                      "for children, teenager and seniors throughout Hamburg with more than 2000 students " +
                      "enrolled."
    },
    {
      "employer" : "Lufthansa Systems AS GmbH",
      "title" : "Technical Administration and SharePoint Developer",
      "location" : "Norderstedt, Germany",
      "dates" : "04/2007-06/2010",
      // "description" : "Established a SharePoint infrastructure, developed a hardware and software ordering system (InfoPath, .NET/C#), re-designed and refactored the HR database (Lotus Notes / Domino)."
      "description" : "For the Technical Administration Department I established a Microsoft SharePoint " +
                      "infrastructure to improve collaboration and sharing of information, I developed a " +
                      "hardware and software ordering system and provided technical in-house user support. " +
                      "I also was solely responsible for the redesign and refactoring of Lufthansa Systems' " +
                      "HR database (Lotus Notes/Domino) and augmented data flow that effectively reduced the " +
                      "time spent inputting data relating to the company's job applicants by 50%."
    },
    {
      "employer" : "Condor Lebensversicherungs-Aktiengesellschaft",
      "title" : "Application Administrator",
      "location" : "Hamburg, Germany",
      "dates" : "08/2002-03/2007",
      // "description" : "Responsible for application development and system administration with Lotus Notes/Domino as well as in-house user support."
      "description" : "As an application administrator my tasks included application development and " +
                      "system administration with Lotus Notes/Domino as well as in-house user support " +
                      "and first technical contact for the Customer Service department and sales staff. " +
                      "As a project manager I was responsible for implementing an electronic resubmission " +
                      "system connected with the digital File Archive as well as launching a Blackberry " +
                      "infrastructure for the sales department."
    },
    {
      "employer" : "Nikotel Deutschland AG",
      "title" : "System Integration Administrator",
      "location" : "Hamburg, Germany",
      "dates" : "01/2001-11/2001",
      // "description" : "Responsibilities included the implementation of the company's Lotus Notes/Domino infrastructure, installation and administration of the Windows 2000 domain network and the migration of the corporate mail system from Lotus Notes/Domino to Outlook/Exchange 2000."
      "description" : "Responsibilites included design, installation and maintainance of the whole " +
                      "company's Lotus Notes/Domino infrastructure as well as the Windows 2000 domain " +
                      "network with all services (Domain controllers, Mail servers and Clients). Migration " +
                      "of the corporate mail system from Lotus Notes/Domino to Outlook/Exchange 2000"
    },
    {
      "employer" : "PPP Internetdienstleistungen GmbH",
      "title" : "Development and Support Engineer",
      "location" : "Hamburg, Germany",
      "dates" : "04/1998-12/2002",
      // "description" : "I developed, implemented and maintained an in-house information system based on my workflow research that helped improve the processing of all customer services."
      "description" : "I developed, implemented and maintained an in-house information system with " +
                      "Lotus Notes/Domino based on my workflow research that helped improve the processing " +
                      "of all customer services, e.g. help requests, orders, installation procedures. Later " +
                      "I joined the user support team to help customers with technical inquiries as well as " +
                      "with installations and configuration of internet services"
    }
  ],
  display : function() {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
      $(".work-entry:last").append(formattedWorkEmployer);
      $(".work-entry:last").append(formattedWorkTitle);
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDescription);
    };
  }
};

work.display();

////////////   Projects Data   //////////////

var projects = {
  "projects" : [
    {
     "title" : "Helpr",
     "dates" : "2014",
     "description" : "Finding, requesting and offering help in different locations and categories and meet people in the real world.",
     "images" : [""]
    },
    {
     "title" : "Business Card Organizer",
     "dates" : "2014",
     "description" : "Take a picture of a business card and email it to the app to keep track of your networking contacts (collaborative project).",
     "images" : [""]
    },
    {
     "title" : "Sublime Packages Evaluator",
     "dates" : "2014",
     "description" : "Review and rate packages for the Sublime Text Editor. Share your experience with other users.",
     "images" : [""]
    },
    {
     "title" : "bestclass.nyc",
     "dates" : "2015",
     "description" : "Online aggregator for children's after school classes.",
     "images" : [""]
    }
  ],
  display : function() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
      var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);
      $(".project-entry:last").append(formattedProjectImage);
    };
  }
};

projects.display();

////////////   various functions  ////////////

// $(document).click(function(loc){
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// });


// function locationizer(work_obj) {
//   var locations = [];
//   for (job in work.jobs) {
//     locations.push(work.jobs[job].location);
//   };
//   return locations; // array of locations
// };
// var locations = locationizer(work);


// function inName(name) {
//   var nameArray = name.trim().split(" ");
//   var firstName = nameArray[0].toLowerCase();
//   firstName = firstName[0].toUpperCase() + firstName.slice(1);
//   var lastName = nameArray[1].toUpperCase();
//   return firstName + " " + lastName;
// };
$("#main").append(internationalizeButton);


////////////   Google Map   //////////////

$('#mapDiv').append(googleMap);


////////////   D3 Visualization   //////////////

d3.select("#favorites").style("background-color", "red");

d3.select("#education").transition().delay(1000).duration(3000)
    .style("background-color", "orange");

buildSvgBubbleChart();
drawBubbleChart(skillLevel);

buildSvgPieChart();
drawPieChart(skillLevel);

buildSvgBarChart();
drawBarChart(skillLevel);
