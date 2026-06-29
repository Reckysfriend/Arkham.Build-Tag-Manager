function BuildDropdown(dropdownValues, dropdownName) {
  const dropdowns = dropdownValues;
  const div = document.getElementById("dropdown");
  const label = `<label class"test" for="${dropdownName}">${dropdownName}:</label>`;
  const select = `<select onchange="onChange()" name="${dropdownName}" id="${dropdownName}dropdown"</select>`;

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
  "",
  "Guardian",
  "Mystic",
  "Neutral",
  "Rouge",
  "Seeker",
  "Survivor",
];

const roles = ["", "Fighter", "Cluver", "Flex", "Support"];
const campaign = ["", "Campaign", "Standalone"];
const campaignID = [
  "",
  "The-Night-of-the-Zealot",
  "Return-to-The-Night-of-the-Zealot",
  "The-Dunwich-Legacy",
  "Return-to-The-Dunwich-Legacy",
  "The-Path-to-Carcosa",
  "Return-to-The-Path-to-Carcosa",
  "The-Forgotten-Age",
  "Return-to-The-Forgotten-Age",
  "The-Circle-Undone",
  "Return-to-The-Circle-Undone",
  "The-Dream-Eaters-Dream",
  "The-Dream-Eaters-Spider",
  "The-Innsmouth-Conspiracy",
  "Edge-of-the-Earth",
  "The-Scarlet-Keys",
  "The-Feast-of-Hemlock-Vale",
  "The-Drowned-City",
  "Brethren-of-Ash",
];
const standaloneID = [
  "Curse-of-the-Rougarou",
  "Carnevale-of-Horrors",
  "The-Labyrinths-of-Lunacy",
  "The-Eternal-Slumber",
  "The-Night's-Usurper",
  "Guardians-of-the-Abyss",
  "The-Blob-that-Ate-Everything",
  "Murder-at-the-Excelsior-Hotel",
  "Barkham-Horror:-The-Meddling-of-Meowlathotep",
  "War-of-the-Outer-Gods",
  "Machinations-Through-Time",
  "Fortune-And-Folly",
  "The-Midwinter-Gala",
  "Film-Fatale",
];
BuildDropdown(factions, "Factions");
BuildDropdown(roles, "Roles");
BuildDropdown(campaign, "Type");

function onChange() {
  const dropdown = document.getElementById("Factionsdropdown");

  console.log(dropdown.value);
}
