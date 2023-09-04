"use strict";(self["webpackChunkvue_template"]=self["webpackChunkvue_template"]||[]).push([[229],{229:function(t,e,n){n.r(e),n.d(e,{default:function(){return J}});var o=n(3396),i=n(2268),s=n(9242);const l=(0,o.uE)('<div class="border mb-5 p-5"><p>影片</p><input type="file" id="videoInput"><p>分辨率: <span id="resolution"></span></p></div><div class="border p-5"><p>圖片</p><input type="file" id="imageInput"><p>分辨率: <span id="resolution2"></span></p></div>',2),c={class:"my-5"},a=(0,o._)("p",null,"取得影片解析度",-1),p={key:0},d={class:"my-5"},u=(0,o._)("p",null,"測試1",-1),r={class:"my-5"},m=(0,o._)("p",null,"測試2",-1),h={class:"my-5"},v=(0,o._)("p",null,"測試3: 只调用手机相册",-1),g=(0,o._)("code",null,'accept="image/*;"',-1),_={class:"my-5"},y=(0,o._)("p",null,"測試4: 只调用手机相机拍照",-1),f=(0,o._)("code",null,'capture="camera"',-1),b={class:"my-5"},w=(0,o._)("p",null,"測試5: 调用手机相册和拍照",-1),k=(0,o._)("code",null,'accept="image/*"',-1),C=(0,o._)("div",{class:"my-5"},[(0,o._)("p",null,"測試6: 測試 禁用移動端長按圖片出現選單"),(0,o._)("pre",null,[(0,o.Uk)("    "),(0,o._)("code",null,(0,i.zw)("-webkit-touch-callout: none !important;\n    -webkit-user-select: none !important;"))]),(0,o._)("img",{src:"https://picsum.photos/500/300",width:"100",alt:""})],-1),E={class:"my-5"},I=(0,o._)("p",null,"測試7: 測試 禁用移動端長按圖片出現選單",-1),U=(0,o.Uk)("    "),x={class:"my-5"},R=(0,o._)("p",null,"測試8: 測試 禁用移動端長按圖片出現選單",-1),L=(0,o.Uk)("    "),z={class:"my-5"},M=(0,o._)("p",null,"測試9: 測試 禁用移動端長按圖片出現選單",-1),T=(0,o._)("p",null,"加一層遮罩在圖片上",-1),$=(0,o._)("div",{class:"position-relative"},[(0,o._)("img",{src:"https://picsum.photos/500/300",width:"100",alt:""}),(0,o._)("span",{class:"position-absolute top-0 bottom-0 start-0 end-0 z110",style:{"background-color":"rgba(0,0,0,40%)"}})],-1),j=(0,o._)("p",null,"遮罩加上 @contextmenu.prevent",-1),O={class:"position-relative"},B=(0,o._)("img",{src:"https://picsum.photos/500/300",width:"100",alt:""},null,-1),D=(0,o._)("p",null,"遮罩加上 @touchstart.prevent",-1),H={class:"position-relative"},F=(0,o._)("img",{src:"https://picsum.photos/500/300",width:"100",alt:""},null,-1),V=(0,o.uE)('<div class="my-5"><p>測試10: 測試 禁用移動端長按圖片出現選單</p><p>-webkit-touch-callout:none;(加在父層)</p><div style="-webkit-touch-callout:none;"><img src="https://picsum.photos/500/300" width="100" alt=""></div></div><div class="my-5"><p>測試11: 測試 禁用移動端長按圖片出現選單</p><p>-webkit-touch-callout:none;(加在圖片)</p><img src="https://picsum.photos/500/300" width="100" alt="" style="-webkit-touch-callout:none;"></div>',2),W={class:"my-5"},N=(0,o._)("p",null,"測試12: 測試 禁用移動端長按圖片出現選單",-1),P=(0,o._)("p",null,"@click.prevent",-1),S=(0,o.uE)('<div class="my-5"><p>測試13: 測試 禁用移動端長按圖片出現選單</p><p>pointer-events: none;</p><img src="https://picsum.photos/500/300" width="100" alt="" style="pointer-events:none;"></div><div class="my-5"><p>測試13: 測試 禁用移動端長按圖片出現選單</p><p>使用背景圖</p><div style="background-image:url(&#39;https://picsum.photos/500/300&#39;);width:100px;height:100px;background-position:center center;"></div></div><div class="my-5"><p>測試1: 測試 檔案上傳類型</p><input type="file" accept="file_extension"><input type="file" accept="media_type"><input type="file" accept="image/*,video/*" capture="false"><input type="file" accept="image/png, image/jpeg" capture="filesystem"></div>',3);function q(t,e,n,q,Y,Z){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("button",{type:"button",class:"btn me-5",onClick:e[0]||(e[0]=t=>Z.enterPage("/chatroomHome/chatroomList"))},"討論區列表"),l,(0,o._)("div",c,[a,(0,o._)("input",{type:"file",accept:".hevc, video/*",onChange:e[1]||(e[1]=(...t)=>Z.handleFileChange&&Z.handleFileChange(...t))},null,32),Y.videoResolution?((0,o.wg)(),(0,o.iD)("p",p,"Video Resolution: "+(0,i.zw)(Y.videoResolution),1)):(0,o.kq)("",!0)]),(0,o._)("div",d,[u,(0,o._)("input",{type:"file",accept:".hevc, video/*",capture:"camcorder",onChange:e[2]||(e[2]=(...t)=>Z.test&&Z.test(...t))},null,32)]),(0,o._)("div",r,[m,(0,o._)("input",{type:"file",accept:".hevc, video/*",capture:"camcorder",onChange:e[3]||(e[3]=(...t)=>Z.test2&&Z.test2(...t))},null,32)]),(0,o._)("div",h,[v,g,(0,o._)("input",{type:"file",accept:"image/*;",onChange:e[4]||(e[4]=(...t)=>Z.test3&&Z.test3(...t))},null,32)]),(0,o._)("div",_,[y,f,(0,o._)("input",{type:"file",accept:"image/*",capture:"camera",onChange:e[5]||(e[5]=(...t)=>Z.test3&&Z.test3(...t))},null,32)]),(0,o._)("div",b,[w,k,(0,o._)("input",{type:"file",accept:"image/*",onChange:e[6]||(e[6]=(...t)=>Z.test3&&Z.test3(...t))},null,32)]),C,(0,o._)("div",E,[I,(0,o._)("pre",null,[U,(0,o._)("code",null,(0,i.zw)("@contextmenu.prevent"),1)]),(0,o._)("img",{src:"https://picsum.photos/500/300",onContextmenu:e[7]||(e[7]=(0,s.iM)((()=>{}),["prevent"])),width:"100",alt:""},null,32)]),(0,o._)("div",x,[R,(0,o._)("pre",null,[L,(0,o._)("code",null,(0,i.zw)("@touchstart.prevent"),1)]),(0,o._)("img",{src:"https://picsum.photos/500/300",onTouchstart:e[8]||(e[8]=(0,s.iM)((()=>{}),["prevent"])),width:"100",alt:""},null,32)]),(0,o._)("div",z,[M,T,$,j,(0,o._)("div",O,[B,(0,o._)("span",{class:"position-absolute top-0 bottom-0 start-0 end-0 z110",onContextmenu:e[9]||(e[9]=(0,s.iM)((()=>{}),["prevent"])),style:{"background-color":"rgba(0,0,0,40%)"}},null,32)]),D,(0,o._)("div",H,[F,(0,o._)("span",{class:"position-absolute top-0 bottom-0 start-0 end-0 z110",onTouchstart:e[10]||(e[10]=(0,s.iM)((()=>{}),["prevent"])),style:{"background-color":"rgba(0,0,0,40%)"}},null,32)])]),V,(0,o._)("div",W,[N,P,(0,o._)("img",{src:"https://picsum.photos/500/300",width:"100",alt:"",onClick:e[11]||(e[11]=(0,s.iM)((()=>{}),["prevent"]))})]),S],64)}var Y=n(7139),Z={data(){return{videoResolution:null}},computed:{...(0,Y.rn)("user",["userInfo"])},methods:{...(0,Y.nv)("user",["getUserInfo"]),async enterPage(t){const{$router:e,getUserInfo:n}=this;await n(),this.userInfo.manNickName&&e.push(t)},handleFileChange(t){const e=t.target.files[0];if(e){this.videoResolution="";const t=document.createElement("video");t.src=URL.createObjectURL(e),t.onloadedmetadata=async()=>{const e=`${t.videoWidth}x${t.videoHeight}`;this.videoResolution=e}}},async test(t){const e=t.target.files[0];if(console.log(e),e){const t=await navigator.mediaDevices.getUserMedia({video:!0});console.log("videoStream",t);const e=t.getVideoTracks()[0];console.log("videoTrack",e);const n={width:{ideal:1920},height:{ideal:1080}};console.log("constraints",n),e.applyConstraints(n);const o=document.createElement("video");console.log("videoElement",o),o.srcObject=t,o.controls=!0,document.body.appendChild(o)}},async test2(t){const e=t.target.files[0];if(e){const t=await navigator.mediaDevices.getUserMedia({video:!0});console.log("videoStream",t);const e=t.getVideoTracks()[0];console.log("videoTrack",e);const o={width:1920,height:1080};console.log("idealConstraints",o);try{await e.applyConstraints(o),console.log("videoTrack.applyConstraints(idealConstraints)",e.applyConstraints(o)),console.log("影片解析度已設定為理想參數")}catch(n){console.error("無法設定影片解析度:",n)}const i=document.createElement("video");i.srcObject=t,i.controls=!0,console.log(i),document.body.appendChild(i)}},test3(t){console.log(t.target.files[0])}},async mounted(){const t=document.getElementById("videoInput"),e=document.getElementById("resolution");t.addEventListener("change",(function(t){const n=t.target.files[0];if(n){const t=document.createElement("video");t.preload="metadata",t.onloadedmetadata=function(){const n=t.videoWidth,o=t.videoHeight;e.textContent=`${n} x ${o}`},t.src=URL.createObjectURL(n)}}));const n=document.getElementById("imageInput"),o=document.getElementById("resolution2");n.addEventListener("change",(function(t){const e=t.target.files[0];if(e&&e.type.startsWith("image/")){const t=new Image;t.onload=function(){const e=t.width,n=t.height;o.textContent=`${e} x ${n}`},t.src=URL.createObjectURL(e)}}))}},A=n(89);const G=(0,A.Z)(Z,[["render",q]]);var J=G}}]);
//# sourceMappingURL=229.d1a028f3.js.map