Template['views_children'].rendered = function(){
	var template = this;
	Meta.setSuffix(TAPi18n.__("dapp.parent.title"));
    
    /*boardroomInstance.numChildren(function(err, numChildren){
        if(err)
            return;
        
        numChildren = numChildren.toNumber(10);
        
        if(!numChildren)
            return;
        
        var importTo = numChildren - 1;
        
        if(importTo < 0)
            importTo = 0;
        
        Children.import(boardroomInstance.address, 0, importTo);
        Boards.update({address: boardroomInstance.address}, {$set: {numChildren: numChildren}}); 
        
    });
    
    console.log(Children.find({}).fetch());*/
	
	objects.defaultComponents.Family.totalMembers(boardroomInstance.address, function(err, totalMembers){
		TemplateVar.set(template, 'totalMembers', totalMembers.toNumber(10));
	});
};

Template['views_children'].helpers({
    'children': function(){
        //return Children.find({boardroom: boardroomInstance.address});
    }, 
});