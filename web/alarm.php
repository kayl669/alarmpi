<?php
	if( 'POST' == $_SERVER[ 'REQUEST_METHOD' ]) :
		header('Content-Type: application/json');
		header('Pragma: no-cache'); // HTTP 1.0.
		header('Expires: 0'); // Proxies.
		header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
		header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
		header('Access-Control-Max-Age: 1000');

		if(isset($_POST['submit'])) :
			shell_exec("sudo pkill -9 mpg123");
			$output = shell_exec('sudo /usr/bin/crontab  -l');
			sleep(2);
			$your_array = explode(PHP_EOL, $output);
			array_pop($your_array);
			$line = array_pop($your_array);
			if(strpos($line, "sound_the_alarm") !== False) {
                $your_array[] = str_replace(' ', " ", $_POST['submit'] . ' ') . "/home/pi/alarmpi/sound_the_alarm.py".PHP_EOL;
                file_put_contents('/var/tmp/crontab.txt', implode(PHP_EOL, $your_array));
                sleep(2);
                shell_exec('sudo /usr/bin/crontab /var/tmp/crontab.txt');
			}
			echo json_encode($_POST['submit']);
		elseif (isset($_POST['StopApp'])) :
			shell_exec("sudo pkill -9 " . $_POST['StopApp']);
			echo json_encode(true);
		elseif (isset($_POST['Alarm'])) :
			exec("sudo python /home/pi/alarmpi/sound_the_alarm.py");
			echo json_encode(true);
		endif;
		die();
	endif;

?>
