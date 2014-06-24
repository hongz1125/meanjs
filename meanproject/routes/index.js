var mongoose = require( 'mongoose' );
var blogModel = mongoose.model( 'blogModel' );


exports.index = function(req, res, next){
	blogModel.find().sort("-_id").limit(10).exec(function(err,docs){
		var blogData= {blogData:docs};
		//console.log(blogData);
		res.render("index",blogData);
		if (err){console.log("失败 数据查询;");}
	})
}


exports.add = function(req, res, next){
	blogModel.find().sort("-id").limit(1).exec(function(err,docs){
		//console.log(docs);
		var id = docs[0].id + 1;
		blogModel.create({title:req.body.title,id:id},function(err,docs){
			console.log("成功 新增数据",docs,";");
			if (err){
				console.log("失败 数据保存;");
			}
			res.redirect( '/' );	
		});
	});
	
}
exports.update = function(req, res, next){
	blogModel.update({id: req.body.id},{title:req.body.title},function(err,docs){
		console.log("成功 修改",docs,"个;");
		if (err){
			console.log("失败 数据修改;");
		}
		res.redirect( '/' );
	});
}

exports.remove = function(req, res, next){
	blogModel.remove({id: req.body.id},function(err,docs){
		console.log("成功 删除",docs,"个;");
		if (err){
			console.log("失败 数据删除;");
		};
		res.redirect( '/' );//操作成功路由
	})
}












