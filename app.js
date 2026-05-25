function BuildDropdown(dropdownValues, dropdownName) {
  const dropdowns = dropdownValues;
  const div = document.getElementById("dropdown");
  const label = `<label for="${dropdownName}">${dropdownName}:</label>`;
  const select = `<select name="${dropdownName}" id="${dropdownName}dropdown"</select>`;

  let html = null;

  div.insertAdjacentHTML("beforeend", label);
  div.insertAdjacentHTML("beforeend", select);
  const dropdownSelect = document.getElementById(`${dropdownName}dropdown`);
  dropdownValues.forEach((value) => {
    html += `<option value=${value}>${value}</option>}`;
  });
  dropdownSelect.insertAdjacentHTML("beforeend", html);
}

const factions = [
  "Guardian",
  "Mystic",
  "Neutral",
  "Rouge",
  "Seeker",
  "Survivor",
];

const roles = ["Fighter", "Cluver", "Flex", "Support"];
BuildDropdown(factions, "Factions");
BuildDropdown(roles, "Roles");
