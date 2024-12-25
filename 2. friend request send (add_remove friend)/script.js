const users = [
  {
    fullName: "Wade Wilson",
    description: "A skilled frontend developer who loves creating dynamic UIs.",
    designation: "Frontend Developer",
    company: "Meta",
    rate: 75,
    available: true,
    status: "Stranger",
    skills: [
      "JavaScript",
      "React",
      "CSS",
      "HTML",
      "Redux",
      "TypeScript",
      "Figma",
    ],
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_cibZ-p2TdgnuAV5gJDmgHvfR4Gp_TQykQ&s",
  },
  {
    fullName: "Peter Parker",
    description: "Passionate backend developer focused on scalable solutions.",
    designation: "Backend Developer",
    company: "Google",
    rate: 80,
    available: false,
    status: "Stranger",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "Redis",
      "GraphQL",
      "Docker",
    ],
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gz_HjsSt7IfUePfl2EznUc-ZcSWnXWmovQ&s",
  },
  {
    fullName: "Tony Stark",
    description: "Full-stack wizard with a knack for building complex systems.",
    designation: "Full Stack Developer",
    company: "Amazon",
    rate: 100,
    available: true,
    status: "Stranger",
    skills: [
      "React",
      "Node.js",
      "AWS",
      "Python",
      "Java",
      "SQL",
      "Kubernetes",
      "GraphQL",
    ],
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUz3rpcpWneZmFzhOcMa3eERASsO10oBNLlQ&s",
  },
  {
    fullName: "Bruce Wayne",
    description: "Expert in cloud infrastructure and scalable architectures.",
    designation: "Cloud Engineer",
    company: "Microsoft",
    rate: 90,
    available: true,
    status: "Stranger",
    skills: [
      "AWS",
      "Azure",
      "Kubernetes",
      "Docker",
      "Linux",
      "Terraform",
      "Bash",
    ],
    profilePhoto:
      "https://sites.rutgers.edu/acal51/wp-content/uploads/sites/291/2017/12/3859882-6269102771-Bruce.jpg",
  },
  {
    fullName: "Clark Kent",
    description: "Frontend magician with strong design sensibilities.",
    designation: "UI/UX Designer",
    company: "Apple",
    rate: 85,
    available: false,
    status: "Stranger",
    skills: [
      "Figma",
      "Sketch",
      "CSS",
      "HTML",
      "React",
      "JavaScript",
      "Photoshop",
    ],
    profilePhoto:
      "https://ew.com/thmb/IWTSy6GrKCmZBSIcZwC84oHmNdw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mos-10175c_2-2000-116d947875b84ddcabb01baa1fa1b389.jpg",
  },
  {
    fullName: "Natasha Romanoff",
    description: "Cybersecurity expert with a focus on ethical hacking.",
    designation: "Cybersecurity Analyst",
    company: "Tesla",
    rate: 95,
    available: true,
    status: "Stranger",
    skills: [
      "Penetration Testing",
      "Firewalls",
      "Python",
      "Linux",
      "Network Security",
      "SIEM",
    ],
    profilePhoto:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-studios-cinematic-universe/e/e1/Widow2-avengers.jpg",
  },
  {
    fullName: "Steve Rogers",
    description: "Backend engineer who excels in database management.",
    designation: "Backend Developer",
    company: "Oracle",
    rate: 70,
    available: false,
    status: "Stranger",
    skills: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Node.js",
      "Python",
      "Redis",
      "Docker",
    ],
    profilePhoto:
      "https://w0.peakpx.com/wallpaper/775/1010/HD-wallpaper-steve-rogers-age-of-ultron-avengers-steve-rogers.jpg",
  },
  {
    fullName: "Diana Prince",
    description: "DevOps specialist ensuring seamless deployments.",
    designation: "DevOps Engineer",
    company: "IBM",
    rate: 85,
    available: true,
    status: "Stranger",
    skills: [
      "CI/CD",
      "Jenkins",
      "Ansible",
      "AWS",
      "Docker",
      "Linux",
      "Kubernetes",
    ],
    profilePhoto:
      "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Diana-Prince.Wonder-Woman.webp",
  },
  {
    fullName: "Barry Allen",
    description: "Frontend developer who creates lightning-fast applications.",
    designation: "Frontend Developer",
    company: "Netflix",
    rate: 78,
    available: true,
    status: "Stranger",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "CSS",
      "HTML",
      "Redux",
      "Webpack",
    ],
    profilePhoto: "https://images6.alphacoders.com/651/thumb-1920-651350.jpg",
  },
  {
    fullName: "Thor Odinson",
    description: "Cloud architect known for designing fault-tolerant systems.",
    designation: "Cloud Architect",
    company: "Adobe",
    rate: 120,
    available: false,
    status: "Stranger",
    skills: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Terraform",
      "Kubernetes",
      "Python",
      "Linux",
    ],
    profilePhoto:
      "https://imgix.ranker.com/list_img_v2/4986/2784986/original/best-thor-odinson-quotes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720",
  },
];

let h2 = document.querySelector("#h2");
function Main() {
  let str = "";
  users.map((item, idx) => {
    str += `<div class="card">
          <img
            src=${item.profilePhoto}
            alt=""
          />
          <h1>${item.fullName}</h1>
          <div id=${idx}>${
      item.available ? "Add Friend" : "Remove Friend"
    }</div>
        </div>`;
  });
  h2.innerHTML = str;
}
Main();
h2.addEventListener("click", (event) => {
  if (users[event.target.id].available === true) {
    users[event.target.id].available = false;
  } else {
    users[event.target.id].available = true;
  }
  Main();
});