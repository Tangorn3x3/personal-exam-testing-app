(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{549:function(e,t,n){var content=n(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("2cdcef16",content,!0,{sourceMap:!1})},550:function(e,t,n){"use strict";var r=n(20),o=(n(547),n(48),n(22),n(44),n(21),n(42),n(158),n(33),n(26),n(8),n(49),n(122)),c=n(200);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var h=new Map([[". Option",".\n\nOption"],[". Options",".\n\nOptions"],[". Line",".\n\nLine"],[". Lines",".\n\nLines"],["ANSWER:",""]]),d={name:"AttemptContent",props:{content:{type:Object,required:!0},dense:{type:Boolean,default:!1},normalText:{type:Boolean,default:!1},reformatText:{type:Boolean,default:!1},reformatSimpleJava:{type:Boolean,default:!1},reformatNormalKeywords:{type:Boolean,default:!1},enlarge:{type:Number,default:0},highlightParagraphArgs:{type:Array,default:function(){return[]}},highlightParagraphBreakBefore:{type:Boolean,default:!0},highlightParagraphBreakAfter:{type:Boolean,default:!1},lineHeight:{type:Number,default:0}},data:function(){return{loaded:!1}},computed:{ContentType:function(){return o.a},textClass:function(){var e={dense:this.dense,"normal-text":this.normalText};return this.enlarge&&(e["larger-".concat(this.enlarge)]=!0),this.lineHeight&&(e["line-height-".concat(this.lineHeight)]=!0),e},finalText:function(){if(!this.content.text)return null;if(!this.reformatText)return this.content.text;var e,text=this.content.text,t=l(h);try{for(t.s();!(e=t.n()).done;){var n=Object(r.a)(e.value,2),o=n[0],f=n[1];text=text.replaceAll(o,f)}}catch(e){t.e(e)}finally{t.f()}text=text.replace(/([^.\n])\n([^A-ZА-Я])/g,"$1 $2");var d=[];return this.reformatNormalKeywords&&d.push("normal"),text=Object(c.c)(text,{simpleJava:this.reformatSimpleJava,additionalKeywordClasses:d}),text=Object(c.a)(text),this.highlightParagraphArgs.length>0&&(text=this.highlightFirstParagraphs(text)),text}},methods:{highlightFirstParagraphs:function(e){var t=this,text=e,n=new RegExp("(".concat(this.highlightParagraphArgs.join("|"),")[^.]*\\."),"g");return text.replace(n,(function(e){return'<span class="paragraph-highlighted">'.concat(t.highlightParagraphBreakBefore?"\n\n":"").concat(e).concat(t.highlightParagraphBreakAfter?"\n\n":"","</span>")}))}}},m=(n(553),n(32)),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",[e.content.type===e.ContentType.TEXT?t("div",{staticClass:"code pl-4 pr-4",class:e.textClass},[e.reformatText?t("p",{domProps:{innerHTML:e._s(e.finalText)}}):t("span",[e._v(e._s(e.finalText))])]):e._e(),e._v(" "),e.content.type===e.ContentType.IMAGE?t("div",[e.loaded?e._e():t("h4",[e._v("Loading image...")]),e._v(" "),t("img",{staticClass:"quest-image",attrs:{src:e.content.image,alt:"Загрузка изображения"},on:{load:function(t){e.loaded=!0}}})]):e._e()])}),[],!1,null,null,null);t.a=component.exports},553:function(e,t,n){"use strict";n(549)},554:function(e,t,n){var r=n(17)((function(i){return i[1]}));r.push([e.i,'.code{font-family:monospace;font-size:1rem;line-height:normal;white-space:pre-wrap}.code.dense{font-size:.8rem}.code.larger-1{font-size:1.1rem}.code.larger-2{font-size:1.2rem}.code.larger-3{font-size:1.3rem}.code.larger-4{font-size:1.4rem}.code.normal-text{font-family:inherit}.quest-image{height:auto;width:100%}.paragraph-highlighted{color:#737373;font-weight:700}.mdh-code{color:#6c6c6c!important;font-weight:700!important}.code-keyword{font-family:monospace;font-size:105%;font-weight:700}.keyword-suffix{color:#696969;font-family:"Roboto",sans-serif;font-size:medium;font-weight:400}.code-keyword.normal{font-size:1rem}.code-keyword.generic-keyword,.code-keyword.java-keyword{color:#022b94}.code-keyword.camel-keyword{color:#696969}.code-keyword.class-keyword,.code-keyword.method-keyword{color:#750a80}.code-keyword.num-keyword,.code-keyword.string-keyword{color:#036011}.line-height-1{line-height:1}.line-height-2{line-height:1.25}.line-height-3{line-height:1.5}.line-height-4{line-height:1.75}',""]),r.locals={},e.exports=r},558:function(e,t,n){var content=n(573);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("7b569adf",content,!0,{sourceMap:!1})},572:function(e,t,n){"use strict";n(558)},573:function(e,t,n){var r=n(17)((function(i){return i[1]}));r.push([e.i,"",""]),r.locals={},e.exports=r},588:function(e,t,n){"use strict";n.r(t);var r=n(530),o=n(590),c=n(148),l=n(562),f=n(543),h=n(114),d=n(561),m=(n(9),n(8),n(7),n(12),n(13),n(6)),y=n(3),w=(n(29),n(25)),v=n(122),_=n(550),x={name:"AttemptQuestionDisplay",components:{AttemptContent:_.a},props:{contents:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{ContentType:function(){return v.a}}},k=n(32),A=Object(k.a)(x,(function(){var e=this,t=e._self._c;return t("div",e._l(e.contents,(function(content,i){return t("attempt-content",{key:content.hashCode,attrs:{content:content}})})),1)}),[],!1,null,"75688603",null).exports,Q=n(585),O=n(584),C=n(583),j=n(232),P={name:"AttemptOptionsList",components:{AttemptContent:_.a},props:{question:{type:Object,required:!0},options:{type:Array,default:function(){return[]}},answers:{type:Array,default:function(){return[]}}},computed:{ContentType:function(){return v.a},ExamQuestionSelectType:function(){return j.a},checkboxModel:{get:function(){return this.answers},set:function(e){this.$emit("change",e)}},radioModel:{get:function(){return this.answers&&this.answers.length>0?this.answers[0]:null},set:function(e){this.$emit("change",e)}}},methods:{onRadioChanged:function(e){},onCheckboxChanged:function(e){},onContext:function(e){console.log("onContext",e)}}},S=Object(k.a)(P,(function(){var e=this,t=e._self._c;return t("div",[e.question.selectType===e.ExamQuestionSelectType.SINGLE?t(C.a,{model:{value:e.radioModel,callback:function(t){e.radioModel=t},expression:"radioModel"}},e._l(e.options,(function(option){return t(O.a,{key:option.key,attrs:{value:option.key},on:{change:e.onRadioChanged},scopedSlots:e._u([{key:"label",fn:function(){return[t("h5",[e._v(e._s(option.key)+".")]),e._v(" "),e._l(option.contents,(function(content){return t("attempt-content",{key:content.key,attrs:{content:content,enlarge:1}})}))]},proxy:!0}],null,!0)})})),1):e._e(),e._v(" "),e.question.selectType===e.ExamQuestionSelectType.MULTI?t("div",e._l(e.options,(function(option){return t(Q.a,{key:option.key,attrs:{value:option.key,dense:"","hide-details":""},on:{change:e.onCheckboxChanged,contextmenu:e.onContext},scopedSlots:e._u([{key:"label",fn:function(){return[t("h5",[e._v(e._s(option.key)+".")]),e._v(" "),e._l(option.contents,(function(content){return t("attempt-content",{key:content.key,attrs:{content:content,enlarge:1}})}))]},proxy:!0}],null,!0),model:{value:e.checkboxModel,callback:function(t){e.checkboxModel=t},expression:"checkboxModel"}})})),1):e._e()],1)}),[],!1,null,"11921fcc",null).exports,T=n(4),M=n(88),B=n(149),E=n(41);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={name:"TakeAttempt",components:{AttemptContent:_.a,AttemptOptionsList:S,AttemptQuestionDisplay:A},data:function(){return{loadingItems:!1,answerVisible:!1}},mounted:function(){this.disableMenuButton(),this.enableBackButton("/")},computed:I(I({},Object(w.e)("currentAttemptStore",{currentQuestions:"currentQuestions",currentAnswers:"currentAnswers"})),Object(w.c)("currentAttemptStore",{activeQuestions:"activeQuestions",currentQuestion:"currentQuestion",currentQuestionAnswers:"currentQuestionAnswers",currentQuestionPerformedAnswers:"currentQuestionPerformedAnswers",currentQuestionIsCorrect:"currentQuestionIsCorrect",allowNextQuestion:"allowNextQuestion",allowPrevQuestion:"allowPrevQuestion"})),methods:I(I(I({},Object(w.d)("currentAttemptStore",{updateFullAnswer:"updateFullAnswer",updateAnswer:"updateAnswer",nextQuestion:"nextQuestion",prevQuestion:"prevQuestion"})),Object(w.b)("currentAttemptStore",{saveAttemptResult:"saveAttemptResult"})),{},{completeQuiz:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$dialog.confirm({text:"Завершить тестирование?",actions:{true:"Завершить",false:"Отмена"}});case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return n=M.c(e.currentQuestions,e.currentAnswers),t.next=8,e.$dialog.confirm({title:n.status===B.a.PASSED?"Пройдено!":"Обосратушки...",text:"Верно ".concat(n.num_correct," из ").concat(n.num_to_answer," вопросов. \n\n Это ").concat(Math.round(n.num_correct/n.num_to_answer*100),"% при требуемых ").concat(M.a),actions:{true:"Сохранить и завершить",false:"Отмена"},type:n.status===B.a.PASSED?"success":"error"});case 8:if(t.sent){t.next=11;break}return t.abrupt("return");case 11:return t.next=13,e.saveAttemptResult(n);case 13:t.sent&&(E.a.showSnackbar("Результаты сохранены"),e.$router.push("/"));case 15:case"end":return t.stop()}}),t)})))()},toggleAnswer:function(){this.answerVisible=!this.answerVisible},onNextQuestion:function(){this.answerVisible=!1,this.nextQuestion()},onPrevQuestion:function(){this.answerVisible=!1,this.prevQuestion()},onAnswered:function(e){this.updateFullAnswer({questionId:this.currentQuestion.id,answers:T.isArray(e)?e:[e]})}})},L=(n(572),Object(k.a)(N,(function(){var e=this,t=e._self._c;return t(f.a,{staticClass:"pr-0 pl-0"},[e.currentQuestion?t(d.a,[t("h3",{staticClass:"pl-4 font-weight-light"},[e._v("Вопрос "+e._s(e.currentQuestion.position)+" / "+e._s(e.currentQuestions.length))]),e._v(" "),t(l.a,{staticClass:"pr-0 pl-0",attrs:{cols:"12",md:"6"}},[t("attempt-question-display",{attrs:{contents:e.currentQuestion.questionContents}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6"}},[t("attempt-options-list",{staticClass:"mb-6",attrs:{question:e.currentQuestion,options:e.currentQuestionAnswers,answers:e.currentQuestionPerformedAnswers},on:{change:e.onAnswered}}),e._v(" "),e.answerVisible?t(r.a,{staticClass:"answers-cont",attrs:{border:"top","colored-border":"",type:e.currentQuestionIsCorrect?"success":"error",elevation:"2"}},[t("h4",{staticClass:"mb-4"},[e._v("Ответ: "),e._l(e.currentQuestion.answers,(function(n,i){return t("span",[e._v(e._s("".concat(n).concat(i<e.currentQuestion.answers.length-1?",  ":""))+" ")])}))],2),e._v(" "),t("div",{staticClass:"description"},e._l(e.currentQuestion.answerDescriptionContents,(function(content,i){return t("attempt-content",{key:i,attrs:{content:content,"normal-text":"","reformat-text":""}})})),1)]):e._e()],1)],1):e._e(),e._v(" "),t(o.a,{attrs:{app:"",grow:""}},[t(c.a,{attrs:{disabled:!e.allowPrevQuestion,icon:""},on:{click:e.onPrevQuestion}},[t(h.a,[e._v("mdi-chevron-left")])],1),e._v(" "),t(c.a,{attrs:{icon:""},on:{click:e.toggleAnswer}},[t(h.a,[e._v("mdi-eye-check")])],1),e._v(" "),e.allowNextQuestion?t(c.a,{attrs:{icon:""},on:{click:e.onNextQuestion}},[t(h.a,[e._v("mdi-chevron-right")])],1):t(c.a,{attrs:{icon:""},on:{click:e.completeQuiz}},[t(h.a,[e._v("mdi-check-circle")])],1)],1)],1)}),[],!1,null,"e68359b0",null));t.default=L.exports}}]);