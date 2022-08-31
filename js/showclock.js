var nexttrain = [];

function init()
{
	var status = 0;

	setInterval("blink()" , 1000);

	/* 宮の沢行平日パターン */
	nexttrain[0]=["特急","06:00","函館"];
	nexttrain[1]=["普通","06:02","新千歳空港"];
	nexttrain[2]=["普通","06:09","苫小牧"];
	nexttrain[3]=["快速","06:16","新千歳空港"];
	nexttrain[4]=["普通","06:20","東室蘭"];
	nexttrain[5]=["快速","06:31","新千歳空港"];
	nexttrain[6]=["快速","06:43","新千歳空港"];
	nexttrain[7]=["普通","06:46","苫小牧"];
	nexttrain[8]=["特急","06:52","函館"];
	nexttrain[9]=["特急","07:00","釧路"];
	nexttrain[10]=["快速","07:03","新千歳空港"];
	nexttrain[11]=["普通","07:08","苫小牧"];
	nexttrain[12]=["快速","07:16","新千歳空港"];
	nexttrain[13]=["普通","07:19","千歳"];
	nexttrain[14]=["Ｌ特急","07:30","東室蘭"];
	nexttrain[15]=["快速","07:33","新千歳空港"];
	nexttrain[16]=["快速","07:48","新千歳空港"];
	nexttrain[17]=["特急","07:54","帯広"];
	nexttrain[18]=["普通","07:56","苫小牧"];
	nexttrain[19]=["快速","08:05","新千歳空港"];
	nexttrain[20]=["普通","08:10","千歳"];
	nexttrain[21]=["快速","08:20","新千歳空港"];
	nexttrain[22]=["普通","08:27","苫小牧"];
	nexttrain[23]=["快速","08:35","新千歳空港"];
	nexttrain[24]=["特急","08:39","函館"];
	nexttrain[25]=["普通","08:42","千歳"];
	nexttrain[26]=["快速","08:50","新千歳空港"];
	nexttrain[27]=["特急","08:54","釧路"];
	nexttrain[28]=["快速","09:05","新千歳空港"];
	nexttrain[29]=["普通","09:10","千歳"];
	nexttrain[30]=["快速","09:20","新千歳空港"];
	nexttrain[31]=["普通","09:23","千歳"];
	nexttrain[32]=["特急","09:30","函館"];
	nexttrain[33]=["快速","09:35","新千歳空港"];
	nexttrain[34]=["普通","09:40","苫小牧"];
	nexttrain[35]=["快速","09:50","新千歳空港"];
	nexttrain[36]=["普通","09:56","千歳"];
	nexttrain[37]=["快速","10:05","新千歳空港"];
	nexttrain[38]=["快速","10:20","新千歳空港"];
	nexttrain[39]=["特急","10:24","帯広"];
	nexttrain[40]=["普通","10:27","千歳"];
	nexttrain[41]=["快速","10:35","新千歳空港"];
	nexttrain[42]=["特急","10:44","函館"];
	nexttrain[43]=["快速","10:50","新千歳空港"];
	nexttrain[44]=["普通","10:53","苫小牧"];
	nexttrain[45]=["快速","11:05","新千歳空港"];
	nexttrain[46]=["普通","11:12","千歳"];
	nexttrain[47]=["快速","11:20","新千歳空港"];
	nexttrain[48]=["Ｌ特急","11:24","室蘭"];
	nexttrain[49]=["普通","11:27","苫小牧"];
	nexttrain[50]=["快速","11:35","新千歳空港"];
	nexttrain[51]=["快速","11:50","新千歳空港"];
	nexttrain[52]=["特急","11:53","釧路"];
	nexttrain[53]=["普通","11:57","千歳"];
	nexttrain[54]=["快速","12:05","新千歳空港"];
	nexttrain[55]=["特急","12:15","函館"];
	nexttrain[56]=["快速","12:20","新千歳空港"];
	nexttrain[57]=["普通","12:28","苫小牧"];
	nexttrain[58]=["快速","12:35","新千歳空港"];
	nexttrain[59]=["普通","12:42","千歳"];
	nexttrain[60]=["快速","12:50","新千歳空港"];
	nexttrain[61]=["普通","12:57","苫小牧"];
	nexttrain[62]=["快速","13:05","新千歳空港"];
	nexttrain[63]=["普通","13:12","千歳"];
	nexttrain[64]=["快速","13:20","新千歳空港"];
	nexttrain[65]=["特急","13:32","函館"];
	nexttrain[66]=["快速","13:35","新千歳空港"];
	nexttrain[67]=["普通","13:42","苫小牧"];
	nexttrain[68]=["快速","13:50","新千歳空港"];
	nexttrain[69]=["Ｌ特急","13:55","室蘭"];
	nexttrain[70]=["快速","14:05","新千歳空港"];
	nexttrain[71]=["普通","14:09","千歳"];
	nexttrain[72]=["特急","14:16","釧路"];
	nexttrain[73]=["快速","14:20","新千歳空港"];
	nexttrain[74]=["普通","14:26","千歳"];
	nexttrain[75]=["快速","14:35","新千歳空港"];
	nexttrain[76]=["普通","14:38","千歳"];
	nexttrain[77]=["特急","14:44","函館"];
	nexttrain[78]=["快速","14:50","新千歳空港"];
	nexttrain[79]=["快速","15:05","新千歳空港"];
	nexttrain[80]=["普通","15:11","苫小牧"];
	nexttrain[81]=["快速","15:20","新千歳空港"];
	nexttrain[82]=["普通","15:27","千歳"];
	nexttrain[83]=["快速","15:35","新千歳空港"];
	nexttrain[84]=["特急","15:39","函館"];
	nexttrain[85]=["普通","15:42","千歳"];
	nexttrain[86]=["快速","15:50","新千歳空港"];
	nexttrain[87]=["Ｌ特急","16:02","室蘭"];
	nexttrain[88]=["快速","16:05","新千歳空港"];
	nexttrain[89]=["特急","16:08","帯広"];
	nexttrain[90]=["普通","16:12","苫小牧"];
	nexttrain[91]=["快速","16:20","新千歳空港"];
	nexttrain[92]=["普通","16:24","千歳"];
	nexttrain[93]=["特急","16:32","函館"];
	nexttrain[94]=["快速","16:35","新千歳空港"];
	nexttrain[95]=["普通","16:42","千歳"];
	nexttrain[96]=["快速","16:50","新千歳空港"];
	nexttrain[97]=["普通","16:57","苫小牧"];
	nexttrain[98]=["快速","17:05","新千歳空港"];
	nexttrain[99]=["普通","17:11","千歳"];
	nexttrain[100]=["快速","17:20","新千歳空港"];
	nexttrain[101]=["特急","17:24","釧路"];
	nexttrain[102]=["快速","17:35","新千歳空港"];
	nexttrain[103]=["普通","17:41","千歳"];
	nexttrain[104]=["快速","17:50","新千歳空港"];
	nexttrain[105]=["快速","18:05","新千歳空港"];
	nexttrain[106]=["特急","18:10","函館"];
	nexttrain[107]=["普通","18:12","苫小牧"];
	nexttrain[108]=["快速","18:20","新千歳空港"];
	nexttrain[109]=["普通","18:24","千歳"];
	nexttrain[110]=["特急","18:32","帯広"];
	nexttrain[111]=["快速","18:35","新千歳空港"];
	nexttrain[112]=["普通","18:42","千歳"];
	nexttrain[113]=["快速","18:50","新千歳空港"];
	nexttrain[114]=["Ｌ特急","18:54","室蘭"];
	nexttrain[115]=["普通","18:57","苫小牧"];
	nexttrain[116]=["快速","19:05","新千歳空港"];
	nexttrain[117]=["普通","19:12","千歳"];
	nexttrain[118]=["快速","19:20","新千歳空港"];
	nexttrain[119]=["普通","19:27","千歳"];
	nexttrain[120]=["快速","19:35","新千歳空港"];
	nexttrain[121]=["特急","19:40","釧路"];
	nexttrain[122]=["普通","19:43","苫小牧"];
	nexttrain[123]=["快速","19:50","新千歳空港"];
	nexttrain[124]=["特急","20:00","函館"];
	nexttrain[125]=["普通","20:05","新千歳空港"];
	nexttrain[126]=["普通","20:15","新千歳空港"];
	nexttrain[127]=["快速","20:25","新千歳空港"];
	nexttrain[128]=["普通","20:35","苫小牧"];
	nexttrain[129]=["快速","20:45","新千歳空港"];
	nexttrain[130]=["普通","20:55","新千歳空港"];
	nexttrain[131]=["特急","21:04","帯広"];
	nexttrain[132]=["普通","21:10","新千歳空港"];
	nexttrain[133]=["普通","21:24","苫小牧"];
	nexttrain[134]=["普通","21:38","新千歳空港"];
	nexttrain[135]=["普通","21:51","新千歳空港"];
	nexttrain[136]=["Ｌ特急","22:00","室蘭"];
	nexttrain[137]=["普通","22:08","千歳"];
	nexttrain[138]=["普通","22:28","千歳"];
	nexttrain[139]=["普通","22:46","苫小牧"];
	nexttrain[140]=["普通","23:10","苫小牧"];
	nexttrain[141]=["普通","23:34","千歳"];
	nexttrain[142]=["普通","23:59","千歳"];

	return;
}

