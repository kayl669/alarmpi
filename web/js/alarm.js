$(function() {
    $("#AlarmDemo").on('click', function(e) {
        e.preventDefault();
        $('#Alarm').html('C\'est parti');
        setTimeout(function() {
            $('#Alarm').html('&nbsp;');
        }, 10000);

        $.ajax({
            type:  "POST",
            url:   "alarm.php",
            data:  {Alarm: 'AlarmDemo'},
            cache: false
        });
    });

    $('#change').on('click', function(e) {
        e.preventDefault();
        $("#change").hide();
        $('#Alarm').html('Sauvegarde de l\'alarme');
        var that = this;
        $.ajax({
            type:    "POST",
            url:     "alarm.php",
            data:    {submit: $(that).val()},
            cache:   false,
            success: function() {
                $('#Alarm').html('Alarme enregistrée');
                setTimeout(function() {
                    $('#Alarm').html('&nbsp;');
                }, 10000);
            }
        });
    });

    $('#SoundOff').on('click', function(e) {
        $('#Alarm').html('Chut!!!!');
        setTimeout(function() {
            $('#Alarm').html('&nbsp;');
        }, 10000);
        e.preventDefault();
        $.ajax({
            type:    "POST",
            url:     "alarm.php",
            data:    {StopApp: 'mpg123'},
            cache:   false,
            success: function() {
                $.ajax({
                    type:  "POST",
                    url:   "alarm.php",
                    data:  {StopApp: 'python'},
                    cache: false,
                });
            }
        });
    });

    var updateCron = function() {
        var indexes = $("#weekCal").weekLine('getSelected', 'indexes');
        if (indexes === '') {
            indexes = '*';
        }
        var times = $('#clockpicker').val().split(':');
        var hour = parseInt(times[0], 10);
        var minute = parseInt(times[1], 10);

        let value = minute + ' ' + hour + ' * * ' + indexes;
        $("#change").attr("value", value);
        $("#change").show();
        $("#clockpickerA").html($('#clockpicker').val());
    };

    var weekCal = $("#weekCal").weekLine({
        dayLabels: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        onChange:  function() {
            updateCron();
        }
    });
    weekCal.weekLine("setSelected", dayOfWeek);

    let clockPicker = $('.clockpicker').clockpicker({
        placement:        'bottom',
        align:            'bottom',
        donetext:         'Valider',
        autoclose:        true,
        afterDone:        function() {
            updateCron();
        }
    });
    $('#clockpickerA').on('click', function(e) {
        e.stopPropagation();
        console.log("Click");
        clockPicker.clockpicker('show').clockpicker('toggleView', 'hours');
    });
});
