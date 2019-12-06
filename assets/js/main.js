$(document).ready(function () {
    // Chat
    var chatPanelToggle = $('#chat-panel-toggle');
    var chatPanel = $('#chat-panel');
    var rightGroupModal = $('.right-group-modal');

        chatPanel.hide();

    chatPanelToggle.click(function () {
        rightGroupModal.hide();
        chatPanel.toggle();
    })

    // Emoji

    $("#emoji").emojioneArea();

    // Tooltips

    $('[data-toggle="tooltip"]').tooltip();

    // Screen Share

    var screenShare = $('#screen-share');
    var screenShareModal = $('#screen-share-modal');
    var screenShareModalClose = $('#screen-share-modal-close');

    rightGroupModal.hide();

    screenShareModal.hide();

    screenShare.click(function () {
        screenShareModal.toggle();
    });

    screenShareModalClose.click(function () {
        screenShareModal.hide();
    });

    // Record

    var recordToggle = $('#record');

    recordToggle.on('click', function () {
        $(this).toggleClass('on-record');
    })

    // Microphone

    var voiceToggle = $('#voice');

    voiceToggle.on('click', function () {
        $(this).toggleClass('fa-microphone-slash');
    })

    // Camera

    var videoToggle = $('#video');

    videoToggle.on('click', function () {
        $(this).toggleClass('fa-video-slash');
    })

    // Leave Meeting

    var leaveMeetingToggle = $('#leave-toggle');
    var leaveMeetingModal = $('#leave-modal');
    var leaveMeetingModalClose = $('#leave-close');

    leaveMeetingModal.hide();

    leaveMeetingToggle.click(function () {
        leaveMeetingModal.toggle();
    });

    leaveMeetingModalClose.click(function () {
        leaveMeetingModal.hide();
    });

    // Invite

    var inviteToggle = $('#invite-toggle');
    var inviteModal = $('#invite-modal');
    var inviteModalClose = $('#invite-close');

    inviteModal.hide();

    inviteToggle.click(function () {
        inviteModal.toggle();
    });

    inviteModalClose.click(function () {
        inviteModal.hide();
    });

    // Participants

    var participantsToggle = $('#participants-toggle');
    var participantsModal = $('#participants-panel');
    var leftGroupModal = $('.left-group-modal');

    participantsModal.hide();

     participantsToggle.click(function () {
         leftGroupModal.hide();
        participantsModal.toggle();
    });

})

// Mic indication
let mic;

function setup() {

    // Create an Audio input
    mic = new p5.AudioIn();

    // Start the audio context on a click/touch event
    userStartAudio().then(function() {
        mic.start();
    });
}

function draw() {

    // Get the overall volume (between 0 and 1.0)
    let vol = mic.getLevel() * 300;

    $('#mic-volume')
        .css('width', vol+'%')
        .attr('aria-valuenow', vol);
}
