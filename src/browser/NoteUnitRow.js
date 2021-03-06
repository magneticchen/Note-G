
'use strict';

function NoteUnitRow(settings) {
  this._note_code_int = settings.note_code_int;
  this._tone_duration_time_units = settings.tone_duration_time_units;
  this._rest_duration_time_units = settings.rest_duration_time_units;
  this._button_instruction_list = settings.button_instruction_list;
  this._button_instruction_checkbox_list = [];
  this._play_k_notes_int = settings.play_k_notes_int;
  this._audio_context = settings.audio_context;
  this._insert_before = settings.insert_before;
  this._time_unit = settings.time_unit;
  this._to_be_remove = false;
}

NoteUnitRow.prototype.initialize = function(animation_container_dom_object, daf)  {
  this._animation_container_dom_object = animation_container_dom_object;
  this._dom_object = document.createElement("tr");
  // this._dom_object.className = "";
  const th_0 = document.createElement("th");
  const select_0 = document.createElement("select");
  for(let note_code_int in Notes) {
    const option = document.createElement("option");
    option.text = Notes[note_code_int][1];
    option.value = note_code_int;
    select_0.add(option);
  }

  select_0.selectedIndex = this._note_code_int;

  select_0.addEventListener('change', (event) => {
    this._note_code_int = event.target.value;
  });
  th_0.appendChild(select_0);

  const th_1 = document.createElement("th");
  const input_1 = document.createElement("input");
  input_1.setAttribute("type", "number");
  input_1.setAttribute("min", 1);
  input_1.setAttribute("max", 256);
  input_1.setAttribute("value", this._tone_duration_time_units);
  input_1.addEventListener('change', (event) => {
    this._tone_duration_time_units = event.target.value;
  });
  th_1.appendChild(input_1);

  const th_2 = document.createElement("th");
  const input_2 = document.createElement("input");
  input_2.setAttribute("type", "number");
  input_2.setAttribute("min", 0);
  input_2.setAttribute("max", 255);
  input_2.setAttribute("value", this._rest_duration_time_units);
  input_2.addEventListener('change', (event) => {
    this._rest_duration_time_units = event.target.value;
  });
  th_2.appendChild(input_2);

  const th_3 = document.createElement("th");
  const check_box_3_0 = document.createElement("input");
  check_box_3_0.style.boxShadow = ' 0 0 5px blue';
  check_box_3_0.style.minHeight = '0px';
  check_box_3_0.setAttribute("type", "checkbox");
  const check_box_3_1 = document.createElement("input");
  check_box_3_1.setAttribute("type", "checkbox");
  check_box_3_1.style.boxShadow = '0 0 5px red';
  check_box_3_1.style.minHeight = '0px';
  const check_box_3_2 = document.createElement("input");
  check_box_3_2.setAttribute("type", "checkbox");
  check_box_3_2.style.boxShadow = ' 0 0 5px green';
  check_box_3_2.style.minHeight = '0px';

  const check_box_3_3 = document.createElement("input");
  check_box_3_3.setAttribute("type", "checkbox");
  check_box_3_3.style.boxShadow = '0 0 5px yellow';
  check_box_3_3.style.minHeight = '0px';

  check_box_3_0.checked = this._button_instruction_list[0];
  check_box_3_0.addEventListener('change', (event) => {
    this._button_instruction_list[0] = check_box_3_0.checked;
  });
  check_box_3_1.checked = this._button_instruction_list[1];
  check_box_3_1.addEventListener('change', (event) => {
    this._button_instruction_list[1] = check_box_3_1.checked;
  });
  check_box_3_2.checked = this._button_instruction_list[2];
  check_box_3_2.addEventListener('change', (event) => {
    this._button_instruction_list[2] = check_box_3_2.checked;
  });
  check_box_3_3.checked = this._button_instruction_list[3];
  check_box_3_3.addEventListener('change', (event) => {
    this._button_instruction_list[3] = check_box_3_3.checked;
  });

  th_3.appendChild(check_box_3_0);
  th_3.appendChild(check_box_3_1);
  th_3.appendChild(check_box_3_2);
  th_3.appendChild(check_box_3_3);
  this._button_instruction_checkbox_list.push(check_box_3_0);
  this._button_instruction_checkbox_list.push(check_box_3_1);
  this._button_instruction_checkbox_list.push(check_box_3_2);
  this._button_instruction_checkbox_list.push(check_box_3_3);

  const th_4 = document.createElement("th");
  const input_4 = document.createElement("input");
  input_4.setAttribute("type", "number");
  input_4.setAttribute("min", 1);
  input_4.setAttribute("max", 256);
  input_4.setAttribute("value", this._play_k_notes_int);
  input_4.addEventListener('change', (event) => {
    this._play_k_notes_int = event.target.value;
  });
  th_4.appendChild(input_4);

  const th_5 = document.createElement("th");
  const button_5_0 = document.createElement("button");
  button_5_0.innerHTML = "delete";
  button_5_0.addEventListener('click', () => {
    this._to_be_remove = true;
  });
  const button_5_1 = document.createElement("button");
  button_5_1.innerHTML = "duplicate";
  button_5_1.addEventListener('click', () => {
    daf.createGraphicalObject(new NoteUnitRow({
      note_code_int: this._note_code_int,
      tone_duration_time_units: this._tone_duration_time_units,
      rest_duration_time_units: this._rest_duration_time_units,
      // button_instruction_list: [
      //   this._button_instruction_list[0],
      //   this._button_instruction_list[1],
      //   this._button_instruction_list[2],
      //   this._button_instruction_list[3],
      // ],
      button_instruction_list: [...this._button_instruction_list],
      time_unit: this._time_unit,
      play_k_notes_int: this._play_k_notes_int,
      audio_context: this._audio_context,
      insert_before: this._dom_object
    }));
  });
  const button_5_2 = document.createElement("button");
  button_5_2.innerHTML = "tone";
  button_5_2.addEventListener('click', () => {
    this.toneNote(this._time_unit);
  });
  th_5.appendChild(button_5_0);
  th_5.appendChild(document.createTextNode(' '));
  th_5.appendChild(button_5_1);
  th_5.appendChild(document.createTextNode(' '));
  th_5.appendChild(button_5_2);

  this._dom_object.appendChild(th_0);
  this._dom_object.appendChild(th_1);
  this._dom_object.appendChild(th_2);
  this._dom_object.appendChild(th_3);
  this._dom_object.appendChild(th_4);
  this._dom_object.appendChild(th_5);

  if(this._insert_before) {
    animation_container_dom_object.insertBefore(this._dom_object, this._insert_before);
    this._insert_before = null;
  }
  else {
    animation_container_dom_object.appendChild(this._dom_object);
  }
  this._dom_object.NoteUnitRow = this;

  this._dom_object.animate([
    // keyframes
    {
      backgroundColor: 'green',
      opacity: 0
    },
    // keyframes
    {
    }
  ], {
    duration: 400
  });
}

