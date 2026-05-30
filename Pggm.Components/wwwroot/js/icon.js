var A=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var w=n=>{throw TypeError(n)};var d=(n,s,e,o)=>{for(var t=o>1?void 0:o?N(s,e):s,i=n.length-1,a;i>=0;i--)(a=n[i])&&(t=(o?a(s,e,t):a(t))||t);return o&&t&&A(s,e,t),t};var b=(n,s,e)=>s.has(n)||w("Cannot "+e);var c=(n,s,e)=>(b(n,s,"read from private field"),e?e.call(n):s.get(n)),g=(n,s,e)=>s.has(n)?w("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(n):s.set(n,e);var h=(n,s,e)=>(b(n,s,"access private method"),e);var x=`:host{display:inline-block;vertical-align:text-top}.icon__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.icon svg{display:block;height:1.5em;height:var(--pggm-icon-height,var(--pggm-responsive-components-icons-large-height,1.5em));width:1.5em;width:var(--pggm-icon-width,var(--pggm-responsive-components-icons-large-width,1.5em))}.icon.icon--small svg{height:1.5em;height:var(--pggm-icon-height,var(--pggm-responsive-components-icons-small-height,1.5em));width:1.5em;width:var(--pggm-icon-width,var(--pggm-responsive-components-icons-small-width,1.5em))}.icon.icon--medium svg{height:1.5em;height:var(--pggm-icon-height,var(--pggm-responsive-components-icons-medium-height,1.5em));width:1.5em;width:var(--pggm-icon-width,var(--pggm-responsive-components-icons-medium-width,1.5em))}.icon__wrapper--has-custom-size .icon svg{height:var(--_custom-height);width:var(--_custom-width)}.icon[data-name=loading] svg{-webkit-animation:loadingIndicator 2s ease-in-out 0s infinite normal none running;animation:loadingIndicator 2s ease-in-out 0s infinite normal none running}#SvgSlotContainer,svg.icon__svg--hidden{display:none;visibility:hidden}@-webkit-keyframes loadingIndicator{0%{stroke-dasharray:1px,100px;stroke-dashoffset:0}50%{stroke-dasharray:50px,100px;stroke-dashoffset:-8px}to{stroke-dasharray:1px,100px;stroke-dashoffset:-60px}}@keyframes loadingIndicator{0%{stroke-dasharray:1px,100px;stroke-dashoffset:0}50%{stroke-dasharray:50px,100px;stroke-dashoffset:-8px}to{stroke-dasharray:1px,100px;stroke-dashoffset:-60px}}
`;var M=["alert-filled","alert","apple","arrow-back-up","arrow-forward-up","calendar","chart-bars","chevron-down","chevron-left","chevron-right","chevron-up","copy","eraser","heart","info","mood-smile","pencil","trash","user","users","loading"];var S=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0"\r
  style="display:none;">\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-alert-filled">\r
    <g fill="currentColor">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path\r
        d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z">\r
      </path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-alert">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M12 9v4"></path>\r
      <path\r
        d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z">\r
      </path>\r
      <path d="M12 16h.01"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-apple">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path\r
        d="M4 11.319c0 3.102 .444 5.319 2.222 7.978c1.351 1.797 3.156 2.247 5.08 .988c.426 -.268 .97 -.268 1.397 0c1.923 1.26 3.728 .809 5.079 -.988c1.778 -2.66 2.222 -4.876 2.222 -7.977c0 -2.661 -1.99 -5.32 -4.444 -5.32c-1.267 0 -2.41 .693 -3.22 1.44a.5 .5 0 0 1 -.672 0c-.809 -.746 -1.953 -1.44 -3.22 -1.44c-2.454 0 -4.444 2.66 -4.444 5.319">\r
      </path>\r
      <path d="M7 12c0 -1.47 .454 -2.34 1.5 -3"></path>\r
      <path d="M12 7c0 -1.2 .867 -4 3 -4"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-arrow-back-up">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M9 14l-4 -4l4 -4"></path>\r
      <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-arrow-forward-up">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M15 14l4 -4l-4 -4"></path>\r
      <path d="M19 10h-11a4 4 0 1 0 0 8h1"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-calendar">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>\r
      <path d="M16 3v4"></path>\r
      <path d="M8 3v4"></path>\r
      <path d="M4 11h16"></path>\r
      <path d="M11 15h1"></path>\r
      <path d="M12 15v3"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-chart-bars">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>\r
      <path d="M9 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>\r
      <path d="M15 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>\r
      <path d="M4 20h14"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-chevron-down">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M6 9l6 6l6 -6"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-chevron-left">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M15 6l-6 6l6 6"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-chevron-right">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M9 6l6 6l-6 6"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-chevron-up">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M6 15l6 -6l6 6"></path>\r
    </g>\r
\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-copy">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path\r
        d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z">\r
      </path>\r
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-eraser">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3"></path>\r
      <path d="M18 13.3l-6.3 -6.3"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-heart">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-info">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>\r
      <path d="M12 9h.01"></path>\r
      <path d="M11 12h1v4h1"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-mood-smile">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>\r
      <path d="M9 10l.01 0"></path>\r
      <path d="M15 10l.01 0"></path>\r
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-pencil">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>\r
      <path d="M13.5 6.5l4 4"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-trash">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M4 7l16 0"></path>\r
      <path d="M10 11l0 6"></path>\r
      <path d="M14 11l0 6"></path>\r
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>\r
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-user">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>\r
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-users">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>\r
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>\r
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-close">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\r
	    <path d="M18 6l-12 12" />\r
	    <path d="M6 6l12 12" />\r
    </g>\r
  </symbol>\r
  <symbol viewBox="0 0 24 24" id="pggm-icons-loading">\r
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
      <circle cx="12" cy="12" r="10">\r
        <animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/>\r
      </circle>\r
    </g>\r
</svg>\r
`;var $=["s","m","l","xl"],D=["small","medium","large"],V={s:"small",m:"medium",l:"large",xl:"large"},Y=Object.keys(M),W=new Set(["svg","g","path","circle","rect","line","polyline","polygon","ellipse","defs","clippath","mask","pattern","lineargradient","radialgradient","stop","use","symbol","title","desc","animate","animatetransform","animatemotion","set","mpath"]),z=new Set(["viewBox","xmlns","d","fill","stroke","stroke-width","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-dasharray","stroke-dashoffset","fill-rule","clip-rule","opacity","fill-opacity","stroke-opacity","x","y","x1","y1","x2","y2","cx","cy","r","rx","ry","width","height","points","transform","href","xlink:href","id","preserveAspectRatio","gradientUnits","gradientTransform","offset","stop-color","stop-opacity","mask","clip-path","role","aria-hidden","attributename","attributetype","begin","dur","end","min","max","restart","repeatcount","repeatdur","calcmode","values","keytimes","keysplines","from","to","by","additive","accumulate","type","path","keypoints","rotate","origin","class"]),O=new Set(["href","xlink:href"]),r,f,u,C,v,m,k,_,y,E,l=class extends CustomElement{constructor(){super(...arguments);g(this,r);this.size="large";g(this,u,e=>{let i=new DOMParser().parseFromString(S,"image/svg+xml").querySelector("svg");i&&e.appendChild(i)});g(this,v,e=>{let t=e.target.assignedElements().find(i=>i.tagName.toLowerCase()==="svg");this._remoteSvg=t?t.cloneNode(!0):void 0,this.renderNow(),h(this,r,m).call(this)})}connectedCallback(){this.setAttribute("role","presentation"),this.icon=this.getAttribute("icon")||""}render(){return Maquette.h("div",{classes:{icon__wrapper:!0,"icon__wrapper--has-custom-size":c(this,r,f)}},Maquette.h("div",{id:"SvgSlotContainer",hidden:"hidden",afterCreate:c(this,u)},Maquette.h("slot",{name:"svg",onslotchange:c(this,v)})),Maquette.h("div",{"data-name":this.icon,classes:{icon:!0,"icon--small":this.size==="small","icon--medium":this.size==="medium","icon--large":this.size==="large"}},Maquette.h("svg",{classes:{icon__svg:!0,"icon__svg--hidden":!this._remoteSvg},id:"LoadedSvg",key:"loaded-svg",afterCreate:()=>h(this,r,m).call(this)}),Maquette.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",id:"DefaultSvg",classes:{icon__svg:!0,"icon__svg--hidden":this._remoteSvg}},Maquette.h("use",{href:`#pggm-icons-${this.icon}`,x:"0",y:"0"}))))}updated(e,o,t){switch(e){case"icon":this.icon=t;break;case"size":D.includes(t)?this.size=t:$.includes(t)&&(this.size=V[t],console.log(`Warning: size value "${t}" is deprecated. Please use "${this.size}" instead.`));break;case"src":h(this,r,C).call(this,t);break;case"width":case"height":if(c(this,r,f)&&this.width&&this.height){let i=/^\d+$/.test(this.width)?`${this.width}px`:this.width,a=/^\d+$/.test(this.height)?`${this.height}px`:this.height;this.style.setProperty("--_custom-width",i),this.style.setProperty("--_custom-height",a)}else this.style.removeProperty("--_custom-width"),this.style.removeProperty("--_custom-height");this.renderNow();break}}};r=new WeakSet,f=function(){return!!(this.width&&this.height)},u=new WeakMap,C=function(e){if(!e){this._remoteSvg=void 0,this.renderNow();return}fetch(new URL(e,location.href)).then(o=>{if(!o.ok)throw new Error(`Error loading SVG: ${o.status} ${o.statusText}`);let t=o.headers.get("content-type")||"";if(!t.includes("image/svg+xml")&&!t.includes("text/xml"))throw new Error("Error loading SVG: invalid content type");return o.text()}).then(o=>{let a=new DOMParser().parseFromString(o,"image/svg+xml").querySelector("svg");if(a){this._remoteSvg=a,this.renderNow(),h(this,r,m).call(this);return}this._remoteSvg=void 0,this.renderNow()}).catch(o=>{console.error("Error loading SVG:",o),this._remoteSvg=void 0,this.renderNow()})},v=new WeakMap,m=function(){let e=this._loadedSvgElement;if(!e||!this._remoteSvg)return;let o=new Set(["icon__svg","icon__svg--hidden"]),t=e.attributes;for(let i of t)if(i.name==="class"){let a=i.value.split(" ").filter(p=>o.has(p));e.setAttribute("class",a.join(" "))}else e.removeAttribute(i.name);for(h(this,r,y).call(this,this._remoteSvg,e);e.firstChild;)e.firstChild.remove();h(this,r,k).call(this,this._remoteSvg,e)},k=function(e,o){let t=Array.from(e.children);for(let i of t){let a=h(this,r,_).call(this,i);a&&(o.appendChild(a),h(this,r,k).call(this,i,a))}},_=function(e){let o=e.tagName.toLowerCase();if(!W.has(o))return null;let t=e.namespaceURI||"http://www.w3.org/2000/svg",i=document.createElementNS(t,e.tagName);return h(this,r,y).call(this,e,i),i},y=function(e,o){let t=Array.from(e.attributes);for(let i of t){let a=i.name,p=a.toLowerCase(),j=z.has(a)||z.has(p),H=p.startsWith("on"),B=O.has(p)?h(this,r,E).call(this,i.value):!0;j&&!H&&B&&o.setAttribute(i.name,i.value)}},E=function(e){let o=e.trim();if(!o)return!1;if(o.startsWith("#"))return!0;let t=o.toLowerCase();if(t.startsWith("javascript:"))return!1;if(t.startsWith("data:"))return t.startsWith("data:image/");try{return new URL(o,location.href),!0}catch(i){return!1}},l.style=x,d([Property({type:"string",attribute:"icon",reflect:!0})],l.prototype,"icon",2),d([Property({type:"string",attribute:"size",reflect:!0})],l.prototype,"size",2),d([Property({type:"string",attribute:"src",reflect:!0})],l.prototype,"src",2),d([Property({type:"string",attribute:"width",reflect:!0})],l.prototype,"width",2),d([Property({type:"string",attribute:"height",reflect:!0})],l.prototype,"height",2),d([Query("#LoadedSvg")],l.prototype,"_loadedSvgElement",2),l=d([CustomElementConfig({tagName:"pggm-icon"})],l);export{l as PGGMIcon};
