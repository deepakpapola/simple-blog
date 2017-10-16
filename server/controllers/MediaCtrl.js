import FroalaEditor from '../../node_modules/wysiwyg-editor-node-sdk/lib/froalaEditor.js';

module.exports = {
  //add user  admin panel              /////////////////////////////////////////////////
  imgUpload : (req,res) => { 
    console.log('imgae upload route hit');
    
    var options = {
      validation: {
        'allowedExts': ['gif', 'jpeg', 'jpg', 'png', 'svg', 'blob'],
        'allowedMimeTypes': ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/x-png', 'image/png', 'image/svg+xml']
      }
    }
    // Store image.
    FroalaEditor.Image.upload(req, '../uploads/images/', options,(err, data)=> {
    // Return data.
    if (err) {
        console.log('error while img upld',err);
        return res.send(JSON.stringify(err));
    }
    console.log('image saved to ',data);
    res.send(data);
    });
      
  },

  imgDelete: (req,res) => { 
    console.log('imgae delte route hit');
    FroalaEditor.Image.delete(req.body.src,(err) =>{
      
      if (err) {
        return res.status(404).end(JSON.stringify(err));
      }
      console.log('image delted from editr& server');
      return res.send({success:true});
    });
  },

  fileUpload: (req,res) => { 
    console.log('file upload route hit');

    var options = {
      validation: {
        'allowedExts': ['txt', 'pdf', 'doc'],
        'allowedMimeTypes': ['text/plain', 'application/msword', 'application/x-pdf', 'application/pdf']
      }
    }
    FroalaEditor.File.upload(req, '../uploads/files/', options,(err,data) =>{
      
      if (err) {
        return res.send(JSON.stringify(err));
      }
      console.log('file saved to ',data);
      res.send(data);
    });
  },

  fileDelete: (req,res) => { 
    console.log('file upload route hit');
    FroalaEditor.File.delete(req.body.src,(err) =>{
      
      if (err) {
        return res.status(404).end(JSON.stringify(err));
      }
      console.log('file delted from editr & server');
      return res.send({success:true});
    });
  },
}