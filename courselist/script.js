"use strict";

const getDate = function () {
  const mon = document.querySelector(".mon");
  const tue = document.querySelector(".tue");
  const wed = document.querySelector(".wed");
  const thu = document.querySelector(".thu");
  const fri = document.querySelector(".fri");
  const sat = document.querySelector(".sat");
  const sun = document.querySelector(".sun");
  let today = new Date().getDay();
  const days = [mon, tue, wed, thu, fri, sat, sun];
  // console.log(days);
  // console.log(days[today]);
  days[today - 1].classList.toggle("day-background");

  let year = new Date().getFullYear();
  let mouth = new Date().getMonth() + 1;
  let day = new Date().getDate();
  let nowaday = `${year}年${mouth}月${day}日`;
  const DATE = document.getElementById("nowaday");
  DATE.textContent = nowaday;

  function getDaysBetween(startDate, enDate) {
    const sDate = Date.parse(startDate);
    const eDate = Date.parse(enDate);
    if (sDate > eDate) {
      return 0;
    }
    // 这个判断可以根据需求来确定是否需要加上
    if (sDate === eDate) {
      return 1;
    }
    const days = (eDate - sDate) / (1 * 24 * 60 * 60 * 1000);
    return days;
    // const d1 = "1900-01-01";
    // const d2 = "2021-03-22";
    // console.log(days); // 输出结果为44275
  }
  const start_day = "2023-2-13";
  let now_day = `${year}-${mouth}-${day}`;
  const days_between = getDaysBetween(start_day, now_day);
  let week_now = Math.trunc(days_between / 7) + 1;
  // console.log(week_now);

  const week = document.getElementById("week");
  week.textContent = `第${week_now}周`;

  dif_week(week_now);
  //1是单周，0是双周
  //现在处理棘手的周五下午
  jz_fri_switch(week_now);
};
const dif_week = function (week_now) {
  let week_type = week_now % 2;
  //双周的改变
  if (week_type === 0) {
    document.getElementById("even").classList.toggle("no-course");
    document.querySelector(".switch").classList.toggle("skq");
    document.querySelector(".switch").classList.toggle("zjm");
    document.getElementById("course-name-switch").textContent = "数字图像处理";
  }
};

const jz_fri_switch = function (week_num) {
  const theroyclass = [1, 2, 3, 4, 6, 8, 10, 12];
  for (let i of theroyclass) {
    if (i === week_num) {
      document.getElementById("jz-switch").textContent = "基础楼208";
      break;
    } else {
      document.getElementById("jz-switch").textContent = "东8-303";
    }
  }
};
getDate();
