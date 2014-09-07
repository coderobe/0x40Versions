window.onload = fetch;
function fetch(){
    microHues.init();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if (xhr.status == 200){
                try{
                    parse(xhr.responseText);
                }catch(e){
                    alert("FAIL: Couldn't parse listing JSON!");
                    console.log(e);
                    return;
                }
            }
            else{
                document.getElementById("progress").innerText = "failed!";
            }
        }
    }
    
    if (xhr.addEventListener && xhr.upload){
        xhr.addEventListener("progress", function(evt) {
            if (evt.lengthComputable) {
                var complete = evt.loaded / evt.total;
                document.getElementById("progress").innerText = Math.round(complete*100)+"%";
            }
        }, false);
    }
    
    xhr.open("GET", "list.json", true);
    xhr.send();
}

function parse(json){
    json = JSON.parse(json);
    document.getElementById("status").style.display = "none";

    var template =
        "<li class='item'>"+
            "<a target='_blank' href='%url%'>"+
                "<div class='name'>%name%</div>"+
                "<div class='meta'>"+
                    "<span class='size'>%size%</span>"+
                    "<span class='author'>%author%</span>"+
                    "<span class='count'>%count%</span>"+
                "</div>"+
            "</a>"+
        "</li>";

    var html,
        item;
    for (var i=0;i<json.length;i++){
        html = template;
        item = json[i];

        html = html
            .replace("%name%", item.name)
            .replace("%size%", (item.size/(1024*1024)).toFixed(1)+"MB")
            .replace("%author%", item.author)
            .replace("%url%", item.url)
        document.getElementById("files").innerHTML += html;
    }

    prepare();
}

function prepare(){
    var options = {
        valueNames: ['name'],
        searchClass: 'file-filter'
    };

    var fileList = new List('body', options);
}