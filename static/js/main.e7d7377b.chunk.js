(this.webpackJsonpmynearbyplaces=this.webpackJsonpmynearbyplaces||[]).push([[0],{29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s.n(n),r=s(22),i=s.n(r),l=(s(29),s(11)),o=s(2),h=s(13),d=s(7),j=s(8),b=s(10),u=s(9),p=(s(30),[{name:"place1",address:"1234 N water road",type:"restaurant",reviews:[{stars:5,comment:"nice place"},{stars:2,comment:"will not come again"}]},{name:"place 3",address:"3840 E happy ave",type:"shopping mall",reviews:[{stars:1,comment:"too many people"},{stars:4,comment:"have bought what I wanted"}]},{name:"place 8",address:"0778 W DonXi highway",type:"dry cleaning",reviews:[{stars:0,comment:"every dirty"}]},{name:"place 28",address:"012394 unknown place",type:"barber",reviews:[{stars:5,comment:"nice person!"}]},{name:"place 167",address:"wherever",type:"grocery",reviews:[{stars:4,comment:"have everything I needed"},{stars:1,comment:"the vege is not fresh"}]}]),m={fetchPlaces:function(){return p}},v=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){var e=this.props.review;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:["Stars: ",e.stars]}),Object(a.jsxs)("div",{children:["Comment: ",e.comment]}),Object(a.jsx)("br",{})]})})}}]),s}(c.a.Component),O=(s(31),function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).fillReviews=function(e){a.setState({reviews:e})},a.showOrCollapseReviews=function(){a.state.showReview?a.setState({showReview:!1}):a.setState({showReview:!0})},a.state={showReview:!1,reviews:[]},a}return Object(j.a)(s,[{key:"render",value:function(){var e=this.props.place,t={pathname:"/addReview",state:{place:e}};return Object(a.jsxs)("div",{class:"places-container",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:["Name: ",e.name]}),Object(a.jsxs)("div",{children:["Address: ",e.address]}),Object(a.jsxs)("div",{children:["Type: ",e.type]})]}),this.state.showReview?Object(a.jsxs)("p",{onClick:this.showOrCollapseReviews,children:["reviews: ",Object(a.jsx)("i",{class:"down"})]}):Object(a.jsxs)("p",{onClick:this.showOrCollapseReviews,children:["reviews: ",Object(a.jsx)("i",{class:"right"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:this.state.showReview?e.reviews.map((function(e){return Object(a.jsx)(v,{review:e})})):""}),Object(a.jsx)(l.b,{to:t,children:Object(a.jsx)("button",{children:"Add Review"})})]})}}]),s}(c.a.Component)),x=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=e.target.value,s=e.target.name;c.setState(Object(h.a)({},s,t))},c.clickSearch=function(){console.log("click"),console.log(c.state.keywords);for(var e=s(21),t=c.state,a=t.keywords,n=t.places,r=a.split(" "),i=[],l=0;l<a.length;l++)for(var o=r[l],h=function(t){var s=n[t],a=s.name,c=s.address,r=s.type;(a.includes(o)||c.includes(o)||r.includes(o))&&!1===i.some((function(t){return e.isEqual(t,s)}))&&i.push(s)},d=0;d<n.length;d++)h(d);console.log(i),c.setState({results:i})},c.body=function(){var e=c.state.results;return Object(a.jsx)("div",{class:"results-container",children:e.length>0?e.map((function(e){return Object(a.jsx)(O,{place:e})})):"no results"})},c.updatePlaces=function(){var e=c.props.location;if(e&&e.state){var t=c.state.places;if(e.stars)for(var a={stars:e.stars,comment:e.comment},n=0;n<c.state.places.length;n++){var r=c.state.places[n];s(21).isEqual(r,e.state.place)&&(t.splice(n,1),r.reviews.push(a),t.push(r)),c.setState({places:t})}else t.push(e.state.place),c.setState({places:t})}},c.state={places:[],keywords:"",results:[]},c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){if(0===this.state.places.length){var e=m.fetchPlaces();this.setState({places:e}),console.log(e)}}},{key:"render",value:function(){var e=this.props.location;return Object(a.jsxs)("div",{class:"main",children:[e?this.updatePlaces:"",Object(a.jsx)("h1",{class:"homepage-title",children:"MyNearbyPlaces"}),Object(a.jsxs)("div",{class:"search-field",children:[Object(a.jsxs)("div",{class:"input-wrapper",children:[Object(a.jsx)("span",{children:"Find"}),Object(a.jsx)("input",{class:"input",maxLength:"64",placeholder:"find my nearby places",name:"keywords",value:this.state.keywords,onChange:this.handleChange}),Object(a.jsx)("button",{onClick:this.clickSearch,children:"Search"})]}),Object(a.jsx)(l.b,{to:"/addplace",children:Object(a.jsx)("button",{children:"Add Place"})})]}),this.body()]})}}]),n}(c.a.Component),y=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).handleChange=function(e){var t=e.target.value,s=e.target.name;a.setState(Object(h.a)({},s,t))},a.submitReview=function(e){a.setState({submitted:!0});var t=a.state,s=t.stars,n=t.comment;console.log("stars: "+s),console.log("comment: "+n),e.preventDefault()},a.state={stars:"",comment:"",submitted:!1},a}return Object(j.a)(s,[{key:"render",value:function(){var e={pathname:"/mynearbyplaces",state:{stars:this.state.stars,comment:this.state.comment,place:{}}},t=this.props.location;return t&&t.state&&t.state.place&&(e.state.place=t.state.place),this.state.submitted?Object(a.jsx)(o.a,{to:e}):Object(a.jsxs)("form",{onSubmit:this.submitReview,children:[Object(a.jsx)("label",{children:"Stars: "}),Object(a.jsx)("input",{type:"text",name:"stars",value:this.state.stars,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Comment: "}),Object(a.jsx)("input",{type:"text",name:"comment",value:this.state.comment,onChange:this.handleChange}),Object(a.jsx)("button",{type:"submit",children:"submit"})]})}}]),s}(c.a.Component),f=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).handleChange=function(e){var t=e.target.value,s=e.target.name;a.setState(Object(h.a)({},s,t))},a.submitPlace=function(e){a.setState({submitted:!0});var t=a.state,s=t.name,n=t.type,c=t.address;console.log("name: "+s),console.log("type: "+n),console.log("address: "+c),e.preventDefault()},a.state={name:"",type:"",address:"",submitted:!1},a}return Object(j.a)(s,[{key:"render",value:function(){var e=this.state,t={pathname:"/mynearbyplaces",state:{place:{name:e.name,type:e.type,address:e.address,reviews:[]}}};return this.state.submitted?Object(a.jsx)(o.a,{to:t}):Object(a.jsxs)("form",{onSubmit:this.submitPlace,children:[Object(a.jsx)("label",{children:"Name: "}),Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Type: "}),Object(a.jsx)("input",{type:"text",name:"type",value:this.state.type,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Address: "}),Object(a.jsx)("input",{type:"text",name:"address",value:this.state.address,onChange:this.handleChange}),Object(a.jsx)("button",{type:"submit",children:"submit"})]})}}]),s}(c.a.Component);var w=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{path:"/mynearbyplaces",component:x}),Object(a.jsx)(o.b,{path:"/addreview",component:y}),Object(a.jsx)(o.b,{path:"/addplace",component:f})]})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),g()}},[[37,1,2]]]);
//# sourceMappingURL=main.e7d7377b.chunk.js.map