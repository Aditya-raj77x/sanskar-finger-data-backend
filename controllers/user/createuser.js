const usertable = require("../../Models/usertable.js");
const createuser = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            fingerprint_key1,
            fingerprint_img1,
            fingerprint_key2,
            fingerprint_img2,
            fingerprint_key3,
            fingerprint_img3,
            fingerprint_key4,
            fingerprint_img4,
            fingerprint_key5,
            fingerprint_img5,
        } = req.body;

        // Validate required fields
        if (!first_name) {
            return res.status(400).send({ status: "failed", message: "First name is required." });
        }

        const createuser = new usertable({
            first_name,
            last_name,
            fingerprint_key1,
            fingerprint_img1,
            fingerprint_key2,
            fingerprint_img2,
            fingerprint_key3,
            fingerprint_img3,
            fingerprint_key4,
            fingerprint_img4,
            fingerprint_key5,
            fingerprint_img5,
        });

        const response = await createuser.save();

        res.status(201).send({ status: "successful", data: response });
    } catch (errors) {
        console.error("Error creating user:", errors);
        res.status(500).send({ status: "failed", errors: errors.message });
    }
};

module.exports = createuser;