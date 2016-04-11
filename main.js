marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: false,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: false,
  smartypants: false
});

var MarkdownReader = React.createClass({
  render: function () {
    var outStuff = marked(document.getElementById('input').value);
    return <div dangerouslySetInnerHTML={{__html: outStuff}} />;
  }
});

setInterval(function() {
  ReactDOM.render(
    <MarkdownReader />,
    document.getElementById('output')
  );
}, 40);
