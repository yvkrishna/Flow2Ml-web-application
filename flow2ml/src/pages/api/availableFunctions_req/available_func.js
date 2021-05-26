import { connectToDatabase } from "../../../../utils/mongodb_setup";

export default async (req,res) => {

      const getDetails = async (funcType) => {
        const { db } = await connectToDatabase();

        const page_data = await db
            .collection("documentation")
            .findOne({type: funcType})

        return page_data;
      }

      var page_data = await getDetails(req.body.type);

    if(page_data){
        res.send({
            is_data_found:true,
            page_data:page_data
        })
    }else{
        res.send({
            is_data_found:false,
            page_data:null
        })
    }
}