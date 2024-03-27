// const $bigBall = document.querySelector(".cursor__ball--big");
// const $smallBall = document.querySelector(".cursor__ball--small");
// const $hoverables = document.querySelectorAll(".hoverable");

// // Listeners
// document.body.addEventListener("mousemove", onMouseMove);
// for (let i = 0; i < $hoverables.length; i++) {
//   $hoverables[i].addEventListener("mouseenter", onMouseHover);
//   $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
// }

// // Move the cursor
// function onMouseMove(e) {
//   TweenMax.to($bigBall, 0.4, {
//     x: e.pageX - 15,
//     y: e.pageY - 15,
//   });
//   TweenMax.to($smallBall, 0.1, {
//     x: e.pageX - 5,
//     y: e.pageY - 7,
//   });
// }

// // Hover an element
// function onMouseHover() {
//   TweenMax.to($bigBall, 0.3, {
//     scale: 4,
//   });
// }
// function onMouseHoverOut() {
//   TweenMax.to($bigBall, 0.3, {
//     scale: 1,
//   });
// }

window.onload = (event) => {
  let sections = Array.from(document.getElementsByTagName("section"));
  let sidebar = document.getElementById("sidebar");

  let ul = document.createElement("ul");
  sidebar.appendChild(ul);

  for (let i = 0; i < sections.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerText = sections[i].firstElementChild.innerText;
    a.href = "#" + sections[i].id;
    li.appendChild(a);

    a.addEventListener("click", function () {
      // Remove "active" class from all other links
      let links = document.querySelectorAll("#sidebar ul li a");
      links.forEach(function (link) {
        link.classList.remove("active");
      });

      // Add "active" class to the clicked link
      a.classList.add("active");
    });

    ul.appendChild(li);
  }
};
