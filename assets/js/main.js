$(document).ready(function () {
    var chatPanelToggle = $('#chat-panel-toggle');
    var chatPanel = $('#chat-panel');

    chatPanel.hide();

    chatPanelToggle.click(function () {
        chatPanel.toggle();
    })

    $("#emoji").emojioneArea();

    $('[data-toggle="tooltip"]').tooltip();
})