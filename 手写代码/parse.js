// 4：针对下面这段html片段实现一个简单 AST 解析方法
//const html = 
// '<div class="parent">
//   <div class="child" style="width:100px; height:200px; ">
//    	<a target="_blank" href="https://www.alipay.com" title="hahahah测试">测试</a>
//   </div>
// </div>';

// var html = `<div class="parent">
//   <div class="child" style="width:100px;height:200px;">
//    	<a target="_blank" href="https://www.alipay.com" title="hahahah测试">测试</a>
//   </div>
// </div>  `;

var html = `
  <div class="child" style="width:100px;height:200px;">
    <p class="text">hahah</p>
    <a target="_blank" href="https://www.alipay.com" title="hahahah测试"></a>
  </div>`;

// var html = '<a target="_blank" href="https://www.test.com" title="hahahah测试">测试</a>';

var startTag = /^\<[\S\w]+/;
var startTagEnd = /^\>/;
var endTag = /^\<\/[\S\w]+\>/;
var attrExp = /^\S*=\S*?(?=\>|\s)/;
var innerTextExp = /.*(?=\<)/;

function parse (html) {

    var tagStack = [];

    function parseStartTag () {
        var tag = html.match(startTag);
        console.log('parseStartTag', html)
        var tagName = tag[0].slice(1);
        var tagLength = tagName.length + 1;
        advance(tagLength);
        tagStack.push(tag);
        return tagName;
    }

    function parseStartTagEnd () {
        var hasMeetStartTagEnd = html.match(startTagEnd);
        if (hasMeetStartTagEnd) advance(1);
        return hasMeetStartTagEnd;
    }

    function parseAttrsStr () {
        var attrStrObj = html.match(attrExp);
        var attrStr = attrStrObj[0];
        advance(attrStr.length);
        return attrStr;
    }

    function getAttrObj (str) {
        var attrs = str.split('=');
        return {
            [attrs[0]] : attrs[1]
        };
    }

    function parseAttrs () {
        var attrs = [];
        while (!parseStartTagEnd()) {
            var attrStr = parseAttrsStr();
            attrs.push(getAttrObj(attrStr));
        }

        return attrs;
    }

    function parseInnerText () {
        console.log('parseInnerText', html)
        var innerTextObj = html.match(innerTextExp);
        if (!innerTextObj || html.indexOf('<') === 0) return '';
        var innerText = innerTextObj[0];
        advance(innerText.length);
        return innerText;
    }

    function parseEndTag (tagName) {
        var regStr = '\\<\\/' + tagName + '\\>';
        var endTagExp = new RegExp(regStr);
        var endTagObj = html.match(endTagExp);
        console.log('parseEndTag', html, endTagExp, endTagObj);
        var endTag = endTagObj[0];
        removeTagEnd(endTag.length);
    }
    
    function advance (n) {
        html = (html || '').substring(n).trim();
    }

    function removeTagEnd (n) {
        html = html.slice(0, html.length - n).trim();
        console.log('removeTagEnd', html)
    }

    html = html.trim();
    // node = {
    //     tag: '',
    //     attrs: [],
    //     innerText: ''
    // };
    // node.tag = parseStartTag(html);
    // node.attrs = parseAttrs(html);
    // node.innerText = parseInnerText(html);
    // return node
    // return ast;

    // while(html) {
        if (!html) return [];
        var currentTagName = parseStartTag(html);
        var attrs = parseAttrs();
        parseStartTagEnd();
        var children = [];
        if (html.indexOf('<') > -1) {
            parseStartTag();
            var attr1 = parseAttrs();
            parseStartTagEnd();
            var text = parseInnerText();
            var tag = tagStack.pop();
            parseEndTag(tag);
            children.push({
                tag,
                attrs: attr1,
                innerText: text,
                children: []
            });
        }
        var root = {
            tag: currentTagName,
            attrs: parseAttrs(),
            innerText: parseInnerText(),
            // children: parse(html)
        };
    // }

    return root;
}

var ast = parse(html);
console.log(ast);