function blink()
{
	status = ( status == 0 ) ? 1 : 0;
	
	var string;
	var date = new Date();  
	var dateformat ='yyyy/MM/dd(ddd)';  
	var timeformat = ( status == 0 ) ? 'HH:mm:ss' :  'HH mm ss';  
	var datestring = comDateFormat(date, dateformat); // 日付から文字列にする 
	var timestring = comDateFormat(date, timeformat); // 日付から文字列にする 

	document.getElementById("date").innerHTML = datestring ;
	document.getElementById("time").innerHTML = timestring ;


	currentnum = parseInt( comDateFormat(date, "HH:mm").replace(":","") );
	if( comDateFormat(date, "HH") == "00" )
	{
		currentnum += 2400;
	}

	for(var i=0;i<nexttrain.length;i++)
	{
		nexttrainnum = parseInt( nexttrain[i][1].replace(":","") );
		
		if( ( nexttrainnum - currentnum ) < 0 )
		{
			// 現在時刻が今比較してる時刻より手前になった場合
			// 次の列車はそれだよ 次の列車と次の次の列車がほしいな
			
			after = (i + 1) % nexttrain.length;
			document.getElementById("type1").innerHTML      = nexttrain[after][0];
			document.getElementById("direction1").innerHTML = nexttrain[after][2] ;
			document.getElementById("time1").innerHTML      = nexttrain[after][1];
			
			after = (after + 1) % nexttrain.length;
			document.getElementById("type2").innerHTML      = nexttrain[after][0] ;
			document.getElementById("direction2").innerHTML = nexttrain[after][2] ;
			document.getElementById("time2").innerHTML      = nexttrain[after][1] ;
			
		}
		/*else if( false )*/
		else if( ( nexttrainnum - currentnum ) == 0 )
		{
			// 今ちょうど来てる
			document.getElementById("type1").innerHTML = nexttrain[i][0] ;
			document.getElementById("direction1").innerHTML = nexttrain[i][2] ;
			document.getElementById("time1").innerHTML = nexttrain[i][1] ;
			
			document.getElementById("type2").innerHTML = " " ;
			document.getElementById("direction2").innerHTML = ( status == 0 ) ? "まもなく" : "発車します" ;
			document.getElementById("time2").innerHTML = " " ;
			
			break;
		}
		else
		{
			// 現在時刻が今比較している時刻より後の場合
			// その列車は行っちまってるよ
		}
	}


	return;
}
