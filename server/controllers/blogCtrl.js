module.exports = {
    //get all blogs

    // getUsers: (req,res) => { // console.log('get all users func');
    //     User.find({},'name email ._id date',(err,users) => {
    //         if(err)
    //             return done(err)
    //         res.send(users);
    //         return;
    //     })
    // },
    //add user
    addBlog : (req,res) => { console.log(req.body);
        
    },

    // //edit user
    // editUser: (req,res) =>  {
    //     let id = req.params.id; console.log('edit=========',req.body);
    //     User.findByIdAndUpdate({_id : id},{$set:req.body},(err, result) => {
    //         if(err)
    //             throw(err);
    //         let content = {
    //             success:true,
    //             message:'user updated'
    //         };console.log('update');
    //         res.send(content);
    //         return;
    //     });
    // },

    //delete user
    // delete:(req,res) => {
    //     let id=req.params.id; console.log(id);
    //     User.findByIdAndRemove(id, (err) => {
    //         if(err)
    //             return done(err);
    //         let content = {
    //             success:true,
    //             message:'user deleted'
    //         };console.log('deleted');
    //         res.send(content);
    //         return;
    //     })
    // }
}
