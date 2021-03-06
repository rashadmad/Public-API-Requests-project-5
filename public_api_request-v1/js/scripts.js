"use strict";

// create a search bar form
const createSearch = () => {
    
    //create the skeleton 
    $('.search-container').append('<input type="search" id="search-input" onkeyup="searchUserCards()" class="search-input" placeholder="Search...">');
    $('.search-container').append('<input type="submit" value="&#x1F50D;" id="search-submit" onClick="searchUserCards()" class="search-submit">');
    //search the display of cards
}
createSearch()
//function for creating cards that takes in different user data as parameters - the index of the user - the name of the user - an image of the user - and the location
const createCards = (index,name,img,local) => {
    //create the skeleton of the card
    $('.gallery').append('<div class="card" id="newCard"></div>')
    $( "#newCard" ).attr('name', name)
    //I have added an id but plan on removing it as it would end up not being unique 
    $( "#newCard" )
    //create a container for an image
    .append('<div class="card-img-container"></div>') 
    //add the image in to the container
    .find('.card-img-container').append('<img class="card-img" src=' + img + ' alt="profile picture of ' + name + '">');
    $( "#newCard" )   
    //add a container for the card meta data: an email, name and city
    .append('<div class="card-info-container"></div>')
    //add data to the card 
    .find('.card-info-container')
        //Name
        .append('<h3 class="card-name">' + name + '</h3>')
        //add the card info container
        .append('<div class="card-info-container"></div>')
        //add email
        .append('<p class="card-text">' + businessEmail(name) + '</p>')
        //add location
        .append('<p class="card-text">' + local + '</p>')
    $('.card#newCard').attr('id', index);
}
//create a modal that takes in user data as parameters
const createModal = (userData,index,name,img,city,phoneNum,address,birthNum) => {
    //we will gather what the current user is by finding out what the index is of card that was pressed this will only work once
    currentUser = parseInt(index, 10);
    const firstUser = 0;
    const lastUser = userAmount - 1;
    //this counter
    let counter = 0
    //create a container for the modal
    $('body').append('<div class="modal-container"></div>');
    //create a modal inside of the modal container
    $('.modal-container')
        .append('<div class="modal"></div>')
    $('.modal')    
        //add close button
        .append('<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>')
        //add image to modal
        .append('<img class="modal-img" src=' + img + ' alt="profile picture of ' + name + '">')
        //add image to modal
        .append('<h3 class="modal-name">' + name + '</h3>')
        //remove the modal on click
    $( "#modal-close-btn" ).click(() => {
        //set the the previously selected user to null because it is no longer valid
        $(".modal-container").remove();
    })
    //the next group of items are some what similar so I will use a for loop to generate multiples
    while (counter < 5) {
        counter = counter + 1;
        $('.modal').append('<p class="modal-text"></p>')
    }
    //$('.modal .modal-text:nth-child(5)')
    //add an email to the first modal text
    //add the city
    $('.modal .modal-text:nth-child(4)').append(businessEmail(name));
    //add city
    $('.modal .modal-text:nth-child(5)').append(city);
    // //need to add an hr after the second modal-text
    $('.modal .modal-text:nth-child(5)').after('<hr>')
    //add a phone number
    $('.modal .modal-text:nth-child(7)').append(phoneNum);
    //add address
    $('.modal .modal-text:nth-child(8)').append(address);
    //add birth
    $('.modal .modal-text:nth-child(9)').append(birthDayFormatting(birthNum));
    //add a modal-btn-container
    $('.modal').append('<div class="modal-btn-container"></div>');
    //add two buttons in there
    $('.modal-btn-container').append('<button type="button" id="modal-prev" class="modal-prev btn">Prev</button>');
    $('.modal-btn-container').append('<button type="button" id="modal-next" class="modal-next btn">Next</button>');
    const prevButton = document.querySelector('#modal-prev');
    const nextButton = document.querySelector('#modal-next');
    /* create a function to update the modal the idea here is that when a modal button is pressed -prev or next- 
      the data will update in the modal according to either minus one or plus one of the index of the original user. With that said 
      there is opportunity for it to break for the last user therefore we need to start back at zero when we get to the last user  */
    prevButton.addEventListener("click", () => {
        
        //there is no previously selected user so..
        if (currentUser === firstUser) { 
            currentUser = lastUser;
        } else {
            //there has been a previouslySelectedUser so now increase the value of that user
            currentUser = currentUser - 1;
        }
        //need to empty out the modal first 
        emptyModal()
        //now fill it back up with the selected data
        $('.modal-name').append(userData[currentUser].name.first + " " + userData[currentUser].name.last);
        $('.modal-img').attr('src', userData[currentUser].picture.large);
        $('.modal .modal-text:nth-child(4)').append(businessEmail(userData[currentUser].name.first + " " + userData[currentUser].name.last));
        $('.modal .modal-text:nth-child(5)').append(userData[currentUser].location.city);
        $('.modal .modal-text:nth-child(7)').append(userData[currentUser].cell);
        $('.modal .modal-text:nth-child(8)').append(userData[currentUser].location.street.number + " " + userData[currentUser].location.street.name + ", " + userData[currentUser].location.postcode);
        $('.modal .modal-text:nth-child(9)').append(birthDayFormatting(userData[currentUser].dob.date));
    })
    nextButton.addEventListener("click", () => {
        //there is no previously selected user so..
        if (currentUser === lastUser) { 
            currentUser = firstUser;
        } else {
            //there has been a previouslySelectedUser so now increase the value of that user
            currentUser = currentUser + 1;
        }
        //need to empty out the modal first 
        emptyModal()
         //now fill it back up with the selected data
        $('.modal-name').append(userData[currentUser].name.first + " " + userData[currentUser].name.last);
        $('.modal-img').attr('src', userData[currentUser].picture.large);
        $('.modal .modal-text:nth-child(4)').append(businessEmail(userData[currentUser].name.first + " " + userData[currentUser].name.last));
        $('.modal .modal-text:nth-child(5)').append(userData[currentUser].location.city);
        $('.modal .modal-text:nth-child(7)').append(userData[currentUser].cell);
        $('.modal .modal-text:nth-child(8)').append(userData[currentUser].location.street.number + " " + userData[currentUser].location.street.name + ", " + userData[currentUser].location.postcode);
        $('.modal .modal-text:nth-child(9)').append(birthDayFormatting(userData[currentUser].dob.date));
    })
}



