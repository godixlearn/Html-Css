
const navLinks = [
    {
       name : "Home", 
       link: "#Home",
       className: "",
    },
    {
       name : "About", 
       link: "#About",
       className: "",
    },
    {
       name : "doctors", 
       link: "#doctors",
       className: "",
    },
    {
       name : "Contact", 
       link: "#Contact",
       className: ""
    },
    {
       name : "Appointment", 
       link: "#Appointment",
       className: "nav-button"
    }
]

const navbar = document.getElementById("navbarLinks");

for(let i = 0; i < navLinks.length; i++){

    const item = navLinks[i];


    navbar.innerHTML += `
        <a href="${item.link}" class="${item.className}">${item.name}</a>
    `
}


const doctors = [
   {
      name: "Gowri Shankar s",
      role: "Genral surgent",
      image: "./Assests/team-image1.jpg",
      phone: "010-020-0120",
      email: "general@company.com"
   },
   {
      name: "Gowri Shankar s",
      role: "Genral surgent",
      image: "./Assests/team-image1.jpg",
      phone: "010-020-0120",
      email: "general@company.com"
   },
   {
      name: "Gowri Shankar s",
      role: "Genral surgent",
      image: "./Assests/team-image1.jpg",
      phone: "010-020-0120",
      email: "general@company.com"
   }
]

const doctorContainer = document.getElementById("doctorContainer");

function showDoctors(){

   doctorContainer.innerHTML = ""

   for(let i=0 ; i < doctors.length; i++){
      const doctor = doctors[i];

      doctorContainer.innerHTML += `
         <div class="card">
              <img src="${doctor.image}" alt="${doctor.name}" />

              <div class="card-content">
                <h3>${doctor.name}</h3>
                <p>${doctor.role}</p>
                <hr />
                <p>
                  <i
                    class="fa-solid fa-phone"
                    style="color: rgb(251, 7, 29)"
                  ></i
                  >${doctor.phone}
                </p>
                <p>
                  <i
                    class="fa-solid fa-envelope"
                    style="color: rgb(251, 7, 29)"
                  ></i
                  >${doctor.email}
                </p>
              </div>
         </div>
      `;
   }
}

showDoctors();