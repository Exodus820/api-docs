import{_ as a,c as e,o as t,a as r}from"./app.4953007a.js";const y=JSON.parse('{"title":"Class: Character","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"Accessors","slug":"accessors","link":"#accessors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[{"level":3,"title":"player","slug":"player","link":"#player","children":[]}]},{"level":2,"title":"Accessors","slug":"accessors-1","link":"#accessors-1","children":[{"level":3,"title":"airControl","slug":"aircontrol","link":"#aircontrol","children":[]},{"level":3,"title":"animationStance","slug":"animationstance","link":"#animationstance","children":[]},{"level":3,"title":"appearance","slug":"appearance","link":"#appearance","children":[]},{"level":3,"title":"baseShadowLocationOffset","slug":"baseshadowlocationoffset","link":"#baseshadowlocationoffset","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"addMoveInput","slug":"addmoveinput","link":"#addmoveinput","children":[]},{"level":3,"title":"attach","slug":"attach","link":"#attach","children":[]}]}],"relativePath":"test/interface.md"}'),s={name:"test/interface.md"},c=r(`<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/Gameplay.html">Gameplay</a> / <a href="./../modules/Gameplay.Gameplay.html">Gameplay</a> / Character</p><h1 id="class-character" tabindex="-1">Class: Character <a class="header-anchor" href="#class-character" aria-hidden="true">#</a></h1><h4 id="extend-characterbase" tabindex="-1">extend <a href="./Gameplay.Gameplay.CharacterBase.html"><code>CharacterBase</code></a> <a class="header-anchor" href="#extend-characterbase" aria-hidden="true">#</a></h4><p><br><strong><code>简介</code></strong></p><ul><li>是人形角色的控制类</li><li>角色是具有一套行为能力的模型。游戏世界中，角色分为非玩家角色和玩家角色。</li><li>【玩家角色】：由玩家控制的角色，大部分的玩家角色都是游戏剧情的关键或是主角。</li><li>【非玩家角色】：非玩家角色也被称为NPC，指的是在游戏中不受真人玩家控制的游戏角色。NPC一般由计算机人工智能控制，拥有一套行为模式的角色。NPC通常分为剧情NPC，战斗NPC，服务NPC以及兼具多种功能的NPC等。</li><li>Character拥有CharacterBase的所有功能，并且额外附带了CameraSystem，是由玩家控制的角色，通常被内置的输入系统所操作</li><li>你可以在场景的Player面板中修改Character的初始化配置</li></ul><p><br><strong><code>如何获取</code></strong></p><ul><li>Character可以通过<a href="./../modules/Player.html">Player</a>对象获取<code>player.character</code></li><li>通过getAllPlayers可以获取到</li><li>Character无法被用户主动实例化，根据当前Player的数量由世界自动生成，不可通过new创建</li></ul><p><br><strong><code>注意事项</code></strong></p><ul><li>频繁更改location、rotation等可能会导致性能问题</li><li>部分API是仅单端可调用，部分是自动同步双端，请参考具体的函数说明</li><li>从019版本开始，Character的移动逻辑会受到客户端玩家的控制，尽量不要在服务器上去设置玩家角色的位置、角度，这导致会多一次RPC的调用，并且多出一次网络帧的延迟</li><li>后续版本会提供更多可选择的移动逻辑，你可以根据不同游戏的特性来选择这些</li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.Character.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.Character.html#player">player</a></li></ul><h3 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.Character.html#aircontrol">airControl</a></li><li><a href="./Gameplay.Gameplay.Character.html#animationstance">animationStance</a></li><li><a href="./Gameplay.Gameplay.Character.html#appearance">appearance</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.Character.html#addmoveinput">addMoveInput</a></li><li><a href="./Gameplay.Gameplay.Character.html#attach">attach</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new Character</strong>()</p><h4 id="extend-characterbase-constructor" tabindex="-1">extend <a href="./Gameplay.Gameplay.CharacterBase.html">CharacterBase</a>.<a href="./Gameplay.Gameplay.CharacterBase.html#constructor">constructor</a> <a class="header-anchor" href="#extend-characterbase-constructor" aria-hidden="true">#</a></h4><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h2><h3 id="player" tabindex="-1">player <a class="header-anchor" href="#player" aria-hidden="true">#</a></h3><h4 id="extend-characterbase-player" tabindex="-1">extend <a href="./Gameplay.Gameplay.CharacterBase.html">CharacterBase</a>.<a href="./Gameplay.Gameplay.CharacterBase.html#player">player</a> <a class="header-anchor" href="#extend-characterbase-player" aria-hidden="true">#</a></h4><p>• <strong>player</strong>: <a href="./Gameplay.Gameplay.Player.html"><code>Player</code></a></p><p>玩家对象</p><h2 id="accessors-1" tabindex="-1">Accessors <a class="header-anchor" href="#accessors-1" aria-hidden="true">#</a></h2><h3 id="aircontrol" tabindex="-1">airControl <a class="header-anchor" href="#aircontrol" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>airControl</strong>(): <code>number</code></p><h4 id="extend-characterbase-aircontrol" tabindex="-1">extend CharacterBase.airControl <a class="header-anchor" href="#extend-characterbase-aircontrol" aria-hidden="true">#</a></h4><p>角色在空中时, 控制水平方向移动的灵活度</p><div class="warning custom-block"><p class="custom-block-title">Precautions</p><p>范围:0~1, 0 表示不能控制, 1 表示能按地面最大移动速率完全控制</p></div><p>• <code>set</code> <strong>airControl</strong>(<code>InAirControl</code> : <code>number</code>): <code>void</code></p><h4 id="extend-characterbase-aircontrol-1" tabindex="-1">extend CharacterBase.airControl <a class="header-anchor" href="#extend-characterbase-aircontrol-1" aria-hidden="true">#</a></h4><p>角色在空中时, 控制水平方向移动的灵活度</p><div class="warning custom-block"><p class="custom-block-title">Precautions</p><p>范围:0~1, 0 表示不能控制, 1 表示能按地面最大移动速率完全控制</p></div><h3 id="animationstance" tabindex="-1">animationStance <a class="header-anchor" href="#animationstance" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>animationStance</strong>(): <code>string</code></p><h4 id="extend-characterbase-animationstance" tabindex="-1">extend CharacterBase.animationStance <a class="header-anchor" href="#extend-characterbase-animationstance" aria-hidden="true">#</a></h4><p>动画姿态</p><div class="warning custom-block"><p class="custom-block-title">Precautions</p><p>动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的 guid 进行动画姿态的切换, 传入空字符串时, 清除动画姿态</p></div><p>• <code>set</code> <strong>animationStance</strong>(<code>StanceGuid</code> : <code>string</code>): <code>void</code></p><h4 id="extend-characterbase-animationstance-1" tabindex="-1">extend CharacterBase.animationStance <a class="header-anchor" href="#extend-characterbase-animationstance-1" aria-hidden="true">#</a></h4><p>动画姿态</p><div class="warning custom-block"><p class="custom-block-title">Precautions</p><p>动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的 guid 进行动画姿态的切换, 传入空字符串时, 清除动画姿态</p></div><hr><h3 id="appearance" tabindex="-1">appearance <a class="header-anchor" href="#appearance" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>appearance</strong>(): <a href="./Gameplay.Gameplay.SomatotypeBase.html"><code>SomatotypeBase</code></a></p><h4 id="extend-characterbase-appearance" tabindex="-1">extend CharacterBase.appearance <a class="header-anchor" href="#extend-characterbase-appearance" aria-hidden="true">#</a></h4><p>当前外观修改对象</p><hr><h3 id="baseshadowlocationoffset" tabindex="-1">baseShadowLocationOffset <a class="header-anchor" href="#baseshadowlocationoffset" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>baseShadowLocationOffset</strong>(): <a href="./Type.Type.Vector2.html"><code>Vector2</code></a></p><h4 id="extend-characterbase-baseshadowlocationoffset" tabindex="-1">extend CharacterBase.baseShadowLocationOffset <a class="header-anchor" href="#extend-characterbase-baseshadowlocationoffset" aria-hidden="true">#</a></h4><p>模拟阴影相对于角色脚底中心的位置偏移</p><p>• <code>set</code> <strong>baseShadowLocationOffset</strong>(<code>InLocationOffset</code> : <a href="./Type.Type.Vector2.html"><code>Vector2</code></a>): <code>void</code></p><h4 id="extend-characterbase-baseshadowlocationoffset-1" tabindex="-1">extend CharacterBase.baseShadowLocationOffset <a class="header-anchor" href="#extend-characterbase-baseshadowlocationoffset-1" aria-hidden="true">#</a></h4><p>模拟阴影相对于角色脚底中心的位置偏移</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="addmoveinput" tabindex="-1">addMoveInput <a class="header-anchor" href="#addmoveinput" aria-hidden="true">#</a></h3><p>▸ <strong>addMoveInput</strong>(<code>direction</code> : <a href="./Type.Type.Vector.html"><code>Vector</code></a>): <code>void</code></p><h4 id="extend-characterbase-addmoveinput" tabindex="-1">extend <a href="./Gameplay.Gameplay.CharacterBase.html">CharacterBase</a>.<a href="./Gameplay.Gameplay.CharacterBase.html#addmoveinput">addMoveInput</a> <a class="header-anchor" href="#extend-characterbase-addmoveinput" aria-hidden="true">#</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">direction</span><span style="color:#676E95;"> usage:输入的方向</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#82AAFF;">addMoveInput</span><span style="color:#A6ACCD;">(direction: Type</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Vector): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>沿着给定的方向向量添加移动输入</p><div class="warning custom-block"><p class="custom-block-title">Precautions</p><p>效果受 movementDirection 属性影响</p></div><hr><h3 id="attach" tabindex="-1">attach <a class="header-anchor" href="#attach" aria-hidden="true">#</a></h3><p>▸ <strong>attach</strong>(<code>gameObject</code> : <code>GameObject</code>, <code>slotName</code> : <a href="./../enums/Gameplay.Gameplay.SlotType.html"><code>SlotType</code></a>): <code>void</code></p><h4 id="extend-characterbase-attach" tabindex="-1">extend <a href="./Gameplay.Gameplay.CharacterBase.html">CharacterBase</a>.<a href="./Gameplay.Gameplay.CharacterBase.html#attach">attach</a> <a class="header-anchor" href="#extend-characterbase-attach" aria-hidden="true">#</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">gameObject</span><span style="color:#676E95;"> usage:物体</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">slotName</span><span style="color:#676E95;"> usage:插槽类型</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#82AAFF;">attach</span><span style="color:#A6ACCD;">(gameObject: Core</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">GameObject</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> slotName: SlotType): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>将物体附着到人物角色的指定插槽</p>`,72),o=[c];function n(l,i,d,h,p,m){return t(),e("div",null,o)}const f=a(s,[["render",n]]);export{y as __pageData,f as default};