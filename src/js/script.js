const listOfSkills = ["HTML", "SCSS", "English", "GIT", "JS", "Gulp"];
// console.log(listOfSkills);
const listOfRequires = ["HTML", "SCSS", "JS", "English"];
// console.log(listOfRequires);

const createCandidate = function (name, skills) {
  return {
    name,
    skills,
  };
};

const candidateProfile = createCandidate("Nikolia", listOfSkills);
const candidateProfile2 = createCandidate("Gretta", listOfSkills);
const candidateProfile3 = createCandidate("Den", listOfSkills);
const listOfCandidates = [
  candidateProfile,
  candidateProfile2,
  candidateProfile3,
];

const addRequire = function (skill, requires) {
  requires.push(skill);
};

addRequire("GIT", listOfRequires);
// console.log(listOfRequires);

const checkRequires = function (profile, requires) {
  for (const value1 of requires) {
    let found = 0;
    for (const value2 of profile.skills) {
      if (value1 === value2) {
        found = 100;
        break;
      }
    }
    if (!found) return 0;
  }
  return 100;
};

// console.log(checkRequires(candidateProfile, listOfRequires));

const planInterview = function (candidates, req, scoreFunc) {
  const resultInterview = [];
  for (let i = 0; i < listOfCandidates.length; i += 1) {
    resultInterview.push({
      score: scoreFunc(listOfCandidates[i], req),
      candidate: listOfCandidates[i],
    });
  }
  return resultInterview;
};

console.log(planInterview(listOfCandidates, listOfRequires, checkRequires));
