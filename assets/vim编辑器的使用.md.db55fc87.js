import{_ as t,o as d,c as r,O as a}from"./chunks/framework.dcea505e.js";const m=JSON.parse('{"title":"vim编辑器的使用","description":"","frontmatter":{},"headers":[],"relativePath":"vim编辑器的使用.md","filePath":"vim编辑器的使用.md"}'),e={name:"vim编辑器的使用.md"},h=a('<h1 id="vim编辑器的使用" tabindex="-1">vim编辑器的使用 <a class="header-anchor" href="#vim编辑器的使用" aria-label="Permalink to &quot;vim编辑器的使用&quot;">​</a></h1><h2 id="打开文件" tabindex="-1">打开文件 <a class="header-anchor" href="#打开文件" aria-label="Permalink to &quot;打开文件&quot;">​</a></h2><p>使用<code>vim 文件名</code> 即可打开文件，如果该文件不存在就会新建。</p><p>如果仅仅是删除、移动，而不增加内容，那么只在命令模式就可以完成操作。</p><h2 id="三种模式的切换" tabindex="-1">三种模式的切换 <a class="header-anchor" href="#三种模式的切换" aria-label="Permalink to &quot;三种模式的切换&quot;">​</a></h2><p>vim默认打开的模式为命令模式。</p><p>按 i 进入编辑模式，按 v/V 进入字符/整行选择模式，按 Esc 重新回到命令模式。</p><h2 id="命令模式下的操作" tabindex="-1">命令模式下的操作 <a class="header-anchor" href="#命令模式下的操作" aria-label="Permalink to &quot;命令模式下的操作&quot;">​</a></h2><p>（1） 单行删除、复制、粘贴</p><table><thead><tr><th>若要</th><th>依次按下</th></tr></thead><tbody><tr><td>整行删除</td><td>dd</td></tr><tr><td>整行复制</td><td>yy</td></tr><tr><td>粘贴到光标所在行的下一行/上一行</td><td>p/P</td></tr></tbody></table><p>（2）多行删除、复制、粘贴</p><table><thead><tr><th>若要</th><th>依次按下</th></tr></thead><tbody><tr><td>删除光标所在到最后一行/第一行</td><td>dG/d1G</td></tr><tr><td>复制光标所在行到最后一行/第一行</td><td>yG/y1G</td></tr></tbody></table><p>（3）行内删除、复制、粘贴</p><table><thead><tr><th>若要</th><th>依次按下</th></tr></thead><tbody><tr><td>删除光标所在到该行的行尾/行首</td><td>d$/d0</td></tr><tr><td>复制光标所在到该行的行尾/行首</td><td>y0/y$</td></tr></tbody></table><p>（4）查找、替换</p><table><thead><tr><th>若要</th><th>在底部输入命令</th></tr></thead><tbody><tr><td>从光标所在处正向查找</td><td>:/查找文本</td></tr><tr><td>从光标所在处逆向查找</td><td>:?查找文本</td></tr><tr><td>全部替换不确认：</td><td>:1,$s/旧文本/新文本/g</td></tr><tr><td>逐一确认是否替换（加c）</td><td>:1,$s/旧文本/新文本/gc</td></tr></tbody></table><p>说明：上面两种查找中，按 <code>n</code> 键查找下一个，按 <code>N</code> 键查找上一个。</p><p>（5）保存</p><table><thead><tr><th>若要</th><th>在底部输入命令</th></tr></thead><tbody><tr><td>保存</td><td>:w</td></tr><tr><td>强制退出而不保存</td><td>:q!</td></tr><tr><td>保存后退出（最常用）</td><td>:wq</td></tr><tr><td>另存为新文件</td><td>:w [filename]</td></tr><tr><td>读入另一个文件内容追加到光标所在行的下一行</td><td>:r [filename]</td></tr></tbody></table><h2 id="选择模式下的操作" tabindex="-1">选择模式下的操作 <a class="header-anchor" href="#选择模式下的操作" aria-label="Permalink to &quot;选择模式下的操作&quot;">​</a></h2><table><thead><tr><th>若要</th><th>按下</th></tr></thead><tbody><tr><td>进入上下左右字符选择模式</td><td>v</td></tr><tr><td>进入行选择模式</td><td>V</td></tr><tr><td>进入列选择模式</td><td>Ctrl+V</td></tr><tr><td>复制选择的内容</td><td>y</td></tr><tr><td>将选择的内容粘贴到游标之后</td><td>p</td></tr><tr><td>将选择的内容删除</td><td>d</td></tr></tbody></table><h2 id="插入内容" tabindex="-1">插入内容 <a class="header-anchor" href="#插入内容" aria-label="Permalink to &quot;插入内容&quot;">​</a></h2><p>在命令模式下按i进入编辑状态，此时编辑器下部显示<code>---insert---</code>。</p><p>编辑状态就和一般的编辑器一样，按键盘上的上下左右键可移动光标，按<code>Ctrl+C</code>可复制、按<code>Ctrl+V</code>可粘贴。</p><h2 id="回到命令模式" tabindex="-1">回到命令模式 <a class="header-anchor" href="#回到命令模式" aria-label="Permalink to &quot;回到命令模式&quot;">​</a></h2><p>按<code>Esc</code>键回到命令模式。</p><h2 id="常用按键汇总" tabindex="-1">常用按键汇总 <a class="header-anchor" href="#常用按键汇总" aria-label="Permalink to &quot;常用按键汇总&quot;">​</a></h2><table><thead><tr><th>模式</th><th>按键</th><th>含义</th></tr></thead><tbody><tr><td>命令模式</td><td>:w</td><td>保存更改，加 ! 强制保存</td></tr><tr><td>命令模式</td><td>:q</td><td>退出，加 ! 强制退出</td></tr><tr><td>命令模式</td><td>:wq</td><td>保存并退出，常用</td></tr><tr><td>命令模式</td><td>u</td><td>撤销</td></tr><tr><td>命令模式</td><td>dd</td><td>删除整行</td></tr><tr><td>命令模式</td><td>yy</td><td>复制整行</td></tr><tr><td>命令模式</td><td>p</td><td>粘贴到下一行</td></tr><tr><td>命令模式</td><td>v</td><td>进入单字符选择-- VISUAL --</td></tr><tr><td>命令模式</td><td>V</td><td>进入整行字符选择-- VISUAL --</td></tr><tr><td>-- VISUAL --</td><td>d</td><td>删除已选择的字符</td></tr><tr><td>-- VISUAL --</td><td>y</td><td>复制已选择的字符</td></tr><tr><td>-- VISUAL --</td><td>p</td><td>粘贴到光标后面</td></tr><tr><td>命令模式</td><td>:1,$s/旧文本/新文本/g</td><td>查找替换，/ 可以换成其它字符</td></tr><tr><td>命令模式</td><td>i</td><td>进入 -- INSERT --</td></tr></tbody></table>',28),o=[h];function i(l,c,n,b,s,p){return d(),r("div",null,o)}const y=t(e,[["render",i]]);export{m as __pageData,y as default};
