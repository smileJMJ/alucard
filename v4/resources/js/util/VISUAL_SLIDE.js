/*  slideDATA 정리
slideData = [
    {html: 'SPC, 단순 업무는 줄이고<strong>인재에 집중하고 있습니다</strong>', img:'../resources/img/visual1.jpg', url:'#'},
    {html: '쌍용자동차, 1만명의 지원자<strong>단 2명의 담당자가 관리해요</strong>', img:'../resources/img/visual2.jpg', url:'#'}
];*/


var VISUAL_SLIDE;
(function(){
    var visualSlide;
    var slideData = [];

    VISUAL_SLIDE = {
        init: function(data){
            slideData = data;
            visualSlide = Alucard.Dom('div').S(
                '@className', 'subvisual_area',
                '>', (function(){
                    var ul = Alucard.Dom('ul').S('@className', 'subvisual_slides'),
                        slideLng = slideData.length;
                    for(var i=0; i<slideLng; i++){
                        Alucard.Dom('li').S(
                            '@className', 'slides_item',
                            '>', Alucard.Dom('div').S(
                                '@className', 'title_area',
                                '>', Alucard.Dom('div').S(
                                    '@className', 'title_area_in',
                                    '>', Alucard.Dom('p').S('@className', 'eng', 'html', 'SUCCESS STORY'),
                                    '>', Alucard.Dom('dl').S(
                                        '>', Alucard.Dom('dt').S('html', slideData[i].html),
                                        '>', Alucard.Dom('dd').S(
                                            '>', Alucard.Dom('a').S(
                                                '@href', slideData[i].url,
                                                'html', '전체 스토리 보기'
                                            )
                                        )
                                    )
                                )
                            ),
                            'background-image', 'url('+slideData[i].img+')',
                            '<', ul
                        );
                    }
                    return ul;
                })()
                //'<', container
            );

            Alucard.Css('.subvisual_area').S('overflow', 'hidden', 'width', '100%', 'height', 550);
            Alucard.Css('.subvisual_area .subvisual_slides').S('overflow', 'hidden', 'position', 'relative', 'width', '100%', 'height', '100%', 'margin', 0);
            Alucard.Css('.subvisual_area .slides_item').S('overflow', 'hidden', 'height', 550, 'margin-left', 0, 'background-repeat', 'no-repeat', 'background-position', 'center center', 'background-size', 'cover');
            Alucard.Css('.subvisual_area .slides_item::before').S('display', 'block', 'content', '""', 'position', 'absolute', 'left', 0, 'top', 0, 'width', '100%', 'height', '100%', 'background', 'rgba(0,0,0,0.7)')
            Alucard.Css('.subvisual_slides .slides_item .title_area').S('display', 'table', 'position', 'relative', 'z-index', 0, 'width', 1080, 'height', '100%', 'margin', '0 auto');
            Alucard.Css('.subvisual_area .slides_item .title_area .title_area_in').S('display', 'table-cell', 'width', '100%', 'height', '100%', 'vertical-align', 'middle');
            Alucard.Css('.subvisual_area .slides_item .title_area .eng').S('padding-left', 3, 'font-family', 'Montserrat_SemiBold', 'font-size', '1rem', 'color', '#fff', 'letter-spacing', 1.2);
            Alucard.Css('.subvisual_area .slides_item .title_area dl').S('margin-top', '2.5rem');
            Alucard.Css('.subvisual_area .slides_item .title_area dl dt').S('font-family', 'NanumSquare', 'font-size', '3.125rem', 'color', '#fff', 'line-height', '1.4');
            Alucard.Css('.subvisual_area .slides_item .title_area dl dt strong').S('display', 'block', 'font-family', 'NanumSquareB');
            Alucard.Css('.subvisual_area .slides_item .title_area dl dd').S('margin-top', '3.125rem');
            Alucard.Css('.subvisual_area .slides_item .title_area dl dd a').S('display', 'block', 'width', 235, 'height', 50, 'padding', 0, 'font-family', 'NotoSanskr_Regular', 'font-size', '0.938rem', 'color', '#fff', 'text-align', 'center', 'line-height', 48, 'background', 'rgba(255,255,255,0.2)', 'border', '1px solid #fff', 'transition', 'all .25s ease-out');
            Alucard.Css('.subvisual_area .slides_item .title_area dl dd a:hover').S('background', 'rgba(255,255,255,0.35)');
            Alucard.Css('.subvisual_area .slick-dots').S('position', 'absolute', 'left', 0, 'bottom', '3.75rem', 'z-index', 10, 'width', '100%', 'margin', 0, 'text-align', 'center');
            Alucard.Css('.subvisual_area .slick-dots li').S('display', 'inline-block', 'margin-right', 12, 'margin-left', 0);
            Alucard.Css('.subvisual_area .slick-dots li button').S('position', 'relative', 'width', 12, 'height', 12, 'padding', 0, 'text-indent', '-9999em', 'vertical-align', 'middle', 'background', 'rgba(255,255,255,0.3)', 'border', 0, 'border-radius', '50%', 'transition', 'all .2s');
            Alucard.Css('.subvisual_area .slick-dots li.slick-active button').S('background', 'rgba(255,255,255, 1)');

            //$(Alucard.query('.subvisual_slides', true)).slick({				// slick은 selector가 $jquery 형태가 되어야 출력됨...
            $(visualSlide.dom.childNodes[0]).slick({
                fade:true,
                slidesToShow:1,
                slidesToScroll:1,
                arrows:false,
                dots:true,
                infinite: true,
                autoplay:true,
                autoplaySpeed:3500,
                draggable:false,
                speed:600,
                cssEase: "ease-out",
                zIndex:80,
                pauseOnHover:false,
                pauseOnFocus:false
            });

            return visualSlide;
        },
        destroy: function(){
            visualSlide.remove();
        }
    };
})();