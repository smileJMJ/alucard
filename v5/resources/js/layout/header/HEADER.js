var HEADER;
(function () {
    var makeDom, makeLogo;
    makeDom = function () {
        var data;
        var header;
        var self;

        /*return Alucard.ajaxGet(function(d){
            data = JSON.parse(d);
            console.log(data)
            return Alucard.Dom('header').S(
                '@id', 'header'
            );
        }, 'resources/json/header.json');*/
        self = this;
        header = Alucard.Dom('header').S(
            '@id', 'header'
        );

        return header;
    }
    makeLogo= function (data) {
        var logo = Alucard.Dom('h1').S(
            '>', (function () {
                var h1 = Alucard.Dom('div').S('@className', 'logo'),
                    a = Alucard.Dom('a').S('@href', data.url);
                data.type === 'img' ? a.S('background-image', 'url(' + data.img + ')', '>', Alucard.Dom('span').S('@className', 'hidden', 'html', data.text)) : a.S('html', data.text);
                h1.S('>', a);

                return h1;
            })()
        );

        Alucard.Css('#header h1').S('position', 'absolute', 'left', 0, 'top', 22);
        Alucard.Css('#header h1 a').S('display', 'block', 'width', 47, 'height', 15, 'background-repeat', 'no-repeat', 'background-position', 'left top');

        return logo;
    }
    HEADER = {
        init: function (url) {
            var rootContainer = makeDom();
              Alucard.ajaxGet(function (d) {
                  makeLogo(JSON.parse(d)['logo'])
              },url);
            return rootContainer
        }

    };
})();