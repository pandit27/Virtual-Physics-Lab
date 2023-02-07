const circuit_simulator_fs = document.querySelector(
  "#electric-circuit-simulator-first-section"
);
const ohms_law_calculator_fs = document.querySelector(
  "#ohms-law-calculator-first-section"
);
const documentation_fs = document.querySelector("#documentation-first-section");

circuit_simulator_fs.addEventListener("click", () => {
  location.href = "circuit/circuit-nav.html";
});

ohms_law_calculator_fs.addEventListener("click", () => {
  location.href = "ohm's-law-calculator/ohms-law.html";
});

documentation_fs.addEventListener("click", () => {
  location.href = "";
});
