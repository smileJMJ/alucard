/*
    플로우/화면 전환 담당
*/

var ROUTER;
(function(){
    var hostname = CONST.PATH;
    var status = {};
    var getStatus;

    getStatus = function(page){
        switch(page){
            case ('MAIN' || '' || undefined):
                status = {
                    name: 'MAIN',
                    url: '/index.html',
                    tit: '메인',
                    cb: function(){
                        if(arguments[0] === 'destroy') MAIN.destroy();
                        else MAIN.init();
                    }
                };
                break;

            case 'PAGE_STORY':
                status = {
                    name: 'PAGE_STORY',
                    url: '/story/list',
                    tit: '성공스토리 리스트',
                    cb: function(){
                        if(arguments[0] === 'destroy') PAGE_STORY.destroy();
                        else PAGE_STORY.init();
                    }
                };
                break;

            case 'PAGE_STORY_VIEW':
                status = {
                    name: 'PAGE_STORY_VIEW',
                    url: '/story/view',
                    tit: '성공스토리 콘텐츠',
                    cb: function(){
                        if(arguments[0] === 'destroy') PAGE_STORY_VIEW.destroy();
                        else PAGE_STORY_VIEW.init();
                    }
                };
                break;

            case 'PAGE_CONTACT':
                status = {
                    name: 'PAGE_CONTACT',
                    url: '/contact',
                    tit: '문의하기',
                    cb: function(){
                        if(arguments[0] === 'destroy') PAGE_CONTACT.destroy();
                        else PAGE_CONTACT.init();
                    }
                };
                break;

            default:
                break;
        }
    };

    ROUTER = {
        init: function(){
            var self = this;
            self.go('MAIN');

            if(status.url !== undefined){
                window.onpopstate = function(e){
                    self.go(e.state);
                }
            }
        },
        go: function(page){
            if(status.url !== undefined) {
                status.cb('destroy');
            }
            getStatus(page);
            history.pushState(status.name, status.tit, hostname + status.url);
            status.cb();

        }
    };
})();