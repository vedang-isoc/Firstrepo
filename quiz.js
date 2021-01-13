$(document).ready(function() {
    // $("input").change(function() {
    //     //alert("ecdc");
    //     alert($(this).val());
    // });



    // $content = "";
    // for ($n = 0; $n < 5; $n++) {
    //     $content += "<button onclick=jump('" + $n + "') >" + ($n + 1) + "</button>";

    // }
    // $("#jumpto").html($content);





    $category = "Entertaiment";
    $answers = "";
    $weight = "";
    $uanswer = "";
    $res = 0;
    $total_ques = 0;
    $qnames = [];


    $.ajax({
        url: "http://localhost:3000/" + $category + "/",
        method: "GET",
        dataType: "JSON",
        async: false,

        success: (x) => {
            $content = "";
            $non_att = x.length;
            $total_ques = x.length;
            for ($n = 0; $n < x.length; $n++) {
                if (($n + 1) % 3 == 0) {
                    $content += "<button id='qq" + ($n) + "' onclick=jump(" + $n + ") >" + ($n + 1) + "</button><br>";
                } else {
                    $content += "<button id='qq" + ($n) + "' onclick=jump(" + $n + ") >" + ($n + 1) + "</button>";

                }



            }
            $content += "<div id='non'>Not Attampted:</div><br><button id='count'> Submit </button>";
            $("#mainNav").html($content);
            $("#non").css("background-color", " rgb(10, 22, 71)");
            $("#non").css("color", "white");
            $("#non").css("margin-top", "100px");

            var student = "";
            $qcontent = "";
            //CONSTRUCTION OF ROWS HAVING 
            // DATA FROM JSON OBJECT 


            for (var i = 0; i < x.length; i++) {
                $answers += x[i].Answer + "  ";
                console.log(x[i].Answer);
                $weight += x[i].weight + "  ";
                $random = Math.floor(Math.random() * 3);
                if ($random == 0) {
                    $qcontent += "<div id='q" + (i + 1) + "'>" + (i + 1) + " " + x[i].question + "<br><br><label>";
                    $qcontent += "<input type='radio'name='q" + (i + 1) + "' value='" + x[i].Answer + "'>" + x[i].Answer + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].option1 + "'>" + x[i].option1 + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].option2 + "'>" + x[i].option2 + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].option3 + "'>" + x[i].option3 + "</label><br><br></div>";


                }
                if ($random == 1) {
                    $qcontent += "<div id='q" + (i + 1) + "'>" + (i + 1) + " " + x[i].question + "<br><br><label>";
                    $qcontent += "<input type='radio'name='q" + (i + 1) + "' value='" + x[i].option3 + "'>" + x[i].option3 + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].option2 + "'>" + x[i].option2 + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].Answer + "'>" + x[i].Answer + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].option1 + "'>" + x[i].option1 + "</label><br><br></div>";


                }
                if ($random == 2) {
                    $qcontent += "<div id='q" + (i + 1) + "'>" + (i + 1) + " " + x[i].question + "<br><br><label>";
                    $qcontent += "<input type='radio'name='q" + (i + 1) + "' value='" + x[i].option2 + "'>" + x[i].option2 + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].option3 + "'>" + x[i].option3 + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].option1 + "'>" + x[i].option1 + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].Answer + "'>" + x[i].Answer + "</label><br><br></div>";


                }
                if ($random == 3) {
                    $qcontent += "<div id='q" + (i + 1) + "'>" + (i + 1) + " " + x[i].question + "<br><br><label>";
                    $qcontent += "<input type='radio'name='q" + (i + 1) + "' value='" + x[i].option1 + "'>" + x[i].option1 + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].Answer + "'>" + x[i].Answer + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].option3 + "'>" + x[i].option3 + "</label><br>";
                    $qcontent += "<label> <input type='radio'name='q" + (i + 1) + "' value='" + x[i].option2 + "'>" + x[i].option2 + "</label><br><br></div>";


                }


            }

            // for($m=0;$m<x.length;$m++){
            //     $qcontent+=x[i].question+"<br>";

            // }
            $("#mainArticle").html($qcontent);
            $("#head").html($category);



        },
        error: function(response) {
            console.log(response);
        }
    });

    $("#non").append($total_ques);
    for ($m = 0; $m < $total_ques; $m++) {
        $qnames.push("q" + ($m + 1));
    }
    console.log($qnames);

    // $.ajax({
    //     url: "http://localhost:3000/lit",
    //     method: "GET",
    //     dataType: "JSON",
    //     async: false,

    //     success: (x) => {
    //         var student = "";
    //         //CONSTRUCTION OF ROWS HAVING 
    //         // DATA FROM JSON OBJECT 
    //         for (var i = 1; i < x.length; i++) {
    //             $answers += x[i].Answer + "  ";
    //             console.log(x[i].Answer);
    //             $weight += x[i].weight + "  ";

    //         }



    //     },
    //     error: function(response) {
    //         console.log(response);
    //     }
    // });
    // $answers = $answers.split("  ");
    $answers = $answers.split("  ");
    $weight = $weight.split("  ");
    $answers.pop();
    $weight.pop();
    console.log($answers);
    console.log($uanswer);
    console.log($weight);
    console.log(typeof $answers);
    console.log($answers[0]);

    console.log($res);
    //   for (var n in answers)
    //    console.log(n);
    //  console.log(Object.values(answers));

    // for (var i = 0; i < answers.length; i++) {
    //     console.log("ho");
    //     for (var j = 0; j < answers.length; j++) {
    //         // console.log(answers[j]);
    //         //     // if (uanswer[i] == answers[j]) {
    //         //     //     alert("true");
    //         //     // } else {
    //         //     //     alert("false");
    //         //     // }

    //         // }
    //         // alert($uanswer[$i]);
    //         //alert(answers.includes("uil"));
    //         // if ($answers.includes($uanswer[$i])) {
    //         //     alert("done");
    //         //     $uanswer[$i] = "Correct";
    //         //     continue;



    //     }


    // }
    // console.log($uanswer);
    //"'" + "input[name=" + $ques[$i] + "]:checked" + "'"
    $("#count").click(function() {
        // $non_att = $total_ques;
        if ($non_att != 0) {
            alert("You have " + $non_att + "question not attempted")
        }

        alert("started calculation");
        $ans = "";

        for ($i = 0; $i < $qnames.length; $i++) {


            $uanswer += $("input[name=" + $qnames[$i] + "]:checked").val() + "  ";
            // alert($("#": checked).val0());
            // $ans += $("." + $ques[$i]).text();

        }
        $uanswer = $uanswer.split("  ");
        $uanswer.pop();
        console.log($uanswer);
        for ($i = 0; $i < $answers.length; $i++) {
            if ($answers[$i] == $uanswer[$i]) {
                $res += parseInt($weight[$i]);
                $("div[id=" + $qnames[$i] + "]").css("background-color", "rgba(0,255,0,0.6)");



            } else {

                $("div[id=" + $qnames[$i] + "]").css("background-color", "rgba(255,0,0,0.6)");
                $("div[id=" + $qnames[$i] + "]").css("color", "white");
                $("div[id=" + $qnames[$i] + "]").append("Correct " + $answers[$i]);

            }

        }
        $finalr = "Result : " + $res;
        $("#Result").append($finalr);







        $username_s = "abcd";
        if ($username_s) {

            // values are not empty
            $.ajax({

                    method: "GET",
                    url: "http://localhost:3000/users",
                    // contentType: "application/json; charset=utf-8",


                    success: function(data, status) {


                        $flag = 0;

                        for ($i = 0; $i < data.length; $i++) {

                            if (data[$i].username == $username_s) {
                                $y = data[$i].id;
                                //alert("calling");
                                resetp($res, $y);
                                break;
                                // $(window).attr('location', './log_success.html');

                            }

                        }




                    },
                    error: function(data, status) {

                        alert('error');
                    },

                }) // success
        }

        function resetp($m, $z) {
            // alert($z);
            alert("called");
            $.ajax({
                type: "PATCH",
                //SEND TO MY SERVER URL
                url: "http://localhost:3000/users/" + $z,
                dataType: 'json',
                async: false,
                data: {
                    'ent': $m
                },
                success: function(response) {
                    alert("updated");
                    //  e.preventDefault();

                    // $(window).attr('location', './log_in.html');
                    // $.session.clear();

                    //$.session.set('username', $username);


                    //console.log(response);
                }
            })
        }



    });
    $("input").change((function() {
        $non_att = $total_ques

        for ($i = 0; $i < $qnames.length; $i++) {


            if ($("input[name=" + $qnames[$i] + "]:checked").val() != undefined) {


                $non_att--;
                $("button[id=qq" + $i + "]").css("background-color", "green");


            }

        }
        $("#non").text("Non Attepted :" + $non_att);

    }));


});


function jump(val) {
    val++;


    //$s = '#q' + val;
    // alert($s);
    // $('html,body,#mainArticle').animate({
    //     scrollTop: $('#q' + val + '').offset().top
    // }, 1000);
    // return false;
    // //1 
    // // $(window).scrollTop($('#q' + val + '').offset().top);
    //  alert('#q' + val);
    var element = document.getElementById('q' + val);
    element.scrollIntoView({
        behavior: 'smooth'
    });

}











//     alert($val);

//2
// $('html,body').animate({
//     scrollTop: $('#q"+$val+"').offset().top
// }, 1000);
// $("#question").text(student);

//e.preventDefault();





// function jump(val) {
//     alert(val);
//     $.ajax({
//         url: "http://localhost:3000/lit",
//         method: "GET",
//         dataType: "JSON",
//         async: false,

//         success: (x) => {
//             var student = x[val].question;
//             $("#question").text(student);
//             //CONSTRUCTION OF ROWS HAVING 
//             // DATA FROM JSON OBJECT 




//         },
//         error: function(response) {
//             console.log(response);
//         }
//     });
// }