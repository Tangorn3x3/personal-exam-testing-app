(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{550:function(t,e,n){var content=n(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("22fc281e",content,!0,{sourceMap:!1})},554:function(t,e,n){var content=n(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("593685c7",content,!0,{sourceMap:!1})},560:function(t,e,n){"use strict";n(550)},561:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".code[data-v-7c17aced]{font-family:monospace;font-size:.9rem;line-height:normal;white-space:pre-wrap}.code.dense[data-v-7c17aced]{font-size:.8rem}.code.normal-text[data-v-7c17aced]{font-family:inherit}.quest-image[data-v-7c17aced]{height:auto;width:100%}",""]),r.locals={},t.exports=r},569:function(t,e,n){"use strict";n(554)},570:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},581:function(t,e,n){"use strict";n.r(e);var r=n(529),o=n(584),c=n(148),l=n(557),d=n(542),f=n(113),m=n(556),h=(n(10),n(9),n(8),n(12),n(13),n(6)),v=n(3),w=(n(29),n(27)),_=n(131),y={name:"AttemptContent",data:function(){return{loaded:!1}},computed:{ContentType:function(){return _.a}},props:{content:{type:Object,required:!0},dense:{type:Boolean,default:!1},normalText:{type:Boolean,default:!1}},methods:{}},Q=(n(560),n(35)),x=Object(Q.a)(y,(function(){var t=this,e=t._self._c;return e("div",[t.content.type===t.ContentType.TEXT?e("div",{staticClass:"code pl-4 pr-4",class:{dense:t.dense,"normal-text":t.normalText},domProps:{innerHTML:t._s(t.content.text)}}):t._e(),t._v(" "),t.content.type===t.ContentType.IMAGE?e("div",[t.loaded?t._e():e("h4",[t._v("Loading image...")]),t._v(" "),e("img",{staticClass:"quest-image",attrs:{src:t.content.image,alt:"Загрузка изображения"},on:{load:function(e){t.loaded=!0}}})]):t._e()])}),[],!1,null,"7c17aced",null).exports,A={name:"AttemptQuestionDisplay",components:{AttemptContent:x},props:{contents:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{ContentType:function(){return _.a}}},k=Object(Q.a)(A,(function(){var t=this,e=t._self._c;return e("div",t._l(t.contents,(function(content,i){return e("attempt-content",{attrs:{content:content,dense:""}})})),1)}),[],!1,null,"e4242b88",null).exports,O=n(579),C=n(578),j=n(577),P=n(231),S={name:"AttemptOptionsList",components:{AttemptContent:x},props:{question:{type:Object,required:!0},options:{type:Array,default:function(){return[]}},answers:{type:Array,default:function(){return[]}}},computed:{ContentType:function(){return _.a},ExamQuestionSelectType:function(){return P.a},checkboxModel:{get:function(){return this.answers},set:function(t){console.log("set",t),this.$emit("change",t)}},radioModel:{get:function(){return this.answers&&this.answers.length>0?this.answers[0]:null},set:function(t){this.$emit("change",t)}}},methods:{onRadioChanged:function(t){},onCheckboxChanged:function(t){}}},T=Object(Q.a)(S,(function(){var t=this,e=t._self._c;return e("div",[t.question.selectType===t.ExamQuestionSelectType.SINGLE?e(j.a,{model:{value:t.radioModel,callback:function(e){t.radioModel=e},expression:"radioModel"}},t._l(t.options,(function(option){return e(C.a,{key:option.key,attrs:{value:option.key},on:{change:t.onRadioChanged},scopedSlots:t._u([{key:"label",fn:function(){return[e("h5",[t._v(t._s(option.key)+".")]),t._v(" "),t._l(option.contents,(function(content){return e("attempt-content",{key:content.key,attrs:{content:content}})}))]},proxy:!0}],null,!0)})})),1):t._e(),t._v(" "),t.question.selectType===t.ExamQuestionSelectType.MULTI?e("div",t._l(t.options,(function(option){return e(O.a,{key:option.key,attrs:{value:option.key,dense:"","hide-details":""},on:{change:t.onCheckboxChanged},scopedSlots:t._u([{key:"label",fn:function(){return[e("h5",[t._v(t._s(option.key)+".")]),t._v(" "),t._l(option.contents,(function(content){return e("attempt-content",{key:content.key,attrs:{content:content}})}))]},proxy:!0}],null,!0),model:{value:t.checkboxModel,callback:function(e){t.checkboxModel=e},expression:"checkboxModel"}})})),1):t._e()],1)}),[],!1,null,"8c7ebaea",null).exports,M=n(4),E=n(88),D=n(149),I=n(40);function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){Object(v.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var N={name:"TakeAttempt",components:{AttemptContent:x,AttemptOptionsList:T,AttemptQuestionDisplay:k},data:function(){return{loadingItems:!1,answerVisible:!1}},computed:L(L({},Object(w.e)("currentAttemptStore",{currentQuestions:"currentQuestions",currentAnswers:"currentAnswers"})),Object(w.c)("currentAttemptStore",{activeQuestions:"activeQuestions",currentQuestion:"currentQuestion",currentQuestionAnswers:"currentQuestionAnswers",currentQuestionPerformedAnswers:"currentQuestionPerformedAnswers",currentQuestionIsCorrect:"currentQuestionIsCorrect",allowNextQuestion:"allowNextQuestion",allowPrevQuestion:"allowPrevQuestion"})),methods:L(L(L({},Object(w.d)("currentAttemptStore",{updateFullAnswer:"updateFullAnswer",updateAnswer:"updateAnswer",nextQuestion:"nextQuestion",prevQuestion:"prevQuestion"})),Object(w.b)("currentAttemptStore",{saveAttemptResult:"saveAttemptResult"})),{},{completeQuiz:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$dialog.confirm({text:"Завершить тестирование?",actions:{true:"Завершить",false:"Отмена"}});case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return n=E.c(t.currentQuestions,t.currentAnswers),e.next=8,t.$dialog.confirm({title:n.status===D.a.PASSED?"Пройдено!":"Обосратушки...",text:"Верно ".concat(n.num_correct," из ").concat(n.num_to_answer," вопросов. \n\n Это ").concat(Math.round(n.num_correct/n.num_to_answer*100),"% при требуемых ").concat(E.a),actions:{true:"Сохранить и завершить",false:"Отмена"},type:n.status===D.a.PASSED?"success":"error"});case 8:if(e.sent){e.next=11;break}return e.abrupt("return");case 11:return e.next=13,t.saveAttemptResult(n);case 13:e.sent&&(I.a.showSnackbar("Результаты сохранены"),t.$router.push("/"));case 15:case"end":return e.stop()}}),e)})))()},toggleAnswer:function(){this.answerVisible=!this.answerVisible},onNextQuestion:function(){this.answerVisible=!1,this.nextQuestion()},onPrevQuestion:function(){this.answerVisible=!1,this.prevQuestion()},onAnswered:function(t){this.updateFullAnswer({questionId:this.currentQuestion.id,answers:M.isArray(t)?t:[t]})}})},V=(n(569),Object(Q.a)(N,(function(){var t=this,e=t._self._c;return e(d.a,{staticClass:"pr-0 pl-0"},[t.currentQuestion?e(m.a,[e("h3",{staticClass:"pl-4 font-weight-light"},[t._v("Вопрос "+t._s(t.currentQuestion.position)+" / "+t._s(t.currentQuestions.length))]),t._v(" "),e(l.a,{staticClass:"pr-0 pl-0",attrs:{cols:"12",md:"6"}},[e("attempt-question-display",{attrs:{contents:t.currentQuestion.questionContents}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e("attempt-options-list",{staticClass:"mb-6",attrs:{question:t.currentQuestion,options:t.currentQuestionAnswers,answers:t.currentQuestionPerformedAnswers},on:{change:t.onAnswered}}),t._v(" "),t.answerVisible?e(r.a,{staticClass:"answers-cont",attrs:{border:"top","colored-border":"",type:t.currentQuestionIsCorrect?"success":"error",elevation:"2"}},[e("h4",{staticClass:"mb-4"},[t._v("Ответ: "),t._l(t.currentQuestion.answers,(function(n,i){return e("span",[t._v(t._s("".concat(n).concat(i<t.currentQuestion.answers.length-1?",  ":""))+" ")])}))],2),t._v(" "),e("div",{staticClass:"description"},t._l(t.currentQuestion.answerDescriptionContents,(function(content,i){return e("attempt-content",{key:i,attrs:{content:content,"normal-text":""}})})),1)]):t._e()],1)],1):t._e(),t._v(" "),e(o.a,{attrs:{app:"",grow:""}},[e(c.a,{attrs:{disabled:!t.allowPrevQuestion,icon:""},on:{click:t.onPrevQuestion}},[e(f.a,[t._v("mdi-chevron-left")])],1),t._v(" "),e(c.a,{attrs:{icon:""},on:{click:t.toggleAnswer}},[e(f.a,[t._v("mdi-eye-check")])],1),t._v(" "),t.allowNextQuestion?e(c.a,{attrs:{icon:""},on:{click:t.onNextQuestion}},[e(f.a,[t._v("mdi-chevron-right")])],1):e(c.a,{attrs:{icon:""},on:{click:t.completeQuiz}},[e(f.a,[t._v("mdi-check-circle")])],1)],1)],1)}),[],!1,null,"08c24eec",null));e.default=V.exports}}]);