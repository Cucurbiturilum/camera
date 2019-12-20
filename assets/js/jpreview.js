(function ($) {

    $.fn.jPreview = function () {
        var jPreview = this;

        jPreview.preview = function (selector) {
            var container = $(selector).data('jpreview-container');

            $(selector).change(function () {
                // $(container).empty();
                $.each(selector.files, function (index, file) {
                    jPreview.readImageData(file, function (data, meta) {
                        jPreview.addPreviewImage(container, data, meta);
                    });
                });
            });
        }

        jPreview.readImageData = function (file, successCallback) {
            var reader = new FileReader();

            reader.onload = function (event) {
                var meta = {
                    name: file.name.split('.').slice(0, -1).join('.'),
                    size: (file.size / 1024 / 1024).toFixed(2),
                    type: file.type.split('/').slice(0, -1)
                };
                successCallback(event.target.result, meta);
            }
            reader.readAsDataURL(file);
        }

        jPreview.addPreviewImage = function (container, imageDataUrl, meta) {
            $(container).append(`
                <div class="preview-presentation">
                    <div class="jpreview-image" style="background-image: url(${imageDataUrl})"></div>
                    <div>
                        <p class="preview-name">${meta.name}</p>
                        <span class="preview-status">Uploaded</span>
                          <span class="preview-type">${meta.type}</span>
                        <span class="preview-size">${meta.size}Mb</span>
                    </div>
                    <div class="control-buttons">
                        <button class="btn"><i class="fas fa-play"></i></button>
                        <button class="btn"><i class="far fa-trash-alt"></i></button>
                    </div>
                </div>
 `);
            $('.preview').hide();
        }

        var selectors = $(this);
        return $.each(selectors, function (index, selector) {
            jPreview.preview(selector);
        });

    };

}(jQuery));