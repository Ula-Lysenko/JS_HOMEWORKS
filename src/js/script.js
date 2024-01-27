const createCandidate = function (name, skill1, skill2, skill3, skill4) {
  const candidate = {
    name,
    listOfSkills: {
      skill1,
      skill2,
      skill3,
      skill4,
    },
  };
  return candidate;
};

const candidateProfile = createCandidate(
  "Nikolia",
  "languages",
  "bootstrap",
  "GIT",
  "JS",
);
console.log(candidateProfile);

const addRequire = function (require1, require2, require3, require4) {
  const requires = {
    require1,
    require2,
    require3,
  };
  requires.require4 = require4;
  return requires;
};

const candidateRequires = addRequire("languages", "bootstrap", "GIT", "JS");
console.log(candidateRequires);

const conductInterview = function (profile, requires) {
  // const keys1 = Object.keys(profile.listOfSkills);
  // console.log(keys1);
  // const keys2 = Object.keys(requires);
  // console.log(keys2);
  for (const key of profile.listOfSkills) {
    if (profile.listOfSkills[key] === requires[key]) return true;
  }
  return false;
};

console.log(conductInterview(candidateProfile, candidateRequires));
