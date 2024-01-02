import mongoose from "mongoose";

const connect = async() => {
    try {
        await mongoose.connect("mongodb+srv://prasadgawade249:Pggawade1@cluster0.ijsi8rn.mongodb.net/todoretryWrites=true&w=majority")
        console.log("database connected")
    } catch (error) {
        console.log("connection error", error)
    }

}

export default connect