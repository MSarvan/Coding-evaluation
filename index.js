const mongoose = require("mongoose");

const express = require("express");

const app = express();

app.use(express.json());

const connect = ()=> {
    return mongoose.connect("mongodb+srv://saro:saro_123@cluster0.0e5zr.mongodb.net/test");
}

app.listen(2347, async ()=> {
    await connect();
    console.log("listening on port 2347");
});

const userdet = new mongoose.Schema(
    {
        first_name: {type: String, required: true},
        middle_name: {type: String, required: false},
        last_name: {type: String, required: true},
        email: {type: String, required: true},
        address: {type: String, required: true},
        age: {type: Number, required: true},
        gender: {type: String, required: false, default: "Male"}
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

const User = mongoose.model("users", userdet);

app.post("/details", async (req, res)=> {
    try 
    {
        const det = await User.create(req.body);
        return res.status(200).send(det);
    }
    catch(e)
    {
        return res.status(500).send(e.message);
    }
});

app.get("/details", async (req, res)=> {
    try 
    {
        const det = await User.find().lean().exec();
        return res. status(200).send(det);
    }
    catch(e)
    {
        return res.status(500).send(e.message);
    }
});

app.get("/details/:id", async (req, res)=> {
    try 
    {
        const det = await User.findById(req.params.id).lean().exec();
        return res. status(200).send(det);
    }
    catch(e)
    {
        return res.status(500).send(e.message);
    }
});

app.patch("/details/:id", async (req, res)=> {
    try 
    {
        const det = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        .lean()
        .exec();
        return res. status(200).send(det);
    }
    catch(e)
    {
        return res.status(500).send(e.message);
    }
});

app.delete("/details/:id", async (req, res)=> {
    try 
    {
        const det = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res. status(200).send(det);
    }
    catch(e)
    {
        return res.status(500).send(e.message);
    }
});


const branchdet = new mongoose.Schema(
    {
        name: {type: String, required: true},
        address: {type: String, required: true},
        IFSC: {type: String, required: true},
        MICR: {type: String, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

const Branch = mongoose.model("branches", branchdet);

