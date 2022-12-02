async function handleClick(more) {
  const response = await fetch("../templates/skillExpand.html");
  const template = await response.text();

  document.querySelector('[data-id="skill-expand"]').innerHTML = "";

  const newArray = more.split(",");

  newArray.forEach((element) => {
    const newHTML = template.replace("${element}", element);
    document.getElementById("skill-expand").innerHTML += newHTML;
  });
}
