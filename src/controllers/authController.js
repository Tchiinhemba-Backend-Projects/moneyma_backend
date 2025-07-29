class AuthController {
    async login(req, res) {
        const { userEmail, userPassword } = req.body;

        console.log(userEmail);
        console.log(userPassword);

        try {
            if (userEmail == "eladio@example.com" && userPassword == "123456") {
                res.status(200).json({ message: "Successfull Login - from server" })
            }

            res.status(401).json({message: "Invalid Credentials"});

        } catch (error) {
            console.error("Login Error", error);
            res.status(500).json({ message: "Server Error" });
        }
    }

    async register(req, res) {
        const { userFirstName, userLastName, userBiNumber, userEmail, userPassword } = req.body;

        console.log(req.body)

        try {
            res.status(200).json({ message: "Successfull registered" });
        } catch (error) {
            res.status(500).json({ message: "Error try register user!" });
        }
    }
}

export default new AuthController();