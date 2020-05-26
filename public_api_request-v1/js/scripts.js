"use strict";
const createSearch = () => {
    // create a form and add a seach bar and submit button to it
    $('.search-container').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
    $('.search-container').append('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');
}

const createCard = (name,img,location) => {
    //create a card and add a profile picture inside of it
    $('.gallery')
        //create a container for the image
        .append('<div class="card-img-container"></div>')

    //add the mage to the container
    $('.card-img-container')    
        .append('<img class="card-img" src=' + img + ' alt="profile picture of ' + name + '">')
    
    //add a container for car info with an email, name and city
    $('.gallery')
        //add the card info container
        .append('<div class="card-info-container"></div>')

    //add data to the card 
    $('.card-info-container')
        //add name
        .append('<h3 id=' + name + 'class="card-name cap">' + name + '</h3>')
        //add the card info container
        .append('<div class="card-info-container"></div>')
        //add email
        .append('<p class="card-text">' + buisnessEmail(name) + '</p>')
        //add location
        .append('<p class="card-text cap">' + location() + '</p>')
}

const createModal = (name,img,city,phoneNum,address,birthNum) => {

    let counter = 0

    //create a container for the modal
    $('body').append('<div class="modal-container"></div>');
    //create a modal inside of the modal container
    $('.modal-container')
        .append('<div class="modal"></div>')
    $('.modal')    
        //add image to modal
        .append('<img class="modal-img" src=' + img + ' alt="profile picture of ' + name + '">')
        //add image to modal
        .append('<h3 id="name" class="modal-name cap">name</h3>')
    //the next group of items are some hwat similar sow I will use a for loop
    while (counter < 5) {
        counter = counter + 1;
        $('.modal').append('<p class="modal-text"></p>')
    }
    //add an email to the first modal text
    //console.log($('.modal-text:nth-child(0)'))
    //add the city
    $('.modal-text:nth-child(3)').append(name.replace(/\s+/g, '') + buisnessEmail);
    //add a phone number
    $('.modal-text:nth-child(2)').innerText(phoneNum);
    //add address
    //$('.modal-text:nth-child(3)').innerText(address);
    //add address
    $('.modal-text:nth-child(4)').innerText(birthNum);
    //need to add an hr after the second modal-text
    $('.modal-text:nth-child(4)').after('<hr>')
}

createModal("Mike Gray","https://randomuser.me/api/portraits/men/19.jpg", "Chicago, Illinois")
createCard("Mike Gray","https://randomuser.me/api/portraits/men/19.jpg", "Chicago, Illinois")
createSearch()