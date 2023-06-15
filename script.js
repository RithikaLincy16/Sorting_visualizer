let numBars = document.getElementById("data_size_input").value;

document.getElementById("data_size_submit").addEventListener("click", function() {
  numBars = document.getElementById("data_size_input").value;
  resetSketch();
});



function resetSketch() {
  bars = [];
  let w = Math.floor((width - 20) / numBars);
  for (let i = 0; i < numBars; i++) {
    let h = Math.floor(Math.random() * (height - 50) + 1);
    let x = i * w + 10;
    let y = height - h - 10;
    bars.push(new Bar(x, y, w, h));
  }
}
