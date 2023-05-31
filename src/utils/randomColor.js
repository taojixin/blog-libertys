const colorList = [
  { id: 1, color: "rgb(97, 97, 208)", bgColor: "rgb(133, 198, 223)" },
  { id: 2, color: "rgb(134, 134, 65)", bgColor: "rgb(242, 242, 168)" },
  { id: 3, color: "rgb(31, 91, 219)", bgColor: "rgba(31, 91, 219, .3)" },
  { id: 4, color: "rgb(222, 26, 36)", bgColor: "rgba(222, 26, 36, .3)" },
  { id: 5, color: "rgb(140, 222, 26)", bgColor: "rgba(140, 222, 26, .3)" },
  { id: 6, color: "rgb(26, 222, 85)", bgColor: "rgba(26, 222, 85, .3)" },
  { id: 7, color: "rgb(169, 19, 192)", bgColor: "rgba(169, 19, 192, .3)" },
  { id: 8, color: "rgb(15, 227, 213)", bgColor: "rgba(15, 227, 213, .3)" },
  { id: 9, color: "rgb(64, 36, 173)", bgColor: "rgba(64, 36, 173, .3)" },
  { id: 10, color: "rgb(139, 14, 139)", bgColor: "rgba(139, 14, 139, .3)" },
  { id: 11, color: "rgb(21, 206, 200)", bgColor: "rgba(21, 206, 200, .3)" },
  { id: 12, color: "rgb(138, 13, 100)", bgColor: "rgba(138, 13, 100, .3)" },
  { id: 13, color: "rgb(83, 211, 32)", bgColor: "rgba(83, 211, 32, .3)" },
  { id: 14, color: "rgb(222, 26, 170)", bgColor: "rgba(222, 26, 170, .3)" },
];


export const randomColor = function() {
  return colorList[Math.floor(Math.random() * colorList.length)]
}
