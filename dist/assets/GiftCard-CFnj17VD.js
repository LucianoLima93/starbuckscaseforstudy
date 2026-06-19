import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./index-DKeLTfey.js";import{t as c}from"./index.module-quEGBKVD.js";var l=t(o()),u=i(),d=a.div`
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
`,f=a.div`
  position: relative;
  white-space: nowrap;
  z-index: 0;
  transition: all .4s ease;
  margin-left: -1.6rem;
`,p=a.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  ${e=>e.direction===`left`?`left: 2.4rem`:`right: 2.4rem`}
`,m=a.div`
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
`,h=a.div`
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
`,g=n(),_=({carouselData:e,renderCard:t,showSeeMore:n=()=>{}})=>{let i=(0,l.useRef)(null),a=(0,l.useRef)(null),o=e&&e.length,[s,u]=(0,l.useState)(0),[_,v]=(0,l.useState)(!1),[y,b]=(0,l.useState)(!0),[x,S]=(0,l.useState)(!1),[C,w]=(0,l.useState)(0),[T,E]=(0,l.useState)(0),[D,O]=(0,l.useState)(0),[k,A]=(0,l.useState)(0),[j,M]=(0,l.useState)(0),[N,P]=(0,l.useState)(null),[F,I]=(0,l.useState)(0),[L,R]=(0,l.useState)(0),[z,B]=(0,l.useState)(!1),[V,H]=(0,l.useState)(0),U=e=>Math.trunc(parseFloat(e.toFixed(1))),W=()=>{let e=U(a.current.offsetWidth/i.current.offsetWidth);U(a.current.offsetWidth/i.current.offsetWidth),E(e),S(parseFloat(i.current.offsetWidth)),w(U(o/e)),A(o%e)};(0,l.useEffect)(()=>{W()},[]);let G=c(()=>{if(W(),j>0){let e=j*x,t=+(j%T>0);O(U(j/T)+t),I(j%T),R((o-j)%T),J(-e,D),B(!0)}},15);(0,l.useLayoutEffect)(()=>(window.addEventListener(`resize`,G),()=>{window.removeEventListener(`resize`,G)}),[G]),(0,l.useEffect)(()=>{let e=x*T,t;t=z?N?L:F:k;let n=x*t,r=o-(j+T)===t,i=j-T===0;N?D===C&&r?(J(-n+s),M(j+t)):(J(-e+s),M(j+T)):D===0&&!i?(J(n+s),M(j-t)):(J(s+e),M(j-T))},[V]),(0,l.useEffect)(()=>{n(T)},[T,n]),(0,l.useEffect)(()=>{D===C||j+T===o?b(!1):b(!0),D>0?v(!0):(v(!1),B(!1))},[T,o,j,D,C,n]);let K=()=>{a.current&&(P(!0),H(V+1),O(D+1))},q=()=>{a.current&&(P(!1),H(V+1),O(D-1))},J=e=>{a.current.style.transform=`translate3d(${e}px, 0px, 0px)`,u(e)},Y=(0,l.useMemo)(()=>{let e={root:a.current,rootMargin:`0px`,threshold:.3};return new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting?e.target.classList.remove(`inactive-carousel`):e.target.classList.add(`inactive-carousel`)})},e)},[]);(0,l.useEffect)(()=>{Array.prototype.forEach.call(a.current.children,e=>{Y.observe(e)})},[Y]);let X={width:`100%`,height:`100%`,display:`flex`,justifyContent:`center`,alignItems:`center`},Z={overflow:`visible`,fill:`currentcolor`},Q=e.map((e,n)=>(0,g.jsx)(h,{ref:i,children:t(e)},n));return(0,g.jsxs)(d,{children:[_&&(0,g.jsx)(p,{direction:`left`,children:(0,g.jsx)(m,{onClick:()=>q(),children:(0,g.jsx)(r,{name:`ic-arrow`,width:`24px`,height:`24px`,containerStyle:X,style:Z})})}),(0,g.jsx)(f,{ref:a,children:Q}),y&&(0,g.jsx)(p,{direction:`right`,children:(0,g.jsx)(m,{onClick:()=>K(),children:(0,g.jsx)(r,{name:`ic-arrow`,width:`24px`,height:`24px`,containerStyle:X,style:{...Z,transform:`rotate(180deg)`}})})})]})},v=a.div`
  width: 100%;
  padding-top: 40px;
`,y=a.div`
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
`,b={placeholder:`https://www.starbucks.com/weblx/images/placeholder.png`},x=[{name:`Featured`,urn:`featured`,eGifts:[{altText:`A Starbucks cup is falling on its side, spilling out multi-colored confetti against a light green speckled background. `,displayName:`Confetti Celebration`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/ConfettiCelebrationFY24.jpg`,productNumber:`00000321`},{altText:`A hand extends from the right holding a steaming Starbucks beverage, with My Treat written in green letters above it against a shaded green and white background. `,displayName:`My Treat`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/MyTreatFY24.jpg`,productNumber:`00000323`},{altText:`Happy Valentine’s Day is written in wavy red letters and centered over a background of light pink and purple textured hearts`,displayName:`Valentine Hearts`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/ValentineHeartsFY24.jpg`,productNumber:`00000317`},{altText:`Two hands hold a cup with steam in the shape of hearts with You Warm My Heart written in pink letters on either side of the cup.`,displayName:`Warm My Heart`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/WarmMyHeartFY23.jpg`,productNumber:`00000030`},{altText:`Love You, Girl is written in maroon letters, stacked on a light pink background and surrounded by flowers, rainbows, and hearts.`,displayName:`Love You, Girl`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy20/LoveYouGirlFY20.jpg`,productNumber:`00000103`},{altText:`A red dragon is curled around the perimeter of the card, with 2024 The Year of the Dragon written in yellow English letters and Chinese characters in the center. `,displayName:`Lunar New Year Dragon`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/LNYDragonFY24.png`,productNumber:`00000360`},{altText:`A dog wearing a scarf watches over three snowmen in different stages of being built as they stand on a snowy ledge against a dark blue background where snow is falling, while two hands put on their finishing touches.`,displayName:`Building Snowmen`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/BuildingSnowmenFY24.jpg`,productNumber:`00000294`},{altText:`The Color Purple, A Bold Take On The Beloved Classic is written in white letters over a bright purple, red and yellow graphic showing dancers on a stage, set against a textured teal background`,displayName:`The Color Purple`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/TheColorPurpleFY24.png`,productNumber:`00000295`},{altText:`A Big Thank You with the words A Big written in small pale blue letters and arched over the top of the larger words Thank You.`,displayName:`Big Thank You`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy22/BigThankYouFY22.jpg`,productNumber:`00000040`},{altText:`Two hands meet in a high five against a background with Great Work arched over the top of the hands and Deserves Coffee across the bottom. `,displayName:`Great Work Deserves Coffee`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/GreatWorkDeservesCoffeeFY23.jpg`,productNumber:`00000011`},{altText:`A bouquet of multi colored flowers sits in a blue vase on a green table against a light blue background, with Thinkin of Ya written in wavy green letters next to it. `,displayName:`Thinkin Of Ya`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/ThinkinOfYaFY24.png`,productNumber:`00000331`},{altText:`“You’re Best” are at top and bottom with “Just” between You’re and Best, against a background covered in stars and paint.`,displayName:`You're Just The Best`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/YoureJustTheBestFY23.jpg`,productNumber:`00000019`},{altText:`Two hands hold up Starbucks beverages from the bottom of this card with the words Yay for Coffee arched over them against a pink background covered in confetti.`,displayName:`Yay For Coffee`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/YayForCoffeeFY24.png`,productNumber:`00000161`},{altText:`A rainbow stretches across with a white cloud at each end against a green background, with the words Sending Good Vibes under the rainbow.`,displayName:`Good Vibes`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy22/GoodVibesFY22.jpg`,productNumber:`00000042`},{altText:`A bright pink frosted cake sits on a white plate, with lit candles on top and one piece missing, with the words Happy Birthday written in white lettering across the size of the cake. `,displayName:`Birthday Cake`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/BirthdayCakeFY24.jpg`,productNumber:`00000226`},{altText:`Happy Birthday is written in dark green block letters against an off-white background and surrounded by multi-colored balloons, candles and confetti. \r
`,displayName:`BirthYay Balloons`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/BirthYayBalloonsFY24.png`,productNumber:`00000328`},{altText:`“Woohoo” is written in white centered against blue and surrounded by dots, stars and starbursts in shades of green, yellow and pink.`,displayName:`Woohoo`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/WoohooFY23.jpg`,productNumber:`00000071`},{altText:`Starbucks Coffee Company is written in white block letters across the center of a dark green background, with Established 1971, Seattle WA written below it in smaller white letters. 1971 is written in outline letters at the top left. `,displayName:`Heritage Brand`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/HeritageBrandFY24.jpg`,productNumber:`00000322`}]},{name:`Lunar New Year | 2/10`,urn:`lunar-new-year`,eGifts:[{altText:`A red dragon is curled around the perimeter of the card, with 2024 The Year of the Dragon written in yellow English letters and Chinese characters in the center. `,displayName:`Lunar New Year Dragon`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/LNYDragonFY24.png`,productNumber:`00000360`}]},{name:`Valentine's Day | 2/14`,urn:`valentine's-day-|-2-14`,eGifts:[{altText:`Happy Valentine’s Day is written in wavy red letters and centered over a background of light pink and purple textured hearts`,displayName:`Valentine Hearts`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/ValentineHeartsFY24.jpg`,productNumber:`00000317`},{altText:`Two hands hold a cup with steam in the shape of hearts with You Warm My Heart written in pink letters on either side of the cup.`,displayName:`Warm My Heart`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/WarmMyHeartFY23.jpg`,productNumber:`00000030`},{altText:`A bouquet of pink and orange flowers with green leaves wrapped in a newspaper lays centered across this card against a dappled dark pink background, with the words Happy Valentine's Day written on the newspaper wrapping.`,displayName:`Valentines Bouquet`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/ValentinesDayFY23.png`,productNumber:`00000316`},{altText:`Love You, Girl is written in maroon letters, stacked on a light pink background and surrounded by flowers, rainbows, and hearts.`,displayName:`Love You, Girl`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy20/LoveYouGirlFY20.jpg`,productNumber:`00000103`}]},{name:`Winter`,urn:`winter`,eGifts:[{altText:`A dog wearing a scarf watches over three snowmen in different stages of being built as they stand on a snowy ledge against a dark blue background where snow is falling, while two hands put on their finishing touches.`,displayName:`Building Snowmen`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/BuildingSnowmenFY24.jpg`,productNumber:`00000294`},{altText:`A red barn with snow on the roof stands on a snowy landscape surrounded by evergreen trees, while chickens feed on the ground and a person stands on a ladder to hang a large wreath and evergreen garland over the barn door. `,displayName:`Winter Barn`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/WinterBarnFY24.jpg`,productNumber:`00000299`},{altText:`A bright pink cup filled with hot chocolate, topped with whipped cream and garnished with a candy cane and a chocolate bar, sits on a table between a pie and a candle while falling snow can be seen through the window in the background. `,displayName:`Hot Cocoa`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/HotCocoaFY24.jpg`,productNumber:`00000303`},{altText:`A happy blue narwhal holding a red Starbucks cup is frolicking in the ocean with a banner reading Starbucks tied to its tusk waving across the top of the card.`,displayName:`Narwhal Banner`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/NarwhalBannerFY24.jpg`,productNumber:`00000304`},{altText:`A very good dog with a stick in its mouth runs alongside an evergreen tree being carried over snowy ground between two people. `,displayName:`Tree Farm`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/TreeFarmFY24.png`,productNumber:`00000309`}]},{name:`Birthday`,urn:`birthday`,eGifts:[{altText:`Happy Birthday is written in dark green block letters against an off-white background and surrounded by multi-colored balloons, candles and confetti. \r
`,displayName:`BirthYay Balloons`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/BirthYayBalloonsFY24.png`,productNumber:`00000328`},{altText:`A bright pink frosted cake sits on a white plate, with lit candles on top and one piece missing, with the words Happy Birthday written in white lettering across the size of the cake. `,displayName:`Birthday Cake`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/BirthdayCakeFY24.jpg`,productNumber:`00000226`},{altText:`Mirror ball with blue, green and purple squares hangs in the center of this card against a dark blue background.`,displayName:`Party Birthday`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/PartyBirthdayFY23.jpg`,productNumber:`00000001`},{altText:`It's Your Birth-Yay is in white letters over a yellow birthday cake with a slice missing that has red candles against a blue background.`,displayName:`Birth Yay`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy22/BirthYayFY22.jpg`,productNumber:`00000044`},{altText:`A slice of cake is surrounded by doughnuts, cupcakes, and a Starbucks drink. On each treat is a lit birthday candle.`,displayName:`Birthday Treats`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy21/BirthdayTreatsFY21.jpg`,productNumber:`00000077`}]},{name:`Thank You`,urn:`thank-you`,eGifts:[{altText:`A hand extends from the right holding a steaming Starbucks beverage, with My Treat written in green letters above it against a shaded green and white background. `,displayName:`My Treat`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/MyTreatFY24.jpg`,productNumber:`00000323`},{altText:`Thank You is written in bold white letters against a gold background surrounded by sparkles and stars and framed by a bright pink border. \r
\r
`,displayName:`Sparkle Thank You `,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/SparkleThankYouFY24.png`,productNumber:`00000327`},{altText:`A Big Thank You with the words A Big written in small pale blue letters and arched over the top of the larger words Thank You.`,displayName:`Big Thank You`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy22/BigThankYouFY22.jpg`,productNumber:`00000040`},{altText:`This One's on Me is written above a head with blue hair, an iced beverage on top of the blue hair and two hands holding Starbucks cups.

`,displayName:`This One's On Me`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy20/ThisOnesOnMeFY20.jpg`,productNumber:`00000101`}]},{name:`Celebration`,urn:`celebration`,eGifts:[{altText:`A Starbucks cup is falling on its side, spilling out multi-colored confetti against a light green speckled background. `,displayName:`Confetti Celebration`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/ConfettiCelebrationFY24.jpg`,productNumber:`00000321`},{altText:`“Woohoo” is written in white centered against blue and surrounded by dots, stars and starbursts in shades of green, yellow and pink.`,displayName:`Woohoo`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/WoohooFY23.jpg`,productNumber:`00000071`},{altText:`Keep Crushin’ It, written in white and shadowed in red, blue and orange, are exploding out of a blue background and surrounded by stars.`,displayName:`Keep Crushin' It`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/KeepCrushinItFY23.jpg`,productNumber:`00000052`},{altText:`Awwwww Yea is written in wavy green letters across a star exploding from the center of the card against a light pink background and surrounded by stars and flowers.\r
`,displayName:`Awwwww Yea`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/AwwwwwYeaFY24.png`,productNumber:`00000332`}]},{name:`Appreciation`,urn:`appreciation`,eGifts:[{altText:`The words For All You Do are written inside individual shapes centered against a dark orange background surrounded by multi-colored stars. \r
`,displayName:`All You Do`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/AllYouDoFY24.png`,productNumber:`00000329`},{altText:`You Amaze Me is centered against a background surrounded by yellow and white shooting stars with You and Me below the word Amaze.`,displayName:`You Amaze Me`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/YouAmazeMeFY23.jpg`,productNumber:`00000013`},{altText:`“You’re Best” are at top and bottom with “Just” between You’re and Best, against a background covered in stars and paint.`,displayName:`You're Just The Best`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/YoureJustTheBestFY23.jpg`,productNumber:`00000019`},{altText:`Two bumble bees with crowns are sitting on pink flowers. In between the two bees is white block lettering saying Yes, Queen, Yes.`,displayName:`Yes Queen`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy21/YesQueenFY21.jpg`,productNumber:`00000082`}]},{name:`Encouragement`,urn:`encouragement`,eGifts:[{altText:`You Got This is written in wavy orange letters and centered against a background of puffy white clouds in a light blue sky.`,displayName:`You Got This`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/YouGotThisFY24.png`,productNumber:`00000330`},{altText:`A rainbow stretches across with a white cloud at each end against a green background, with the words Sending Good Vibes under the rainbow.`,displayName:`Good Vibes`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy22/GoodVibesFY22.jpg`,productNumber:`00000042`},{altText:`Two hands reaching from each side to toast holding Starbucks beverage cups with When In Doubt Coffee in red and below the hands.`,displayName:`When In Doubt Coffee`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy22/WhenInDoubtCoffeeFY22.jpg`,productNumber:`00000065`},{altText:`Make Today A You Day is written in bold yellow letters against a dark green background and surrounded by Starbucks treats and beverages. \r
`,displayName:`You Day`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/YouDayFY24.png`,productNumber:`00000343`}]},{name:`Affection`,urn:`affection`,eGifts:[{altText:`You’re Amazing is written in bright green letters across a dark blue and green patterned background and surrounded by pink stars.`,displayName:`You're Amazing`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/YoureAmazingFY24.jpg`,productNumber:`00000325`},{altText:`A bouquet of multi colored flowers sits in a blue vase on a green table against a light blue background, with Thinkin of Ya written in wavy green letters next to it. `,displayName:`Thinkin Of Ya`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/ThinkinOfYaFY24.png`,productNumber:`00000331`},{altText:`Two hands hold a cup with steam in the shape of hearts with You Warm My Heart written in pink letters on either side of the cup.`,displayName:`Warm My Heart`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/WarmMyHeartFY23.jpg`,productNumber:`00000030`},{altText:`A purple hand is holding a Starbucks iced coffee with the words Friends Buy Friends Coffee stacked on top of each other.`,displayName:`Friends Buy Friends Coffee`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy20/FriendsBuyCoffeeFY20.jpg`,productNumber:`00000098`},{altText:`Love You, Girl is written in maroon letters, stacked on a light pink background and surrounded by flowers, rainbows, and hearts.`,displayName:`Love You, Girl`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy20/LoveYouGirlFY20.jpg`,productNumber:`00000103`}]},{name:`The Color Purple | In Theaters Christmas Day\xA0`,urn:`the-color-purple-|-in-theaters-christmas-day\xA0`,eGifts:[{altText:`The Color Purple, A Bold Take On The Beloved Classic is written in white letters over a bright purple, red and yellow graphic showing dancers on a stage, set against a textured teal background`,displayName:`The Color Purple`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/TheColorPurpleFY24.png`,productNumber:`00000295`}]},{name:`Workplace`,urn:`workplace`,eGifts:[{altText:`Two hands meet in a high five against a background with Great Work arched over the top of the hands and Deserves Coffee across the bottom. `,displayName:`Great Work Deserves Coffee`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/GreatWorkDeservesCoffeeFY23.jpg`,productNumber:`00000011`},{altText:`A hand holding a pen and showing a peace sign sits to the left, in front of some yellow doodles on a light purple background, with the words “You’re The Best Around” arched in a half circle to the right. `,displayName:`Best Around`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/BestAroundFY24.png`,productNumber:`00000174`},{altText:`A laptop sits on a desk with a plant. An arm rests on the desk holding a pen and iced beverage, with the words We'd Be Lost Without You.`,displayName:`Lost Without You`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy22/LostWithoutYouFY22.jpg`,productNumber:`00000173`},{altText:`Set against a sparkle light blue background, In white font is "Your Hard Work" and in green script Noticed is in the bottom left corner.`,displayName:`Hard Work Noticed`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy21/HardWorkNoticedFY21.jpg`,productNumber:`00000088`}]},{name:`Anytime`,urn:`anytime`,eGifts:[{altText:`Starbucks Coffee Company is written in white block letters across the center of a dark green background, with Established 1971, Seattle WA written below it in smaller white letters. 1971 is written in outline letters at the top left. `,displayName:`Heritage Brand`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/HeritageBrandFY24.jpg`,productNumber:`00000322`},{altText:`Two hands hold up Starbucks beverages from the bottom of this card with the words Yay for Coffee arched over them against a pink background covered in confetti.`,displayName:`Yay For Coffee`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/YayForCoffeeFY24.png`,productNumber:`00000161`},{altText:`An orange digital clock with the word “coffee” written across the face sits in the center of an off-white background surrounded by green stars, with the word It’s written above and OClock written below the clock.`,displayName:`Coffee O' Clock`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy24/CoffeeOClockFY24.png`,productNumber:`00000341`},{altText:`A close up of a white Siren covers the left half of this Starbucks green card.`,displayName:`Starbucks Siren`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy20/BrailleFY20.jpg`,productNumber:`00000104`},{altText:`Three Starbucks Siren logos are shown, including the brown Siren, the black and white Siren and the free-floating Siren.`,displayName:`Heritage Sirens`,largeImageUrl:`https://globalassets.starbucks.com/digitalassets/cards/fy23/HeritageMultipackFY23.jpg`,productNumber:`00000035`}]}];a.div`
  width: 24.16667%;
  padding: 0 1.6rem;
  white-space: normal;
  display: inline-block;
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
`;var S=a.div`
  position: relative;
  transition: transform .3s ease;
  display: block;
  background-color: transparent;
  :hover {
    transform: translateY(-8px);
    ::after {
      opacity: 1;
    }
    ::before {
      opacity: 0;
    }
  }
  ::after {
    border-radius: 3.3333%/5.298%;
    bottom: 0;
    box-shadow: 0 6px 6px rgb(0 0 0 / 14%);
    opacity: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .3s;
  }
  ::before {
    border-radius: 3.3333%/5.298%;
    bottom: 0;
    box-shadow: 0 2px 3px rgb(0 0 0 / 24%);
    content: "";
    left: 0;
    opacity: 1;
    position: absolute;
    right: 0;
    top: 0;
  }
`,C=a.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`,w=a.div`
  position: relative;
  height: 100%;
