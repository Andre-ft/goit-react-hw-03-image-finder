(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={"App-header":"App_App-header__d1bS1","App-link":"App_App-link__2Jbp8",App:"App_App__2r53v"}},11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1hKgz"}},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),o=a.n(c),s=(a(16),a(2)),i=a(3),u=a(5),l=a(4),h=a(10),p=a.n(h),b=a(8),m=a(6),d=a.n(m),j=a(1),y=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleQueryChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.setState({query:""})):b.b.error("Input query.")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:d.a.Searchbar,children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.SearchForm,children:[Object(j.jsx)("button",{type:"submit",className:d.a.SearchForm_button,children:Object(j.jsx)("span",{className:d.a.SearchForm_button_label,children:"Search"})}),Object(j.jsx)("input",{className:d.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleQueryChange})]})})}}]),a}(r.Component),f=y;a(18);var _={fetchGallery:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("23458770-c93bd78e83fb2002196f13d31","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 ".concat(t)))}))}},g=a(11),S=a.n(g),v="idle",O="pending",x="resolved",q="rejected",F=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={gallery:null,error:null,status:v,pageNumber:1},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=e.query,n=this.props.query,c=this.state.pageNumber;r!==n&&(this.setState({status:O}),setTimeout((function(){_.fetchGallery(n,c).then((function(e){a.setState({gallery:e.hits,status:x}),console.log("inside fetch",e.hits)})).catch((function(e){return a.setState({error:e,status:q})}))}),1500))}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.status;return"idle"===a?Object(j.jsx)("div",{children:"Input query."}):"pending"===a?Object(j.jsx)("div",{children:"PENDING"}):"resolved"===a?Object(j.jsx)("ul",{className:S.a.ImageGallery,children:t.map((function(e){return Object(j.jsx)("li",{className:"gallery-item",children:Object(j.jsx)("img",{src:e.webformatURL,alt:""})},e.id)}))}):void 0}}]),a}(r.Component),A=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={query:"",page:1,gallery:[]},e.handleFormSubmit=function(t){e.setState({query:t})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log("inside render",this.state.gallery),Object(j.jsxs)("div",{className:p.a.App,style:{maxWidth:1170,margin:"0 auto",padding:20},children:[Object(j.jsx)(f,{onSubmit:this.handleFormSubmit}),Object(j.jsx)(F,{query:this.state.query}),Object(j.jsx)(b.a,{autoClose:3e3})]})}}]),a}(r.Component),k=A;o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2krjG",SearchForm:"Searchbar_SearchForm__12ogt",SearchForm_button:"Searchbar_SearchForm_button__2fCU5",SearchForm_button_label:"Searchbar_SearchForm_button_label__1g5IX",SearchForm_input:"Searchbar_SearchForm_input__36bE7"}}},[[19,1,2]]]);
//# sourceMappingURL=main.a291a6d9.chunk.js.map