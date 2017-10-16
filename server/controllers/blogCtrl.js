import Blogs from '../schema/bloges';

module.exports = {
    //get all blogs

    getBlogs: (req,res) => {  console.log('get all blogs rout hit');
        Blogs.find({},(err,blogs) => {
            if(err)
                return done(err)
            res.send(blogs);
            return;
        })
    },
            //add user  admin panel   
    addBlog : (req,res) => {
        console.log('add blog route hit and data is ',req.body);
        
        var {title,en} = req.body;

        var newBlog = new Blogs({title,en});
        newBlog.save((err) => {
            if(err) {
                console.log('error while add new blog',err);
                res.send({ success:false, message:'Error while uploading,Try again' })
            } else {
                console.log('new blog added');
                res.send({ success:true, message:'New blog uploaded ' });
            }
            return;
        })
    }

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
