function echart1() {
    $.ajax({
        url: "http://127.0.0.1:5000/echarts_1",
        success: function (data) {
            g1 = data.data;
            g2 = data.grade;
            Chart1.setOption(ec_1_option);
        },
        error: function () {

        }
    });
}
function echart2() {
    $.ajax({
        url: "http://127.0.0.1:5000/echarts_2",
        success: function (data) {
            f1 = data.data;
            f2 = data.grade;
            Chart2.setOption(ec_2_option);
        },
        error: function () {

        }
    });
}
function echart3() {
    $.ajax({
        url: "http://127.0.0.1:5000/echarts_3",
        success: function (data) {
            d1 = data.data;
            d2 = data.num;
            Chart3.setOption(ec_3_option);
        },
        error: function () {

        }
    });
}
function echart4() {
    $.ajax({
        url: "http://127.0.0.1:5000/echarts_4",
        async : false,
        success: function (data) {
           v1 = data.d1;
           v2 = data.d2;
           v3 = data.d3;
        },
        error: function () {

        }
    });
}
echart1();
echart2();
echart3();
echart4();