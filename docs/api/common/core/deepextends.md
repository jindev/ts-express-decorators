<header class="symbol-info-header">    <h1 id="deepextends">deepExtends</h1>    <label class="symbol-info-type-label function">Function</label>      </header>
<section class="symbol-info">      <table class="is-full-width">        <tbody>        <tr>          <th>Module</th>          <td>            <div class="lang-typescript">                <span class="token keyword">import</span> { deepExtends }                 <span class="token keyword">from</span>                 <span class="token string">"ts-express-decorators"</span>                            </div>          </td>        </tr>        <tr>          <th>Source</th>          <td>            <a href="https://romakita.github.io/ts-express-decorators/#//blob/v2.2.0/src/core/utils/index.ts#L0-L0">                core/utils/index.ts            </a>        </td>        </tr>                </tbody>      </table>    </section>

### Overview

<pre><code class="typescript-lang">function <span class="token function">deepExtends</span><span class="token punctuation">(</span>out<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> reducers?<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>collection<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span> => <span class="token keyword">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span></code></pre>

### Description

Get symbol name.
