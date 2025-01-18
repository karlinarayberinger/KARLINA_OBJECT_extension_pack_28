/**
 * file: sound_track_looper_two.js
 * type: JavaScript
 * author: karbytes
 * date: 18_JANUARY_2025
 * license: PUBLIC_DOMAIN
 */

let track_count = 1; // This global variable is used to keep track how many sound track file menus are added to the application user interface.

/**
 * Dynamically add a new sound track menu to the application web page (and increment the global variable named track_count).
 * 
 * Assume this function is called in response to the add_another_sound_file_menu() button being clicked.
 */
function add_another_sound_file_menu() {
	try {
        let sound_file_menu_area = document.getElementById("sound_file_menu_area");

        // Create a new paragraph (i.e. <p>) element.
        let new_paragraph = document.createElement("p");

        // Create a new menu (i.e. <select>) element.
        let new_select = document.createElement("select");
        new_select.id = "sound_file_menu_" + track_count;

        // Populate the <select> with menu options.
        new_select.innerHTML = get_menu_options();

        // Append the <select> to the <p>.
        new_paragraph.appendChild(new_select);

        // Append the <p> to the menu area.
        sound_file_menu_area.appendChild(new_paragraph);

        // Increment the track count by one.
        track_count += 1;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of add_another_sound_file_menu(): " + e);
	}
}

/**
 * Get the Number of milliseconds which have elapsed since the Unix Epoch.
 * 
 * The Unix Epoch is 01_JANUARY_1970 at midnight (Coordinated Universal Time (UTC)).
 * 
 * @return {String} message displaying the time at which this function was called.
 */
function generate_time_stamp() {
 	const milliseconds_elapsed_since_unix_epoch = Date.now();
 	return milliseconds_elapsed_since_unix_epoch + " milliseconds since midnight on 01_JANUARY_1970.";
}

/**
 * Generate an HTML formatted string which represents the list of OPTIONs displayed by a SELECT menu.
 * 
 * By clicking on the SELECT element, a scrollable list of OPTIONs will appear.
 * 
 * @return {String} a sequence of characters representing some natural number of OPTIONs inside of a SELECT menu.
 */
function get_menu_options() {
    let file_path_root = 'http://qkbrwfubnh4knc6kkhx6uepccavpwezdf2al7w2quepe3qociegsi3yd.onion/KARBYTES_BLOG_APPS/SOUND_TRACK_LOOP_COUNTER_TWO/';
    let HTML_string = '';
    
    // Define the list of sound files and their display names.
    const sound_files = [
        'frogs_croaking_in_castro_valley_california_21_april_2022.mp3',
        'coyote_vocalizations_01_july_2023.mp3',
        'karbytes_drums_castro_valley_california_12_december_2022.mp3',
        'drums_karbytes_10_september_2023_part_0.mp3',
        'karbytes_guitar_castro_valley_california_12_december_2022.mp3',
        'karbytes_guitar_13_may_2023.mp3',
        'karbytes_guitar_07_june_2023.mp3',
        'karbytes_guitar_16_october_2023.mp3',
        'karbytes_drums_20_october_2023.mp3'
    ];
    
    // Build the HTML string for each sound file
    sound_files.forEach((file, index) => {
        const selected = index === 0 ? ' selected' : ''; // Make the first option selected.
        HTML_string += `<option value="${file_path_root + file}"${selected}>${file}</option>`;
    });

    return HTML_string;
}

/**
 * Return the value of the selected menu OPTION of a SELECT menu element.
 * 
 * @param {String} select_menu_identifier is the identifier (id) of a SELECT HTML element.
 * 
 * @return {String} the value of the selected menu OPTION.
 */
function get_selected_menu_option_value(select_menu_identifier) {
	try {
		let menu_object = {}, options_array = [], selected_option_index = 0, selected_option_object = {}, selected_option_value;
		menu_object = document.getElementById(select_menu_identifier);
		options_array = menu_object.options;
		selected_option_index = menu_object.selectedIndex;
		selected_option_object = options_array[selected_option_index];
		selected_option_value = selected_option_object.value
		return selected_option_value;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of get_selected_menu_option(select_menu_identifier): " + e);
	}
}

