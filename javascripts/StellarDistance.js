$(document).ready(function () {
   
    $("#button1").click(function () {
        var value0 = $("#s1a").val();
        var value1 = $("#r1a").val();
        var value2 = $("#r1b").val();
        var value3 = $("#r1c").val();
        var value4 = $("#d1a").val();
        var value5 = $("#d1b").val();
        var value6 = $("#d1c").val();
        var value_r1 = ((parseFloat(value1)/24.00)+
                        (parseFloat(value2)/1440.00)+
                        (parseFloat(value3) / 86400.00));
        var value_r2 = parseFloat(value_r1) * 360.00;

        if (parseFloat(value4) < 0.0) {
            var temp1 = parseFloat(value4) * -1.00;
            var value_r3 = ((parseFloat(temp1) / 360.00) +
                            (parseFloat(value5) / 21600.00) +
                            (parseFloat(value6) / 1296000.00));
            var value_r4 = parseFloat(value_r3) * -1.00;
        }
        else
        {
            var value_r4 = ((parseFloat(value4) / 360.00) +
                            (parseFloat(value5) / 21600.00) +
                            (parseFloat(value6) / 1296000.00));
        }
        var value_r5 = parseFloat(value_r4) * 360.00;

        $("#result1").text(value0);
        $("#result2").text(value_r2);
        $("#result3").text(value_r5);

        var value7 = $("#s2a").val();
        var value8 = $("#r2a").val();
        var value9 = $("#r2b").val();
        var value10 = $("#r2c").val();
        var value11 = $("#d2a").val();
        var value12 = $("#d2b").val();
        var value13 = $("#d2c").val();
        var value_r6 = ((parseFloat(value8) / 24.00) +
                        (parseFloat(value9) / 1440.00) +
                        (parseFloat(value10) / 86400.00));
        var value_r7 = parseFloat(value_r6) * 360.00;

        if (parseFloat(value11) < 0.0) {
            var temp2 = parseFloat(value11) * -1.00;
            var value_r8 = ((parseFloat(temp2) / 360.00) +
                            (parseFloat(value12) / 21600.00) +
                            (parseFloat(value13) / 1296000.00));
            var value_r9 = parseFloat(value_r8) * -1.00;
        }
        else {
            var value_r9 = ((parseFloat(value11) / 360.00) +
                            (parseFloat(value12) / 21600.00) +
                            (parseFloat(value13) / 1296000.00));
        }
        var value_r10 = parseFloat(value_r9) * 360.00;

        $("#result4").text(value7);
        $("#result5").text(value_r7);
        $("#result6").text(value_r10);

        var pi = Math.PI;
        var value14 = $("#d1y").val();
        var value15 = $("#d2y").val();

        var x1 = (parseFloat(value14) *
                 (Math.cos(value_r2 * pi / 180.00)) *
                 (Math.cos(value_r5 * pi / 180.00)));
        var y1 = (parseFloat(value14) *
                 (Math.sin(value_r2 * pi / 180.00)) *
                 (Math.cos(value_r5 * pi / 180.00)));
        var z1 = (parseFloat(value14) *
                 (Math.sin(value_r5 * pi / 180.00)));

        var x2 = (parseFloat(value15) *
                 (Math.cos(value_r7 * pi / 180.00)) *
                 (Math.cos(value_r10 * pi / 180.00)));
        var y2 = (parseFloat(value15) *
                 (Math.sin(value_r7 * pi / 180.00)) *
                 (Math.cos(value_r10 * pi / 180.00)));
        var z2 = (parseFloat(value15) *
                 (Math.sin(value_r10 * pi / 180.00)));

        var x_diff = x2 - x1;
        var y_diff = y2 - y1;
        var z_diff = z2 - z1;
        
        var final = Math.sqrt((Math.pow(x_diff, 2.0)) +
                              (Math.pow(y_diff, 2.0)) +
                              (Math.pow(z_diff, 2.0)));

        $("#result7").text(final);
    });
});