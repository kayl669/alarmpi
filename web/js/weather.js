(function() {
    let icons = {
        "200": '<i class="wi wi-storm-showers"></i>', //
        "201": '<i class="wi wi-storm-showers"></i>', //
        "202": '<i class="wi wi-storm-showers"></i>', //
        "210": '<i class="wi wi-storm-showers"></i>', //
        "211": '<i class="wi wi-thunderstorm"></i>', //
        "212": '<i class="wi wi-thunderstorm"></i>', //
        "221": '<i class="wi wi-thunderstorm"></i>', //
        "230": '<i class="wi wi-storm-showers"></i>', //
        "231": '<i class="wi wi-storm-showers"></i>', //
        "232": '<i class="wi wi-storm-showers"></i>', //
        "300": '<i class="wi wi-sprinkle"></i>', //
        "301": '<i class="wi wi-sprinkle"></i>', //
        "302": '<i class="wi wi-sprinkle"></i>', //
        "310": '<i class="wi wi-sprinkle"></i>', //
        "311": '<i class="wi wi-sprinkle"></i>', //
        "312": '<i class="wi wi-sprinkle"></i>', //
        "313": '<i class="wi wi-sprinkle"></i>', //
        "314": '<i class="wi wi-sprinkle"></i>', //
        "321": '<i class="wi wi-sprinkle"></i>', //
        "500": '<i class="wi wi-rain"></i>', //
        "501": '<i class="wi wi-rain"></i>', //
        "502": '<i class="wi wi-rain"></i>', //
        "503": '<i class="wi wi-rain"></i>', //
        "504": '<i class="wi wi-rain"></i>', //
        "511": '<i class="wi wi-rain-mix"></i>', //
        "520": '<i class="wi wi-showers"></i>', //
        "521": '<i class="wi wi-showers"></i>', //
        "522": '<i class="wi wi-showers"></i>', //
        "531": '<i class="wi wi-showers"></i>', //
        "600": '<i class="wi wi-snow"></i>', //
        "601": '<i class="wi wi-snow"></i>', //
        "602": '<i class="wi wi-snow"></i>', //
        "611": '<i class="wi wi-sleet"></i>', //
        "612": '<i class="wi wi-sleet"></i>', //
        "615": '<i class="wi wi-rain-mix"></i>', //
        "616": '<i class="wi wi-rain-mix"></i>', //
        "620": '<i class="wi wi-rain-mix"></i>', //
        "621": '<i class="wi wi-rain-mix"></i>', //
        "622": '<i class="wi wi-rain-mix"></i>', //
        "701": '<i class="wi wi-sprinkle"></i>', //
        "711": '<i class="wi wi-smoke"></i>', //
        "721": '<i class="wi wi-day-haze"></i>', //
        "731": '<i class="wi wi-cloudy-gusts"></i>', //
        "741": '<i class="wi wi-fog"></i>', //
        "751": '<i class="wi wi-cloudy-gusts"></i>', //
        "761": '<i class="wi wi-dust"></i>', //
        "762": '<i class="wi wi-smog"></i>', //
        "771": '<i class="wi wi-day-windy"></i>', //
        "781": '<i class="wi wi-tornado"></i>', //
        "800": '<i class="wi wi-day-sunny"></i>', //
        "801": '<i class="wi wi-cloudy"></i>', //
        "802": '<i class="wi wi-cloudy"></i>', //
        "803": '<i class="wi wi-cloudy"></i>', //
        "804": '<i class="wi wi-cloudy"></i>', //
        "900": '<i class="wi wi-tornado"></i>', //
        "901": '<i class="wi wi-hurricane"></i>', //
        "902": '<i class="wi wi-hurricane"></i>', //
        "903": '<i class="wi wi-snowflake-cold"></i>', //
        "904": '<i class="wi wi-hot"></i>', //
        "905": '<i class="wi wi-windy"></i>', //
        "906": '<i class="wi wi-hail"></i>', //
        "951": '<i class="wi wi-day-sunny"></i>', //
        "952": '<i class="wi wi-cloudy-gusts"></i>', //
        "953": '<i class="wi wi-cloudy-gusts"></i>', //
        "954": '<i class="wi wi-cloudy-gusts"></i>', //
        "955": '<i class="wi wi-cloudy-gusts"></i>', //
        "956": '<i class="wi wi-cloudy-gusts"></i>', //
        "957": '<i class="wi wi-cloudy-gusts"></i>', //
        "958": '<i class="wi wi-cloudy-gusts"></i>', //
        "959": '<i class="wi wi-cloudy-gusts"></i>', //
        "960": '<i class="wi wi-thunderstorm"></i>', //
        "961": '<i class="wi wi-thunderstorm"></i>', //
        "962": '<i class="wi wi-cloudy-gusts"></i>', //
    };

    let moonPhase = [
        '<i class="wi wi-moon-new"></i>', //
        '<i class="wi wi-moon-waxing-cresent-1"></i>', //
        '<i class="wi wi-moon-waxing-cresent-2"></i>', //
        '<i class="wi wi-moon-waxing-cresent-3"></i>', //
        '<i class="wi wi-moon-waxing-cresent-4"></i>', //
        '<i class="wi wi-moon-waxing-cresent-5"></i>', //
        '<i class="wi wi-moon-waxing-cresent-6"></i>', //
        '<i class="wi wi-moon-first-quarter"></i>', //
        '<i class="wi wi-moon-waxing-gibbous-1"></i>', //
        '<i class="wi wi-moon-waxing-gibbous-2"></i>', //
        '<i class="wi wi-moon-waxing-gibbous-3"></i>', //
        '<i class="wi wi-moon-waxing-gibbous-4"></i>', //
        '<i class="wi wi-moon-waxing-gibbous-5"></i>', //
        '<i class="wi wi-moon-waxing-gibbous-6"></i>', //
        '<i class="wi wi-moon-full"></i>', //
        '<i class="wi wi-moon-waning-gibbous-1"></i>', //
        '<i class="wi wi-moon-waning-gibbous-2"></i>', //
        '<i class="wi wi-moon-waning-gibbous-3"></i>', //
        '<i class="wi wi-moon-waning-gibbous-4"></i>', //
        '<i class="wi wi-moon-waning-gibbous-5"></i>', //
        '<i class="wi wi-moon-waning-gibbous-6"></i>', //
        '<i class="wi wi-moon-3rd-quarter"></i>', //
        '<i class="wi wi-moon-waning-crescent-1"></i>', //
        '<i class="wi wi-moon-waning-crescent-2"></i>', //
        '<i class="wi wi-moon-waning-crescent-3"></i>', //
        '<i class="wi wi-moon-waning-crescent-4"></i>', //
        '<i class="wi wi-moon-waning-crescent-5"></i>', //
        '<i class="wi wi-moon-waning-crescent-6"></i>'
    ];
    'use strict';
    /*global $, moment*/

    // Format for date and time
    let formatTime = 'HH:mm';
    let formatDate = 'dddd DD MMMM YYYY';

    let fetes = [
        [
            ["Jour de l'An", ""], ["Basile", "h"], ["Geneviève", "f"], ["Odilon", "h"], ["Edouard", "h"], ["Mélaine", "h"], ["Raymond", "h"], ["Lucien", "h"],
            ["Alix", "f"], ["Guillaume", "h"], ["Pauline", "h"], ["Tatiana", "f"], ["Yvette", "f"], ["Nina", "f"], ["Rémi", "h"], ["Marcel", "h"],
            ["Roseline", "f"], ["Prisca", "f"], ["Marius", "h"], ["Sébastien", "h"], ["Agnès", "f"], ["Vincent", "h"], ["Barnard", "h"],
            ["François de Sales", "h"], ["Conversion de Paul", ""], ["Paule", "f"], ["Angèle", "f"], ["Thomas d'Aquin", "h"], ["Gildas", "h"], ["Martine", "f"],
            ["Marcelle", "f"]
        ], [
            ["Ella", "f"], ["Fête de la Présention", ""], ["Blaise", "h"], ["Véronique", "f"], ["Agathe", "f"], ["Gaston", "h"], ["Eugènie", "f"],
            ["Jacqueline", "f"], ["Apolline", "f"], ["Arnaud", "h"], ["Notre Dame de Lourdes", "f"], ["Félix", "h"], ["Béatrice", "f"], ["Valentin", "h"],
            ["Claude", "h"], ["Julienne", "f"], ["Alexis", "h"], ["Bernadette", "f"], ["Gabin", "h"], ["Aimée", "f"], ["Mercredi des Cendres", ""],
            ["Isabelle", "f"], ["Lazare", "h"], ["Modeste", "f"], ["Roméo", "h"], ["Nestor", "h"], ["Honorine", "f"], ["Romain", "h"], ["Auguste", "h"]
        ], [
            ["Aubin", "h"], ["Charles le Bon", "h"], ["Guénolé", "h"], ["Casimir", "h"], ["Olive", "h"], ["Colette", "f"], ["Félicité", "f"],
            ["Jean de Dieu", "h"], ["Françoise", "f"], ["Vivien", "h"], ["Rosine", "f"], ["Justine", "f"], ["Rodrigue", "h"], ["Mathilde", "f"],
            ["Louise", "f"], ["Bénédicte", "f"], ["Patrice", "h"], ["Cyrille", "h"], ["Joseph", "h"], ["Herbert", "h"], ["Clémence", "f"], ["Léa", "f"],
            ["Victorien", "h"], ["Karine", "f"], ["Anne", "f"], ["Larissa", "f"], ["Habib", "h"], ["Gontran", "h"], ["Gwladys", "f"], ["Amédée", "h"],
            ["Benjamin", "h"]
        ], [
            ["Hugues", "h"], ["Sandrine", "f"], ["Richard", "h"], ["Isidore", "h"], ["Irène", "f"], ["Marcellin", "h"], ["Jean-Baptiste de la Salle", "h"],
            ["Julie", "f"], ["Gautier", "h"], ["Fulbert", "h"], ["Stanislas", "h"], ["Jules", "h"], ["Ida", "f"], ["Maxime", "h"], ["Paterne", "h"],
            ["Benoît-Joseph", "h"], ["Anicet", "h"], ["Parfait", "h"], ["Emma", "f"], ["Odette", "f"], ["Anselme", "h"], ["Alexandre", "h"], ["Georges", "h"],
            ["Fidèle", "h"], ["Marc", "h"], ["Alida", "f"], ["Zita", "f"], ["Valérie", "f"], ["Catherine de Sienne", "f"], ["Robert", "h"]
        ], [
            ["Fête du travail", ""], ["Boris", "h"], ["Philippe", "h"], ["Sylvain", "h"], ["Judith", "h"], ["Prudence", "h"], ["Gisèle", "f"],
            ["Armistice de 1945", ""], ["Pacôme", "h"], ["Solange", "f"], ["Estelle", "f"], ["Achille", "h"], ["Rolande", "f"], ["Matthias", "h"],
            ["Denise", "f"], ["Honoré", "h"], ["Pascal", "h"], ["Eric", "h"], ["Yves", "h"], ["Bernardin", "h"], ["Constantin", "h"], ["Emile", "h"],
            ["Didier", "h"], ["Donatien", "h"], ["Sophie", "f"], ["Bérenger", "h"], ["Augustin", "h"], ["Germain", "h"], ["Aymar", "h"], ["Ferdinand", "h"],
            ["Ferdinand", "h"]
        ], [
            ["Justin", "h"], ["Blandine", "f"], ["Kévin", "h"], ["Clotilde", "f"], ["Igor", "h"], ["Norbert", "h"], ["Gilbert", "h"], ["Médard", "h"],
            ["Diane", "f"], ["Landry", "h"], ["Barnabé", "h"], ["Guy", "h"], ["Antoine de Padoue", "h"], ["Elisée", "f"], ["Germaine", "f"],
            ["Jean-François Régis", "h"], ["Hervé", "h"], ["Léonce", "h"], ["Romuald", "h"], ["Silvère", "h"], ["Solstice d'été", ""], ["Alban", "h"],
            ["Audrey", "f"], ["Jean-Baptiste", "h"], ["Prosper", "h"], ["Anthelme", "h"], ["Fernand", "h"], ["Irénée", "h"], ["Pierre", "h"], ["Martial", "h"]
        ], [
            ["Thierry", "h"], ["Martinien", "h"], ["Thomas", "h"], ["Florent", "h"], ["Antoine", "h"], ["Mariette", "f"], ["Raoul", "h"], ["Thibault", "h"],
            ["Amandine", "f"], ["Ulrich", "h"], ["Benoît", "h"], ["Olivier", "h"], ["Henri", "h"], ["Fête Nationale", ""], ["Donald", ""],
            ["Fête de Notre Dame du Mont Carmel", ""], ["Charlotte", "f"], ["Frédéric", "h"], ["Arsène", "h"], ["Marina", "f"], ["Victor", "h"],
            ["Marie-Madeleine", "f"], ["Brigitte", "f"], ["Christine", "f"], ["Jacques", "h"], ["Anne", "f"], ["Nathalie", "f"], ["Samson", "h"],
            ["Marthe", "f"], ["Juliette", "f"], ["Ignace de Loyola", "h"]
        ], [
            ["Alphonse", "h"], ["Julien Eymard", "h"], ["Lydie", "f"], ["Jean-Marie Vianney", "h"], ["Abel", "h"], ["Fête de la Transfiguration", ""],
            ["Gaétan", "h"], ["Dominique", "h"], ["Amour", "h"], ["Laurent", "h"], ["Claire", "f"], ["Clarisse", "f"], ["Hippolyte", "h"], ["Evrard", "h"],
            ["Fête de l'Assomption", ""], ["Armel", "f"], ["Hyacinthe", "h"], ["Hélène", "f"], ["Jean-Eudes", "h"], ["Bernard", "h"], ["Christophe", "h"],
            ["Fabrice", "h"], ["Rose de Lima", "f"], ["Barthélémy", "h"], ["Louis", "h"], ["Natacha", "f"], ["Monique", "f"], ["Augustin", "h"],
            ["Sabine", "f"], ["Fiacre", "h"], ["Aristide", "h"]
        ], [
            ["Gilles", "h"], ["Ingrid", "f"], ["Grégoire", "h"], ["Rosalie", "f"], ["Raïssa", "f"], ["Bertrand", "h"], ["Reine", "Sao,te"],
            ["Fête de la Nativité", ""], ["Alain", "h"], ["Inès", "f"], ["Adelphe", "h"], ["Apollinaire", "h"], ["Aimé", "h"],
            ["Fête de la Croix Glorieuse", ""], ["Roland", "h"], ["Edith", "f"], ["Renaud", "h"], ["Nadège", "f"], ["Emilie", "f"], ["Davy", "h"],
            ["Matthieu", "h"], ["Maurice", "h"], ["Equinoxe d'Automne", ""], ["Thècle", "f"], ["Hermann", "h"], ["Côme", "h"], ["Vincent de Paul", "h"],
            ["Venceslas", "h"], ["Michel", "h"], ["Jérôme", "h"]
        ], [
            ["Thérèse de l'Enfant Jésus", "f"], ["Léger", "h"], ["Gérard", "h"], ["François d'Assise", "h"], ["Fleur", "f"], ["Bruno", "h"], ["Serge", "h"],
            ["Pélagie", "f"], ["Denis", "h"], ["Ghislain", "h"], ["Firmin", "h"], ["Wilfried", "h"], ["Géraud", "h"], ["Juste", "h"], ["Thérèse d'Avila", "h"],
            ["Edwige", "f"], ["Baudoin", "h"], ["Luc", "h"], ["René", "h"], ["Adeline", "f"], ["Céline", "f"], ["Elodie", "f"], ["Jean de Capistran", "h"],
            ["Florentin", "h"], ["Crépin", "h"], ["Dimitri", "h"], ["Emeline", "f"], ["Jude", "h"], ["Narcisse", "h"], ["Bienvenue", "f"], ["Quentin", "h"]
        ], [
            ["Toush", ""], ["Fête des défunts", ""], ["Hubert", "h"], ["Charles", "h"], ["Sylvie", "f"], ["Bertille", "f"], ["Carine", "f"], ["Geoffroy", "h"],
            ["Théodore", "h"], ["Léon", "h"], ["Armistice de 1918", ""], ["Christian", "h"], ["Brice", "h"], ["Sidoine", "h"], ["Albert", "h"],
            ["Marguerite", "f"], ["Elisabeth", "f"], ["Aude", "f"], ["Tanguy", "h"], ["Edmond", "h"], ["Présence de Marie", ""], ["Cécile", "f"],
            ["Clément", "h"], ["Flora", "f"], ["Catherine", "f"], ["Delphine", "f"], ["Sévrin", "h"], ["Jacques de la Marche", "h"], ["Saturnin", "h"],
            ["André", "h"]
        ], [
            ["Florence", "f"], ["Viviane", "f"], ["François-Xavier", "h"], ["Barbara", "f"], ["Gérald", "h"], ["Nicolas", "h"], ["Ambroise", "f"],
            ["Fête de l'Immaculée Conception", ""], ["Pierre Fourier", "h"], ["Romaric", "h"], ["Daniel", "h"], ["Jeanne-Françoise de Chantal", "f"],
            ["Lucie", "f"], ["Odile", "f"], ["Ninon", "f"], ["Alice", "f"], ["Gaël", "h"], ["Gatien", "h"], ["Urbain", "h"], ["Théophile", "h"],
            ["Solstice d'Hiver", ""], ["Françoise-Xavière", "f"], ["Armand", "h"], ["Adèle", "f"], ["Noël", ""], ["Etienne", "h"], ["Jean", "h"],
            ["Innocent", "h"], ["David", "h"], ["Roger", "h"], ["Sylvestre", "h"]
        ]
    ];

    // Default is every 15 minutes. Be reasonable. Don't query Yahoo every 500ms.
    let waitBetweenWeatherQueriesMS = 900000;
    let weatherId = '6455340';

    function resolveTemp(temp) {
        temp = '' + Math.round(parseFloat(temp), 1);
        temp += '&deg;';
        return temp;
    }

    function queryOpenWeathermap() {
        $.ajax({
            type:     'GET',
            url:      'http://api.openweathermap.org/data/2.5/forecast/daily?id=' + weatherId + '&lang=fr&units=metric&APPID=WEATHERAPIKEY',
            dataType: 'json'
        }).done(function(result) {
            // Drill down into the returned data to find the relevant weather information
            fillForecast("#currently ", result.list[0]);
        });
    }

    function fillForecast(forecastCell, forecast) {
        let hour = $(forecastCell + '.hour');
        let icon = $(forecastCell + '.icon');
        let desc = $(forecastCell + '.desc');
        let temp = $(forecastCell + '.temp');
        let high = $(forecastCell + '.high');
        let low = $(forecastCell + '.low');

        // If this is the first cell, call it "Today" instead of the day of the week
        if (hour.length) {
            hour.html(moment(new Date(forecast.dt * 1000)).format("HH") + "h");
        }

        // Insert the forecast details. Icons may be changed by editing the icons array.
        if (icon.length) {
            icon.html(icons[forecast.weather[0].id]);
        }
        if (desc.length) {
            desc.html(forecast.weather[0].description);
        }
        if (temp.length) {
            temp.html(resolveTemp(forecast.temp.day));
        }
        if (high.length) {
            high.html(resolveTemp(forecast.temp.max));
        }
        if (low.length) {
            low.html(resolveTemp(forecast.temp.min));
        }
    }

    $(document).ready(function() {
        $('head').append('<link rel="stylesheet" type="text/css" href="css/weather-icons.css" />');
    });

    function getEphemeride() {
        let date = new Date();
        let fete = fetes[date.getMonth()][(date.getDate() - 1)];
        if (fete[1] === "h") {
            return "Saint " + fete[0];
        }
        else if (fete[1] === "f") {
            return "Sainte " + fete[0];
        }
        else if (fete[1] === "") {
            return fete[0];
        }
        return "";
    }

    function refreshTime() {
        if ($('#time').length) {
            $('#time').html(moment().format(formatTime));
        }
        if ($('#date').length) {
            $('#date').html(moment().format(formatDate));
        }
        if ($('#ephemeride').length) {
            $('#ephemeride').html(getEphemeride());
        }
    }

    function queryLunopia() {
        $.ajax({
            type:        'GET',
            url:         '/lunopia.php',
            dataType:    'json',
            crossDomain: true,
            crossOrigin: "*"
        }).done(function(result) {
            let moonDiv = $("#moon");
            let constellationDiv = $("#constellation");
            let now = new Date();
            let nowDay = now.getDate();
            let distNewMoon = nowDay - result.NOUVELLELUNE[0].DATE.JOUR;
            if (distNewMoon >= moonPhase.length || distNewMoon <= -moonPhase.length) {
                distNewMoon = nowDay - result.NOUVELLELUNE[1].DATE.JOUR;
            }
            if (distNewMoon >= 0 && distNewMoon < moonPhase.length) {
                let moonPhaseIcon = moonPhase[distNewMoon];
                moonDiv.html(moonPhaseIcon);
            }
            else if (distNewMoon < 0 && distNewMoon > -moonPhase.length) {
                let moonPhaseIcon = moonPhase[moonPhase.length + distNewMoon];
                moonDiv.html(moonPhaseIcon);
            }
            let constellationName = result.CONSTELLATION[0].SIGNE;

            for (let i = 0; i < result.CONSTELLATION.length; i++) {
                if (result.CONSTELLATION[i].DATE.JOUR >= nowDay) {
                    break;
                }
                constellationName = result.CONSTELLATION[i].SIGNE;
            }
            for (let i = 0; i < result.APOGEE.length; i++) {
                if (result.APOGEE[i].DATE.JOUR == nowDay) {
                    constellationName = "APOGEE";
                }
            }
            for (let i = 0; i < result.PERIGEE.length; i++) {
                if (result.PERIGEE[i].DATE.JOUR == nowDay) {
                    constellationName = "PERIGEE";
                }
            }
            for (let i = 0; i < result.NOEUD.length; i++) {
                if (result.NOEUD[i].DATE.JOUR == nowDay) {
                    constellationName = "NOEUD";
                }
            }

            let image = "";
            if (constellationName === "VERSEAU" || constellationName === "GEMEAUX" || constellationName === "BALANCE") {
                image = "flower";
            }
            else if (constellationName === "SCORPION" || constellationName === "POISSONS" || constellationName === "CANCER") {
                image = "leaf";
            }
            else if (constellationName === "VIERGE" || constellationName === "CAPRICORNE" || constellationName === "TAUREAU") {
                image = "carrot";
            }
            else if (constellationName === "LION" || constellationName === "BELIER" || constellationName === "SAGITTAIRE") {
                image = "pear";
            }
            else if (constellationName === "APOGEE" || constellationName === "PERIGEE" || constellationName === "NOEUD") {
                image = "shovel";
            }

            if (image !== "") {
                constellationDiv.html("<icon class='icon-" + image + "'></i>");
            }
        });
    }

    $(window).on('load', function() {
        moment.locale('fr');
        refreshTime();
        // Refresh the time and date every second
        setInterval(function() {
            refreshTime();
        }, 60000);

        queryOpenWeathermap();

        setInterval(function() {
            queryOpenWeathermap();
        }, waitBetweenWeatherQueriesMS);

        queryLunopia();
        setInterval(function() {
            queryLunopia();
        }, 3600000);
    });
}());
