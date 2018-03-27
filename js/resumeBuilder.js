var bio = {
  name: "Beier Chen",
  role: "Software Developer",
  contacts: {
    mobile: "315-278-0243",
    email: "bchen22@syr.edu",
    github: "beierchen95@126.com",
    location: "Syracuse, NY"
  },
  welcomeMessage : "Welcome to my page!",
  biopic: "images/fry.jpg",
  skills: ["C#", ".NET", "C++/C", "HTML", "CSS", "JavaScript"],
  display: function (){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedName, formattedRole, formattedMobile, formattedEmail, formattedGit, formattedLocation, formattedImage, HTMLskillsStart);

    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGit, formattedLocation);

    bio.skills.forEach(function(skill){
      var formattedSkills = HTMLskills.replace("%data%", skill);
      $("#header").append(formattedSkills);
    })
    $("#header").append(formattedMsg);
  }
};

var work = {
  jobs: [
    {
      employer: "Some Company",
      title: "Some Title",
      location: "Some City",
      dates: "Jan 2020 - 2022",
      description: "Some Job"
    }
  ],
  display: function(){
    work.jobs.forEach(function(job){
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      $(".work-entry:last").append(formattedDates);

      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      $(".work-entry:last").append(formattedDescription);
    });
  }
};

var education = {
  schools:[
    {
      name: "Syracuse University",
      dates: "Aug 2017 - Present",
      degree: " M.S.",
      location: "Syracuse, NY, USA",
      major: "Computer Engineering"
    },
    {
      name: "South China Agricultural University",
      dates: "Sep 2013 - June 2017",
      degree: " B.S.",
      location: "GuangZhou City, Guangdong Province, China",
      major: "Automation"
    }
  ],

  onlineCourses:[
    {
      school: "Udacity",
      title: "Udacity Front-End Web Developer Nanodegree Program",
      dates: "Dec 2017 - Present",
      url: "https://cn.udacity.com/fend"
    }
  ],
  display: function(){
    education.schools.forEach(function(school){

      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", school.name);
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);

      $(".education-entry:last").append(formattedName, formattedDates, formattedLocation,
        formattedMajor, formattedDegree);
    });

    education.onlineCourses.forEach(function(course){

      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);

      var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
      var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
      var formattedURL = HTMLonlineURL.replace("%data%", course.url);

      $(".education-entry:last").append(formattedTitle, formattedDates, formattedURL);
    });
  }
};

var projects = {
  projects: [{
    title: "Software Collaboration System",
    dates: "Aug 2017 - Dec 2017",
    description: "Course Project of 'Software Modeling & Analysis', built with C# and Visual Studio 2017, using .Net Frameowrk, WPF and WCF technology.",
    image: "images/BuildServer.png"
  }],
  display: function(){
    projects.projects.forEach(function(project){
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedImage = HTMLprojectImage.replace("%data%", project.image);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
      $(".project-entry:last").append(formattedTitle, formattedDates, formattedImage, formattedDescription);
    });
  }
};

work.display();
bio.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);
function inName(oldName){
    var finalName = "";
    var index = oldName.indexOf(" ");
    finalName = oldName[0].toUpperCase() + oldName.slice(1,index).toLowerCase() +" " + oldName.slice(index+1).toUpperCase();
    return finalName;
};
