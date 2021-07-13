console.log("this is the news website");

// Initialize the news parameters
let source = 'bbc-news';
let apiKey = 'e019c3cafb2244439c4304f7cc6b9403';

// grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element,index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                <b>Breaking News ${index+1}:</b>${element["title"]}
                                </button>
                            </h2>
                            </div>
                            <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body">${element["content"]}.<a href="${element['url']}" target="_blank">Read more here</a></div>
                            </div>
                     </div>`;
            newsHtml += news;

        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

// d093053d72bc40248998159804e0e67d