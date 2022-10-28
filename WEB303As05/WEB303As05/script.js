/*
    Assignment 05
*/



$(document).ready(function () {
    // your code here
    class ContentItem {
        constructor(id, name, description, genre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.genre = genre;
        }

        updateContentItem(id, name, description, genre) {
            //Check before update:
            //If id is the same.
            if (id === this.id) {
                // update
                if (name || description || genre != null) {
                    this.name = name;
                    this.description = description;
                    this.genre = genre;
                }
            }
        }



        toString() {
            return `<div id="content-item-list">
            <div id="content-item-${this.id}">
            <h4>${this.name}</h4>
            <p>${this.description}</p>
            <div>${this.genre}</div>
            </div>`
        }
    }

    const contentItem1 = new ContentItem(1, 'Mrs Doubtfire', 'Troubled that he has little access to his children, divorced Daniel Hillard (Robin Williams) hatches an elaborate plan. With help from his creative brother Frank (Harvey Fierstein), he dresses as an older British woman and convinces his ex-wife, Miranda (Sally Field), to hire him as a nanny. ', 'comedy');
    const contentItem2 = new ContentItem(2, 'Aladdin', 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie.', 'Fantasy');
    const contentItem3 = new ContentItem(3, 'Bourne Identity', 'The story of a man (Matt Damon), salvaged, near death, from the ocean by an Italian fishing boat. When he recuperates, the man suffers from total amnesia, without identity or background... except for a range of extraordinary talents in fighting, linguistic skills and self-defense that speak of a dangerous past.' , 'Thriller');
    const contentItem4 = new ContentItem(4, 'Poirot', 'Ratchett offers to hire Poirot as his bodyguard during the three-day journey, having received threatening letters from an unknown party, but Poirot refuses. That night, Poirot hears strange noises coming from Ratchett/s compartment and later he was found Dead.', 'Crime drama');
    const contentItem5 = new ContentItem(5, 'Jurassic Park', 'In Steven Spielberg/s massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. ', 'Science fiction');

    let movies = [contentItem1, contentItem2, contentItem3, contentItem4, contentItem5];

    // Display information to #content-item-list
    // Step 1: loop through movies array
    // Step 2: everytime you loop display that item
    const $contentItemList = $('#content-item-list');
    for (let index = 0; index < movies.length; index++) {
        const contentItem = movies[index];

        const $contentItem = $(contentItem.toString()); // First need to convert string into jquery object

        // Change css.
        $contentItem.css({ border: "2px solid red", width: '300px', padding: '20px', margin: '12px' });

        // Display info on page
        $contentItemList.append($contentItem)
    }
});

