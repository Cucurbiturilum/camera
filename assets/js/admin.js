$(document).ready(function () {

    // select all

    $(".selectAll").click(function () {
        $(".form-check-input").prop('checked', $(this).prop('checked'));
    });

})