function gettime() {
    $.ajax({
        url:"/time",
        timeout:10000,
        success:function (data) {
            $("#time").html(data)
        },
        error:function (xhr,type,errorThrown) {

        }
    });
}

function get_local_data() {
    $.ajax({
        url:"/local_data",
        timeout:10000,
        success:function (data) {
            $(".num h1").eq(0).text(data.local_temperature);
            $(".num h1").eq(1).text(data.local_humidness);
            $(".num h1").eq(2).text(data.local_air_pressure);
            $(".num h1").eq(3).text(data.local_wind);
            $(".local_position h3").eq(0).text(data.local_position);
        },
        error:function (xhr,type,errorThrown) {

        }
    });
}


function get_aqi_level() {
    $.ajax({
        url:"/aqi_level",
        timeout:10000,
        success:function ( data) {
            gauge.changeData(0);

        },
        error:function (xhr,type,errorThrown) {

        }
    });
}
setInterval(gettime,1000)
setInterval(get_local_data,1000)