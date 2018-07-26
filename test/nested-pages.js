/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '../iron-pages.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <h1>header</h1>
    <iron-pages selected="{{selected}}" on-iron-items-changed="refire" on-selected-item-changed="reselect">
      <slot></slot>
    </iron-pages>
`,

  is: 'nested-pages',

  properties: {
    selected: {
      type: Number,
      value: 0,
    },
  },

  refire: function(e, detail) {
    this.items = e.target.items;
    this.fire('iron-items-changed', e);
  },

  reselect: function(e, detail) {
    this.selectedItem = e.target.selectedItem;
  }
});
