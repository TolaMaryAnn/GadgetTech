import data from "./data";



// api/trending
export default function handler(req,res){
    const {Popular} = data;

    if(Popular)return res.status(200).json(Popular)
    return res.status(404).json({error:'Data not Found'})
}