function getTeamWithJson() {
    $.getJSON('team.json', function (result) {
        // This is after get data from team.json data is in result

        // Loop through result and display data
        let $team = $('#team');
        result.forEach((member) => {
            $team.append(`<h2>name: ${member.name}</h2>
            <h5>Position: ${member.position}</h5>
            <p>Bio: ${member.bio}</p>`)
        })
    });
}



function getAjax () {
    $.ajax({
        url: "team.json",
      }).done(function(teamData) {
        // Below is What you want to do after you get team data
        console.log(teamData);
        let $team = $('#team');
        teamData.forEach((member) => {
            $team.append(`<h2>name: ${member.name}</h2>
            <h5>Position: ${member.position}</h5>
            <p>Bio: ${member.bio}</p>`)
        })
      });
}

$(document).ready(function () {
     getTeamWithJson();
    getAjax()
    

});

 