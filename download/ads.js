if(jQuery){
	jQuery.extend({
		gsa: function(p, calback, callback2){
			p = p || {};
			jQuery.ajax({
				url:'https://cuuam.gosu.vn/home/ads/statistic.html',
				type:'get',
				data:{
					position:p.position,
					type:p.type,
					object:p.object,
					from:p.from,
					target:p.target
				}
			}).success(function(resp){
				if(calback && typeof(calback)=='function'){
					calback(resp);
				}
			}).complete(function(resp){
				if(callback2 && typeof(callback2)=='function'){
					callback2(resp);
				}
			})	
		}
	});
} else {
	console.log('jQuery is not available');
}