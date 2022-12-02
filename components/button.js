async function createButton(name, details, url) {
  //load html template
  const response = await fetch("templates/skill.html");
  const templateBtn = await response.text();

  //replace dynamic values

  //replace image

  let newHTML = templateBtn
    .replace("##name##", name)
    .replace("##more##", details)
    .replace("##image##", url);

  document.querySelector('[data-id="skill-section"]').innerHTML += newHTML;
}
