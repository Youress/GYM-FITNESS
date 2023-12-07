let header = document.querySelector(".header");
let closBtn = document.querySelector(`.nav-close`);
let openBtn = document.querySelector(`.nav-open`);

let navBtn = document.querySelectorAll(".nav-mobile-link li");

navBtn.forEach((e) => {
  e.onclick = function () {
    header.classList.remove("open");
  };
});

openBtn.addEventListener("click", (e) => {
  header.classList.add("open");
});
closBtn.addEventListener("click", (e) => {
  header.classList.remove("open");
});

// *********************************************************************Scedule
//hena darna object dyalna howa lwl bach ikon intiliase to others

const schedules = {
  Monday: {
    className1: "BasketBall",
    time1: "10:30am-12:00am",
    trainer1: "Youssef Smith",
  },
  Tuesday: {
    className1: "Yoga",
    time1: "10:30am-11:30am",
    trainer1: "Sarah Smith",
    className2: "Yoga",
    time2: "10:00am-11:00am",
    trainer2: "Mia Kha",
    className3: "Crossfit",
    time3: "4:00am-5:00am",
    trainer3: "Cristofer Columbo",
  },
  Wednesday: {
    className1: "fitness",
    time1: "11:30am-12:30am",
    trainer1: "Joe Biden",
  },
  Thursday: {
    className1: "Cross fit",
    time1: "8:30am-9:30am",
    trainer1: "leonardo de Caprio",
  },
  Friday: {
    className1: "FootBall",
    time1: "9:30am-10:30am",
    trainer1: "Cristiano Ronaldo",
  },
  Saturday: {
    className1: "fitness",
    time1: "11:30am-12:30am",
    trainer1: "Joe Biden",
  },
  Sunday: {
    className1: "Running",
    time1: "10:30am-12:00am",
    trainer1: "Lionel Messi",
  },
};

// hena darna declare list and initialize
let list = document.querySelectorAll(".days li");

showData();

list.forEach((dayElement) => {
  dayElement.onclick = function (e) {
    // Add "active" class to the clicked element
    e.currentTarget.classList.add("active");

    // Remove "active" class from all other elements
    list.forEach((li) => {
      if (li !== e.currentTarget) {
        li.classList.remove("active");
      }
    });

    // Store a unique identifier (for example, the day name) in localStorage
    localStorage.setItem("selectedDay", e.currentTarget.dataset.day); // current target ki locala as string

    // Show schedule for the clicked day
    showSchedule(e.currentTarget.dataset.day);
  };
});

function showSchedule(day) {
  const scheduleContent = document.getElementById("scheduleContent");
  const schedule = schedules[day];
  // console.log(schedules["Monday"]) //access with square bracket notation it alwyas should be string ""

  if (schedule) {
    scheduleContent.innerHTML = ""; // Clear previous content

    // Iterate over each session and create HTML elements
    for (let i = 1; i <= 3; i++) {
      const className = schedule[`className${i}`];
      const time = schedule[`time${i}`];
      const trainer = schedule[`trainer${i}`];

      if (className && time && trainer) {
        scheduleContent.innerHTML += `
            <ul class="content-table">
              <li>
                <p class="text">Class Name</p>
                <p class="content">${className}</p>
              </li>
              <li>
                <p class="text">Time</p>
                <p class="content">${time}</p>
              </li>
              <li>
                <p class="text">Trainer</p>
                <p class="content">${trainer}</p>
              </li>
              <li>
                <button class="button">Join Now</button>
              </li>
            </ul>`;
      }
    }
  }
}

function showData() {
  let storedDay = localStorage.getItem("selectedDay");

  // If "selectedDay" is found, apply the "active" class to the corresponding element
  if (storedDay) {
    list.forEach((dayElement) => {
      if (dayElement.dataset.day === storedDay) {
        // ila kant sotredday ki sawi datsetday dir lih class active
        dayElement.classList.add("active");
      } else {
        dayElement.classList.remove("active");
      }
    });

    if (storedDay) {
      showSchedule(storedDay); // il kan l9ima lmokhazana fi local baynha bnfs function showSchedule
    }
  } else {
    showSchedule("Monday");
  }
}
