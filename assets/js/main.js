$(document).ready(function () {
    var chatPanelToggle = $('#chat-panel-toggle');
    var chatPanel = $('#chat-panel');

    chatPanel.hide();

    chatPanelToggle.click(function () {
        chatPanel.toggle();
    })

    $("#emoji").emojioneArea();

    $('[data-toggle="tooltip"]').tooltip();

    var screenShare = $('#screen-share')
    var screenShareModal = $('#screen-share-modal');
    var screnShareModalClose = $('#screen-share-modal-close');

    screenShareModal.hide();

    screenShare.click(function () {
        screenShareModal.toggle();
    })

    screnShareModalClose.click(function(){
        screenShareModal.hide();
    });

    var recordToggle = $('#record');

    recordToggle.on('click', function () {
        $(this).toggleClass('on-record');
    })

    var voiceToggle = $('#voice');

    voiceToggle.on('click', function () {
        $(this).toggleClass('fa-microphone-slash');
    })

    var videoToggle = $('#video');

    videoToggle.on('click', function () {
        $(this).toggleClass('fa-video-slash');
    })
})
