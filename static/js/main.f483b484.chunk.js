(this.webpackJsonpfakestore=this.webpackJsonpfakestore||[]).push([[0],{109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c(21),a=c.n(r),n=(c(78),c(15)),i=c(4),l=c(8),d=(c(79),c(80),c(0)),o=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"footer-wrapper",children:[Object(d.jsxs)("div",{className:"crd-wrapper",children:[Object(d.jsx)("div",{className:"crd-title",children:"- lucid"}),Object(d.jsx)("div",{className:"crd",children:"Design and Dev by PEPU"})]}),Object(d.jsxs)("div",{className:"footer-category-wrapper",children:[Object(d.jsx)("div",{className:"footer-category-title",children:"- Category"}),Object(d.jsx)("div",{className:"ft-link ft-cat-mencl",children:"men's clothing"}),Object(d.jsx)("div",{className:"ft-link ft-cat-womencl",children:"women's clothing"}),Object(d.jsx)("div",{className:"ft-link ft-cat-elec",children:"electronic"}),Object(d.jsx)("div",{className:"ft-link ft-cat-jwl",children:"jewelery"})]}),Object(d.jsxs)("div",{className:"footer-contacts-wrapper",children:[Object(d.jsx)("div",{className:"footer-contacts-title",children:"- Contacts"}),Object(d.jsx)("div",{className:"ft-link e-mail",children:"e-mail"}),Object(d.jsx)("div",{className:"ft-link ph",children:"+95 09973164648"}),Object(d.jsx)("div",{className:"ft-link github",children:"github.io"}),Object(d.jsx)("div",{className:"ft-link linkedIn",children:"LinkedIn"})]}),Object(d.jsx)("div",{className:"copyright-wrapper",children:Object(d.jsx)("div",{className:"copyright",children:"All copyright reserved to Legendary PEPU :3"})})]})})},j=(c(82),c(83),c(11)),u=c.n(j),b=c(20),m=c(33),p=c.n(m),h="PRODUCTS_FAIL",O="SINGLE_REQUEST",x="SINGLE_SUCCESS",v="SINGLE_FAIL",g="RELATED_REQUEST",f="RELATED_SUCCESS",N="RELATED_FAIL",A="CATEGORY_REQUEST",y="CATEGORY_SUCCESS",w=function(e){return function(){var t=Object(b.a)(u.a.mark((function t(c){var s,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),c({type:A}),t.prev=2,t.next=5,p.a.get("https://fakestoreapi.com/products/category/".concat(e));case 5:s=t.sent,r=s.data,c({type:y,payload:r}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c({type:h,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},E=c(5),k=function(){var e=Object(E.b)(),t=Object(s.useState)(!1),c=Object(l.a)(t,2),r=c[0],a=c[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"category-wrapper",children:[Object(d.jsx)("div",{className:"category",onClick:function(){a(!r)},children:"Category ^"}),r?Object(d.jsxs)("div",{className:"category-dropdown",children:[Object(d.jsx)(n.b,{to:"/products",className:"link",children:Object(d.jsx)("div",{className:"ct-btn mensclothing",onClick:function(){return e(w("men's clothing")),void a(!r)},value:"menclothing",children:"Men's Clothings"})}),Object(d.jsx)(n.b,{to:"/products",className:"link",children:Object(d.jsx)("div",{className:"ct-btn womensclothing",onClick:function(){return e(w("women's clothing")),void a(!r)},children:"Women's Clothings"})}),Object(d.jsx)(n.b,{to:"/products",className:"link",children:Object(d.jsx)("div",{className:"ct-btn jewellery",onClick:function(){return e(w("jewelery")),void a(!r)},children:"Jewellery"})}),Object(d.jsx)(n.b,{to:"/products",className:"link",children:Object(d.jsx)("div",{className:"ct-btn electronics",onClick:function(){return e(w("electronics")),void a(!r)},children:"Electronics"})})]}):Object(d.jsx)(d.Fragment,{})]})})},S=(c(109),"ADD_TO_CART"),C="CART_EMPTY",I="REMOVE_FROM_CART",M=function(e,t,c,s){return function(){var r=Object(b.a)(u.a.mark((function r(a,n){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:console.log(s),a({type:S,payload:{product:e,productId:t,price:c,qty:s}}),localStorage.setItem("lucidStore",JSON.stringify(n().cart.cartItems));case 3:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},P=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.cart.cartItems}));console.log(t);var c=null===t||void 0===t?void 0:t.reduce((function(e,t){return Math.floor(e+t.price*t.qty)}),0),s=function(t){var c;e((c=t.productId,function(){var e=Object(b.a)(u.a.mark((function e(t,s){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:I,payload:{productId:c}}),localStorage.setItem("lucidStore",JSON.stringify(s().cart.cartItems));case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()))},r=function(){e({type:"SHOW_MODEL",payload:!0}),e(function(){var e=Object(b.a)(u.a.mark((function e(t,c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:C}),localStorage.setItem("lucidStore",JSON.stringify(c().cart.cartItems));case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}())};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"cart-wrapper",children:[Object(d.jsx)("div",{className:"cart-title",children:"Your Items"}),null===t||void 0===t?void 0:t.map((function(t,c){return Object(d.jsxs)("div",{className:"cart-collection",children:[Object(d.jsx)("div",{className:"cart-img-wrapper",children:Object(d.jsx)("img",{src:t.product.image,className:"cart-img"})}),Object(d.jsxs)("div",{className:"cart-item-detail",children:[Object(d.jsx)("div",{className:"cart-item-title",children:t.product.title}),Object(d.jsxs)("div",{className:"cart-item-btn",children:[Object(d.jsx)("div",{className:"b i-btn",onClick:function(){return function(t){t.qty>1&&e(M(t.product,t.productId,t.price,t.qty-1))}(t)},children:"-"}),Object(d.jsx)("div",{className:"b qty",children:t.qty}),Object(d.jsx)("div",{className:"b d-btn",onClick:function(){return function(t){console.log("hi"),e(M(t.product,t.productId,t.price,t.qty+1))}(t)},children:"+"}),Object(d.jsx)("div",{className:"b delect",onClick:function(){return s(t)},children:"delete"})]}),Object(d.jsx)("div",{className:"cart-item-price",children:t.product.price})]})]},c)})),Object(d.jsxs)("div",{className:"total-price-wrapper",children:[Object(d.jsx)("div",{className:"total-price-title",children:"Total Price  :"}),Object(d.jsxs)("div",{className:"total-price",children:[c," $"]})]}),Object(d.jsx)("div",{className:"checkout-wrapper",onClick:function(){return r()},children:"CheckOut"}),Object(d.jsx)("div",{className:"thanks-note",children:"Thank you for Supporting us."})]})})},R=function(){var e=Object(E.c)((function(e){return e.cart.cartItems})).length,t=Object(s.useState)(!1),c=Object(l.a)(t,2),r=c[0],a=c[1],i=function(){a(!r)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"nav-wrapper",children:Object(d.jsxs)("div",{className:"nav-container",children:[Object(d.jsx)("div",{className:"logo-wrapper",children:Object(d.jsx)("div",{className:"logo",children:"lucid"})}),Object(d.jsxs)("div",{className:"page-links-wrapper",children:[Object(d.jsx)(n.b,{to:"/",className:"link",children:Object(d.jsx)("div",{className:"home",children:"Home"})}),Object(d.jsx)(n.b,{to:"/products",className:"link",children:Object(d.jsx)("div",{className:"products",children:"Products"})}),Object(d.jsx)("div",{className:"reviews",children:"Reviews"})]}),Object(d.jsx)(k,{}),Object(d.jsxs)("div",{className:"nav-btn",children:[Object(d.jsx)("div",{className:"contacts-btn",onClick:function(){return i()},children:"Contacts"}),r?Object(d.jsx)("div",{className:"cart-container cart-container-show",children:Object(d.jsx)(P,{})}):Object(d.jsx)("div",{className:"cart-container cart-container-hide",children:Object(d.jsx)(P,{})}),Object(d.jsxs)("div",{className:"carts-btn",onClick:function(){return i()},children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGZSURBVHgB1ZQ/TgJBFMa/byRWJnoD1xNooxAbaUxAG2MU7dQb6AmEG+AJkE6kUCtILKSE2MANxhusHTGyz9lZ5f8mZHcbf8W++bfzzZt57zGdPxP4EPf0WGo3HzQSRA1bgkuhVJAwqtOokcIN44Zr+tnt/dMtJAj/Gul84cl0j5As7vCKRPCJ5Ommxjo6MN5dp1G/Rgx2coUiyVuzV2/kAZQOGmoVMSGxabcasDUUWMK3toNE7Ec2AeNYK6JHYYqUturAGmJC0B7y/bXeHQqMJZiDGGRyJ1nfGi+6vlVT89r/7B4cryMiA6Qc31LwMSMgED/Z8OUtbyAiihK8IdGaETAKvWBu4CA6NoIGQntF43lgwotucApVMUUwVl1a6ffD3yAB3Fbr2R52wgPzBpp+oApeOs1aInVpwoMURdsGsZfJnTtIAE4PmLt/MyaLiPjlf7yvZhSFVybFq/gvcN5g5rBw4Xksm0mXIsV287EadZ2a96N4LP4WPUfIMkJYZN18gcmK6iJMYIF1cwWU8MYYLdZ1lhDCIut+ABhllK9sJ5LpAAAAAElFTkSuQmCC",className:"cart-icon"}),Object(d.jsx)("div",{className:"cartItemsNo",children:e})]}),Object(d.jsx)("div",{className:"wishlist-btn",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKxSURBVHgBrVS7a1NhFD/nu0LTTjoIohYitFJshQjWZrwdhLQuKWhbXGo3N9vNrc1f0HTTyWSRpEWaLCagYDoIabNksFKwaAYrdYsgpLmYezzna2695NUbmx9cvtfvPO55AbRBMBT2g0eYZvhiuzd0H+6GHpoGGisEEOAHRyhnkx0vZDdjnbi8llG4f+xI4d1m0eEZpx5Pz64gKFHiZ6KvLuDTZ8TwtZujcPhlb1u4E1NzawrViwauODSCCp+6uYajnAhX9S8RRvqPqzMf37+JDA7djiPgL/5Pk1dTBAeHR01mPffCFSMYDM37CembCNho3Cm8fV1sjCNzTOZ8cN954dYIJw22tMb7ABDEdjOJl9AC3w8+lQaHRtkxNPWFR67is2KyFrJr9jp0hM4PdMXlcIkRv+zdmW+FfDZRcvZdcP3KuexUyw52MkmUD7qAIiDtzW+fLwA9QpB7RFYu36JiC2k5GFgLQ49AyliQFcHeVv+SpxakZOGc0DoInmgDZESVJISI4iDtjvQKzglStHKygZjo1km2fNaStDtvTR4DS/CfmJiee1b3vsSNEJE7PSqO9vePudV/ctAkD6GrN26lf3z9fNSFbhiffhxAopTskezlfHYjd2pAwB1YvD48dom3QR5YITaY5ruyF+USd05oBiTMPJ92shtR562ppu9NzW3xZVj/Js8Sd4O1U16fPX4Oc2o3k5xxv6tGAauvuljvDS3YqbLcyjmrxYFKdbGR02SgmEqVrT5r0m1k/P6jpiaUmLuV91esyVwu1RRSA1pAkn55bDhp1C6M4ElO5jk/1cODvbz2/MHsAhAl+O2KhGWgYs20Ui44c65wGFbZU13bvK5yXmRmOaW8zrOpY1l7GlxuIy4ss/LoWbKeJ6PEXFFtSwsRLnJ15aDXkKrxMtbd+AsvUEJWlH7p3AAAAABJRU5ErkJggg==",className:"heart-icon"})})]})]})})})},D=c.p+"static/media/men.b1447536.png",L=c.p+"static/media/women.43ef2fba.png",B=c.p+"static/media/jewelery.d41e2ed6.png",F=c.p+"static/media/electronic.dfc86c6e.png",Y=function(){var e=Object(E.c)((function(e){return e.showModel.showModel})),t=Object(E.b)(),c=Object(i.f)();Object(s.useEffect)((function(){var e=document.querySelectorAll("label"),t=(document.getElementById("text"),document.getElementsByClassName(".s2-t"));console.log(t),console.log(e),e.forEach((function(e){e.innerHTML=e.textContent.split("").map((function(e){return'<div class="letter-wrapper"><span class=letter>'.concat(e,"</span></div>")})).join("")}))}),[]);var r=Object(s.useState)("Men's clothing"),a=Object(l.a)(r,2),n=a[0],o=a[1],j=Object(s.useState)(0),u=Object(l.a)(j,2),b=u[0],m=u[1],p=Object(s.useState)(0),h=Object(l.a)(p,2),O=h[0],x=h[1],v=Object(s.useState)(0),g=Object(l.a)(v,2),f=g[0],N=g[1],A=Object(s.useState)(0),y=Object(l.a)(A,2),k=y[0],S=y[1];Object(s.useEffect)((function(){var e=document.querySelector(".cursor-demo");console.log(e),e.innerHTML=null===e||void 0===e?void 0:e.textContent.replace(/\S/g,"<span>$&</span>");for(var t=document.querySelectorAll(".cursor-demo span"),c=0;c<t.length;c++)t[c].style.transform="rotate("+20*c+"deg)"}),[]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{onMouseMove:function(e){m(.05*e.pageX),x(.04*e.pageY),N(e.pageX),S(e.pageY),console.log(k+"Y"),console.log(f+"X")},className:"home-container",children:[Object(d.jsx)(R,{}),Object(d.jsxs)("div",{className:"home-header-wrapper",children:[Object(d.jsx)("div",{className:"slide-header-title",children:n}),Object(d.jsxs)("div",{className:"slide-subhead",children:[Object(d.jsx)("div",{className:"sl-sh-fav",children:"Favourites"}),Object(d.jsx)("div",{className:"sl-sh-cmsn",children:"Coming soon"})]})]}),Object(d.jsx)("div",{onScroll:function(){var e=document.getElementById("home-body-wrapper").getBoundingClientRect().left;document.getElementById("slide2-title").getBoundingClientRect().left;o(e<-1700&&e>-3499?"Women's clothing":e<-3500&&e>-5299?"Jewelery":e<-5300&&e>-6100?"Electronics":"Men's clothing")},onClick:function(){var e=document.getElementById("home-body-wrapper").getBoundingClientRect().left;console.log("click"),e<-1700&&e>-3499?(t(w("women's clothing")),c.push("/products")):e<-3500&&e>-5299?(t(w("jewelery")),c.push("/products")):e<-5300&&e>-6100?(t(w("electronic")),c.push("/products")):(t(w("men's clothing")),c.push("/products"))},className:"home-body-wrapper",children:Object(d.jsxs)("div",{className:"home-body",id:"home-body-wrapper",children:[Object(d.jsxs)("div",{className:"slide1",id:"slide1",children:[Object(d.jsxs)("div",{className:"slide1-title",id:"slide-title",children:[Object(d.jsx)("label",{id:"s1-t1",className:"text",children:"Men"}),Object(d.jsx)("label",{id:"s1-t2",children:"'s"}),Object(d.jsx)("label",{id:"s1-t3",children:"Clothing"})]}),Object(d.jsx)("div",{className:"slide-img-wrapper",style:{transform:"translateX(-".concat(b,"px) translateY(-").concat(O,"px)")},children:Object(d.jsx)("img",{src:D,className:"slide1-img"})})]}),Object(d.jsxs)("div",{className:"slide2",children:[Object(d.jsxs)("div",{className:"slide2-title",id:"slide2-title",children:[Object(d.jsx)("label",{id:"s2-t1",children:"Women"}),Object(d.jsx)("label",{id:"s2-t2",children:"'s"}),Object(d.jsx)("label",{id:"s2-t3",children:"Clothing"})]}),Object(d.jsx)("div",{className:"slide-img-wrapper",style:{transform:"translateX(-".concat(b,"px) translateY(-").concat(O,"px)")},children:Object(d.jsx)("img",{src:L,className:"slide1-img"})})]}),Object(d.jsxs)("div",{className:"slide3",children:[Object(d.jsxs)("div",{className:"slide3-title",id:"slide-title",children:[Object(d.jsx)("label",{id:"s3-t1",children:"Jewe"}),Object(d.jsx)("label",{id:"s3-t2",children:"lery"})]}),Object(d.jsx)("div",{className:"slide-img-wrapper",style:{transform:"translateX(-".concat(b,"px) translateY(-").concat(O,"px)")},children:Object(d.jsx)("img",{src:B,className:"slide1-img"})})]}),Object(d.jsxs)("div",{className:"slide4",children:[Object(d.jsxs)("div",{className:"slide4-title",id:"slide-title",children:[Object(d.jsx)("label",{id:"s4-t1",children:"Elec"}),Object(d.jsx)("label",{id:"s4-t2",children:"tronic"})]}),Object(d.jsx)("div",{className:"slide-img-wrapper",style:{transform:"translateX(-".concat(b,"px) translateY(-").concat(O,"px)")},children:Object(d.jsx)("img",{src:F,className:"slide1-img"})})]})]})}),Object(d.jsx)("div",{className:"cursor-demo",style:{top:"".concat(k,"px"),left:"".concat(f,"px")},children:"Click to view product"}),e?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"model-wrapper",children:Object(d.jsxs)("div",{className:"model",children:[Object(d.jsxs)("div",{className:"model-title",children:["Live up your lucid dream",Object(d.jsx)("br",{}),"with lucid products."]}),Object(d.jsx)("div",{className:"model-subtitle",children:"We appreciate your support."}),Object(d.jsx)("div",{className:"close-model",onClick:function(){t({type:"HIDE_MODEL",payload:!1})},children:"Back"})]})})}):""]})})},U=(c(110),c(111),function(e){var t=e.img,c=(e.title,e.price),r=e.id,a=(e.choosenProduct,Object(s.useState)(!1)),i=Object(l.a)(a,2);i[0],i[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(n.b,{to:"/product/".concat(r),className:"link",children:Object(d.jsxs)("div",{className:"product-card",children:[Object(d.jsx)("div",{className:"product-card-detail-btn-wrapper",children:Object(d.jsx)("div",{className:"product-card-detail-btn",children:"More Detail"})}),Object(d.jsx)("div",{className:"price-wrapper",children:Object(d.jsxs)("div",{className:"more-detail",children:["$ ",c]})}),Object(d.jsx)("div",{className:"product-card-img-wrapper",children:Object(d.jsx)("img",{src:t,className:"product-card-img"})})]})})})}),T=function(){var e=Object(E.c)((function(e){return e.productsByCategory.categoryProducts})),t=Object(E.c)((function(e){return e.productsByCategory.loading})),c=Object(E.c)((function(e){return e.showModel.showModel})),r=Object(E.b)();console.log(t);var a="";e[0]&&(a=e[0].category);var n=Object(s.useState)(0),i=Object(l.a)(n,2),j=i[0],u=i[1],b=Object(s.useState)(!1),m=Object(l.a)(b,2),p=m[0],h=m[1];return Object(s.useEffect)((function(){t||r(w("men's clothing"))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"productPage-container",children:[Object(d.jsx)(R,{}),t?Object(d.jsx)("h1",{children:"Loading Please Wait ... "}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"productPage-title-wrapper",children:Object(d.jsx)("div",{className:"productPage-title",children:a})}),Object(d.jsx)("div",{className:"bby-header",children:Object(d.jsx)("div",{className:"pp-category-wrapper",children:Object(d.jsx)(k,{})})}),Object(d.jsxs)("div",{className:"product-cards-container",children:[null===e||void 0===e?void 0:e.map((function(e,t){return Object(d.jsx)("div",{className:"pp-product-container",onClick:function(){return function(e){u(e+1),h(!p)}(t)},children:Object(d.jsx)(U,{img:e.image,price:e.price,category:e.category,id:e.id,rating:e.rating,title:e.title,choosenProduct:j})},t)})),Object(d.jsx)("div",{className:"product-footer",children:Object(d.jsx)(o,{})})]})]}),c?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"model-wrapper",children:Object(d.jsxs)("div",{className:"model",children:[Object(d.jsxs)("div",{className:"model-title",children:["Live up your lucid dream",Object(d.jsx)("br",{}),"with lucid products."]}),Object(d.jsx)("div",{className:"model-subtitle",children:"We appreciate your support."}),Object(d.jsx)("div",{className:"close-model",onClick:function(){r({type:"HIDE_MODEL",payload:!1})},children:"Back"})]})})}):""]})})},J=(c(112),function(){var e=Object(i.g)().id,t=Object(E.b)(),c=(Object(E.c)((function(e){return e.productsByCategory.categoryProducts})),Object(E.c)((function(e){return e.singleProduct.loading}))),r=Object(E.c)((function(e){return e.showModel.showModel})),a=Object(E.c)((function(e){return e.singleProduct.selectedProduct}));Object(s.useEffect)((function(){t(function(e){return function(){var t=Object(b.a)(u.a.mark((function t(c){var s,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),c({type:O}),t.prev=2,t.next=5,p.a.get("https://fakestoreapi.com/products/".concat(e));case 5:s=t.sent,r=s.data,c({type:x,payload:r}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c({type:v,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[]);var n="";a&&(n=a.category);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"detail-page-container",children:[Object(d.jsx)(R,{}),c?Object(d.jsx)("h1",{children:"Loading"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"productPage-title-wrapper",children:Object(d.jsx)("div",{className:"productPage-title",children:n})}),Object(d.jsx)("div",{className:"bby-header",children:Object(d.jsx)("div",{className:"pp-category-wrapper",children:Object(d.jsx)(k,{})})})]}),Object(d.jsxs)("div",{className:"product-detail-container",children:[Object(d.jsx)("div",{className:"product-detail-img-wrapper",children:Object(d.jsx)("img",{src:a.image,className:"product-detail-img"})}),Object(d.jsxs)("div",{className:"product-detail",children:[Object(d.jsx)("div",{className:"product-title",children:a.title}),Object(d.jsx)("div",{className:"product-description",children:a.description}),Object(d.jsx)("div",{className:"product-rating",children:Object(d.jsx)("span",{className:"r",children:"Rating"})}),Object(d.jsxs)("div",{className:"product-price",children:[a.price," $"]}),Object(d.jsxs)("div",{className:"product-cta",children:[Object(d.jsx)("div",{className:"add-to-cart-btn",onClick:function(){return console.log("add"),void t(M(a,a.id,a.price,1))},children:"Add to Cart"}),Object(d.jsx)("div",{className:"wish-list",children:"WishList"})]})]})]}),Object(d.jsx)("div",{className:"detail-footer",children:Object(d.jsx)(o,{})}),r?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"model-wrapper",children:Object(d.jsxs)("div",{className:"model",children:[Object(d.jsxs)("div",{className:"model-title",children:["Live up your lucid dream",Object(d.jsx)("br",{}),"with lucid products."]}),Object(d.jsx)("div",{className:"model-subtitle",children:"We appreciate your support."}),Object(d.jsx)("div",{className:"close-model",onClick:function(){t({type:"HIDE_MODEL",payload:!1})},children:"Back"})]})})}):""]})})}),G=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(n.a,{basename:"/ecommerce-site-fakestore",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",exact:!0,component:Y}),Object(d.jsx)(i.a,{path:"/products",component:T}),Object(d.jsx)(i.a,{path:"/product/:id",component:J})]})})})},W=c(24),Z=c(62),H=c(63),Q=c(16),_=Object(W.b)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case g:return{loading:!0,products:[]};case f:return{loading:!1,products:s};case N:return{loading:!1,error:s};default:return e}},productsByCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{categoryProducts:[]},t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case A:return{loading:!0,categoryProducts:[]};case y:return{loading:!1,categoryProducts:s};case h:return{loading:!0,categoryProducts:s};default:return e}},singleProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{selectedProduct:[]},t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case O:return{loading:!0,selectedProduct:[]};case x:return{loading:!1,selectedProduct:s};case v:return{loading:!0,selectedProduct:s};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case S:var r=s,a=e.cartItems.find((function(e){return e.productId===r.productId}));return a?Object(Q.a)(Object(Q.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.productId===r.productId?r:e}))}):Object(Q.a)(Object(Q.a)({},e),{},{cartItems:[].concat(Object(H.a)(e.cartItems),[r])});case I:return Object(Q.a)(Object(Q.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.productId!==s.productId}))});case C:return Object(Q.a)(Object(Q.a)({},e),{},{cartItems:[]});default:return e}},showModel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,c=t.type;t.payload;switch(c){case"SHOW_MODEL":return{showModel:!0};case"HIDE_MODEL":return{showModel:!1};default:return e}}}),V={cart:{cartItems:localStorage.getItem("lucidStore")?JSON.parse(localStorage.getItem("lucidStore")):[]}},X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.c,z=Object(W.d)(_,V,X(Object(W.a)(Z.a))),K=(c(113),c(38)),q=new K.QueryClient;a.a.render(Object(d.jsx)(K.QueryClientProvider,{client:q,children:Object(d.jsx)(E.a,{store:z,children:Object(d.jsx)(G,{})})}),document.getElementById("root"))},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){}},[[114,1,2]]]);
//# sourceMappingURL=main.f483b484.chunk.js.map