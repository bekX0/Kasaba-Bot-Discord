import members_Schema from "./members_Schema.js";


export const fetch= async (member_id) =>{
    let member_db = await members_Schema.findOne({member_id})

    if(member_db) return member_db
    else{
        member_db = new members_Schema({
            member_id
        })
        await member_db.save()
        return member_db
    }
}

export const update = async (member_id, update_value) =>{
    await members_Schema.updateOne({member_id}, update_value ,{upsert:true})
}

export const deleteOne = async (member_id) => {
    let member_db = await members_Schema.findOne({member_id})

    if(member_db) await members_Schema.deleteOne({member_id})
    
}