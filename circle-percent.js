import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `circle-alone`
 * Circle Alone
 *
 * @customElement
 * @polymer
 * @demo
 */
class CircleAlone extends PolymerElement {
  static get template() {
    return html`
      <svg>
        <circle cx="50" cy="50" r="47" stroke-dasharray$="[[dasharray]]" stroke="#cb2240" stroke-width="4" fill="none" />
      </svg>
    `;
  }
  static get properties() {
    return {
      dasharray: {
        type:  String,
        value: '225, 300',
      },
    };
  }
}
window.customElements.define('circle-alone', CircleAlone);


/**
 * `circle-percent`
 * Circle Percent
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CirclePercent extends PolymerElement {
  static get template() {
    return html`
      <style>
        .product-inf {
          text-align: center;
        }
        @media screen and (max-width: 767px) {
          .product-inf {
            width: 100%;
          }
        }
        .product-inf__percent {
          font-weight: 700;
          font-size: 22px;
          letter-spacing: 1px;
          margin-bottom: 12px;
          font-family: "Dosis", sans-serif;
          position: relative;
        }
        .product-inf__percent circle {
          transform: rotate(180deg) scaleY(-1);
          transform-origin: 50%;
        }
        .product-inf__percent-txt {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .product-inf__title {
          font-family: "Dosis", sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 18px;
        }
        
      </style>
      <div class="product-inf">
      <div class="product-inf__percent">
        <div class="product-inf__percent-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0c1e2c" stop-opacity="0" />
                <stop offset="100%" stop-color="#cb2240" stop-opacity="1" />
              </linearGradient>
            </defs>
            <foreignObject>
              <circle-alone dasharray="[[dasharray]]"></circle-alone>
            </foreignObject>
          </svg>
        </div>
        <div class="product-inf__percent-txt">
          [[percent]]%
        </div>
      </div>
      <span class="product-inf__title">[[title]]</span>
    `;
  }
  static get properties() {
    return {
      title: {
        type: String,
        value: 'TITLE',
      },
      percent: {
        type: Number,
        value: 25,
      },
      dasharray: {
        type: String,
        value: function() {
          let a =  '' + 300 * this.percent / 100 + ' 360';
          console.log(a);
          return a;
        }
      },
      _radio: {
        type: Number,
        value:100,
      },
      diametro:{
        type: Number,
        computed: 'getDiametro(_radio)',
      }
    };
  }

  getDiametro(_radio) {
    return _radio*2;
  }
}

window.customElements.define('circle-percent', CirclePercent);
