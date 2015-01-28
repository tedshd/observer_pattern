/*global $, jQuery, alert, console, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-01-21 10:26:21
 * @version $Id$
 */


var OB = {
    hub: [],
    publish: function (action, doSomething) {
        var obj = {
            action: action,
            doSomething: doSomething
        };
        OB.hub.push(obj);
    },
    unPublish: function (action, something) {
        var actionState = false,
            x, y;
        if (action && !something) {
            for (x = OB.hub.length - 1; x >= 0; x--) {
                if (OB.hub[x].action && OB.hub[x].action === action) {
                    OB.hub.splice(x, 1);
                    actionState = true;
                }
            }
        }
        if (!action && something) {
            for (y = OB.hub.length - 1; y >= 0; y--) {
                if (OB.hub[y].doSomething === something) {
                    OB.hub.splice(y, 1);
                    actionState = true;
                }
            }
        }
        if (action && something) {
            for (z = OB.hub.length - 1; z >= 0; z--) {
                if (OB.hub[z].action && OB.hub[z].action === action) {
                    if (OB.hub[z].doSomething === something) {
                        OB.hub.splice(z, 1);
                        actionState = true;
                        break;
                    }
                }
            }
        }
        if (!actionState) {
            console.error('unPublish:' + action + ' not exist!!');
        }
    },
    fire: function (action, doSomething) {
        var actionState = false,
            i;
        for (i = 0; i < OB.hub.length; i++) {
            if (OB.hub[i].action === action) {
                OB.hub[i].doSomething(doSomething);
                actionState = true;
            }
        }
        if (!actionState) {
            console.error('fire:' + action + ' not exist!!');
        }
    }
};
