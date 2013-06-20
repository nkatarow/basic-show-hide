/*

    FILE: more-info.js
    DESCRIPTION: Shows additional info when info icon is clicked
    AUTHOR(S): Nick Katarow

    DEPENDENCIES:
    - jQuery 1.9.1

*/

var NAMESPACE = window.NAMESPACE || {};

NAMESPACE.MoreInfo = function () {
    var self = this;

    // Elements
    self.infoTrigger = $('.more-info');
    self.closeTrigger = $('.status-container .close');

    // Event Delegation
    self.infoTrigger.click(function (event) {
        event.preventDefault();

        var linkValue = $(this).attr('href');
        NAMESPACE.MoreInfo.cleanHref(linkValue);
    });
    self.closeTrigger.click(function (event) {
        var btnParent = ($(this).parent().parent('.status-container'));
        event.preventDefault();

        NAMESPACE.MoreInfo.hideInfo(btnParent);
    });
}; // End: MoreInfo

NAMESPACE.MoreInfo.cleanHref = function (linkValue, infoLocation) {
    // Removes any query strings from info button's href
    var self = this;

    infoLocation = linkValue.split("?")[0];

    NAMESPACE.MoreInfo.detectStatus(infoLocation);
}; // End cleanHref

NAMESPACE.MoreInfo.detectStatus = function(infoLocation) {
    // Takes cleaned href and uses to determine if related status container is already open or not the calling open or close functions accordingly
    if ($(infoLocation).hasClass('open')) {
        NAMESPACE.MoreInfo.hideInfo(infoLocation);
    } else {
        NAMESPACE.MoreInfo.showInfo(infoLocation);
    }
}; // End detectStatus

NAMESPACE.MoreInfo.showInfo = function (infoLocation) {
    // Shows currently hidden info
    var self = this,
        infoHeight = $(infoLocation).children('.content').height();

    $(infoLocation).css('max-height', infoHeight + 50);
    $(infoLocation).addClass('open');
}; // End showInfo

NAMESPACE.MoreInfo.hideInfo = function (infoLocation) {
    // Hides currently visibile info
    var self = this;

    $(infoLocation).css('max-height', 0);
    $(infoLocation).removeClass('open');
}; // End hideInfo
