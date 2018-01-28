<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="application-name" content="Pi Dashboard"/>
    <title>Pi Dashboard Default</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/build/jquery-clockpicker.css">
</head>
<body>
<?php
    $output = shell_exec('sudo /usr/bin/crontab  -l');
    sleep(2);
    $your_array = explode(PHP_EOL, $output);
    array_pop($your_array);
    $line = array_pop($your_array);
    $minute = "*";
    $hour = "*";
    $dayOfWeek = "*";
    if(strpos($line, "sound_the_alarm") !== False) {
        $line_array = explode(" ", $line);
        $minute = $line_array[0];
        $hour = $line_array[1];
        $dayOfWeek = $line_array[4];
    }
?>
<div id="wrapper">
    <table id="display">
        <tbody>
        <tr>
            <td class="currently" id="currently">
                <span class="icon"></span> <i><span class="desc"></span></i>
                <div><span class="temp"></span> &bull; <span class="lowTemp"><span class="low"></span></span>
                    &bull; <span class="highTemp"><span class="high"></span></span></div>
            </td>
            <td class="time">
                <table>
                    <tr>
                        <td>
                            <div id="time"></div>
                            <div id="date"></div>
                            <div id="ephemeride"></div>
                        </td>
                        <td>
                            <div id="sun">
                                <span id="moon"></span>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
            <td class="alarm">
                <form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="post" id="frm">
                    <table id="alarmTable">
                        <tr>
                            <td colspan="3">
                                <span id="Alarm">&nbsp;</span>
                            </td>
                        </tr>
                        <tr>
                            <td width="33%" class="weekCal" align="center">
                                <div id="weekCal"></div>
                            </td>
                            <td width="33%">
                                <div class="input-group clockpicker">
                                    <input id="clockpicker" type="text" style="display: none;" value="<?php if($hour != " *" && $minute != "*") echo
                                    sprintf("%02d",$hour).":".sprintf("%02d",$minute); else echo "00:00";?>">
                                    <a id="clockpickerA" href="#"><?php if($hour != "*" && $minute != "*") echo sprintf("%02d",$hour).":".sprintf("%02d",$minute); else echo "00:00";?></a>
                                </div>
                            </td>
                            <td width="33%">
                                <button class="button center" id="change" name="submit" value="" style="display: none;">Changer</button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <button class="button center" id="AlarmDemo">Faire sonner</button>&nbsp;<button class="button center" id="SoundOff">Arrêter</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </td>
        </tr>
        <tr>
            <td class="news" id="news1" colspan="3">
                <table width="100%">
                    <tr>
                        <td>
                            <div class="newsTitle"></div>
                            <div class="newsDescription"></div>
                        </td>
                        <td>
                            <div class="newsImage"></div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="news" id="news2" colspan="3">
                <table width="100%">
                    <tr>
                        <td>
                            <div class="newsTitle"></div>
                            <div class="newsDescription"></div>
                        </td>
                        <td>
                            <div class="newsImage"></div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="news" id="news3" colspan="3">
                <table width="100%">
                    <tr>
                        <td>
                            <div class="newsTitle"></div>
                            <div class="newsDescription"></div>
                        </td>
                        <td>
                            <div class="newsImage"></div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="news" id="news4" colspan="3">
                <table width="100%">
                    <tr>
                        <td>
                            <div class="newsTitle"></div>
                            <div class="newsDescription"></div>
                        </td>
                        <td>
                            <div class="newsImage"></div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="news" id="news5" colspan="3">
                <table width="100%">
                    <tr>
                        <td>
                            <div class="newsTitle"></div>
                            <div class="newsDescription"></div>
                        </td>
                        <td>
                            <div class="newsImage"></div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>
<script src="js/build/jquery.min.js"></script>
<script type="text/javascript" src="js/build/jquery-clockpicker.js"></script>
<script type="text/javascript" src="js/jquery.weekLine.js"></script>
<script src="js/alarm.js"></script>
<!-- -->
<script src="js/build/newsapi_browserify.js"></script>
<script src="js/weather.js"></script>
<script src="js/build/moment.min.js"></script>
<script src="js/build/fr.js"></script>
<script type="text/javascript">
    <?php if($dayOfWeek != "*") echo "var dayOfWeek = '".str_replace(array("0", "1", "2", "3", "4", "5", "6"), array("Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"), $dayOfWeek)."';"; else echo "var dayOfWeek = 'Dim,Lun,Mar,Mer,Jeu,Ven,Sam';"; ?>
</script>
</body>
</html>
