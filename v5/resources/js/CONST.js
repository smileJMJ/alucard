var CONST = {
    PATH: '/study/v5',
    HEADER_URL : function(){
        return CONST.PATH + '/resources/json/header.json'
    },
    STORY_URL: function(){
        return CONST.PATH + '/resources/json/story.json'
    },
    STORY_VIEW_URL: function(){
        return CONST.PATH + '/resources/json/story_view.json';
    }
}
Object.freeze(CONST)