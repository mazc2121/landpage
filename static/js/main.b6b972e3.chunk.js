(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),s=n(12),a=n.n(s),r=n(3),o=n(4),l=n(6),u=n(5),d=n(9),p=(n(19),n(1));function h(){return document.getElementById("mainApp")}var j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleScroll=function(){var e=h().scrollTop,t=document.getElementById("app-about").getBoundingClientRect(),n=i.state.activeLink;n=e>t.height?"contact":"nft-desktop",i.setState({scrollY:e,activeLink:n})},i.handleClickNFTDesktop=function(){"nft-desktop"!==i.state.activeLink&&(h().scrollTo({top:0,behavior:"smooth"}),i.setState({activeLink:"nft-desktop"}))},i.handleClickContact=function(){if("contact"!==i.state.activeLink){var e=document.getElementById("contact").getBoundingClientRect();h().scrollTo({top:e.y,behavior:"smooth"}),i.setState({activeLink:"contact"})}},i.state={scrollY:0,activeLink:"none"},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=h();e.addEventListener("scroll",this.handleScroll),this.setState({scrollY:e.scrollTop})}},{key:"componentWillUnmount",value:function(){h().removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.activeLink,t={};return this.props.style&&(t=Object(d.a)({},this.props.style)),Object(p.jsxs)("div",{id:"header",style:t,children:[Object(p.jsx)("div",{id:"header-logo",children:Object(p.jsx)("img",{src:"images/logo.png",width:260,onClick:function(){window.open("https://www.mazc.art","_blank").focus()}})}),Object(p.jsxs)("div",{id:"header-links",children:[Object(p.jsx)("a",{onClick:this.handleClickNFTDesktop,className:"nft-desktop"===e?"active":"",children:"NFT Desktop"}),Object(p.jsx)("a",{onClick:this.handleClickContact,className:"contact"===e?"active":"",children:"Contact"})]}),Object(p.jsx)("div",{id:"header-actions"})]})}}]),n}(i.PureComponent),m=n(7),b=n.n(m),f=n(10),v=n(8),O=(n(22),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handlePrev=function(){var e=i.state.active-1;e<0&&(e=i.images.length-1),i.setState({active:e})},i.handleNext=function(){var e=i.state.active+1;e>=i.images.length&&(e=0),i.setState({active:e})},i.images=i.props.images||[],i.state={active:0},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.slideInterval=setInterval((function(){e.handleNext()}),5e3)}},{key:"componentWillUnmount",value:function(){this.slideInterval&&(clearInterval(this.slideInterval),this.slideInterval=!1)}},{key:"componentDidUpdate",value:function(){this.props.onChange&&this.props.onChange(Object(d.a)(Object(d.a)({},this.images[this.state.active]),{},{index:this.state.active}))}},{key:"render",value:function(){var e=this,t=this.state.active;return Object(p.jsxs)("div",{className:"imgSlider",style:{},children:[Object(p.jsxs)("div",{className:"arrow-icon-div",children:[Object(p.jsx)("div",{}),Object(p.jsx)(v.a,{className:"arrow-icon-border left"}),Object(p.jsx)(v.a,{className:"arrow-icon left",onClick:this.handlePrev})]}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("div",{className:"img-div",children:this.images.map((function(e,n){return Object(p.jsx)("img",{src:e.src,className:t===n?"":"hidden"},e.src)}))}),Object(p.jsx)("div",{className:"index-div",children:this.images.map((function(n,i){return Object(p.jsx)("div",{className:"slider-index".concat(t===i?" active":""),onClick:function(){e.setState({active:i})}},n.src)}))})]}),Object(p.jsxs)("div",{className:"arrow-icon-div",children:[Object(p.jsx)("div",{}),Object(p.jsx)(v.b,{className:"arrow-icon-border right"}),Object(p.jsx)(v.b,{className:"arrow-icon right",onClick:this.handleNext})]})]})}}]),n}(i.PureComponent)),k=(n(23),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e={};this.props.style&&(e=Object(d.a)({},this.props.style));var t=this.props.onClick||function(){};return Object(p.jsx)("button",{className:"button",title:this.props.title,style:e,onClick:t,children:this.props.children})}}]),n}(i.PureComponent)),x=(n(24),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleKeyPress=function(e){i._isMounted&&"Escape"===e.key&&i.setState({active:!1})},i.open=function(e){i.setState({active:!0},(function(){e&&e()}))},i.close=function(){i.setState({active:!1})},i.handleClose=function(){i.close()},i.state={active:!1},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0,window.addEventListener("keyup",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,window.removeEventListener("keyup",this.handleKeyPress)}},{key:"render",value:function(){if(!this.state.active)return Object(p.jsx)(i.Fragment,{});var e=this.props.style||{},t=this.props.contentStyle||{},n="modal";return this.props.className&&(n+=" "+this.props.className),Object(p.jsx)("div",{style:e,className:n,onClick:this.handleClose,children:Object(p.jsx)("div",{style:t,className:"modal-content",onClick:function(e){e.stopPropagation()},children:this.props.children})})}}]),n}(i.PureComponent)),y=(n(25),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleChange=function(e){var t=e.target.value;i.props.onChange&&i.props.onChange(t),i.setState({value:t})},i.state={value:i.props.initialValue||""},i}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.style||{},t=this.props.onFocus||function(){},n=this.props.onBlur||function(){},i=this.props.childrenLoc||"after";return Object(p.jsxs)("div",{className:"inputText",style:e,children:["before"===i&&this.props.children,Object(p.jsx)("input",{placeholder:this.props.placeholder||"",type:"email",value:this.state.value,onChange:this.handleChange,onFocus:t,onBlur:n}),"after"===i&&this.props.children,this.props.additionalChildren]})}}]),n}(i.PureComponent)),g=n(13),C=n.n(g);function w(e){return e.ok||console.log("requester error: ",e.statusText),e}var N=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{alert:!0};return new Promise((function(i){setTimeout((function(){i({success:!1,message:"Request timeout. Try again later."})}),n.timeout||1e4),fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return w(e,n)})).then(function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){i({success:!1,message:"Connection problem. Try again later."})}))}))},S=(n(29),{title:"NFT Desktop",description:"Automated conditional filters for NFT games marketplaces. (Only Axie Infinity at the moment)",features:[{desc:"1. Create/edit/delete a unlimited number of automated filters"},{desc:"2. Rich filter execution control including update rate, sorting, pagination, pausing and audio alerts"},{desc:"3. Filter Axie marketplace by price range, pureness percentage, body part/ability gene type and more"},{desc:"4. Fetch complete data from axies instantly with gene parsing and breed probabilities"}],subscriptions:[{key:"one_month",title:"One month subscription",priceDolar:50,keyDurationDays:30},{key:"two_month",title:"Two months subscription",priceDolar:90,keyDurationDays:60},{key:"three_month",title:"Three months subscription",priceDolar:135,keyDurationDays:90}]}),D=["BTC","ETH","LTC"];function T(){return(T=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(D.map((function(e){return new Promise(function(){var t=Object(f.a)(b.a.mark((function t(n){var i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.getCryptoPrice("USD",e);case 2:i=t.sent,n({ticker:e,price:(i=i||{price:!1}).price});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return!1!==t.price&&(e/t.price).toFixed(5)}var R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;Object(r.a)(this,n),(i=t.call(this,e)).handleImgChange=function(e){i.setState({imgIndex:e.index})},i.handleClickFeature=function(e){i.setState({imgIndex:e}),i.sliderRef.current&&i.sliderRef.current.setState({active:e})},i.handleDownloadForWindows=function(){document.body.style.cursor="progress";var e=document.createElement("a");e.href="https://nftdesktop.nyc3.cdn.digitaloceanspaces.com/NFT-Desktop%20Setup%200.1.0.exe",e.download="nft-desktop-installer.exe",e.click(),e.remove(),document.body.style.cursor="default"},i.handleInitCheckout=function(e){i.setState({subscription:e}),i.checkoutModalRef.current&&i.checkoutModalRef.current.open()},i.handleReqCheckout=Object(f.a)(b.a.mark((function e(){var t,n,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.state,n=t.userEmail,c=t.subscription,""!==n){e.next=4;break}return i.setCheckoutError("Please input a real email address"),e.abrupt("return");case 4:if(c){e.next=7;break}return i.setCheckoutError("Subscription type not selected"),e.abrupt("return");case 7:return e.next=9,N("https://api.mazc.art/payment/coinbase",{userEmail:n,subscriptionKey:c.key});case 9:if((s=e.sent).success){e.next=13;break}return i.setCheckoutError("Checkout request failed: "+s.error),e.abrupt("return");case 13:window.open(s.payload.url,"_blank").focus(),i.checkoutModalRef.current&&i.checkoutModalRef.current.close();case 15:case"end":return e.stop()}}),e)}))),i.setCheckoutError=function(e){i.setState({checkoutError:e}),setTimeout((function(){i.setState({checkoutError:!1})}),3e3)},i.state={imgIndex:0,cryptoRates:D.map((function(e){return{ticker:e,price:!1}})),subscription:!1,userEmail:"",checkoutError:!1},i.images=[],i.features=[];for(var s=1;s<=4;s++)i.images.push({src:"images/nftdesktop0".concat(s,".png")}),i.features.push(S.features[s-1]);return i.sliderRef=c.a.createRef(),i.checkoutModalRef=c.a.createRef(),function(){return T.apply(this,arguments)}().then((function(e){i._isMounted?i.setState({cryptoRates:e}):i.state.cryptoRates=e})),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.state,n=t.imgIndex,c=t.checkoutError;return Object(p.jsxs)("div",{id:"nft-desktop",style:{},children:[Object(p.jsxs)("div",{id:"app-about",children:[Object(p.jsxs)("div",{id:"app-info",children:[Object(p.jsxs)("div",{id:"app-title",children:[Object(p.jsx)("img",{src:"images/app-icon.png"}),Object(p.jsx)("span",{children:S.title})]}),Object(p.jsx)("div",{id:"app-desc",children:Object(p.jsx)("p",{children:S.description})}),Object(p.jsx)("div",{id:"app-features",children:this.features.map((function(t,i){return Object(p.jsx)("p",{className:n===i?"active":"",onClick:function(){return e.handleClickFeature(i)},children:t.desc},i)}))})]}),Object(p.jsx)(O,{ref:this.sliderRef,images:this.images,onChange:this.handleImgChange})]}),Object(p.jsxs)("div",{id:"app-distribution",children:[Object(p.jsx)("div",{id:"app-pricing",children:S.subscriptions.map((function(t){return Object(p.jsxs)("div",{className:"pricing-card",onClick:function(){e.handleInitCheckout(t)},children:[Object(p.jsx)("span",{className:"pricing-title",children:t.title}),Object(p.jsxs)("span",{className:"pricing-value",children:["$",t.priceDolar]}),e.state.cryptoRates.map((function(e){return!1===e.price?Object(p.jsx)(i.Fragment,{},e.ticker):Object(p.jsxs)("span",{children:[e.ticker,": ",E(t.priceDolar,e)]},e.ticker)})),Object(p.jsx)(k,{onClick:function(n){n.stopPropagation(),e.handleInitCheckout(t)},children:"Buy"})]},t.key)}))}),Object(p.jsxs)("div",{id:"app-download",children:[Object(p.jsx)(k,{onClick:this.handleDownloadForWindows,children:"Download for Windows"}),Object(p.jsx)("span",{style:{fontWeight:"bold",marginTop:5},children:"Includes a 2 hours TRIAL key"})]})]}),Object(p.jsx)(x,{ref:this.checkoutModalRef,children:Object(p.jsxs)("div",{id:"checkout-modal",children:[Object(p.jsx)(y,{placeholder:"Email for contact",onChange:function(t){return e.setState({userEmail:t})}}),Object(p.jsx)("span",{children:"The subscription key will be sent to this email after the payment is confirmed."}),Object(p.jsx)(k,{onClick:this.handleReqCheckout,children:"Ok"}),c&&Object(p.jsx)("span",{style:{color:"red"},children:c})]})})]})}}]),n}(i.PureComponent),I=n(14),P=(n(30),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleCopyGmail=function(){navigator.clipboard.writeText("marcocoimbra01@gmail.com"),i.setState({showGmailCopied:!0}),setTimeout((function(){i.setState({showGmailCopied:!1})}),1e3)},i.handleCopyDiscord=function(){navigator.clipboard.writeText("mazc#9221"),i.setState({showDiscordCopied:!0}),setTimeout((function(){i.setState({showDiscordCopied:!1})}),1e3)},i.state={showGmailCopied:!1,showDiscordCopied:!1},i}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{id:"contact",children:[Object(p.jsx)("div",{style:{marginBottom:20},children:Object(p.jsx)("span",{className:"contact-title",children:"Contact"})}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"social-div",title:"click to copy",onClick:this.handleCopyGmail,children:[Object(p.jsx)(I.a,{style:{fontSize:30}}),Object(p.jsx)("span",{children:"marcocoimbra01@gmail.com"}),Object(p.jsx)(v.c,{}),this.state.showGmailCopied&&Object(p.jsx)("span",{className:"copied",children:"Copied"})]}),Object(p.jsxs)("div",{className:"social-div",title:"click to copy",onClick:this.handleCopyDiscord,children:[Object(p.jsx)(v.d,{style:{color:"#5865f2",fontSize:30}}),Object(p.jsx)("span",{children:"mazc#9221"}),Object(p.jsx)(v.c,{}),this.state.showDiscordCopied&&Object(p.jsx)("span",{className:"copied",children:"Copied"})]})]})]})}}]),n}(i.PureComponent)),F=(n(31),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{id:"mainApp",children:[Object(p.jsx)(j,{style:{position:"relative"}}),Object(p.jsx)(j,{}),Object(p.jsx)(R,{}),Object(p.jsx)(P,{})]})}}]),n}(i.PureComponent));a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b6b972e3.chunk.js.map