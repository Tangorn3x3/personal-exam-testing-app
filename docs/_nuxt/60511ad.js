(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{550:function(t,e,n){var content=n(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("7bf232e7",content,!0,{sourceMap:!1})},554:function(t,e,n){var content=n(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("e7d20886",content,!0,{sourceMap:!1})},560:function(t,e,n){"use strict";n(550)},561:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".code[data-v-1bb19468]{font-family:monospace;font-size:1rem;line-height:normal;white-space:pre-wrap}.code.dense[data-v-1bb19468]{font-size:.8rem}.code.larger-1[data-v-1bb19468]{font-size:1.1rem}.code.larger-2[data-v-1bb19468]{font-size:1.2rem}.code.larger-3[data-v-1bb19468]{font-size:1.3rem}.code.larger-4[data-v-1bb19468]{font-size:1.4rem}.code.normal-text[data-v-1bb19468]{font-family:inherit}.quest-image[data-v-1bb19468]{height:auto;width:100%}",""]),r.locals={},t.exports=r},569:function(t,e,n){"use strict";n(554)},570:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},581:function(t,e,n){"use strict";n.r(e);var r=n(529),o=n(584),c=n(148),l=n(557),f=n(542),d=n(113),m=n(556),h=(n(10),n(9),n(7),n(12),n(13),n(6)),v=n(3),y=(n(29),n(27)),w=n(131),_=n(20);n(546),n(48),n(22),n(44),n(21),n(41),n(31),n(25),n(49);function x(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var Q=new Map([[". Option",".\n\nOption"],[". Line",".\n\nLine"]]),k={name:"AttemptContent",props:{content:{type:Object,required:!0},dense:{type:Boolean,default:!1},normalText:{type:Boolean,default:!1},reformatText:{type:Boolean,default:!1},enlarge:{type:Number,default:0}},data:function(){return{loaded:!1}},computed:{ContentType:function(){return w.a},textClass:function(){var t={dense:this.dense,"normal-text":this.normalText};return this.enlarge&&(t["larger-".concat(this.enlarge)]=!0),t},finalText:function(){if(!this.content.text)return null;if(!this.reformatText)return this.content.text;var t,text=this.content.text,e=x(Q);try{for(e.s();!(t=e.n()).done;){var n=Object(_.a)(t.value,2),r=n[0],o=n[1];text=text.replaceAll(r,o)}}catch(t){e.e(t)}finally{e.f()}return text=text.replace(/([^.\n])\n([^A-ZА-Я])/g,"$1 $2")}},methods:{}},C=(n(560),n(36)),O=Object(C.a)(k,(function(){var t=this,e=t._self._c;return e("div",[t.content.type===t.ContentType.TEXT?e("div",{staticClass:"code pl-4 pr-4",class:t.textClass},[t.reformatText?e("p",[t._v(t._s(t.finalText))]):e("span",[t._v(t._s(t.finalText))])]):t._e(),t._v(" "),t.content.type===t.ContentType.IMAGE?e("div",[t.loaded?t._e():e("h4",[t._v("Loading image...")]),t._v(" "),e("img",{staticClass:"quest-image",attrs:{src:t.content.image,alt:"Загрузка изображения"},on:{load:function(e){t.loaded=!0}}})]):t._e()])}),[],!1,null,"1bb19468",null).exports,j={name:"AttemptQuestionDisplay",components:{AttemptContent:O},props:{contents:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{ContentType:function(){return w.a}}},T=Object(C.a)(j,(function(){var t=this,e=t._self._c;return e("div",t._l(t.contents,(function(content,i){return e("attempt-content",{key:content.hashCode,attrs:{content:content}})})),1)}),[],!1,null,"75688603",null).exports,S=n(579),P=n(578),M=n(577),E=n(231),I={name:"AttemptOptionsList",components:{AttemptContent:O},props:{question:{type:Object,required:!0},options:{type:Array,default:function(){return[]}},answers:{type:Array,default:function(){return[]}}},computed:{ContentType:function(){return w.a},ExamQuestionSelectType:function(){return E.a},checkboxModel:{get:function(){return this.answers},set:function(t){this.$emit("change",t)}},radioModel:{get:function(){return this.answers&&this.answers.length>0?this.answers[0]:null},set:function(t){this.$emit("change",t)}}},methods:{onRadioChanged:function(t){},onCheckboxChanged:function(t){},onContext:function(t){console.log("onContext",t)}}},D=Object(C.a)(I,(function(){var t=this,e=t._self._c;return e("div",[t.question.selectType===t.ExamQuestionSelectType.SINGLE?e(M.a,{model:{value:t.radioModel,callback:function(e){t.radioModel=e},expression:"radioModel"}},t._l(t.options,(function(option){return e(P.a,{key:option.key,attrs:{value:option.key},on:{change:t.onRadioChanged},scopedSlots:t._u([{key:"label",fn:function(){return[e("h5",[t._v(t._s(option.key)+".")]),t._v(" "),t._l(option.contents,(function(content){return e("attempt-content",{key:content.key,attrs:{content:content,enlarge:1}})}))]},proxy:!0}],null,!0)})})),1):t._e(),t._v(" "),t.question.selectType===t.ExamQuestionSelectType.MULTI?e("div",t._l(t.options,(function(option){return e(S.a,{key:option.key,attrs:{value:option.key,dense:"","hide-details":""},on:{change:t.onCheckboxChanged,contextmenu:t.onContext},scopedSlots:t._u([{key:"label",fn:function(){return[e("h5",[t._v(t._s(option.key)+".")]),t._v(" "),t._l(option.contents,(function(content){return e("attempt-content",{key:content.key,attrs:{content:content,enlarge:1}})}))]},proxy:!0}],null,!0),model:{value:t.checkboxModel,callback:function(e){t.checkboxModel=e},expression:"checkboxModel"}})})),1):t._e()],1)}),[],!1,null,"11921fcc",null).exports,z=n(4),$=n(88),L=n(149),N=n(40);function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){Object(v.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var B={name:"TakeAttempt",components:{AttemptContent:O,AttemptOptionsList:D,AttemptQuestionDisplay:T},data:function(){return{loadingItems:!1,answerVisible:!1}},computed:V(V({},Object(y.e)("currentAttemptStore",{currentQuestions:"currentQuestions",currentAnswers:"currentAnswers"})),Object(y.c)("currentAttemptStore",{activeQuestions:"activeQuestions",currentQuestion:"currentQuestion",currentQuestionAnswers:"currentQuestionAnswers",currentQuestionPerformedAnswers:"currentQuestionPerformedAnswers",currentQuestionIsCorrect:"currentQuestionIsCorrect",allowNextQuestion:"allowNextQuestion",allowPrevQuestion:"allowPrevQuestion"})),methods:V(V(V({},Object(y.d)("currentAttemptStore",{updateFullAnswer:"updateFullAnswer",updateAnswer:"updateAnswer",nextQuestion:"nextQuestion",prevQuestion:"prevQuestion"})),Object(y.b)("currentAttemptStore",{saveAttemptResult:"saveAttemptResult"})),{},{completeQuiz:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$dialog.confirm({text:"Завершить тестирование?",actions:{true:"Завершить",false:"Отмена"}});case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return n=$.c(t.currentQuestions,t.currentAnswers),e.next=8,t.$dialog.confirm({title:n.status===L.a.PASSED?"Пройдено!":"Обосратушки...",text:"Верно ".concat(n.num_correct," из ").concat(n.num_to_answer," вопросов. \n\n Это ").concat(Math.round(n.num_correct/n.num_to_answer*100),"% при требуемых ").concat($.a),actions:{true:"Сохранить и завершить",false:"Отмена"},type:n.status===L.a.PASSED?"success":"error"});case 8:if(e.sent){e.next=11;break}return e.abrupt("return");case 11:return e.next=13,t.saveAttemptResult(n);case 13:e.sent&&(N.a.showSnackbar("Результаты сохранены"),t.$router.push("/"));case 15:case"end":return e.stop()}}),e)})))()},toggleAnswer:function(){this.answerVisible=!this.answerVisible},onNextQuestion:function(){this.answerVisible=!1,this.nextQuestion()},onPrevQuestion:function(){this.answerVisible=!1,this.prevQuestion()},onAnswered:function(t){this.updateFullAnswer({questionId:this.currentQuestion.id,answers:z.isArray(t)?t:[t]})}})},F=(n(569),Object(C.a)(B,(function(){var t=this,e=t._self._c;return e(f.a,{staticClass:"pr-0 pl-0"},[t.currentQuestion?e(m.a,[e("h3",{staticClass:"pl-4 font-weight-light"},[t._v("Вопрос "+t._s(t.currentQuestion.position)+" / "+t._s(t.currentQuestions.length))]),t._v(" "),e(l.a,{staticClass:"pr-0 pl-0",attrs:{cols:"12",md:"6"}},[e("attempt-question-display",{attrs:{contents:t.currentQuestion.questionContents}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e("attempt-options-list",{staticClass:"mb-6",attrs:{question:t.currentQuestion,options:t.currentQuestionAnswers,answers:t.currentQuestionPerformedAnswers},on:{change:t.onAnswered}}),t._v(" "),t.answerVisible?e(r.a,{staticClass:"answers-cont",attrs:{border:"top","colored-border":"",type:t.currentQuestionIsCorrect?"success":"error",elevation:"2"}},[e("h4",{staticClass:"mb-4"},[t._v("Ответ: "),t._l(t.currentQuestion.answers,(function(n,i){return e("span",[t._v(t._s("".concat(n).concat(i<t.currentQuestion.answers.length-1?",  ":""))+" ")])}))],2),t._v(" "),e("div",{staticClass:"description"},t._l(t.currentQuestion.answerDescriptionContents,(function(content,i){return e("attempt-content",{key:i,attrs:{content:content,"normal-text":"","reformat-text":""}})})),1)]):t._e()],1)],1):t._e(),t._v(" "),e(o.a,{attrs:{app:"",grow:""}},[e(c.a,{attrs:{disabled:!t.allowPrevQuestion,icon:""},on:{click:t.onPrevQuestion}},[e(d.a,[t._v("mdi-chevron-left")])],1),t._v(" "),e(c.a,{attrs:{icon:""},on:{click:t.toggleAnswer}},[e(d.a,[t._v("mdi-eye-check")])],1),t._v(" "),t.allowNextQuestion?e(c.a,{attrs:{icon:""},on:{click:t.onNextQuestion}},[e(d.a,[t._v("mdi-chevron-right")])],1):e(c.a,{attrs:{icon:""},on:{click:t.completeQuiz}},[e(d.a,[t._v("mdi-check-circle")])],1)],1)],1)}),[],!1,null,"4f7a67dc",null));e.default=F.exports}}]);