(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["creditos","chunk-515a8379"],{"0095":function(t,e,s){"use strict";s("95c5")},"13aa":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid banner-interno"},[s("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),s("div",{staticClass:"container"},[s("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?s("div",{staticClass:"banner-interno__titulo__icono me-3"},[s("i",{class:t.icono})]):t._e(),s("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},r=[],n={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},o=n,i=(s("0095"),s("2877")),c=Object(i["a"])(o,a,r,!1,null,null,null);e["default"]=c.exports},"159b":function(t,e,s){var a=s("da84"),r=s("fdbc"),n=s("17c2"),o=s("9112");for(var i in r){var c=a[i],l=c&&c.prototype;if(l&&l.forEach!==n)try{o(l,"forEach",n)}catch(d){l.forEach=n}}},"17c2":function(t,e,s){"use strict";var a=s("b727").forEach,r=s("a640"),n=r("forEach");t.exports=n?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"2e81":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"curso-main-container creditos-vista"},[s("BannerInterno",{attrs:{icono:"far fa-registered",titulo:"Créditos"}}),s("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[s("div",{staticClass:"creditos mb-4 mb-md-5"},t._l(Object.keys(t.creditosData),(function(e,a){return s("div",{staticClass:"creditos__item",class:a!=Object.keys(t.creditosData).length-1?"mb-4":""},[s("div",{staticClass:"creditos__titulo"},[t._v(t._s(t.configTitulos[e]))]),s("table",[s("tbody",t._l(t.creditosData[e],(function(a,r){return s("tr",{key:e+r},[s("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(a.nombre))}}),s("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(a.cargo))}}),s("td",{attrs:{colspan:"3"},domProps:{innerHTML:t._s(t.renderText(a.centro))}})])})),0)])])})),0),t._m(0),s("Footer",{attrs:{"all-round":""}})],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mb-4 mb-md-5"},[a("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[a("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[a("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:s("ef52")}}),a("p",[t._v("Fotografías y vectores tomados de "),a("a",{attrs:{href:"https://www.freepik.es/",target:"_blank"}},[t._v("www.freepik.es")]),t._v(", "),a("a",{attrs:{href:"https://www.shutterstock.com/",target:"_blank"}},[t._v("www.shutterstock.com")]),t._v(", "),a("a",{attrs:{href:"https://unsplash.com/",target:"_blank"}},[t._v("unsplash.com ")]),t._v("y "),a("a",{attrs:{href:"https://www.flaticon.com/",target:"_blank"}},[t._v("www.flaticon.com")])])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[a("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:s("e1f5")}}),a("p",{staticClass:"mb-0"},[t._v("Licencia creative commons CC BY-NC-SA"),a("br"),a("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/2.0/",target:"_blank"}},[t._v("ver licencia")])])])])])}],n=(s("159b"),s("13aa")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[t.allRound&&"footer__all-round"]},[s("div",{staticClass:"row align-items-center justify-content-center"},[t._m(0),s("div",{staticClass:"col-12 col-sm"},[s("p",{staticClass:"mb-2 text-small"},[t._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),s("p",{staticClass:"mb-0 text-small"},[t._v(" Base v"+t._s(t.versiones.base)+" - Paquete v"+t._s(t.versiones.pkg))])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-auto mb-2 mb-sm-0"},[a("img",{attrs:{src:s("52e5")}})])}],c={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},l=c,d=(s("7812"),s("2877")),u=Object(d["a"])(l,o,i,!1,null,null,null),f=u.exports,m={name:"Creditos",components:{BannerInterno:n["default"],Footer:f},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos}},methods:{renderText:function(t){var e="";return Array.isArray(t)?t.forEach((function(t,s){e+=(s?"<br/>":"")+t})):e+=t,e}}},p=m,b=(s("5d8e"),Object(d["a"])(p,a,r,!1,null,null,null));e["default"]=b.exports},"3dd3":function(t,e,s){},"5d8e":function(t,e,s){"use strict";s("f728")},7812:function(t,e,s){"use strict";s("3dd3")},"95c5":function(t,e,s){},e1f5:function(t,e,s){t.exports=s.p+"img/creditos-cc.4836eb56.svg"},ef52:function(t,e,s){t.exports=s.p+"img/creditos-img.689712e2.svg"},f728:function(t,e,s){}}]);
//# sourceMappingURL=creditos.0b9e2f63.js.map