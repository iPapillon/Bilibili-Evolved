(() =>
{
    return (_, resources) =>
    {
        (Observer.childListSubtree || Observer.subtree)("#bofqi", () =>
        {
            SpinQuery.count(
                () => $(".bui-slider .bui-track.bui-track-video-progress,.bilibili-player-video-control-bottom"),
                2,
                containers =>
                {
                    if (!containers.hasClass("video-control-blur-container"))
                    {
                        containers.addClass("video-control-blur-container");
                        containers.prepend(`<div class="video-control-blur-layer"></div>`);
                    }
                });
        });
        resources.applyStyle("blurVideoControlStyle");
    };
})();