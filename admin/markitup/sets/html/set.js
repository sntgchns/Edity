// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2011 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Html tags
// http://en.wikipedia.org/wiki/html
// ----------------------------------------------------------------------------
// Basic set. Feel free to add more tags
// ----------------------------------------------------------------------------
var myHtmlSettings = {
	nameSpace:       "html", // Useful to prevent multi-instances CSS conflict
	onShiftEnter:  	{keepDefault:false, replaceWith:'<br />\n'},
	onCtrlEnter:  	{keepDefault:false, openWith:'\n<p>', closeWith:'</p>'},
	onTab:    		{keepDefault:false, replaceWith:'    '},
	markupSet:  [
		{name:'Heading 1', key:'1', openWith:'<h1(!( class="[![Class]!]")!)>', closeWith:'</h1>', placeHolder:'Your title here...' },
        {name:'Heading 2', key:'2', openWith:'<h2(!( class="[![Class]!]")!)>', closeWith:'</h2>', placeHolder:'Your title here...' },
        {name:'Heading 3', key:'3', openWith:'<h3(!( class="[![Class]!]")!)>', closeWith:'</h3>', placeHolder:'Your title here...' },
        {name:'Heading 4', key:'4', openWith:'<h4(!( class="[![Class]!]")!)>', closeWith:'</h4>', placeHolder:'Your title here...' },
        {name:'Heading 5', key:'5', openWith:'<h5(!( class="[![Class]!]")!)>', closeWith:'</h5>', placeHolder:'Your title here...' },
        {name:'Heading 6', key:'6', openWith:'<h6(!( class="[![Class]!]")!)>', closeWith:'</h6>', placeHolder:'Your title here...' },
        {name:'Paragraph', openWith:'<p(!( class="[![Class]!]")!)>', closeWith:'</p>'  },
        {separator:'---------------' }, 	
		{name:'Bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)' },
		{name:'Italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)'  },
		{name:'Stroke through', key:'S', openWith:'<del>', closeWith:'</del>' },
		{separator:'---------------' },
		{name:'Bulleted List', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ul>\n', closeBlockWith:'\n</ul>'},
		{name:'Numeric List', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ol>\n', closeBlockWith:'\n</ol>'},
		{name:'List Item', openWith:'    <li>', closeWith:'</li>'},
		{separator:'---------------' },
		{name:'Picture', key:'P', replaceWith:'<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" />' },
		{name:'Link', key:'L', openWith:'<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Your text to link...' },
	]
}
