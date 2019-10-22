const socialItems = document.querySelectorAll('.contacts-list__item a');
const arrowDownIcon = document.querySelector('.form-container__title .icon');
const arrowDownIconData = arrowDownIcon.getAttribute('data-name');

const animationDataMap = {
    'arrow-down': {"v":"5.5.2","fr":60,"ip":0,"op":180,"w":24,"h":24,"nm":"arrow-down","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"arrow-down","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.725],"y":[0]},"t":150,"s":[100]},{"t":179,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[12,12,0],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[6,-3],[0,3],[-6,-3]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":60,"s":[50]},{"t":120,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":60,"s":[50]},{"t":120,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"#KEK","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[12,17],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"arrow","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[12,4],[12,20]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[1],"y":[0]},"t":0,"s":[0]},{"t":60,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.505],"y":[0]},"t":0,"s":[0]},{"t":60,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"arrow leg","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0}],"markers":[]},
    'github': {"v":"5.5.2","fr":30,"ip":0,"op":60,"w":24,"h":24,"nm":"github","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"github","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[12,12,0],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.673,0.695],[0,5.46],[0.963,1.011],[0.514,1.198],[2.73,-1.83],[2.292,-0.621],[0,0],[-0.456,-1.222],[-0.007,-1.406],[-3.14,-0.39],[-0.067,-0.954],[0,0]],"o":[[0,0],[0.076,-0.965],[3.14,-0.35],[0,-1.396],[0.456,-1.222],[0,0],[-2.292,-0.621],[-2.73,-1.83],[-0.514,1.198],[-0.97,1.019],[0,5.42],[-0.666,0.687],[0,0],[0,0]],"v":[[4.25,10.675],[4.25,6.805],[3.31,4.195],[9.75,-2.805],[8.25,-6.555],[8.16,-10.325],[4.25,-8.845],[-2.75,-8.845],[-6.66,-10.325],[-6.75,-6.555],[-8.25,-2.775],[-1.81,4.225],[-2.75,6.805],[-2.75,10.675]],"c":false},"ix":2},"nm":"body","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[70]},{"t":60,"s":[100]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":15,"s":[0]},{"t":60,"s":[-360]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[11.75,11.325],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"body","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[2,0.5]],"o":[[-5,1.5],[0,0]],"v":[[-2.75,7.675],[-9.75,4.675]],"c":false},"ix":2},"nm":"tail","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[0]},{"t":59,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[11.75,11.325],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"tail","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0}],"markers":[]},
    'instagram': {"v":"5.5.2","fr":30,"ip":0,"op":10,"w":128,"h":128,"nm":"instagram","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"instagram","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.3,"y":1},"o":{"x":0.3,"y":0},"t":0,"s":[64,64,0],"to":[0.889,1.056,0],"ti":[-0.889,-1.056,0]},{"t":10,"s":[69.333,70.333,0]}],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":0,"k":[400,400,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[17.5,6.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"light","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.259,-1.743],[2.185,-0.323],[0.325,2.185],[-2.186,0.324],[-0.389,-0.058]],"o":[[0.324,2.186],[-2.185,0.324],[-0.323,-2.185],[0.389,-0.058],[1.743,0.258]],"v":[[3.956,-0.719],[0.587,3.824],[-3.958,0.454],[-0.587,-4.09],[0.587,-4.09]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.3,"y":1},"o":{"x":0.3,"y":0},"t":0,"s":[12.043,12.09],"to":[-0.433,-0.486],"ti":[0.433,0.486]},{"t":10,"s":[9.443,9.175]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"lens","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.3,"y":1},"o":{"x":0.3,"y":0},"t":0,"s":[{"i":[[-0.259,-1.743],[2.185,-0.323],[0.325,2.185],[-2.186,0.324],[-0.389,-0.058]],"o":[[0.324,2.186],[-2.185,0.324],[-0.323,-2.185],[0.389,-0.058],[1.743,0.258]],"v":[[3.956,-0.719],[0.587,3.824],[-3.958,0.454],[-0.587,-4.09],[0.587,-4.09]],"c":true}]},{"t":10,"s":[{"i":[[-0.259,-1.743],[2.185,-0.323],[0.325,2.185],[-2.186,0.324],[-0.389,-0.058]],"o":[[0.324,2.186],[-2.185,0.324],[-0.323,-2.185],[0.389,-0.058],[1.743,0.258]],"v":[[3.956,-0.719],[0.587,3.824],[-3.958,0.454],[-3.233,-5.138],[1.714,-6.579]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.675],"y":[1]},"o":{"x":[0.43],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.185],"y":[0]},"t":3,"s":[10]},{"t":10,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.675],"y":[0.711]},"o":{"x":[0.43],"y":[0]},"t":0,"s":[50]},{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.185],"y":[1.03]},"t":3,"s":[60.932]},{"t":10,"s":[65]}],"ix":2},"o":{"a":0,"k":-40,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[12.043,12.09],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-31,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"lens back","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.761,0],[0,0],[0,-2.761],[0,0],[2.762,0],[0,0],[0,2.762],[0,0]],"o":[[0,0],[2.762,0],[0,0],[0,2.762],[0,0],[-2.761,0],[0,0],[0,-2.761]],"v":[[-5,-10],[5,-10],[10,-5],[10,5],[5,10],[-5,10],[-10,5],[-10,-5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"camera","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.3,"y":1},"o":{"x":0.3,"y":0},"t":0,"s":[12,12],"to":[-0.278,-0.556],"ti":[0.278,0.556]},{"t":10,"s":[10.333,8.667]}],"ix":2},"a":{"a":0,"k":[12,12],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.3],"y":[0]},"t":0,"s":[0]},{"t":10,"s":[18]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.3],"y":[0]},"t":0,"s":[0]},{"t":10,"s":[10]}],"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Camera","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.3,"y":0},"t":0,"s":[{"i":[[-2.761,0],[0,0],[0,-2.761],[0,0],[2.762,0],[0,0],[0,2.762],[0,0]],"o":[[0,0],[2.762,0],[0,0],[0,2.762],[0,0],[-2.761,0],[0,0],[0,-2.761]],"v":[[-5,-10],[5,-10],[10,-5],[10,5],[5,10],[-5,10],[-10,5],[-10,-5]],"c":true}]},{"i":{"x":0.3,"y":1},"o":{"x":0.167,"y":0.167},"t":5,"s":[{"i":[[-2.761,0],[0,0],[-0.043,-2.687],[0,0],[2.762,0],[0,0],[2.435,5.621],[0,0]],"o":[[0,0],[1.777,2.192],[0,0],[0,2.762],[0,0],[-3.548,0.072],[0,0],[0,-2.761]],"v":[[-5,-10],[6.161,-10.927],[9.88,-2.553],[10,5],[5,10],[-4.932,10.277],[-12.281,3.982],[-10,-5]],"c":true}]},{"t":10,"s":[{"i":[[-2.761,0],[0,0],[-0.058,-2.661],[0,0],[2.762,0],[0,0],[3.267,6.597],[0,0]],"o":[[0,0],[1.441,2.94],[0,0],[0,2.762],[0,0],[-3.816,0.096],[0,0],[0,-2.761]],"v":[[-5,-10],[5.828,-11.193],[9.839,-1.718],[10,5],[5,10],[-4.909,10.372],[-13.06,3.635],[-10,-5]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.3],"y":[0]},"t":0,"s":[28]},{"t":10,"s":[16]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.3],"y":[0]},"t":0,"s":[71]},{"t":10,"s":[74]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"camera","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[12,12],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.3],"y":[0]},"t":0,"s":[0]},{"t":10,"s":[18]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.3],"y":[0]},"t":0,"s":[0]},{"t":10,"s":[10]}],"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Camera back","np":1,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":10,"st":0,"bm":0}],"markers":[]},
    'mail': {"v":"5.5.8","fr":30,"ip":0,"op":20,"w":32,"h":32,"nm":"mail","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"mail","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.3,"y":1},"o":{"x":0.3,"y":0},"t":0,"s":[16,16,0],"to":[0,0.417,0],"ti":[0,-0.417,0]},{"t":15,"s":[16,18.5,0]}],"ix":2},"a":{"a":0,"k":[16,16,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-1.1,0],[0,0],[0,-1.1],[0,0]],"o":[[0,0],[0,-1.1],[0,0],[1.101,0],[0,0],[0,0]],"v":[[-7.046,3.799],[-7.046,-1.818],[-5.046,-3.818],[5.046,-3.818],[7.046,-1.818],[7.046,3.818]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13,"s":[36.444]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[30.667]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[26.889]},{"t":20,"s":[25]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13,"s":[63.056]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[69.583]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[72.111]},{"t":20,"s":[75]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.3,"y":1},"o":{"x":0.3,"y":0},"t":10,"s":[16,20.826],"to":[0,-1.104],"ti":[0,1.104]},{"t":20,"s":[16,14.201]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"letter","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.3,"y":1},"o":{"x":0.3,"y":0},"t":0,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[10,-3.5],[0,3.5],[-10,-3.5]],"c":false}]},{"t":15,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[9.188,-5.125],[0,-12.25],[-9.188,-5.125]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[16,13.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"envelop open","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[10,-3.5],[0,3.5],[-10,-3.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[16,13.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":2,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"envelop inside","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-1.1],[0,0],[1.1,0],[0,0],[0,1.1],[0,0],[-1.1,0]],"o":[[0,0],[1.1,0],[0,0],[0,1.1],[0,0],[-1.1,0],[0,0],[0,-1.1],[0,0]],"v":[[0,-8],[8,-8],[10,-6],[10,6],[8,8],[-8,8],[-10,6],[-10,-6],[-8,-8]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6,"s":[4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":8,"s":[12]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[13]},{"t":13,"s":[14]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6,"s":[96]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[90]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":8,"s":[88]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[87]},{"t":13,"s":[86]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[16,16],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"envelop","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":20,"st":0,"bm":0}],"markers":[]},
    'twitter': {"v":"5.5.2","fr":30,"ip":0,"op":120,"w":32,"h":32,"nm":"twitter","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"twitter","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48,0],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":0,"k":[400,400,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[2.052,2.922],[-9,-4],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-3.569,0.093],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[-8,-9.233],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":1,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[-1.375,-0.938],[3.25,-1],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-3.16,1.157],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[1.25,-1.546],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":2,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[-4.75,-0.375],[8.75,1.75],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-2.75,2.22],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[7.25,0.392],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":3,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[-1.375,-0.938],[3.25,-1],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-3.16,1.157],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[1.25,-1.546],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":4,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[2.052,2.922],[-9,-4],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-3.569,0.093],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[-8,-9.233],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":5,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[-1.375,-0.938],[3.25,-1],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-3.16,1.157],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[1.25,-1.546],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":6,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[-4.75,-0.375],[8.75,1.75],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-2.75,2.22],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[7.25,0.392],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":7,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[-1.375,-0.938],[3.25,-1],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-3.16,1.157],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[1.25,-1.546],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":8,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[2.052,2.922],[-9,-4],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-3.569,0.093],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[-8,-9.233],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[-1.375,-0.938],[3.25,-1],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-3.16,1.157],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[1.25,-1.546],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[-4.75,-0.375],[8.75,1.75],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-2.75,2.22],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[7.25,0.392],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]},{"t":11,"s":[{"i":[[-0.339,1.393],[1.122,-0.338],[1.866,-1.623],[-0.018,-1.318],[0,0],[-1.375,-0.938],[3.25,-1],[2.487,0.099],[0,11.5],[0.053,0.273]],"o":[[-0.958,0.675],[-1.624,-1.867],[-0.995,0.865],[0,0],[-3.16,1.157],[0,0],[-2.06,1.398],[9,5],[-0.001,-0.278],[1.02,-1.006]],"v":[[12,-10.233],[8.86,-8.703],[2.54,-9.144],[1,-5.703],[1,-4.703],[1.25,-1.546],[-3,3.767],[-10,5.767],[10,-5.733],[9.92,-6.563]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[11,13.233],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"twitter","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":12,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"wings moving","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":4,"s":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":16,"s":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":45,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":49,"s":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":92,"s":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":96,"s":[0]},{"t":120,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[15,18.5,0],"to":[1.214,0.036,0],"ti":[0.13,1.667,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":4,"s":[17.875,14.875,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":16,"s":[17.875,14.875,0],"to":[-1.188,-0.12,0],"ti":[0.484,-0.833,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[14.125,16.125,0],"to":[-0.331,0.57,0],"ti":[0.484,-0.833,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":45,"s":[14.125,16.125,0],"to":[-0.331,0.57,0],"ti":[0,-0.139,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49,"s":[16.625,21.125,0],"to":[0,0.139,0],"ti":[0,-0.139,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75,"s":[16.625,21.125,0],"to":[0,0.139,0],"ti":[0,0.139,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":80,"s":[16.625,17.792,0],"to":[0,-0.139,0],"ti":[0,0.139,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":92,"s":[16.625,17.792,0],"to":[0,-0.139,0],"ti":[-0.771,-0.023,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":96,"s":[15,18.5,0],"to":[1.214,0.036,0],"ti":[-0.771,-0.023,0]},{"t":120,"s":[15,18.5,0]}],"ix":2},"a":{"a":0,"k":[48,48,0],"ix":1},"s":{"a":0,"k":[25,25,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":12,"s":[0.367]}],"ix":2,"x":"var $bm_rt;\n$bm_rt = loopOut();"},"w":96,"h":96,"ip":0,"op":120,"st":0,"bm":0}],"markers":[]}
};


for (const socialItem of socialItems) {
    const icon = socialItem.querySelector('.icon');
    const iconData = icon.getAttribute('data-name');

    const iconInstance = lottie.loadAnimation({
        container: icon,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animationDataMap[iconData]
    });


    socialItem.addEventListener('mouseover', () => {
        iconInstance.play();
    });

    socialItem.addEventListener('mouseout', () => {
        iconInstance.stop();
    });
}

const arrowDownIconInstance = lottie.loadAnimation({
    container: arrowDownIcon,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationDataMap[arrowDownIconData]
});