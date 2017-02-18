(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){="" "use="" strict";="" module.exports="function" getoffsetrect(elem)="" {="" (1)="" var="" box="elem.getBoundingClientRect();" body="document.body;" docelem="document.documentElement;" (2)="" scrolltop="window.pageYOffset" ||="" docelem.scrolltop="" body.scrolltop;="" scrollleft="window.pageXOffset" docelem.scrollleft="" body.scrollleft;="" (3)="" clienttop="docElem.clientTop" body.clienttop="" 0;="" clientleft="docElem.clientLeft" body.clientleft="" (4)="" top="box.top" +="" -="" clienttop;="" left="box.left" clientleft;="" return="" top:="" math.round(top),="" left:="" math.round(left)="" };="" },{}],2:[function(require,module,exports){="" 'use="" strict';="" _typeof="typeof" symbol="==" "function"="" &&="" typeof="" symbol.iterator="==" "symbol"="" ?="" function="" (obj)="" obj;="" }="" :="" obj="" obj.constructor="==" scrollspy="require('./scroll-spy');" (function="" (factory)="" if="" (typeof="" define="==" 'function'="" define.amd)="" define([],="" factory);="" else="" ((typeof="" window="==" 'undefined'="" _typeof(window))="==" 'object')="" window.scrollspy="factory();" })(function="" ()="" scrollspy;="" });="" },{".="" scroll-spy":3}],3:[function(require,module,exports){="" getoffsetrect="require('./getOffsetRect');" util="require('./util');" $body="document.body;" init:="" init(options)="" classname="options.activeClassName" 'active';="" scrolltarget="options.scrollTarget" document;="" ary="Array.prototype.slice.call(options.nodeList);" items="getItems(ary);" spy(items,="" classname);="" util.bind(scrolltarget,="" 'scroll',="" getitems(ary)="" for="" (var="" i="0," l="ary.length;" <="" l;="" i++)="" id="ary[i].hash.replace(/^#/," '');="" $target="document.getElementById(id);" offset="getOffsetRect($target);" height="window.getComputedStyle(document.getElementById(id))['height'];" items[i]="{" height:="" parseint(height),="" offset.top,="" elem:="" ary[i]="" items;="" classname)="" find="0;" ($body.scrolltop="" items[i].top="" items[i].height="" 3)="" break;="" j="0," _l="items.length;" _l;="" j++)="" util.removeclass(items[j].elem,="" (find=""> 0) {
    util.addClass(items[find - 1].elem, className);
  }
}

},{"./getOffsetRect":1,"./util":4}],4:[function(require,module,exports){
'use strict';

module.exports = {
  bind: function bind(element, name, listener) {
    element.addEventListener(name, listener, false);
  },

  addClass: function addClass(element, className) {
    var classes = element.className.split(' ');
    if (classes.indexOf(className) < 0) {
      classes.push(className);
    }

    element.className = classes.join(' ');
    return element;
  },

  removeClass: function removeClass(element, className) {
    var classes = element.className.split(' ');
    var index = classes.indexOf(className);
    if (index > -1) {
      classes.splice(index, 1);
    }

    element.className = classes.join(' ');
    return element;
  }
};

},{}]},{},[2]);
</r.length;o++)s(r[o]);return>