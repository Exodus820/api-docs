[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsIntegratedMover

# PhysicsIntegratedMover <Badge type="tip" text="Class" /> <Score text="PhysicsIntegratedMover" />

运动器组件

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`PhysicsIntegratedMover`**

## Table of contents

| Properties |
| :-----|
| **[onLinearEnable](Gameplay.PhysicsIntegratedMover.md#onlinearenable)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 平移运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件|
| **[onLinearReturn](Gameplay.PhysicsIntegratedMover.md#onlinearreturn)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 平移运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件|
| **[onLinearStart](Gameplay.PhysicsIntegratedMover.md#onlinearstart)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 平移运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件|
| **[onRotationEnable](Gameplay.PhysicsIntegratedMover.md#onrotationenable)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 旋转运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件|
| **[onRotationReturn](Gameplay.PhysicsIntegratedMover.md#onrotationreturn)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 旋转运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件|
| **[onRotationStart](Gameplay.PhysicsIntegratedMover.md#onrotationstart)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 旋转运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件|
| **[onScaleEnable](Gameplay.PhysicsIntegratedMover.md#onscaleenable)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 缩放运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件|
| **[onScaleReturn](Gameplay.PhysicsIntegratedMover.md#onscalereturn)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 缩放运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件|
| **[onScaleStart](Gameplay.PhysicsIntegratedMover.md#onscalestart)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 缩放运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件|
| **[onSwingEnable](Gameplay.PhysicsIntegratedMover.md#onswingenable)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 摆动：延迟启动回调|

| Accessors |
| :-----|
| **[constraintTarget1](Gameplay.PhysicsIntegratedMover.md#constrainttarget1)**(): `string` <br> 获取约束对象(兼容旧项目)|
| **[enable](Gameplay.PhysicsIntegratedMover.md#enable)**(): `boolean` <br> 获取启用状态|
| **[linearDelayStartTime](Gameplay.PhysicsIntegratedMover.md#lineardelaystarttime)**(): `number` <br> 获取延时启动平移运行时间|
| **[linearRepeat](Gameplay.PhysicsIntegratedMover.md#linearrepeat)**(): `boolean` <br> 获取平移重复运动状态|
| **[linearRepeatDelay](Gameplay.PhysicsIntegratedMover.md#linearrepeatdelay)**(): `number` <br> 获取平移到达后停顿时间|
| **[linearRepeatTime](Gameplay.PhysicsIntegratedMover.md#linearrepeattime)**(): `number` <br> 获取平移单程运动时间|
| **[linearReturnDelay](Gameplay.PhysicsIntegratedMover.md#linearreturndelay)**(): `number` <br> 获取平移返程后停顿时间|
| **[linearSpeed](Gameplay.PhysicsIntegratedMover.md#linearspeed)**(): [`Vector`](Type.Vector.md) <br> 获取平移速度大小|
| **[rotationDelayStartTime](Gameplay.PhysicsIntegratedMover.md#rotationdelaystarttime)**(): `number` <br> 获取延时启动旋转运行时间|
| **[rotationRepeat](Gameplay.PhysicsIntegratedMover.md#rotationrepeat)**(): `boolean` <br> 获取旋转重复运动状态|
| **[rotationRepeatDelay](Gameplay.PhysicsIntegratedMover.md#rotationrepeatdelay)**(): `number` <br> 获取旋转到达后停顿时间|
| **[rotationRepeatTime](Gameplay.PhysicsIntegratedMover.md#rotationrepeattime)**(): `number` <br> 获取旋转单程运动时间|
| **[rotationReturnDelay](Gameplay.PhysicsIntegratedMover.md#rotationreturndelay)**(): `number` <br> 获取旋转返程后停顿时间|
| **[rotationSpeed](Gameplay.PhysicsIntegratedMover.md#rotationspeed)**(): [`Vector`](Type.Vector.md) <br> 获取旋转速度大小|
| **[scaleDelayStartTime](Gameplay.PhysicsIntegratedMover.md#scaledelaystarttime)**(): `number` <br> 获取延时启动缩放运行时间|
| **[scaleRepeat](Gameplay.PhysicsIntegratedMover.md#scalerepeat)**(): `boolean` <br> 获取缩放重复运动状态|
| **[scaleRepeatDelay](Gameplay.PhysicsIntegratedMover.md#scalerepeatdelay)**(): `number` <br> 获取缩放到达后停顿时间|
| **[scaleRepeatTime](Gameplay.PhysicsIntegratedMover.md#scalerepeattime)**(): `number` <br> 获取缩放单程运动时间|
| **[scaleReturnDelay](Gameplay.PhysicsIntegratedMover.md#scalereturndelay)**(): `number` <br> 获取缩放返程后停顿时间|
| **[scaleSpeed](Gameplay.PhysicsIntegratedMover.md#scalespeed)**(): [`Vector`](Type.Vector.md) <br> 获取缩放速度大小|
| **[smooth](Gameplay.PhysicsIntegratedMover.md#smooth)**(): `boolean` <br> 获取平滑状态|
| **[swingAngle](Gameplay.PhysicsIntegratedMover.md#swingangle)**(): `number` <br> 获取摆动最大角度|
| **[swingDelayStartTime](Gameplay.PhysicsIntegratedMover.md#swingdelaystarttime)**(): `number` <br> 获取延时启动摆动运行时间|
| **[swingSpeed](Gameplay.PhysicsIntegratedMover.md#swingspeed)**(): [`Vector`](Type.Vector.md) <br> 获取摆动运动速度|


::: details 点击查看继承
| Accessors |
| :-----|
| **[forwardVector](Gameplay.GameObject.md#forwardvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[lockStatus](Gameplay.GameObject.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.GameObject.md#netstatus)**(): [`NetStatus`](../enums/Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.GameObject.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.GameObject.md#relativelocation)**(): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.GameObject.md#relativerotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.GameObject.md#relativescale)**(): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.GameObject.md#rightvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.GameObject.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.GameObject.md#transform)**(): [`Transform`](Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.GameObject.md#upvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.GameObject.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.GameObject.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.GameObject.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachComponent](Gameplay.GameObject.md#attachcomponent)**(`Component`, `boolean`): `boolean` <br> 附加组件|
| **[attachToGameObject](Gameplay.GameObject.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.GameObject.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.GameObject.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachComponent](Gameplay.GameObject.md#detachcomponent)**(`string` \): `void` <br> 移除组件|
| **[detachFromGameObject](Gameplay.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.GameObject.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.GameObject.md#getbounds)**(`boolean`, [`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.GameObject.md#getchildbyguid)**(`string`): `undefined` \| `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.GameObject.md#getchildbyname)**(`string`): `undefined` \| `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.GameObject.md#getchildren)**(): `undefined` \| `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.GameObject.md#getchildrenboxcenter)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.GameObject.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.GameObject.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.GameObject.md#gettransform)**([`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.GameObject.md#getupvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.GameObject.md#getworldlocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.GameObject.md#getworldrotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.GameObject.md#getworldscale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](Gameplay.GameObject.md#onreplicated)**(`string`, `unknown`, `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](Gameplay.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.GameObject.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.GameObject.md#ready)**(): `Promise`<[`GameObject`](Gameplay.GameObject.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.GameObject.md#setcollision)**([`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.GameObject.md#setlocationandrotation)**([`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.GameObject.md#setrelativelocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.GameObject.md#setrelativerotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.GameObject.md#setrelativescale)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.GameObject.md#settransform)**([`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.GameObject.md#setvisibility)**([`PropertyStatus`](../enums/Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.GameObject.md#setworldlocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.GameObject.md#setworldrotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.GameObject.md#setworldscale)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.GameObject.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.GameObject.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.GameObject.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|
:::


## Properties

### onLinearEnable <Score text="onLinearEnable" /> 

• **onLinearEnable**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

平移运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件

___

### onLinearReturn <Score text="onLinearReturn" /> 

• **onLinearReturn**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

平移运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件

___

### onLinearStart <Score text="onLinearStart" /> 

• **onLinearStart**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

平移运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件

___

### onRotationEnable <Score text="onRotationEnable" /> 

• **onRotationEnable**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

旋转运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件

___

### onRotationReturn <Score text="onRotationReturn" /> 

• **onRotationReturn**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

旋转运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件

___

### onRotationStart <Score text="onRotationStart" /> 

• **onRotationStart**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

旋转运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件

___

### onScaleEnable <Score text="onScaleEnable" /> 

• **onScaleEnable**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

缩放运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件

___

### onScaleReturn <Score text="onScaleReturn" /> 

• **onScaleReturn**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

缩放运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件

___

### onScaleStart <Score text="onScaleStart" /> 

• **onScaleStart**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

缩放运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件

___

### onSwingEnable <Score text="onSwingEnable" /> 

• **onSwingEnable**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

摆动：延迟启动回调

## Accessors

### constraintTarget1 <Score text="constraintTarget" /> 

• `get` **constraintTarget1**(): `string`

获取约束对象(兼容旧项目)

#### Returns

`string`

• `set` **constraintTarget1**(`GUID`): `void`

设置约束对象(兼容旧项目，若有必要请使用attachToGameObject)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 约束对象的GUID |


___

### enable <Score text="enable" /> 

• `get` **enable**(): `boolean`

获取启用状态

#### Returns

`boolean`

启用状态

• `set` **enable**(`newEnable`): `void`

设置启用状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newEnable` | `boolean` | 启用状态 |



### linearDelayStartTime <Score text="linearDelayStartTime" /> 

• `get` **linearDelayStartTime**(): `number`

获取延时启动平移运行时间

#### Returns

`number`

延时启动时间

• `set` **linearDelayStartTime**(`newDelay`): `void`

设置延时启动平移运动时间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 延时启动时间 |


___

### linearRepeat <Score text="linearRepeat" /> 

• `get` **linearRepeat**(): `boolean`

获取平移重复运动状态

#### Returns

`boolean`

平移重复运动状态

• `set` **linearRepeat**(`newRepeat`): `void`

设置平移重复运动状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newRepeat` | `boolean` | 平移重复运动状态 |


___

### linearRepeatDelay <Score text="linearRepeatDelay" /> 

• `get` **linearRepeatDelay**(): `number`

获取平移到达后停顿时间

#### Returns

`number`

平移到达后停顿时间

• `set` **linearRepeatDelay**(`newDelay`): `void`

设置平移到达后停顿时间，该属性需要重复运动状态为true时才会生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 平移到达后停顿时间 |


___

### linearRepeatTime <Score text="linearRepeatTime" /> 

• `get` **linearRepeatTime**(): `number`

获取平移单程运动时间

#### Returns

`number`

平移单程运动时间

• `set` **linearRepeatTime**(`newTime`): `void`

设置平移单程运动时间，该属性需要重复运动状态为true时才会生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newTime` | `number` | 平移单程运动时间 |


___

### linearReturnDelay <Score text="linearReturnDelay" /> 

• `get` **linearReturnDelay**(): `number`

获取平移返程后停顿时间

#### Returns

`number`

平移返程后停顿时间

• `set` **linearReturnDelay**(`newDelay`): `void`

设置平移返程后停顿时间，该属性需要重复运动状态为true时才会生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `newDelay` | `number` |


平移返程后停顿时间

___

### linearSpeed <Score text="linearSpeed" /> 

• `get` **linearSpeed**(): [`Vector`](Type.Vector.md)

获取平移速度大小

#### Returns

[`Vector`](Type.Vector.md)

平移速度大小

• `set` **linearSpeed**(`newSpeed`): `void`

设置平移速度大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](Type.Vector.md) | 平移速度大小 |



### rotationDelayStartTime <Score text="rotationDelayStartTime" /> 

• `get` **rotationDelayStartTime**(): `number`

获取延时启动旋转运行时间

#### Returns

`number`

延时启动时间

• `set` **rotationDelayStartTime**(`newDelay`): `void`

设置延时启动旋转运动时间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 延时启动时间 |


___

### rotationRepeat <Score text="rotationRepeat" /> 

• `get` **rotationRepeat**(): `boolean`

获取旋转重复运动状态

#### Returns

`boolean`

旋转重复运动状态

• `set` **rotationRepeat**(`newRepeat`): `void`

设置旋转重复运动状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newRepeat` | `boolean` | 旋转重复运动状态 |


___

### rotationRepeatDelay <Score text="rotationRepeatDelay" /> 

• `get` **rotationRepeatDelay**(): `number`

获取旋转到达后停顿时间

#### Returns

`number`

旋转到达后停顿时间

• `set` **rotationRepeatDelay**(`newDelay`): `void`

设置旋转到达后停顿时间，该属性需要重复运动状态为true时才会生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 旋转到达后停顿时间 |


___

### rotationRepeatTime <Score text="rotationRepeatTime" /> 

• `get` **rotationRepeatTime**(): `number`

获取旋转单程运动时间

#### Returns

`number`

旋转单程运动时间

• `set` **rotationRepeatTime**(`newTime`): `void`

设置旋转单程运动时间，该属性需要重复运动状态为true时才会生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newTime` | `number` | 旋转单程运动时间 |


___

### rotationReturnDelay <Score text="rotationReturnDelay" /> 

• `get` **rotationReturnDelay**(): `number`

获取旋转返程后停顿时间

#### Returns

`number`

返程后停顿时间

• `set` **rotationReturnDelay**(`newDelay`): `void`

设置旋转返程后停顿时间，该属性需要重复运动状态为true时才会生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 返程后停顿时间 |


___

### rotationSpeed <Score text="rotationSpeed" /> 

• `get` **rotationSpeed**(): [`Vector`](Type.Vector.md)

获取旋转速度大小

#### Returns

[`Vector`](Type.Vector.md)

旋转速度大小

• `set` **rotationSpeed**(`newSpeed`): `void`

设置旋转速度大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](Type.Vector.md) | 旋转速度大小 |


___

### scaleDelayStartTime <Score text="scaleDelayStartTime" /> 

• `get` **scaleDelayStartTime**(): `number`

获取延时启动缩放运行时间

#### Returns

`number`

延时启动时间

• `set` **scaleDelayStartTime**(`newDelay`): `void`

设置延时启动缩放运动时间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 延时启动时间 |


___

### scaleRepeat <Score text="scaleRepeat" /> 

• `get` **scaleRepeat**(): `boolean`

获取缩放重复运动状态

#### Returns

`boolean`

重复运动状态

• `set` **scaleRepeat**(`newRepeat`): `void`

设置缩放重复运动状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newRepeat` | `boolean` | 重复运动状态 |


___

### scaleRepeatDelay <Score text="scaleRepeatDelay" /> 

• `get` **scaleRepeatDelay**(): `number`

获取缩放到达后停顿时间

#### Returns

`number`

到达后停顿时间

• `set` **scaleRepeatDelay**(`newDelay`): `void`

设置缩放到达后停顿时间，该属性需要重复运动状态为true时才会生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 到达后停顿时间 |


___

### scaleRepeatTime <Score text="scaleRepeatTime" /> 

• `get` **scaleRepeatTime**(): `number`

获取缩放单程运动时间

#### Returns

`number`

单程运动时间

• `set` **scaleRepeatTime**(`newTime`): `void`

设置缩放单程运动时间，该属性需要重复运动状态为true时才会生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newTime` | `number` | 单程运动时间 |


___

### scaleReturnDelay <Score text="scaleReturnDelay" /> 

• `get` **scaleReturnDelay**(): `number`

获取缩放返程后停顿时间

#### Returns

`number`

返程后停顿时间

• `set` **scaleReturnDelay**(`newDelay`): `void`

设置缩放返程后停顿时间，该属性需要重复运动状态为true时才会生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 返程后停顿时间 |


___

### scaleSpeed <Score text="scaleSpeed" /> 

• `get` **scaleSpeed**(): [`Vector`](Type.Vector.md)

获取缩放速度大小

#### Returns

[`Vector`](Type.Vector.md)

缩放速度大小

• `set` **scaleSpeed**(`newSpeed`): `void`

设置缩放速度大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](Type.Vector.md) | 缩放速度大小 |


___

### smooth <Score text="smooth" /> 

• `get` **smooth**(): `boolean`

获取平滑状态

#### Returns

`boolean`

平滑状态

• `set` **smooth**(`newSmooth`): `void`

设置平滑状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSmooth` | `boolean` | 平滑状态 |



### swingAngle <Score text="swingAngle" /> 

• `get` **swingAngle**(): `number`

获取摆动最大角度

#### Returns

`number`

摆动最大角度

• `set` **swingAngle**(`newAngle`): `void`

设置摆动最大角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newAngle` | `number` | 摆动最大角度 |


___

### swingDelayStartTime <Score text="swingDelayStartTime" /> 

• `get` **swingDelayStartTime**(): `number`

获取延时启动摆动运行时间

#### Returns

`number`

延时启动时间

• `set` **swingDelayStartTime**(`newDelay`): `void`

设置延时启动摆动运动时间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 延时启动时间 |


___

### swingSpeed <Score text="swingSpeed" /> 

• `get` **swingSpeed**(): [`Vector`](Type.Vector.md)

获取摆动运动速度

#### Returns

[`Vector`](Type.Vector.md)

摆动运动速度

• `set` **swingSpeed**(`newSpeed`): `void`

设置摆动运动速度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](Type.Vector.md) | 摆动运动速度 |



## Methods