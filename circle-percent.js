import { LitElement, html, css } from '/node_modules/lit-element/lit-element.js';

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
      radio: { type: Number },
      swidth: { type: Number },
      scolor: { type: String },
      _dasharray: { type: String }
    }
  }

  static get styles() {
    return css`
      svg { transform: rotateX(180deg) rotateY(180deg); }
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
    `;
  }

  constructor() {
    super();
    this.title = "TITLE";
    this.percent = 25;
    this.radio = 100;
    this.swidth = 4;
    this.scolor = "#cb2240";
    this._dasharray = "" + Math.PI * this.radio * this.percent/100 + " " + Math.PI * this.radio;
  }

  updated(changedProperties) {
    if (changedProperties.get('radio') !== this.radio || changedProperties.get('percent') !== this.percent) {
      this._dasharray = "" + Math.PI * this.radio * this.percent/100 + " " + Math.PI * this.radio;
    }
  }

  render() {
    return html`
      <div class="circle-inf">
        <div class="circle-inf__percent">
          <div class="circle-inf__percent-circle">
            <svg width="${this.radio+this.swidth}" height="${this.radio+this.swidth}" 
                viewBox="0 ${-this.swidth/2} ${this.radio} ${this.radio+this.swidth}">
              <circle cx="${this.radio/2}" cy="${this.radio/2}" 
                      r="${this.radio/2}" stroke="${this.scolor}" fill="none"
                      stroke-width="${this.swidth}"
                      stroke-dasharray="${this._dasharray}" />
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