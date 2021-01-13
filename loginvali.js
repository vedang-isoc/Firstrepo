$(document).ready(function() {
    $email = $("#email").value();
    $("button").click(function() {
        $.get("data_url", function(data, status) {
            for ($i = 0; $i < data.length; $i++) {
                if (data[i].user_name == $name) {
                    if (data[i].password == $pwd) {
                        return true;

                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            }
        });
    });
});