NoteUnitRow.prototype.nextLogicalTick = function(logical_ticks_interval_ms, global_logical_dynamic_parameters, remove_myself)  {
  this._time_unit = global_logical_dynamic_parameters.time_unit;
  if(this._to_be_remove) {
    this._to_be_remove = false;
    remove_myself();
    this._dom_object.animate([
      // keyframes
      {
        backgroundColor: 'red'
      },
      // keyframes
      {
      }
    ], {
      duration: 100
    });
    setTimeout(() => {
      this._dom_object.parentNode.removeChild(this._dom_object);
    }, 100);
  }
}

NoteUnitRow.prototype.updateGraphic = function(frames_per_second) {

}

NoteUnitRow.prototype.toggleButtonInstruction = function(button_index) {
  const value = !this._button_instruction_list[button_index];
  this._button_instruction_list[button_index] = value;
  this._button_instruction_checkbox_list[button_index].checked = value;
}

NoteUnitRow.prototype.toneNote = function(time_unit, callback) {
  setTimeout(callback, (this._rest_duration_time_units+this._tone_duration_time_units)*time_unit);
  const oscillator = this._audio_context.createOscillator();
  oscillator.type = 'triangle';
  oscillator.frequency.value = Notes[this._note_code_int][0];
  oscillator.connect(this._audio_context.destination);
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
    this._dom_object.animate([
      // keyframes
      {
        backgroundColor: 'red',
        opacity: 0
      },
      // keyframes
      {
      }
    ], {
      duration: this._rest_duration_time_units*time_unit
    });
    setTimeout(() => {

    }, this._rest_duration_time_units*time_unit);
  }, this._tone_duration_time_units*time_unit);
  this._dom_object.animate([
    // keyframes
    {
      backgroundColor: 'green',
      opacity: 0
    },
    // keyframes
    {
    }
  ], {
    duration: this._tone_duration_time_units*time_unit
  });
  this._dom_object.scrollIntoView({ block: 'center' });
}
