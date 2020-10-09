(this["webpackJsonpreact-02"]=this["webpackJsonpreact-02"]||[]).push([[5],{691:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(77),c=t(637),s=t(580),i=t(581),o=t(30),m=t(29),d=t(73),u=t(632),g=t(648),p=t(589),b=t(8),E=t(178),f=function(e){var a=e.primary,t=e.secondary,n=e.to,r=e.src,c=e.dialog,s=h(),f=(Object(b.c)(),+Object(o.h)().userId===c.id),v=l.a.useMemo((function(){return l.a.forwardRef((function(e,a){return l.a.createElement(m.b,Object.assign({to:n,ref:a},e))}))}),[n]),j=E.a.dateTranslateFromAPI(t);return l.a.createElement("li",{className:s.item},l.a.createElement(i.a,{button:!0,className:s.listItem,component:v,selected:f,onClick:function(){}},l.a.createElement(g.a,null,l.a.createElement(p.a,{src:r,className:s.avatar})),l.a.createElement(d.a,{color:"primary",variant:"h6"},l.a.createElement(u.a,{primary:a,secondary:j,classes:{primary:s.primary,secondary:s.secondary}}))))},v=function(e){var a=e.dialog;return l.a.createElement(f,{to:"/dialogs/".concat(a.id),primary:a.userName,secondary:a.lastDialogActivityDate,src:a.photos.small?a.photos.small:void 0,dialog:a})},h=Object(r.a)({item:{borderTop:"1px solid #ccc","&:last-child":{borderBottom:"1px solid #ccc"}},avatar:{width:50,height:50,marginRight:10},listItem:{padding:"5px 10px"},secondary:{fontSize:"0.75rem",fontStyle:"italic"},primary:{fontSize:"0.9rem"}}),j=t(645),O=t(87),N=t(96),y=function(){var e=I();return l.a.createElement("div",{className:e.skeletonWrapper},l.a.createElement(j.a,{variant:"circle",width:40,height:40,className:e.avatar}),l.a.createElement(j.a,{variant:"rect",width:200,height:45}))},x=function(e){for(var a=e.dialogs,t=I(),n=Object(b.d)(O.c),r=Object(b.d)(O.a),i=Object(b.d)(O.b),o=Object(b.d)(O.m),m=a&&a.map((function(e){return l.a.createElement(v,{key:e.id,dialog:e})})),u=i.map((function(e){return l.a.createElement(v,{key:e.dialog.id,dialog:e.dialog})})),g=o.map((function(e){return l.a.createElement(v,{key:e.dialog.id,dialog:e.dialog})})),p=[],E=0;E<9;E++)p.push(l.a.createElement(y,{key:E}));return l.a.createElement(c.a,{className:t.card,elevation:6},r===N.a.all&&l.a.createElement(l.a.Fragment,null,n?l.a.createElement("div",null,p):l.a.createElement(s.a,{disablePadding:!0},m)),r===N.a.deleted&&l.a.createElement(l.a.Fragment,null,0===i.length?l.a.createElement("div",{className:t.emptyDialogs},l.a.createElement(d.a,{variant:"subtitle1",color:"primary"},"There are no deleted dialogs")):l.a.createElement(s.a,{disablePadding:!0},u)),r===N.a.spam&&l.a.createElement(l.a.Fragment,null,0===o.length?l.a.createElement("div",{className:t.emptyDialogs},l.a.createElement(d.a,{variant:"subtitle1",color:"primary"},"There are no spam dialogs")):l.a.createElement(s.a,{disablePadding:!0},g)))},I=Object(r.a)({card:{},avatar:{marginRight:10},btnWrapper:{marginBottom:10},skeletonWrapper:{padding:"0 16px",height:72,display:"flex",alignItems:"center"},emptyDialogs:{padding:"8px 16px"}}),k=t(685),C=t(316),S=t(315),w=t(661),F=t.n(w),R=t(78),W=t(657),D=t.n(W),M=t(663),B=t.n(M),T=t(662),P=t(686),z=function(e){var a,t=e.currentDialog,n=e.userId,r=A(),c=Object(b.d)(O.l),s=Object(b.d)(O.k),i=Object(b.d)(O.c),o=Object(b.d)(O.e),u=Object(b.d)(O.b),g=Object(b.d)(O.a),E=!o&&t?"/users/".concat(t.id):"#",f=n&&u.find((function(e){return+e.dialog.id===+n})),v=f&&f.dialog;g===N.a.all?a=t&&t.photos.small?t.photos.small:void 0:g===N.a.deleted&&(a=v&&v.photos.small?v.photos.small:void 0);var h=Object(b.c)(),y=function(){g===N.a.all?h(R.c.cleanSelectedMessages()):g===N.a.deleted&&h(R.c.cleanSelectedDeletedMessages())};return l.a.createElement("div",{className:r.headerWrapper},g===N.a.all&&l.a.createElement(l.a.Fragment,null,i?l.a.createElement(k.a,{component:"div",className:r.header},l.a.createElement(j.a,{variant:"circle",width:40,height:40,className:r.avatar}),l.a.createElement(j.a,{variant:"rect",width:200,height:25})):l.a.createElement(k.a,{component:"div",className:r.header},t?l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{src:a,className:r.avatar}),l.a.createElement(C.a,{component:m.b,className:r.link,to:E,variant:"subtitle2"},t.userName),0!==c.length&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:r.messagesCount},l.a.createElement(d.a,{variant:"body2",color:"textPrimary"},c.length," messages"),l.a.createElement(S.a,{onClick:y,className:r.iconClean,disabled:o},l.a.createElement(F.a,null))),l.a.createElement("div",{className:r.iconButtonWrapper},l.a.createElement(T.a,{title:"Delete",TransitionComponent:P.a,arrow:!0},l.a.createElement(S.a,{onClick:function(){n&&t&&h(Object(R.b)(c,t))},className:r.iconClean,disabled:o},l.a.createElement(D.a,null)))))):l.a.createElement(d.a,{variant:"subtitle1",color:"primary"},"Select a dialog"))),g===N.a.deleted&&l.a.createElement(k.a,{component:"div",className:r.header},n&&v?l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{src:a,className:r.avatar}),l.a.createElement(C.a,{component:m.b,className:r.link,to:E,variant:"subtitle2"},v.userName),0!==s.length&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:r.messagesCount},l.a.createElement(d.a,{variant:"body2",color:"textPrimary"},s.length," messages"),l.a.createElement(S.a,{onClick:y,className:r.iconClean,disabled:o},l.a.createElement(F.a,null))),l.a.createElement("div",{className:r.iconButtonWrapper},l.a.createElement(T.a,{title:"Restore",TransitionComponent:P.a,arrow:!0},l.a.createElement(S.a,{onClick:function(){n&&t&&h(Object(R.f)(s))},className:r.iconClean,disabled:o},l.a.createElement(B.a,null)))))):l.a.createElement(d.a,{variant:"subtitle1",color:"primary"},"Select deleted dialog")))},A=Object(r.a)({avatar:{marginRight:10},header:{display:"flex",alignItems:"center",height:50},headerWrapper:{padding:5,borderBottom:"1px solid #ccc"},link:{marginRight:15},messagesCount:{display:"flex",alignItems:"center",marginRight:30},iconClean:{padding:5},iconButtonWrapper:{marginRight:10}}),G=t(35),L=t(666),J=t.n(L),H=t(91),q=t(212),K=t(665),Q=t.n(K),U=t(664),V=t.n(U),X=t(687),Y=t(63),Z=function(e){var a,t=e.message,r=e.src,c=$(),s=Object(n.useState)(!1),o=Object(G.a)(s,2),u=o[0],g=o[1],f=Object(b.d)(H.b),v=Object(b.d)(q.h),h=Object(b.d)(O.l),j=Object(b.d)(O.k),y=Object(b.d)(O.g),x=Object(b.d)(O.a),I=Object(b.c)();a=x===N.a.all?!!h.find((function(e){return e.id===t.id})):x===N.a.deleted&&!!j.find((function(e){return e.id===t.id}));var k=v?t.senderId===f?v.photos.small:r:void 0,S=t.senderId===f?"/profile":"/users/".concat(t.senderId),w=t.senderId===f?l.a.createElement(V.a,null):l.a.createElement(Q.a,null);return l.a.createElement("div",{className:c.listItemWrapper},l.a.createElement(i.a,{button:!0,onClick:function(){x===N.a.all?I(a?R.c.removeFromSelectedMessages(t):R.c.addToSelectedMessages(t)):x===N.a.deleted&&I(a?R.c.removeFromSelectedDeletedMessages(t):R.c.addToSelectedDeletedMessages(t))},selected:a,className:c.listItem,classes:{selected:c.selected},onMouseEnter:function(){g(!0)},onMouseLeave:function(){g(!1)}},(u&&!a||a)&&l.a.createElement(J.a,{className:c.checkedIcon,color:a?"inherit":"disabled",fontSize:"small"}),l.a.createElement(p.a,{src:k,className:c.avatar}),l.a.createElement("div",{className:c.messageBlock},l.a.createElement("div",{className:c.title},l.a.createElement(C.a,{component:m.b,className:c.link,to:S,variant:"subtitle2"},t.senderName),l.a.createElement(d.a,{variant:"subtitle2",color:"textSecondary"},E.a.dateTranslateFromAPI(t.addedAt))),l.a.createElement("div",null,t.body)),l.a.createElement(X.a,{className:c.icon},w)),y&&h.find((function(e){return e.id===t.id}))&&l.a.createElement(Y.a,{size:50,style:"absolute"}))},$=Object(r.a)({listItemWrapper:{position:"relative"},listItem:{boxSizing:"border-box",margin:"2px 0px",padding:8,paddingLeft:40,position:"relative",display:"flex",alignItems:"flex-start"},checkedIcon:{position:"absolute",top:"50%",left:5,transform:"translate(0, -50%)"},selected:{backgroundColor:"red"},avatar:{marginRight:10},title:{display:"flex"},link:{marginRight:10},messageBlock:{flexGrow:1},icon:{marginRight:10}}),_=function(e){var a=e.messages,t=e.src,r=e.userId,c=ee(),s=Object(b.d)(O.h),i=Object(b.d)(O.f),o=Object(b.d)(O.g),m=Object(b.d)(O.b),d=Object(b.d)(O.a),u=Object(b.c)();Object(n.useEffect)((function(){u(R.c.cleanSelectedMessages())}),[r]);var g=a&&a.map((function(e){return l.a.createElement(Z,{key:e.id,message:e,src:t})})),p=!!r&&m.find((function(e){return e.dialog.id===+r})),E=p&&p.messages.map((function(e){return l.a.createElement(Z,{key:e.id,message:e,src:t})}));return l.a.createElement(l.a.Fragment,null,d===N.a.all&&l.a.createElement(l.a.Fragment,null,o&&l.a.createElement(l.a.Fragment,null,g),i&&l.a.createElement(l.a.Fragment,null,a?l.a.createElement(l.a.Fragment,null,g):null),s&&l.a.createElement("div",{className:c.circularPreloaderWrapper},l.a.createElement(Y.a,{size:36})),!s&&!i&&!o&&l.a.createElement(l.a.Fragment,null,a?l.a.createElement(l.a.Fragment,null,g):null)),d===N.a.deleted&&p&&l.a.createElement(l.a.Fragment,null,E))},ee=Object(r.a)({circularPreloaderWrapper:{margin:"10px 0"},emptyMessages:{padding:"8px 16px"}}),ae=t(151),te=t.n(ae),ne=t(220),le=t(45),re=t(202),ce=t(44),se=t(203),ie=t(323),oe=t.n(ie),me=Object(se.a)({form:"send-message-from-dialog",onSubmitSuccess:function(e,a){a(Object(ce.a)("send-message-from-dialog"))}})((function(e){var a=e.handleSubmit,t=e.submitting,n=e.pristine,r=e.loading,c=e.messageIsSending,s=ge(),i=ue(),o=c?"message is sent...":"Enter your message";return l.a.createElement("form",{onSubmit:a,className:s.form},l.a.createElement("div",{className:s.fieldWrapper},l.a.createElement(re.a,{name:"message",component:ne.a,validate:[le.d],autoFocus:!0,rows:1,className:s.textArea,classes:i,label:o,placeholder:"Enter your message",size:"small"})),l.a.createElement(S.a,{type:"submit",color:"primary",disabled:t||n||r},l.a.createElement(te.a,null)))})),de=function(e){var a=e.id,t=ge(),n=Object(b.d)(O.f),r=Object(b.d)(O.e),c=Object(b.c)();return l.a.createElement("div",{className:t.formWrapper},l.a.createElement(me,{onSubmit:function(e){a&&c(Object(R.g)(a,e.message))},messageIsSending:n,loading:r}))},ue=Object(r.a)({root:{backgroundColor:"white",width:"100%"}}),ge=Object(r.a)({formWrapper:{backgroundColor:oe.a[100],padding:10},form:{display:"flex",alignItems:"center"},fieldWrapper:{flexGrow:1,marginRight:5},textArea:{width:"100%"}}),pe=function(e){var a=e.currentDialog,t=e.userId,n=be(),r=Object(b.d)(O.i),i=Object(b.d)(O.a),o=Object(b.d)(O.b),m=null!==a?a.photos.small:void 0;return l.a.createElement(c.a,{className:n.card,elevation:6},i===N.a.all||i===N.a.deleted&&o.length?l.a.createElement(s.a,{disablePadding:!0,subheader:l.a.createElement(z,{currentDialog:a,userId:t})},l.a.createElement(_,{messages:r,src:m,userId:t})):l.a.createElement("div",{className:n.emptyMessages},l.a.createElement(d.a,{variant:"subtitle1",color:"primary"},"There ara no deleted messages")),i===N.a.all&&t&&l.a.createElement(de,{id:t}))},be=Object(r.a)({card:{},btnWrapper:{marginBottom:10},skeleton:{borderRadius:4},emptyMessages:{padding:"8px 16px"}}),Ee=t(150),fe=t(102),ve=t(650),he=t(43),je=t.n(he),Oe=t(649),Ne=t(269),ye=t.n(Ne),xe=function(){var e=Ie(),a=Object(b.d)(O.a),t=Object(b.d)(O.e),n=Object(b.c)();return l.a.createElement(c.a,{className:e.card,elevation:6},l.a.createElement(ve.a,{classes:{indicator:e.indicator},orientation:"vertical",value:a,onChange:function(e,a){n(R.c.setCurrentDialogsSidebarItem(a))},className:e.tabs},l.a.createElement(Oe.a,{label:"All",component:m.b,to:"/dialogs",disabled:t,icon:l.a.createElement(ye.a,{className:e.icon}),classes:{wrapper:e.wrapper,selected:e.selected,root:e.tabRoot,labelIcon:e.labelIcon}}),l.a.createElement(Oe.a,{label:"Deleted",component:m.b,to:"/dialogs",disabled:t,icon:l.a.createElement(D.a,{className:e.icon}),classes:{wrapper:e.wrapper,selected:e.selected,root:e.tabRoot,labelIcon:e.labelIcon}})))},Ie=Object(r.a)({card:{padding:5},tabs:{borderLeft:"3px solid #ccc"},indicator:{width:2,left:0,right:"auto"},wrapper:{flexDirection:"row",justifyContent:"flex-start",textTransform:"none","& > *:first-child":{marginBottom:"0!important"}},icon:{margin:"0 10px"},selected:{color:je.a[500],backgroundColor:"#eee"},tabRoot:{padding:0,minWidth:0},labelIcon:{minHeight:50}}),ke=(a.default=Object(fe.a)((function(){var e=ke(),a=Object(b.c)(),t=Object(b.d)(Ee.b),r=Object(b.d)(O.d),c=Object(o.h)().userId;Object(n.useEffect)((function(){a(Object(R.d)())}),[]),Object(n.useEffect)((function(){return c&&a(Object(R.e)(c)),function(){a(R.c.setMessages(null))}}),[c]);var s=r&&c?r.find((function(e){return e.id===+c})):null;return l.a.createElement(l.a.Fragment,null,(!t||r)&&l.a.createElement("div",{className:e.root},l.a.createElement("div",{className:e.firstColumn},l.a.createElement(x,{dialogs:r})),l.a.createElement("div",{className:e.secondColumn},l.a.createElement(pe,{currentDialog:s,userId:c})),l.a.createElement("div",{className:e.lastColumn},l.a.createElement(xe,null))))})),Object(r.a)({root:{display:"flex"},firstColumn:{flexBasis:230,flexShrink:0,marginRight:10},secondColumn:{flexGrow:1,marginRight:10},lastColumn:{flexBasis:120,flexShrink:0}}))}}]);
//# sourceMappingURL=5.d2d8b54b.chunk.js.map