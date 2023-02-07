class ohm_law {
  constructor(r = 1, v = 1, i = 1, p = 1) {
    this.meaning = "r = resistance | v = voltage | i = current | p = power";
    this.r = r;
    this.v = v;
    this.i = i;
    this.p = p;
  }

  show_values() {
    return (
      "resistance = " +
      this.r +
      " Ohm | voltage = " +
      this.v +
      " V | current = " +
      this.i +
      " A | power = " +
      this.p +
      " w"
    );
  }

  help() {
    return "### class methods ### \n\n\
** show_values** \n\
	show all value inputed in this class \n\
\n** resistance methods ** \n\n\
	resistance_v_i : get resistance by voltage and current \n\
	resistance_v_p : get resistance by voltage and power \n\
	resistance_p_i : get resistance by power and current \n\
\n** voltage methods ** \n\n\
	voltage_r_i : get votage by resistance and current \n\
	voltage_p_i : get votage by power and current \n\
	voltage_r_i : get votage by resistance and current \n\
\n** current methods ** \n\n\
	current_v_r : get current by voltage and resistance \n\
	current_p_v : get current by power and voltage \n\
	current_p_r : get current by power and resistance\n\
\n** power methods ** \n\n\
	power_v_i : get power by voltage and current\n\
	power_r_i : get power by resistance and current\n\
	power_v_r : get power by volage and resistance";
  }

  resistance_v_i() {
    return this.v / this.i;
  }

  resistance_v_p() {
    return Math.pow(this.v, 2) / this.p;
  }

  resistance_p_i() {
    return this.p / Math.pow(this.i, 2);
  }

  voltage_r_i() {
    return this.r * this.i;
  }

  voltage_p_i() {
    return this.p / this.i;
  }

  voltage_p_r() {
    return Math.sqrt(this.p * this.r);
  }

  current_v_r() {
    return this.v / this.r;
  }

  current_p_v() {
    return this.p / this.v;
  }

  current_p_r() {
    return Math.sqrt(this.p / this.r);
  }

  power_v_i() {
    return this.v * this.i;
  }

  power_r_i() {
    return this.r * Math.pow(this.i, 2);
  }

  power_v_r() {
    return Math.pow(this.v, 2) / this.r;
  }
}
