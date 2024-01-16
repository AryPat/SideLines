/*
  I do not prefer this way of displaying image, this is a quick and dirty way 
  of doing it. This will change in future versions using S3 buckets.

  I did not consider any validation. I am assuming that the data is correct.
  This will change in the future versions to be more robust.
*/

const girls = {
  "SIDEMEN TINDER IN REAL LIFE 2": {
    Lidia: {
      age: 25,
      location: "Stoke",
      instagram: "halll012",
      picture: "",
    },
    Abbie: {
      age: 24,
      location: "Yorkshire",
      instagram: "abimcpeake",
      picture: "",
    },
    Gina: {
      age: 20,
      location: "Beaconsfield",
      instagram: "DoesNotExist",
      picture: "",
    },
    Jane: {
      age: 27,
      location: "Islington",
      instagram: "janeelizabeth27",
      picture: "",
    },
    Kate: {
      age: 30,
      location: "London",
      instagram: "DoesNotExist",
      picture: "",
    },
    EmilyA: {
      age: 22,
      location: "South-east London",
      instagram: "emapples",
      picture: "",
    },
    Ella: {
      age: 23,
      location: "London",
      instagram: "DoesNotExist",
      picture: "",
    },
    Chloe: {
      age: 24,
      location: "Essex",
      instagram: "chloeveitchofficial",
      picture: "",
    },
    Rosie: {
      age: 20,
      location: "Southampton",
      instagram: "r0sielewis",
      picture: "",
    },
    Lea: {
      age: 22,
      location: "Birmingham",
      instagram: "leamichele",
      picture: "",
    },
    Hannah: {
      age: 27,
      location: "Oxford",
      instagram: "hlessel_",
      picture: "",
    },
    Elisha: {
      age: 26,
      location: "London",
      instagram: "RIP",
      picture: "",
    },
    Jennifer: {
      age: 25,
      location: "London",
      instagram: "DoesNotExist",
      picture: "",
    },
    EmilyS: {
      age: 21,
      location: "Durham",
      instagram: "emilyyshelton",
      picture: "",
    },
    Danielle: {
      age: 25,
      location: "London",
      instagram: "DoesNotExist",
      picture: "",
    },
    Kendal: {
      age: 26,
      location: "Yorkshire",
      instagram: "DoesNotExist",
      picture: "",
    },
    Lakita: {
      age: 21,
      location: "Essex",
      instagram: "laketalester97",
      picture: "",
    },
    Emma: {
      age: 24,
      location: "London",
      instagram: "DoesNotExist",
      picture: "",
    },
    Velvet: {
      age: 28,
      location: "Bournemouth",
      instagram: "DoesNotExist",
      picture: "",
    },
    Manny: {
      age: 23,
      location: "North Yorkshire",
      instagram: "DoesNotExist",
      picture: "",
    },
    "Miss Johnny Bones": {
      age: 29,
      location: "Liverpool",
      instagram: "itsjustbones",
      picture: "",
    },
    Molly: {
      age: 21,
      location: "York",
      instagram: "DoesNotExist",
      picture: "",
    },
    Nemi: {
      age: 27,
      location: "Milton Keynes",
      instagram: "DoesNotExist",
      picture: "",
    },
  },
};

const groups = {
  sidemen: {
    Josh: {
      age: "old",
      location: "Bermondsey, South London",
      instagram: "zerkaa",
      picture: "",
    },
    Simon: {
      age: "young",
      location: "Hertfordshire, England",
      instagram: "miniminter",
      picture: "",
    },
    Tobi: {
      age: "young",
      location: "Hackney, London",
      instagram: "tobjizzle",
      picture: "",
    },
    KSI: {
      age: "grandpa",
      location: "Watford, Hertfordshire",
      instagram: "ksi",
      picture: "",
    },
    Ethan: {
      age: "young",
      location: "London, United Kingdom",
      instagram: "behzingagram",
      picture: "",
    },
    Vikk: {
      age: "young",
      location: "Guildford, United Kingdom",
      instagram: "vikkstagram",
      picture: "",
    },
    Harry: {
      age: "young",
      location: "Guernsey",
      instagram: "wroetoshaw",
      picture: "",
    },
  },
  troops: {
    Stephen: {
      age: "old",
      location: "Bermondsey, South London",
      instagram: "zerkaa",
      picture: "",
    },
    Calfreezy: {
      age: "young",
      location: "Hertfordshire, England",
      instagram: "miniminter",
      picture: "",
    },
    Callux: {
      age: "young",
      location: "Hackney, London",
      instagram: "tobjizzle",
      picture: "",
    },
  },
  betasquad: {
    Chunks: {
      age: "old",
      location: "Bermondsey, South London",
      instagram: "zerkaa",
      picture: "",
    },
    Filly: {
      age: "young",
      location: "Hertfordshire, England",
      instagram: "miniminter",
      picture: "",
    },
  },
  friends: {
    Logan: {
      age: "old",
      location: "Bermondsey, South London",
      instagram: "zerkaa",
      picture: "",
    },
    Mike: {
      age: "young",
      location: "Hertfordshire, England",
      instagram: "miniminter",
      picture: "",
    },
    George: {
      age: "young",
      location: "Hackney, London",
      instagram: "tobjizzle",
      picture: "",
    },
    HarryP: {
      age: "young",
      location: "Hackney, London",
      instagram: "tobjizzle",
      picture: "",
    },
  },
};

const girl_path = "./pictures/girls/one";

for (const groupName in girls) {
  for (const girlName in girls[groupName]) {
    const girl = girls[groupName][girlName];
    girl.picture = `${girl_path}/${girlName}.PNG`;
  }
}

for (const groupName in groups) {
  for (const guyName in groups[groupName]) {
    const guy = groups[groupName][guyName];
    guy.picture = `./pictures/${groupName}/${guyName}.PNG`;
  }
}

const getGirlInfo = (title, name) => {
  return girls[title]?.[name];
};

const getGirlPhoto = (title, name) => {
  return girls[title]?.[name]?.picture;
};

const getSpeakerPhoto = (group, name) => {
  return groups[group][name]?.picture;
};

const getSpeakerInfo = (group, name) => {
  return groups[group][name];
};

export { getGirlInfo, getGirlPhoto, getSpeakerPhoto, getSpeakerInfo, groups };
