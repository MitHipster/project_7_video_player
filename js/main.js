/*jslint esversion: 6, browser: true*/
/*global window, $, jQuery, alert*/

const videoFile = document.getElementById('training-video');
const timelines = [
  ['t01', 0.240, 4.130],
  ['t02', 4.130, 7.535],
  ['t03', 7.535, 11.270],
  ['t04', 11.270, 13.960],
  ['t05', 13.960, 17.940],
  ['t06', 17.940, 22.370],
  ['t07', 22.370, 26.880],
  ['t08', 26.880, 30.920],
  ['t09', 32.100, 34.730],
  ['t10', 34.730, 39.430],
  ['t11', 39.430, 41.190],
  ['t12', 42.350, 46.300],
  ['t13', 46.300, 49.270],
  ['t14', 49.270, 53.760],
  ['t15', 53.760, 57.780],
  ['t16', 57.780, 60.150]
];

videoFile.addEventListener('timeupdate', (e) => {
  let cTime = e.target.currentTime;

  timelines.forEach( (timeline) => {
    let id = timeline[0];
    let span = document.getElementById(id);
    if (cTime >= timeline[1] && cTime < timeline[2]) {
      console.log(timeline[0]);
      span.className = 'highlight';
    } else {
      console.log(timeline[0]);
      span.className = '';
    }
  });
});
