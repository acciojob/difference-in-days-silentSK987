var dateDiffInDays = function (date1, date2) {
  //   write your code here 
	let y1=new Date(date1).getTime();
	let y2=new Date(date2).getTime();
	let diff= y2-y1;
	return Math.floor(diff/(1000*60*60*24));
	
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
