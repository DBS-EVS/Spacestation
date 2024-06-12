class W{constructor(e){this.properties=e??[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const Y="https://unpkg.com/@workadventure/scripting-api-extra@1.9.1/dist";class oe{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new W(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function U(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(Y+"/configuration.html"+e,!0)}async function se(t,e){const n=await WA.room.getTiledMap(),r=new Map;return J(n.layers,r,t,e),r}function J(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(n&&o.name!==n||r&&!r.includes(s.name))continue;e.set(s.name,new oe(s))}}else o.type==="group"&&J(o.layers,e,n,r)}let x;async function T(){return x===void 0&&(x=ae()),x}async function ae(){return ie(await WA.room.getTiledMap())}function ie(t){const e=new Map;return Q(t.layers,"",e),e}function Q(t,e,n){for(const r of t)r.type==="group"?Q(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}async function F(){const t=await T(),e=[];for(const n of t.values())if(n.type==="objectgroup")for(const r of n.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function ue(t){let e=1/0,n=1/0,r=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<t.height;a++)for(let i=0;i<t.width;i++)s[i+a*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),n=Math.min(n,a),r=Math.max(r,a));return{top:n,left:e,right:o+1,bottom:r+1}}function Z(t){let e=1/0,n=1/0,r=0,o=0;for(const s of t){const a=ue(s);a.left<e&&(e=a.left),a.top<n&&(n=a.top),a.right>o&&(o=a.right),a.bottom>r&&(r=a.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ce=Object.prototype.toString,C=Array.isArray||function(e){return ce.call(e)==="[object Array]"};function G(t){return typeof t=="function"}function le(t){return C(t)?"array":typeof t}function V(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function O(t,e){return t!=null&&typeof t=="object"&&e in t}function fe(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var pe=RegExp.prototype.test;function ge(t,e){return pe.call(t,e)}var he=/\S/;function de(t){return!ge(he,t)}var ye={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ve(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return ye[n]})}var me=/\s*/,be=/\s+/,_=/\s*=/,we=/\s*\}/,Ae=/#|\^|\/|>|\{|&|=|!/;function We(t,e){if(!t)return[];var n=!1,r=[],o=[],s=[],a=!1,i=!1,u="",l=0;function p(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var d,v,k;function P(b){if(typeof b=="string"&&(b=b.split(be,2)),!C(b)||b.length!==2)throw new Error("Invalid tags: "+b);d=new RegExp(V(b[0])+"\\s*"),v=new RegExp("\\s*"+V(b[1])),k=new RegExp("\\s*"+V("}"+b[1]))}P(e||h.tags);for(var f=new M(t),m,c,y,L,B,w;!f.eos();){if(m=f.pos,y=f.scanUntil(d),y)for(var R=0,re=y.length;R<re;++R)L=y.charAt(R),de(L)?(s.push(o.length),u+=L):(i=!0,n=!0,u+=" "),o.push(["text",L,m,m+1]),m+=1,L===`
`&&(p(),u="",l=0,n=!1);if(!f.scan(d))break;if(a=!0,c=f.scan(Ae)||"name",f.scan(me),c==="="?(y=f.scanUntil(_),f.scan(_),f.scanUntil(v)):c==="{"?(y=f.scanUntil(k),f.scan(we),f.scanUntil(v),c="&"):y=f.scanUntil(v),!f.scan(v))throw new Error("Unclosed tag at "+f.pos);if(c==">"?B=[c,y,m,f.pos,u,l,n]:B=[c,y,m,f.pos],l++,o.push(B),c==="#"||c==="^")r.push(B);else if(c==="/"){if(w=r.pop(),!w)throw new Error('Unopened section "'+y+'" at '+m);if(w[1]!==y)throw new Error('Unclosed section "'+w[1]+'" at '+m)}else c==="name"||c==="{"||c==="&"?i=!0:c==="="&&P(y)}if(p(),w=r.pop(),w)throw new Error('Unclosed section "'+w[1]+'" at '+f.pos);return Ce(Se(o))}function Se(t){for(var e=[],n,r,o=0,s=t.length;o<s;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function Ce(t){for(var e=[],n=e,r=[],o,s,a=0,i=t.length;a<i;++a)switch(o=t[a],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function M(t){this.string=t,this.tail=t,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};M.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function S(t,e){this.view=t,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,s,a,i,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(u=O(s,a[i])||fe(s,a[i])),s=s[a[i++]];else s=o.view[e],u=O(o.view,e);if(u){r=s;break}o=o.parent}n[e]=r}return G(r)&&(r=r.call(this.view)),r};function g(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};g.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||h.tags).join(":"),s=typeof r<"u",a=s?r.get(o):void 0;return a==null&&(a=We(e,n),s&&r.set(o,a)),a};g.prototype.render=function(e,n,r,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=n instanceof S?n:new S(n,void 0);return this.renderTokens(a,i,r,e,o)};g.prototype.renderTokens=function(e,n,r,o,s){for(var a="",i,u,l,p=0,d=e.length;p<d;++p)l=void 0,i=e[p],u=i[0],u==="#"?l=this.renderSection(i,n,r,o,s):u==="^"?l=this.renderInverted(i,n,r,o,s):u===">"?l=this.renderPartial(i,n,r,s):u==="&"?l=this.unescapedValue(i,n):u==="name"?l=this.escapedValue(i,n,s):u==="text"&&(l=this.rawValue(i)),l!==void 0&&(a+=l);return a};g.prototype.renderSection=function(e,n,r,o,s){var a=this,i="",u=n.lookup(e[1]);function l(v){return a.render(v,n,r,s)}if(u){if(C(u))for(var p=0,d=u.length;p<d;++p)i+=this.renderTokens(e[4],n.push(u[p]),r,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],n.push(u),r,o,s);else if(G(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,o.slice(e[3],e[5]),l),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],n,r,o,s);return i}};g.prototype.renderInverted=function(e,n,r,o,s){var a=n.lookup(e[1]);if(!a||C(a)&&a.length===0)return this.renderTokens(e[4],n,r,o,s)};g.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!r)&&(s[a]=o+s[a]);return s.join(`
`)};g.prototype.renderPartial=function(e,n,r,o){if(r){var s=this.getConfigTags(o),a=G(r)?r(e[1]):r[e[1]];if(a!=null){var i=e[6],u=e[5],l=e[4],p=a;u==0&&l&&(p=this.indentPartial(a,l,i));var d=this.parse(p,s);return this.renderTokens(d,n,r,p,o)}}};g.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};g.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||h.escape,s=n.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===h.escape?String(s):o(s)};g.prototype.rawValue=function(e){return e[1]};g.prototype.getConfigTags=function(e){return C(e)?e:e&&typeof e=="object"?e.tags:void 0};g.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!C(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){E.templateCache=t},get templateCache(){return E.templateCache}},E=new g;h.clearCache=function(){return E.clearCache()};h.parse=function(e,n){return E.parse(e,n)};h.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+le(e)+'" was given as the first argument for mustache#render(template, view, partials)');return E.render(e,n,r,o)};h.escape=ve;h.Scanner=M;h.Context=S;h.Writer=g;class ee{constructor(e,n){this.template=e,this.state=n,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],s=r[1],a=r[4];["name","&","#","^"].includes(o)&&n.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,n)}}}async function Pe(){var t;const e=await F();for(const n of e){const r=(t=n.properties)!==null&&t!==void 0?t:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new ee(o.value,WA.state);if(s.isPureString())continue;const a=s.getValue();await N(n.name,o.name,a),s.onChange(async i=>{await N(n.name,o.name,i)})}}}async function Le(){var t;const e=await T();for(const[n,r]of e.entries())if(r.type!=="objectgroup"){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new ee(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();q(n,s.name,i),a.onChange(u=>{q(n,s.name,u)})}}}async function N(t,e,n){console.log(t),(await WA.room.area.get(t)).setProperty(e,n)}function q(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}const Ee="https://admin.workadventu.re/html";let j,I=0,D=0;function K(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Te(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=ne(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Me(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=ne(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function te(t){return t.map(e=>j.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function ne(t){const e=te(t),n=Z(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(I-r,2)+Math.pow(D-o,2))}function ke(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Te(t):Me(t),K(t)}),K(t)}function $(t,e,n,r){const o=t.name;let s,a,i=!1;const u=n.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const p=!!u;function d(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=n.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,v()}})}function v(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=n.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function k(){let c;if(t.type==="tilelayer")c=Z(te(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);c={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}a=WA.room.website.create({name:"doorKeypad"+o,url:r+"/keypad.html#"+encodeURIComponent(o),position:{x:c.right*32,y:c.top*32,width:32*3,height:32*4},allowApi:!0})}function P(){a&&(WA.room.website.delete(a.name),a=void 0)}function f(){if(i=!0,n.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!l||!p)&&(n.getString("code")||n.getString("codeVariable"))){k();return}l&&(WA.state[e.name]?d():v())}function m(){i=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),P()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(f),WA.room.onLeaveLayer(o).subscribe(m)):(WA.room.area.onEnter(o).subscribe(f),WA.room.area.onLeave(o).subscribe(m)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),a&&WA.state[e.name]===!0&&P(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&v())})}function Be(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-I,2)+Math.pow(t.y-D,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function Re(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Be(t)})}function z(t,e,n){let r;const o=e.getString("bellPopup");if(n.type==="tilelayer"){const s=n.name;WA.room.onEnterLayer(s).subscribe(()=>{var a;o?r=WA.ui.openPopup(o,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(s).subscribe(()=>{r&&(r.close(),r=void 0)})}else{const s=n.name;WA.room.area.onEnter(s).subscribe(()=>{var a;o?r=WA.ui.openPopup(o,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(s).subscribe(()=>{r&&(r.close(),r=void 0)})}}async function xe(t){t=t??Ee;const e=await se();j=await T();for(const n of e.values())n.properties.get("door")&&ke(n),n.properties.get("bell")&&Re(n);for(const n of j.values()){const r=new W(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');$(n,a,r,t)}const s=r.getString("bellVariable");s&&n.type==="tilelayer"&&z(s,r,n)}for(const n of await F()){const r=new W(n.properties),o=r.getString("doorVariable");if(o){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+n.name+'"');$(n,a,r,t)}const s=r.getString("bellVariable");s&&z(s,r,n)}WA.player.onPlayerMove(n=>{I=n.x,D=n.y})}function Ve(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),a=t.getString("tag");je(n,e,r,o,s,a)}}function je(t,e,n,r,o,s){s&&!WA.player.tags.includes(s)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function Ge(){const t=await T();for(const e of t.values()){const n=new W(e.properties);Ve(n,e.name)}}let H;async function Ie(t){const e=await WA.room.getTiledMap();t=t??Y,H=await T();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new W(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of H.values()){const a=new W(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&De(i.split(","),s.name,a)}}}function De(t,e,n){let r;const o=n.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=n.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>U(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=n.getString("openConfigTrigger");s&&(u&&u==="onaction"?a():U(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function Ue(){return WA.onInit().then(()=>{xe().catch(t=>console.error(t)),Ge().catch(t=>console.error(t)),Ie().catch(t=>console.error(t)),Le().catch(t=>console.error(t)),Pe().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let A;var X="DBPlanetZone",Oe="https://db-planet.deutschebahn.com/pages/dbverse/apps/content/informationen";WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer(X).subscribe(()=>{A=WA.ui.openPopup("DBPlanetPopup","DB Planet WorkAdventure",[{label:"Öffnen",callback:t=>{WA.nav.openTab(Oe),t.close(),A=void 0}},{label:"Schließen",callback:t=>{t.close(),A=void 0}}])}),WA.room.onLeaveLayer(X).subscribe(()=>{_e()}),Ue().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));function _e(){A!==void 0&&(A.close(),A=void 0)}
//# sourceMappingURL=main-a2b3cf18.js.map
