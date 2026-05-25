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
const campaign = ["Campaign", "Standalone"];
const campaignID = [
  "NoZ",
  "rNoz",
  "TDL",
  "rTDL",
  "PTC",
  "rPTC",
  "TCU",
  "rTCU",
  "TDE",
  "TIC",
  "ETE",
  "TSK",
  "FHV",
  "TDC",
];
const standaloneID = [
  "CoR",
  "CoH",
  "TLoL",
  "GoTA",
  "MAEH",
  "BTAE",
  "WOOG",
  "MTT",
  "FAF",
  "BAEE",
  "TMG",
  "FF",
];
BuildDropdown(factions, "Factions");
BuildDropdown(roles, "Roles");