`,T=a.img`
  width: 100%;
  height: auto;
  border-radius: 3.3333%/5.298%;
  display: ${e=>e.showImage?`block`:`none`};
`,E=e=>{let t=(0,u.c)(10),{item:n}=e,[r,i]=(0,l.useState)(!0),a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,g.jsx)(`div`,{style:{paddingBottom:`62.9747%`}}),t[0]=a):a=t[0];let o;t[1]===r?o=t[2]:(o=(0,g.jsx)(T,{showImage:r,src:b.placeholder,alt:`placeholder`}),t[1]=r,t[2]=o);let s=!r,c;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(c=()=>i(!1),t[3]=c):c=t[3];let d;t[4]!==n.largeImageUrl||t[5]!==s?(d=(0,g.jsx)(T,{showImage:s,src:n.largeImageUrl,alt:`carousel`,onLoad:c}),t[4]=n.largeImageUrl,t[5]=s,t[6]=d):d=t[6];let f;return t[7]!==o||t[8]!==d?(f=(0,g.jsxs)(S,{children:[a,(0,g.jsx)(C,{children:(0,g.jsxs)(w,{children:[o,d]})})]}),t[7]=o,t[8]=d,t[9]=f):f=t[9],f},D=()=>{let t=(0,u.c)(7),n=(0,l.useContext)(e).color.brand.pure,r;t[0]===n?r=t[1]:(r={minWidth:`35px`,minHeight:`35px`,fontSize:`16px`,color:n},t[0]=n,t[1]=r);let i=r,[a,o]=(0,l.useState)(0),c;t[2]!==a||t[3]!==i?(c=x.sort(O).map((e,t)=>(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(y,{children:[(0,g.jsx)(`h2`,{children:e.name}),e.eGifts.length>a&&(0,g.jsx)(s,{text:`See all`,type:`link`,style:i})]}),(0,g.jsx)(_,{showSeeMore:e=>o(e),carouselData:e.eGifts,renderCard:k})]},t)),t[2]=a,t[3]=i,t[4]=c):c=t[4];let d=c,f;return t[5]===d?f=t[6]:(f=(0,g.jsx)(v,{children:d}),t[5]=d,t[6]=f),f};function O(e,t){return e.displayOrder-t.displayOrder}function k(e,t){return(0,g.jsx)(E,{item:e},t)}export{D as default};