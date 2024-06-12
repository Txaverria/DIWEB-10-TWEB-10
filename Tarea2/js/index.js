// document.addEventListener("DOMContentLoaded", (event) => {
//     const anchors = document.querySelectorAll(".list-group-item");

//     anchors.forEach((anchor) => {
//         anchor.addEventListener("click", (e) => {
//             e.preventDefault();

//             // Remove 'active' class and set aria-current to false for all anchors
//             anchors.forEach((item) => {
//                 item.classList.remove("active");
//                 item.setAttribute("aria-current", "false");
//             });

//             // Add 'active' class and set aria-current to true for the clicked anchor
//             anchor.classList.add("active");
//             anchor.setAttribute("aria-current", "true");
//         });
//     });
// });
