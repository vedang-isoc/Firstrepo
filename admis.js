$(document).ready(function() {
    $ent = "";
    $gk = "";
    $sports = "";
    $lit = "";
    $tech = "";
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/users",
        async: false,



        success: function(data, status) {

            for ($i = 0; $i < data.length; $i++) {
                if (data[$i].ent != "Not Attampted") {
                    $ent += (100 * (data[$i].ent.split("/")[0] / data[$i].ent.split("/")[1])).toFixed(2) + "/";
                    $ent += data[$i].ent + "/" + data[$i].username + "  ";


                }
                // if (data[$i].lit != "Not Attampted") {
                //     $lit += (data[$i].lit.split("/")[0] / data[$i].lit.split("/")[1]).toFixed(4) + "/";
                //     $lit += data[$i].lit + " " + data[$i].username + "  ";


                // }

                // if (data[$i].sports != "Not Attampted") {
                //     $sports += (data[$i].sports.split("/")[0] / data[$i].sports.split("/")[1]).toFixed(4) + "/";
                //     $sports += data[$i].sports + " " + data[$i].username + "  ";


                // }
                // if (data[$i].gk != "Not Attampted") {
                //     $gk += (data[$i].gk.split("/")[0] / data[$i].gk.split("/")[1]).toFixed(4) + "/";
                //     $gk += data[$i].gk + " " + data[$i].username + "  ";


                // }
                // if (data[$i].tech != "Not Attampted") {
                //     $tech += (data[$i].tech.split("/")[0] / data[$i].tech.split("/")[1]).toFixed(4) + "/";
                //     $tech += data[$i].tech + " " + data[$i].username + "  ";


                // }


            }





        },
        error: function(data, status) {

            alert('error');
        },


    })
    $ent = $ent.split("  ");
    $ent.pop();
    $ent.sort();
    console.log($ent);
    $ent_attampt = $ent.length;
    $ent_high = $ent[$ent_attampt - 1].split("/")[0];
    $ent_high_user = $ent[$ent_attampt - 1].split("/")[3];
    console.log($ent_attampt + " " + $ent_high + " " + $ent_high_user);
    // console.log($gk);
    // console.log($sports);
    // console.log($tech);
    // console.log($lit);


});
