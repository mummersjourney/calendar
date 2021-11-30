let numbers = {
  day1: {
    day: new Date('December 1, 2021 00:00:01'),
    dayID: "day1",
    youtube: "https://www.youtube.com/embed/SSSvQ8ushNg"
  },
  day2: {
    day: new Date('December 2, 2021 00:00:01'),
    dayID: "day2",
    youtube: "https://www.youtube.com/embed/kUsLMGWUO0k"
  },
  day3: {
    day: new Date('December 3, 2021 00:00:01'),
    dayID: "day3",
    youtube: "https://www.youtube.com/embed/Sexmkj_8Fb0"
  },
  day4: {
    day: new Date('December 4, 2021 00:00:01'),
    dayID: "day4",
    youtube: "https://www.youtube.com/embed/qBJ2DIpYVbA"
  },
  day5: {
    day: new Date('December 5, 2021 00:00:01'),
    dayID: "day5",
    youtube: "https://www.youtube.com/embed/UkUvtcNyy4k"
  },
  day6: {
    day: new Date('December 6, 2021 00:00:01'),
    dayID: "day6",
    youtube: "https://www.youtube.com/embed/v-PTbVAHaUE"
  },
  day7: {
    day: new Date('December 7, 2021 00:00:01'),
    dayID: "day7",
    youtube: "https://www.youtube.com/embed/tv7YttVN_cM"
  },
  day8: {
    day: new Date('December 8, 2021 00:00:01'),
    dayID: "day8",
    youtube: "https://www.youtube.com/embed/61yxl36q7LI"
  },
  day9: {
    day: new Date('December 9, 2021 00:00:01'),
    dayID: "day9",
    youtube: "https://www.youtube.com/embed/NbkoNp5AM8E"
  },
  day10: {
    day: new Date('December 10, 2021 00:00:01'),
    dayID: "day10",
    youtube: "https://www.youtube.com/embed/N1-WBSbNpyo"
  },
  day11: {
    day: new Date('December 11, 2021 00:00:01'),
    dayID: "day11",
    youtube: "https://www.youtube.com/embed/XTkUcpFk6QE"
  },
  day12: {
    day: new Date('December 12, 2021 00:00:01'),
    dayID: "day12",
    youtube: "https://www.youtube.com/embed/GWpCWq4J5ss"
  },
  day13: {
    day: new Date('December 13, 2021 00:00:01'),
    dayID: "day13",
    youtube: "https://www.youtube.com/embed/uG7B7aVivAk"
  },
  day14: {
    day: new Date('December 14, 2021 00:00:01'),
    dayID: "day14",
    youtube: "https://www.youtube.com/embed/djn1iOaWUvc"
  },
  day15: {
    day: new Date('December 15, 2021 00:00:01'),
    dayID: "day15",
    youtube: "https://www.youtube.com/embed/R8Gd29pTDak"
  },
  day16: {
    day: new Date('December 16, 2021 00:00:01'),
    dayID: "day16",
    youtube: "https://www.youtube.com/embed/-ed3EfTKxuQ"
  },
  day17: {
    day: new Date('December 17, 2021 00:00:01'),
    dayID: "day17",
    youtube: "https://www.youtube.com/embed/zRdbQfv7rC0"
  },
  day18: {
    day: new Date('December 18, 2021 00:00:01'),
    dayID: "day18",
    youtube: "https://www.youtube.com/embed/LVAwLDGn-Vk"
  },
  day19: {
    day: new Date('December 19, 2021 00:00:01'),
    dayID: "day19",
    youtube: "https://www.youtube.com/embed/ayg6APzzyXg"
  },
  day20: {
    day: new Date('December 20, 2021 00:00:01'),
    dayID: "day20",
    youtube: "https://www.youtube.com/embed/QWsD_fiMB3o"
  },
  day21: {
    day: new Date('December 21, 2021 00:00:01'),
    dayID: "day21",
    youtube: "https://www.youtube.com/embed/qbZ4FTqOJKQ"
  },
  day22: {
    day: new Date('December 22, 2021 00:00:01'),
    dayID: "day22",
    youtube: "https://www.youtube.com/embed/ZIyLC9w5ro0"
  },
  day23: {
    day: new Date('December 23, 2021 00:00:01'),
    dayID: "day23",
    youtube: "https://www.youtube.com/embed/NnjHyaCVAho"
  },
  day24: {
    day: new Date('December 24, 2021 00:00:01'),
    dayID: "day24",
    youtube: "https://www.youtube.com/embed/PA1RhS4ezYs"
  }
};

const today = new Date();

function addEventListenersToDays(){
  for (const number in numbers) {
    let thisDay = numbers[number].dayID;
    let thisVideo = numbers[number].youtube;
    thisDay = document.getElementById(thisDay);
    thisDay.addEventListener('click', openVideo());
  }
}
addEventListenersToDays();

dateInPastArrow = (firstDate, secondDate) => firstDate <= secondDate;

function unBlurOpenDays (){
  // loop through all the days
  for (const number in numbers) {
    // get the day ID
    let thisDayID = numbers[number].dayID;
    let thisDay = numbers[number].day;
    // check if the firstDate is smaller than or equal to the second Date.
    if (dateInPastArrow(thisDay, today)) {
      let thisCalendarDay = document.getElementById(thisDayID);
      let thisIcon = document.getElementById(thisDayID).firstElementChild;
      // remove the blur class when needed
      thisIcon.classList.remove("blurIcon");
      // thisCalendarDay.classList.remove("inactiveTint");
    }
  }
  // add the good hover class 
}

unBlurOpenDays();
function openVideo(e) {
  function functionThatReceivesAnEvent(event) {

    let clickedDayID = event.srcElement.closest("li").id;
    let clickedDay = numbers[clickedDayID].day;
console.log("functionThatReceivesAnEvent");
    // check if the firstDate is smaller than or equal to the second Date.
    if (dateInPastArrow(clickedDay, today)) {
      displayVidDiv(event);
    }
  };
  return functionThatReceivesAnEvent;
}

let vidDiv = document.getElementById("vidDiv");

function hideVidDiv() {
  vidDiv.innerHTML = null;
  vidDiv.classList.remove("vidDiv");
  vidDiv.classList.remove("visible");
}

function displayVidDiv(e) {
  let clickedDayID = e.srcElement.closest("li").id;
  let thisVideo = numbers[clickedDayID].youtube;
  console.log(thisVideo);
  vidDiv.classList.add("vidDiv");
  vidDiv.innerHTML = "<iframe title='YouTube video player' type=\'text/html\' width='80%' height='80%' position='absolute' src=" + thisVideo + " frameborder='0' allowFullScreen></iframe>"
  var a = document.createElement('a');
  a.classList.add("close");
  a.id = "closeButton";
  a.href = "#";
  vidDiv.appendChild(a);
  a.addEventListener('click', hideVidDiv);
  vidDiv.classList.add("visible");
  // location.href="#paypal-container";
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    hideVidDiv();
  }
};


