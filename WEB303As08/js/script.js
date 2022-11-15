(function () {
    var $imgs = $('#gallery img');
    var $search = $('#filter-search');
    var cache = [];

    function getAjax() {
        $.ajax({
            url: "character.json",
        }).done(function (characterData) {
            // Below is What you want to do after you get team data
            cache = characterData;
            const $tbody = $('tbody');
            characterData.forEach((character) => {
                const $row = $(`<tr>
                    <td>${character.FirstName}</td>
                    <td>${character.LastName}</td>
                    <td>${character.Profession}</td>
                    <td>${character.Personality}</td>
                    <td>${character.BestEpisodes}</td>
                    <td><img style="width: 100px" src="img/${character.Photo}"/></td>
                </tr>`);
                $tbody.append($row)
            })
        });
    }

    function searchFirstName() {
        const $searchInput = $('#filter-search');
        $searchInput.on('keyup', function (event) {
            const searchingKeyWords = event.target.value.toLowerCase();
            const $tbody = $('tbody');

            $tbody.empty();
            cache.forEach((character) => {
                const $row = $(`<tr>
                    <td>${character.FirstName}</td>
                    <td>${character.LastName}</td>
                    <td>${character.Profession}</td>
                    <td>${character.Personality}</td>
                    <td>${character.BestEpisodes}</td>
                    <td><img style="width: 100px" src="img/${character.Photo}"/></td>
                </tr>`);
                if (character.FirstName.toLowerCase().includes(searchingKeyWords)) {
                    $row.css({ background: 'darkgreen', color: 'white' })
                }
                $tbody.append($row)
            })
        })
    }

    function button1() {
        const $button1 = $('#button-1');
        $button1.on('click', () => {
            const $tbody = $('tbody');
            $tbody.empty();
            //Get first letter of last name
            var count = 0;
            cache.forEach((character) => {
                const firstLetter = character.LastName[0].toLowerCase();
                const $row = $(`<tr>
                    <td>${character.FirstName}</td>
                    <td>${character.LastName}</td>
                    <td>${character.Profession}</td>
                    <td>${character.Personality}</td>
                    <td>${character.BestEpisodes}</td>
                    <td><img style="width: 100px" src="img/${character.Photo}"/></td>
                </tr>`);
                const a2m = 'abcdefghklm';
                $tbody.append($row)
                if (a2m.includes(firstLetter)) {
                    count = count + 1;
                    $row.show();
                } else {
                    $row.hide();
                }
            })
            $button1.text(`A - M (${count})`)
        })
    }

    function button2() {
        const $button2 = $('#button-2');
        $button2.on('click', () => {
            var count = 0
            const $tbody = $('tbody');
            $tbody.empty();
            //Get first letter of last name
            cache.forEach((character) => {
                const firstLetter = character.LastName[0].toLowerCase();
                const $row = $(`<tr>
                    <td>${character.FirstName}</td>
                    <td>${character.LastName}</td>
                    <td>${character.Profession}</td>
                    <td>${character.Personality}</td>
                    <td>${character.BestEpisodes}</td>
                    <td><img style="width: 100px" src="img/${character.Photo}"/></td>
                </tr>`);
                const n2z = 'nopqrstyuvwz';
                $tbody.append($row)
                if (n2z.includes(firstLetter)) {
                    count = count + 1;
                    $row.show();
                } else {
                    $row.hide();
                }
            })
            $button2.text(`N - Z (${count})`)
        })
    }

    getAjax(); // Get json data -> Display on page -> set data into cache
    searchFirstName();
    button1();
    button2();
}());