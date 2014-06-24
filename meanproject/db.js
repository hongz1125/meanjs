var mongoose = require('mongoose');    //引用mongoose模块
var Schema   = mongoose.Schema;





//设置对象属性
var blogSchema = new Schema({
	title:String,
	author:String,
	id:Number
});


//设置对象模型
mongoose.model( 'blogModel', blogSchema );
mongoose.connect( 'mongodb://localhost/test' ); //创建一个数据库连接
/*
数据库操作范例
//设置对象属性
var blogSchema = new Schema({
	title:String,
	author:String
});
//设置对象模型
var blogModel = mongoose.model('blogModel',blogSchema);	

//增加数据
blogModel.create({title:"lisha"},function(err,docs){
	console.log("成功 新增数据",docs,";");
	if (err){
		console.log("失败 数据保存;");
	};
	res.redirect( '/' );//操作成功路由
});
//删除数据
blogModel.remove({title: 'lisha123'},function(err,docs){
	console.log("成功 删除",docs,"个;");
	if (err){
		console.log("失败 数据删除;");
	};
	res.redirect( '/' );//操作成功路由
});
//修改数据
//multi:Boolean   是否修改全部匹配对象
blogModel.update({title: 'ie'},{title:'chrome'},{multi :true},function(err,docs){
	console.log("成功 修改",docs,"个;");
	if (err){
		console.log("失败 数据修改;");
	};
	res.redirect( '/' );//操作成功路由
});
//查询数据
blogModel.find({title: 'lisha'},function(err,docs){
	console.log("成功 查询",docs.length,"个;");
	if (err){
		console.log("失败 数据查询;");
	};
	res.redirect( '/' );//操作成功路由
})
*/





/*
	//mongodb 数据类型 举例：
	var ExampleSchema = new Schema({
	  name:String,
	  binary:Buffer,
	  living:Boolean,
	  updated:Date,
	  age:Number,
	  mixed:Schema.Types.Mixed, //该混合类型等同于nested
	  _id:Schema.Types.ObjectId,  //主键
	  _fk:Schema.Types.ObjectId,  //外键
	  array:[],
	  arrOfString:[String],
	  arrOfNumber:[Number],
	  arrOfDate:[Date],
	  arrOfBuffer:[Buffer],
	  arrOfBoolean:[Boolean],
	  arrOfMixed:[Schema.Types.Mixed],
	  arrOfObjectId:[Schema.Types.ObjectId]
	  nested:{
		stuff:String,
	  }
	});
*/




