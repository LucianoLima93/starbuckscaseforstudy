import{i as e,o as t,r as n,s as r}from"./index-DKeLTfey.js";r();var i=t(),a=n.div`
  width: 100%;
`,o=n.div`
  width: 100%;
  max-width: ${e=>e.theme.box.lg};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`,s=n.h1`
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: ${e=>e.theme.font.weight.bold};
  font-size: 1.4rem;
  color: ${e=>e.theme.color.neutral.high.pure} ;
`,c=n.div`
  background-color: ${e=>e.theme.color.brand.darkest};
  box-shadow: ${e=>e.theme.boxShadow.rewardsBanner};
  height: 50px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
`,l=n.div`
  background-color: ${e=>e.theme.color.brand.light};
  background-image: ${e=>e.desktopImage};
  display: flex;
  background-size: cover;
  @media screen and (min-width: 768px) {
    background-position: 50%;
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
`,u=n.div`

`;n.div`
  h2 {
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 1.29;
  }
  span {
    font-size: 1.9rem;
    padding-top: 1.6rem;
    display: block;
  }
`;var d=e(),f=()=>{let e=(0,i.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,d.jsx)(u,{children:(0,d.jsx)(l,{desktopImage:`url(https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png)`,children:(0,d.jsx)(`div`,{style:{maxWidth:`1440px`,width:`100%`,boxSizing:`content-box`,margin:`0 auto`},children:(0,d.jsx)(`div`,{style:{paddingBottom:`56.25%`}})})})}),e[0]=t):t=e[0],t},p=()=>{let e=(0,i.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,d.jsxs)(a,{children:[(0,d.jsx)(c,{children:(0,d.jsx)(o,{children:(0,d.jsx)(s,{children:`Starbucks® Rewards`})})}),(0,d.jsx)(f,{})]}),e[0]=t):t=e[0],t};export{p as default};