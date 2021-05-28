(this["webpackJsonpapp-iris-ml-react-fastapi"]=this["webpackJsonpapp-iris-ml-react-fastapi"]||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(25),i=a.n(c),r=(a(55),a(16)),s=(a(56),a(102)),l=a(103),o=a(104),j=a(105),d=a(100),p=a(2),h=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),b=function(){var e=h();return Object(p.jsx)(s.a,{maxWidth:"xl",className:e.root,children:Object(p.jsx)(l.a,{position:"static",children:Object(p.jsx)(o.a,{children:Object(p.jsx)(j.a,{variant:"h4",className:e.title,align:"left",children:"Predicting Iris Species with Machine Learning"})})})})},u=a(20),m=a(109),g=a(110),x=a(107),f={logreg:"Logistic Regression",knn:"K-Nearest Neighbor",rf:"Random Forest",gbm:"Gradient Boosting"},O={sepalLengthCm:"Sepal Length (cm)",sepalWidthCm:"Sepal Width (cm)",petalLengthCm:"Petal Length (cm)",petalWidthCm:"Petal Width (cm)"},v=Object(d.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),C=function(e){var t=e.state,a=e.setState,n=v();return Object(p.jsx)(s.a,{maxWidth:"xl",children:Object(p.jsxs)(m.a,{fullWidth:!0,className:n.formControl,children:[Object(p.jsx)(g.a,{htmlFor:"age-native-simple",children:"Model Type"}),Object(p.jsxs)(x.a,{value:t.modelType,inputProps:{name:"modelType"},onChange:function(e){a(Object(u.a)(Object(u.a)({},t),{},{modelType:e.target.value}))},children:[Object(p.jsx)("option",{value:"logreg",children:f.logreg}),Object(p.jsx)("option",{value:"knn",children:f.knn}),Object(p.jsx)("option",{value:"rf",children:f.rf}),Object(p.jsx)("option",{value:"gbm",children:f.gbm})]})]})})},w=function(e){var t=e.state;return Object(p.jsx)(s.a,{maxWidth:"xl",children:Object(p.jsxs)(j.a,{variant:"h5",align:"left",children:["Currently predicting using ",f[t.modelType]]})})},y=a(106),L=a(82),S=a(28),W=a(5),N=a(108),k=Object(W.a)({root:{color:"#52af77",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(N.a),F=function(e){var t=e.state,a=e.setState,n=e.fieldName;return Object(p.jsxs)("div",{children:[Object(p.jsx)(j.a,{align:"left",gutterBottom:!0,children:O[n]}),Object(p.jsx)(k,{valueLabelDisplay:"auto","aria-label":"pretto slider",defaultValue:5,min:.1,max:10,step:.1,onChange:function(e,c){a(Object(u.a)(Object(u.a)({},t),{},Object(S.a)({},n,c)))}})]})},T=Object(d.a)((function(e){return{root:{width:300+2*e.spacing(3)},margin:{height:e.spacing(3)}}})),_=function(e){var t=e.state,a=e.setState,n=T();return Object(p.jsx)(s.a,{className:n.root,maxWidth:"xl",children:Object.entries(O).map((function(e,n){var c=Object(r.a)(e,1)[0];return Object(p.jsx)("div",{children:Object(p.jsx)(F,{state:t,setState:a,fieldName:c})},"slider".concat(n))}))})},P=a(32),B=a.n(P),G=a(47),R=a(48),A=a.n(R),E=function(e){var t=e.state,a=Object(n.useState)({predictedClass:"",probabilities:{"":0}}),c=Object(r.a)(a,2),i=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(G.a)(B.a.mark((function e(){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("/api/predict",{model_type:t.modelType,sepal_length_cm:t.sepalLengthCm,sepal_width_cm:t.sepalWidthCm,petal_length_cm:t.petalLengthCm,petal_width_cm:t.petalWidthCm});case 2:a=e.sent,n=a.data,l(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(p.jsxs)(s.a,{maxWidth:"xl",children:[Object(p.jsxs)(j.a,{align:"left",children:["Most likely class: ",i.predictedClass]}),Object(p.jsx)(j.a,{align:"left",children:"Probabilities:"}),Object(p.jsx)(j.a,{align:"left",children:Object.entries(i.probabilities).map((function(e,t){var a=Object(r.a)(e,2),n=a[0],c=a[1];return Object(p.jsxs)("div",{children:[n,": ",c.toFixed(3)]},"predict".concat(t))}))})]})},I=Object(d.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),M=function(e){var t=e.state,a=e.setState,n=I();return Object(p.jsx)(s.a,{className:n.root,children:Object(p.jsxs)(y.a,{container:!0,spacing:3,children:[Object(p.jsx)(y.a,{item:!0,xs:8,children:Object(p.jsx)(L.a,{className:n.paper,children:Object(p.jsx)(_,{state:t,setState:a})})}),Object(p.jsx)(y.a,{item:!0,xs:4,children:Object(p.jsx)(L.a,{className:n.paper,children:Object(p.jsx)(E,{state:t})})})]})})},D=Object(d.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary}}})),J=function(){var e=D();return Object(p.jsx)(s.a,{className:e.root,children:Object(p.jsxs)(L.a,{className:e.paper,children:["Favicon made by ",Object(p.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(p.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})})};var K=function(){var e=Object(n.useState)({modelType:"logreg",sepalLengthCm:5,sepalWidthCm:5,petalLengthCm:5,petalWidthCm:5}),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{}),Object(p.jsx)(w,{state:a}),Object(p.jsx)(C,{state:a,setState:c}),Object(p.jsx)(M,{state:a,setState:c}),Object(p.jsx)(J,{})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};i.a.render(Object(p.jsx)(K,{}),document.getElementById("root")),V()}},[[81,1,2]]]);
//# sourceMappingURL=main.f378a3e0.chunk.js.map