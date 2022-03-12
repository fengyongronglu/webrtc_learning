'use strict'

var audioSource = document.querySelector("select#audioSource");
var audioOutput = document.querySelector("select#audioOutput");
var videoSource = document.querySelector("select#videoSource");
var videoOutput = document.querySelector("select#viedoOutput");

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices)
{
	console.log("朝啊，不吊中使的浏览器");
}
else
{
	// 注意这里只提供函数指针就行了，不用函数名
	navigator.mediaDevices.enumerateDevices().then(GetDevices).catch(HandleError);
}


function GetDevices(deviceInfos)
{
	deviceInfos.forEach(
		function(deviceInfo)
		{
			console.log(deviceInfo.kind);
			console.log(deviceInfo.label);
			console.log(deviceInfo.deviceId);
			console.log(deviceInfo.groupId);

			// 下拉菜单的每一项都是一个option，表面上有一个text，李子里有一个value，实际上这个value是比较核心的
			var option = document.createElement("option")
			option.text = deviceInfo.label;
			option.value = deviceInfo.deviceId;
			if (deviceInfo.kind === "audioinput")
			{
				audioSource.appendChild(option);
			}
			else if (deviceInfo.kind === "audiooutput")
			{
				audioOutput.appendChild(option);
			}
			else if (deviceInfo.kind === "videoinput")
			{
				videoSource.appendChild(option);
			}
			else
			{
				// 为什么没有视频输出？因为是web应用，显示在网页上就完了，谈不上输出
				// console.log(deviceInfo.kind);
				videoOutput.appendChild(option);
			}
		});
}


function HandleError(error)
{
	console.log("能了些狗叼啊这都出错:", error);
}

