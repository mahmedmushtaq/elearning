const createdClassFeatures = (paramsId)=> ([{
    // params Id is actually class id
    // class id may be joined class or created class id
    name:"Add New Video",
    _id:"1",

    path:"/created-classes-list/"+paramsId+"/add-new-video"
},{
    name:"Videos List",
    _id:"2",
    path:"/created-classes-list/"+paramsId+"/videos-list"
},{
    name:"Add Assignments",
    _id:"3",
    path:"/created-classes-list/"+paramsId+"/add-assignments"
},{
    name:"Assignments List",
    _id:"4",
    path:"/created-classes-list/"+paramsId+"/assignments-list"
},{
    name:"Delete Class",
    _id:"5",
    path:"/created-classes-list/"+paramsId+"/delete-class"
}]);

export default createdClassFeatures;