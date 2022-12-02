const projDiv = document.querySelector('[data-id="projects-section"]');
function expandProject(projs) {
  projs.forEach((element, index) => {
    projDiv.innerHTML += `<button
      onclick="MoreDetails('${element.date}','${element.description}','${
      "div" + index
    }','${"btn" + index}')"
      class="project-btn bg-white text-black py-1 px-4 border border-blue-500 hover:border-rounded mr-2 mt-2 rounded-2xl"
      
    >
      <div class="flex m-auto">
        <p class="text-[16px] text-left">
          <b>${element.title}</b>
          
        </p>
      </div>
      <div id="${"div" + index}" style="display: none;">
      <p class="text-[16px] text-left">
    
            ${element.date}<br />
            ${element.description}
          </p>
      </div>
    </button>`;
  });
}
function MoreDetails(date, desc, div) {
  console.log(date, desc, div);
  document.getElementById(div).style.display = "block";
}
