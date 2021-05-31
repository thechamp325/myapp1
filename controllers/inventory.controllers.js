const groupsData = require('../models/Groupdata');
const productData = require('../models/ProductData');

const addGroups = async (req,res,next) => {
    console.log("Here");

    try {

        await req.body.data.uds.map(async ud => {
            let newEntry = new groupsData(ud);
            newEntry = await newEntry.save();
        });
        res.status(200).send('OK');
    } catch (err) {
        next(err);
    }
};

const addItemsToGroups = async (req,res,next) => {
//    const cart = {
//        address: req.body.data.address,
//        items:req.body.data.items
//    }
    try{
        let data = await groupsData.findOneAndUpdate({name: req.body.data.name}, { $push: { 
            items: req.body.data.items
          } 
  });
        console.log(data);
        res.status(200).json(data);
    }
    catch (err){
        next(err);
    }
    // try {
    //     await req.body.data.items.map(async ud => {
    //         let newEntry = new groupsData(ud);
    //         newEntry = await newEntry.save();
    //     });
    //     res.status(200).send('OK');
    // } catch (err) {
    //     next(err);
    // }
};

const getGroupItems = async (req,res,next) => {
    const id = req.params.id;
    if(id=="all"){
        try{
            let data = await groupsData.find();
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }
    }
    else{

        try{
            let data = await groupsData.find({name:id});

            // let result =await productData.find({productName:data[0].items[0].name})
            // result = [];
            // result.push(await data[0].items.map(async ud =>{
            //     let data= await productData.find({productName:ud.name});
            //     console.log(data);
            // }));

            console.log(data[0].items);
            const result = await data[0].items.map(async ud => {
               return productData.find({productName:ud.name})
            });
            const out = await Promise.all(result)
            console.log(out);
            // senddata.push(await formatData(data[0].items));
            res.status(200).json(out);


        }
        catch (err){
            next(err);
        }

    }
    }

    const formatData= async (items) => {
        const result = await items.map(async ud => ({
            data1 :await productData.find({productName:ud.name})
        }));
        return result;
      };


const getAllGroups = async (req,res,next) => {
    const id = req.params.id;
    if(id=="all"){
        try{
            let data = await groupsData.find();
           
            // console.log(data.items.length);
           console.log(data);
           var d = [];
           data.map(group => {
               d.push({
                   name: group.name,
                   count: group.items.length
               })
           })
           
            res.status(200).json(d);
        }
        catch (err){
            next(err);
        }
    }
    else{
        try{
            let data = await groupsData.find({name:id});
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }
    }
    }


module.exports = {
    
   addGroups,
   addItemsToGroups,
   getGroupItems, //pass grp name as param else return all items
   getAllGroups, // can pass param
};