/**
 * Assume that this function is called whenever the web page file is opened or refreshed by a web browser.
 * 
 * Display a time-stamped message which indicates the time at which the web page was opened as GREEN text inside the DIV at the bottom of the web page.
 * 
 * Set the CYAN SPAN text which displays the number of seconds elapsed after the start_sound_track_looper() button is clicked to the value 0.
 * 
 * Set the CYAN SPAN text which displays the number of times the selected audio track is played to the value 0.
 * 
 * Populate the sound file SELECT menu with multiple sound file OPTIONs.
 * 
 * Set the start_sound_track_looper() button to be visible rather than hidden to the application end user.
 * 
 * If a runtime error occurs, use the try-catch block to perform exception handling by displaying a relevant web console message.
 */
function load_web_page() {
	try {
		const message = "The web page was loaded by the web browser at time: " + generate_time_stamp();
		document.getElementById("console_display").innerHTML = message;
		document.getElementById("seconds_elapsed_display").innerHTML = "0";
		document.getElementById("loops_completed_display").innerHTML = "0";
		document.getElementById("sound_file_menu_0").innerHTML = get_menu_options();
		document.getElementById("file_selected_display").innerHTML = get_selected_menu_option_value("sound_file_menu_0");
		document.getElementById("the_button").style.display = "block";
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of load_web_page(): " + e);
	}
}

/**
 * Assume that this function is called by the event of the start_sound_track_looper() button being clicked.
 * 
 * Hide the start_sound_track_looper() button from the web page after that button is clicked.
 * 
 * Append a time-stamped message which indicates the time at which the button was clicked as green text to the DIV content at the bottom of the web page.
 * 
 * Set the CYAN SPAN text which displays the number of seconds elapsed after the start_sound_track_looper() button is clicked to the value 0.
 * 
 * Set the CYAN SPAN text which displays the number of times the selected audio track is played to the value 0.

 * Start playing the selected sound file for an indefinite number of times and start incrementing the number of seconds elapsed and start incrementing the number of audio track loops played.
 * 
 * If a runtime error occurs, use the try-catch block to perform exception handling by displaying a relevant web console message.
 */
function start_sound_track_looper() {
	try {
		const message = "The button was clicked at time: " + generate_time_stamp();
		let elapsed_seconds_display = document.getElementById("seconds_elapsed_display");
		let loops_completed_display = document.getElementById("loops_completed_display");
		let file_selected_display = document.getElementById("file_selected_display");
		let selected_file_name = get_selected_menu_option_value("sound_file_menu_0");
		let button = document.getElementById("the_button");
		let audio_file = undefined;
		let loop_length = undefined;
		let action = undefined;
		let number_of_seconds = 0;
		let number_of_loops = 0;
		document.getElementById("console_display").innerHTML += (('') + message + (''));
		button.style.display = "none";
		elapsed_seconds_display.innerHTML = "0";
		loops_completed_display.innerHTML = "0";
		file_selected_display.innerHTML = selected_file_name;
		audio_file = new Audio(selected_file_name);
		loop_length = audio_file.duration;
		audio_file.play(); 
		action = setInterval( 
			function() { // Call the anonymous function once per every 1000 milliseconds.
				number_of_seconds = parseInt(elapsed_seconds_display.innerHTML);
				number_of_loops = parseInt(loops_completed_display.innerHTML);
				number_of_seconds += 1
				if (audio_file.ended) { 
					number_of_loops += 1;
					audio_file.play();
				}
				elapsed_seconds_display.innerHTML = number_of_seconds;
				loops_completed_display.innerHTML = number_of_loops;
			}, 1000 // milliseconds per interval
		);
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of start_sound_track_looper(): " + e);
	}
}
