(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function u(){}function Y(e){return e()}function D(){return Object.create(null)}function w(e){e.forEach(Y)}function Z(e){return typeof e=="function"}function L(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function te(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function ne(e){return document.createTextNode(e)}function P(){return ne(" ")}function M(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function re(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function oe(e){return Array.from(e.childNodes)}function Q(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function R(e,t){return new e(t)}let q;function k(e){q=e}const v=[],U=[],j=[],V=[],ie=Promise.resolve();let H=!1;function se(){H||(H=!0,ie.then(ee))}function N(e){j.push(e)}const O=new Set;let A=0;function ee(){const e=q;do{for(;A<v.length;){const t=v[A];A++,k(t),ae(t.$$)}for(k(null),v.length=0,A=0;U.length;)U.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];O.has(n)||(O.add(n),n())}j.length=0}while(v.length);for(;V.length;)V.pop()();H=!1,O.clear(),k(e)}function ae(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const T=new Set;let b;function le(){b={r:0,c:[],p:b}}function ce(){b.r||w(b.c),b=b.p}function F(e,t){e&&e.i&&(T.delete(e),e.i(t))}function W(e,t,n,r){if(e&&e.o){if(T.has(e))return;T.add(e),b.c.push(()=>{T.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function X(e){e&&e.c()}function S(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||N(()=>{const l=e.$$.on_mount.map(Y).filter(Z);e.$$.on_destroy?e.$$.on_destroy.push(...l):w(l),e.$$.on_mount=[]}),i.forEach(N)}function B(e,t){const n=e.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&(v.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function C(e,t,n,r,o,i,l,p=[-1]){const m=q;k(e);const s=e.$$={fragment:null,ctx:[],props:i,update:u,not_equal:o,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:D(),dirty:p,skip_bound:!1,root:t.target||m.$$.root};l&&l(s.root);let g=!1;if(s.ctx=n?n(e,t.props||{},(f,a,..._)=>{const y=_.length?_[0]:a;return s.ctx&&o(s.ctx[f],s.ctx[f]=y)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](y),g&&ue(e,f)),a}):[],s.update(),g=!0,w(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const f=oe(t.target);s.fragment&&s.fragment.l(f),f.forEach(x)}else s.fragment&&s.fragment.c();t.intro&&F(e.$$.fragment),S(e,t.target,t.anchor,t.customElement),ee()}k(m)}class I{$destroy(){B(this,1),this.$destroy=u}$on(t,n){if(!Z(n))return u;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function fe(e){let t;return{c(){t=h("main"),t.innerHTML=`<img src="/src/assets/fractal.png" alt="Fractal" style="opacity: 0.35; width: 100%;"/> 
      <div class="center svelte-5wm67h"><h1>I am Carlo, and this is my website!</h1> 
        <h2>My personal site for work!</h2> 
        <h3>Here I have a centralized place for people to access some of the things I have done.</h3></div>`},m(n,r){E(n,t,r)},p:u,i:u,o:u,d(n){n&&x(t)}}}class he extends I{constructor(t){super(),C(this,t,null,fe,L,{})}}function de(e){let t;return{c(){t=h("main"),t.innerHTML=`<h1>About me:</h1> 
  <h2>I have been programming since approximately 2017. Ever since I have been working <br/>
    on several projects, and this website is my place to centralize my work.</h2> 
    <br/>  
    <h2>I have made numerous projects to keep learning, and have even taught others <br/>
         how to program as well. These projects are stored under the projects section.</h2> 
<br/>    
 <h2>If you would like to contact me for any reason, here are my email, hosted under my own mail server:</h2> 
 <br/> 
    <h3><li>For things related to my github/lab: <a href="mailto:gitlab@iscienceworld.com">gitlab@iscienceworld.com</a></li> 
        <li>For things related to my work: <a href="mailto:work@iscienceworld.com">work@iscienceworld.com</a></li> 
        <li><a href="https://stackoverflow.com/users/20360929/givingdonation">my stack overflow account</a></li></h3>`},m(n,r){E(n,t,r)},p:u,i:u,o:u,d(n){n&&x(t)}}}class me extends I{constructor(t){super(),C(this,t,null,de,L,{})}}function pe(e){let t;return{c(){t=h("main"),t.innerHTML=`<h1>Projects:</h1> 
  <h2><li>A website from scratch, to teach a computer science concept: Lambda Math <a href="https://gitlab.com/a8615/lambda-math">(gitlab) </a><a href="https://lambdamath.neocities.org">(Try it!)</a></li> 
      <br/><li>The contributing to a new group for tutoring people in CS at my school: Java2Life <a href="https://github.com/luhi1/Java2Life">(github)</a></li> 
      <br/><li>A website and course on a mathematical topic: Googology Course <a href="https://googologycourse.neocities.org/">(Try it!)</a></li> 
      <br/><li>A website for the future non-profit: Teens Against Trafficking <a href="https://github.com/givingdonation/TATwebsite">(github)</a>  <a href="https://givingdonation.github.io/TATwebsite/dist/">(Try it!)</a></li> 
      <br/><li>A mobile application for school scheduling (won 1st place at FBLA) <a href="https://luhi1/ChronoBound">(github)</a></li> 
      <br/><li>A projects for helping people with class work, particularly a script for automation <a href="https://gitlab.com/a8615">(gitlab)</a></li> 
      <br/><li>A group of small projects for learning various programming languages <a href="https://gitlab.com/learningfromsimpleprojects">(gitlab)</a></li></h2>`},m(n,r){E(n,t,r)},p:u,i:u,o:u,d(n){n&&x(t)}}}class ge extends I{constructor(t){super(),C(this,t,null,pe,L,{})}}function _e(e){let t,n,r,o,i,l,p,m,s,g,f,a,_,y,z;var $=e[1][e[0]];function J(c){return{props:{change_page:c[2]}}}return $&&(a=R($,J(e))),{c(){t=h("main"),n=h("div"),r=h("li"),o=h("button"),o.textContent="Home",i=P(),l=h("li"),p=h("button"),p.textContent="About",m=P(),s=h("li"),g=h("button"),g.textContent="Projects",f=P(),a&&X(a.$$.fragment),Q(r,"display","block"),Q(r,"margin-right","auto"),re(n,"class","navbar svelte-bpqj1y")},m(c,G){E(c,t,G),d(t,n),d(n,r),d(r,o),d(n,i),d(n,l),d(l,p),d(n,m),d(n,s),d(s,g),d(t,f),a&&S(a,t,null),_=!0,y||(z=[M(o,"click",e[3]),M(p,"click",e[4]),M(g,"click",e[5])],y=!0)},p(c,[G]){if($!==($=c[1][c[0]])){if(a){le();const K=a;W(K.$$.fragment,1,0,()=>{B(K,1)}),ce()}$?(a=R($,J(c)),X(a.$$.fragment),F(a.$$.fragment,1),S(a,t,null)):a=null}},i(c){_||(a&&F(a.$$.fragment,c),_=!0)},o(c){a&&W(a.$$.fragment,c),_=!1},d(c){c&&x(t),a&&B(a),y=!1,w(z)}}}function be(e,t,n){const r=[he,me,ge];let o=0;function i(s){n(0,o={home:0,about:1,projects:2}[s])}return[o,r,i,()=>i("home"),()=>i("about"),()=>i("projects")]}class ye extends I{constructor(t){super(),C(this,t,be,_e,L,{})}}new ye({target:document.getElementById("app")});
