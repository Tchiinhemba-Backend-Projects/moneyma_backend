class AuthController {
    async login(req, res) {
        const { userEmail, userPassword } = req.body;

        try {
            res.status(200).json({ message: "Successfull Login" })
        } catch (error) {
            res.status(500).json({ message: "Auth Error" });
        }
    }

    async register(req, res) {
        const { userEmail, userPassword } = req.body;

        try {
            res.status(200).json({ message: "Successfull registered" });
        } catch (error) {
            res.status(500).json({ message: "Error try register user!" });
        }
    }
}

export default new AuthController();