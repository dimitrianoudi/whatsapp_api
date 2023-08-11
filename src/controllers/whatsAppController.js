const VerifyToken =  (req,res) => {
    res.send('hello verifyToken');
};

const ReceivedMessage =  (req,res) => {
    res.send('hello received message');
};

export default {
    VerifyToken,
    ReceivedMessage
}