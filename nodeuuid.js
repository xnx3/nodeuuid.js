/*
	将页面中的所有node节点，生成其在当前页面的唯一标识字符串uuid
	开源仓库： https://github.com/xnx3/nodeuuid.js
	原理： 当前节点的nodeName + 当前节点在父节点下，属于第几个 tagName ，然后追个向父级进行取，将node本身+父级+父父级+.... 拼接在一起
*/
var nodeuuid = {
	index:function(node){
		var parent = node.parentNode;
        if(parent == null){
          return '';
        }
        // 使用querySelectorAll()方法获取所有与node元素相同标签名的子节点
        var children = parent.querySelectorAll(node.tagName);
        // 使用indexOf()方法获取node元素在子节点集合中的位置
        var index = Array.prototype.indexOf.call(children, node);
        if(typeof(node.tagName) == 'undefined'){
        	//console.log(node.nodeName+'==='+node.parentNode.nodeName);
        }
        //console.log('--------'+node.tagName);
        return node.nodeName + "" + (index+1);
	},
	uuid:function(node){
		var uuid = '';
		var n = node;
		while(n != null){
			var id = nodeuuid.index(n);
			//console.log(id);
			if(id != ''){
				if(uuid != ''){
					uuid = '_'+uuid;
				}
				uuid = id + uuid;
			}
			//console.log(uuid)
			n = n.parentNode;
		}
		return uuid;
	}
}