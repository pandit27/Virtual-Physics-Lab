var get_select = document.getElementById("get_select"),
  type_select = document.getElementById("type_select"),
  input_a = document.getElementById("input_a"),
  input_b = document.getElementById("input_b"),
  input_a_label = document.getElementById("input_a_label"),
  input_b_label = document.getElementById("input_b_label"),
  res = document.getElementById("res"),
  electronic_log = document.getElementById("electronic_logo"),
  reset = document.getElementById("clear_data");

function create_element(element_type, text_node, put_in, hidden_and_selected) {
  "use strict";
  var el = document.createElement(element_type),
    txt = document.createTextNode(text_node);
  el.appendChild(txt);
  put_in.appendChild(el);
  if (hidden_and_selected === 1) {
    el.setAttribute("hidden", "");
    el.setAttribute("selected", "");
  }
}

function change_lable(a, b) {
  "use strict";
  input_a_label.innerHTML = a;
  input_b_label.innerHTML = b;
}

function clear() {
  "use strict";
  input_a.value = "";
  input_b.value = "";
}

function run_calc() {
  "use strict";
  var r = null,
    v = null,
    i = null,
    p = null,
    calc;

  if (get_select.value === "Resistance") {
    if (type_select.value === "Voltage And Current") {
      v = Number(input_a.value);
      i = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.resistance_v_i() + " Ohm";
    } else if (type_select.value === "Voltage And Power") {
      v = Number(input_a.value);
      p = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.resistance_v_p() + " Ohm";
    } else if (type_select.value === "Power And Current") {
      p = Number(input_a.value);
      i = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.resistance_p_i() + " Ohm";
    }
  } else if (get_select.value === "Voltage") {
    if (type_select.value === "Resistance And Current") {
      r = Number(input_a.value);
      i = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.voltage_r_i() + " Volt";
    } else if (type_select.value === "Power And Current") {
      p = Number(input_a.value);
      i = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.voltage_p_i() + " Volt";
    } else if (type_select.value === "Power And Resistance") {
      p = Number(input_a.value);
      r = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.voltage_p_r() + " Volt";
    }
  } else if (get_select.value === "Current") {
    if (type_select.value === "Voltage And Resistance") {
      v = Number(input_a.value);
      r = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.current_v_r() + " Amp";
    } else if (type_select.value === "Power And Voltage") {
      p = Number(input_a.value);
      v = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.current_p_v() + " Amp";
    } else if (type_select.value === "Power And Resistance") {
      p = Number(input_a.value);
      r = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.current_p_r() + " Amp";
    }
  } else if (get_select.value === "Power") {
    if (type_select.value === "Voltage And Current") {
      v = Number(input_a.value);
      i = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.power_v_i() + " Watt";
    } else if (type_select.value === "Resistance And Current") {
      r = Number(input_a.value);
      i = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.power_r_i() + " Watt";
    } else if (type_select.value === "Voltage And Resistance") {
      v = Number(input_a.value);
      r = Number(input_b.value);
      calc = new ohm_law(r, v, i, p);
      return calc.power_v_r() + "Watt";
    }
  }
}

get_select.onchange = function () {
  "use strict";

  input_a_label.innerHTML = "- - - - - -";
  input_b_label.innerHTML = "- - - - - -";
  input_a.setAttribute("disabled", "");

  switch (get_select.value) {
    case "Resistance":
      type_select.innerHTML = "";
      create_element("option", "", type_select, 1);
      create_element("option", "Voltage And Current", type_select);
      create_element("option", "Voltage And Power", type_select);
      create_element("option", "Power And Current", type_select);
      electronic_log.setAttribute("src", "images/ohm_logo.png");
      clear();
      break;
    case "Voltage":
      type_select.innerHTML = "";
      create_element("option", "", type_select, 1);
      create_element("option", "Resistance And Current", type_select);
      create_element("option", "Power And Current", type_select);
      create_element("option", "Power And Resistance", type_select);
      electronic_log.setAttribute("src", "images/volt_logo.png");
      clear();
      break;
    case "Current":
      type_select.innerHTML = "";
      create_element("option", "", type_select, 1);
      create_element("option", "Voltage And Resistance", type_select);
      create_element("option", "Power And Voltage", type_select);
      create_element("option", "Power And Resistance", type_select);
      electronic_log.setAttribute("src", "images/amp_logo.png");
      clear();
      break;
    case "Power":
      type_select.innerHTML = "";
      create_element("option", "", type_select, 1);
      create_element("option", "Voltage And Current", type_select);
      create_element("option", "Resistance And Current", type_select);
      create_element("option", "Voltage And Resistance", type_select);
      electronic_log.setAttribute("src", "images/power_logo.png");
      clear();
      break;
  }
};

type_select.onchange = function () {
  "use strict";

  input_a.removeAttribute("disabled");
  input_b.removeAttribute("disabled");

  if (get_select.value === "Resistance") {
    if (type_select.value === "Voltage And Current") {
      change_lable("Voltage", "Current");
    } else if (type_select.value === "Voltage And Power") {
      change_lable("Voltage", "Power");
    } else if (type_select.value === "Power And Current") {
      change_lable("Power", "Current");
    }
    clear();
  } else if (get_select.value === "Voltage") {
    if (type_select.value === "Resistance And Current") {
      change_lable("Resistance", "Current");
    } else if (type_select.value === "Power And Current") {
      change_lable("Power", "Current");
    } else if (type_select.value === "Power And Resistance") {
      change_lable("Power", "Resistance");
    }
    clear();
  } else if (get_select.value == "Current") {
    if (type_select.value === "Voltage And Resistance") {
      change_lable("Voltage", "Resistance");
    } else if (type_select.value == "Power And Voltage") {
      change_lable("Power", "Voltage");
    } else if (type_select.value === "Power And Resistance") {
      change_lable("Power", "Resistance");
    }
    clear();
  } else if (get_select.value === "Power") {
    if (type_select.value === "Voltage And Current") {
      change_lable("Voltage", "Current");
    } else if (type_select.value === "Resistance And Current") {
      change_lable("Resistance", "Current");
    } else if (type_select.value === "Voltage And Resistance") {
      change_lable("Voltage", "Resistance");
    }
    clear();
  }
};

input_a.onkeyup = function () {
  "use strict";
  res.innerHTML = "result = " + run_calc();
};
input_b.onkeyup = function () {
  "use strict";
  res.innerHTML = "result = " + run_calc();
};

reset.onclick = function () {
  clear();
};
