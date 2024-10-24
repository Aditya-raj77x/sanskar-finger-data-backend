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

        res.send({ status: "sucessful", data: response });
    } catch (errors) {
        res.send({ status: "faild", errors: errors });
        console.log("faild", errors);
    }
};

module.exports = createuser;