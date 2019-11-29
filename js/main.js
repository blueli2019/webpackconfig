// import {name,showname} from './a';
// console.log({name,showname});
// const url= 'http://www.me.com?';
// const age=showname('age',18);
// const mainName=showname('name',name);
// function creatUrl(url,name,age){
//     return url+name+age;
//  }
//  creatUrl(url,mainName,age);
import $ from 'jquery';
console.log('显示正常1');
import {uniq} from 'lodash';
import moment from 'moment';
const arr=[2,1,1,2,5,5,64,55,64];
console.log(uniq(arr));
console.log('显示正常2');
const arr2=[5,6,88,55,22];
let arr3=uniq(arr2.concat(arr));
console.table(arr3);
$("#main").css("backgroundColor","red").height('200px').width('300px');