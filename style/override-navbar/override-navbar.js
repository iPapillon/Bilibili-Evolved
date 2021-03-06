(() =>
{
    return (settings, resources) =>
    {
        new SpinQuery(
            () => $(".head-content.bili-wrapper>div.search:not(.filter-item)"),
            it => it.length > 0 && $(".nav-con.fr").filter((_, it) => it.innerText).length > 0,
            textBox =>
            {
                const rightNav = $(".nav-con.fr").filter((_, it) => it.innerText);
                textBox.detach()
                    // insert after only the "real" right-nav. There will be 2 in Edge...
                    .insertAfter(rightNav);
            }
        ).start();
        SpinQuery.any(
            () => $("#banner_link"),
            () => resources.removeStyle("tweetsStyle"),
        );
        if (settings.preserveRank)
        {
            SpinQuery.any(
                () => $(".head-content.bili-wrapper>div.search:not(.filter-item) .searchform,.nav-con #nav_searchform"),
                searchForm =>
                {
                    searchForm.addClass("preserve-rank");
                    if (searchForm.find("a.icons-enabled").length === 0)
                    {
                        searchForm.prepend(`
                        <a  title="排行榜"
                            class="icons-enabled"
                            href="https://www.bilibili.com/ranking"
                            target="_blank">
                            <i class="icon-rank"></i>
                        </a>
                    `);
                    }
                }
            );
        }
        else
        {
            SpinQuery.any(
                () => $(".head-content.bili-wrapper>div.search:not(.filter-item) .searchform,.nav-con #nav_searchform"),
                searchForm =>
                {
                    searchForm.removeClass("preserve-rank");
                    searchForm.find("a.icons-enabled").remove();
                }
            );
        }

        if (!settings.showBanner)
        {
            resources.applyStyle("noBannerStyle");
        }
        else
        {
            resources.removeStyle("noBannerStyle");
        }
    };
})();