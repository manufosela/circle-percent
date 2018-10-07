import { LitElement, html } from '/node_modules/@polymer/lit-element/lit-element.js';
import {afterNextRender, beforeNextRender} from '/node_modules/@polymer/polymer/lib/utils/render-status.js';

/**
 * `circle-alone`
 * Circle Alone
 *
 * @customElement
 * @polymer
 * @demo
 */
class CircleAlone extends LitElement {
  static get properties() {
    return {
      percent: { type: Number },
      dasharray: { type:  String },
    }
  }

  constructor() {
    super();
    this.dasharray = "225, 300";
  }

  render() {
    return html`
    <svg>
      <circle cx="50" cy="50" r="47" stroke-dasharray="${this.dasharray}" stroke="#cb2240" stroke-width="4" fill="none" />
    </svg>
    `;
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
class CirclePercent extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      percent: { type: Number },
      dasharray: { type: String },
      _radio: { type: Number },
      diametro:{ type: Number }
    }
  }

  constructor() {
    super();
    this.title = "TITLE";
    this.percent = 25;
    this.dasharray = '' + 300 * this.percent / 100 + ' 300';
    this._radio = 100;
    this.diametro = this._radio * 2;
  }

  updated(changedProperties) {
    this.dasharray = '' + 300 * this.percent / 100 + ' 300';
    this.diametro = this._radio * 2;
  }

  render() {
    return html`
    <style>
      .circle-inf {
        text-align: center;
      }
      @media screen and (max-width: 767px) {
        .circle-inf {
          width: 100%;
        }
      }
      .circle-inf__percent {
        font-weight: 700;
        font-size: 22px;
        letter-spacing: 1px;
        margin-bottom: 12px;
        font-family: "Dosis", sans-serif;
        position: relative;
      }
      .circle-inf__percent circle {
        transform: rotate(180deg) scaleY(-1);
        transform-origin: 50%;
      }
      .circle-inf__percent-txt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .circle-inf__title {
        font-family: "Dosis", sans-serif;
        font-weight: 700;
        letter-spacing: 2px;
        font-size: 18px;
      }
      
    </style>
    <div class="circle-inf">
      <div class="circle-inf__percent">
        <div class="circle-inf__percent-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0c1e2c" stop-opacity="0" />
                <stop offset="100%" stop-color="#cb2240" stop-opacity="1" />
              </linearGradient>
            </defs>
            <foreignObject>
              <circle-alone dasharray="${this.dasharray}"></circle-alone>
            </foreignObject>
          </svg>
        </div>
        <div class="circle-inf__percent-txt">
          ${this.percent}%
        </div>
      </div>
      <span class="circle-inf__title">${this.title}</span>
    </div>
    `;
  }
}

window.customElements.define('circle-percent', CirclePercent);