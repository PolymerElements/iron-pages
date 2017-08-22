import '../polymer/polymer.js';
import { IronResizableBehavior } from '../iron-resizable-behavior/iron-resizable-behavior.js';
import { IronSelectableBehavior } from '../iron-selector/iron-selectable.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,

  is: 'iron-pages',

  behaviors: [
    IronResizableBehavior,
    IronSelectableBehavior
  ],

  properties: {

    // as the selected page is the only one visible, activateEvent
    // is both non-sensical and problematic; e.g. in cases where a user
    // handler attempts to change the page and the activateEvent
    // handler immediately changes it back
    activateEvent: {
      type: String,
      value: null
    }

  },

  observers: [
    '_selectedPageChanged(selected)'
  ],

  _selectedPageChanged: function(selected, old) {
    this.async(this.notifyResize);
  }
});
