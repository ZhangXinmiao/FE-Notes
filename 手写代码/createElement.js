// {/* <div id=”example”><p class=”slogan”>淘！你喜欢</p></div> */}
function create () {
    var dom = document.createElement('div');
    dom.id = 'example';
    var title = document.createElement('p');
    title.innerHTML = '淘！你喜欢';
    title.class = 'slogan';
    dom.appendChild(title);
    return dom;
}

function create1 () {
    var fragment = document.createDocumentFragment();
    var dom = document.createElement('div');
    dom.id = 'example';
    var title = document.createElement('p');
    title.innerHTML = '淘！你喜欢';
    title.class = 'slogan';
    dom.appendChild(title);
    fragment.appendChild(dom);
    return fragment;
}