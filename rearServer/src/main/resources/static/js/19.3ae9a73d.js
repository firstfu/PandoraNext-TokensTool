"use strict";(self["webpackChunkPandoraNext_TokensTool"]=self["webpackChunkPandoraNext_TokensTool"]||[]).push([[19],{8911:function(e,a,t){t.r(a),t.d(a,{default:function(){return I}});var l=t(5185),o=(t(3349),t(6907)),n=(t(4746),t(5267)),s=(t(1645),t(6773)),r=(t(487),t(3164)),i=(t(6335),t(6252)),d=t(2262),c=t(2201),m=t(6154),u=(t.p,t(1348));const v=e=>((0,i.dD)("data-v-322d8559"),e=e(),(0,i.Cn)(),e),p={class:"content_login"},h=v((()=>(0,i._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1))),g=v((()=>(0,i._)("div",{class:"login-container"},[(0,i._)("h4",null,"PandoraNext-TokensTool")],-1))),w={class:"container"},f={style:{display:"flex",transform:"translate(0vw, 2vh)","font-size":"14.6px","justify-content":"center"}},_={style:{display:"flex",transform:"translate(0vw, 2vh)","margin-top":"5vh","font-size":"14.6px","justify-content":"center"}},y={style:{display:"flex",transform:"translate(0.5vw, 0vh)","margin-top":"6vh"}},b={style:{margin:"3.5vh 16px 0px 16px","justify-content":"center"}},x=v((()=>(0,i._)("div",{class:"bottom"},[(0,i._)("div",{style:{"text-align":"center",transform:"translateY(0vh)"}},[(0,i._)("h3",null,[(0,i._)("a",{href:"https://github.com/Yanyutin753/PandoraNext-TokensTool"},"Powered by tokensTool v0.6.8")])])],-1)));var k=(0,i.aZ)({__name:"loginIndex",setup(e){const a=(0,c.tv)(),t=window.location.pathname,v=t.split("/");let k="";v.length>=3&&(k="/"+v[1]);const T=(0,d.iH)(""),S=(0,d.iH)(""),I=(0,d.iH)(""),z=(0,d.iH)(!0);(0,i.bv)((async()=>{const e=localStorage.getItem("savedUsername"),a=localStorage.getItem("savedPassword"),t=localStorage.getItem("savedRemember");"true"===t&&(T.value=e||"",S.value=a||"",I.value="true"),window.innerWidth>767&&(z.value=!1),U()}));const P=e=>{const a=/^[^\s]*$/;return!!a.test(e)||"此项不允许包含空格"},W=localStorage.getItem("jwtToken"),U=async()=>{m.Z.post(`${k}/api/loginToken?token=`+W).then((e=>{1!=e.data.code?u.z8.error("令牌失效，请重新登录！"):window.innerWidth<=1e3?a.replace("/iphone"):a.replace("/home")})).catch((e=>{u.z8.error("令牌失效，请重新登录！")}))},V=()=>{I.value?(localStorage.setItem("savedUsername",T.value),localStorage.setItem("savedPassword",S.value),localStorage.setItem("savedRemember","true")):(localStorage.removeItem("savedUsername"),localStorage.removeItem("savedPassword"),localStorage.removeItem("savedRemember"));let e={loginUsername:T.value,loginPassword:S.value};fetch(`${k}/api/login`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{if(1===e.code){const t=e.data;localStorage.setItem("jwtToken",t),u.z8.success("登录成功！"),setTimeout((()=>{window.innerWidth<=1e3?a.replace("/iphone"):a.replace("/home")}),1e3)}else u.z8.error(e.msg)})).catch((e=>{console.error("登录时出现错误:",e),u.z8.error("账号或密码错误！")}))};return(e,a)=>{const t=r.gN,d=(0,i.up)("h9"),c=s.XZ,m=n.TS,u=o.zx,v=l.l0;return(0,i.wg)(),(0,i.iD)("div",p,[h,g,(0,i._)("div",w,[(0,i.Wm)(v,{onSubmit:V},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{inset:""},{default:(0,i.w5)((()=>[(0,i._)("div",f,[(0,i.Wm)(t,{modelValue:T.value,"onUpdate:modelValue":a[0]||(a[0]=e=>T.value=e),clearable:"",name:"username",label:"Username",placeholder:"username",class:"userName","input-align":"center",rules:[{validator:P}]},null,8,["modelValue","rules"])]),(0,i._)("div",_,[(0,i.Wm)(t,{modelValue:S.value,"onUpdate:modelValue":a[1]||(a[1]=e=>S.value=e),clearable:"",type:"password",name:"password",label:"Password",placeholder:"password",class:"userName","input-align":"center",rules:[{validator:P}]},null,8,["modelValue","rules"])]),(0,i._)("div",y,[(0,i.Wm)(c,{class:"remember",modelValue:I.value,"onUpdate:modelValue":a[2]||(a[2]=e=>I.value=e),"checked-color":"#0ea27e","icon-size":"13.5px"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{style:{"font-size":"13.5px",transform:"translateX(7px)"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Remember me")])),_:1})])),_:1},8,["modelValue"])])])),_:1}),(0,i._)("div",b,[(0,i.Wm)(u,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{style:{"font-weight":"bold"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Continue")])),_:1})])),_:1})])])),_:1})]),x])}}}),T=t(3744);const S=(0,T.Z)(k,[["__scopeId","data-v-322d8559"]]);var I=S}}]);
//# sourceMappingURL=19.3ae9a73d.js.map