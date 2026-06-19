import{a as e,c as t,i as n,o as r,r as i,s as a,t as o}from"./index-DKeLTfey.js";import{t as s}from"./index.module-quEGBKVD.js";var c=t(a()),l=r(),u=i.div`
  overflow: hidden;
  z-index: 0;
  padding-left: 131px;
  padding-right: 6.4rem;
  padding-bottom: 1.6rem;
  padding-top: 1.6rem;
  position: relative;
  @media screen and (max-width: ${e=>e.theme.breakpoints.xl}) {
    touch-action: pan-y pinch-zoom;
    padding-left: 1.6rem;
    padding-right: 2.4rem;
    padding-bottom: 1.6rem;
    padding-top: 1.6rem;
  }
`,d=i.div`
  position: relative;
  white-space: nowrap;
  z-index: 0;
  transition: all .4s ease;
  margin-left: -1.6rem;
`;i.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  ${e=>e.direction===`left`?`left: 2.4rem`:`right: 2.4rem`}
`,i.div`
  transition-property: all;
  transition-duration: .2s;
  transition-timing-function: ease;
  width: 40px;
  height: 40px;
  line-height: 4rem;
  background: #fff;
  font-size: 1.6rem;
  box-shadow: 0 0 6px rgb(0 0 0 / 24%), 0 8px 12px rgb(0 0 0 / 14%);
  border-radius: 50%;
  position: relative;
  :active {
    box-shadow: 0 0 6px rgb(0 0 0 / 24%), 0 8px 12px transparent;
    transform: translateY(4px);
  }
  :focus {
    outline: none;
  }
`;var f=i.div`
  width: 24.16667%;
  padding: 0 1.6rem;
  white-space: normal;
  display: inline-block;
  transition: opacity 150ms;
  &.inactive-carousel {
    opacity: .2;
    pointer-events: none;
  }
  width: 50%;
  padding: 0 0.8rem;
  @media screen and (min-width: 480px) {
    width: 33.33333%;
  }
  @media screen and (min-width: 1024px) {
    width: 25%;
  }
  @media screen and (min-width: 1024px) {
    width: 24.16667%;
    padding: 0 1.6rem;
  }
`,p=e=>Math.trunc(parseFloat(e.toFixed(1))),m=n(),h=e=>{let t=(0,l.c)(30),{carouselData:n,renderCard:r}=e,i=r===void 0?g:r,a=(0,c.useRef)(null),o=(0,c.useRef)(null),[h,y]=(0,c.useState)(0),[b,x]=(0,c.useState)(0),[S,C]=(0,c.useState)(0),w;t[0]===n?w=t[1]:(w=()=>{let e=o.current.offsetWidth||0,t=a.current.offsetWidth||0,r=t>0&&e>0?p(e/t):0;y(t*r),C(Math.ceil(n&&n.length/r)-1)},t[0]=n,t[1]=w);let T=w,E,D;t[2]===T?(E=t[3],D=t[4]):(E=()=>{T()},D=[T],t[2]=T,t[3]=E,t[4]=D),(0,c.useEffect)(E,D);let O;t[5]===T?O=t[6]:(O=()=>{T(),x(0)},t[5]=T,t[6]=O);let k=s(O,100),A,j;t[7]===k?(A=t[8],j=t[9]):(A=()=>(window.addEventListener(`resize`,k),()=>{window.removeEventListener(`resize`,k)}),j=[k],t[7]=k,t[8]=A,t[9]=j),(0,c.useLayoutEffect)(A,j);let M;t[10]!==n||t[11]!==i?(M=n.map((e,t)=>(0,m.jsx)(f,{ref:a,children:i(e)},t)),t[10]=n,t[11]=i,t[12]=M):M=t[12];let N=M,P,F;t[13]!==b||t[14]!==h?(F=()=>{let e=b*h;o.current.style.transform=`translate3d(-${e}px, 0px, 0px)`},P=[b,h],t[13]=b,t[14]=h,t[15]=P,t[16]=F):(P=t[15],F=t[16]),(0,c.useEffect)(F,P);let I;t[17]!==N||t[18]!==h?(I=(0,m.jsx)(d,{ref:o,$translate:h,children:N}),t[17]=N,t[18]=h,t[19]=I):I=t[19];let L=b===0,R;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(R=()=>x(_),t[20]=R):R=t[20];let z;t[21]===L?z=t[22]:(z=(0,m.jsx)(`button`,{type:`button`,disabled:L,onClick:R,children:`Prev`}),t[21]=L,t[22]=z);let B=b>=S,V;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(V=()=>x(v),t[23]=V):V=t[23];let H;t[24]===B?H=t[25]:(H=(0,m.jsx)(`button`,{type:`button`,disabled:B,onClick:V,children:`Next`}),t[24]=B,t[25]=H);let U;return t[26]!==I||t[27]!==z||t[28]!==H?(U=(0,m.jsxs)(u,{children:[I,z,H]}),t[26]=I,t[27]=z,t[28]=H,t[29]=U):U=t[29],U};function g(){}function _(e){return e-1}function v(e){return e+1}var y=i.div`
  width: 100%;
  padding-top: 40px;
