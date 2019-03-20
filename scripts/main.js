var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var r = new XMLHttpRequest();
r.open("POST", "path/to/api", true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  alert("Success: " + r.responseText);
};
r.send("banana=yellow");
var sequence = [1, 1, 2, 3, 5, 8, 13];
var random = ['tree', 795, [0, 1, 2]];
shopping[0];
shopping[0] = 'tahini';
shopping;
random[2][2];