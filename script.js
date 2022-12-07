const profileObject = "myProfile";
const profileName = "name";
const profileVideo = "videoURL";
const profileDescription = "description";
const profileLocation = "location";
const about = "about";
const skillsArray = "skills";
const skillsTitle = "title";
const skillsImg = "address";
const skillsDetails = "details";
const educationArray = "education";
const educationInstitute = "institute";
const educationDegree = "degree";
const educationYear = "year";
const projectsArray = "myProjects";

async function loadJson() {
  const response = await fetch("db.json");
  const jsonObj = await response.json();
  const userProfile = jsonObj[profileObject];

  const profileElement = document.querySelectorAll("[data-id]");

  profileElement.forEach((element) => {
    switch (element.dataset.id) {
      case "profile-name":
        element.innerHTML = jsonObj[profileObject][profileName];
        break;

      case "profile-description":
        element.innerHTML = jsonObj[profileObject][profileDescription];
        break;

      case "profile-about":
        element.innerHTML = jsonObj[profileObject][about];
        break;

      case "profile-video":
        element.setAttribute("src", jsonObj[profileObject][profileVideo]);
        break;
      case "profile-location":
        element.innerHTML = jsonObj[profileObject][profileLocation];
        break;

      // Appending Skill Buttons
      case "skill-section":
        userProfile[skillsArray].forEach((elements, index) => {
          const skills_object = jsonObj[profileObject][skillsArray][index];
          createButton(element, skills_object);
        });

        break;

      // Appending Projects
      case "projects-section":
        const projects = jsonObj[profileObject][projectsArray];
        expandProject(projects);
        break;

      // Appending Education
      case "profile-education":
        for (let i = 0; i < userProfile[educationArray].length; i++) {
          const eduObject = jsonObj[profileObject][educationArray][i];
          const institute = eduObject[educationInstitute];
          const year = eduObject[educationYear];
          const degree = eduObject[educationDegree];

          element.innerHTML = degree + "<br>" + institute + "<br>" + year;
        }
        break;
    }
  });
}
