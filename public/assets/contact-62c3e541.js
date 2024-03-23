import{_ as v,o as i,c,q as b,s as l,a as t,v as m,x as p,t as r,p as _,y,d as C,b as N,g as w,F as T}from"./index-393bebe8.js";const k={},S={class:"relative hidden gap-10 mt-4 -mb-10 div-graphic animate-scrolling [&_h1]:font-itc lg:flex"},j=b('<h1 class="font-bold whitespace-nowrap w-fit text-giant no-stroke">CONTACT</h1><h1 class="font-normal whitespace-nowrap text-giant w-fit no-stroke">CONTACT</h1><h1 class="font-normal stroke-2 whitespace-nowrap text-giant w-fit">CONTACT</h1><h1 class="font-bold whitespace-nowrap w-fit text-giant no-stroke">CONTACT</h1><h1 class="font-normal whitespace-nowrap text-giant w-fit no-stroke">CONTACT</h1><h1 class="font-normal stroke-2 whitespace-nowrap text-giant w-fit">CONTACT</h1>',6),V=[j];function A(a,s){return i(),c("div",S,V)}const O=v(k,[["render",A]]),$={setup(){const a=l(""),s=l(""),d=l(""),e=l(""),h=l(""),n=l(""),o=l(!1),g=()=>{o.value=!1,n.value=""},x=()=>{a.value="",s.value="",d.value="",e.value="",h.value=""};return{firstname:a,lastname:s,email:d,object:e,message:h,onSubmit:async()=>{g();try{const u=await(await fetch("https://formcarry.com/s/xcH-sD-LvT3",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstname:a.value,lastname:s.value,email:d.value,object:e.value,message:h.value})})).json();u.code===200?(o.value=!0,x()):(u.code,n.value=u.message)}catch(f){n.value=f.message?f.message:f}},showNotification:()=>o.value||n.value,errorMessage:()=>n.value?n.value:"",resetStates:g,error:n}}},U={class:"flex flex-col justify-center lg:py-10 lg:flex-row lg:gap-10"},F={class:"flex-grow"},M={class:"my-8 text-sm"},B=["placeholder"],D={class:"my-8 text-sm"},q=["placeholder"],H={class:"my-8 text-sm"},L=["placeholder"],E={class:"flex-grow"},J={class:"text-sm lg:my-8"},P=["placeholder"],z={class:"my-8 text-sm"},G=["placeholder"],I={class:"flex flex-col items-center justify-between lg:gap-10 lg:flex-row"},K={class:"flex items-start gap-4 lg:items-center"},Q=t("input",{type:"checkbox",id:"terms",name:"terms",required:""},null,-1),R={type:"submit",class:"mt-10 lg:mt-0 btn font-itc hover:scale-[1.03] focus:tracking-wider lg:text-lg","aria-label":"Submit"},W={key:0,class:"mx-auto mt-10 text-center text-black lg:mt-20 rounded-simple w-fit"},X={key:0,class:"p-4 px-10 mx-auto mb-5 bg-white rounded-simple w-fill"},Y={key:1,class:"p-4 px-10 mx-auto mb-5 bg-lightorange rounded-simple w-fill"};function Z(a,s,d,e,h,n){return i(),c("form",{onSubmit:s[5]||(s[5]=y((...o)=>e.onSubmit&&e.onSubmit(...o),["prevent"]))},[t("div",U,[t("div",F,[t("div",M,[m(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=o=>e.firstname=o),id:"firstname",class:"input",placeholder:a.$t("contact.placeholder1")},null,8,B),[[p,e.firstname]])]),t("div",D,[m(t("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=o=>e.lastname=o),id:"lastname",class:"input",placeholder:a.$t("contact.placeholder2")},null,8,q),[[p,e.lastname]])]),t("div",H,[m(t("input",{type:"email","onUpdate:modelValue":s[2]||(s[2]=o=>e.email=o),id:"email",class:"input",placeholder:a.$t("contact.placeholder3")},null,8,L),[[p,e.email]])])]),t("div",E,[t("div",J,[m(t("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=o=>e.object=o),id:"object",class:"input",placeholder:a.$t("contact.placeholder4")},null,8,P),[[p,e.object]])]),t("div",z,[m(t("textarea",{"onUpdate:modelValue":s[4]||(s[4]=o=>e.message=o),rows:"2",id:"message",class:"p-5 border rounded-md input lg:focus:border-4 focus:border-2 focus:border-lightpurple",placeholder:a.$t("contact.placeholder5")},null,8,G),[[p,e.message]])])])]),t("div",I,[t("div",K,[Q,t("span",null,r(a.$t("contact.consent")),1)]),t("button",R,r(a.$t("footer.btn")),1)]),e.showNotification()?(i(),c("div",W,[!e.error&&e.showNotification()?(i(),c("div",X,r(a.$t("contact.success")),1)):e.error&&e.showNotification()?(i(),c("div",Y,r(e.error),1)):_("",!0)])):_("",!0)],32)}const tt=v($,[["render",Z]]),et={class:"mb-10 margins lg:mt-8"},st=t("div",{class:"flex items-center w-full gap-4 mb-8"},[t("h1",{class:"text-transparent normal-case whitespace-nowrap lg:hidden div-graphic font_thin"}," Contact "),t("div",{class:"w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"})],-1),ot={class:"gap-12 lg:flex"},at={class:"md:text-xl lg:w-1/2 max-w-[65ch] mb-2"},nt={class:"md:text-xl lg:w-1/2 max-w-[65ch] mb-2"},dt=C({__name:"contact",setup(a){return N({title:"Contact | Lisa Cingolani"}),(s,d)=>(i(),c(T,null,[w(O),t("section",et,[st,t("div",ot,[t("p",at,r(s.$t("contact.p1")),1),t("p",nt,r(s.$t("contact.p2")),1)]),w(tt)])],64))}});export{dt as default};
