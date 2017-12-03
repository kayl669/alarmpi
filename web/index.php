<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="application-name" content="Pi Dashboard"/>

  <title>Pi Dashboard Default</title>

  <!-- Template-specific styles -->
  <link rel="stylesheet" type="text/css" href="css/style.css"/>
</head>
<body>
<div id="wrapper">
  <table id="display">
    <tbody>
    <tr>
      <td class="currently" id="currently">Actuellement
        <div class="icon"></div>
        <div class="desc"></div>
        <div class="temp"></div>
        <div class="highTemp">Max: <span class="high"></span></div>
        <div class="lowTemp">Min: <span class="low"></span></div>
      </td>
      <td class="forecast" id="forecast1">
        <div class="hour"></div>
        <div class="icon"></div>
        <div class="desc"></div>
        <div class="temp"></div>
        <div class="highTemp">Max: <span class="high"></span></div>
        <div class="lowTemp">Min: <span class="low"></span></div>
      </td>
      <td class="forecast" id="forecast2">
        <div class="hour"></div>
        <div class="icon"></div>
        <div class="desc"></div>
        <div class="temp"></div>
        <div class="highTemp">Max: <span class="high"></span></div>
        <div class="lowTemp">Min: <span class="low"></span></div>
      </td>
      <td class="forecast" id="forecast3">
        <div class="hour"></div>
        <div class="icon"></div>
        <div class="desc"></div>
        <div class="temp"></div>
        <div class="highTemp">Max: <span class="high"></span></div>
        <div class="lowTemp">Min: <span class="low"></span></div>
      </td>
      <td class="forecast" id="forecast4">
        <div class="hour"></div>
        <div class="icon"></div>
        <div class="desc"></div>
        <div class="temp"></div>
        <div class="highTemp">Max: <span class="high"></span></div>
        <div class="lowTemp">Min: <span class="low"></span></div>
      </td>
      <td class="forecast" id="forecast5">
        <div class="hour"></div>
        <div class="icon"></div>
        <div class="desc"></div>
        <div class="temp"></div>
        <div class="highTemp">Max: <span class="high"></span></div>
        <div class="lowTemp">Min: <span class="low"></span></div>
      </td>
      <td class="time">
        <table>
          <tr>
            <td>
              <div id="time"></div>
              <div id="date"></div>
              <div id="ephemeride"></div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td class="news" id="news1" colspan="7">
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
      <td class="news" id="news2" colspan="7">
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
      <td class="news" id="news3" colspan="7">
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
      <td class="news" id="news4" colspan="7">
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
      <td class="news" id="news5" colspan="7">
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
<script src="js/build/moment.min.js"></script>
<script src="js/build/fr.js"></script>
<!-- -->
<script src="js/build/newsapi_browserify.js"></script>
<script src="js/weather.js"></script>
</body>
</html>
