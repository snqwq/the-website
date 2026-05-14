let countlabel = document.getElementById("count-label");
let countbar = document.getElementById("count-bar");
let threadlabel = document.getElementById("thread-label");
let threadbutton = document.getElementById("thread-button");
let rambutton = document.getElementById("ram-button");
let consoletext = document.getElementById("console-text");

let tick_speed = 500;
let draw_speed = 100;

let ram_level = 1;
let execution_level = 1;

let bits = 0;
let ram = 2 ** ram_level;
let threads = 0;

let thread_cost = 10;
let ram_cost = Math.floor(ram * 0.75);

function roundToNearestHundredth(number) {
  return Math.round(number * 100) / 100;
}

function draw() {
  countbar.max = ram;
  countbar.value = bits;
  
  if (bits > 10 ** 30) {
    countlabel.textContent = roundToNearestHundredth(bits / 10 ** 30) + " Qbits";

  } else if (bits > 10 ** 27) {
    countlabel.textContent = roundToNearestHundredth(bits / 10 ** 27) + " Rbits";

  }  else if (bits > 10 ** 24) {
    countlabel.textContent = roundToNearestHundredth(bits / 10 ** 24) + " Ybits";

  }  else if (bits > 10 ** 21) {
    countlabel.textContent = roundToNearestHundredth(bits / 10 ** 21) + " Zbits";

  }  else if (bits > 10 ** 18) {
    countlabel.textContent = roundToNearestHundredth(bits / 10 ** 18) + " Ebits";

  }  else if (bits > 10 ** 15) {
    countlabel.textContent = roundToNearestHundredth(bits / 10 ** 15) + " Pbits";

  }  else if (bits > 10 ** 12) {
    countlabel.textContent = roundToNearestHundredth(bits / 10 ** 12) + " Tbits";

  }else if (bits > 10 ** 9) {
    countlabel.textContent = roundToNearestHundredth(bits / 10 ** 9) + " Gbits";

  } else if (bits > 10 ** 6) {
    countlabel.textContent = roundToNearestHundredth(bits / 10 ** 6) + " Mbits";

  } else if (bits > 10 ** 3) {
    countlabel.textContent = roundToNearestHundredth(bits / 10 ** 3) + " Kbits";

  } else {
    countlabel.textContent = bits + " bits";

  }

  threadlabel.textContent = threads + " threads";
  threadbutton.textContent = "buy thread (" + thread_cost + ")";

  rambutton.textContent = "upgrade ram (" + ram_cost + ")";
}

function clicked() {
  if (bits < ram) {
    bits += execution_level;
  }
}

function console_print(message) {
  consoletext.textContent += message + "\n";
}

function upgrade(type) {
  if (type == "ram") {
    if (bits >= ram_cost) {
      bits -= ram_cost;
      ram_level += 1;
      ram = 2 ** ram_level;
      ram_cost = Math.floor(ram * 0.75);
    }
  } // else if (true) {
  // }
}

function buy_thread() {
  if (bits >= thread_cost) {
    bits -= thread_cost;
    thread_cost += Math.round(thread_cost / 4);
    threads += 1;
  }
}

function cheat_bits(num) {
  bits += num;
}

function cheat_ram(num) {
  ram_level += num;
  ram = 2 ** ram_level;
  ram_cost = Math.floor(ram * 0.75);
}


function run_threads() {
  if (bits < ram) {
    bits += threads;
  }
}

function tick() {
  run_threads();
  if (bits > ram) {
    bits = ram;
  }
}

setInterval(draw, draw_speed);
setInterval(tick, tick_speed);
