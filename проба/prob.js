let arr = ["к", "и", "ш", "м", "и", "ш"];
let count = 0;
let st = "";
String.prototype.count = function (s1) {
  return (
    (this.length - this.replace(new RegExp(s1, "g"), "").length) / s1.length
  );
};
for (let a1 = 0; a1 < 6; a1++) {
  for (let a2 = 0; a2 < 6; a2++) {
    for (let a3 = 0; a3 < 6; a3++) {
      for (let a4 = 0; a4 < 6; a4++) {
        for (let a5 = 0; a5 < 6; a5++) {
          for (let a6 = 0; a6 < 6; a6++) {
            st = arr[a1] + arr[a2] + arr[a3] + arr[a4] + arr[a5] + arr[a6];
            console.log(st);
            if (
              !st.includes("шш") &&
              !st.includes("мм") &&
              st.count("к") === 1 &&
              st.count("и") === 1 &&
              st.count("ш") === 1 &&
              st.count("м") === 1
            ) {
              count++;
            }
            st = "";
          }
        }
      }
    }
  }
}
console.log(count);
