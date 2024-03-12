!function(){"use strict";var t={213:function(t,e,i){i.r(e)},844:function(t,e,i){var n=this&&this.__spreadArray||function(t,e,i){if(i||2===arguments.length)for(var n,o=0,r=e.length;o<r;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.App=void 0;var o=i(259),r=i(659),a=i(748),s=i(273),l=function(){function t(){var t=this;this.worldSideSize=500,this.engine=new a.Engine(this.worldSideSize),this.canvas=document.createElement("canvas"),this.isStarted=!1,this.frameHeight=10,this.frameWidth=10,this.framePositionX=0,this.framePositionY=0,this.realMousePosition={x:0,y:0},this.virtualMousePosition={x:0,y:0},this.isPause=!1,this.dataStorage=new r.DataStorage,this.inputController=new o.InputController,this.canvas.classList.add("canvas-renderer");var e=document.body.querySelector(".app");e&&e.appendChild(this.canvas);var i=function(e){t.realMousePosition=e;var i=t.renderer.getPixelSize();t.virtualMousePosition.x=t.framePositionX+Math.floor(e.x/i),t.virtualMousePosition.y=t.framePositionY+(t.frameHeight-1-Math.floor(e.y/i)),t.engine.setMousedPosition(t.virtualMousePosition)};this.canvas.addEventListener("mousemove",(function(e){var n=function(t,e){var i=t.getBoundingClientRect(),n=t.width/i.width,o=t.height/i.height;return{x:(e.clientX-i.left)*n,y:(e.clientY-i.top)*o}}(t.canvas,e);i(n)}),!1),this.canvas.addEventListener("touchmove",(function(e){var n=function(t,e){var i=t.getBoundingClientRect(),n=e.touches[0],o=t.width/i.width,r=t.height/i.height;return{x:(n.clientX-i.left)*o,y:(n.clientY-i.top)*r}}(t.canvas,e);i(n)}),!1),this.canvas.addEventListener("wheel",(function(e){-e.deltaY<0?t.engine.handleMouseWheelDown():-e.deltaY>0&&t.engine.handleMouseWheelUp()}),!1),this.canvas.addEventListener("mousedown",(function(e){if(0===e.button)t.engine.handleMouseLeftButtonDown(t.virtualMousePosition);else console.error(e.button)}),!1),this.canvas.addEventListener("mouseup",(function(e){if(0===e.button)t.engine.handleMouseLeftButtonUp(t.virtualMousePosition);else console.error(e.button)}),!1),this.inputController.registerKeyListeners(),this.renderer=new s.Renderer(this.canvas)}return t.prototype.setScreenSize=function(t,e){this.renderer.setScreenSize(t,e);var i=Math.floor(t/this.renderer.getPixelSize()),n=Math.floor(e/this.renderer.getPixelSize());this.engine.setRendererSize(i,n),this.frameWidth=Math.floor(i),this.frameHeight=Math.floor(n)},t.prototype.setPixelSize=function(t){this.renderer.setPixelSize(t);var e=Math.floor(this.renderer.getScreenSizeX()/this.renderer.getPixelSize()),i=Math.floor(this.renderer.getScreenSizeY()/this.renderer.getPixelSize());this.engine.setRendererSize(e,i),this.frameWidth=e,this.frameHeight=i},t.prototype.start=function(){this.isStarted||(this.isStarted=!0,this.startRender())},t.prototype.startRender=function(){var t=this,e=this.renderer.getPixels();this.renderer.setPixels(e.fill(4278190080));var i=function(e){var o=t.engine.requestFrame(t.frameWidth,t.frameHeight,t.framePositionX,t.framePositionY),r={x:0,y:0,width:t.frameWidth,height:t.frameHeight,pixels:o},a=t.inputController.getClickedKeys(),s=t.inputController.getPressedKeys();if(Object.keys(s).length>0){var l={ArrowRight:function(){t.framePositionX<t.worldSideSize-t.frameWidth&&(t.framePositionX+=1,t.engine.setFramePosition(t.framePositionX,t.framePositionY))},ArrowLeft:function(){t.framePositionX>0&&(t.framePositionX-=1,t.engine.setFramePosition(t.framePositionX,t.framePositionY))},ArrowUp:function(){t.framePositionY<t.worldSideSize-t.frameHeight&&(t.framePositionY+=1,t.engine.setFramePosition(t.framePositionX,t.framePositionY))},ArrowDown:function(){t.framePositionY>0&&(t.framePositionY-=1,t.engine.setFramePosition(t.framePositionX,t.framePositionY))},a:function(){return t.engine.pushPlayerMoveEvent("left")},s:function(){return t.engine.pushPlayerMoveEvent("down")},w:function(){t.engine.pushPlayerMoveEvent("up"),t.engine.pushPlayerMoveEvent("up")},d:function(){return t.engine.pushPlayerMoveEvent("right")}};Object.keys(s).forEach((function(t){var e=l[t];e&&null!=e&&e()}))}if(a.length>0){var u={Escape:function(){t.isPause=!t.isPause,t.engine.setPause(t.isPause)},p:function(){var e=t.engine.getEngineState();t.dataStorage.saveToLocalStorage(e)},l:function(){var e=t.dataStorage.loadFromLocalStorage();t.engine.setEngineState(e)}};a.forEach((function(t){var e=u[t];e&&null!=e&&e()}))}var h=t.engine.getUi().getLayers(),d=t.engine.getPlayersEngine().getLayers(),y=t.renderer.blendPixelLayers(n(n([r],d,!0),h,!0),t.renderer.getScreenSizeX()/t.renderer.getPixelSize(),t.renderer.getScreenSizeY()/t.renderer.getPixelSize());null!==y&&t.renderer.setPixels(y),t.renderer.render(e),window.requestAnimationFrame(i)};i(0)},t}();e.App=l},987:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.getUnitTypeByUnitTypeName=e.UnitTypesArray=e.UnitTypesStringsToIndex=void 0,e.UnitTypesStringsToIndex={"yellow-sand":0,"pure-water":1,"gray-rock":2,"flammable-gas":3,"red-blood":4,"yellow-flame":5,"gray-smoke":6,"black-oil":7,"rock-hard":8,"wood-wall":9},e.UnitTypesArray=[{unitName:"yellow-sand",unitIsLiquid:!1,unitIsStatic:!1,unitIsGas:!1,unitIsFlammable:!1,unitDefaultFlameSustainability:1,unitDefaultFireHP:0,unitDefaultHealth:800,unitDurability:4,unitDensity:1.5,unitDefaultColor:{minRandomColor:0,maxRandomColor:20,colorShiftNumbers:4095,baseColor:4278242795},unitTransformations:{toFreeze:"yellow-sand",toLiquid:"molten-glass",toVapor:null,toDestroy:null,toCorrode:null}},{unitName:"pure-water",unitIsLiquid:!0,unitIsStatic:!1,unitIsGas:!1,unitIsFlammable:!1,unitDefaultFlameSustainability:1,unitDefaultFireHP:0,unitDefaultHealth:10,unitDurability:0,unitDensity:1,unitDefaultColor:{minRandomColor:0,maxRandomColor:0,colorShiftNumbers:4095,baseColor:2013255936},unitTransformations:{toFreeze:"pure-ice",toLiquid:"pure-water",toVapor:"water-steam",toDestroy:"water-steam",toCorrode:"water-steam"}},{unitName:"gray-rock",unitIsLiquid:!1,unitIsStatic:!0,unitIsGas:!1,unitIsFlammable:!1,unitDefaultFlameSustainability:3,unitDefaultFireHP:0,unitDefaultHealth:100,unitDurability:0,unitDensity:2.6,unitDefaultColor:{minRandomColor:10,maxRandomColor:82,colorShiftNumbers:4095,baseColor:4286677377},unitTransformations:{toFreeze:null,toLiquid:"molten-rock",toVapor:null,toDestroy:null,toCorrode:null}},{unitName:"flammable-gas",unitIsLiquid:!1,unitIsStatic:!1,unitIsGas:!0,unitIsFlammable:!0,unitDefaultFlameSustainability:600,unitDefaultFireHP:10,unitDefaultHealth:10,unitDurability:0,unitDensity:.00182,unitDefaultColor:{minRandomColor:10,maxRandomColor:82,colorShiftNumbers:4095,baseColor:856795648},unitTransformations:{toFreeze:null,toLiquid:"flammable-liquid",toVapor:null,toDestroy:null,toCorrode:null}},{unitName:"red-blood",unitIsLiquid:!0,unitIsStatic:!1,unitIsGas:!1,unitIsFlammable:!1,unitDefaultFlameSustainability:1,unitDefaultFireHP:0,unitDefaultHealth:10,unitDurability:0,unitDensity:1.03,unitDefaultColor:{minRandomColor:0,maxRandomColor:0,colorShiftNumbers:4095,baseColor:2852257923},unitTransformations:{toFreeze:"frozen-red-blood",toLiquid:null,toVapor:null,toDestroy:null,toCorrode:null}},{unitName:"yellow-flame",unitIsLiquid:!1,unitIsStatic:!1,unitIsGas:!1,unitIsFlame:!0,unitIsFlammable:!1,unitDefaultFlameSustainability:1,unitDefaultFireHP:1,unitDefaultHealth:3,unitDurability:0,unitDensity:33e-5,unitDefaultColor:{minRandomColor:0,maxRandomColor:0,colorShiftNumbers:0,baseColor:4278214911},unitTransformations:{toFreeze:null,toLiquid:null,toVapor:null,toDestroy:"gray-smoke",toCorrode:null}},{unitName:"gray-smoke",unitIsLiquid:!1,unitIsStatic:!1,unitIsGas:!0,unitIsFlammable:!1,unitDefaultFlameSustainability:1,unitDefaultFireHP:0,unitDefaultHealth:100,unitDurability:0,unitDensity:61e-5,unitDefaultColor:{minRandomColor:10,maxRandomColor:16,colorShiftNumbers:4095,baseColor:2004976001},unitTransformations:{toFreeze:null,toLiquid:null,toVapor:null,toDestroy:null,toCorrode:null}},{unitName:"black-oil",unitIsLiquid:!0,unitIsStatic:!1,unitIsGas:!1,unitIsFlammable:!0,unitDefaultFlameSustainability:995,unitDefaultFireHP:500,unitDefaultHealth:1e3,unitDurability:0,unitDensity:.88,unitDefaultColor:{minRandomColor:0,maxRandomColor:20,colorShiftNumbers:15,baseColor:4278190080},unitTransformations:{toFreeze:null,toLiquid:null,toVapor:null,toDestroy:"gray-smoke",toCorrode:null}},{unitName:"rock-hard",unitIsLiquid:!1,unitIsStatic:!0,unitIsGas:!1,unitIsFlammable:!1,unitDefaultFlameSustainability:0,unitDefaultFireHP:0,unitDefaultHealth:2e5,unitDurability:12,unitDensity:.88,unitDefaultColor:{minRandomColor:0,maxRandomColor:20,colorShiftNumbers:4095,baseColor:4280492926},unitTransformations:{toFreeze:null,toLiquid:null,toVapor:null,toDestroy:null,toCorrode:null}},{unitName:"wood-wall",unitIsLiquid:!1,unitIsStatic:!0,unitIsGas:!1,unitIsFlammable:!0,unitDefaultFlameSustainability:992,unitDefaultFireHP:600,unitDefaultHealth:2e3,unitDurability:10,unitDensity:.88,unitDefaultColor:{minRandomColor:0,maxRandomColor:20,colorShiftNumbers:15,baseColor:4279859366},unitTransformations:{toFreeze:null,toLiquid:null,toVapor:null,toDestroy:null,toCorrode:null}}];e.getUnitTypeByUnitTypeName=function(t){var i=e.UnitTypesStringsToIndex[t];return e.UnitTypesArray[i]}},659:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.DataStorage=void 0;var n=i(900),o=function(){function t(){}return t.prototype.convertWorldStateToSave=function(t){for(var e,i=t.gameWorldState,n=t.worldSquareSide,o={},r=0;r<n;r+=1)for(var a=0;a<n;a+=1)null!=i[r][a]&&(o[r]||(o[r]={}),o[r][a]=null===(e=i[r][a])||void 0===e?void 0:e.toJson());return o},t.prototype.serializeToSaveFile=function(t){var e={frameWidth:t.frameWidth,frameHeight:t.frameHeight,framePositionX:t.framePositionX,framePositionY:t.framePositionY,worldSideSize:t.worldSquareSide,lastUnitId:t.lastUnitId,worldSate:this.convertWorldStateToSave(t)};return console.error(e),JSON.stringify(e)},t.prototype.convertSaveToWorldState=function(t,e){for(var i=new Array(e),o=new Array(e),r=0;r<e;r++)o[r]=null;for(r=0;r<i.length;r++)i[r]=o.slice(0);var a=i;return Object.keys(t).forEach((function(e){t[parseInt(e,10)]&&Object.keys(t[parseInt(e,10)]).forEach((function(i){if(t[parseInt(e,10)][parseInt(i,10)]){var o=t[parseInt(e,10)][parseInt(i,10)],r={unitHealth:o.s.h,unitIsOnFire:Boolean(o.s.f),unitColor:o.s.c,unitDecalColor:o.s.d,flameSustainability:o.s.s,fireHP:o.s.j},s=o.v?{startPoint:o.v.s,endPoint:o.v.e}:null,l=new n.Unit(o.n,s,o.i,r);a[parseInt(e,10)][parseInt(i,10)]=l}}))})),a},t.prototype.deserializeAnLoadFromFile=function(t){var e=JSON.parse(t);if(t&&"{"===t[0]){var i=Object.keys(e).length;if(e&&i>0&&e.worldSate)return{frameWidth:e.frameWidth,frameHeight:e.frameHeight,framePositionX:e.framePositionX,framePositionY:e.framePositionY,worldSquareSide:e.worldSideSize,lastUnitId:e.lastUnitId,gameWorldState:this.convertSaveToWorldState(e.worldSate,e.worldSideSize)}}return null},t.prototype.saveToLocalStorage=function(t){localStorage.setItem("pws-save",this.serializeToSaveFile(t))},t.prototype.loadFromLocalStorage=function(){var t=localStorage.getItem("pws-save");return t?this.deserializeAnLoadFromFile(t):null},t}();e.DataStorage=o},748:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Engine=void 0;var o=i(398),r=i(507),a=i(382),s=i(900),l=i(527),u=function(){function t(t,e){void 0===e&&(e=null);var i=this;if(this.frameWidth=0,this.frameHeight=0,this.framePositionX=0,this.framePositionY=0,this.physicEngine=new r.PhysicEngine,this.worldSquareSide=2,this.mousePosition={x:0,y:0},this.lastMousePosition={x:0,y:0},this.lastUnitId=0,this.isPhysicsEnginePause=!1,this.unitCreationType=0,this.unitCreationSquareSize=0,this.gameMaxCountMaterials=9,this.ui=new a.UI({}),this.playersEngine=new o.PlayersEngine,this.eventsStack=[],this.gameWorldState=Array.from(Array(4),(function(){return new Array(4)})),e)this.setEngineState(e);else{this.worldSquareSide=t;for(var n=new Array(t),s=new Array(t),l=0;l<t;l++)s[l]=null;for(l=0;l<n.length;l++)n[l]=s.slice(0);this.gameWorldState=n}var u={"switch-create-pure-water":function(){i.unitCreationType=0},"switch-create-yellow-sand":function(){i.unitCreationType=1},"switch-create-gray-rock":function(){i.unitCreationType=2},"switch-create-flammable-gas":function(){i.unitCreationType=3},"switch-create-red-blood":function(){i.unitCreationType=4},"switch-create-black-oil":function(){i.unitCreationType=6},"switch-create-rock-hard":function(){i.unitCreationType=8},"switch-create-wood-wall":function(){i.unitCreationType=9},"switch-remove":function(){i.unitCreationType=5},"switch-ignite":function(){i.unitCreationType=7},"default-action":function(t){return i.mainAction(t)}};this.ui=new a.UI(u)}return t.prototype.setEngineState=function(t){t&&(this.frameWidth=t.frameWidth,this.frameHeight=t.frameHeight,this.framePositionX=t.framePositionX,this.framePositionY=t.framePositionY,this.worldSquareSide=t.worldSquareSide,this.mousePosition=t.mousePosition,this.lastMousePosition=t.lastMousePosition,this.lastUnitId=0,this.gameWorldState=t.gameWorldState)},t.prototype.getEngineState=function(){return{frameWidth:this.frameHeight,frameHeight:this.frameHeight,framePositionX:this.framePositionX,framePositionY:this.framePositionY,worldSquareSide:this.worldSquareSide,mousePosition:this.mousePosition,lastMousePosition:this.lastMousePosition,lastUnitId:this.lastUnitId,gameWorldState:this.gameWorldState}},t.prototype.setPause=function(t){this.isPhysicsEnginePause=t},t.prototype.setFramePosition=function(t,e){this.framePositionX=t,this.framePositionY=e,this.ui.setFramePosition({x:t,y:e}),this.playersEngine.setFramePosition({x:t,y:e})},t.prototype.setMousedPosition=function(t){this.lastMousePosition=this.mousePosition,this.mousePosition=t,this.ui.setMousePosition(t)},t.prototype.setRendererSize=function(t,e){this.frameWidth=t,this.frameHeight=e,this.ui.setRendererSize(t,e)},t.prototype.getUi=function(){return this.ui},t.prototype.getPlayersEngine=function(){return this.playersEngine},t.prototype.pushPlayerMoveEvent=function(t){var e={up:{x:0,y:1},down:{x:0,y:-1},left:{x:-1,y:0},right:{x:1,y:0}}[t];if(e){var i=this.playersEngine.getPlayer(0),n=i.globalPosition.x+i.desiredDeltaPosition.x,o=i.globalPosition.y+i.desiredDeltaPosition.y,r=n+e.x,a=o+e.y,s=!1,l=i.hitBoxHeight,u=i.hitBoxWidth;if(this.gameWorldState[r]){if(e.y<0){for(var h=r;h<r+u;h++){if(!this.gameWorldState[h])return;if(void 0===(y=this.gameWorldState[h][a]))return;if(y&&(y.getUnitType().unitIsStatic||!y.getUnitType().unitIsGas&&!y.getUnitType().unitIsFlame&&!y.getUnitType().unitIsLiquid))return}s=!0}else if(e.y>0){for(h=r;h<r+u;h++){if(!this.gameWorldState[h])return;if(void 0===(y=this.gameWorldState[h][a+l-1]))return;if(y&&(y.getUnitType().unitIsStatic||!y.getUnitType().unitIsGas&&!y.getUnitType().unitIsFlame&&!y.getUnitType().unitIsLiquid))return}s=!0}else if(e.x>0)for(var d=0;d<=2;d++){e.y=d;for(h=a+d;h<a+l+d;h++){if(void 0===(y=this.gameWorldState[r+u-1][h]))return;if(y&&(y.getUnitType().unitIsStatic||!y.getUnitType().unitIsGas&&!y.getUnitType().unitIsFlame&&!y.getUnitType().unitIsLiquid))break;h+1>=a+l+d&&(s=!0)}if(s)break}else if(e.x<0)for(d=0;d<=2;d++){e.y=d;for(h=a+d;h<a+l+d;h++){var y;if(void 0===(y=this.gameWorldState[r][h]))return;if(y&&(y.getUnitType().unitIsStatic||!y.getUnitType().unitIsGas&&!y.getUnitType().unitIsFlame&&!y.getUnitType().unitIsLiquid))break;h+1>=a+l+d&&(s=!0)}if(s)break}s&&this.playersEngine.addPlayerDeltaPosition(0,e)}}},t.prototype.extractFrame=function(t,e,i,n){var o,r;(o=this.eventsStack).push.apply(o,this.ui.collectActions()),this.eventsStack.forEach((function(t){return t()})),this.eventsStack=[];for(var a=new Uint32Array(t*e),s=(e-1)*t,u=n;u<n+e;u+=1){for(var h=i;h<i+t;h+=1){if(null!==this.gameWorldState[h][u]){var d=null;if(null!==this.gameWorldState[h][u]&&(null===(r=this.gameWorldState[h][u])||void 0===r?void 0:r.unitState)){var y=this.gameWorldState[h][u].unitState.unitColor,f=this.gameWorldState[h][u].unitState.unitDecalColor;d=f&&0!==f?Number((0,l.mixColors)(y,f)):y}d&&(a[s]=d)}s+=1}s-=2*t}return a},t.prototype.handleMouseLeftButtonDown=function(t){this.ui.handleClickDown(t),this.lastMousePosition=this.mousePosition,this.mousePosition=t},t.prototype.handleMouseLeftButtonUp=function(t){this.ui.handleClickUp(t),this.lastMousePosition=this.mousePosition,this.mousePosition=t},t.prototype.mainAction=function(t){var e=this;this.drawLine(this.lastMousePosition,t,(function(t){return e.createUnitAtPoint(t,e.unitCreationType,e.unitCreationSquareSize)}))},t.prototype.drawLine=function(t,e,i){void 0===i&&(i=function(){});var n=[],o=t.x,r=t.y,a=e.x,s=e.y,l=Math.abs(a-o),u=Math.abs(s-r),h=o<a?1:-1,d=r<s?1:-1,y=l-u;do{i({x:o,y:r}),n.push({x:o,y:r});var f=2*y;f>-u&&(y-=u,o+=h),f<l&&(y+=l,r+=d)}while(o!==a||r!==s);return n},t.prototype.handleMouseWheelUp=function(){this.unitCreationSquareSize<2*this.frameHeight&&(this.unitCreationSquareSize+=1)},t.prototype.handleMouseWheelDown=function(){this.unitCreationSquareSize>0&&(this.unitCreationSquareSize-=1)},t.prototype.handleMouseMiddleButton=function(){this.unitCreationType<this.gameMaxCountMaterials?this.unitCreationType+=1:this.unitCreationType=0},t.prototype.createUnit=function(t,e,i){this.lastUnitId+=1;var o=new s.Unit(t,e,this.lastUnitId);if(i){var r=n(n({},o.unitState),i);o.unitState=r}return o},t.prototype.createUnitAtPoint=function(t,e,i){var n,o,r=function(){var t="pure-water";switch(e){case 0:t="pure-water";break;case 1:t="yellow-sand";break;case 2:t="gray-rock";break;case 3:t="flammable-gas";break;case 4:t="red-blood";break;case 5:return null;case 6:t="black-oil";break;case 7:return"set-on-fire";case 8:t="rock-hard";break;case 9:t="wood-wall"}return new s.Unit(t,null,0)};if(i>0)for(var a=Math.floor(t.x/i)*i,l=Math.floor(t.y/i)*i,u=0;u<i;u+=1)for(var h=0;h<i;h+=1){var d=r();a+h<this.worldSquareSide&&l+u<this.worldSquareSide&&("set-on-fire"===d?this.gameWorldState[a+h][l+u]&&(null===(n=this.gameWorldState[a+h][l+u])||void 0===n?void 0:n.getUnitType().unitIsFlammable)&&(this.gameWorldState[a+h][l+u].unitState.unitIsOnFire=!0):this.gameWorldState[a+h][l+u]&&null!==d||(this.gameWorldState[a+h][l+u]=d,null!==d&&(d.unitId=this.lastUnitId++)))}else{var y=r();"set-on-fire"===y?this.gameWorldState[t.x][t.y]&&(null===(o=this.gameWorldState[t.x][t.y])||void 0===o?void 0:o.getUnitType().unitIsFlammable)&&(this.gameWorldState[t.x][t.y].unitState.unitIsOnFire=!0):this.gameWorldState[t.x][t.y]&&null!==y||(this.gameWorldState[t.x][t.y]=y,null!==y&&(y.unitId=this.lastUnitId++))}},t.prototype.requestFrame=function(t,e,i,n){var o=this;return this.isPhysicsEnginePause||(this.gameWorldState=this.physicEngine.resolveWorld(this.gameWorldState,this.worldSquareSide,(function(t,e,i){return o.createUnit(t,e,i)})),this.pushPlayerMoveEvent("down")),this.extractFrame(t,e,i,n)},t}();e.Engine=u},259:function(t,e){var i=this&&this.__spreadArray||function(t,e,i){if(i||2===arguments.length)for(var n,o=0,r=e.length;o<r;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.InputController=void 0;var n=function(){function t(){this.pressedKeys={},this.clickedKeys=[]}return t.prototype.pushKeyPressed=function(t){this.pressedKeys[t]=!0},t.prototype.pushKeyReleased=function(t){delete this.pressedKeys[t],this.clickedKeys.includes(t)||this.clickedKeys.push(t)},t.prototype.registerKeyListeners=function(){var t=this;document.addEventListener("keydown",(function(e){t.pushKeyPressed(e.key)})),document.addEventListener("keyup",(function(e){t.pushKeyReleased(e.key)}))},t.prototype.getPressedKeys=function(){return this.pressedKeys},t.prototype.getClickedKeys=function(){var t=i([],this.clickedKeys,!0);return this.clickedKeys=[],t},t}();e.InputController=n},507:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.PhysicEngine=void 0;var n=i(527),o=function(){function t(){this.lastY=0,this.isLineByLineResolve=!1,this.lastUnitId=0,this.emittedUnits=[]}return t.prototype.resolveWorld=function(t,e,i){for(var o,r=this,a=function(e,i,n,o,r){void 0===r&&(r=!0);var a=t[n][o];t[n][o]=t[e][i],t[n][o]&&(t[n][o].isUpdated=r),t[e][i]=a,t[e][i]&&(t[e][i].isUpdated=r)},s=function(i,n,o,r,s){if(void 0===s&&(s=!0),t[o][r]){var l=function(i,n,o){var r=function(o){return t[i][n+o]?i>0&&!t[i-1][n+o]?(a(i,n,i-1,n+o),!0):i<e-1&&!t[i+1][n+o]&&(a(i,n,i+1,n+o),!0):(a(i,n,i,n+o),!0)},s=o?-1:1;if(n>=0){if(r(1*s))return!0}else{if(i>0&&!t[i-1][n])return a(i,n,i-1,n),!0;if(i<e-1&&!t[i+1][n])return a(i,n,i+1,n),!0;if(n<e-1&&r(-1*s))return!0}return!1}(o,r,t[o][r].getUnitType().unitIsLiquid);l||a(i,n,o,r,s)}else a(i,n,o,r,s)},l=function(i,o){var r,a;(function(t,i){return t>=0&&t<e&&i>=0&&i<e})(i,o)&&(t[i][o]&&(null===(r=t[i][o])||void 0===r?void 0:r.getUnitType().unitIsFlammable)&&(t[i][o].unitState.unitIsOnFire||(0,n.getRandomInt)(0,1e3)>=((null===(a=t[i][o])||void 0===a?void 0:a.getUnitType().unitDefaultFlameSustainability)||0)&&(t[i][o].unitState.unitIsOnFire=!0)))},u=function(i,n){var o;if(n+1>e)return!1;if(!t[i][n+1])return Math.random()>=.1&&(t[i][n].unitState.unitHealth-=1),a(i,n,i,n+1),!0;if((null===(o=t[i][n+1])||void 0===o?void 0:o.getUnitType().unitIsFlame)&&u(i,n+1))return Math.random()>=.5&&(t[i][n].unitState.unitHealth-=1),a(i,n,i,n+1),!0;return!1},h=function(i,o){var r,l,h,d;(null===(r=t[i][o])||void 0===r?void 0:r.isUpdated)||((null===(l=t[i][o])||void 0===l?void 0:l.getUnitType().unitIsGas)?function(i,o){var r,s,l,u,h,d=i>0&&!t[i-1][o],y=i<e-1&&!t[i+1][o];if(o<=e-1){var f=!t[i][o+1],c=i>0&&!t[i-1][o+1],p=i<e-1&&!t[i+1][o+1],m=c&&p,g=d&&y;if("gray-smoke"===(null===(r=t[i][o])||void 0===r?void 0:r.unitTypeName)&&(null===(s=t[i][o+1])||void 0===s?void 0:s.getUnitType().unitIsStatic)&&(0,n.getRandomInt)(0,(null===(l=t[i][o])||void 0===l?void 0:l.getUnitType().unitDefaultHealth)||1)>=((null===(h=null===(u=t[i][o])||void 0===u?void 0:u.unitState)||void 0===h?void 0:h.unitHealth)||1)&&(t[i][o].unitState.unitHealth-=1),f)a(i,o,i,o+1);else if(m&&g){var v=(0,n.getRandomInt)(0,1);a(i,o,0===v?i-1:i+1,o+1)}else c&&d?a(i,o,i-1,o+1):p&&y?a(i,o,i+1,o+1):d?a(i,o,i-1,o):y&&a(i,o,i+1,o)}else o===e-1&&(d?a(i,o,i-1,o):y&&a(i,o,i+1,o))}(i,o):(null===(h=t[i][o])||void 0===h?void 0:h.getUnitType().unitIsLiquid)?function(i,o){var r,s,l,u,h,d,y,f,c,p,m=i>0&&!t[i-1][o],g=i>0&&!m&&!m&&(null===(r=t[i-1][o])||void 0===r?void 0:r.isUpdated),v=i>0&&!m&&(null===(s=t[i-1][o])||void 0===s?void 0:s.getUnitType().unitIsLiquid)&&t[i-1][o].getUnitType().unitDensity<t[i][o].getUnitType().unitDensity,S=i>0&&!m&&(null===(l=t[i-1][o])||void 0===l?void 0:l.getUnitType().unitIsGas),P=i<e-1&&!t[i+1][o],x=i<e-1&&!P&&(null===(u=t[i+1][o])||void 0===u?void 0:u.isUpdated),w=i<e-1&&!P&&(null===(h=t[i+1][o])||void 0===h?void 0:h.getUnitType().unitIsLiquid)&&t[i+1][o].getUnitType().unitDensity<t[i][o].getUnitType().unitDensity,T=i<e-1&&!P&&(null===(d=t[i+1][o])||void 0===d?void 0:d.getUnitType().unitIsGas);if(o>0){var I=!t[i][o-1],U=!I&&(null===(y=t[i][o-1])||void 0===y?void 0:y.getUnitType().unitIsLiquid)&&t[i][o-1].getUnitType().unitDensity<t[i][o].getUnitType().unitDensity,b=!I&&(null===(f=t[i][o-1])||void 0===f?void 0:f.getUnitType().unitIsGas),D=i>0&&!t[i-1][o-1],C=i>0&&!D&&t[i-1][o-1].getUnitType().unitIsLiquid&&t[i-1][o-1].getUnitType().unitDensity<t[i][o].getUnitType().unitDensity,M=i>0&&!D&&t[i-1][o-1].getUnitType().unitIsGas,L=i>0&&!D&&(null===(c=t[i-1][o-1])||void 0===c?void 0:c.isUpdated),F=i<e-1&&!t[i+1][o-1],z=i<e-1&&!F&&t[i+1][o-1].getUnitType().unitIsLiquid&&t[i+1][o-1].getUnitType().unitDensity<t[i][o].getUnitType().unitDensity,k=i<e-1&&!F&&t[i+1][o-1].getUnitType().unitIsGas,W=i<e-1&&!F&&(null===(p=t[i+1][o-1])||void 0===p?void 0:p.isUpdated),H=D&&F,N=C&&z,q=M&&k,R=m&&P,E=g&&x,A=v&&w,B=S&&T;if(I||U||b)a(i,o,i,o-1);else if(!E&&(H||N||q)&&(R||A||B)){var O=(0,n.getRandomInt)(0,1);a(i,o,0===O?i-1:i+1,o-1)}else!L&&(D||C||M)&&(m||v||S)?a(i,o,i-1,o-1):!W&&(F||z||k)&&(P||w||T)?a(i,o,i+1,o-1):!g&&(m||v||S)?a(i,o,i-1,o):!x&&(P||w||T)&&a(i,o,i+1,o)}else 0===o&&(!g&&(m||v||S)?a(i,o,i-1,o):!x&&(P||w||T)&&a(i,o,i+1,o))}(i,o):(null===(d=t[i][o])||void 0===d?void 0:d.getUnitType().unitIsFlame)?function(e,i){Math.random()>=.8&&(t[e][i].unitState.unitHealth-=1),u(e,i)}(i,o):function(i,o){var r,l,u,h,d,y,f,c,p,m;if(!(o<=0)){var g=!1,v=!1,S=!1,P=!1,x=!1,w=!1,T=!1,I=!1,U=!1,b=!1,D=!1,C=!1;i>0&&((g=!t[i-1][o])||(v=!!(null===(r=t[i-1][o])||void 0===r?void 0:r.getUnitType().unitIsLiquid),S=!!(null===(l=t[i-1][o])||void 0===l?void 0:l.getUnitType().unitIsGas)),(T=!t[i-1][o-1])||(I=!!(null===(u=t[i-1][o-1])||void 0===u?void 0:u.getUnitType().unitIsLiquid),U=!!(null===(h=t[i-1][o-1])||void 0===h?void 0:h.getUnitType().unitIsGas))),i<e-1&&((P=!t[i+1][o])||(x=!!(null===(d=t[i+1][o])||void 0===d?void 0:d.getUnitType().unitIsLiquid),w=!!(null===(y=t[i+1][o])||void 0===y?void 0:y.getUnitType().unitIsGas)),(b=!t[i+1][o-1])||(D=!!(null===(f=t[i+1][o-1])||void 0===f?void 0:f.getUnitType().unitIsLiquid),C=!!(null===(c=t[i+1][o-1])||void 0===c?void 0:c.getUnitType().unitIsGas)));var M=t[i][o-1]&&((null===(p=t[i][o-1])||void 0===p?void 0:p.getUnitType().unitIsLiquid)||(null===(m=t[i][o-1])||void 0===m?void 0:m.getUnitType().unitIsGas)),L=g||v||S,F=P||x||w,z=T||I||U,k=b||D||C,W=z&&k,H=L&&F;if(!t[i][o-1]||M)M?o<e-1&&s(i,o,i,o-1):t[i][o-1]||a(i,o,i,o-1);else if(W&&H){var N=(0,n.getRandomInt)(0,1);s(i,o,0===N?i-1:i+1,o-1)}else z&&L?s(i,o,i-1,o-1):k&&F&&s(i,o,i+1,o-1)}}(i,o))},d=function(e,i){var o,a,s,u,d,y,f;if(null!=t[e][i]){if(t[e][i]&&(null===(o=t[e][i])||void 0===o?void 0:o.unitState)&&t[e][i].unitState.unitHealth<=0){var c=null===(a=t[e][i])||void 0===a?void 0:a.getUnitType().unitTransformations;if(t[e][i]=null,!c||!c.toDestroy)return;return void(Math.random()>=.99&&r.emittedUnits.push({unitType:c.toDestroy,x:e,y:i}))}if(t[e][i]&&(null===(s=t[e][i])||void 0===s?void 0:s.getUnitType().unitIsFlammable)&&(null===(u=t[e][i])||void 0===u?void 0:u.unitState)&&t[e][i].unitState.fireHP<=0){if(t[e][i]=null,!(c=null===(d=t[e][i])||void 0===d?void 0:d.getUnitType().unitTransformations)||!c.toDestroy)return;return void r.emittedUnits.push({unitType:c.toDestroy,x:e,y:i})}(null===(y=t[e][i])||void 0===y?void 0:y.unitState.unitIsOnFire)&&(!function(e,i){var o=0;(0,n.getRandomInt)(0,100)>=30&&(o=4278190335+(0,n.getRandomInt)(0,233)*Math.pow(16,2)),t[e][i].unitState.unitDecalColor=o,t[e][i].unitState.fireHP-=1,l(e-1,i),l(e+1,i),l(e,i+1),l(e,i-1)}(e,i),r.emittedUnits.push({unitType:"yellow-flame",x:e,y:i+1})),(null===(f=t[e][i])||void 0===f?void 0:f.getUnitType().unitIsStatic)||h(e,i)}},y=0;y<e;y+=1)for(var f=0;f<e;f+=1)null!=t[f][y]&&((null===(o=t[f][y])||void 0===o?void 0:o.getUnitType().unitIsStatic)||(t[f][y].isUpdated=!1));var c=function(t){if(!1===Boolean((0,n.getRandomInt)(0,1)))for(var i=0;i<e;i+=1)d(i,t);else for(i=e-1;i>=0;i-=1)d(i,t)};if(this.isLineByLineResolve){y=0;this.lastY<e?y=this.lastY++:this.lastY=0,c(y)}else for(y=0;y<e;y+=1)c(y);for(var p=0;p<this.emittedUnits.length;p+=1){var m=this.emittedUnits[p],g=(f=m.x,y=m.y,m.unitType);null===t[f][y]&&(t[f][y]=i(g,null,null))}return this.emittedUnits=[],t},t}();e.PhysicEngine=o},398:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.PlayersEngine=void 0;var i=function(){function t(){this.players=[],this.layers=[],this.framePosition={x:0,y:0},this.players.push({name:"Player0",globalPosition:{x:0,y:0},desiredDeltaPosition:{x:0,y:0},mouseGlobalPosition:{x:10,y:10},spriteWidth:10,spriteHeight:10,spriteOffset:{x:0,y:0},hitBoxWidth:6,hitBoxHeight:10,health:100}),this.initLayers()}return t.prototype.setFramePosition=function(t){this.framePosition=t},t.prototype.addPlayerDeltaPosition=function(t,e){return!!this.players[t]&&(this.players[t].desiredDeltaPosition.x+=e.x,this.players[t].desiredDeltaPosition.y+=e.y,!0)},t.prototype.initLayers=function(){this.layers.push({width:6,height:16,x:0,y:0,pixels:this.drawPlayer()})},t.prototype.drawPlayer=function(){var t=new Uint32Array(96);return t[0]=4278190080,t[5]=4278190080,t[36]=4278190080,t[41]=4278190080,t[90]=4278190080,t[95]=4278190080,t},t.prototype.updatePlayersPosition=function(){var t=this;this.players.forEach((function(e){e.globalPosition.x+e.desiredDeltaPosition.x>=0&&(e.globalPosition.x+=e.desiredDeltaPosition.x),e.globalPosition.y+e.desiredDeltaPosition.y>=0&&(e.globalPosition.y+=e.desiredDeltaPosition.y),t.layers[0].x=e.globalPosition.x-t.framePosition.x,t.layers[0].y=e.globalPosition.y-t.framePosition.y,e.desiredDeltaPosition.x=0,e.desiredDeltaPosition.y=0}))},t.prototype.getPlayer=function(t){return this.players[t]},t.prototype.getLayers=function(){return this.updatePlayersPosition(),this.layers},t}();e.PlayersEngine=i},382:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.UI=void 0;var n=i(987),o=i(527),r=function(){function t(t){this.frameWidth=1,this.frameHeight=1,this.mousePosition={x:0,y:0},this.mouseUIPosition={x:0,y:0},this.framePosition={x:0,y:0},this.actions={},this.isMouseDown=!1,this.eventsStack=[],this.layers=[],this.actions=t,this.initLayers()}return t.prototype.getCursorPixels=function(){var t=new Uint32Array(9);return t[1]=4278190080,t[3]=4278190080,t[5]=4278190080,t[7]=4278190080,t},t.prototype.initLayers=function(){this.layers.push({pixelsLayer:{width:4,height:80,x:4,y:40,pixels:new Uint32Array(320)},actionToPixels:null,isVisible:!0},{pixelsLayer:{width:3,height:3,x:0,y:0,pixels:this.getCursorPixels()},actionToPixels:null,isVisible:!0}),this.drawUI()},t.prototype.getLayers=function(){this.layers[1].pixelsLayer.x=this.mouseUIPosition.x-1,this.layers[1].pixelsLayer.y=this.mouseUIPosition.y-1;for(var t=[],e=0;e<this.layers.length;e++)this.layers[e].isVisible&&t.push(this.layers[e].pixelsLayer);return t},t.prototype.setRendererSize=function(t,e){this.frameWidth=t,this.frameHeight=e},t.prototype.setMousePosition=function(t){this.mousePosition=t,this.mouseUIPosition.x=t.x-this.framePosition.x,this.mouseUIPosition.y=t.y-this.framePosition.y},t.prototype.setFramePosition=function(t){this.framePosition=t,this.mouseUIPosition.x=this.mousePosition.x-this.framePosition.x,this.mouseUIPosition.y=this.mousePosition.y-this.framePosition.y},t.prototype.findAction=function(t){var e=this.actions[t];return e||function(){}},t.prototype.drawRectangleOnLayer=function(t,e,i,n,o,r,a){void 0===a&&(a=null);var s=i+o,l=n+r,u=t.pixelsLayer,h=t.actionToPixels,d=u.pixels,y=u.width,f=u.height;if(i<y&&n<f&&i>=0&&n>=0){for(var c=n;c<l;c++)for(var p=(f-1-c)*y,m=p+i;m<p+o;m++)d[m]=e;if(null!==a){if(null===h){for(var g=new Array(y),v=new Array(f),S=0;S<f;S++)v[S]=null;for(S=0;S<g.length;S++)g[S]=v.slice(0);t.actionToPixels=g}for(var P=i;P<s;P+=1)for(var x=n;x<l;x+=1)t.actionToPixels[P][x]=a}}},t.prototype.drawCreationMenu=function(t,e){var i,r,a,s,l=this,u=[{color:(0,o.getNotTransparent)((0,n.getUnitTypeByUnitTypeName)("pure-water").unitDefaultColor.baseColor),actionType:"switch-create-pure-water"},{color:(0,o.getNotTransparent)((0,n.getUnitTypeByUnitTypeName)("yellow-sand").unitDefaultColor.baseColor),actionType:"switch-create-yellow-sand"},{color:(0,o.getNotTransparent)((0,n.getUnitTypeByUnitTypeName)("gray-rock").unitDefaultColor.baseColor),actionType:"switch-create-gray-rock"},{color:(0,o.getNotTransparent)((0,n.getUnitTypeByUnitTypeName)("flammable-gas").unitDefaultColor.baseColor),actionType:"switch-create-flammable-gas"},{color:(0,o.getNotTransparent)((0,n.getUnitTypeByUnitTypeName)("red-blood").unitDefaultColor.baseColor),actionType:"switch-create-red-blood"},{color:(0,o.getNotTransparent)((0,n.getUnitTypeByUnitTypeName)("black-oil").unitDefaultColor.baseColor),actionType:"switch-create-black-oil"},{color:(0,o.getNotTransparent)((0,n.getUnitTypeByUnitTypeName)("rock-hard").unitDefaultColor.baseColor),actionType:"switch-create-rock-hard"},{color:(0,o.getNotTransparent)((0,n.getUnitTypeByUnitTypeName)("wood-wall").unitDefaultColor.baseColor),actionType:"switch-create-wood-wall"},{color:4278190335,actionType:"switch-remove"},{color:(0,o.getNotTransparent)((0,n.getUnitTypeByUnitTypeName)("yellow-flame").unitDefaultColor.baseColor),actionType:"switch-ignite"}];i=4,r=4,a=t,s=e,u.forEach((function(t){l.drawRectangleOnLayer(l.layers[0],t.color,a,s,i,i,t.actionType),s+=i+r}))},t.prototype.drawUI=function(){this.drawCreationMenu(0,0)},t.prototype.handleClickDown=function(t){this.setMousePosition(t),this.isMouseDown=!0},t.prototype.handleClickUp=function(t){this.setMousePosition(t),this.isMouseDown=!1},t.prototype.collectActions=function(){var t=this;if(this.isMouseDown){for(var e=this.mouseUIPosition.x,i=this.mouseUIPosition.y,n=!1,o=function(o){var a=r.layers[o];if(!a.actionToPixels||null===a.actionToPixels)return"continue";var s=!1,l=!1;if(e>=a.pixelsLayer.x&&e<a.pixelsLayer.x+a.pixelsLayer.width&&(s=!0),i>=a.pixelsLayer.y&&i<a.pixelsLayer.y+a.pixelsLayer.height&&(l=!0),!s||!l)return"continue";var u=e-a.pixelsLayer.x,h=i-a.pixelsLayer.y,d=a.actionToPixels[u][h];if(d){var y=r.findAction(d);r.eventsStack.push((function(){return y(t.mousePosition)})),n=!0}},r=this,a=this.layers.length-1;a>=0;a--)o(a);if(!n){var s=this.findAction("default-action");this.eventsStack.push((function(){return s(t.mousePosition)}))}}var l=this.eventsStack;return this.eventsStack=[],l},t}();e.UI=r},900:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.Unit=void 0;var n=i(987),o=i(527),r=function(){function t(t,e,i,r){if(void 0===e&&(e=null),void 0===i&&(i=0),void 0===r&&(r=null),this.isUpdated=!1,this.unitTypeName=t,this.unitVelocityVector=e,this.unitId=i,r)this.unitState=r;else{var a=(0,n.getUnitTypeByUnitTypeName)(t),s=a.unitDefaultColor,l=a.unitDefaultHealth,u=a.unitDefaultFlameSustainability,h=a.unitDefaultFireHP,d=(0,o.getRandomInt)(s.minRandomColor,s.maxRandomColor),y=(15&s.colorShiftNumbers)>>3,f=(240&s.colorShiftNumbers)>>4>>3,c=(3840&s.colorShiftNumbers)>>8>>3,p=d*y+d*Math.pow(16,2)*f+d*Math.pow(16,4)*c,m=s.baseColor+p;this.unitState={unitHealth:l,unitIsOnFire:!1,unitColor:m,unitDecalColor:0,flameSustainability:u,fireHP:h}}}return t.prototype.getUnitType=function(){return(0,n.getUnitTypeByUnitTypeName)(this.unitTypeName)},t.prototype.toJson=function(){var t={h:this.unitState.unitHealth,f:Number(this.unitState.unitIsOnFire),c:this.unitState.unitColor,d:this.unitState.unitDecalColor,s:this.unitState.flameSustainability,j:this.unitState.fireHP},e={n:this.unitTypeName,i:this.unitId,s:t};return this.unitVelocityVector&&(e.v={s:this.unitVelocityVector.startPoint,e:this.unitVelocityVector.endPoint}),e},t}();e.Unit=r},273:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.Renderer=void 0;var n=i(527),o=function(){function t(t){var e=this;this.pixelSize=1,this.wallColor=4278190080,this.layersMapping={physics:0,ui:1,crosshair:2},this.layers=[],this.lastFrameTime=(new Date).getTime(),this.getScreenSizeX=function(){return e.width},this.getScreenSizeY=function(){return e.height},this.getPixelsCount=function(){return e.width*e.height/Math.pow(e.pixelSize,2)},this.getPixelSize=function(){return e.pixelSize},this.getLastFrameTime=function(){return e.lastFrameTime},this.canvas=t,this.width=this.canvas.width,this.height=this.canvas.height,this.desiredWidth=this.canvas.width,this.desiredHeight=this.canvas.height,this.ctx=this.canvas.getContext("2d")||new CanvasRenderingContext2D,this.imageData=this.ctx.createImageData(this.width,this.height),this.realPixels=new Uint32Array(this.imageData.data.buffer),this.virtualPixels=new Uint32Array(this.width/this.pixelSize*(this.height/this.pixelSize)),this.initLayers()}return t.prototype.initLayers=function(){this.layers.push({width:this.width/this.pixelSize,height:this.height/this.pixelSize,x:0,y:0,pixels:new Uint32Array(this.width/this.pixelSize*(this.height/this.pixelSize))})},t.prototype.setLayerPixels=function(t,e){var i=this.layersMapping[t];void 0!==i&&(this.layers[i].pixels=e)},t.prototype.updateLayerPosition=function(t,e,i){var n=this.layersMapping[t];void 0!==n&&(this.layers[n].x=e,this.layers[n].y=i)},t.prototype.updateLayerSize=function(t,e,i){var n=this.layersMapping[t];void 0!==n&&(this.layers[n].width=e,this.layers[n].height=i)},t.prototype.updateLayer=function(t,e){var i=this.layersMapping[t];void 0!==i&&(this.layers[i].width=e.width,this.layers[i].height=e.height,this.layers[i].x=e.x,this.layers[i].y=e.y,this.layers[i].pixels=e.pixels)},t.prototype.setScreenSize=function(t,e){this.desiredWidth=t,this.desiredHeight=e,this.width=Math.floor(t/this.pixelSize)*this.pixelSize,this.height=Math.floor(e/this.pixelSize)*this.pixelSize,this.canvas.width=this.width,this.canvas.height=this.height,this.imageData=this.ctx.createImageData(this.width,this.height),this.realPixels=new Uint32Array(this.imageData.data.buffer),this.virtualPixels=new Uint32Array(this.width/this.pixelSize*(this.height/this.pixelSize))},t.prototype.setPixelSize=function(t){this.pixelSize=t,this.setScreenSize(this.desiredWidth,this.desiredHeight)},t.prototype.getPixels=function(){return this.virtualPixels},t.prototype.setPixels=function(t){this.virtualPixels=t},t.prototype.blendPixelLayers=function(t,e,i){if(!t||0===t.length)return null;if(1===t.length)return t[0].pixels;for(var o=new Uint32Array(e*i),r=t.length-1;r>=0;r--){var a=t[r],s=a.width,l=a.height,u=a.x,h=a.y,d=0,y=0,f=0,c=0;u<0&&(d=-u),h<0&&(c=-h),l-i-c>0&&(f=i-l-c),s-e-d>0&&(y=i-l-c);for(var p=0+c;p<l-f;p++)for(var m=(l-1-p)*s,g=m+d;g<m+s-y;g++){var v=(i-(h+p)-1)*e+(u+(g-m)),S=o[v],P=a.pixels[g];null==S||0===S?o[v]=P:null!=P&&(o[v]=Number((0,n.mixColors)(P,S)))}}return o},t.prototype.render=function(t){var e=function(t,e,i,n){return(n-e-1)*i+t},i=this,n=i.width,o=i.height,r=i.pixelSize,a=i.realPixels,s=i.virtualPixels,l=i.ctx,u=i.imageData,h=i.lastFrameTime;performance.mark("start");for(var d=n/r,y=o/r,f=0;f<y;f++)for(var c=f*r,p=0;p<d;p++)for(var m=p*r,g=s[e(p,f,d,y)],v=0;v<r;v++)for(var S=m+v,P=0;P<r;P++){a[e(S,c+P,n,o)]=g}l.putImageData(u,0,0),performance.mark("end");var x=performance.measure("Measurement","start","end");1e3/(performance.now()-h)==1/0&&(this.lastFrameTime=performance.now()),l.font="10px serif",l.fillStyle="red",l.fillText("FPS: ".concat(String(1e3/(performance.now()-h)).slice(0,6)),0,10),l.fillText("render: ".concat(String(x.duration).slice(0,4)),0,30),this.lastFrameTime=performance.now()},t}();e.Renderer=o},527:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.getNotTransparent=e.mixColors=e.getRandomInt=void 0;e.getRandomInt=function(t,e){var i=Math.ceil(t),n=Math.floor(e);return Math.floor(Math.random()*(n-i+1))+i};e.mixColors=function(t,e){var i=Number(BigInt(e)>>BigInt(24));if(255===i)return e;var n=Number(BigInt(t)>>BigInt(24))/255,o=i/255,r=Number(BigInt(t)&BigInt(16777215)),a=Number(BigInt(e)&BigInt(16777215)),s=(1-n)*o+n,l=function(t,e,i,n,o){return Math.round(((1-i)*n*e+i*t)/o)||0},u=(65280&r)>>8,h=(16711680&r)>>16,d=(65280&a)>>8,y=(16711680&a)>>16,f=l(255&r,255&a,n,o,s),c=l(u,d,n,o,s),p=(l(h,y,n,o,s)<<16)+(c<<8)+f;return(BigInt(Math.round(255*s))<<BigInt(24))+BigInt(p)};e.getNotTransparent=function(t){return 4278190080+(16777215&t)}}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,i),r.exports}i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};!function(){i(213);var t=new(i(844).App);t.setScreenSize(document.body.offsetWidth,document.body.offsetHeight),t.setPixelSize(6),t.start()}()}();