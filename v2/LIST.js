var LIST;
(function(){
    LIST = {
        init: function(data){
            var self = this;

            Alucard.Css('.list_area .inner>ul').S('display', 'flex', 'flex-wrap', 'wrap', 'margin-left', '-3.1%');
            Alucard.Css('.list_area .inner>ul>li').S('overflow', 'hidden', 'width', '31.1%', 'max-width', 336, 'margin-left', '3.1%', 'margin-bottom', '2.5rem', 'background', '#fff', 'box-shadow', '3px 0 30px rgba(0,0,0,0.1)');

            if(data.type === "filterList") return self.filterList(data);
        },
        filterList: function(listData){
            var ul = Alucard.Dom('ul'),
                listLng = listData.data.length;

            for(var i=0; i<listLng; i++){
                Alucard.Dom('li').S(
                    '@data-filter1', listData.data[i].filter1,
                    '@data-filter2', listData.data[i].filter2,
                    '@data-keyword', listData.data[i][listData.keyword],
                    '>', Alucard.Dom('div').S(
                        '@className', 'thumb',
                        '>', Alucard.Dom('a').S(
                            '@href', '#',
                            '@className', 'link',
                            '>', Alucard.Dom('i')
                        ),
                        '>', Alucard.Dom('figure').S(
                            'background-image', 'url('+listData.data[i].thumb+')'
                        ),
                        '>', Alucard.Dom('span').S('@className', 'mask')
                    ),
                    '>', Alucard.Dom('div').S(
                        '@className', 'description',
                        '>', Alucard.Dom('a').S(
                            '@href', '#',
                            '@className', 'link',
                            '>', Alucard.Dom('div').S(
                                '@className', 'logo',
                                '>', Alucard.Dom('p').S(
                                    '>', Alucard.Dom('img').S(
                                        '@src', listData.data[i].logo
                                    )
                                )
                            ),
                            '>', Alucard.Dom('div').S(
                                '@className', 'list_text',
                                '>', Alucard.Dom('p').S(
                                    'html', listData.data[i].tit
                                )
                            )
                        ),
                        '>', Alucard.Dom('div').S(
                            '@className', 'hashtag',
                            '>', Alucard.Dom('ul').S(
                                '>', Alucard.Dom('li').S(
                                    '>', Alucard.Dom('a').S('@href', '#', '@data-tag', listData.data[i].filter1, 'html', '#'+listData.data[i].filter1)
                                ),
                                '>', Alucard.Dom('li').S(
                                    '>', Alucard.Dom('a').S('@href', '#', '@data-tag', listData.data[i].filter2, 'html', '#'+listData.data[i].filter2)
                                )
                            )
                        )
                    ),
                    '<', ul
                );
            }

            Alucard.Css('.list_area .thumb').S('overflow', 'hidden', 'position', 'relative', 'width', '100%', 'height', 211);
            Alucard.Css('.list_area .thumb figure').S('height', '100%', 'min-height', 211, 'background-position', 'center center', 'background-repeat', 'no-repeat', 'background-size', 'cover');
            Alucard.Css('.list_area .thumb a').S('display', 'block', 'position', 'absolute', 'left', 0, 'top', 0, 'z-index', 10, 'width', '100%', 'height', '100%');
            Alucard.Css('.list_area .thumb a i').S('position', 'absolute', 'left', '50%', 'top', '50%', 'width', 50, 'height', 50, 'opacity', 0, 'transform', 'translate(-50.01%,-50%)');
            Alucard.Css('.list_area .thumb a i::before').S('display', 'block', 'content', '""', 'position', 'absolute', 'left', 0, 'top', 24, 'width', 50, 'height', 2, 'background', '#fff');
            Alucard.Css('.list_area .thumb a i::after').S('display', 'block', 'content', '""', 'position', 'absolute', 'left', 24, 'top', 0, 'width', 2, 'height', 50, 'background', '#fff');
            Alucard.Css('.list_area .thumb .mask').S('display', 'block', 'position', 'absolute', 'left', 0, 'top', 0, 'z-index', 5, 'width', '100%', 'height', '100%', 'background', '#000', 'opacity', 0);
            Alucard.Css('.list_area .description').S('overflow', 'hidden', 'position', 'relative');
            Alucard.Css('.list_area .description>a').S('display', 'block', 'width', '100%', 'height', '100%', 'min-height', 273, 'padding', '15px 8% 60px 12%');
            Alucard.Css('.list_area .description .logo').S('display', 'table', 'overflow', 'hidden', 'height', 48, 'margin-bottom', 25, 'text-align', 'left');
            Alucard.Css('.list_area .description .logo p').S('display', 'table-cell', 'vertical-align', 'bottom');
            Alucard.Css('.list_area .description .logo p img').S('width', 'auto', 'max-height', 48);
            Alucard.Css('.list_area .description .list_text').S('overflow', 'hidden', 'max-height', '6.94rem', 'font-family', 'NanumSquare', 'font-size', '1.625rem', 'color', '#000', 'line-height', '1.46');
            Alucard.Css('.list_area .description .hashtag').S('position', 'absolute', 'left', '12%', 'bottom', 35, 'z-index', 10);
            Alucard.Css('.list_area .description .hashtag li').S('display', 'inline-block', 'margin-right', 5);
            Alucard.Css('.list_area .description .hashtag li a').S('position', 'relative', 'font-family', 'NotoSanskr_Regular', 'font-size', '0.875rem', 'color', '#000');
            Alucard.Css('.list_area .description .hashtag li a::before').S('display', 'block', 'content', '""', 'position', 'absolute', 'left', '50%', 'bottom', -2, 'width', 0, 'height', 1, 'background', '#000', 'transition', 'all .3s cubic-bezier(0.4,0.77,0.6,0.88)');
            Alucard.Css('.list_area .description .hashtag li a::after').S('display', 'block', 'content', '""', 'position', 'absolute', 'right', '50%', 'bottom', -2, 'width', 0, 'height', 1, 'background', '#000', 'transition', 'all .3s cubic-bezier(0.4,0.77,0.6,0.88)');
            Alucard.Css('.list_area .description .hashtag li a:hover::before').S('width', '50%');
            Alucard.Css('.list_area .description .hashtag li a:hover::after').S('width', '50%');

            return ul;
        }
    };
})();