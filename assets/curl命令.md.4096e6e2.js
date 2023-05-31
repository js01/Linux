import{_ as a,o as t,c as s,O as e}from"./chunks/framework.dcea505e.js";const m=JSON.parse('{"title":"curl命令","description":"","frontmatter":{},"headers":[],"relativePath":"curl命令.md","filePath":"curl命令.md"}'),o={name:"curl命令.md"},l=e('<h1 id="curl命令" tabindex="-1">curl命令 <a class="header-anchor" href="#curl命令" aria-label="Permalink to &quot;curl命令&quot;">​</a></h1><p>curl命令遵循http协议，作用是发出网络请求，输出网络响应。默认输出body。</p><p>curl命令的基本用法如下：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ur</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>默认会输出响应体的body部分。</p><p>加上-i选项会输出头部和body。使用-I选项只输出头部。</p><p>加上-H &quot;Content-Type: application/json&quot;，会在请求中加入头部信息。</p>',7),c=[l];function n(p,r,_,i,u,d){return t(),s("div",null,c)}const y=a(o,[["render",n]]);export{m as __pageData,y as default};
