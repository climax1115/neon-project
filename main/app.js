
$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});

var conf = {
	"main_title" : "SRC",
	"pages" : [
		{
			"name" : "Home",
			"link" : "home",
		},		
		{
			"name" : "QManager-win32",
			"link" : "qmanager",
		},
		{
			"name" : "Vue.Js Project",
			"link" : "vue-proj",
		},
		{
			"name" : "Vue.Js Project",
			"link" : "vue-proj",
		},
		{
			"name" : "Vue.Js Project",
			"link" : "vue-proj",
		},
		{
			"name" : "Vue.Js Project",
			"link" : "vue-proj",
		},
	]
}

function onReady()
{
	conf.pages.forEach(newPage);
	navigate("home");
}

function navigate(page)
{
	$("#content").load(`pages/${page}.html`);
	$("#nav-label").html(`~/<a onclick='navigate("home")' href="#">root</a>/<a href="#">${page}</a>/`);
	$("title").text(`${conf.main_title}	//${page}`);
}

function newPage(page)
{
	$("#nav-links").append(`<li onclick="navigate('${page.link}')"><a href="#">${page.name}</a></li>`);

}

$(document).ready(onReady);

