// all views
var allView = ['#menu-main','#listReport','#listMessage','#setting','#about'
,'#newReportFound','#previewReportFound','#completeReportFound','#showReportFound','#editReportFound','#newReportLost','#previewReportLost','#completeReportLost','#showReportLost','#editReportLost']

$(function(){
   //hide all views
   allView.forEach(function(view){
     hideObject(view);
   })

   //list all views need to be visiable at begining
   showObject('#menu-main')

   //set all click action
  setMenu();
  setBack();
  setAction();
  //set all deligate function for reports

});

var setAction = function(){
  setRedirect('#button-sumbitNewReport','#completeReportFound','#previewReportFound');
}
var setBack = function(){
  $('.button-back').click(function(){
    $(this).parent().parent().hide();
    $('#menu-main').show();
  })
}

var setMenu = function(){
  //set all redirect function for main menu
  setRedirect('#button-newLost','#menu-main','#newReportLost');
  setRedirect('#button-newFound','#menu-main','#newReportFound');

  setRedirectWithFunction('#button-listReport','#menu-main','#listReport',addReport);
  setRedirectWithFunction('#button-listMessage','#menu-main','#listMessage',addMessage);
  setRedirect('#button-setting','#menu-main','#setting');
  setRedirect('#button-about','#menu-main','#about');
}

var setRedirect = function(target,fro,to){
  //set redirect function for a button
  $(target).click(function(){
    hideObject(fro);
    showObject(to);
  });
}
var setDeligate = function(){

}
var setRedirectWithFunction = function(target,fro,to,func){
  //set redirect function for a button
  $(target).click(function(){
    func();
    hideObject(fro);
    showObject(to);
  });
}

var hideObject= function(target){
  $(target).hide();
}
var showObject= function(target){
  $(target).show();
}
var report1 = {
  'id' : 1,
  "pet_type":'dog',
  'breed' : 'breed1',
  'name' : 'name',
  'age' : 12,
  'color' : 'orange',
  'sex' :'male',
  'last_seen_address' : 'earth',
  'note' : '123',
  'photo' : '',
  'report_type':'lost'
}

var report2 = {
  'id' : 2,
  "pet_type":'dog2',
  'name' : 'name2',
  'breed' : 'breed2',
  'age' : 12,
  'color' : 'orange',
  'sex' :'male',
  'last_seen_address' : 'earth',
  'note' : '456',
  'photo' : '',
  'report_type':'lost'
}

var report3 = {
  'id' : 3,
  "pet_type":'dog2',
  'name' : 'name2',
  'breed' : 'breed2',
  'age' : 12,
  'color' : 'orange',
  'sex' :'male',
  'last_seen_address' : 'earth',
  'note' : '456',
  'photo' : '',
  'report_type':'found'
}

var message1 = {
  'photo1' : '',
  'body' : 'body1'
}
var message2 = {
  'photo1' : '',
  'body' : 'body2'
}
var renderLists = function(reports,template,list){
  var reportTemplate = $(template).html();
  var reportList = $(list);
  Mustache.parse(reportTemplate);
  var reportHTML = reports
    .map(function (report) {
      return Mustache.render(reportTemplate, report);
    }).join('');
  reportList.html(reportHTML);
}

var renderReport = function(report,tmp,target){
  report = report1;
  tmp = "#report-show";
  target = '#showReportLostData';
  var reportDetailsTmpl = $(tmp).html();
  var reportDetails = $(target);
  reportDetails.html(Mustache.render(reportDetailsTmpl,report));
}

var getLostReport = function(){
  renderReport(report1,"#report-show",'#showReportLostData');
}
var addReport = function(){
 renderLists([report1,report2],'#report-summary','#list-lost');
 renderLists([report1,report2],'#report-summary','#list-found');
}

var addMessage = function(){
 renderLists([message1,message2],'#message-summary','#list-message');
}