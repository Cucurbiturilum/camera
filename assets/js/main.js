$(document).ready(function () {
    // Chat
    var chatPanelToggle = $('#chat-panel-toggle');
    var chatPanel = $('#chat-panel');

    chatPanel.hide();

    chatPanelToggle.click(function () {
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

    screenShareModal.hide();

    screenShare.click(function () {
            screenShareModal.toggle();
        });

    screenShareModalClose.click(function(){
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

    leaveMeetingModalClose.click(function(){
        leaveMeetingModal.hide();
    });
})
