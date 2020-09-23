let semanticTags = ['IMG', 'HTML', 'HEAD', 'BODY', 'DIV', 'H1', 'P', 'HEADER', 'NAV', 'ARTICLE', 'SECTION', 'ASIDE', 'FOOTER', 'MAIN']
let tagsWithoutChildren = ['IMG']

let documentChildren = document.children
let template = ''

function html(children) {

    for(var i = 0; i < children.length; i++) {

        var currentChild = children[i]
        let currentChildName = currentChild.nodeName

        if(semanticTags.includes(currentChildName)) {
            template += `\n<${currentChildName.toLowerCase()}>`

            html(currentChild.children)

            template += (tagsWithoutChildren.includes(currentChildName)) ? '\n' : `</${currentChildName.toLowerCase()}>\n`
            
        } else {
            html(currentChild.children)
        }

    }
}

html(documentChildren)
console.log(template)