`,b=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1024px) {
    padding-left: 131px;
    padding-right: 4rem;
  }
  h2 {
    letter-spacing: .1em;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.4rem;
  }
`,x=[{name:`Featured`,urn:`featured`,eGifts:[{altText:`A Starbucks cup is falling on its side, spilling out multi-colored confetti against a light green speckled background. `,displayName:`Confetti Celebration`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/ConfettiCelebrationFY24.jpg`,productNumber:`00000321`},{altText:`A hand extends from the right holding a steaming Starbucks beverage, with My Treat written in green letters above it against a shaded green and white background. `,displayName:`My Treat`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/MyTreatFY24.jpg`,productNumber:`00000323`},{altText:`Happy Valentine’s Day is written in wavy red letters and centered over a background of light pink and purple textured hearts`,displayName:`Valentine Hearts`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/ValentineHeartsFY24.jpg`,productNumber:`00000317`},{altText:`Two hands hold a cup with steam in the shape of hearts with You Warm My Heart written in pink letters on either side of the cup.`,displayName:`Warm My Heart`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/WarmMyHeartFY23.jpg`,productNumber:`00000030`},{altText:`Love You, Girl is written in maroon letters, stacked on a light pink background and surrounded by flowers, rainbows, and hearts.`,displayName:`Love You, Girl`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy20/LoveYouGirlFY20.jpg`,productNumber:`00000103`},{altText:`A red dragon is curled around the perimeter of the card, with 2024 The Year of the Dragon written in yellow English letters and Chinese characters in the center. `,displayName:`Lunar New Year Dragon`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/LNYDragonFY24.png`,productNumber:`00000360`},{altText:`A dog wearing a scarf watches over three snowmen in different stages of being built as they stand on a snowy ledge against a dark blue background where snow is falling, while two hands put on their finishing touches.`,displayName:`Building Snowmen`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/BuildingSnowmenFY24.jpg`,productNumber:`00000294`},{altText:`The Color Purple, A Bold Take On The Beloved Classic is written in white letters over a bright purple, red and yellow graphic showing dancers on a stage, set against a textured teal background`,displayName:`The Color Purple`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/TheColorPurpleFY24.png`,productNumber:`00000295`},{altText:`A Big Thank You with the words A Big written in small pale blue letters and arched over the top of the larger words Thank You.`,displayName:`Big Thank You`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy22/BigThankYouFY22.jpg`,productNumber:`00000040`},{altText:`Two hands meet in a high five against a background with Great Work arched over the top of the hands and Deserves Coffee across the bottom. `,displayName:`Great Work Deserves Coffee`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/GreatWorkDeservesCoffeeFY23.jpg`,productNumber:`00000011`},{altText:`A bouquet of multi colored flowers sits in a blue vase on a green table against a light blue background, with Thinkin of Ya written in wavy green letters next to it. `,displayName:`Thinkin Of Ya`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/ThinkinOfYaFY24.png`,productNumber:`00000331`},{altText:`“You’re Best” are at top and bottom with “Just” between You’re and Best, against a background covered in stars and paint.`,displayName:`You're Just The Best`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/YoureJustTheBestFY23.jpg`,productNumber:`00000019`},{altText:`Two hands hold up Starbucks beverages from the bottom of this card with the words Yay for Coffee arched over them against a pink background covered in confetti.`,displayName:`Yay For Coffee`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/YayForCoffeeFY24.png`,productNumber:`00000161`},{altText:`A rainbow stretches across with a white cloud at each end against a green background, with the words Sending Good Vibes under the rainbow.`,displayName:`Good Vibes`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy22/GoodVibesFY22.jpg`,productNumber:`00000042`},{altText:`A bright pink frosted cake sits on a white plate, with lit candles on top and one piece missing, with the words Happy Birthday written in white lettering across the size of the cake. `,displayName:`Birthday Cake`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/BirthdayCakeFY24.jpg`,productNumber:`00000226`},{altText:`Happy Birthday is written in dark green block letters against an off-white background and surrounded by multi-colored balloons, candles and confetti. \r
`,displayName:`BirthYay Balloons`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/BirthYayBalloonsFY24.png`,productNumber:`00000328`},{altText:`“Woohoo” is written in white centered against blue and surrounded by dots, stars and starbursts in shades of green, yellow and pink.`,displayName:`Woohoo`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/WoohooFY23.jpg`,productNumber:`00000071`},{altText:`Starbucks Coffee Company is written in white block letters across the center of a dark green background, with Established 1971, Seattle WA written below it in smaller white letters. 1971 is written in outline letters at the top left. `,displayName:`Heritage Brand`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/HeritageBrandFY24.jpg`,productNumber:`00000322`}]}],S=e=>{let t=(0,l.c)(14),{item:n}=e,r,i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r={display:`flex`,flexDirection:`column`,gap:`8px`,backgroundColor:`#d4e9e2`,padding:`16px`,borderRadius:`8px`,boxShadow:`0px 4px 4px rgba(0, 0, 0, 0.25)`},i={margin:0},t[0]=r,t[1]=i):(r=t[0],i=t[1]);let a;t[2]===n.displayName?a=t[3]:(a=(0,m.jsx)(`h2`,{style:i,children:n.displayName}),t[2]=n.displayName,t[3]=a);let o;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(o={display:`-webkit-box`,fontSize:`14px`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`,textOverflow:`ellipsis`,overflow:`hidden`,marginBottom:`0`},t[4]=o):o=t[4];let s;t[5]===n.altText?s=t[6]:(s=(0,m.jsx)(`p`,{style:o,children:n.altText}),t[5]=n.altText,t[6]=s);let c;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(c={fontWeight:400},t[7]=c):c=t[7];let u;t[8]===n.productNumber?u=t[9]:(u=(0,m.jsxs)(`span`,{style:c,children:[`Product Number: `,n.productNumber]}),t[8]=n.productNumber,t[9]=u);let d;return t[10]!==a||t[11]!==s||t[12]!==u?(d=(0,m.jsxs)(`div`,{style:r,children:[a,s,u]}),t[10]=a,t[11]=s,t[12]=u,t[13]=d):d=t[13],d},C=()=>{let t=(0,l.c)(7),n=(0,c.useContext)(e).color.brand.pure,r;t[0]===n?r=t[1]:(r={minWidth:`35px`,minHeight:`35px`,fontSize:`16px`,color:n},t[0]=n,t[1]=r);let i=r,[a,s]=(0,c.useState)(0),u;t[2]!==a||t[3]!==i?(u=x.sort(w).map((e,t)=>(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(b,{children:[(0,m.jsx)(`h2`,{children:e.names}),e.eGifts.length>a&&(0,m.jsx)(o,{text:`See all`,type:`link`,style:i})]}),(0,m.jsx)(h,{showSeeMore:e=>s(e),carouselData:e.eGifts,renderCard:T})]},t)),t[2]=a,t[3]=i,t[4]=u):u=t[4];let d=u,f;return t[5]===d?f=t[6]:(f=(0,m.jsx)(y,{children:d}),t[5]=d,t[6]=f),f};function w(e,t){return e.displayOrder-t.displayOrder}function T(e,t){return(0,m.jsx)(S,{item:e},t)}export{C as default};