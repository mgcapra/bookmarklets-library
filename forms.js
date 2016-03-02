/*
*   forms.js: highlight form-related elements
*/

import { Bookmarklet } from './Bookmarklet';
import { InfoObject } from './InfoObject';
import { getAppName, getUniqueCssClass } from './utils/constants';

(function () {
  initForms().run()
})();

function initForms () {
  const appName  = getAppName('Forms');
  const cssClass = getUniqueCssClass('Forms');

  let targetList = [
    {selector: "button",   color: "purple", label: "button"},
    {selector: "input",    color: "navy",   label: "input"},
    {selector: "keygen",   color: "gray",   label: "keygen"},
    {selector: "meter",    color: "maroon", label: "meter"},
    {selector: "output",   color: "teal",   label: "output"},
    {selector: "progress", color: "olive",  label: "progress"},
    {selector: "select",   color: "green",  label: "select"},
    {selector: "textarea", color: "brown",  label: "textarea"}
  ];

  let selectors = targetList.map(function (tgt) {return '<li>' + tgt.selector + '</li>';}).join('');

  function getInfo (element, target) {
    return new InfoObject(element, 'FORM INFO');
  }

  let params = {
    msgTitle:   "Forms",
    msgText:    "No form-related elements found: <ul>" + selectors + "</ul>",
    targetList: targetList,
    cssClass:   cssClass,
    getInfo:    getInfo,
    dndFlag:    true
  };

  return new Bookmarklet(appName, params);
}
