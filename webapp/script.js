import { Octokit } from "https://cdn.skypack.dev/octokit?dts";

const octokit = new Octokit();

var fullData = []

async function requestUserRepos(username){
    const res = await octokit.request(`GET /repos/${username}/Datasets/contents/Data`);
    await res.data.forEach(async (item) => {
        if(item.download_url===null){
            const res2 = await octokit.request(`GET /repos/${username}/Datasets/contents/Data/${item.name}`);
            await res2.data.forEach((item2)=>{
                fullData.push(item2);
            })
        }
        else{
            fullData.push(item);
        }
    })
}

function render(){
    document.getElementById("totalDatasets").innerHTML = fullData.length;
    var html = 
    fullData.map(function (item3) {
            return (
                '<div class="datasetItem">' +
                    `<i class="fa fa-database"></i><h2>${item3.name}</h2>` + '<br/>' + '<br/>' +
                    `<p>Path in github repository: ${item3.path}</p>` +
                    '<div class="actions">' +
                        `<a href=${item3.html_url} target="_blank"><i class="fab fa-github" style="font-size: 20px; color: #941cfc; cursor: pointer"></i></a>` +
                        `<a href=${item3.git_url} target="_blank"><p style="color: #d1bb59; cursor: pointer"><b>Json</b></p></a>` +
                        `<a href=${item3.download_url} target="_blank"><p style="color: green; cursor: pointer"><b>Raw</b></p></a>` +
                    '</div>' +
                '</div>'
            )      
        }).join('');
    document.getElementById("datasetContainer").innerHTML = html;
}


requestUserRepos('Clueless-Community');
setTimeout(render, 1000);
