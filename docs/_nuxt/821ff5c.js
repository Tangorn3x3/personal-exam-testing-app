(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{549:function(t,e,n){var content=n(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("7941c46a",content,!0,{sourceMap:!1})},550:function(t,e,n){"use strict";var r=n(20),o=(n(547),n(48),n(22),n(44),n(21),n(41),n(197),n(32),n(26),n(8),n(49),n(122)),c=n(200);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d=new Map([[". Option",".\n\nOption"],[". Line",".\n\nLine"],["ANSWER:",""]]),h={name:"AttemptContent",props:{content:{type:Object,required:!0},dense:{type:Boolean,default:!1},normalText:{type:Boolean,default:!1},reformatText:{type:Boolean,default:!1},enlarge:{type:Number,default:0},highlightParagraphArgs:{type:Array,default:function(){return[]}},highlightParagraphBreakBefore:{type:Boolean,default:!0},highlightParagraphBreakAfter:{type:Boolean,default:!1}},data:function(){return{loaded:!1}},computed:{ContentType:function(){return o.a},textClass:function(){var t={dense:this.dense,"normal-text":this.normalText};return this.enlarge&&(t["larger-".concat(this.enlarge)]=!0),t},finalText:function(){if(!this.content.text)return null;if(!this.reformatText)return this.content.text;var t,text=this.content.text,e=l(d);try{for(e.s();!(t=e.n()).done;){var n=Object(r.a)(t.value,2),o=n[0],f=n[1];text=text.replaceAll(o,f)}}catch(t){e.e(t)}finally{e.f()}return text=text.replace(/([^.\n])\n([^A-ZА-Я])/g,"$1 $2"),text=Object(c.c)(text),text=Object(c.a)(text),this.highlightParagraphArgs.length>0&&(text=this.highlightFirstParagraphs(text)),text}},methods:{highlightFirstParagraphs:function(t){var e=this,text=t,n=new RegExp("(".concat(this.highlightParagraphArgs.join("|"),")[^.]*\\."),"g");return text.replace(n,(function(t){return'<span class="paragraph-highlighted">'.concat(e.highlightParagraphBreakBefore?"\n\n":"").concat(t).concat(e.highlightParagraphBreakAfter?"\n\n":"","</span>")}))}}},m=(n(553),n(31)),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",[t.content.type===t.ContentType.TEXT?e("div",{staticClass:"code pl-4 pr-4",class:t.textClass},[t.reformatText?e("p",{domProps:{innerHTML:t._s(t.finalText)}}):e("span",[t._v(t._s(t.finalText))])]):t._e(),t._v(" "),t.content.type===t.ContentType.IMAGE?e("div",[t.loaded?t._e():e("h4",[t._v("Loading image...")]),t._v(" "),e("img",{staticClass:"quest-image",attrs:{src:t.content.image,alt:"Загрузка изображения"},on:{load:function(e){t.loaded=!0}}})]):t._e()])}),[],!1,null,null,null);e.a=component.exports},553:function(t,e,n){"use strict";n(549)},554:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".code{font-family:monospace;font-size:1rem;line-height:normal;white-space:pre-wrap}.code.dense{font-size:.8rem}.code.larger-1{font-size:1.1rem}.code.larger-2{font-size:1.2rem}.code.larger-3{font-size:1.3rem}.code.larger-4{font-size:1.4rem}.code.normal-text{font-family:inherit}.quest-image{height:auto;width:100%}.paragraph-highlighted{color:#001652;font-weight:700}.code-keyword{font-family:monospace;font-size:105%;font-weight:700}.code-keyword.generic-keyword,.code-keyword.java-keyword{color:#022b94}.code-keyword.camel-keyword,.code-keyword.class-keyword,.code-keyword.method-keyword{color:#750a80}.code-keyword.num-keyword,.code-keyword.string-keyword{color:#036011}",""]),r.locals={},t.exports=r},558:function(t,e,n){var content=n(573);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("7b569adf",content,!0,{sourceMap:!1})},572:function(t,e,n){"use strict";n(558)},573:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},588:function(t,e,n){"use strict";n.r(e);var r=n(530),o=n(590),c=n(148),l=n(562),f=n(543),d=n(114),h=n(561),m=(n(9),n(8),n(7),n(12),n(13),n(6)),y=n(3),w=(n(29),n(25)),v=n(122),_=n(550),x={name:"AttemptQuestionDisplay",components:{AttemptContent:_.a},props:{contents:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{ContentType:function(){return v.a}}},k=n(31),A=Object(k.a)(x,(function(){var t=this,e=t._self._c;return e("div",t._l(t.contents,(function(content,i){return e("attempt-content",{key:content.hashCode,attrs:{content:content}})})),1)}),[],!1,null,"75688603",null).exports,Q=n(585),O=n(584),C=n(583),j=n(232),P={name:"AttemptOptionsList",components:{AttemptContent:_.a},props:{question:{type:Object,required:!0},options:{type:Array,default:function(){return[]}},answers:{type:Array,default:function(){return[]}}},computed:{ContentType:function(){return v.a},ExamQuestionSelectType:function(){return j.a},checkboxModel:{get:function(){return this.answers},set:function(t){this.$emit("change",t)}},radioModel:{get:function(){return this.answers&&this.answers.length>0?this.answers[0]:null},set:function(t){this.$emit("change",t)}}},methods:{onRadioChanged:function(t){},onCheckboxChanged:function(t){},onContext:function(t){console.log("onContext",t)}}},T=Object(k.a)(P,(function(){var t=this,e=t._self._c;return e("div",[t.question.selectType===t.ExamQuestionSelectType.SINGLE?e(C.a,{model:{value:t.radioModel,callback:function(e){t.radioModel=e},expression:"radioModel"}},t._l(t.options,(function(option){return e(O.a,{key:option.key,attrs:{value:option.key},on:{change:t.onRadioChanged},scopedSlots:t._u([{key:"label",fn:function(){return[e("h5",[t._v(t._s(option.key)+".")]),t._v(" "),t._l(option.contents,(function(content){return e("attempt-content",{key:content.key,attrs:{content:content,enlarge:1}})}))]},proxy:!0}],null,!0)})})),1):t._e(),t._v(" "),t.question.selectType===t.ExamQuestionSelectType.MULTI?e("div",t._l(t.options,(function(option){return e(Q.a,{key:option.key,attrs:{value:option.key,dense:"","hide-details":""},on:{change:t.onCheckboxChanged,contextmenu:t.onContext},scopedSlots:t._u([{key:"label",fn:function(){return[e("h5",[t._v(t._s(option.key)+".")]),t._v(" "),t._l(option.contents,(function(content){return e("attempt-content",{key:content.key,attrs:{content:content,enlarge:1}})}))]},proxy:!0}],null,!0),model:{value:t.checkboxModel,callback:function(e){t.checkboxModel=e},expression:"checkboxModel"}})})),1):t._e()],1)}),[],!1,null,"11921fcc",null).exports,S=n(4),M=n(88),B=n(149),E=n(40);function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){Object(y.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var D={name:"TakeAttempt",components:{AttemptContent:_.a,AttemptOptionsList:T,AttemptQuestionDisplay:A},data:function(){return{loadingItems:!1,answerVisible:!1}},mounted:function(){this.disableMenuButton(),this.enableBackButton("/")},computed:z(z({},Object(w.e)("currentAttemptStore",{currentQuestions:"currentQuestions",currentAnswers:"currentAnswers"})),Object(w.c)("currentAttemptStore",{activeQuestions:"activeQuestions",currentQuestion:"currentQuestion",currentQuestionAnswers:"currentQuestionAnswers",currentQuestionPerformedAnswers:"currentQuestionPerformedAnswers",currentQuestionIsCorrect:"currentQuestionIsCorrect",allowNextQuestion:"allowNextQuestion",allowPrevQuestion:"allowPrevQuestion"})),methods:z(z(z({},Object(w.d)("currentAttemptStore",{updateFullAnswer:"updateFullAnswer",updateAnswer:"updateAnswer",nextQuestion:"nextQuestion",prevQuestion:"prevQuestion"})),Object(w.b)("currentAttemptStore",{saveAttemptResult:"saveAttemptResult"})),{},{completeQuiz:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$dialog.confirm({text:"Завершить тестирование?",actions:{true:"Завершить",false:"Отмена"}});case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return n=M.c(t.currentQuestions,t.currentAnswers),e.next=8,t.$dialog.confirm({title:n.status===B.a.PASSED?"Пройдено!":"Обосратушки...",text:"Верно ".concat(n.num_correct," из ").concat(n.num_to_answer," вопросов. \n\n Это ").concat(Math.round(n.num_correct/n.num_to_answer*100),"% при требуемых ").concat(M.a),actions:{true:"Сохранить и завершить",false:"Отмена"},type:n.status===B.a.PASSED?"success":"error"});case 8:if(e.sent){e.next=11;break}return e.abrupt("return");case 11:return e.next=13,t.saveAttemptResult(n);case 13:e.sent&&(E.a.showSnackbar("Результаты сохранены"),t.$router.push("/"));case 15:case"end":return e.stop()}}),e)})))()},toggleAnswer:function(){this.answerVisible=!this.answerVisible},onNextQuestion:function(){this.answerVisible=!1,this.nextQuestion()},onPrevQuestion:function(){this.answerVisible=!1,this.prevQuestion()},onAnswered:function(t){this.updateFullAnswer({questionId:this.currentQuestion.id,answers:S.isArray(t)?t:[t]})}})},R=(n(572),Object(k.a)(D,(function(){var t=this,e=t._self._c;return e(f.a,{staticClass:"pr-0 pl-0"},[t.currentQuestion?e(h.a,[e("h3",{staticClass:"pl-4 font-weight-light"},[t._v("Вопрос "+t._s(t.currentQuestion.position)+" / "+t._s(t.currentQuestions.length))]),t._v(" "),e(l.a,{staticClass:"pr-0 pl-0",attrs:{cols:"12",md:"6"}},[e("attempt-question-display",{attrs:{contents:t.currentQuestion.questionContents}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e("attempt-options-list",{staticClass:"mb-6",attrs:{question:t.currentQuestion,options:t.currentQuestionAnswers,answers:t.currentQuestionPerformedAnswers},on:{change:t.onAnswered}}),t._v(" "),t.answerVisible?e(r.a,{staticClass:"answers-cont",attrs:{border:"top","colored-border":"",type:t.currentQuestionIsCorrect?"success":"error",elevation:"2"}},[e("h4",{staticClass:"mb-4"},[t._v("Ответ: "),t._l(t.currentQuestion.answers,(function(n,i){return e("span",[t._v(t._s("".concat(n).concat(i<t.currentQuestion.answers.length-1?",  ":""))+" ")])}))],2),t._v(" "),e("div",{staticClass:"description"},t._l(t.currentQuestion.answerDescriptionContents,(function(content,i){return e("attempt-content",{key:i,attrs:{content:content,"normal-text":"","reformat-text":""}})})),1)]):t._e()],1)],1):t._e(),t._v(" "),e(o.a,{attrs:{app:"",grow:""}},[e(c.a,{attrs:{disabled:!t.allowPrevQuestion,icon:""},on:{click:t.onPrevQuestion}},[e(d.a,[t._v("mdi-chevron-left")])],1),t._v(" "),e(c.a,{attrs:{icon:""},on:{click:t.toggleAnswer}},[e(d.a,[t._v("mdi-eye-check")])],1),t._v(" "),t.allowNextQuestion?e(c.a,{attrs:{icon:""},on:{click:t.onNextQuestion}},[e(d.a,[t._v("mdi-chevron-right")])],1):e(c.a,{attrs:{icon:""},on:{click:t.completeQuiz}},[e(d.a,[t._v("mdi-check-circle")])],1)],1)],1)}),[],!1,null,"e68359b0",null));e.default=R.exports}}]);