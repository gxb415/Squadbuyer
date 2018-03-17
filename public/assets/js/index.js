// when page loads, get and display all campaigns
$.get('/api/allCampaigns', function(data) {
    if (data.length !== 0) {
        // if there is data, loop through the data to populate the table
        for (var i = 0; i < data.length; i++) {

            var row = $('<div>');
            row.addClass('campaign');

            row.append('<h2>' + data[i].CampaignName + '</h2>');
            row.append('<p>Description: ' + data[i].CampaignDetails + '</p>');
            row.append('<p>Backers needed: ' + data[i].CommitsNeeded + '</p>');

            $('#campaigns-list').prepend(row);
        }
    }
});

// when user clicks to add campaign
// note this is the button to submit a completed CAMPAIGN form
// this should NOT be called directly from the homepage. that button should link to the campaign form
$('#campaign-submit').on('click', function(event) {
    event.preventDefault();

    // make an object for new campaign
    var newCampaign = {
        CampaignName: $('#campaign-name').val().trim(),
        CampaignDetails: $('#campaign-details').val().trim(),
        CommitsNeeded: $('#commits-needed').val().trim()
            // consider adding moment.js created time: created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    console.log(newCampaign);

    // send an ajax post request with jquery
    $.post('/api/newCampaign', newCampaign)
        // on success, run this:
        .then(function() {
            var row = $('<div>');
            row.addClass('campaign');

            row.append('<h2>' + data[i].CampaignName + '</h2>');
            row.append('<p>Description: ' + data[i].CampaignDetails + '</p>');
            row.append('<p>Backers needed: ' + data[i].CommitsNeeded + '</p>');

            $('#campaigns-list').prepend(row);
        });
    // empty input boxes
    $('#campaign-name').val('');
    $('#campaign-details').val('');
    $('#commits-needed').val('');
});

// when user clicks to commit to an existing campaign
// note this is the button to submit a completed USER form
// this should NOT be called directly from the homepage. that button should link to the form capturing new user info
$('#user-submit').on('click', function(event) {
    event.preventDefault();

    // make an object for new user
    var newUser = {
        UserName: $('#user-name').val().trim(),
        Email: $('#user-email').val().trim(),
        ZipCode: $('#user-zipcode').val().trim()
            // consider adding moment.js created time: created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    console.log(newUser);
    console.log(CampaignName);

    // ====================== HOW TO GET USERID AND CAMPAIGNID THEN POST BOTH TO CAMPAIGNSUSERS? =====

    // add USER to Users table
    // send an ajax post request with jquery
    $.post('/api/newUser', newUser)
        // on success, fetch the userId so we can use it in the campaign-user pair
        .then($.get('/api/getUserId', function(data) {
            // make an object for campaign-user pair
            var newPair = {
                UserId: data.UserId,
                CampaignId: $('#campaign-id')
            };

            // add campaign-user pair to CampaignsUsers table
            $.post('/api/newCampaignUserPair', newPair);
        }));

    // =====================

    // empty input boxes
    $('#user-name').val('');
    $('#user-email').val('');
    $('#user-zipcode').val('');
});