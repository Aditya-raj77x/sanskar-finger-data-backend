const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        first_name: {
            type: String,
            required: false,
        },
        last_name: {
            type: String,
            required: false,
        },


        status: {
            type: String,
            default: "Active"
        },
        fingerprint_img1: {
            type: String,
            required: false,
        },
        fingerprint_key1: {
            type: String,
            required: false,
        },
        fingerprint_img2: {
            type: String,
            required: false,
        },
        fingerprint_key2: {
            type: String,
            required: false,
        },
        fingerprint_img3: {
            type: String,
            required: false,
        },
        fingerprint_key3: {
            type: String,
            required: false,
        },
        fingerprint_img4: {
            type: String,
            required: false,
        },
        fingerprint_key4: {
            type: String,
            required: false,
        },
        fingerprint_img5: {
            type: String,
            required: false,
        },
        fingerprint_key5: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

const Usertable = mongoose.model("Usertable", userSchema);
module.exports = Usertable;