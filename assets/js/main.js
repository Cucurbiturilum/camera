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
})