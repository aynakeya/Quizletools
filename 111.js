var defdict = new Array();
var wordict = new Array();
var tags=document.getElementsByTagName("span");
var index = 0;
for(var i in tags){  
    if(tags[i].nodeType==1){  
        if(tags[i].getAttribute("class") == "qDef lang-en TermText"){
            def=tags[i].innerHTML;
        }; 
        if(tags[i].getAttribute("class") == "qWord lang-en TermText"){
            word=tags[i].innerHTML;
            defdicts[def] = word;
            wordicts[word] = def;
            index++;
        };   
    }; 
};

for(var i = 0; i<30;i++){
	//dict3[dict1[i]] = dict2[i];
	sttty = sttty+"\""+dict1[i]+"\""+":"+"\""+dict2[i]+"\""+",";
};

var beforestr = ""
function asd(){
	var tags=document.getElementsByTagName("*");
	var newtasg = document.getElementsByTagName("textarea")
	var writetext;
	for(var i in tags){  
		if(tags[i].nodeType==1){  
			if(tags[i].getAttribute("class") == "UITextarea-textarea lang-en TermText"){
    		    writetext = tags[i];
            };
            if (writetext == ""){
            	console.log("Not Found Textarea")
            	var a =setTimeout(asd,2000);
            	break;
            }
            else{
            	if(tags[i].getAttribute("class") == "qDef lang-en TermText"){
            		if (beforestr == tags[i].innerHTML){
            			console.log("wait for next word")
        		        var a =setTimeout(asd,2000);
        		        break;
        	        }
        	        else{
        		        beforestr = dicts[tags[i].innerHTML]
                        writetext.value = dicts[tags[i].innerHTML];
                        writetext = "";
                        var a =setTimeout(asd,2000);
                        break;
        	        };
        	    }; 
            };
        };
    };
};

var currentanswer = "init";
function autospelling(){
	var spantags=document.getElementsByTagName("span");
	var textareatags = document.getElementsByTagName("textarea");
	if (textareatags.length != 1){
		console.log("didn't find the proper textarea");
		var a = setTimeout(autospelling,2000);
		return;
	}
	else{
		if (textareatags[0].getAttribute("class") == "UITextarea-textarea lang-en TermText"){
			console.log("found textarea");
			var textarea = textareatags[0];
		}
		else{
			console.log("didn't find the proper textarea");
			var a = setTimeout(autospelling,2000);
		    return;
		};
	}
	for(var i in spantags){  
		if(spantags[i].nodeType==1){  
			if(spantags[i].getAttribute("class") == "qDef lang-en TermText"){
            	if (currentanswer == textarea.value){
            		console.log("wait for next word.");
        		    var a =setTimeout(autospelling,1000);
        		    return;
        	    }
        	    else{
        	    	event = document.createEvent("KeyboardEvent");
        	    	//初始化事件对象
        	    	event.initKeyboardEvent("keydown", true, true, document.defaultView, "a",0, "Shift", 0);
        		    currentanswer = worddicts[spantags[i].innerHTML]
        		    console.log("enter the word to the textarea.",currentanswer);
                    textarea.value = currentanswer;
                    textarea.dispatchEvent(event);
                    var a =setTimeout(autospelling,1000);
                    return;
        	    };
        	}; 
        };
    };
};

function autodotest(){
    var testsectionum=new Array()
    var testsection=new Array()
    var titles = document.getElementsByTagName("h4");
    var index = 0;
    for (var i in titles){
        console.log(isNaN(parseInt(titles[i].innerText)));
        if (! isNaN(parseInt(titles[i].innerText)))
            break;
        testsectionum[index] = parseInt(titles[i].innerText);
        index++;
    };
    var inputags = document.getElementsByTagName("input");
    for (var i in inputags){
        if 
    };
};







































