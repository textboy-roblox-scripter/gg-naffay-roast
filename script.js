const roasts = [
  "Naffay reported someone and stubbed his toe right after. Instant karma.",
  "Bro thought reporting was a skill. Spoiler: it’s not.",
  "Even the shadow pets call him ‘Lil Mod Energy’ 😂",
  "His avatar got banned for being too basic.",
  "Naffay uses a Chromebook and thinks it’s a gaming rig.",
  "He said 'I reported you' like it’s a flex 💀",
  "Naffay’s Roblox password is probably 'naffay123'.",
  "The only game he wins is Hide & Snitch.",
  "Reported you and still lost the obby. L.",
  "His mom grounded him after he bragged about reporting you. Rip."
];

let count = 0;

function roastHim() {
  const roastText = document.getElementById("roastText");
  const cryCount = document.getElementById("cryCount");
  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
  roastText.innerText = randomRoast;
  count++;
  cryCount.innerText = count;
}
